const container = document.querySelector('.container')
const checkbox = document.querySelector('#checkbox');

const cover = document.querySelector('#cover');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const play = document.querySelector('#play');
const audio = document.querySelector("#audio");
const songtitle = document.querySelector("#songtitle");
const progressBar = document.querySelector('#progress')
const progressContainer = document.querySelector('#progressContainer')



/* Update songs, cover and title */
const songs = ['Ckay-Nwantiti', 'KizzDaniel-Lie', 'Av-Confession'];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song){
  songtitle.innerHTML = song;
  audio.src = `music/${song}.mp3`
  cover.src = `images/${song}.jpg`
}

  /* Play and pause song */
play.addEventListener('click', () =>{
const isPlaying = container.classList.contains('play')

if(isPlaying) {
  pauseSong()
}else{
  playSong()
}
});

function playSong(){
  container.classList.add('play')
  play.classList.remove('fa-play')
  play.classList.add('fa-pause')

  audio.play()
}
function pauseSong(){
  container.classList.remove('play')
  play.classList.add('fa-play')
  play.classList.remove('fa-pause')

  audio.pause()
}
/* next and previous songs action button */

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

function prevSong() {
  songIndex--

  if(songIndex < 0){
    songIndex = songs.length - 1
  }
  loadSong(songs[songIndex])
  playSong()
}
function nextSong() {
  songIndex++
  
  if(songIndex > songs.length - 1){
    songIndex = 0
  }
  loadSong(songs[songIndex])
  playSong()
}
audio.addEventListener('ended', nextSong)

 /* song progress */
audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
const {duration, currentTime} = e.srcElement
const progressP = (currentTime / duration) * 100
 
progressBar.style.width = `${progressP}%`
}
progressContainer.addEventListener('click', setProgress)
function setProgress(e){
  const width = this.clientWidth
  const click = e.offsetX
  const duration = audio.duration
  
  audio.currentTime = (click / width ) * duration

}

   /* Dark theme */
checkbox.addEventListener('click', () => {
  document.body.classList.toggle('darktheme');
  container.classList.toggle('cont');
  title.classList.toggle('color');
  
})
