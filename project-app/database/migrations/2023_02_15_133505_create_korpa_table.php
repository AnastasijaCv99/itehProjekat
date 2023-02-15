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
        Schema::create('korpa', function (Blueprint $table) {
            $table->integer('id');
            $table->primary('id');
            $table->date('created_at');
            $table->double('ukupnaCena');
            $table->integer('user_id');
           // $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('korpa');
    }
};
