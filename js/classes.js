// Cursor widget

class followMouse {
  constructor(cursor, body) {
    this.cursor = cursor;
    this.body = body;
  }
  follow(e) {
    let x = e.clientX;
    let y = e.clientY;

    if (x <= this.body.clientWidth - 20) {
      this.cursor.style.left = `${x}px`;
      this.cursor.style.top = `${y}px`;
    } else {
      this.cursor.style.left = `${x - 20}px`;
      this.cursor.style.top = `${y - 20}px`;
    }
  }
}

// Audio widgets class

class AudioSettings {
  constructor(
    audio,
    volume,
    seek,
    play,
    repeat,
    volumeIcon,
    timeUpDate,
    mute,
    unmute
  ) {
    this.audio = audio;
    this.volume = volume;
    this.seek = seek;
    this.timeUpDate = timeUpDate;
    this.mute = mute;
    this.unmute = unmute;
    this.play = play;
    this.repeat = repeat;
    this.volumeIcon = volumeIcon;
  }
  volumeChange() {
    this.volume.addEventListener("change", () => {
      this.audio.volume = this.volume.value / 100;

      if (this.audio.volume == 0) {
        this.volumeIcon.innerHTML = '<i class="fas fa-volume-mute"></i>';
      } else {
        this.volumeIcon.innerHTML = '<i class="fas fa-volume-up"></i>';
      }
    });
  }
  seekPosition() {
    this.seek.addEventListener("change", () => {
      const seeker = this.audio.duration * (seek.value / 100);
      this.audio.currentTime = seeker;
    });
  }
  timeUpdating() {
    this.audio.addEventListener("timeupdate", () => {
      const seekTime = this.audio.currentTime * (100 / audio.duration);
      this.seek.value = seekTime;
    });
  }
  muteAudio() {
    mute.addEventListener("click", () => {
      audio.muted = true;
      unmute.style = "display:inline-flex";
      mute.style = "display:none";
    });
  }
  unMuteAudio() {
    unmute.addEventListener("click", () => {
      audio.muted = false;
      unmute.style = "display:none";
      mute.style = "display:inline-flex";
      console.log("unmuted");
    });
  }
  playAudio() {
    this.play.addEventListener("click", () => {
      if (this.audio.paused) {
        this.audio.play();
        this.play.innerHTML = '<i class="fas fa-pause"></i>';
        console.log(this.play);
      } else {
        this.audio.pause();
        this.play.innerHTML = '<i class="fas fa-play"></i>';
        console.log(this.play);
      }
      console.log("Play");
    });
  }
  pauseAudio() {
    pause.addEventListener("click", () => {
      if (audio.play) {
        audio.pause();
        play.style = "display:flex";
        pause.style = "display:none";
      }
      console.log("Pause");
    });
  }
  loopAudio(background, color, backUnloop, colorUnllop) {
    this.repeat.addEventListener("click", () => {
      if (this.audio.loop == false) {
        this.audio.loop = true;
        this.repeat.style = `background: ${background}; color: ${color}`;
        console.log("Looping");
      } else {
        this.audio.loop = false;
        this.repeat.style = `background: ${backUnloop}; color: ${colorUnllop}`;
        console.log("Unlooping");
      }
    });
  }
  unLoopAudio(background, color) {
    this.repeat.addEventListener("click", () => {
      if (this.audio.loop == true) {
        this.audio.loop = false;
        this.repeat.style = `background: ${background}; color: ${color}`;
        console.log("Unlooping");
      }
    });
  }
  songLength() {
    return this.audio.duration;
  }
}
