const continueBtn = document.getElementById("continue-btn");
const checkBox = document.getElementById("accept-terms");
const mailBox = document.getElementById("mail-list");
continueBtn.addEventListener("click", function () {
  if (checkBox.checked) {
    console.log("terms accepted");
  } else {
    console.log("terms refused");
  }

  if (mailBox.checked) {
    console.log("mail subscription added");
  } else {
    console.log("mail subscription not added");
  }
});

// create another label in html with text "add me to your mailing list"
// create a new input with type checkbox connect the checkbox to label
// when the continueBtn clicked after selecting checkbox console log newsletter subscribed, if not selected and btn clicked print, newsletter not subscribed
