document.addEventListener("DOMContentLoaded", function() {
    const socketUrl = `wss://codemaxxerlink.stu.nighthawkcodingsociety.com/myhandler`;
    const socket = new WebSocket(socketUrl);

    socket.onopen = function() {
        console.log('Connected');
    };

    socket.onmessage = function(event) {
        showMessageOutput(event.data);
    };

    function sendMessage() {
        const messageInput = document.getElementById('messageInput').value;
        const message = `hello:${messageInput}`; // Adjusted to match the expected format
        socket.send(message);
    }

    function showMessageOutput(messageOutput) {
        const response = document.getElementById('messages');
        const p = document.createElement('p');
        p.style.wordWrap = 'break-word';
        p.appendChild(document.createTextNode(messageOutput));
        response.appendChild(p);
    }

    window.sendMessage = sendMessage; // Make sendMessage available globally
});
