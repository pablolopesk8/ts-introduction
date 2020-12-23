const newEcho = <T>(item: T):T => {
    console.log(`New echo: `, item);
    return item;
}

type objEcho = {
    name: string,
    item: number,
};

console.log(newEcho('Text').length);
console.log(newEcho<number>(33).toString().length);
console.log(newEcho<objEcho>({ name: 'Pablo', item: 123 }).item);

const arr: Array<number | string | null> = [1, 2, '3', null];
console.log(arr);

function logArray <T>(arg: T[]): void {
    arg.forEach((i) => console.log(i));
}
logArray<{} | number>([{ a: 1 }, { b: 2}, { location: 'Brazil', country: 'BR' }, 987]);

abstract class BinaryOperation<T1, T2, T3 extends number | string> {
    abstract attr1: T1
    abstract attr2: T2
    abstract attr3: string

    abstract returnSomething():T3
}

class Sum implements BinaryOperation<number, number, string> {
    attr1: number
    attr2: number
    attr3: string

    constructor(arg1: number, arg2: number) {
        this.attr1 = arg1;
        this.attr2 = arg2;
        this.attr3 = `${arg1} : ${arg2}`;
    }

    returnSomething(): string {
        return this.attr3;
    }
}
console.log(new Sum(45, 67).returnSomething());