// flatMap()	    Maps all array elements and creates a new flat array

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);

console.log('--------------------------------------------------------------------------')

const myArr2 = [ 1, 2, 3, 4, 5, 6 ];
const newArr3 = myArr2.flatMap((currentValue , index , arr , thisValue) => {    
    console.log('currentValue ' ,  currentValue , ' index : ' , index , ' arr : ' , arr , ' thisValue : ' , thisValue);
    return currentValue + 1;
});
console.log(newArr3)