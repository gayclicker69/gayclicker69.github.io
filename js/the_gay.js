const data = window.data;
data.unpack();

const the_gay = document.getElementById("the_gay");
const score_label = document.getElementById("score_label");

the_gay.addEventListener('click', function() {
  score += click_power;
  score_label.textContent = `gayness: ${score}`;
});

data.pack();
