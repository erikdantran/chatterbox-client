// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() { // populates messages._data with message objects
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() { // displays messages when render is called
    // TODO: Render _all_ the messages.
    // use for loop here to iterate through messages.js array
    var html = ''
    for (message of Messages._data) {
      html += MessageView.render(message)
    }
    $('#chats').append(html)
  },

  // for (i = 0; i < data.movies.length; i++) {
  //   html += MessageView.render(data.movies[i]);
  // }

  renderMessage: function(messageObject) {
    var html = ''
    html += MessageView.render(messageObject)
    $('#chats').append(html)

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};