@extends('layouts.userLayout')

@section('content')
<div id="view-patient-report"></div>
<script>
    var prescription = '{{base64_encode(json_encode($prescription))}}';
    prescription = JSON.parse(atob(prescription));

    var patient = '{{base64_encode(json_encode($patient))}}';
    patient = JSON.parse(atob(patient));
</script>
@endsection