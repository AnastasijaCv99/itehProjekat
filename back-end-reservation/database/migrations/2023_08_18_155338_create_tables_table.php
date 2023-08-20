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
        Schema::create('table_desk', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Cafe::class)->constrained()->onDelete('cascade');
            $table->integer('number_of_seats');
            $table->timestamps();
            //IDSto, KaficID, brojStolicaZaStolom)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_desk');
    }
};
