create a function that takes an array of numbers and strings 
and return a new array without strings 

ex: myNewArray ([1,2, "Evie", 4,5, "Munoz"]) -> [1,2,4.5]

function newArray (arr){
    let newArr = []
    for(let i = 0; < arr,length; i++ ){
        if(typeof arr [i] === "number"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(newArray([1,2,"a,b"]))