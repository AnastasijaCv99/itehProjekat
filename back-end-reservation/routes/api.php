<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CafeController;
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

Route::post('/login', [UserController::class, 'login']);


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

