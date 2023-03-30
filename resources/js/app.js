/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


// React Pages
require('./user/Homepage');
require('./user/OurTeam');
require('./user/OnlineAppointmentMain');
require('./user/OfflineAppointmentMain');
require('./user/SpecialisationMain');
require('./user/SymptomMain');
require('./user/SelectDoctor');
require('./user/BookingSuccessMain');
require('./user/AppointmentsMain');
require('./user/CreateProfileMain');
require('./user/MedicineReminderMain');
require('./user/AddMedicineMain');
require('./user/PrescriptionPageMain');
require('./user/VirtualDoctorMain');
require('./doctor/CreateProfileMain');
require('./doctor/DashboardMain');
require('./doctor/OnlineAppointmentMain');
require('./doctor/OfflineAppointmentMain');
require('./doctor/MeetingLobbyMain');
require('./doctor/PatientReportMain');
require('./doctor/ViewPatientReportMain');

// CSS Pages
require('../css/appointments.css');
require('../css/button.css');
require('../css/loadreminder.css');
require('../css/login.css');
require('../css/nav.css');
require('../css/profile.css');
require('../css/reminder.css');
require('../css/result.css');
require('../css/signup.css');