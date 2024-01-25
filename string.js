const a='This is a sample text';
console.log(a);
//template literal
const message='Welcome to JavaScript Learning';
console.log(`Good Morning.${message}`);
const btn=document.getElementById('btn');
function greet()
{
    const name=prompt("What is your name?");
    const greeting=document.getElementById('greeting');
    greeting.textContent=`Hello ${name}.Welcome to Learning JS`;
}
btn.addEventListener('click',greet);
//concatenation
const s1='Sugu';
const s2='maran';
console.log(s1+s2);
//including quotes in the string
const goodQuotes='She said "I love you"';
console.log(goodQuotes);
//Number()
const num1='123';
var a1=Number(num1);
console.log(typeof(a1));
//String
const a2=123
var toString=String(a2);
console.log(typeof(toString));

//length
console.log(s1.length)

//at
const value=s1.at(5);
console.log(value);

//charAT
const String1='Sugumaran';
var index1=1;
const ans1=String1.charAt(index1);
console.log(ans1);

//charcodeAt
let charCodeAt=String1.charCodeAt(4);
console.log(charCodeAt);

//concat()
const String2='Thalapathy';
const Sring3='Vijay';
console.log(String2.concat(Sring3));

//endsWith()
const String4='Cats are the best!';
console.log(String4.endsWith('best!'));

//fromCharCode()
console.log(String.fromCharCode(90));

//fromCodePoint()
console.log(String.fromCodePoint(9349));

//includes
const sentence='Money makes many things';
console.log(sentence.includes('many'));
console.log(sentence.includes('things',0))

//indexOf()
console.log(sentence.indexOf('many'));
const paragraph="I think Ruth's dog is cuter than your dog!";
const searchTerm='dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(indexOfFirst)
console.log(`The index of the first ${searchTerm} is present in ${indexOfFirst}.`)
console.log(`The index of the second ${searchTerm} is present in ${paragraph.indexOf(searchTerm,indexOfFirst+1)}.`)

//lastIndexOf()
const lastIndex=paragraph.lastIndexOf('dog');
console.log(lastIndex)

//localeCompare()
console.log('a'.localeCompare("a"));
console.log('c'.localeCompare("bg"));

//match()
const sentence2="The quick brown fox jumps over the lazy dog. It barked.";
const regx=/[A-Z]/g;
const found=sentence2.match(regx);
console.log(found);

//normalize()
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
console.log(name1===name2)
const name1NFC=name1.normalize('NFC');
const name2NFC=name2.normalize('NFC');
console.log(name1NFC===name2NFC)

//padEnd()
console.log('Sugumaran'.padEnd(12,'.'))
console.log('123456'.padStart(8,'0'))

//raw()
const filePath=String.raw`/home/sugumaranram/Public/Strings/string.html`;
console.log(filePath);

//repeat()
const word='Happy ';
console.log(`Hi i am very ${word.repeat(2)}`);

//replace()
const sentence3='Sugu is a good boy.Sugu does his task regularly without fail';
console.log(sentence3.replace('Sugu','Thiru'));
//replaceall
console.log(sentence3.replaceAll('Sugu','Thiru'));

//search()
console.log(sentence3.search('u'));
console.log(sentence3.match(/[a-z]/g));

//slice

const slice1='Break the word into pieces';
console.log(slice1.slice(5));//It extracts the string from given index.
console.log(slice1.slice(0,5))//from start to end index.
console.log(slice1.slice(-6));
console.log(slice1.slice(-2));

//split()--It returns an array
const str='The quick brown fox jumps over the lazy dog.';
const words=str.split(' ');
console.log(words);
console.log(words.length);

//startsWith()
console.log(str.startsWith('The'));

//substring()
const str1='I love you'
console.log(str1.substring(2,6));
console.log(str1.substring(-1,-3))//We cannot give negative values in substring

//toLocaleUpperCase()
const city='Trichy';
console.log(city.toLocaleUpperCase('TR'));
console.log(city.toLocaleUpperCase('en-US'));
console.log(city.toLocaleLowerCase('TR'));

//upperCase()
const alpha='a b c d e f g h i j k l m';
console.log(alpha.toUpperCase());
//lowerCase()
const caps= 'A B C D E F G H I J K L M';
console.log(caps.toLowerCase())

//toString()
const stringObj =new String('foo');
console.log(typeof(stringObj))
console.log(typeof(stringObj.toString()))

//trim()
const greetings='    Hello World    ';
console.log(greetings);
console.log(greetings.trim());
//trimEnd()
console.log(greetings.trimEnd())
//trimStart()
console.log(greetings.trimStart())
//valueOf()
console.log(greetings.valueOf())
