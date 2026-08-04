<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'phone_number',
        'email',
        'service_name',
        'service_id',
        'preferred_date',
        'preferred_time',
        'additional_notes',
        'status',
    ];

    protected $casts = [
        'preferred_date' => 'date',
    ];

    /**
     * A booking belongs to a specific service.
     */
    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}
