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
        Schema::create('stavka_korpe', function (Blueprint $table) {
            $table->integer('stavka_id');
            $table->integer('korpa_id');
            $table->primary(array('stavka_id', 'korpa_id'));
            $table->foreign('korpa_id')->references('id')->on('korpa');
            $table->integer('kolicina');
            $table->double('cena');
            $table->double('ukupnaCena');
            $table->integer('proizvod_id');
           // $table->foreign('proizvod_id')->references('id')->on('proizvod');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stavka_korpe');
    }
};
