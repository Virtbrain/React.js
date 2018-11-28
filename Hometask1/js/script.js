// задание1

function backf(i){
    return i++;
}

function loop(times = 0, backf = null){

    if (backf !== null){
        for (let i=0; i<=times; i++){
            console.log(backf(i));
        }
    } else {
        console.log('can\'t see the callback');
        return
    }     
}
loop(10,backf);
loop(5);
loop(null,backf);

// задание2
function calculateArea(a=0,b=0,h=0){
    if(a !== 0 && b !== 0 && h !== 0){
        var answer ={
            square :  0.5 * (a + b) * h,
            name : 'trapezium',
            input : `Сторона а = ${a}, сторона b = ${b}, высота h = ${h}`
        }
    } else if (a !== 0 && b !== 0 && h == 0){
        var answer ={
            square :  a * b,
            name : 'rectangle',
            input : `Сторона а = ${a}, сторона b = ${b}`
        }
    } else if (a !== 0 && b == 0 && h == 0) {
        var answer ={
            square :  a * a,
            name : 'square',
            input : `Сторона а = ${a}`
        }
    }
    if (a == 0 && b == 0 && h == 0){
        var answer = `Have no params`
    }
    return console.log(answer);
}

calculateArea(3,4,6);
calculateArea(2,5);
calculateArea(6);

// Задание3
class Human {
    constructor(name,age, date) {
        this.name = name,
        this.age = age,
        this.dateOfBirth = date
    }

    get displayInfo() {
        return `Имя: ${this.name}, Возраст: ${this.age}, Дата рождения: ${this.dateOfBirth}`
    }
}

class Employee extends Human {
    constructor(salary, department) {
        this.salary = salary,
        this.department = department
    }

    get displayInfo() {
        return `${super.displayInfo()}, Зарплата: ${this.salary}, Отдел: ${this.department}`
    }
}

class Developer extends Employee {
    constructor(manager) {
        this.manager = manager
    }

    set changeManager(newManager){
        this.manager = newManager
    }
}

class Manager extends Employee {
    constructor(employers) {
        this.employers = employers
    }

    get displayEmployers() {
        let list = '';
        for(let i=0;i<=this.employers.length;i++){
            list += `${i+1}) ${this.employers[i]}\n`
        }
        return list
    }

    addDeveloper(developer){
        this.employers.push(developer)
    }

    deleteDeveloper(developer){
        this.employers.splice(this.employers.indexof(developer),1)
    }
}