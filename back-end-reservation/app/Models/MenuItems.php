<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItems extends Model
{
    use HasFactory;
    public $table = "menu_items";

    protected $fillable = [
        'drink_food_title',
        'ingredients',
        'price',
        'menu_id'
    ];

    public function menu()
	{
		return $this->belongsTo('App\Models\Menu');
	}
}
