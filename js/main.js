
function firstFunction( wid, hei){
    var width = wid;
    var height = hei;
    var area = width * height;
    return area;
}

var person = {firstname:"Phiraphon",
             lastname:"Tunjaya", 
             age:40};
var list = ["Volvo", "Benz", "Toyota", "Honda", "Jeep"];

var i;
// do{
//     console.log(i);
//     i++;
// }
// while(i < 0);
// 

for(i in person){
    console.log(person[i]);
}

console.log("Success");


 


// function loopMethod() {
//     
//     var i = 0;
//     var text = "";
//     do{
//         text += list[i] + "<br>";
//         i++;
//     }
//     while( i<list.length);
//     document.getElementById('test').innerHTML = text;
// }


// var grade;
// var point = 85;



// if(point >= 80){
//     grade = "A";
// } else if(){
//     grade = "B+"
// } else{ 
//     grade = "F";
// }

// switch(point){
//     case 80:
//         grade = "A";
//         break;
//     case 75:
//         grade = "B+";
//         break;
// }
// console.log(grade);


// console.log(firstFunction);

// console.log(check);



