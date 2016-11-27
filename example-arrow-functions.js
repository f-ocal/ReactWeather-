// // var names = ['Andrew','Julie','Jen'];

// // names.forEach(function (name) {
// //   console.log('forEach', name);
// // });

// // names.forEach((name) => {
// //   console.log('arrowFunc', name);
// // });

// // names.forEach((name) => console.log(name));

// // var returnMe = (name) => name + '!'

// // console.log(returnMe('Andrew'));

// // var person = {
// //   name: 'Andrew',
// //   greet: function () {
// //     names.forEach((name) => {
// //       console.log(this.name + ' says hi to ' + name )
// //     })
// //   }
// // }


// // person.greet();


// function add (a, b) {
//   console.log(a+b);
// }


var addStatement = (a,b) => {
  console.log(a+b);
}

var addExpresssion = (a,b) => console.log(a+b);


addStatement(3,4)
addExpresssion(3,5)
