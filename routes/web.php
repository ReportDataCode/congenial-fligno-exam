<?php
// 25:00 
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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



Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '^(?!api).*$');

Route::get(
    '/home',
    function () {
        return view('home');
    }
);

Route::get('/tutorials/{slug}', function ($slug) {
    return $slug;
});

Route::get('/', function () {

    return view('welcome');
})->where('any', '^(?!api).*$');


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
