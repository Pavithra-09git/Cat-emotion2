document.addEventListener("click", function (e) {
  // console.log(e.target);
  // document.getElementById(e.target.id).parentElement.style.backgroundColor =
  //   "white";

  document.getElementById(e.target.id).parentElement.classList.add("read");
  document.getElementById(e.target.id).parentElement.classList.remove("unread");
});

// let e = {

//   target: {
//     id: "emotionDiv"
//   }
// }
// console.log(e.target.id)
