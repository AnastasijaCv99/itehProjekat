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

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

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
    /*Route::get('/profile', function (Request $request) {
        return auth()->user();
    });*/

    //Route::resource('cafe', CafeResource::class)->only(['update', 'store', 'destroy']);
	Route::get('/profile', [UserController::Class, 'index']);
    Route::post('/logout', [UserController::class, 'logout']);
	Route::get('/cafe/{id}', [MenuController:: class, 'cafeMenu']);  //reutrns menu names for a cafe for waiter registered
	Route::get('/menuItems/{id}', [MeniItemsController:: class, 'index']); //returns menu items for a menu in a cafe for a waiter
	
});
/*
    -/: 
		unosi podatke za kafic/restoran (naziv/ulicu/pib/ostale finansijske stvari)
		unosi broj stolova i bilo bi kul da moze da se oni odma prikazu na ekranu onako da se 				nacrtaju i da moze da klikce na stolove da upisuje broj (id) stola i da upise koliko gostiju 			prima taj sto
		popunjava meni, dodaje pica i hranu
		na kraju dodaje naloge za konobare, sebi postavlja super-sifru (dvofakt aut) i ide na pregled 		i ako je sve ok klikne zavrsi i prebacuje se na main stranu		
        (to sve izgleda kao kad se negde pravi profil, ima dole kao nacrtano jos koliko stranica ima da zavrsi pravljenje profila)
	-/login: 
		unosi ime kafica/restorana, svoj username i sifru
		provera ako je taj username i sifra i isAdmin == 1 onda ima dvofaktorska
	-/home/{id kafica}/waiter
		vidi isto sto i user samo sto ima polje da vidi i rezervacije sve
		ima pregled svih stolova, moze da kad postoji poruzbina na nekom stolu da se promeni boja na tom stolu. Kad se trazi racun za neki sto treba da se pojavi 					neki alert
	-/home/{id kafica}/waiter/reservation
		ovde vidi sve porudzbine koje su napravljene i moze da cekira neku kad odnese ili kad je placena, cime ona u bazi dobija vrednost true i njemu prelazi u neaktivne porudzbine
	-/home/{id kafica}/admin
		ima isto sve kao waiter ali ima i dugme za settings ili kao meni za polja ova menu/wait/res
	-/home/{id kafica}/admin/menu
		vidi meni kao sto ga vidi i gost samo ima i edit i delete i add mogucnost
	-/home/{id kafica}/admin/waiters
		vidi spisak konobara, moze da obrise neki nalog itd
	-/home/{id kafica}/admin/reservations
		vidi sve poruzbine (neki sort)

Gost:
	-/home/{id kafica}				
		za gosta view meni, odnosno izlistani menu titles
	-/home/{id kafica}/menu/{id}				
		za gosta view meni, odnosno izlistani menu itemsi za odabrani menu id
	-/home/{id kafica}/reservation		
		za gosta view racun ceo i odabir nacina placanja

*/

