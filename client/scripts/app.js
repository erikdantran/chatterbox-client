// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  // currentRoom: function (room = undefined) {
  //   return room;
  // },

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      // var html = ""
      // for (var i = 0; i < data.length; i++) {
      //   if (data[i]['text'] !== null) {
      //     if ( data[i]['text'].slice(0,8) !== '<script>' ) {
      //       html += compiled(data[i])
      //     }
      //   }
      // console.log(html)
      // }

      for (var i = 0; i < data.length; i++) {
        // console.log(data[i]['text'])
        if (data[i]['text'] !== null) {
          if (data[i]['text'].slice(0, 8) !== '<script>') {
            var messageObject = {};
            messageObject['username'] = data[i]['username'];
            messageObject['text'] = data[i]['text']
            messageObject['roomname'] = data[i]['roomname']
            Messages.add(messageObject);
          }
        }
      }

      for (message of Messages._data) {
        var room = message['roomname'];
        if (!Rooms._data.includes(room)) {
          Rooms.add(room)
        }
      }


      MessagesView.render(); // May need to change or move this later on, might need to swap with initialize?
    callback();

    // TODO: Use the data to update Messages and Rooms
    // and re-render the corresponding views.
  });
  },

startSpinner: function () {
  App.$spinner.show();
  FormView.setStatus(true);
},

stopSpinner: function () {
  App.$spinner.fadeOut('fast');
  FormView.setStatus(false);
}
};



// var compiled = _.template(
      //   "<div>" +

      //   "<h3 class='username'> Username: " +
      //   "<%= username %>" +
      //   "</h3>" +

      //   "<p> Campus: " +
      //   "<%= campus %>" +
      //   " </p>" +

      //   "<p class='chat'>" +
      //   "<%= text %>" +
      //   " </p>" +

      //   "</div>"
      // );


      // $('#chats').append(html)