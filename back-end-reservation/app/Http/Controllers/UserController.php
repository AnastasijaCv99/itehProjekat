<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$users = User::all();
        //return $users;
        $users = DB::table('users')->get();// fetching data from the users table

        return $users;
    }

    public function showAll($id) {
        $users = DB::table('users')->where('cafe_id', $id)->get();

        return response()->json(['data' => $users]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|max:255|email|unique:users',
            //'password' => 'required|string|min:8'
        ]);


        if ($validator->fails())
            return response()->json($validator->errors());

        

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            //'password' => $request->password,
            'is_admin' => $request->is_admin,
            'cafe_id' => $request->cafe_id,
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer']);
    }

    public function login(Request $req) {
            $user = User::where(['email' => $req->email])->first();
            if (!$user || !Hash::check($req->password, $user->password)) {        
                return response()
                ->json(['message' => 'Unauthorized', 'data'=> null], 401);
            } else {
                $token = $user->createToken('auth_token')->plainTextToken;
                return response()
                ->json(['message' => 'Hi ' . $user->name . ', welcome to home', 'access_token' => $token, 'token_type' => 'Bearer', 'data' => $user]);
            }
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'You have successfully logged out and the token was successfully deleted'
        ];
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
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
     /*   $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string',
            'email' => 'required',
        ]);

        if ($validator->fails())
            return response()->json($validator->errors());
*/
/*
        $userNew = DB::table('users')
            ->where('id', $request->id)
            ->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email
            ])->get();
*/
            $pass = $request['element']['password'];
            if ($pass === null) {
                $pass = Hash::make("password");
            }
            DB::table('users')
            ->updateOrInsert(
                ['id' => $request['element']['id']],
                [
                'first_name' => $request['element']['first_name'],
                'last_name' => $request['element']['last_name'],
                'email' => $request['element']['email'],
                'cafe_id' => $request['element']['cafe_id'],
                'password' => $pass,
                'is_admin' => 0,
                ]);


        return response()->json(['User is updated successfully.']);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
