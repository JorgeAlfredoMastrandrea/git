// flat()	        Concatenates sub-array elements

let nombres_array = [ ['Jorge' , 'Alfredo'] , ['Edgardo' , 'Daniel'] , ['Salvador' , 'Ricardo'] ];
console.log('... un array que tiene otros arrays dentro : ' , nombres_array);

const nombres_flat = nombres_array.flat();
console.log('.. un array chato que dejó de tener arrays dentro de arrays :' , nombres_flat);
