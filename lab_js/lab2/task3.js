function getGradeText_if(grade) {
    if (grade >= 90 && grade <= 100) {
        return "Відмінно";
    } 
    else if (grade >= 75) {
        return "Добре";
    } 
    else if (grade >= 60) {
        return "Задовільно";
    } 
    else {
        return "Незадовільно";
    }
}

console.log(getGradeText_if(85),"\n");

function getGradeText(grade) {
    return grade >= 90 ? "Відмінно" :
           grade >= 75 ? "Добре" :
           grade >= 60 ? "Задовільно" : "Незадовільно";
}

console.log(getGradeText(100),"\n");

function getSeason_if(mounth) {
    if (mounth>=1 && mounth<=2 || mounth==12) {
        return "Зима";
    }
    else if (mounth>=3 && mounth<=5) {
        return "Весна";
    }
    else if (mounth>=6 && mounth<=8) {
        return "Літо";
    }
    else if (mounth>=9 && mounth<=11) {
        return "Осінь";
    }
}

console.log(getSeason_if(3),"\n");

function Get_season(mounth) {
    return mounth>=1 && mounth<=2 || mounth==12 ? "Зима" :
        mounth>=3 && mounth<=5 ? "Весна" :    
        mounth>=6 && mounth<=8 ? "Літо" : "Осінь";
}
console.log(Get_season(6),"\n");