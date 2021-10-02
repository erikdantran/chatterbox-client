// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  currentRoom: undefined,

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    this.$select.on('change', this.handleChange);
    this.$button.on('click', this.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.

  },

  renderRoom: function(roomName) {
    // TODO: Render out a single room.
    // remove currently displayed chats
    // rerender with filtered list that are chats from only that room
    $('#chats').empty();
    var specifiedRoom = [];
    for (message of Messages._data) {
      if (message.roomname === roomName) {
        specifiedRoom.push(message);
      }
    }

    var roomListOption = `<option value='${roomName}'>${roomName}</option>`;
    $('#rooms select').append(roomListOption); // When this is here it passes the test

    var html = ''
    for (specifiedMessage of specifiedRoom) {
      html += MessageView.render(specifiedMessage);
    }
    $('#chats').append(html)
  },


  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // console.log(event.currentTarget.value);
    var selectedRoom = event.currentTarget.value;
    RoomsView.currentRoom = selectedRoom;
    console.log(RoomsView.currentRoom)
    RoomsView.renderRoom(selectedRoom);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var newRoom = prompt('Please enter room name', 'room name here');
    Rooms.add(newRoom);
    // console.log(RoomsView.renderRoom);
    RoomsView.renderRoom(newRoom);
  }

};
