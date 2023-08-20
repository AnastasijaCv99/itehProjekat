<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Reservation;
use App\Models\MenuItems;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservation_items', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Reservation::class)->constrained();
            $table->integer('quantity');
            $table->double('final_price');
            $table->foreignIdFor(MenuItems::class)->constrained();
            $table->timestamps();
            //StavkePoruzbine(IDStavke, PorudzbinaID, kolicina, cena(cena iz stavke * kolicina odavde), StavkeMenijaID)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservation_items');
    }
};
