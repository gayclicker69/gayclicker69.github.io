// ====================
// VARIABLES
// ====================

// Player stats
let gayness = 0;
let click_power = 1;
let gayness_a_second = 0;
let is_light_mode = 1; // 1 = light, 0 = dark

// Upgrade costs
let hand_upgrade_cost = 25;
let flag_upgrade_cost = 100;

// Upgrade amounts
let hand_upgrade_amount = 0;
let flag_upgrade_amount = 0;


// ====================
// FUNCTIONS
// ====================

// Adds click_power to gayness
function on_the_gay_click() {
  gayness += click_power;
  update_labels();
}

// Buys hand upgrade
function on_hand_upgrade_click() {
  if (gayness >= hand_upgrade_cost) {
    gayness -= hand_upgrade_cost;
    hand_upgrade_amount += 1;
    hand_upgrade_cost = calc_cost(hand_upgrade_amount, 25);
    update_labels();
  }
}

// Buys flag upgrade
function on_flag_upgrade_click() {
  if (gayness >= flag_upgrade_cost) {
    gayness -= flag_upgrade_cost;
    flag_upgrade_amount += 1;
    flag_upgrade_cost = calc_cost(flag_upgrade_amount, 100);
    update_labels();
  }
}

// Toggles light/dark mode
function on_light_dark_toggle_click() {
  is_light_mode = !is_light_mode;
  document.body.classList.toggle('dark');

  const toggle_img = document.getElementById('light_dark_toggle');
  toggle_img.src = is_light_mode ? 'res/light_dark_mode_toggle/moon.png' : 'res/light_dark_mode_toggle/sun.png';
}

// Calculates upgrade cost (exponential)
function calc_cost(amount, base_cost) {
  return Math.floor(base_cost * Math.pow(1.15, amount));
}

// Updates all labels
function update_labels() {
  // Left-side labels
  document.getElementById('gayness_label').innerText = `Gayness: ${Math.floor(gayness)}`;
  document.getElementById('click_power').innerText = `Click Power: ${click_power + flag_upgrade_amount}`;
  document.getElementById('gayness_a_second').innerText = `Gayness/sec: ${hand_upgrade_amount}`;

  // Upgrade labels
  const handUpgrade = document.querySelector('.hand_upgrade');
  handUpgrade.querySelector('.upgrade_cost_label').innerText = `Cost: ${hand_upgrade_cost}`;
  handUpgrade.querySelector('.upgrade_amount_label').innerText = `Owned: ${hand_upgrade_amount}`;

  const flagUpgrade = document.querySelector('.flag_upgrade');
  flagUpgrade.querySelector('.upgrade_cost_label').innerText = `Cost: ${flag_upgrade_cost}`;
  flagUpgrade.querySelector('.upgrade_amount_label').innerText = `Owned: ${flag_upgrade_amount}`;
}


// ====================
// AUTO GAYNESS PER SECOND
// ====================

setInterval(() => {
  gayness += hand_upgrade_amount;
  update_labels();
}, 1000);


// ====================
// EVENT LISTENERS
// ====================

document.getElementById('the_gay').addEventListener('click', on_the_gay_click);
document.querySelector('.hand_upgrade').addEventListener('click', on_hand_upgrade_click);
document.querySelector('.flag_upgrade').addEventListener('click', on_flag_upgrade_click);
document.getElementById('light_dark_toggle').addEventListener('click', on_light_dark_toggle_click);


// ====================
// INITIAL LABEL UPDATE
// ====================

update_labels(); // ensures everything shows correctly on page load
