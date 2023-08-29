<?php

namespace App\Http\Controllers;

use App\Models\Cafe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\CafeResource;
use Illuminate\Support\Facades\DB;

class CafeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'address' => 'required|string',
            //'owner_name' => 'required|string',
            //'bank_account_number' => 'required|integer',
            //'number_of_tables' => 'required|integer',
            'type' => 'required'
        ]);

        if ($validator->fails())
            return response()->json(['erooor',$validator->errors()]);

        $cafe = Cafe::create([
            'title' => $request->title,
            'address' => $request->address,
            'owner_name' => $request->ownerName,
            'bank_account_number' => $request->bankAccountNumber,
            'type' => $request->type,
            'number_of_tables' => $request->numberOfTables,
        ]);

        return response()->json(['Cafe is created successfully.', new CafeResource($cafe)]);
        echo("cafe created");
    }



    public function index($id)
    {
        $cafe = DB::table('cafes')->where('id', '=', $id)->get();  // proba

        return $cafe;
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
    public function show(Cafe $cafe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cafe $cafe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cafe $cafe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cafe $cafe)
    {
        //
    }
}
