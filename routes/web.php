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

    Route::get('forms', [FormController::class, 'index'])->name('forms');
    Route::get('forms/create', function () {
        return Inertia::render('forms/create');
    })->name('forms.create');
    Route::get('forms/{form}/edit', function ($form) {
        $formModel = \App\Models\Form::findOrFail($form);
        return Inertia::render('forms/edit', ['form' => $formModel]);
    })->name('forms.edit');
    Route::get('forms/{form}', [FormController::class, 'show'])->name('forms.show');
    Route::delete('forms/{form}', [FormController::class, 'destroy'])->name('forms.destroy');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
