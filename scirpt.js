class Track {
  constructor(artist, album, name, src) {
    this.artist = artist;
    this.album = album;
    this.name = name;
    this.src = src;
  }
}


const data = [
  new Track("Rammstein", "Herzeleid", "Asche zu Asche", "music/rammstein/herzeleid/asche_zu_asche.opus"),
  new Track("Rammstein", "Herzeleid", "Du Riechst So Gut", "music/rammstein/herzeleid/du_riechst_so_gut.opus"),
  new Track("Rammstein", "Sehnsucht", "Du Hast", "music/rammstein/sehnsucht/du_hast.opus"),
  new Track("Rammstein", "Reise, Reise", "Mein Teil", "music/rammstein/reise_reise/mein_teil.opus")
];

const title = document.querySelector("p");
const audio = document.querySelector("audio");

let index = 0;


function set() {
  track = data[index];
  title.innerHTML = `${track.artist} - ${track.album} - ${track.name}`;
  audio.src = track.src;
}


const buttons = document.querySelectorAll("button");
buttons[0].onclick = () => {
  if (index) index--;
  else index = data.length;
  set();
}
buttons[1].onclick = () => {
  if (index < data.length - 1) index++;
  else index = 0;
  set();
}

set()

