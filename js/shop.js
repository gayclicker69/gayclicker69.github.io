window.data.unpack();

const buy_men = document.getElementById("buy_men");
const buy_men_label = documen.getElementById("buy_men_label");

buy_men.addEventListener('click', function() {
  if (score >= men.cost) {
    score -= men.cost;
    men.num += 1;
    men.cost = math.floor(men.base_cost * math.pow(1.15, men.num));
  }
  
  window.data.pack();
});
