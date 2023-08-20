<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    public $table = "reservations";

    protected $fillable = [
        'price',
    ];

    public function tableDesk(): BelongsTo
	{
		return $this->belongsTo(TableDesk::class);
	}

    public function reservation(): HasMany
    {
        return $this->hasMany(Reservation::class);
    }
}
