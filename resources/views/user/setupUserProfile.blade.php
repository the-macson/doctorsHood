@extends('layouts.userLayout')

@section('content')
<div id="setup-user-profile"></div>
<script>
    var patient = '{{base64_encode(json_encode($patient))}}';
    patient = JSON.parse(atob(patient));
</script>
@endsection