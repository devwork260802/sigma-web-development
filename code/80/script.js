console.log('Hello Everyone');

let obj_1={
    a: 1,
    b: 2
}

console.log(obj_1);

let obj_2={
    c: "Dev",
}

console.log(obj_2);

obj_1.__proto__=obj_2;

class me{
    constructor(name){
        this.name=name;
        console.log('Object is Created');

    }

    food(){
        console.log('Rice');

    }

    work() {
        console.log('Coding');
        
    }
}

class friend extends me{
    constructor(name){
        super(name)
        console.log('Object is Created (Friend)');

    }

    food(){
        super.food()
        console.log('Sandwich');

    }
}


console.log(new me("Dev"));
console.log(new friend("David"));