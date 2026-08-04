<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Hair Treatment' => [
                ['name' => 'Haircut & Styling', 'price' => 150000, 'duration' => 60, 'description' => 'Professional haircut and styling.'],
                ['name' => 'Hair Spa', 'price' => 200000, 'duration' => 90, 'description' => 'Relaxing hair spa treatment.'],
                ['name' => 'Hair Coloring', 'price' => 450000, 'duration' => 120, 'description' => 'Full hair coloring.'],
            ],
            'Nail Art' => [
                ['name' => 'Basic Manicure', 'price' => 100000, 'duration' => 45, 'description' => 'Basic manicure and nail polish.'],
                ['name' => 'Gel Nail Art', 'price' => 250000, 'duration' => 90, 'description' => 'Premium gel nail art.'],
            ],
            'Wedding Packages' => [
                ['name' => 'Silver Wedding Package', 'price' => 5000000, 'duration' => 360, 'description' => 'Makeup and hair do for bride and 2 bridesmaids.'],
                ['name' => 'Gold Wedding Package', 'price' => 8000000, 'duration' => 480, 'description' => 'Full package for bride, groom, and families.'],
            ]
        ];

        foreach ($categories as $categoryName => $services) {
            $category = Category::create([
                'name' => $categoryName,
                'description' => 'All ' . strtolower($categoryName) . ' services.'
            ]);

            foreach ($services as $service) {
                Service::create([
                    'category_id' => $category->id,
                    'name' => $service['name'],
                    'slug' => Str::slug($service['name']),
                    'description' => $service['description'],
                    'price' => $service['price'],
                    'duration' => $service['duration'],
                    'image' => 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800', // Placeholder
                    'is_active' => true,
                ]);
            }
        }
    }
}
