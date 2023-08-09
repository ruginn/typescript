// For arrays you need to specify what will be in the array, then the array brackets
const users: string[] = ['jed', 'john', 'Mac']

const users2: any[] = [
    {
        name: 'jed', 
        age: 34, 
    }, 
    {
        name: 'le',
        age: 4
    }
]

type Point = {
    x: number, 
    y: number
}

const pointer: Point[] = [
    {
        x: 3, 
        y: 3
    }, 
    {
        x: 3, 
        y: 35, 
    }
]