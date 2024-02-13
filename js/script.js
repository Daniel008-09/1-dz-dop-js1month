

let  currentDate = new Date()

let birthYear = prompt("введите год вашего рождения:")

if (parseInt(birthYear) > currentDate.getFullYear()){
    alert("вы еще не родились.");
} else {
    let age = currentDate.getFullYear() - parseInt(birthYear);

    if (age <30) {
        alert ("вы младше 30 лет.");
    }else if (age >= 30 && age < 60) {
        alert ("вы старше  30, но младше 60 лет. ");

    }else {
        alert("вам старше 60 лет, рекомендуется посетить врача.");
    }  
}
 
const  numbers = prompt('ведите число');


if (!isNaN(numbers) && numbers !== null && numbers.trim() !== "" ) {
    console.log('выы ввели число'+ numbers);
}else{
    console.log('введено не коректное значение ');
}

