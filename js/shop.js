window.data.unpack();

const buy_men = document.getElementById("buy_men");
const buy_men_label = document.getElementById("buy_men_label");

buy_men.addEventListener('click', function() {
  if (score >= men.cost) {
    score -= men.cost;
    men.num += 1;
    men.cost += 50;
    cps += 1;
  }
  buy_men_label.textContent = `cost: ${men.cost} gayness`;
  window.data.pack();
});
