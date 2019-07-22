var InputDate = prompt("Tarix daxil edin!!! - gün.ay.il");

var InputDateArray = InputDate.split(".");

while(InputDateArray.length<3 || Number(InputDateArray[2])<1000 || Number(InputDateArray[0])>31 || Number(InputDateArray[0])<1 || Number(InputDateArray[1])<0 || Number(InputDateArray[0])>11){
    alert("Tarixi düzgün daxil edin!!!");
    InputDate = prompt("Tarix daxil edin!!! - gün.ay.il..");
    InputDateArray = InputDate.split(".");
}

var myDate = new Date();

const MonthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];

function getFulldate(FullTime, arr){ 

    FullTime.setMonth(Number(arr[1])-1);
    FullTime.setDate(Number(arr[0]));
    FullTime.setFullYear(Number(arr[2]));

    if(myDate.getMonth()<4){
        alert(`${myDate.getDate()} / ${myDate.getMonth()+1} / ${myDate.getFullYear()} : 1st Quarter of the year`); 
    }
    else if(myDate.getMonth()>=4 && myDate.getMonth()<7 ){
        alert(`${myDate.getDate()} / ${MonthNames[myDate.getMonth()]} / ${myDate.getFullYear()} : 2nd Quarter of the year`); 
    }
    else if(myDate.getMonth()>=7 && myDate.getMonth()<10 ){
        alert(`${myDate.getDate()} / ${MonthNames[myDate.getMonth()]} / ${myDate.getFullYear()} : 3rd Quarter of the year`); 
    }
    else{
        alert(`${myDate.getDate()} / ${MonthNames[myDate.getMonth()]} / ${myDate.getFullYear()} : Last Quarter of the year`);
    }
       
};

getFulldate(myDate, InputDateArray);








