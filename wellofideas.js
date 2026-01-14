function well(x){
     let count = 0;
    for (let idea of x){
    if (idea === "good"){
    count ++;
    }
}

if (count === 0){
    return "Fail!";
} 
else if (count <= 2){
    return "publish";
} else  {
    return "I smell a series ";
}
}
console.log(well(["good","bad"]));
console.log(well(["good","good","good","bad"]));
console.log(well(["bad","bad"]));