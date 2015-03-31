var eventArray = new Array();

var timeCheck = function () {
    var d = new Date();
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

    var time = arrayDays[DayName] + ", " + DayNum + " of " + arrayMonths[Month] + ", " + hr + ":" + min + " " + AmPm;

    return time;
}

function eventConstructor(task,dateCreated,timeCompleted) {
    this.eventTask = task;
    this.created = dateCreated;
    this.completed = timeCompleted;
    this.isCompleted = false;
}

var addEvent = function () {
    var task = document.getElementById("eventInput").value;
    var dateCreated = timeCheck();
    var newEvent = new eventConstructor(task, dateCreated);
    if (task != "") {
        eventArray.push(newEvent);
        showEvents();
        document.getElementById("eventInput").value = "";
    } else if (task == "") {
        alert("Please Write a Task to add it to the list");
    } else {
        showEvents();
        document.getElementById("eventInput").value = "";
    }
}

var showEvents=function(){
    var doc = document.getElementById("eventDisplay");
    doc.innerHTML = "";
    for (i in eventArray) {
        doc.innerHTML +='<button onclick="doneTask('+ i +')" type="button" class="btn btn-default"><span class="glyphicon glyphicon-ok"></span></button>' + " "
            + " " + '<button onclick="deleteTask(' + i + ')" type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove"></span></button>' + eventArray[i].created + "          |   " + eventArray[i].eventTask;
        if (eventArray[i].isCompleted == true) {
            doc.innerHTML += "   |  DONE   |   " +eventArray[i].completed+ "<br />";
        } else {
            doc.innerHTML += "<br />";
        }
    }
}

var deleteTask = function (index) {
    eventArray.splice(index, 1);
    showEvents();
}

var doneTask = function (index) {
    eventArray[index].isCompleted = true;
    eventArray[index].completed = timeCheck();
    showEvents();
}

var clearDone = function () {
    var i = 0;
    while (i < eventArray.length) {
        if (eventArray[i].isCompleted == true) {
            eventArray.splice(i, 1);
        } else {
            i++;
        }
    }
    showEvents();
}