// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    // var userMessage = $('#message').innerText() //  Grab username and room and create object with it
    var $message = $('#message')[0].value;
    var messageObject = {};

    messageObject['username'] = App.username;
    messageObject['text'] = $message;
    messageObject['roomname'] = RoomsView.currentRoom;

    Messages._data.unshift(messageObject);
    Parse.create(messageObject, App.fetch());
    // MessagesView.render
    // console.log(messageObject);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

// username = App.username
// var $message = $('#message')[0].value;
// currentRoom = App.currentRoom

// var message = {
//   username: 'Mel Brooks',
//   text: 'Never underestimate the power of the Schwartz!',
//   roomname: 'lobby'