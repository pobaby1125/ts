//交叉类型
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
// 交叉类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        // todo
    };
    return ConsoleLogger;
}());
var jim = extend(new Person('Dennis'), new ConsoleLogger());
jim.name;
jim.log();
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
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log('bird fly');
    };
    Bird.prototype.layEggs = function () {
        console.log('bird lay eggs');
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log('fish swin');
    };
    Fish.prototype.layEggs = function () {
        console.log('fish lay eggs');
    };
    return Fish;
}());
function getRandomPet() {
    return Math.random() > 0.5 ? new Bird() : new Fish();
}
var pet = getRandomPet();
if (pet instanceof Bird) {
    pet.fly();
}
if (pet instanceof Fish) {
    pet.swim();
}
