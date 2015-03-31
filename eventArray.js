var eventArray = new Array();
var d = new Date();

var eventStatus = new Array();

var arrayDays = ["Mon", "Tu", "Wed", "Th", "Fri", "Sa", "Su"];
var arrayMonths = ["January", "February", "Ma", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var DayNum = d.getDate();
var DayName = d.getDay();
var Month = d.getMonth();
var hour = d.getHours();
var minutes = d.getMinutes();

var AmPM = "A";
var hr = 0;
var min = 0;

if (hour > 12) {
    AmPm = "pm";
} else {
    AmPm = "am";
}

switch (hour) {
    case 13:
        hr = 1;
        break;
    case 14:
        hr = 2;
        break;
    case 15:
        hr = 3;
        break;
    case 16:
        hr = 4;
        break;
    case 17:
        hr = 5;
        break;
    case 18:
        hr = 6;
        break;
    case 19:
        hr = 7;
        break;
    case 20:
        hr = 8;
        break;
    case 21:
        hr = 9;
        break;
    case 22:
        hr = 10;
        break;
    case 23:
        hr = 11;
        break;
    default:
        hr = hour;
}

switch (minutes) {
    case 1:
        min = 01;
        break;
    case 2:
        min = 02;
        break;
    case 3:
        min = 03;
        break;
    case 4:
        min = 04;
        break;
    case 5:
        min = 05;
        break;
    case 6:
        min = 06;
        break;
    case 7:
        min = 07;
        break;
    case 8:
        min = 08;
        break;
    case 9:
        min = 09;
        break;
    default:
        min = minutes;
}


function addEvent() {
    document.getElementById("eventDisplay").innerHTML = "";
    var eventHandler = document.getElementById("eventInput").value;
    if (eventHandler != "") {
        eventArray.push(eventHandler);
        for (i = 0; i < eventArray.length; i++) {
            document.getElementById("eventDisplay").innerHTML +=
            '<button onclick="doneClick()" type="button" class="btn btn-default"><span class="glyphicon glyphicon-ok"></span></button>' + " "
            + " " + '<button onclick="deleteClick('+i+')" type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove"></span></button>'
            + " " + arrayMonths[Month] + " " + arrayDays[DayName] + " " + DayNum + ", " + hr + ":" + min + AmPm + "   |          " + eventArray[i] + "    |    ";
            if (eventStatus[i]) {
                document.getElementById("eventDisplay").innerHTML += eventStatus[i] + "  |   " + arrayMonths[Month] + " " + arrayDays[DayName] + " " + DayNum + ", " + hr + ":" + min + AmPm + "<br/>";
            } else {
                document.getElementById("eventDisplay").innerHTML += "<br />";
            }
        }
    } else {
        for (i = 0; i < eventArray.length; i++) {
            document.getElementById("eventDisplay").innerHTML +=
            '<button onclick="doneClick()" type="button" class="btn btn-default"><span class="glyphicon glyphicon-ok"></span></button>' + " "
            + " " + '<button onclick="deleteClick('+i+')" type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove"></span></button>'
            + " " + arrayMonths[Month] + " " + arrayDays[DayName] + " " + DayNum + ", " + hr + ":" + min + AmPm + "   |          " + eventArray[i] + "    |    ";
            if (eventStatus[i]) {
                document.getElementById("eventDisplay").innerHTML += eventStatus[i] + "  |   " + arrayMonths[Month] + " " + arrayDays[DayName] + " " + DayNum + ", " + hr + ":" + min + AmPm + "<br/>";
            } else {
                document.getElementById("eventDisplay").innerHTML += "<br />";
            }
        }
    }

    document.getElementById("eventInput").value = "";
}

function doneClick(eventIndex) {

    eventStatus.push("DONE");
    addEvent();
}

function deleteClick(eventIndex) {
    eventArray.splice(eventIndex, 1);
    addEvent();
    console.log(eventIndex);
}