const db = {
  "Rammstein - Herzeleid - Asche zu Asche": "music/rammstein/herzeleid/asche_zu_asche.opus",
  "Rammstein - Herzeleid - Du Riechst So Gut": "music/rammstein/herzeleid/du_riechst_so_gut.opus",
  "Rammstein - Sehnsucht - Du Hast": "music/rammstein/sehnsucht/du_hast.opus",
  "Rammstein - Reise, Reise - Mein Teil": "music/rammstein/reise_reise/mein_teil.opus"
};

let i = 0;

const title = document.querySelector("p");
const audio = document.querySelector("audio");

function set() {
  title.innerHTML = Object.keys(db)[i];
  audio.src = Object.values(db)[i];
}

function prev() {
  if (i) {
    i--;
    set();
  }
}

function next() {
  if (i < Object.keys(db).length - 1) {
    i++;
    set();
  }
}

set();

