// function hello1(){
//     console.log('Hello, World! 1');
// }

// function hello2(){
//     console.log('Hello, World! 2');
//     hello1();
// }

// function hello3(){
//     console.log('Hello, World! 3');
//     hello2();
// }

// hello3();
// console.log('Hello, World end');  //call stak LiFo

// CallStack

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//    let ans = two() + one();
//     console.log(ans)
// }
// three();

// let h1 = document.querySelector('h1');

// function changeColor(){
//     h1.style.color = color;
// }

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "blue";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);                      this is simple function

//    know we are using callback hell function
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return  new Promise((resolve, reject) => {

    setTimeout(() => {
      h1.style.color = color;
      resolve ("ColorChange")
    }, delay);
  });
}

changeColor("red", 1000)
.then(() => {
    console.log("red changed")
    return changeColor("blue", 1000);
  })
.then(() =>{
     console.log("blue changed")
     return changeColor("green", 1000);
     })
 .then(() =>{
     console.log("green changed")
})
.catch((err) => {
     console.log(err);
});

// changeColor("red", 1000, function(){
//     changeColor("blue", 2000, function(){
//         changeColor("green", 3000, function(){
//             changeColor("yellow", 4000, function(){
//                 changeColor("purple", 5000);
//             });

//         });
//     });
//     });
//     // this is callback hell function
