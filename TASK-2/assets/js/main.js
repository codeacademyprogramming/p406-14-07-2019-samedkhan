var InputDate = prompt("Ayin tarixin daxil edin!!!");

while(Number(InputDate)<1 || Number(InputDate)>31 || Number(isNaN(InputDate)) || InputDate == ""){
    alert("Duzgun reqem daxil edin!!!");
    InputDate = prompt("Ayin tarixin daxil edin!!!");
}

var EndOfDate;

if(Number(InputDate)>10){
    EndOfDate = Number(InputDate.slice(-1,2));    
}
else{
    EndOfDate = Number(InputDate);
}

function showTime(){
    
    if(EndOfDate==3 || EndOfDate == 4){
        console.log(`Bugün ayın ${InputDate} - dür`);
    }
    else if(EndOfDate == 6){
        console.log(`Bugün ayın ${InputDate} - dır`);
    }
    else if(EndOfDate == 9 || EndOfDate == 10 || InputDate=="30"){
        console.log(`Bugün ayın ${InputDate} - dur`);
    }
    else{
        console.log(`Bugün ayın ${InputDate} - dir`);
    }

}

showTime();



