let input = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]

function crtOutput(){
let out = [];
for(elemnt of input){
out.push(elemnt);
}
for(let i=0;i<out.length;i++){
for(let j=0;j<out.length;j++){
if(out[i][j]===1)
out[i][j]=9;
}
}
return out;
}

function newOutput() {
let newOut=crtOutput();
for(let i=0;i<newOut.length;i++){
for(let j=0;j<newOut.length;j++){
if(newOut[i][j]===9){
newOut[i][j]=newOut[i][j];
}else{newOut[i][j]=calcul(newOut,i,j)}
}
}
return newOut;
}

function calcul(array,i,j){
let s = 0;
let rowBefore = array[i - 1];
let row = array[i]
let rowAfter = array[i + 1];
let colBefore=[j-1];
let col=[j];
let colAfter=[j+1];
let r= [rowBefore, row, rowAfter];
r.forEach(val => {
if (val){
if (val[colBefore] === 9){
 s++;
}
if (val[col] === 9){
s++;
}
if (val[colAfter] === 9){
 s++;
}
}})
return s;
}
console.log(newOutput());

