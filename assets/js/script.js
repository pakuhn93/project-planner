// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var myList = {
  time: '',
  past: [],
  present: [],
  future: []
}

var currentDayEl = $('#currentDay');
var saveBtn = $('.saveBtn');
var dateFormat = 'dddd MMMM DD, YYYY | hh:mm:ss a';

currentDayEl.text(dayjs().format(dateFormat));

var startTime = 09; //military time to make things easier
var endTime = 17; //only works if same working day
var timeTrackerAttr = ['past', 'present', 'future'];

var displayDate = setInterval(timer => {
  var currentDate = dayjs().format(dateFormat);
  var currentHour = dayjs().format('HH');
  currentDayEl.text(currentDate);

  //storing our past, present, and future into our object

  for(var i = startTime; i <= endTime; i++){
    var checkEl = $('#' + 'hour-' + i);
    
    if(currentHour == i){
      checkEl.removeClass(timeTrackerAttr);
      checkEl.addClass('present');
    } 
    if (i < currentHour){
      checkEl.removeClass(timeTrackerAttr);
      checkEl.addClass('past');
    } 
    if (i > currentHour){
      checkEl.removeClass(timeTrackerAttr);
      checkEl.addClass('future');
    } 
  }
  myList.time = currentDate;
  myList.past = $('.past');
  myList.present = $('present');
  myList.future = $('.future');

}, 1000);


//create the element
//set the attributes
//set the text
//put it on the page


// function generateTimes(){
//   var startTime = 9; // military time, must be in same day
//   var endTime = 17;
//   var timeRange = (endTime - startTime); // business hours in a day
//   var timeArr = [];
//   for (i = 0; i < timeRange; i++){
    
//   }
// }

// generateTimes();

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.click(function saveMySchedule() {
    var cardText = $(this).siblings('.description').val();
    var cardPast = $(this).parent().class('past');
    var cardPresent = $(this).parent().class('present');
    var cardFuture = $(this).parent().class('future');
    currentDate = dayjs().format(dateFormat);
    
    // if(cardId == 'hour-9'){
    //   myList.past = cardText;
    // } else if (cardId == 'hour-10'){
    //   myList.present = cardText;
    // } else if (cardId == 'hour-11'){
    //   myList.future = cardText;
    // } else { console.log("ERROR???") }

    // console.log(cardId);
    var storeTime = currentDate;
    var storeInfo = JSON.stringify(myList);
    

    
  })
  
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
