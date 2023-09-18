class employee {
    constructor(name, time, type){
        this.name = name
        this.time = time
        this.type = type
    }
    
    hours(){
        let splitTime = this.time.split('-')

        let start = splitTime[0]
        start = start.substring(0, 2)
        start = parseInt(start)

        let end = splitTime[1]
        end = end.substring(0, 2)
        end = parseInt(end)

        let hours = end - start

        return hours
    }
}

class fullTime extends employee {
    Wage(){
        daysWorked = []
        let hours = this.hours()
        let wage
        if(hours > 6){
            wage = hours * 75000
            return wage
        } else {
            wage = hours * 100000
        }
        return wage
    }
}

class partTime extends employee{ 
    daysWorked = []
    Wage(){
        let hours = this.hours()
        let wage
        if(hours > 6){
            wage = hours * 35000
        } else {
            wage = hours * 50000
        }
        return wage
    }
    TotalWage(){
        
    }
}


let employee1 = new fullTime('a', '09.00-16.00', 'fulltime')
let employee2 = new partTime('b', '09.00-13.00', 'partTime')
