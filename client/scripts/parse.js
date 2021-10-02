// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function (message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB, // add message into array and rerender message possibly
      error: errorCB || function (data) {
        console.error('chatterbox: Failed to fetch messages', data);
      }
    })
  },

  readAll: function (successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  // Ask help desk if this is right
  // post: function (message) {
  //   $.ajax({
  //     url: Parse.server,
  //     type: 'POST',
  //     data: JSON.stringify(message),
  //     contentType: 'application/json',
  //     success: function (data) {
  //       console.log('Chatterbox: Message sent')
  //     },
  //     error: function (data) {
  //       console.error('chatterbox: Failed to fetch messages', data);
  //     }
  //   })
  // }

};