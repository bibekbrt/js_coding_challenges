
function checkTypes(arr)
{
    return arr.map((values)=>{

        return typeof values;
    });
}
const inputVal=[1,"a", true,null,undefined];
const result =checkTypes(inputVal);

console.log(result);



