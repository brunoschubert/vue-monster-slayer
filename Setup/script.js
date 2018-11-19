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
            let max = 10;
            let min = 3;
            let damage = Math.max(Math.floor(Math.random() * max) +1, min);
            this.monsterHealth -= damage;

            if (this.monsterHealth <= 0) {
                alert('You Won!');
                this.isRunning = false;
                return
            }

            max = 12;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) +1, min);
            this.playerHealth -= damage;

            if (this.playerHealth <= 0) {
                alert('You Lost!');
                this.isRunning = false;
                return
            }
        },
        sAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        }
    }

});