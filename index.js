import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");

emotionRadios.addEventListener("change", highlightCheckedOption);

getImageBtn.addEventListener("click", renderCat);

memeModalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
  memeModal.style.display = "none";
}

function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName("radio");

  for (let radio of radios) {
    radio.classList.remove("highlight");
  }

  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function getMatchingCatsArray() {
  const isGif = gifsOnlyOption.checked;
  // console.log(isGif);

  if (document.querySelector(`input[type="radio"]:checked`)) {
    const selectedEmotion = document.querySelector(
      `input[type="radio"]:checked`
    ).value;

    const matchingCatsArray = catsData.filter(function (cat) {
      // return cat.emotionTags.includes(selectedEmotion);
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif === true;
      } else {
        return cat.emotionTags.includes(selectedEmotion);
      }
    });
    return matchingCatsArray;
  }
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();
  if (document.querySelector(`input[type="radio"]:checked`)) {
    if (catsArray.length === 1) {
      // console.log(catsArray[0]);
      // console.log(catsArray);
      // console.log("if running");
      // console.log(catsArray[0]);
      return catsArray[0];
    } else {
      const randomNumber = Math.floor(Math.random() * catsArray.length);
      // console.log("else running");
      // console.log(randomNumber);
      // console.log(catsArray);
      // console.log(catsArray[randomNumber]);

      // console.log(catsArray);
      return catsArray[randomNumber];
    }
  }
}

function renderCat() {
  const catObject = getSingleCatObject();
  if (document.querySelector(`input[type="radio"]:checked`)) {
    memeModalInner.innerHTML = `
  <img
  src="./images/${catObject.image}"
  class="cat-img"
  alt="${catObject.alt}"
  >
  `;
    memeModal.style.display = "flex";
  }
}

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      // console.log(emotion);

      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

function renderEmotionsArray(cats) {
  let radioItems = "";
  const emotions = getEmotionsArray(cats);

  for (let emotion of emotions) {
    radioItems += `
    <div class="radio">
    <label for="${emotion}">${emotion}</label>
    <input 
    type="radio"
    id="${emotion}"
    value="${emotion}"
    name="emotions"
    >
    </div>
    `;
  }
  emotionRadios.innerHTML = radioItems;
}
renderEmotionsArray(catsData);
