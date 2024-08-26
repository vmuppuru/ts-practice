// let names: string[] = ["abc", "cde", "efg"];
// console.log(names[2])
// let employees : Array<string> = ["tom", "smith", "jack", "jill"];
// for(let i=0; i<employees.length; i++){
//     console.log(employees[i]);
// }
// for (let employee of employees) {
//     console.log(employee)
// }
//single dimentional array with multiple datatypes 
// var values = [1, "vani", 90, "sai"];
// console.log(values);
//two dimensional array
var arr = [[1, 2], [3, 4], ["s", "t"]];
// for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }
for (var arr1 in arr) {
    for (var arr2 in arr[arr1]) {
        console.log(arr[arr1][arr2]);
    }
}
