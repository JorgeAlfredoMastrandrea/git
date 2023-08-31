// https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// expresiones regulares
/*
JavaScript Regular Expressions
A regular expression is a sequence of characters that forms a search pattern.
The search pattern can be used for text search and text replace operations.

What Is a Regular Expression?
A regular expression is a sequence of characters that forms a search pattern.
When you search for data in a text, you can use this search pattern to describe what you are searching for.
A regular expression can be a single character, or a more complicated pattern.
Regular expressions can be used to perform all types of text search and text replace operations.
Syntax : /pattern/modifiers;
Example
/w3schools/i;
Example explained:
/w3schools/i  is a regular expression.
w3schools  is a pattern (to be used in a search).
i  is a modifier (modifies the search to be case-insensitive).
Use String replace() With a Regular Expression
Example
Use a case insensitive regular expression to replace Microsoft with W3Schools in a string:

let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");
The result in res will be:

Visit W3Schools!
--------------------------------------------------------------------------------------------------------------
Regular Expression Modifiers
Modifiers can be used to perform case-insensitive more global searches:

Modifier	Description
i	        Perform case-insensitive matching	
g	        Perform a global match (find all matches rather than stopping after the first match)	
m	        Perform multiline matching
--------------------------------------------------------------------------------------------------------------

Regular Expression Patterns
Brackets are used to find a range of characters:

Expression	Description	Try it
[abc]	    Find any of the characters between the brackets	
[0-9]	    Find any of the digits between the brackets	
(x|y)	    Find any of the alternatives separated with |	
--------------------------------------------------------------------------------------------------------------

Metacharacters are characters with a special meaning:

Metacharacter	Description
\d	            Find a digit	
\s	            Find a whitespace character	
\b	            Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
\uxxxx	        Find the Unicode character specified by the hexadecimal number xxxx	
--------------------------------------------------------------------------------------------------------------

Quantifiers define quantities:

Quantifier	Description	Try it
n+	        Matches any string that contains at least one n
n*	        Matches any string that contains zero or more occurrences of n
n?	        Matches any string that contains zero or one occurrences of n
 */

// replace
let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");
console.log(result)
console.log('--------------------------------------------------------------')
// test
const pattern = /e/;
console.log(pattern.test("The best things in life are free!"));
console.log(/e/.test("The best things in life are free!"));
console.log('--------------------------------------------------------------')
// exec
console.log(/e/.exec("The best things in life are free!"));
console.log('--------------------------------------------------------------')
console.log('--------------------------------------------------------------')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let patron1 = /[0-9]/;
console.log('los numeros del 0 al 9 estan en el texto : ' , patron1.exec('Jorge 123')); // entrega informacion en donde está esa exp regular
let patron2 = /124/;
console.log('los numeros 124 ? : ' , patron2.exec('Jorge 123')); // no están
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let emailPattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
console.log('check email : ' , emailPattern.test('11bigjamar123@2gmail.com'));
