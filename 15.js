var a=prompt("Enter a number", "0");

var x=parseInt(a);

if(x%2===0){
    for(var i=x-2;i>x-12;i-=2){
        document.write(i);
        document.write("\n");
    }
}
else{
    for(var i=x-2;i<x-12;i-=2){
        document.write(i);
        document.write("\n");
    }
}