const Array = require('./array');

function main(){
    Array.SIZE_RATIO = 3;

    // create an instance of the Array class
    let arr = new Array();

    // add an item to the array
    arr.push(3);

    console.log(arr)
}

console.log(main())