$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// $('#currentDay') displays the the current day
$('#currentDay').text(dayjs().format('dddd, MMMM D'));
// $('#currentTime') displays the current time in 12:00 PM format
$('#currentTime').text(dayjs().format('h:mm A'));


// Variable showing current time in 24-hour format without leading zeros
var currentTimeVar = dayjs().format('H');


// loop over time blocks
$('.time-block').each(function () {
  //Splits the id value and only takes the number after hyphen
  // parseInt converts a string to an integer
  // With the string of "hour-9," "9" is parsed into the integer 9
  var blockHour = parseInt($(this).attr('id').split('-')[1]);

  // check if time blocks have moved past this hour
  // If blockHour < currentTimeVar, then add 'past' class
  // If blockHour == currentTimeVar, then remove 'past' class and add 'present' class
  // If blockHour > currentTimeVar, then remove 'past' class and 'present' class, add 'future' class

  if (blockHour < currentTimeVar) {
    $(this).addClass('past');
  } else if (blockHour == currentTimeVar) {
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
});


// event listener enables the saveBtn on click to store data to localStorage
// var taxtareaValue grabs .saveBtn's sibling .description value
// var hour grabs .saveBtn's parent div attribute "id" which is each time-block's hour
$(".saveBtn").on("click",function(){
var textareaValue = $(this).siblings(".description").val()
var hour = $(this).parent().attr("id")
// localStorage.setItem saves the hour and text for each time-block
localStorage.setItem(hour,textareaValue)
});


// Using key values, these methods retrieve the key hour in the local drive and returns its value text associated with #hour- and .description
// When the user refreshes the page, the saved text is displayed for each time-block
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));