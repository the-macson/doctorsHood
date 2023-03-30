@extends('layouts.userLayout')

@section('content')
<div id="our-team"></div>
<script>
    var role = '{{base64_encode(json_encode($role))}}';
    role = JSON.parse(atob(role));
</script>
@endsection