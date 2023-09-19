//1.
class Employee{
    constructor(name){
        this.name = name
    }
}

class FullTime extends Employee{
    constructor(name){
        super(name)
        this.attendance = []
    }
    addAttendance = function(start, end){
        let data = {
            start,
            end,
            hours: parseInt(end.substring(0,2)) - parseInt(start.substring(0,2)),
        }
        if(data.hours > 6){
            let overtime = data.hours - 6
            data.salary = 6 * 100000 + overtime * 75000
        } else {
            data.salary = data.hours * 100000
        }
        this.attendance.push(data)
        return {start: data.start, end: data.end, hours: data.hours}
    }
    viewAttendance = function(){
        return this.attendance
    }
    totalSalary = function(){
        let total = 0
        for(let i = 0; i < this.attendance.length; i++){
            total = total + this.attendance[i].salary
        }
        return total
    }
}


class PartTime extends Employee{
    constructor(name){
        super(name)
        this.attendance = []
    }
    addAttendance = function(start, end){
        let data = {
            start,
            end,
            hours: parseInt(end.substring(0,2)) - parseInt(start.substring(0,2))
        }
        if(data.hours > 6){
            let overtime = data.hours - 6
            data.salary = 6 * 50000 + overtime * 30000
        } else {
            data.salary = data.hours * 50000
        }
        this.attendance.push(data)
        return {start: this.start, end: this.end, hours: this.hours}
    }
    viewAttendance = function(){
        return this.attendance
    }
    totalSalary = function(){
        let total = 0
        for(let i = 0; i < this.attendance.length; i++){
            total = total + this.attendance[i].salary
        }
        return total
    }
}

let employee1 = new FullTime('Hutomo')
console.log(employee1.addAttendance('09.00', '17.00'));
console.log(employee1.totalSalary());



//2. 
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

let player1 = new Player('abc');
let player2 = new Player('xyz');
new ShootingGame(player1, player2).start();
