<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();

            // Customer Information
            $table->string('full_name');
            $table->string('phone_number', 20);
            $table->string('email');

            // Service Information
            $table->string('service_name');
            $table->foreignId('service_id')->nullable()->constrained('services')->onDelete('set null');

            // Appointment Schedule
            $table->date('preferred_date');
            $table->string('preferred_time', 20);

            // Additional Notes
            $table->text('additional_notes')->nullable();

            // Booking Status
            $table->enum('status', ['pending', 'confirmed', 'cancelled', 'completed'])->default('pending');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};

