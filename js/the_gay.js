let score = 0;

const the_gay = document.getElementById("the_gay");
const score_label = document.getElementById("score_label");

the_gay.addEventListener('click', function() {
  score += 1;
  score_label.textContent = `Score: ${score}`;
});
