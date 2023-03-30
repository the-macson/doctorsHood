@extends('layouts.userLayout')

@section('content')
<div id="select-doctor"></div>
<script>
    var filter = '{{base64_encode(json_encode($filter))}}';
    filter = JSON.parse(atob(filter));

    var id_arr = '{{ base64_encode(json_encode($id_arr)) }}';
    id_arr = JSON.parse(atob(id_arr));

    var name_arr = '{{ base64_encode(json_encode($name_arr)) }}';
    name_arr = JSON.parse(atob(name_arr));

    var phone_arr = '{{ base64_encode(json_encode($phone_arr)) }}';
    phone_arr = JSON.parse(atob(phone_arr));
    
    var email_arr = '{{ base64_encode(json_encode($email_arr)) }}';
    email_arr = JSON.parse(atob(email_arr));

    var gender = '{{ base64_encode(json_encode($gender_arr)) }}';
    gender = JSON.parse(atob(gender));

    var age = '{{ base64_encode(json_encode($age_arr)) }}';
    age = JSON.parse(atob(age));

    var photo_arr = '{{ base64_encode(json_encode($photo_arr)) }}';
    photo_arr = JSON.parse(atob(photo_arr));

    var year_of_experience = '{{ base64_encode(json_encode($year_of_experience_arr)) }}';
    year_of_experience = JSON.parse(atob(year_of_experience));

    var qualifications_arr = '{{ base64_encode(json_encode($qualifications_arr)) }}';
    qualifications_arr = JSON.parse(atob(qualifications_arr));

    var specialisation = '{{ base64_encode(json_encode($specialisation_arr)) }}';
    specialisation = JSON.parse(atob(specialisation));

    var disease_expertise = '{{ base64_encode(json_encode($disease_expertise_arr)) }}';
    disease_expertise = JSON.parse(atob(disease_expertise));

    var city = '{{ base64_encode(json_encode($city_arr)) }}';
    city = JSON.parse(atob(city));

    var state = '{{ base64_encode(json_encode($state_arr)) }}';
    state = JSON.parse(atob(state));

    var appointment_type = '{{ base64_encode(json_encode($appointment_type_arr)) }}';
    appointment_type = JSON.parse(atob(appointment_type));

    var clinic_title = '{{ base64_encode(json_encode($clinic_title_arr)) }}';
    clinic_title = JSON.parse(atob(clinic_title));

    var clinic_address = '{{ base64_encode(json_encode($clinic_address_arr)) }}';
    clinic_address = JSON.parse(atob(clinic_address));

    var time_slots = '{{ base64_encode(json_encode($time_slots_arr)) }}';
    time_slots = JSON.parse(atob(time_slots));

    var days_slots = '{{ base64_encode(json_encode($days_slots_arr)) }}';
    days_slots = JSON.parse(atob(days_slots));

    var online = '{{ base64_encode(json_encode($online_arr)) }}';
    online = JSON.parse(atob(online));

    var onsite = '{{ base64_encode(json_encode($onsite_arr)) }}';
    onsite = JSON.parse(atob(onsite));

    var mainArr = [];

    for (var i = 0; i < id_arr.length; i++){
        if (online[i] == 1 && onsite[i] == 1){
            mainArr.push(
                {
                    id:id_arr[i],
                    name:name_arr[i],
                    phone:phone_arr[i],
                    email:email_arr[i],
                    gender:gender[i],
                    age:age[i],
                    photo:photo_arr[i],
                    year_of_experience:year_of_experience[i],
                    qualifications:qualifications_arr[i],
                    specialisation:specialisation[i],
                    disease_expertise:disease_expertise[i],
                    city:city[i],
                    state:state[i],
                    appointment_type:appointment_type[i],
                    clinic_title:clinic_title[i],
                    clinic_address:clinic_address[i],
                    time_slots:time_slots[i],
                    days_slots:days_slots[i],
                    online:true,
                    onsite:true
                }
            );
        }
        else if(online[i] == 1 && onsite[i] == 0){
            mainArr.push(
                {
                    id:id_arr[i],
                    name:name_arr[i],
                    phone:phone_arr[i],
                    email:email_arr[i],
                    gender:gender[i],
                    age:age[i],
                    photo:photo_arr[i],
                    year_of_experience:year_of_experience[i],
                    qualifications:qualifications_arr[i],
                    specialisation:specialisation[i],
                    disease_expertise:disease_expertise[i],
                    city:city[i],
                    state:state[i],
                    appointment_type:appointment_type[i],
                    clinic_title:clinic_title[i],
                    clinic_address:clinic_address[i],
                    time_slots:time_slots[i],
                    days_slots:days_slots[i],
                    online:true,
                    onsite:false
                }
            );
        }
        else if(online[i] == 0 && onsite[i] == 1){
            mainArr.push(
                {
                    id:id_arr[i],
                    name:name_arr[i],
                    phone:phone_arr[i],
                    email:email_arr[i],
                    gender:gender[i],
                    age:age[i],
                    photo:photo_arr[i],
                    year_of_experience:year_of_experience[i],
                    qualifications:qualifications_arr[i],
                    specialisation:specialisation[i],
                    disease_expertise:disease_expertise[i],
                    city:city[i],
                    state:state[i],
                    appointment_type:appointment_type[i],
                    clinic_title:clinic_title[i],
                    clinic_address:clinic_address[i],
                    time_slots:time_slots[i],
                    days_slots:days_slots[i],
                    online:false,
                    onsite:true
                }
            );
        }
    }
</script>
@endsection