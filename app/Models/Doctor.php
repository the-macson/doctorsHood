<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'gender',
        'age',
        'photo_url',
        'year_experience',
        'qualifications',
        'specialisation',
        'disease_expertise',
        'city',
        'state',
        'appointment_type',
        'clinic_title',
        'clinic_address',
        'time_slots',
        'days_slots',
    ];
}
