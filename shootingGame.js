class Player {
    constructor(name, health = 100, power = 10) {
        this.name = name
        this.health = health
        this.power = power
    }

    hit(opponentPower) {
        this.health = this.health - opponentPower;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    useItem(item) {
        this.health = this.health + item.health
        this.power = this.power + item.power
    }

    showStatus() {
        return this.name + ' :\nHealth : ' + this.health + '\nPower : ' + this.power
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.history = [];
    }

    getRandomItem() {
        let item = {
            health: 0,
            power: 0,
        }
        if (Math.random() < 0.25) {
            item.health += 10
        } else if (Math.random() < 0.5){
            item.power += 10
        } else if (Math.random() < 0.75){
            item.power += 10
            item.health += 10
        }
        return item;
    }

    addHistory(history) {
        this.history.push(history);
    }

    start() {
        let str = ''
        let player = this.player1;
        let opponent = this.player2;
        let item1 = this.getRandomItem();
        let item2 = this.getRandomItem();
        this.addHistory('START' + '\n');
        this.addHistory(this.player1.showStatus());
        this.addHistory('\n' + this.player2.showStatus());
        do {
            this.addHistory('\n' + 'ITEM' + '\n');
            this.player1.useItem(item1);
            this.player2.useItem(item2);

            this.addHistory(this.player1.showStatus());
            this.addHistory('\n' + this.player2.showStatus())

            this.addHistory('\n' + 'HIT' + '\n');
            this.player1.hit(this.player2.power);
            this.player2.hit(this.player1.power);

            this.addHistory(this.player1.showStatus());
            this.addHistory('\n' + this.player2.showStatus() + '\n');
 
            if (this.player1.health <= 0) {
                this.addHistory('\n' + this.player2.name + ' WINS')
            } else if (this.player2.health <= 0) {
                this.addHistory('\n' + this.player1.name + ' WINS')
            } else if(this.player1.health <= 0 && this.player2.health <= 0){
                this.addHistory('\nDRAW')
            }
        } while (this.player1.health > 0 && this.player2.health > 0);
        
        for (const value of this.history) {
            str = str + value + '\n'
        }
        console.log(str);
    }
}

let player1 = new Player('a');
let player2 = new Player('x');
new ShootingGame(player1, player2).start();