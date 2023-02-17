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
        Schema::table('stavka_korpe', function (Blueprint $table) {
            $table->foreign('proizvod_id')->references('id')->on('proizvod');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('stavka_korpe', function (Blueprint $table) {
            //
        });
    }
};
