// 1)
// function fibo(number) {
//     var arr = [0,1];
    
//     for (i = 2; i<number ; i++){
//         arr[i] = arr[i-2] + arr[i-1];
//     }

//     return arr.filter(a => a < number);
// }

// console.log(fibo(10));

//  6)

// function findMaxNumber(nestedarr){
        
//     return nestedarr.reduce(function(maxval,currentarr){ 
//         var maxofarr = Math.max(...currentarr);
//         return Math.max(maxval,maxofarr);
//     },0);   
// }
// console.log(findMaxNumber([2,4,10,[12,4,[100,99],4],[3,2,99],0]));

var arr =[2,4,10,[12,4,[100,99],4],[3,2,99],0];

var first = arr.flat();
var sec = first.flat();

var ans = sec.sort(function(a,b){
    return a - b;
});
console.log(ans[ans.length-1])


//  4)
// function personData () {

//         var newData = [];

        
// }

// var data =[
//     {name1:"Alice",age:30},
//     {name1:"john",age:25},
//     {name1:"Bob",age:35}
// ];

// console.log(personData(data))


// 3)
// function Outerfun(value){
//     return function innerFun() {
//             var count = 0;
        

//         if(value === "increment") {
//             ++count;
//           return  console.log(count);
//         }
//         if(value === "decrement") {
//             --count;
//           return  console.log(count);
//         }
//     };
// }

// var i = function Increment(){
//     Outerfun("increment");
// }
// var d = function Decrement(){
//      Outerfun("decrement");
// }

// console.log(i());
// console.log(d());



// 2)
// function checkpassword(pass){
//     if(pass.length > 6 && pass.length < 15){
//         var fs = pass.split("");
//         if(isupper(fs[0])){
//             for( i = 0 ;i<pass.length ; i++ ){
//                 if(islower(fs[i])){
//                    var num = fs.some(a => typeof a === 'number') ;
//                    if(num){
//                     console.log("password is valid");
//                    }
//                    else{
//                     console.log("password is not valid");
//                    }
//                 }
//             }
//         }

//     }
// }

// console.log(checkpassword("Test@123"));


// 5)
// function divideIntoChunks(chunkSize) {
//     const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     for (let i = 0; i <= data.length; i += chunkSize) {
//       return data[i + chunkSize].slice(0, chunkSize);
//     }
//   }
//   divideIntoChunks(2);








