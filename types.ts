/* primitives */
const personName: string = 'Pablo';
const age: number = 33;
const isDev: boolean = true;
const hobbies: any[] = ['Video-game', 'Soccer', 123];
const address: [string, number, string] = ['Rua A', 456, 'Jardim'];

enum Colors {
    Blue, Green = 'Verde', Yellow = 77, Red,
};
const favoriteColor: Colors = Colors.Red;

((): void  =>{
    console.log('inside func');
})();

console.log(`${personName} ${age} ${isDev} ${hobbies} ${address} ${favoriteColor}`);

/* complex in functions */
function concatFunc(name: string, hobbies: [string, string, number]): [string, [string, number]] {
    const result: [string, [string, number]] = [name, [hobbies[0], hobbies[2]]];
    return result;
}
const concat: (arg1: string, arg2: [string, string, number]) => [string, [string, number]] = concatFunc;
console.log('function type - ', concat(personName, ['test', 'another test', age]));

/* alias and multiple */
type Person = {
    name: string, age: number, address: any[],
};
let person: Person | { name: string } | {} | null;
person = {
    name: personName, age, address,
};
console.log('person object - ', person);
person = { name: personName };
console.log('second person object - ', person);
person = {};
console.log('third person object - ', person);
person = null;
console.log('forth person object - ', person);

/* never */
type ErrorFunc = (arg1: string) => never;
const errorFunc: ErrorFunc = (msg : string) => {
    throw new Error(msg);
}
errorFunc('errou!');