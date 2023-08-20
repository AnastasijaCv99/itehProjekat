<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItems extends Model
{
    use HasFactory;
    public $table = "menu_items";

    protected $fillable = [
        'drinkFoodTitle',
        'ingredients',
        'price',
    ];

    public function menu()
	{
		return $this->belongsTo('App\Models\Menu');
	}
}
