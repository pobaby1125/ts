//交叉类型
function extend<T, U>(first: T, second: U): T & U {
    let result = {} as T & U;

    for ( let id in first ){
        result[id] = first[id] as any
    }

    for ( let id in second ){
        if ( ! result.hasOwnProperty(id) ){
            result[id] = second[id] as any
        }
    }

    return result;
}



// 交叉类
class Person {
    constructor(public name: string){
    }
}

interface Loggable {
    log(): void
}

class ConsoleLogger implements Loggable{
    log(){
        // todo
    }
}

var jim = extend( new Person('Dennis'), new ConsoleLogger() )
jim.name
jim.log()


// 联合类方法

/*
// 一、类型谓词
interface Bird{
    fly()
    layEggs()
}

interface Fish{
    swim()
    layEggs()
}

function getSmallPet(): Fish | Bird {
    // todo
}

let pet = getSmallPet()
pet.layEggs()
// pet.swim() // 不是共有方法，所以会报错

// 使用类型谓词来判断
function isFish( pet: Fish | Bird ): pet is Fish {
    return ( pet as Fish ).swim !== undefined
}

if ( isFish(pet) ){
    pet.swim();
} else {
    pet.fly();
}
*/

/*
//二、typeof 类型保护
function isNumber ( x: any ): x is string {
    return typeof x === 'number';
}

function isString ( x: any ): x is string {
    return typeof x === 'string'
}

function padLeft ( value: string, padding: string | number ){
    if ( isNumber(padding) ){
        return Array(padding + 1).join(' ') + value
    }

    if ( isString(padding) ){
        return padding + value
    }

    throw new Error(`Expected string or number, got '${padding}'.`)
}

console.log(padLeft('abc', 1));
*/

//三、instanceof 类型保护
class Bird{
    fly(){
        console.log('bird fly');
    }

    layEggs(){
        console.log('bird lay eggs');
    }
}

class Fish{
    swim(){
        console.log('fish swin');
    }

    layEggs(){
        console.log('fish lay eggs');
    }
}

function getRandomPet() {
    return Math.random() > 0.5 ? new Bird() : new Fish();
}

let pet = getRandomPet();

if ( pet instanceof Bird ){
    pet.fly()
}

if ( pet instanceof Fish ){
    pet.swim()
}
