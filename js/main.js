var textInput = document.querySelector('.write-message-input');
var btnSend = document.querySelector('.button_send');

function checkInputValue() {
  if (textInput.value) {
    btnSend.classList.remove('disabled'); // Remove disabled class if input has value
  } else {
    btnSend.classList.add('disabled'); // Add disabled class if input does not have value
  }
  window.setTimeout("checkInputValue();", 100);
}

checkInputValue();

// Send messages
var msgContainer = document.querySelector('.messages');

function sendMessage() {
  var textInputValue = textInput.value; // Get value from input field
  var newMsgLi = document.createElement('li'); // Create new li for new message
  var cycleIcon = document.createElement('div'); // Create new div for cycle icon

  newMsgLi.className = 'send-bubble animate-in extra-margin'; // Add class name to message li
  newMsgLi.innerHTML = textInputValue; // Input text message to message li
  cycleIcon.className = 'cycle-icon'; // Add class name to cycle icon
  newMsgLi.appendChild(cycleIcon);
  msgContainer.appendChild(newMsgLi); // Append message li to message container

  textInput.value = ''; // Clear value for input field
  setTimeout(function() { scrollToBottom(); }, 600);
}

// Send prewritten message

var barFooter = document.querySelector('.bar-footer');

function sendPrewrittenMessage() {
  var newMsgLi = document.createElement('li'); // Create new li for new message
  var cycleIcon = document.createElement('div'); // Create new div for cycle icon
  
  newMsgLi.innerHTML = "Cykler lige nu. Jeg skriver tilbage om lidt."; // Input text message to message li

  newMsgLi.className = 'send-bubble animate-in extra-margin'; // Add class name to message li
  cycleIcon.className = 'cycle-icon'; // Add class name to cycle icon
  newMsgLi.appendChild(cycleIcon);
  msgContainer.appendChild(newMsgLi); // Append message li to message container

  textInput.value = ''; // Clear value for input field
  barFooter.className = 'bar bar-footer bar-footer-proto-2 bar-standard send-messages remove-padding animate-out';
  setTimeout(function() { scrollToBottom(); }, 600);
  //setTimeout(function() { barFooter.className = 'hide' }, 600);
}

// Scroll to bottom
function scrollToBottom() {
  var contentDiv = document.querySelector('.content');
  contentDiv.scrollTop = contentDiv.scrollHeight;
}

// Record function
var recordActive = 0;

function recordMessage() {
  var preWrittenMessage = document.querySelector('.prewritten-message');
  var microphoneInput = document.querySelector('.microphone-input');
  var messageContainer = document.querySelector('.message-container');
  var preWrittenDescription = document.querySelector('.prewritten-description');
  var recordTimer = document.querySelector('.record-timer');
  var recordDescription = document.querySelector('.record-description');
  var audioContainer = document.querySelector('.audio-container');

  if (recordActive == 0) {
    timerInSeconds();

    preWrittenMessage.className = 'prewritten-message animate-premessage-out'; // Add class to preWrittenMessage
    microphoneInput.className = 'microphone-input animate-pulse' // Add class to microphoneInput
    preWrittenDescription.className ='prewritten-description animate-fadeout' // Add class name to preWrittenDescription
    recordTimer.className ='record-timer animate-timer-in' // Add class name to recordTimer
    audioContainer.className ='audio-container remove-border'; // Add class to audioContainer

    recordDescription.innerHTML = 'Tryk igen for at sende'

    recordActive = 1;
  } else {
    microphoneInput.className = 'microphone-input';
    recordTimer.className ='record-timer animate-fadeout'
    recordDescription.innerHTML = 'Talebesked'

    recordActive = 0;

    // Add recorded message
    var newMsgLi = document.createElement('li'); // Create new li for new message
    var cycleIcon = document.createElement('div'); // Create new div for cycle icon
    
    newMsgLi.innerHTML = '<div class="play-icon"></div>Talebesked'; // Input text message to message li

    newMsgLi.className = 'send-bubble bubble-red animate-in extra-margin'; // Add class name to message li
    cycleIcon.className = 'cycle-icon-red'; // Add class name to cycle icon
    newMsgLi.appendChild(cycleIcon);
    msgContainer.appendChild(newMsgLi); // Append message li to message container
    recordTimer.className ='record-timer animate-fadeout';
    barFooter.className = 'bar bar-footer bar-footer-proto-2 bar-standard send-messages remove-padding animate-out';
  }
}

// Timer function
function timerInSeconds() {
  var seconds = 0;

  setInterval(function() {
    seconds++;

    if (seconds < 10) {
      var time = '0:0' + seconds;
    } else {
      var time = '0:' + seconds;
    }

    var recordTimer = document.querySelector('.record-timer');
    recordTimer.innerHTML = time;

  }, 1000);
}


// Run functions
checkInputValue();
scrollToBottom();