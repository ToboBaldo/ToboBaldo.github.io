const track = document.getElementById('image_track');
const images = document.getElementsByClassName('image')
let scroll_start = 0;
let scroll_delta = 0;
let percentage = -5.5;
let mouse_down = false;


window.onmousedown = e => {
    mouse_down = true;
    scroll_start = e.clientX;
}

window.onmousemove = e => {
    if (!mouse_down) return;

    scroll_delta = (e.clientX - scroll_start) / window.innerWidth * 200;
    track.style.transform = `translate(${Math.max(Math.min(percentage + scroll_delta, -5.5), -94.5)}%, -50%)`;
    for (const image of images) {
        image.style.objectPosition = `${Math.min(Math.max(-percentage - scroll_delta, 5.5), 94.5)}% 50%`;
    }
}

window.onmouseup = function() {
    mouse_down = false;
    percentage = Math.max(Math.min(percentage + scroll_delta, -5.5), -94.5);
}