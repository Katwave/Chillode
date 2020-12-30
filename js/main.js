// Selectors
const listDiv = document.getElementsByClassName("list")[0];
const playingNav = document.getElementsByClassName("playing-nav")[0];
const repeat = document.getElementsByClassName("repeat")[0];
const play = document.getElementsByClassName("play")[0];
const volume = document.getElementsByClassName("volume")[0];
const seek = document.getElementsByClassName("seek")[0];
const volumeIcon = document.getElementsByClassName("volumeIcon")[0];
const download = document.getElementsByClassName("download")[0];
const back = document.getElementsByClassName("back")[0];
const playing = document.getElementsByClassName("playing")[0];
const openNav = document.querySelector(".openNav");
const navLinks = document.querySelector(".navLinks");
const nowPlaying = document.querySelector(".nowPlaying");
const about = document.getElementsByClassName("about")[0];
const backHome = document.getElementsByClassName("backHome")[0];
const aboutInfo = document.querySelector(".about-info");

// Audio instantiation
const audio = new Audio();

// All beats
const beats = [
  {
    aud: "../aud/Cold_Morning_Lo-Fi_Beat_(Prod by Katwave).mp3",
    cover: "../img/1.jpg",
    title: "Cold_Morning_Lo-Fi_Beat_(Prod by Katwave)",
    artist: "Katwave",
    plays: 0,
  },
  {
    aud: "../aud/Lo-fi_Unlished_Water_Splashes_(prod by Katwave).mp3",
    cover: "../img/1.jpg",
    title: "Lo-fi_Unlished_Water_Splashes_(prod by Katwave)",
    artist: "Katwave",
    plays: 0,
  },
  {
    aud: "../aud/LofiOceanFlowProdbyKatwaveBeats.mp3",
    cover: "../img/1.jpg",
    title: "Lofi_Ocean_Flow_(Prod by KatwaveBeats)",
    artist: "Katwave",
    plays: 0,
  },
  {
    aud: "../aud/Morning_lo-fi_beat.mp3",
    cover: "../img/1.jpg",
    title: "Morning_lo-fi_beat (Prod by Katwave)",
    artist: "Katwave",
    plays: 0,
  },
  {
    aud: "../aud/LofiOceanFlowProdbyKatwaveBeats.mp3",
    cover: "../img/1.jpg",
    title: "Ocean flow lofi type (Prod by Katwave)",
    artist: "Katwave",
    plays: 0,
  },
  {
    aud: "../aud/Nice_Fun_Lo-fi_Beat_(Prod.mp3",
    cover: "../img/1.jpg",
    title: "Nice fun lofi beat (Prod by Katwave)",
    artist: "Katwave",
    plays: 0,
  },
  {
    aud: "../aud/SDANE_LO-Fi_Beat_For_Sleep(Prod by Katwave).mp3",
    cover: "../img/1.jpg",
    title: "SDANE_LO-Fi_Beat_For_Sleep_(Prod by Katwave)",
    artist: "Katwave",
    plays: 0,
  },
  {
    aud: "../aud/Serbian_Sunrise_Lo-Fi_Beat_(Prod by Katwave).mp3",
    cover: "../img/1.jpg",
    title: "Serbian_Sunrise_Lo-Fi_Beat_(Prod by Katwave)",
    artist: "Katwave",
    plays: 0,
  },
  {
    aud: "../aud/WASPY_SMILE_Lo-Fi_Beat_(Prod by Katwave).mp3",
    cover: "../img/1.jpg",
    title: "WASPY_SMILE_Lo-Fi_Beat_(Prod by Katwave)",
    artist: "Katwave",
    plays: 0,
  },
];

// Setting up audio
const audioSettings = new AudioSettings(
  audio,
  volume,
  seek,
  play,
  repeat,
  volumeIcon
);

// THE DEFAULT AUDIO

//   getting all elements for playing nav
let playingNavCover = playingNav.children[0].children[0];
let playingNavTrackname = playingNav.children[1].children[0];
let playingNavArtist = playingNav.children[1].children[1];
playingNavTrackname.innerText = beats[0].title;
playingNavArtist.innerText = beats[0].artist;
playingNavCover.src = beats[0].cover;
// set source for audio
audio.src = beats[0].aud;
//   use the audio settings toolkit

if (audio.play) {
  audio.pause;
}
play.addEventListener("click", async (e) => {
  play.innerHTML = '<i class="fas fa-pause"></i>';
  await audio.play();

  audioSettings.playAudio();
  audioSettings.volumeChange();
  audioSettings.seekPosition();
  audioSettings.timeUpdating();
  audioSettings.loopAudio(
    "transparent", //  background looped
    " rgb(0, 209, 129)", // color looped
    "transparent", //background unlooped
    "#999" //color unlooped
  );
});

// going back to list container
back.addEventListener("click", (e) => {
  listDiv.style = "display:flex";
  playing.style = "display:none";
});

// Going back to list container from about
backHome.addEventListener("click", (e) => {
  if (screen.width <= 1000) {
    listDiv.style = "display:flex";
    playing.style = "display:none";
    about.style = "display:none";
  } else {
    listDiv.style = "display:flex";
    playing.style = "display:block";
    about.style = "display:none";
  }
});

// Going to the playing song container
nowPlaying.addEventListener("click", (e) => {
  if (screen.width <= 1000) {
    // show the plaing song
    listDiv.style = "display:none";
    playing.style = "display:block";
  } else {
    return;
  }
});

// Going to about container
aboutInfo.addEventListener("click", (e) => {
  about.style = "display:block";
});

// EVENTS
openNav.addEventListener("click", (e) => {
  openNav.classList.toggle("closeNav");
  if (!openNav.classList.contains("closeNav")) {
    navLinks.style = "display: none";
  } else {
    navLinks.style = "display: block";
  }
});

// Download the default beat
download.href = beats[0].aud;
download.download = `${beats[0].artist} - ${beats[0].title}`;

beats.forEach((beat) => {
  // WORKING WITH THE LIST CARDS

  // Creating the divs
  let listCards = document.createElement("div");
  let cover = document.createElement("div");
  let content = document.createElement("div");

  // setting up classes
  listCards.classList.add("list-cards");
  cover.classList.add("cover");
  content.classList.add("content");

  // Creating a dom tree for child divs
  let img = document.createElement("img");
  img.src = beat.cover;
  cover.appendChild(img);

  let trackName = document.createElement("p");
  trackName.classList.add("trackname");
  let artist = document.createElement("p");
  artist.classList.add("artist");
  trackName.innerText = beat.title;
  artist.innerText = beat.artist;

  content.appendChild(trackName);
  content.appendChild(artist);

  // plays container
  // let plays = document.createElement("div");
  // plays.classList.add("plays");
  // let plays_count = document.createElement("p");
  // plays_count.innerHTML = ` <i class="fas fa-play"></i> ${beat.plays}`
  // plays.appendChild(plays_count)

  // Creating a dom tree for main div
  listCards.appendChild(cover);
  listCards.appendChild(content);
  // listCards.appendChild(plays);

  // connecting the main list div with the listCards
  listDiv.appendChild(listCards);

  //   WORKING WITH THE PLAYING AUDIO

  //   getting all elements for playing nav
  let playingNavCover = playingNav.children[0].children[0];
  let playingNavTrackname = playingNav.children[1].children[0];
  let playingNavArtist = playingNav.children[1].children[1];
  let playingNavEllipses = playingNav.children[2];

  //   setting up the relevant beat info for the playing beat onclick
  listCards.addEventListener("click", async (e) => {
    if (screen.width <= 1000) {
      // show the plaing song
      listDiv.style = "display:none";
      playing.style = "display:block";
    }

    if (beat.aud) {
      // open loader
      document.getElementsByClassName("loader")[0].style = "display:flex";

      // set source for audio
      audio.src = await beat.aud;
      play.innerHTML = '<i class="fas fa-pause"></i>';
      //   use the audio settings toolkit
      await audio.play();
      await audioSettings.playAudio();
      audioSettings.volumeChange();
      audioSettings.seekPosition();
      audioSettings.timeUpdating();
      audioSettings.loopAudio(
        "transparent",
        " rgb(0, 209, 129)",
        "transparent",
        "#999"
      );

      // Increementing the number of plays
      // beat.plays ++
      // plays_count.innerHTML = ` <i class="fas fa-play"></i> ${beat.plays}`

      // Download the playing beat
      download.href = beat.aud;
      download.download = `${beat.artist} - ${beat.title}`;

      //   changing the icon for play to pause after pressing any card from listCards
      play.innerHTML = '<i class="fas fa-pause"></i>';

      //   Changing the title and artist name to match the one playing
      playingNavTrackname.innerText = beat.title;
      playingNavArtist.innerText = beat.artist;

      //   close loader
      document.getElementsByClassName("loader")[0].style = "display:none";

      // Now playing
      // Open the now playing container
      //   nowplaying.addEventListener("click", (e) => {
      //     playing.style.display = "flex";
      //   });
      // Display now playing container
      //   now_playing.style.display = "flex";
      //   song_nav.children[1].children[0].innerText = beat.title;
      //   song_nav.children[1].children[1].innerText = beat.artist;

      if (beat.img) {
        playingNavCover.src = beat.cover;
      } else {
        playingNavCover.alt = `No Image found`;
        console.log("No Image found");
      }
      //   back_arrow.addEventListener("click", (e) => {
      //     playing.style = "display:none";
      //   });
    } else {
      console.log("No audio found");
    }
  });
});
