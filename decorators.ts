function decorator(arg1: { attr1: boolean, attr2:string }):Function {
    console.log(`${arg1.attr2} - ${arg1.attr1}`);

    return arg1.attr1 ? (_: Function) => {} : (_: Function) => { console.log('false decorator'); };
}

const newDecorator = (_: Function) => {
    console.log('new decorator');
}

@decorator({ attr1: false, attr2: 'Testing' })
@newDecorator
class Test {
    test() {
        console.log('test');
    }
}