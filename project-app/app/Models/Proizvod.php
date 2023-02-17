<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proizvod extends Model
{
    use HasFactory;
    protected $table = 'proizvod';
    protected $fillable = [
        'id',
        'naziv',
        'autor',
        'opis',
        'cena',
        'raspolozivaKolicina',
        'kategorija_id',
    ];

    public function kategorija()
    {
        return $this->belongsTo(Kategorija::class);
    }
    public function stavkaKorpe()
    {
        return $this->belongsTo(StavkaKorpe::class);
    }

}
