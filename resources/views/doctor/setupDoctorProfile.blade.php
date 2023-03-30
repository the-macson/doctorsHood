@extends('layouts.userLayout')

@section('content')
<div id="setup-doctor-profile"></div>
<script>
    var doctor = '{{base64_encode(json_encode($doctor))}}';
    doctor = JSON.parse(atob(doctor));
</script>
@endsection