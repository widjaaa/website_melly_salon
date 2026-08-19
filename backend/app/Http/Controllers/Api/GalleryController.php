<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

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
            'image_url' => 'nullable|file|image|max:2048',
            'category' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $validated = $request->all();

        if ($request->hasFile('image_url')) {
            $path = $request->file('image_url')->store('galleries', 'public');
            $validated['image_url'] = url(Storage::url($path));
        }

        $gallery = Gallery::create($validated);

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
            'image_url' => 'nullable|file|image|max:2048',
            'category' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $validated = $request->all();

        if ($request->hasFile('image_url')) {
            // Hapus gambar lama jika ada
            if ($gallery->image_url && str_contains($gallery->image_url, '/storage/')) {
                $oldPath = str_replace(url('/storage') . '/', '', $gallery->image_url);
                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->delete($oldPath);
                }
            }
            
            $path = $request->file('image_url')->store('galleries', 'public');
            $validated['image_url'] = url(Storage::url($path));
        } else {
            // Jika tidak ada gambar baru, hindari nulling field
            if (array_key_exists('image_url', $validated) && $validated['image_url'] === null) {
                unset($validated['image_url']);
            }
        }

        $gallery->update($validated);

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
        // Hapus file gambar terkait
        if ($gallery->image_url && str_contains($gallery->image_url, '/storage/')) {
            $oldPath = str_replace(url('/storage') . '/', '', $gallery->image_url);
            if (Storage::disk('public')->exists($oldPath)) {
                Storage::disk('public')->delete($oldPath);
            }
        }

        $gallery->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Gallery item deleted successfully.'
        ]);
    }
}
