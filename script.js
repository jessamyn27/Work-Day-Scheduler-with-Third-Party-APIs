// global html recall variables
var currentDayHtml = $("#currentDay");
var containerHtml = $("#container");
var timeBlockHtml = $(".time-block");
var currentDayHtml = currentDayHtml.text(moment().format('dddd, MMMM Do'));
var saveBtnHtml = $('.saveBtn');
var iconBtnHtml = $('.fa-save');

var descriptionHtml = $('.description');

function timeCheck() {
    timeBlockHtml.each(function() {
        var timeId = parseInt(($(this)).attr('id'));
        var hour = moment().format('H');
        var textarea = $(this).children(descriptionHtml);

        if (timeId == hour) {
            textarea.addClass('present');

        } else if (timeId < hour) {
            textarea.addClass('past');

        } else {
            textarea.addClass('future');
        }
    })
}

saveBtnHtml.click(function(event) {
    var divTarget = $(event.target);
    var timeId = parseInt(divTarget.parent().attr('id'));
    var textDisplay = divTarget.siblings('.description').val();

    localStorage.setItem(timeId, textDisplay);
})

// when we save it to local storage it needs to display 
function schedulerData() {
    timeBlockHtml.each(function() {
        var timeId = parseInt(($(this)).attr('id'));
        var textData = $(this).children(descriptionHtml)

        if (localStorage.getItem(timeId) === null) {
            return;
        } else {
            textData.val(localStorage.getItem(timeId));
        }
    })
}

timeCheck();
schedulerData();


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// use moment to display time as "Thursday, Septermber 5th"

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// make timeblock grid

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// make logic based on moment time by hour to find present time and code it red
// based on present hour compare to find past and make it grey
// based on present hour compare to find future and make it green
// need a function 

// WHEN I click into a timeblock
// THEN I can enter an event
// clicking into the center timeblock it is autmatically a textarea i can type into - black text

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// the text i wrote in that text area is saved in local storage using an event listener for my icon as a button
// if local storage has info it then, I need to do a GET first to push into an array of info / or obj? then SET back into local storage

// WHEN I refresh the page
// THEN the saved events persist
// refresh / reload of page doesn't clear local storage so saved events in textarea persist