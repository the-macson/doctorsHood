@extends('layouts.userLayout')

@section('content')
<div id="meeting-lobby"></div>
<script>
    var id = '{{base64_encode(json_encode($id))}}';
    id = JSON.parse(atob(id));

    var patient_email = '{{base64_encode(json_encode($patient_email))}}';
    patient_email = JSON.parse(atob(patient_email));
</script>
@endsection