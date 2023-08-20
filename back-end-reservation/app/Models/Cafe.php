<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cafe extends Model
{
    use HasFactory;
    public $table = "cafes";

    protected $fillable = [
        'title',
        'address',
        'ownerName',
        'bankAccountNumber',
        'numberOfTables',
        'type',
    ];

    public function user(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function menu(): HasMany
    {
        return $this->hasMany(Menu::class);
    }

    public function tableDesk(): HasMany
    {
        return $this->hasMany(TableDesk::class);
    }
}
