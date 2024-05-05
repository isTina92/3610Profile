function playSound(note) {
    var audio;
    switch (note) {
        case '1':
            audio = new Audio('Audio/1.wav');
            audio.play();
            break;
        case '2':
            audio = new Audio('Audio/2.wav');
            audio.play();
            break;
        case '3':
            audio = new Audio('Audio/3.wav');
            audio.play();
            break;
        case '4':
            audio = new Audio('Audio/4.wav');
            audio.play();
            break;
        case '5':
            audio = new Audio('Audio/5.wav');
            audio.play();
            break;
    }
}