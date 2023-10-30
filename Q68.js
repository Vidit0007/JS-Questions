//Use the filter function to remove all duplicates from an array:
const arr=[1,2,3,444,555,444,5,5,5];
const filtered= arr.filter((obj,index,self)=>{
    return self.indexOf(obj)===index; 
    // console.log(index); 
})
console.log(filtered)