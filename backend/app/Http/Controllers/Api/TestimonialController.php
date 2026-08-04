<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestimonialController extends Controller
{
    /**
     * Get approved testimonials (Public).
     */
    public function index()
    {
        $testimonials = Testimonial::where('is_approved', true)
                            ->orderBy('created_at', 'desc')
                            ->get();
                            
        return response()->json([
            'status' => 'success',
            'data' => $testimonials
        ]);
    }

    /**
     * Get all testimonials including unapproved (Admin).
     */
    public function adminIndex()
    {
        $testimonials = Testimonial::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 'success',
            'data' => $testimonials
        ]);
    }

    /**
     * Store a new testimonial (Admin or Public if they want to submit).
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'role' => 'nullable|string|max:255',
            'content' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'is_approved' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $data = $request->all();
        // If it's submitted from public frontend without auth, we might want to force it to false
        // For simplicity, we just use the request or default to true for admin.
        
        $testimonial = Testimonial::create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Testimonial added successfully.',
            'data' => $testimonial
        ], 201);
    }

    /**
     * Update a testimonial (Admin).
     */
    public function update(Request $request, Testimonial $testimonial)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'role' => 'nullable|string|max:255',
            'content' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'is_approved' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $testimonial->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Testimonial updated successfully.',
            'data' => $testimonial
        ]);
    }

    /**
     * Delete a testimonial (Admin).
     */
    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Testimonial deleted successfully.'
        ]);
    }
}
