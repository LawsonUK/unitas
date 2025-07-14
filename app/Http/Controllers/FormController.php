<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    public function index()
    {
        $forms = Form::get();
        return Inertia::render('forms/index', ['forms' => $forms]);
    }

    public function show(Form $form)
    {
        return Inertia::render('Forms/Show', ['form' => $form]);
    }

    public function create()
    {
        return Inertia::render('Forms/Create');
    }

    public function store(Request $request)
    {
        $form = Form::create($request->all());
    }

    public function edit(Form $form)
    {
        return Inertia::render('Forms/Edit', ['form' => $form]);
    }

    public function update(Request $request, Form $form)
    {
        $form->update($request->all());
    }

    public function destroy(Form $form)
    {
        try {
            $form->delete();
            return Inertia::location(route('forms'));
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to delete form.');
        }
    }
}   
