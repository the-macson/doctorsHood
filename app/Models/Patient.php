<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'gender',
        'age',
        'photo_url',
        'city',
        'state',
        'blood_group',
        'height_cm',
        'weight_cm',
        'address'
    ];
}
