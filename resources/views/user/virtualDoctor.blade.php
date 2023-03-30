@extends('layouts.userLayout')

@section('content')
<div id="virtual-doctor"></div>
<script>
    var role = '{{base64_encode(json_encode($role))}}';
    role = JSON.parse(atob(role));
</script>
@endsection