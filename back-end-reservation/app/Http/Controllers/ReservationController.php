<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use App\Http\Controllers\ReservationItemsController;
use Illuminate\Support\Facades\DB;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function makeAnOrder(Request $request){
        /*request ce da sadrzi: 
            cafe_id: number,
            table_id: number,
            price: number,
            menuItems: MenuItems[], a menuitems: id: number,
                                                menu_id: number,
                                                drink_food_title: string,
                                                ingredients: string,
                                                price: number,
                                                quantity: number,
    */
        
        $reservation = Reservation::create([
            'table_desk' => $request->table_id,
            'price'	=> $request->price,
            'cafe_id'=> $request-> cafe_id
        ]);
        $resId = $reservation->id;

        $arrayy = $request->menuItems;
        //$number = sizeof($arrayy);
        
        for($i = 0; $i<sizeof($arrayy); $i++) {
            DB::table('reservation_items')->insert([
                'reservation_id' => $resId,
                'menu_items_id' => $arrayy[$i]['id'],
                'quantity' => $arrayy[$i]['quantity'],
                'final_price' => $arrayy[$i]['price'],
            ]);
        }

        return response()->json(['Reservation and items is created successfully.', 'data' => $reservation]);
    }


    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Reservation $reservation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reservation $reservation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reservation $reservation)
    {
        //
    }
}
