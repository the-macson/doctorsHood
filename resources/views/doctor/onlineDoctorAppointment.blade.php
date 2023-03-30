@extends('layouts.userLayout')

@section('content')
<div id="online-doctor-appointment"></div>
<script>
    var upcoming_appointments = '{{base64_encode(json_encode($upcoming_appointments))}}';
    upcoming_appointments = JSON.parse(atob(upcoming_appointments));

    var completed_appointments = '{{base64_encode(json_encode($completed_appointments))}}';
    completed_appointments = JSON.parse(atob(completed_appointments));
</script>
@endsection