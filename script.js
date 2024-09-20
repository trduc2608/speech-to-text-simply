
    let recognition;
    let transcriptText = '';

    // Kiểm tra xem trình duyệt có hỗ trợ SpeechRecognition không
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'vi-VN'; // Thiết lập ngôn ngữ

        recognition.onresult = (event) => {
            transcriptText = event.results[0][0].transcript;
            document.getElementById('textOutput').innerText = transcriptText;
        };

        recognition.onend = () => {
            console.log("Nhận diện giọng nói đã kết thúc.");
        };

        recognition.onerror = (event) => {
            console.error("Có lỗi xảy ra trong quá trình nhận diện giọng nói:", event.error);
        };
    } else {
        console.error("Trình duyệt không hỗ trợ Speech Recognition.");
    }

    // Hàm bắt đầu ghi âm
    function startRecording() {
        if (recognition) {
            recognition.start();
        }
    }

    // Hàm dừng ghi âm
    function stopRecording() {
        if (recognition) {
            recognition.stop();
        }
    }
// Hàm gửi biểu mẫu và hiển thị thông báo
function handleSubmit(event) {
   event.preventDefault(); // Ngăn không cho biểu mẫu gửi mặc định

   // Hiển thị thông báo gửi thành công
   document.getElementById('successMessage').style.display = 'block';

   // Tùy chọn: Ẩn thông báo sau vài giây
   setTimeout(() => {
       document.getElementById('successMessage').style.display = 'none';
   }, 3000); // Ẩn sau 3 giây
}

