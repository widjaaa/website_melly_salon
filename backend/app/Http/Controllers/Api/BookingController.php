<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookingController extends Controller
{
    /**
     * Store a new booking request.
     */
    public function store(Request $request): JsonResponse
    {
        // Validate incoming data
        $validator = Validator::make($request->all(), [
            'full_name'        => 'required|string|min:3|max:255',
            'phone_number'     => 'required|string|min:9|max:20',
            'service'          => 'required|string|max:255',
            'preferred_date'   => 'required|date|after_or_equal:today',
            'preferred_time'   => 'required|string|max:20',
            'additional_notes' => 'nullable|string|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Validation failed.',
                'errors'  => $validator->errors(),
            ], 422);
        }

        // Try to find the matching service in the database by name
        $service = Service::where('name', $request->service)
            ->where('is_active', true)
            ->first();

        // Create the booking record
        $booking = Booking::create([
            'full_name'        => $request->full_name,
            'phone_number'     => $request->phone_number,
            'service_name'     => $request->service,
            'service_id'       => $service?->id, // nullable if not found
            'preferred_date'   => $request->preferred_date,
            'preferred_time'   => $request->preferred_time,
            'additional_notes' => $request->additional_notes,
            'status'           => 'pending',
        ]);

        return response()->json([
            'status'  => 'success',
            'message' => 'Your booking request has been received! We will contact you shortly to confirm.',
            'data'    => [
                'id'            => $booking->id,
                'service_name'  => $booking->service_name,
                'preferred_date' => $booking->preferred_date->format('d F Y'),
                'preferred_time' => $booking->preferred_time,
                'status'        => $booking->status,
            ],
        ], 201);
    }

    /**
     * Get all bookings (Admin).
     */
    public function index()
    {
        $bookings = Booking::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 'success',
            'data' => $bookings
        ]);
    }

    /**
     * Update booking status (Admin).
     */
    public function updateStatus(Request $request, Booking $booking)
    {
        $validator = Validator::make($request->all(), [
            'status' => 'required|string|in:pending,confirmed,cancelled,completed'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        $booking->update(['status' => $request->status]);

        return response()->json([
            'status' => 'success',
            'message' => 'Booking status updated successfully',
            'data' => $booking
        ]);
    }
}
