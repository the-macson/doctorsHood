@extends('layouts.userLayout')

@section('content')
<div id="prescription-page"></div>
<script>
    var prescriptions = '{{base64_encode(json_encode($prescriptions))}}';
    prescriptions = JSON.parse(atob(prescriptions));

    var doctor = '{{base64_encode(json_encode($doctor))}}';
    doctor = JSON.parse(atob(doctor));

    var appointment = '{{base64_encode(json_encode($appointment))}}';
    appointment = JSON.parse(atob(appointment));
</script>
@endsection