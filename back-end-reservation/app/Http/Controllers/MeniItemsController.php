<?php

namespace App\Http\Controllers;

use App\Models\MenuItems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class MeniItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index($id)
    {
        $menuItems = DB::table('menu_items')->where('menu_id', '=', $id)->get();  // proba

        return $menuItems;
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
    public function show(MenuItems $menuItems)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'drink_food_title' => 'required|string|max:255',
            'ingredients' => 'required|string',
            'price' => 'required',
        ]);

        if ($validator->fails())
            return response()->json($validator->errors());

        DB::table('menu_items')
            ->where('id', $request->id)
            ->update([
                
                'drink_food_title' => $request->drink_food_title,
                'ingredients' => $request->ingredients,
                'price' => $request->price
                
            ]);

            /*MenuItems::find($request->$id)->update([
                'drink_food_title' => $request->drink_food_title,
                'ingredients' => $request->ingredients,
                'price' => $request->price,
            ]);*/

        return response()->json(['Item is updated successfully.']);

        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuItems $menuItems)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = MenuItems::find($id);
        $item->delete();
        return response(['Message' => 'This item has been deleted', 'data' => $item], 200);
    }
}
