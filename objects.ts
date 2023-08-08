// unlimited nesting for defining the type 
const user: {name: string, id: number, admin: boolean, parents:{}}= {
    name: 'jeff',
    id: 111, 
    admin: false, 
    parents: {
        mom: 'Foone', 
        dad: 'ting'
    }
}

const printName = (person: {first: string, last: string}): void => {
    console.log(`${person.first} ${person.last}`)
}
// it will only take in the known properties
printName({first: 'jeff', last:'goog'})

// alias -- allows you to reuse formating, can be nums or object, arrays, used to save time

type Point = {
    x: number, 
    y: number
}

let coordinate: Point = {x: 12, y: 89}

function randCorr(): Point{
    return {x: Math.random(), y: Math.random()}
}

