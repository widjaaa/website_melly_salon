<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\JsonResponse;

class PublicServiceController extends Controller
{
    public function index(): JsonResponse
    {
        // Get all active categories with their active services
        $categories = Category::where('is_active', true)
            ->with(['services' => function ($query) {
                $query->where('is_active', true);
            }])
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => $categories
        ]);
    }
}
