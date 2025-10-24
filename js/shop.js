window.data.unpack();

const buy_fingering = document.getElementById("buy_fingering");
const buy_fingering_label = document.getElementById("buy_fingering_label");
const score_label = document.getElementById("score_label");

buy_men.addEventListener('click', function() {
  if (score >= fingering.cost) {
    score -= fingering.cost;
    fingering.num += 1;
    fingering.cost += 50;
    click_power *= 2;
  }
  buy_fingering_label.textContent = `cost: ${fingering.cost} gayness`;
  score_label.textContent = `gayness: ${score}`
  window.data.pack();
});
