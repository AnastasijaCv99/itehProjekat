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

    public function tableDesk()
	{
		return $this->belongsTo('App\Models\TableDesk');
	}

    public function reservation()
    {
        return $this->hasMany('App\Models\Reservation');
    }
}
