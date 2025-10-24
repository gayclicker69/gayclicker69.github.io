// data.js  
window.data = {  
    score: 1,  
    click_power: 1,
    fingering : {
        cost : 100,
        num : 0
    },
    unpack() {  
        // Assign to global scope
        window.score = this.score;  
        window.click_power = this.click_power;
        window.fingering = this.fingering;
    },  
    pack() {  
        // Update object from globals  
        this.score = window.score;  
        this.click_power = window.click_power;
        this.fingering = window.fingering;
    }  
};
