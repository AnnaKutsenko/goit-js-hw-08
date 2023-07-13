import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(seconds) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
};
if (localStorage.getItem("videoplayer-current-time") !== null) {
    const savedTime = localStorage.getItem("videoplayer-current-time");
    const parseSavedTime = JSON.parse(savedTime);
    console.log(savedTime);
    console.log(parseSavedTime.seconds);

    player.setCurrentTime(parseSavedTime.seconds);
}
