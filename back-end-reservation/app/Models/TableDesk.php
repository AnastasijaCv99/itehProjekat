<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TableDesk extends Model
{
    use HasFactory;
    public $table = "table_desk";

    protected $fillable = [
        'numberOfSeats',
    ];

    public function cafe(): BelongsTo
	{
		return $this->belongsTo(Cafe::class);
	}

    public function reservation(): HasMany
    {
        return $this->hasMany(Reservation::class);
    }

}
