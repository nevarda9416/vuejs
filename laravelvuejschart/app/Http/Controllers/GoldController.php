<?php

namespace App\Http\Controllers;

use App\Models\Gold;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GoldController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET');
        header("Access-Control-Allow-Headers: X-Requested-With");
        $golds = DB::table('golds')->orderBy('id', 'ASC')->get();
        return response()->json($golds);
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
        $gold = new Gold();
        $gold->brand = $request->brand;
        $gold->company = $request->company;
        $gold->date = $request->date;
        $gold->month = $request->month;
        $gold->year = $request->year;
        $gold->price = $request->price;
        $gold->save();
        return response()->json(['success' => 'Gold has been successfully added'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gold  $gold
     * @return \Illuminate\Http\Response
     */
    public function show(Gold $gold)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gold  $gold
     * @return \Illuminate\Http\Response
     */
    public function edit(Gold $gold)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Gold  $gold
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gold $gold)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gold  $gold
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gold $gold)
    {
        //
    }
}
