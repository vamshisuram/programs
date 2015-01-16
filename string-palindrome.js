// string palindrome

var str = 'abcdcba';

var i, len = str.length, palindrome = true;
var mid = Math.floor(len/2);

for (i = 0; i < mid; i++) {
  if (str[i] !== str[len-1-i]) {
    palindrome = false;
    break;
  }
}

console.log(palindrome);
