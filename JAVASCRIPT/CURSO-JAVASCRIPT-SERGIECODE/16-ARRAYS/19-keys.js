// keys()	        Returns a Array Iteration Object, containing the keys of the original array

let nombres = [];
nombres = ['Jorge' , 'Alfredo' , 'Edgardo' , 'Daniel' , 'Salvador' , 'Ricardo' ,  ];

const keys = nombres.keys();
console.log(keys);

let text = "";
// The JavaScript ( for of ) statement loops through the values of an iterable object.
for (let x of keys) {
  console.log(x);
}