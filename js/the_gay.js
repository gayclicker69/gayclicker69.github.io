let score = 0;
let click_power = 1;

const the_gay = document.getElementById("the_gay");
const score_label = document.getElementById("score_label");

the_gay.addEventListener('click', function() {
  score += click_power;
  score_label.textContent = `gayness: ${score}`;
});
