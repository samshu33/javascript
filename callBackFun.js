function calculator(sign){
    sign()
    console.log(sign)
}
function add(){
    console.log("hey this is callback function")
}
calculator (add)