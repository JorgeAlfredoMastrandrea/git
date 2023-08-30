// typeof
/*
In JavaScript there are 5 different data types that can contain values:
                                string
                                number
                                boolean
                                object
                                function
-------------------------------------------------------------------------
There are 6 types of objects:
                                Object
                                Date
                                Array
                                String
                                Number
                                Boolean
-------------------------------------------------------------------------
And 2 data types that cannot contain values:
                                null
                                undefined
*/
console.log(`"John"                 es : ` , typeof "John");                 // Returns "string"
console.log(`3.14                   es : ` , typeof 3.14);                   // Returns "number"
console.log(`NaN                    es : ` , typeof NaN);                    // Returns "number"
console.log(`false                  es : ` , typeof false);                  // Returns "boolean"
console.log(`[1,2,3,4]              es : ` , typeof [1,2,3,4]);              // Returns "object"
console.log(`{name:'John', age:34}  es : ` , typeof {name:'John', age:34});  // Returns "object"
console.log(`Date()                 es : ` , typeof new Date());             // Returns "object"
console.log(`function () {}         es : ` , typeof function () {});         // Returns "function"
console.log(`myCar                  es : ` , typeof myCar);                  // Returns "undefined" *
console.log(`null                   es : ` , typeof null);                   // Returns "object"