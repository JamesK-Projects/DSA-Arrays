const Array = require('./array');

function main(){
    Array.SIZE_RATIO = 3;

    // create an instance of the Array class
    let arr = new Array();

    // #2 Explore the push() method

    // add an item to the array
    arr.push(3); 
    // length = 1, _capacity set to (length + 1) * Array.SIZE_RATIO = 3, ptr set to 0

    arr.push(5);
    // length = 2, _capacity still = 3, ptr = 0

    arr.push(15); 
    // length = 3, _capacity still = 3, ptr = 0;

    arr.push(19);
    // since previous length = _capacity, new _capacity is set to (3 + 1) * 3 = 12. length = 4. ptr is set to 3 (still unclear why)

    arr.push(45);
    arr.push(10);
    // length = 6, _capacity = 12, ptr = 3

    // #3 Exploring the pop() method

    arr.pop();
    arr.pop();
    arr.pop();
    // arr.pop() shortens the length each time it is run but doesn't touch the _capacity or ptr.
    // length = 0, capacity = 12, ptr = 3

    // #4 Understanding more about how arrays work

    // Print 1st item in the array:
        //console.log(arr.get(0))
    
    arr.pop();
    arr.pop();
    arr.pop();

    arr.push('tauhida'); // "tauhida" is pushed to the first spot in the array, but the capacity and ptr are still 12 and 3 from before
    //console.log(arr)

    // the purpose of the _resize() funciton in my Array class is to make the array bigger to accomodate for a larger array length.
    // When removing items from an array and making the length smaller, the _resize() function is not called, length stays the same.


}
main()


// #5 URLify a string (replace spaces with %20)
    function URLify(string){
        let joiner = '%20'
        let newString = ''
        newString = string.split(' ').join(joiner)
        return newString;
    }
    //console.log(URLify('www.thinkful.com /tauh ida parv een'))


// #6 Filtering an Array
    function filterArray(arr){
        let newArr = []
        for(let i = 0; i < arr.length; i++){
            if (arr[i] < 5){
            }
            else{
                newArr.push(arr[i])
            }
        }
        return newArr
    }
    //console.log(filterArray([1,2,3,4,5,6,7,8]))

// #7 Max sum in the array


// #8 Merge Arrays *** NOT WORKING PROPERLY
    function mergeArrays(arr1, arr2){
        let newArr = []
        for(let i = 0; i < arr1.length; i++){
            for(let j = 0; j < arr2.length; j++){
                if(arr2[j] <= arr1[i]){
                    newArr.push(arr2[j])
                    arr2.shift()
                }
            }
            newArr.push(arr1[i])
        }
        return newArr;
    }   

    //console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))


// #9 Remove Characters *** NOT WORKING PROPERLY
    function removeChars(str, chars){
        let newStr = ''
        for(let i = 0; i < chars.length; i++){
            for(let j = 0; j < str.length; j++){
                if(str[j].toLowerCase() == chars[i]){

                }
                else{
                    newStr += str[j]
                }
            }
        }
        return newStr;
        
    }

    //console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));


// #10 Products


// #11 2D Array


// #12 String Rotation
