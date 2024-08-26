class Parent{
    name : string;

    constructor(name : string){
        this.name = name;
    }

    displayData() : void{
        console.log("this is parent class");
        console.log(this.name);
    }
}

class Emp extends Parent{
    emp_num : number;

    constructor(name : string, emp_num : number){
        super(name);
        this.emp_num = emp_num;
    
    }
    display() : void{
        console.log("name" + this.name);
        console.log("emp numner" + this.emp_num);

    }
    displayData(): void {
        console.log("this is child class");
        
    }
}
var employee1 = new Emp("vani", 101);
employee1.display();
employee1.displayData();