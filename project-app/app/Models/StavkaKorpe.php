<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StavkaKorpe extends Model
{
    use HasFactory;
    protected $table = 'stavka_korpe';
   
    protected $fillable = ['kolicina', 'cena', 'ukupnaCena', 'proizvod_id'];

    public function korpa()
    {
        return $this->belongsTo(Korpa::class);
    }

    public function proizvod()
    {
        return $this->belongsTo(Proizvod::class);
    }
}
