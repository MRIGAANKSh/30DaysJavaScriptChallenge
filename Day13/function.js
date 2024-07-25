function add(a,b){
    return a+b
}
function div(a,b){
    if(b==0){
        return console.log("div not possibile")
    }
    else{
        return (a/b)
    }
}
function sub(a,b){
    return a-b
}

module.exports={add,div,sub}