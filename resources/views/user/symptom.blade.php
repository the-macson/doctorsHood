@extends('layouts.userLayout')

@section('content')
<div id="select-symptom"></div>
<script>
    var id_arr = '{{base64_encode(json_encode($id_arr))}}';
    id_arr = JSON.parse(atob(id_arr));

    var symptoms_arr = '{{base64_encode(json_encode($symptoms_arr))}}';
    symptoms_arr = JSON.parse(atob(symptoms_arr));
   
    var symptoms = [];
    for(var i = 0; i < id_arr.length; i++) {
        var symptom = {
            id: id_arr[i],
            name: symptoms_arr[i],
        };
        symptoms.push(symptom);
    }
</script>
@endsection