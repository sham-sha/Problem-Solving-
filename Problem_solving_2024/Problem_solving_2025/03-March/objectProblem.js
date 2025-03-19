/*
Create a function multiplyByTwo(obj) that multiplies all the numeric property values odf nums by two  


*/


let nums = {
    a:100,
    b:200,
    c:"my nums",
}

function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] ==="number"){
            obj[key]*=2;
        }
    }

}

multiplyByTwo(nums)
console.log(nums);





