<?php

use Illuminate\Support\Facades\Route;
// At Laravel 8, there is no namespace prefix being applied to your route groups that your routes are loaded into
use App\Http\Controllers\CoinController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/coins', [CoinController::class, 'index']);
Route::post('/coins', 'CoinController@store');
