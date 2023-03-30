@extends('layouts.userLayout')

@section('content')
<div id="offline-appointment"></div>
<script>
    var doctor = '{{base64_encode(json_encode($doctor))}}';
    doctor = JSON.parse(atob(doctor));

    var appointments = '{{base64_encode(json_encode($appointments))}}';
    appointments = JSON.parse(atob(appointments));
</script>
@endsection