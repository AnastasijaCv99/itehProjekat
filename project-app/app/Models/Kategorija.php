<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategorija extends Model
{
    use HasFactory;
    protected $table = 'kategorija';
    protected $fillable = ['nazivKategorije', 'id'];

    public function proizvod()
    {
        return $this->hasMany(Proizvod::class);
    }
}
