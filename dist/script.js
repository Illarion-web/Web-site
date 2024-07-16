function showProject(projectId) {
    document.getElementById('projects').style.display = 'none';
    document.getElementById('project-details').style.display = 'block';
    document.querySelectorAll('.project-content').forEach((project) => {
        project.style.display = 'none';
    });
    document.getElementById(projectId).style.display = 'block';
}

function hideProject() {
    document.getElementById('project-details').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
}

function sendMessage() {
    const chatRoom = document.getElementById('chat-room');
    const message = document.getElementById('chat-input').value;
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatRoom.appendChild(newMessage);
    document.getElementById('chat-input').value = '';
}