new Vue({

    el: '#app',
    data: { 
        playerHealth: 100,
        monsterHealth: 100,
        isRunning: false,
        turns: []
    },

    methods: {
        newGame: function() {
            this.isRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            let damage = this.calcDMG(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift( {
                isPlayer: true,
                isHeal: false,
                isSpecial: false,
                text: 'Player hits! Dealing ' + damage + ' points of damage.'
            });
            if(this.isWon()) {
                return;
            }
            this.monsterAttack();
        },
        sAttack: function() {
            damage = this.calcDMG(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift( {
                isPlayer: true,
                isHeal: false,
                isSpecial: true,
                text: "Player Stomps! Dealing " + damage + ' points of damage.'
            });
            if(this.isWon()) {
                return;
            }
            this.monsterAttack();
        },
        monsterAttack: function() {
            let damage = this.calcDMG(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift( {
                isPlayer: false,
                isHeal: false,
                isSpecial: false,
                text: 'Monster strikes! Dealing ' + damage + ' points of damage.'
            });
            this.isWon();
        },
        heal: function() {
            if (this.playerHealth <= 90) {
            this.playerHealth +=10;
        }   else {
            this.playerHealth = 100;
        }
        this.turns.unshift( {
            isPlayer: true,
            isHeal: true,
            isSpecial: false,
            text: "Player Heals himself for" + 10 + ' points.'
        });
            this.monsterAttack();
        },
        giveUp: function() {

            this.isRunning = false;

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