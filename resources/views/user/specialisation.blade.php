@extends('layouts.userLayout')

@section('content')
<div id="select-specialisation"></div>
<script>
    var id_arr = '{{base64_encode(json_encode($id_arr))}}';
    id_arr = JSON.parse(atob(id_arr));

    var specialisation_arr = '{{base64_encode(json_encode($specialisation_arr))}}';
    specialisation_arr = JSON.parse(atob(specialisation_arr));
   
    var specialisations = [];
    for(var i = 0; i < id_arr.length; i++) {
        var specialisation = {
            id: id_arr[i],
            name: specialisation_arr[i],
        };
        specialisations.push(specialisation);
    }
</script>
@endsection