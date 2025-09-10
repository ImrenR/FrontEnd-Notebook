console.log("Calculate.js Hello !")



let myName="Ipek"
console.log(myName)


const calculate =(arr)=>{
  // we will sum the datas of products in array
return  arr.reduce((sum,product)=> sum+product.price,0)
// dont forget return to add, otherwise console will appear undefined

}