// allows you to specify that it can be multiple types
let age: number | string = '3'
age = 'four'

//  you can use type narrowing with the typeof method

const determineAge = (age: string | number): number => {
    if (typeof age === 'number'){
        age += 1
    } else{
        age = Number(age)
        age += 1
    }
    return age
}

determineAge(age)

const holder: (number|string)[] = [1, 3, 4, 5, 'this', 'cat']

// you can make a literal type
let hi: 'hi' = 'hi'
let number3: 3 = 3 

// this is typically used for a unions
let mood: 'happy' | 'sad' | 'mad' = 'happy'
