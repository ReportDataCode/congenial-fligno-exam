<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// get all burgers

Route::get('/burgers', function () {
    return [
        'big',
        'small',
        'gigantic'
    ];
});

// create a burger

Route::post('/burgers/{id}', function () {
});

// update a burger

Route::put('/burgers', function () {
});

// delete a burger

Route::delete('/burgers/{id}', function () {

});
