<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\MenuItemResource;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
            'menuName' => 'required|string|max:255',
        ]);

        if ($validator->fails())
            return response()->json(['error',$validator->errors()]);

        $menu = Menu::create([
            'menu_name' => $request->menuName,
            'cafe_id' => $request->cafeId,
        ]);

        $menu_id = $menu->id;
        //DB::insert('insert into menu_items (menu_id, food_drink_title, ingredients, price) values (?, ?, ?, ?)', [$menu_id, $request->menuItemName, $request->menuItemIngredients, $request->menuItemPrice]);   
        
        //$id = DB::table('books')->insertGetId( ['name' => 'Laravel warrior'] );     $lastId = $id;
        //$lastId = $id;

        /*
        $id = User::insertGetId([
        'username' => Input::get('username'),
        'password' => Hash::make('password'),
        'active'   => 0
        ]);
        */

        $id = DB::table('menu_items')->insertGetId([
            'menu_id' => $menu_id,
            'drink_food_title' => $request->menuItemName,
            'ingredients' => $request->menuItemIngredients,
            'price' => $request->menuItemPrice
        ]);
        $lastId = $id;
        $item = DB::select('select * from menu_items where id = ?', [$lastId]);

        //return response()->json(['Menu and items is created successfully.', new MenuItemResource($item)]);
        return response()->json(['Menu and items is created successfully.', 'data' => $item]);
    }

//SELECT id, menu_name FROM `menus` WHERE cafe_id = 2;

 
    public function cafeMenu($id) {
        $names = DB::select('SELECT * FROM `menus` m JOIN cafes c ON (m.cafe_id = c.id) WHERE cafe_id = ?', [$id]);
        return response()->json(['Menu names.', 'data' => $names]);
    }

    public function index()
    {
        //
        $menus = DB::table('menus')->get();  // proba

        return $menus;
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
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Menu $menu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        //
    }
}
