@extends('layouts.userLayout')

@section('content')
<div id="patient-report"></div>
<script>
    var doctor = '{{base64_encode(json_encode($doctor))}}';
    doctor = JSON.parse(atob(doctor));

    var patient = '{{base64_encode(json_encode($patient))}}';
    patient = JSON.parse(atob(patient));

    var appId = '{{base64_encode(json_encode($appId))}}';
    appId = JSON.parse(atob(appId));
</script>
@endsection