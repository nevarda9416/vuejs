<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coin;
use Illuminate\Support\Facades\DB;

class CoinController extends Controller
{
    /**
     * @return mixed
     */
    public function index()
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://tygia.com/json.php?ran=0&rate=0&gold=1&bank=VIETCOM&date=now");
        // SSL important
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }

    /**
     * @param Request $request
     * @return mixed
     */
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
