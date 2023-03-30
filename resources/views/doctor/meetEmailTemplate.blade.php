<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Meeting Link | DoctorsHood</title>
</head>
<body>
    <h3>Scheduled Appointment Meeting Link</h3>
    <p>
        <b>Meeting link: </b><a href="{{ $appointment->meeting_link }}">{{ $appointment->meeting_link }}</a>
    </p>
    <p>
        Best Regards
        <br />
        Team, DoctorsHood
    </p>
</body>
</html>