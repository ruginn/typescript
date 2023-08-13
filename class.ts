// public - everything is accessible, used to tell others that this can be accessed inside and outside the class
// private - only usable inside the class, cannot access outside of the class
// protected - works when were using inheritance
// shorthand parameter
// abstract - cant make new instances they have classes that inheirit from it, like an interface for classes but also has functions

class Player {
    public readonly first: string;
    readonly last: string;
    score: number = 0;
    private isAdmin: boolean = false
    protected isMonster: boolean = false
    // makes this into #isAdmin 
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

const jeff = new Player('elton', 'jecc')

// shortcut parameter 
class Player2 {
    constructor(private first: string, public last: string) {
        this.first = first
        this.last = last
    }
    get fullName() {
        return `${this.first} ${this.last}`
    }
    set changeName(first:string) {
        this.first = first 
    }
    
}

class SuperPlayer extends Player {
    monsterStatus() {
        this.isMonster = true
    }
}

const ustus = new Player2('you', 'gioh')
ustus.fullName;

abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number
    greet() {
        console.log("hello")
    }
}

class FullTime extends Employee{
    getPay(){
        return 12
    }
}