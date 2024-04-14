const arr = [1,4,1,5,6,7,7];
const duplicate = arr.filter((element,index,arr) => {
    arr.indexOf(element) ==! index;
});
console.log(duplicate);