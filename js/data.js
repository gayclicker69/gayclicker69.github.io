// data.js  
window.data = {  
    score: 1,  
    click_power: 1,
    men : {
    cost : 100,
    men_num : 0
    },
    unpack() {  
        // Assign to global scope
        window.score = this.score;  
        window.click_power = this.click_power;
        window.men = this.men;
    },  
    pack() {  
        // Update object from globals  
        this.score = window.score;  
        this.click_power = window.click_power;
        this.men = window.men;
    }  
};
