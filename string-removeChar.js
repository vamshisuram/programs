// remove given char from string

var strIn = 'abc', strOut = '', targetChar = 'c';

var i, len = strIn.length;

// strings are immutable
for (i = 0; i < len; i++) {
  if (strIn[i] !== targetChar) {
    strOut += strIn[i];
  }
}

strIn = strOut;

console.log(strIn);
