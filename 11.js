var a=prompt("Enter a number", "0");

if(a<50 || a>200){
    window.alert("The number is a valid number");
}
else if(a>50 && a<200){
    window.alert("This is a good number");
}
else
    window.alert("It is an invalid number");