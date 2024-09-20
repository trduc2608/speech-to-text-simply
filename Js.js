const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'vi-VN';
recognition.start();

recognition.onresult = (event) => {
   const transcript = event.results[0][0].transcript;
   console.log(transcript);
};


