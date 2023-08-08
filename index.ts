// ** to compile, run 'tsc index.ts' in the terminal

//  you must add the type for variables
let user: string = 'Tron'
let value: number = 1
let isOnline: boolean = true
let users: {} = {
    user1: 'toto', 
    user2: 'fjk'
}
let thisVar: any = 'this is a string'

//arrays are weird, you have to say what is in the array first
let nums: number[] = [1,2, 3, 4, 5]
for (let num of nums){
    console.log(num)
}
let myArray: any[] = ['wod', 2, true]

// Great for functions
const square = (num: number) =>{
    return num * num
}

// multiple parameters can have their type defined
const thisFunction = (num: number, str: string, tf: boolean) => {

}
// It will complain if all the arguments are not there
thisFunction(43, 'fd', true)

// functions with default values, will go after defining, type script infer what it will return 
const greet = (person: string|number = 'stranger'): string | number => {
    console.log(person)
    return `hello ${person}`
}

greet()
greet('jeff')
//

const cubed = (num: number): number | string => {
    console.log(num * num * num)
    return num * num * num
}

cubed(2)

// typescript will infer what the return type is within a fucntion and map type methods 
const colors = ['red', 'yellow', 'blue']
const colorsList = colors.map(color => {
    return color.toUpperCase()
})

// void is when returning nothing from a function 
const printer = (): void => {
    console.log('this is the print') 
}

// never type is used to when the return should never happen, it either will loop forever or never return anything
const thisCat = (): never => {
    while (true){
        console.log('never return')  
    }
}

