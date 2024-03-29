<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
//use Illuminate\Database\Eloquent\Relations\HasMany;
 

class Cafe extends Model
{
    use HasFactory;
    public $table = "cafes";

    /*protected $fillable = [
        'title',
        'address',
        'owner_name',
        'bank_account_number',
        'number_of_tables',
        'type',
    ];*/

    protected $guarded = [];

    public function user()
    {
        //return $this->hasMany(User::class, 'user_id');
        //'App\Models\Cafe'
        return $this->hasMany('App\Models\User');
    }

    public function menu()
    {
        return $this->hasMany('App\Models\Menu');
    }

    public function tableDesk()
    {
        return $this->hasMany('App\Models\TableDesk');
    }
}
