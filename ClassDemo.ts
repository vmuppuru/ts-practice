var Student = /** @class */ (function () {
    // works like setters
    // setData(stu_id : number, stu_name : string, stu_marks : number){
    //     this.stu_id = stu_id;
    //     this.stu_name = stu_name;
    //     this.stu_marks = stu_marks;
    // }
    //construtor
    function Student(stu_id, stu_name, stu_marks) {
        this.stu_id = stu_id;
        this.stu_name = stu_name;
        this.stu_marks = stu_marks;
    }
    Student.prototype.display = function () {
        console.log("student Id" + " " + this.stu_id);
        console.log("student name" + " " + this.stu_name);
        console.log("student marks" + " " + this.stu_marks);
    };
    return Student;
}());
var student = new Student(102, "vani", 100);
// student.stu_id = 100;
// student.stu_name = "vani";
// student.stu_marks = 95;
//student.setData(101, "vani", 98);
student.display();
