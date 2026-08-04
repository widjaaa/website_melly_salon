<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GalleryController extends Controller
{
    /**
     * Get all gallery items (Public & Admin).
     */
    public function index()
    {
        $galleries = Gallery::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 'success',
            'data' => $galleries
        ]);
    }

    /**
     * Store a new gallery item (Admin).
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'image_url' => 'required|url',
            'category' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $gallery = Gallery::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Gallery item added successfully.',
            'data' => $gallery
        ], 201);
    }

    /**
     * Update a gallery item (Admin).
     */
    public function update(Request $request, Gallery $gallery)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'image_url' => 'required|url',
            'category' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $gallery->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Gallery item updated successfully.',
            'data' => $gallery
        ]);
    }

    /**
     * Delete a gallery item (Admin).
     */
    public function destroy(Gallery $gallery)
    {
        $gallery->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Gallery item deleted successfully.'
        ]);
    }
}
