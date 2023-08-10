// kinda like alias, but only objects, we can add things to the interface thats what makes it different, 
// key difference only object for interface, can reopen and add more, and extends
interface Person {
    name: string, 
    age: number
}

type Person2 = {
    name: string, 
    age: number
}
interface Person {
    breed: string
}

const jeff: Person  = {
    name: 'john', 
    age: 33, 
    breed: 'human'
}

// can have optional types like alias
interface Mage {
    name: string, 
    age: number, 
    nickname ?: string
}

const tom: Mage = {name: 'tom', age: 44}

// can take functions 
interface Maper {
    x: string, 
    y: string, 
    sayHi: (discount: number) => string
    // SayHi(): string
}

// can inherit from other parteent interface like classes can extend many things
// interface Mega extends Person, Mage
interface Dude extends Person{
    sickWithIt: string
}

const Jeff: Dude = {
    name: 'jeff', 
    age: 3432, 
    breed: 'human', 
    sickWithIt: 'mega'
}