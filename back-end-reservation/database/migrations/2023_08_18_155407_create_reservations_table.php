<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\TableDesk;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            //$table->foreignIdFor(TableDesk::class)->constrained();
            $table->foreignId('table_desk_id')->onDelete('cascade');
            $table->double('price');
            $table->timestamps();
            //Porudzbina(IDPorudzbina, StoID, cena)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
