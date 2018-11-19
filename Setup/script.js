new Vue({

    el: '#app',
    data: { 
        playerHealth: 100,
        monsterHealth: 100,
        isRunning: false
    },

    methods: {
        newGame: function() {
            this.isRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {

            this.monsterHealth -= this.calcDMG(3, 10);
            if(this.isWon()) {
                return;
            }

            this.playerHealth -= this.calcDMG(5, 12);
            this.isWon();
        },
        sAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        },
        calcDMG: function(min, max) {
           return Math.max(Math.floor(Math.random() * max) +1, min);
        },
        isWon: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You Won! Play Again?')) {
                    this.newGame();
                } else {
                    this.isRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You Lost! Try Again?')) {
                    this.newGame();
                } else {
                    this.isRunning = false;
                }
                return true;
        }
        return false;
        }
    }
});