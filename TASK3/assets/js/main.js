var InputDate = prompt("Tarix daxil edin!!! - ay.gün.il");

var InputDateArray = InputDate.split(".");

while(InputDateArray.length<3 || Number(InputDateArray[2])<1000){
    alert("Tarixi düzgün daxil edin!!!");
    InputDate = prompt("Tarix daxil edin!!! - ay.gün.il..");
    InputDateArray = InputDate.split(".");
}

var myDate = new Date();


function getFulldate(FullTime, arr){ 

    FullTime.setMonth(Number(arr[0])-1);
    FullTime.setDate(Number(arr[1]));
    FullTime.setFullYear(Number(arr[2]));
    
}

getFulldate(myDate, InputDateArray);


console.log(InputDateArray);

console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getFullYear());






