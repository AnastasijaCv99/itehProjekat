<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    public $table = "menus";

    protected $fillable = [
        'menuName',
    ];

    public function cafe(): BelongsTo
	{
		return $this->belongsTo(Cafe::class);
	}

    public function menuItems(): HasMany
    {
        return $this->hasMany(MenuItems::class);
    }
}
