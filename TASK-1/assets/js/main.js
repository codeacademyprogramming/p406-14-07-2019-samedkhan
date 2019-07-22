function Student (name, surname, age, phoneNumber){
    this.name = name,
    this.surname = surname,
    this.age = age,
    this.phoneNumber = phoneNumber
}

function Teacher (name, surname, age, educations, expirences){
    this.name = name,
    this.surname = surname,
    this.age = age,
    this.educations = educations,
    this.expirence = expirences
}

function Classroom (name, room, teachers, students, duration, startDate){
    this.name = name,
    this.room = room,
    this.teacher = teachers,
    this.students = students,
    this.duration = duration,
    this.startDate = new Date(startDate),
    this.getStudentList = function(){
        students.forEach(function(element, index)  {
            console.log(`${index+1} ${element.name} ${element.surname}`);;     
        });  
    },
    this.getStudentPhoneNumber = function(studentName){
        students.forEach(element => {
            if(studentName==element.name){
                console.log(`${element.name} : ${element.phoneNumber}`);
            }
        })
    }
    this.getEndOfCourse = function(){
        var MonthesArray = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];

        var EndOfCourse = new Date((GetMilliseconds(duration*178)/10) + P406.startDate.getTime());       // 178 - Həftədəki saatların sayı, Həftədə 10 saat dərs keçiləcəyini nəzərə alaraq hesablama
        
        console.log(`Kursun müddəti ${duration} saat \n Kursun son günü: ${EndOfCourse.getDate()} ${MonthesArray[EndOfCourse.getMonth()]} ${EndOfCourse.getFullYear()}`);
    }

}

function GetMilliseconds(hours){
    return hours*60*60*1000;
}

var Samed = new Student("Samed", "Khankishiev", 36, "(055)653-30-31");
var Romal = new Student("Romal", "Qurbanov", 37, "(055)708-08-38");

var StudentArray = [Samed, Romal];

var Jamil = new Teacher("Jamil", "Alisigandarov", 21, ["ADNSU", "Cambridge"], ["Code-Academy", "Pasha-Bank"]);
var Yolchu = new Teacher("Yolchu", "Nasib", 26, ["MarmaraUni", "Oxford"], ["Code-Academy", "Asan-Innovation"]);

var TeacherArray = [Jamil, Yolchu];


var P406 = new Classroom ("P406", "Neptune", TeacherArray, StudentArray, 340, 'May 18, 2019');


P406.getStudentList();
P406.getStudentPhoneNumber("Samed");
P406.getEndOfCourse();

