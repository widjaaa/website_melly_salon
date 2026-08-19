<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class PublicServiceController extends Controller
{
    public function index(): JsonResponse
    {
        // Get all active categories with their active services
        $categories = Category::where('is_active', true)
            ->with(['services' => function ($query) {
                $query->where('is_active', true)
                      ->select('id', 'category_id', 'name', 'slug', 'description', 'price', 'duration', 'image', 'is_active', 'is_featured');
            }])
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => $categories
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'duration' => 'required|integer',
            'image' => 'nullable|file|image|max:2048',
            'is_featured' => 'nullable|boolean',
        ]);

        $validated['slug'] = Str::slug($validated['name']) . '-' . uniqid();

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('services', 'public');
            $validated['image'] = url(Storage::url($path));
        }

        $service = Service::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Service created successfully',
            'data' => $service
        ], 201);
    }

    public function update(Request $request, Service $service): JsonResponse
    {
        $validated = $request->validate([
            'category_id' => 'sometimes|required|exists:categories,id',
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|required|numeric',
            'duration' => 'sometimes|required|integer',
            'image' => 'nullable|file|image|max:2048',
            'is_featured' => 'nullable|boolean',
        ]);

        if (isset($validated['name']) && $validated['name'] !== $service->name) {
            $validated['slug'] = Str::slug($validated['name']) . '-' . uniqid();
        }

        if ($request->hasFile('image')) {
            // Hapus gambar lama jika ada
            if ($service->image && str_contains($service->image, '/storage/')) {
                // Ekstrak path relatif (menghilangkan URL domain)
                $oldPath = str_replace(url('/storage') . '/', '', $service->image);
                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->delete($oldPath);
                }
            }
            
            $path = $request->file('image')->store('services', 'public');
            $validated['image'] = url(Storage::url($path));
        } else {
            // Jika tidak ada gambar baru, hapus 'image' dari array agar tidak ditimpa dengan null jika menggunakan FormData
            if (array_key_exists('image', $validated) && $validated['image'] === null) {
                unset($validated['image']);
            }
        }

        $service->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Service updated successfully',
            'data' => $service
        ]);
    }

    public function destroy(Service $service): JsonResponse
    {
        $service->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Service deleted successfully'
        ]);
    }

    public function show(Service $service): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'data' => $service->load('category')
        ]);
    }
}
