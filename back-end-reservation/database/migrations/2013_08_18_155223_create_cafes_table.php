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
        Schema::create('cafes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('address');
            $table->string('owner_name');
            $table->integer('pib');
            $table->integer('number_of_tables');
            $table->enum('type', ['caffe', 'restaurant']);
            $table->timestamps();
            //Kafic(IDKafic, tip(kafic/restoran), naziv, adresa, vlasnik, pib, brojStolova)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cafes');
    }
};
