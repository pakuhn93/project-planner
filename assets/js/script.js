// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// var myData = {
//   date: '',
//   past: [],
//   present: [],
//   future: []
// }

var myLocalStorage = "myLocal";

function generateData() {
  var myLocalData = JSON.parse(localStorage.getItem(myLocalStorage));
  if (myLocalData == null){
    console.log('testing');
    return { date: '', past: [], present: [], future: [] }
  } else { 
    console.log('TESTING');
    return myLocalData; 
  }
}

var myData = generateData();


var currentDateAndTimeEl = $('#currentDay');
var saveBtn = $('.saveBtn');
var dateAndTimeFormat = 'dddd MMMM DD, YYYY | hh:mm:ss a';
var dateFormat = 'dddd MMMM DD, YYYY';

currentDateAndTimeEl.text(dayjs().format(dateAndTimeFormat));

var startTime = 09; //military time to make things easier
var endTime = 17; //only works if same working day
var timeTrackerAttr = ['past', 'present', 'future'];

var displayDate = setInterval(timer => {
  var currentDateAndTime = dayjs().format(dateAndTimeFormat);
  var currentHour = dayjs().format('HH');
  currentDateAndTimeEl.text(currentDateAndTime);

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
  myData.date = currentHour;
  myData.past = $('.past');
  myData.present = $('present');
  myData.future = $('.future');

}, 1000);

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //stores user information onto local storage after clicking the save button
  saveBtn.click(function saveMySchedule() {
    var storageInfo = JSON.stringify(myData);
    localStorage.setItem(myLocalStorage, storageInfo);
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
