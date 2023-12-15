// $('#currentDay') displays the the current day
$('#currentDay').text(dayjs().format('dddd, MMMM D'));
// $('#currentTime') displays the current time in 12:00 PM format
$('#currentTime').text(dayjs().format('h:mm A'));


// Variable showing current time in 24-hour format without leading zeros
var currentTimeVar = dayjs().format('H');


// loop over time blocks
// .each () method is designed to make DOM looping constructs concise and less error-prone
// Every time the .each () method is called, the loop iterates over the DOM elements that are part of the jQuery object with (this) refering to the element
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
$(".saveBtn").on("click", function () {
  var textareaValue = $(this).siblings(".description").val()
  var hour = $(this).parent().attr("id")
  // localStorage.setItem saves the hour and text for each time-block
  localStorage.setItem(hour, textareaValue)
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