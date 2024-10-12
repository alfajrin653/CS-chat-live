const chatBody = document.querySelector('.chat-body');
const messageInput = document.querySelector('.message-input');

const userData = {
  message: '',
};

// creat message element with dynamic classes and retrun it
const creatMessageElement = (content, classes) => {
  const div = document.createElement('div');
  div.classList.add('message', classes);
  div.innerHTML = content;
  return div;
};

// hendel outgoing user message
const handeleOutgoingMessage = (e) => {
  e.preventDefault();
  userData.message = messageInput.value.trim();

  // creat and dispaly user message
  const messageContent = `<div class="message-text"></div>`;

  const outgoingMessageDiv = creatMessageElement(messageContent, 'user-message');
  outgoingMessageDiv.querySelector('.message-text').textContent = userData.message;
  chatBody.appendChild(outgoingMessageDiv);
};

// menghendel enter untuk pesan atau chat
messageInput.addEventListener('keydown', (e) => {
  const userMessage = e.target.value.trim();
  if (e.key === 'Enter' && userMessage) {
    handeleOutgoingMessage(e);
  }
});
