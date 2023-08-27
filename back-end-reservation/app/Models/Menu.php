<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    public $table = "menus";

    protected $fillable = [
        'menu_name',
        'cafe_id',
    ];

    public function cafe()
	{
		return $this->belongsTo('App\Models\Cafe');
	}

    public function menuItems()
    {
        return $this->hasMany('App\Models\MenuItems');
    }
}
