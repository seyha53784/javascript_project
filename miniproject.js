//Database
const martialArtist = {

    class01: [
        { name: "Xiao Chuhe",identity: "Prince Yongan", age: 21, cultivation: ["Wuji Staff", "Cloud Step", "Nation Breaking Sword"],},
        { name: "Lei Wujie",identity: "Azure Dragon" , age: 19, cultivation: ["Fire Fist", "Thunder Sword", "heartSword Technique"]},
        { name: "Ye Anshi", age: 21,identity: "Tianweitian Leader", cultivation: ["Buddha palm", "Golden Bell", "Formidable Fist"]},
    ],

    class02: [
        { name: "Tang Lian",identity: "Black tortoise", age: 23, cultivation: ["Secret Weapon", "Basic Martial Art", "Seven Starry Night technique"]},
        { name: "Sikong Qianlou",identity: "Vermilion Bird", age: 20, cultivation: ["Basic Spear", "Silver Moon spear", "Spear Deity technique"] },
        { name: "Wushuang",identity: "Wushuang city Lord",age: 17, cultivation: ["Basic Flying Sword", "13 Sword Control", "Vermilion Bird Technique"]},
    ],
};
//to display
const displayData = (room) => {
    const student = martialArtist[room];

    if (student && student.length > 0){
        console.log(`\n===Martial Artist in ${room}===`)

        for (let i = 0; i < student.length; i++){
            console.log(`${i+1}, Name: ${student[i].name},Identity: ${student[i].identity}, Age: ${student[i].age}, Cultivation: ${student[i].cultivation}`)
        }
        console.log(`Total Martial Artist: ${student.length}\n`);

    }else if( student && student.length === 0){
        console.log(`Class ${room} exists but has no students.`);

    }else{
        console.log( `Class ${room} not found.`);
    }
};
//to insert more cultivator
const insertData = (room, data) => {

    if (martialArtist[room]) {
        martialArtist[room].push(data);
        console.log(`Added to ${room}:`, data);

    } else {
       martialArtist[room] = [data];
        console.log(`Created ${room} and added:`, data);
    }
};

displayData("class01");
displayData("class02");

insertData("class01", { name: "Li hanyi",identity: "Xueyue city Sword Deity", age: 29, cultivation: ["Iron Glacier Sword"] });
insertData("class02", { name: "Zhao Yuzhen",identity: "Wangcheng Mount Sword Deity", age: 32, cultivation: ["Infinity Sword"] });
insertData("class01", { name: "Su Muyu",identity: "Dark River Assassin", age: 37, cultivation: ["18 Sword Technique"]});

displayData("class01");
displayData("class02");
