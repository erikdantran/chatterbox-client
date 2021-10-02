// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomName) {
    // TODO: Render out a single room.
    // remove currently displayed chats
    // rerender with filtered list that are chats from only that room
    var specifiedRoom = [];
    for (message of Messages._data) {
      if (message.roomname === roomName) {
        specifiedRoom.push(message);
      }
    }

    var roomListOption = `<option value='${roomName}'>${roomName}</option>`;
    this.$select.append(roomListOption);

    console.log(this.$select)
    var html = ''
    for (specifiedMessages of specifiedRoom) {
      html += MessageView.render(message)
    }
    $('#chats').append(html)
  },



  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
