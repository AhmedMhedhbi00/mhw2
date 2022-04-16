/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const answers = document.querySelectorAll(".choice-grid div");
const selected = {
  one: "",
  two: "",
  three: "",
};

for (const answer of answers) {
  answer.addEventListener("click", onClick);
}
function onClick(event) {
  const myans = event.currentTarget;

  for (const ans of answers) {
    if (ans.dataset.questionId === myans.dataset.questionId) {
      ans.style.opacity = 1;
      ans.style.backgroundColor = "#cfe3ff";
      ans.querySelector(".checkbox").src = "images/unchecked.png";
    }
  }
  myans.style.backgroundColor = "grey";
  myans.querySelector(".checkbox").src = "images/checked.png";
  for (const ans of answers) {
    if (ans.dataset.questionId === myans.dataset.questionId && ans != myans) {
      ans.style.opacity = "0.6";
    }
  }
  if (myans.dataset.questionId === "one") {
    selected.one = myans.dataset.choiceId;
  }

  if (myans.dataset.questionId === "two") {
    selected.two = myans.dataset.choiceId;
  }

  if (myans.dataset.questionId === "three") {
    selected.three = myans.dataset.choiceId;
  }
  if (selected.one !== "" && selected.two !== "" && selected.three !== "") {
    const ris = document.querySelector(".ris");
    let selezionato = selected.one;
    if (selected.one === selected.two || selected.one === selected.three) {
      selezionato = selected.one;
    }
    if (selected.two === selected.three) {
      selezionato = selected.two;
    }
    ris.querySelector("h1").innerText = RESULTS_MAP[selezionato].title;
    ris.querySelector("p").innerText = RESULTS_MAP[selezionato].contents;
  }
}
