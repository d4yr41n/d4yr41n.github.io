class Track {
  constructor(artist, album, name, src) {
    this.artist = artist;
    this.album = album;
    this.name = name;
    this.src = src;
  }
}


const data = [
  new Track("Nirvana", "Nevermind", "Lithium", "music/nirvana/nevermind/lithium.opus"),
  new Track("Nirvana", "Nevermind", "Come as You Are", "music/nirvana/nevermind/come_as_you_are.opus"),
  new Track("Nirvana", "Nevermind", "Smells Like Teen Spirit", "music/nirvana/nevermind/smells_like_teen_spirit.opus"),
  new Track("Radiohead", "OK Computer", "Paranoid Android", "music/radiohead/ok_computer/paranoid_android.opus"),
  new Track("Radiohead", "OK Computer", "Karma Police", "music/radiohead/ok_computer/karma_police.opus"),
  new Track("Radiohead", "OK Computer", "No Surprises", "music/radiohead/ok_computer/no_surprises.opus"),
  new Track("Radiohead", "The Bends", "High and Dry", "music/radiohead/the_bends/high_and_dry.opus"),
  new Track("Radiohead", "Pablo Honey", "Creep", "music/radiohead/pablo_honey/creep.opus"),
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

