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