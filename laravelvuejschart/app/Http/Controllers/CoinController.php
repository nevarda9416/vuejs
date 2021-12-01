<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coin;

class CoinController extends Controller
{
    public function store(Request $request)
    {
        $coin = new Coin();
        $coin->name = $request->name;
        $coin->year = $request->year;
        $coin->price = $request->price;
        $coin->save();
        return response()->json(['success' => 'Coin has been successfully added'], 200);
    }
}
