<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $response['success'] = true;
        $response['status_code'] = 200;

        $columns = ['name','note','id'];
        
        if (Auth::user()) {
            array_push($columns,'address','phone');
        }

        $notes = Note::all($columns);
        $response['data'] = $notes;

        return response()->json($response);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexAdmin(Request $request)
    {
        $response['success'] = true;
        $response['status_code'] = 200;

        $columns = ['name','note','id','address','phone'];
    

        $notes = Note::all($columns);
        $response['data'] = $notes;

        return response()->json($response);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all(['name','phone','address','note']);
        $response['success'] = false;
        $response['status_code'] = 200; 

        $note = Note::create($input);

        if ($note) {
            $response['success'] = true;
            $response['data'] = $note;
            $response['status_code'] = 201;
        }

        return response()->json($response,$response['status_code']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Note $note)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function edit(Note $note)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Note $note)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function destroy(Note $note)
    {
        $response['success'] = false;
        $response['status_code'] = 200;

        $deleted = $note->delete();
        if ($deleted) {
            $response['success'] = true;
        }

        return response()->json($response,$response['status_code']);
    }
}
