<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Menu;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('menu_items', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Menu::class)->constrained();
            $table->string('drink_food_title');
            $table->text('ingredients');
            $table->double('price');
            $table->timestamps();
            //StavkeMenija(IDStavke, MeniID, nazivPicaHrane, opisSastojci, cena)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_items');
    }
};
