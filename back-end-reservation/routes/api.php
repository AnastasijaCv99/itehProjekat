<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CafeController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\MeniItemsController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ReservationItemsController;


use App\Http\Resources\CafeResource;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



Route::post('/register/user', [UserController::class, 'register']);
Route::post('/register/cafe', [CafeController::class, 'register']);
Route::post('/register/menu', [MenuController:: class, 'register']);

Route::post('/login', [UserController::class, 'login']);

Route::get('/menu', [MenuController:: class, 'getMenu']);

Route::get('/home/{id}', [MenuController:: class, 'cafeMenu']);  //reutrns menu names for a regular user
Route::get('/home/menuItems/{id}', [MeniItemsController:: class, 'index']); //returns menu items for a menu in a cafe for regular user
Route::post('/home/reservation', [ReservationController::class, 'makeAnOrder']);

Route::get('/cafe/info/{id}', [CafeController::class, 'index']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    
    //Route::resource('cafe', CafeResource::class)->only(['update', 'store', 'destroy']);
	Route::get('/profile', [UserController::Class, 'index']);
    Route::post('/logout', [UserController::class, 'logout']);
	Route::get('/cafe/{id}', [MenuController:: class, 'cafeMenu']);  //reutrns menu names for a cafe for waiter registered
	Route::get('/cafe/menuItems/{id}', [MeniItemsController:: class, 'index']); //returns menu items for a menu in a cafe for a waiter
	Route::delete('/cafe/settings/menus/{id}', [MeniItemsController::class, 'destroy']);
	Route::put('/cafe/settings/menuItems', [MeniItemsController::class, 'edit']);
	Route::put('/cafe/settings/users', [UserController::class, 'edit']);
	Route::get('/cafe/{id}/users', [UserController::Class, 'showAll']);
});


