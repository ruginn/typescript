// enums allow us to define a set of named constants, if we use it again and again, a little weird used seldomly
enum OrderStatus {
    PENDING, 
    SHIPPED, 
    DELIVERED,
    RETURNED
}
//  const enum remove the clutter of enum when compiling into js
const enum Tester {
    YES, 
    NO, 
    MAYBE
}

