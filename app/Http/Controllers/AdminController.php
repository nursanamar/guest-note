<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function authenticate(Request $request)
    {
        $response['success'] = false;
        $response['status_code'] = 200;

        $validator = Validator::make($request->all(),[
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if ($validator->fails()) {
            $response['errors'] = $validator->errors();
        }else{
            $credentials = $validator->validated();
        
            if (Auth::attempt($credentials)) {
                $token = $request->user()->createToken('api');
                $response['success'] = true;
                $response['data'] = [
                    'token' =>  $token->plainTextToken
                ];
            }
        }

        return response()->json($response,$response['status_code']);
    }
}
