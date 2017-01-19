
let parseNote = function(note){
  let noteArray = note.split("*");
  console.log(noteArray);
  let noteObject = {
    pitch: noteArray[0]
  };
  if(noteArray.length == 2){
    noteObject.beats = noteArray[1];
  } else {
    noteObject.beats = 1;
  }
  return noteObject;
}

let parseSong = function(song){
  let notes = song.split(" ");
  let songArray = [];
  for(let note of notes){
    songArray.push(parseNote(note));
  }
  return songArray;
}

const onComplete = function () {
  console.log('Song finished playing');
  let song = window.prompt("Please enter your song.");
  let notes = parseSong(song);
  playSong(notes, 400, onComplete);
}


let song = window.prompt("Please enter your song.");
let notes = parseSong(song);
playSong(notes, 400, onComplete);
