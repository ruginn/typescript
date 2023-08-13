// generics allow us to define reusable functions and classes that work with multiple types rather than a single type
// T will return sometype

function wrapInArray<T>(element: T): T[] {
    return [element]
}

const inputElement = document.querySelector<HTMLInputElement>('user')!
inputElement.value = 'hello'

function numberIdentity(item: number): number{
    return item 
}

function stringIdentity(item: string): string{
    return item
}

function identity(item: any): any{
    return item
}

function identity2<Type>(item: Type): Type {
    return item
}

identity2<string>('hello')