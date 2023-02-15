<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('proizvod', function (Blueprint $table) {
            $table->integer('id');
            $table->primary('id');
            $table->string('naziv');
            $table->string('autor');
            $table->string('opis');
            $table->double('cena');
            $table->integer('raspolozivaKolicina');
            $table->integer('kategorija_id');
           // $table->foreign('kategorija_id')->references('id')->on('kategorija');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proizvod');
    }
};
