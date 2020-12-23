interface Human {
    age: number,
    name: string,
    height?: string | number,
    sayHello(): void,
    sayLoudHello?(language: string): void
}

const loggerPerson = (person: Human): void => {
    person.sayHello();
}

/* object implementation */
const persona = {
    age: 33,
        name: 'Pablo SS',
    sayHello() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
    },
}

loggerPerson(persona);

/* class implements */
class HumanClass implements Human {
    age: number = 40
    name: string = 'Asdrubal'
    sayHello() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
    }
    sayLoudHello(language: string) {
        console.log(`HELLO ${language}`);
    }
}

const aHuman = new HumanClass();
aHuman.sayLoudHello('PTßßß-BR');

/* function interface */
interface MakeCalc {
    (arg1: number, arg2: number, arg3?: string): number
}

const sum: MakeCalc = (num1: number, num2: number): number => {
    return num1 + num2;
}

console.log(sum(4, 78));