import playList from "./playList.js";

(function () {


//time


const time = document.querySelector(".time");
const dateCont = document.querySelector(".date");
const greetingText = document.querySelector(".greeting");
const body = document.querySelector('body');
let bodyBackGround = body.style.backgroundImage;
const slidePrev = document.querySelector(".slide-prev");
const slideNext = document.querySelector(".slide-next");
let formatDateLanguage = 'en-EN';



let greetengFirst = "Good";


function showTime() {
   const date = new Date();
   const currentTime = date.toLocaleTimeString();
   const hours = date.getHours();

   time.textContent = currentTime;
   const options = {weekday: 'long', month: 'long',  day: 'numeric'};
   const currentDate = date.toLocaleDateString(`${formatDateLanguage}`, options);
   dateCont.textContent = currentDate;
   //greeting
   function showGreeting(){
    const a = hours;
    let timeOfTheDay = "";
    if(formatDateLanguage == 'en-EN'){

  
  switch (a) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      timeOfTheDay =  (" night") 
    break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      timeOfTheDay =  (" moning") 
    break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      timeOfTheDay =  (" afternoon") 
    break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      timeOfTheDay = (" evening"); 
    break;
  }
  if(formatDateLanguage == 'ru-RU'){
    switch (a) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        timeOfTheDay =  ("Доброй ночи,") 
      break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
        timeOfTheDay =  ("Доброе утро,") 
      break;
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
        timeOfTheDay =  ("Добрый день,") 
      break;
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
        timeOfTheDay = ("Добрый вечер,"); 
      break;
      return timeOfTheDay;
    }
  



  }
      
  }
  
  greetingText.textContent = `${greetengFirst} ${timeOfTheDay}, `;
  const partForBg = timeOfTheDay;
    //backgroundImage
  }
  showGreeting();
   setTimeout(showTime, 1000);

  }

  showTime();

  // Local Storage
  const inputNameText = document.querySelector(".name");

  function setLocalStorage() {
    localStorage.setItem('name', inputNameText.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);
  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      inputNameText.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage);

  function setBg (){

  function getRandomIntInclusive(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  

  }
  function leftFillNum(num, targetLength) {
      return num.toString().padStart(targetLength, 0);
  }
  const night = "night";

  function getGetHours(){
    const date = new Date();
    const hourss = date.getHours();
    let timeForBack = "";
    if (hourss >=0 &&  hourss < 6){
     timeForBack = night
    }
     if (hourss >= 6 && hourss < 12){
      timeForBack = "morning"
     }
     if (hourss >= 12 && hourss < 18){
      timeForBack = "afternoon"
     }

    if(hourss >= 18 && hourss < 24){
      timeForBack = "evening"
    }
    
    if(hourss===0){
      timeForBack = "night"
    }

    return timeForBack

  }
  let num = (getRandomIntInclusive(1, 20));
  let randomNubmer = leftFillNum(num, 2);
    
  bodyBackGround = body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getGetHours()}/${randomNubmer}.jpg')`;

    slidePrev.addEventListener("click", function(){
      randomNubmer = randomNubmer - 1;
     if (randomNubmer < 1){
       randomNubmer = 20;
     }
     randomNubmer = leftFillNum(randomNubmer, 2);
     bodyBackGround = body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getGetHours()}/${randomNubmer}.jpg')`;
    })
     slideNext.addEventListener("click", function(){
      randomNubmer = Number(randomNubmer) + 1;
      if(randomNubmer > 20){
        randomNubmer = 1;
      }
      randomNubmer = leftFillNum(randomNubmer, 2);
     // bodyBackGround = body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getGetHours()}/${randomNubmer}.jpg')`;
     
     let img = new Image;
     img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getGetHours()}/${randomNubmer}.jpg`;
     img.onload = () => {      
      body.style.backgroundImage = `url("${img.src}")`;
    }; 
  })

  };
  

  setBg ();

  //weather
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const city = document.querySelector('.city');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector(".humidity");
  let weatherLang = "en";
  let humidityText = "humidity";
  let windText = "wind speed";
  //window.addEventListener("load", () => {
  //  city.value = "minsk"
  //})

  async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${weatherLang}&appid=06767e0146b658f6c905e1bbc7178351&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.cod == "200"){
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `${humidityText} ${data.main.humidity.toFixed(0)}%`;
    wind.textContent = `${windText} ${data.wind.speed}m/s`;
    } else {
      alert("please input correct city")
    }
  

  }
  
  function setCity(event) {
    if (event.code === 'Enter') {
      getWeather(city.value);
      city.blur();
    }
  }


  //document.addEventListener('DOMContentLoaded', getWeather);
  city.addEventListener('keypress', setCity);

  function setLocalStorageWeather() {
    localStorage.setItem('city', city.value);
    
  }
  window.addEventListener('beforeunload', setLocalStorageWeather);

  function getLocalStorageWeather() {
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    }
    getWeather( city.value ? city.value : "Minsk" )
  }
  window.addEventListener('load', getLocalStorageWeather);

//quote

  let quotes = "./assets/dataen.json";
  const quoteChange = document.querySelector(".change-quote");
  const quoteText = document.querySelector(".quote");
  const quoteAuthor = document.querySelector(".author");
  async function getQuotes() {  
    
    const res = await fetch(quotes);
    const data = await res.json(); 
    const indexquote = Math.floor(Math.random() * data.length) +1;
    quoteText.textContent =(data[indexquote].text);
    quoteAuthor.textContent = (data[indexquote].author);

  }

  getQuotes();
  quoteChange.addEventListener("click", function (){
    getQuotes()
  });

  //audoiPlayer
  
  const playPrev = document.querySelector(".play-prev");
  const playNext = document.querySelector(".play-next");
  const playPause = document.querySelector(".play");
  const playItem = document.querySelector(".play-item");
  let isPlay = false;
  const audio = new Audio();
  let playNum = 0;
  const playItems = document.querySelectorAll('.play-item');
  

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
  playItem.classList.add("acctive");
  title.innerHTML = playList[playNum].title;
  if(isPlay = true){
  playItems[playNum].classList.add('item-active');
  }

}
function pauseAudio() {
  audio.pause();
  isPlay = false;
}
playPrev.addEventListener("click", function(){
  playNum = Number(playNum) - 1;
  if(playNum < 0){
    playNum = playList.length;
  }
  isPlay = true;
  playAudio()
});
playNext.addEventListener("click", function(){
  playNum = playNum + 1;
  if (playNum > playList.length){
    playNum = 0;
    console.log(playNum);


  }
  playAudio();
  return isPlay = true;


});

playPause.addEventListener("click", function (){
  if (!isPlay){
    playAudio()
  }
  else pauseAudio()


});
function toggleBtn() {
  playPause.classList.toggle('pause');
}
function playPauseMode() {
  if (isPlay = true){
    playPause.classList.add('pause');
  }
  else playPause.classList.remove('pause');
}
playPause.addEventListener('click', toggleBtn);
playNext.addEventListener("click", playPauseMode);
playPrev.addEventListener("click", playPauseMode);

//create li track-list 


function createPlayList (){
for(let i = 0; i < playList.length; i++){
  const newLi = document.createElement('li');
  newLi.textContent = playList[i].title;
  var img = document.createElement("img");
  img.src ="./assets/svg/play.svg";
  img.classList.add("playlist__icon");
  newLi.append(img)
  newLi.classList.add("play-item");
  newLi.id = (`song${i}`);
  const playListInput = document.querySelector(`.play-list`);
  playListInput.append(newLi);
}

}

createPlayList ();
const playFromList0 = document.getElementById("song0");
playFromList0.addEventListener("click", playPauseMode);
playFromList0.addEventListener("click", playAudioFromList0);
playFromList0.addEventListener("click", () => {title.innerHTML = playList[0].title;playItems[0].classList.add('item-active');
});


const playFromList1 = document.getElementById("song1");
playFromList1.addEventListener("click", playPauseMode);
playFromList1.addEventListener("click", playAudioFromList1);
playFromList1.addEventListener("click", () => {title.innerHTML = playList[1].title
});

const playFromList3 = document.getElementById("song3");
playFromList3.addEventListener("click", playPauseMode);
playFromList3.addEventListener("click", playAudioFromList3);
playFromList3.addEventListener("click", () => {title.innerHTML = playList[3].title
});

const playFromList4 = document.getElementById("song4");
playFromList4.addEventListener("click", playPauseMode);
playFromList4.addEventListener("click", playAudioFromList4);
playFromList4.addEventListener("click", () => {title.innerHTML = playList[4].title
});

const playFromList5 = document.getElementById("song5");
playFromList5.addEventListener("click", playPauseMode);
playFromList5.addEventListener("click", playAudioFromList5);
playFromList5.addEventListener("click", () => {title.innerHTML = playList[5].title
});

const playFromList2 = document.getElementById("song2");
playFromList2.addEventListener("click", playPauseMode);
playFromList2.addEventListener("click", playAudioFromList2);
playFromList2.addEventListener("click", () => {title.innerHTML = playList[2].title
});


function playAudioFromList0() {
  audio.src = playList[0].src;
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
}
function playAudioFromList1() {
  audio.src = playList[1].src;
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
}
function playAudioFromList2() {
  audio.src = playList[2].src;
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
}
function playAudioFromList3() {
  audio.src = playList[3].src;
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
}
function playAudioFromList4() {
  audio.src = playList[4].src;
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
}
function playAudioFromList5() {
  audio.src = playList[5].src;
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
}









// advanced player
const advancedPlayer = document.querySelector(".advancedPlayer");
const playBtn = document.querySelector(".playPause");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const progressContainer = document.querySelector(".progress__container");
const progress = document.querySelector(".progress");
const title = document.querySelector(".song");
const cover = document.querySelector(".cover__img");
const imgSrc = document.querySelector(".img__src");
const timePlaying = document.querySelector(".title")
function loadSong (song) {
  title.innerHTML = playList[playNum].title;
  audio.src = playList[playNum].src;
}
loadSong(playList[playNum]);
function playSong () {
  advancedPlayer.classList.add("playing");
  cover.classList.add("active");
  imgSrc.src = "./assets/svg/pause.svg"
  audio.play();
}
function pauseSong () {
  audio.pause();
  advancedPlayer.classList.remove("playing");
  cover.classList.remove("active");
  imgSrc.src = "./assets/svg/play.svg"
}
playBtn.addEventListener('click', () =>{
  const isPlaying = advancedPlayer.classList.contains("playing");
  if (isPlaying){
    pauseSong ()
  }
  else {
    playSong()
  }
})
function prevSong(){
  playNum--;
  if (playNum < 0){
    playNum = playList.length - 1
  }
  loadSong(playList[playNum]);
  playSong ();

}
nextBtn.addEventListener("click", ()=>{
  nextSong()
})
prevBtn.addEventListener("click", ()=>{
  prevSong()
})
function nextSong(){
  playNum = playNum +1 ;
  if (playNum > playList.length - 1){
    playNum = 0
  }
  loadSong(playList[playNum]);
  playSong ();

}
nextBtn.addEventListener("click", ()=>{
  nextSong()
})

const volume = document.querySelector(".volume");
function updateProgress(event){
const {duration, currentTime}=event.srcElement
const progressPercent = (currentTime/duration) * 100;
progress.style.width = `${progressPercent}%`;
timePlaying.textContent = `${currentTime.toFixed(1)} // ${duration.toFixed(2)}`;
//const maxVolume = audio.volume;
//const volumePercent = maxVolume*100;
//volume.style.width = `${volumePercent}%`;


}
audio.addEventListener("timeupdate", updateProgress);

function setProgress(event){
  const width = this.clientWidth;
  const clickBarX = event.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickBarX / width) * duration;
}
progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);
const volumeContainer = document.querySelector(".volume__container");
const volumeTitle = document.querySelector(".volume__title");

function updateVolume (event){
  const maxVolume = audio.volume;
  const width = this.clientWidth;
  const clickBarX = event.offsetX;

  const volumePercent = maxVolume*100;
  volume.style.width = `${volumePercent}%`;
  volumeTitle.textContent = `volume ${audio.volume.toFixed(2)*100} %`;


}
audio.addEventListener("timeupdate", updateVolume);
function setVolume (event){
  const width = this.clientWidth;
  const clickBarX = event.offsetX;
  const volumeLevel =audio.volume;
  audio.volume = (clickBarX / width) * 1;

}

volumeContainer.addEventListener("click", setVolume);
const mute = document.querySelector(".mute_btn");
const muteTitle = document.querySelector(".muteTitle");
function setMute (){
  const isPlaying = advancedPlayer.classList.contains("playing");
  if (isPlaying){
    audio.volume = 0;
    muteTitle.style.color = "grey";

  }
  else {
    audio.volume = 1;
    muteTitle.style.color = "white";
  }


}
mute.addEventListener('click', (setMute) );

const closePlayer = document.querySelector(".close_player");
const openPlayer = document.querySelector(".adv_player");
closePlayer.addEventListener("click", () => {
  advancedPlayer.style.display = 'none';
  pauseSong();
})
openPlayer.addEventListener("click", () =>{
  advancedPlayer.style.display = 'initial'; 
})
//greetingTranslation
//setAttribute('checked' , '');

// language

//function changeLang () {
 // lang = SelectLang.value;
  //SelectLang.addEventListener('change', () => {
  //})
//console.log(lang)
//}
//changeLang ()
const radioEnglish = document.getElementById("english");
const radioRussian = document.getElementById("russian");
function changeLangToRu(){
  if (radioRussian.checked = true){
    weatherLang = "ru";
    console.log(weatherLang)
    humidityText = "влажность";
    windText = "скорость ветра";
    inputNameText.setAttribute ("placeholder" , "[Введите ваше имя]")
  
    getWeather(city.value);
    formatDateLanguage = 'ru-RU';
    greetengFirst = "Доброго времени суток";
    showTime();
    
    quotes = "./assets/data.json";
    getQuotes();
    //showGreeting();
  }

}
function changeLangToEn(){
  if (radioEnglish.checked = true){
    weatherLang = "en";
    humidityText = "humidity";
    windText = "wind speed";
    inputNameText.setAttribute ("placeholder" , "[Enter your name]")

  
    getWeather(city.value);
    formatDateLanguage = 'en-EN'
    greetengFirst = "Good";

    showTime();
    
    quotes = "./assets/dataen.json";
    getQuotes();
    //showGreeting();


  }
}

radioEnglish.addEventListener("click", () =>{
  radioEnglish.checked = true;
  changeLangToEn()
})
radioRussian.addEventListener("click", () =>{
  changeLangToRu()
})


 









})();