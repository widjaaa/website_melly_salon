<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Store a new contact message (Public).
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $contact = Contact::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Message sent successfully.',
            'data' => $contact
        ], 201);
    }

    /**
     * Get all contact messages (Admin).
     */
    public function index()
    {
        $contacts = Contact::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 'success',
            'data' => $contacts
        ]);
    }

    /**
     * Mark message as read (Admin).
     */
    public function markAsRead(Contact $contact)
    {
        $contact->update(['is_read' => true]);
        
        return response()->json([
            'status' => 'success',
            'message' => 'Message marked as read.',
            'data' => $contact
        ]);
    }

    /**
     * Delete a contact message (Admin).
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Message deleted successfully.'
        ]);
    }
}
