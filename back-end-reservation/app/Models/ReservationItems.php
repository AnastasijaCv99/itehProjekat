<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationItems extends Model
{
    use HasFactory;
    public $table = "reservation_items";

    protected $fillable = [
        'quantity',
        'final_price',
    ];

    public function reservation(): BelongsTo
	{
		return $this->belongsTo(Reservation::class);
	}
}
