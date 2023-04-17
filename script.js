const fs = require('fs');
const path = require('path');
let music = 'music';

fs.readdir(music, (err, groups) => {
  groups.forEach(group => {
    music += '/' + group;
    fs.readdir(music, (err, albums) => {
      albums.forEach(album => {
	music += '/' + album;
        fs.readdir(music, (err, songs) => {
	  songs.forEach(song => {
	    const p = document.createElement('p')
	    p.InnerHTML = `${group}, ${album}, ${path.basename(music, '.opus')}`
	    document.body.appendChild(p)
	    const audio = document.createElement('audio')
	    audio.src = music + '/' + song
	    document.body.appendChild(audio)
	  });
	});
      });
    });
  });
});
