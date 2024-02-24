const people = '{"animal": "Sparky", "name": "Seb", "animal": "Midnight", "name": "Amb", "animal": "Snowball", "name": "Hil", "animal": "Cleo", "name": "River", "animal": "Monty", "name": "Holb"}';

const obj = JSON.parse(people);

const sebber = `${obj.name[0]} and ${obj.animal} are great together`;
const amber = `${obj.name[1]} and ${obj.animal} loves each other`;
const hillon = `${obj.name[2]} and ${obj.animal} is amazing when they are around each other`;
const riverston = `${obj.name[3]} and ${obj.animal} found each other when they were lonely`;
const weber = `${obj.name[4]} and ${obj.animal} are like brother and sister`;

document.getElementById('seb').innerHTML = sebber;
document.getElementById('amb').innerHTML = amber;
document.getElementById('hil').innerHTML = hillon;
document.getElementById('river').innerHTML = riverston;
document.getElementById('holb').innerHTML = weber;