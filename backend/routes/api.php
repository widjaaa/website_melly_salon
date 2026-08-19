<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PublicServiceController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\GalleryController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\AuthController;

// Auth Routes (Admin)
Route::post('/login', [AuthController::class, 'login']);

// Admin Protected Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    // Admin CRUD Routes
    // Services
    Route::post('/services', [PublicServiceController::class, 'store']);
    Route::put('/services/{service}', [PublicServiceController::class, 'update']);
    Route::delete('/services/{service}', [PublicServiceController::class, 'destroy']);
    
    // Bookings
    Route::get('/admin/bookings', [BookingController::class, 'index']);
    Route::put('/admin/bookings/{booking}', [BookingController::class, 'updateStatus']);
    
    // Contacts
    Route::get('/admin/contacts', [ContactController::class, 'index']);
    Route::put('/admin/contacts/{contact}/read', [ContactController::class, 'markAsRead']);
    Route::delete('/admin/contacts/{contact}', [ContactController::class, 'destroy']);
    
    // Galleries
    Route::post('/galleries', [GalleryController::class, 'store']);
    Route::put('/galleries/{gallery}', [GalleryController::class, 'update']);
    Route::delete('/galleries/{gallery}', [GalleryController::class, 'destroy']);
    
    // Testimonials
    Route::get('/admin/testimonials', [TestimonialController::class, 'adminIndex']);
    Route::post('/testimonials', [TestimonialController::class, 'store']);
    Route::put('/testimonials/{testimonial}', [TestimonialController::class, 'update']);
    Route::delete('/testimonials/{testimonial}', [TestimonialController::class, 'destroy']);
});

Route::get('/services', [PublicServiceController::class, 'index']);
Route::get('/services/{service:slug}', [PublicServiceController::class, 'show']);
Route::post('/bookings', [BookingController::class, 'store']);
Route::post('/contacts', [ContactController::class, 'store']);
Route::get('/galleries', [GalleryController::class, 'index']);
Route::get('/testimonials', [TestimonialController::class, 'index']);
