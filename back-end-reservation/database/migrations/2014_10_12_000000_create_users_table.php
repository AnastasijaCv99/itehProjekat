<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Cafe;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            //$table->bigIncrements('id'); isto kao ovo dole
            $table->id();
            $table->foreignIdFor(Cafe::class)->constrained();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            //$table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('is_admin');
            $table->rememberToken();
            $table->timestamps();
            //Zaposleni(IDZaposleni, KaficID, ime, prezime, username, password, isAdmin)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
