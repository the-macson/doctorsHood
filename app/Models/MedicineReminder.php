<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicineReminder extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'medicine_name',
        'dosage',
        'medication_type',
        'instructions',
        'frequency',
        'time',
        'days',
        'status',
    ];
}
