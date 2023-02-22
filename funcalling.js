// -------------call by value-----------------
function fun (a){
    a=50
}
ar=10
fun(ar)
console.log(ar)



// -------------call by reference-----------------
function fun (ar){
    ar=30
}
ar=[4,5]
fun(ar)
console.log(ar[1])