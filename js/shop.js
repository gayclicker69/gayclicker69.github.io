window.data.unpack();

const buy_men = document.getElementById("buy_men");
const buy_men_label = documen.getElementById("buy_men_label");

buy_men.addEventListener('click', function() {
  if (score >= men.cost) {
    score -= men.cost;
    men.num += 1;
    men.cost += 50;
  }
  score_label.textContent = `cost: ${men.cost} gayness`;
  window.data.pack();
});
