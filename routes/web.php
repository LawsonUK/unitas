<?php

use App\Http\Controllers\FormController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('forms', [FormController::class, 'index'])->name('forms');

Route::get('forms/{form}', [FormController::class, 'show'])->name('forms.show');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
