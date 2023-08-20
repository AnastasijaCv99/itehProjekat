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

    public function cafe()
	{
		return $this->belongsTo('App\Models\Cafe');
	}

    public function reservation()
    {
        return $this->hasMany('App\Models\Reservation');
    }

}
