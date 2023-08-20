<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user1 = User::create([
            'cafe_id' => 2,
            'first_name' => 'Milica',
            'last_name' => 'Cvetkovic',
            'email' => Str::random(10).'@gmail.com',
            'is_admin' => true,
            'password' => Hash::make('password')
        ]);

        $user2 = User::create([
            'cafe_id' => 2,
            'first_name' => 'Jelena',
            'last_name' => 'Filipovic',
            'email' => Str::random(10).'@gmail.com',
            'is_admin' => false,
            'password' => Hash::make('pass')
        ]);

    }
}
