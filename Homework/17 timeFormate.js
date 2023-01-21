// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let now = new Date();
let YYYY = now.getFullYear();
let MM = now.getMonth();
let DD = now.getDate();
let HH = now.getHours();
let mm = now.getMinutes();

console.log(`${YYYY}-${MM<10 ? '0'+MM:MM}-${DD<10 ? '0'+DD:DD} ${HH<10 ? '0'+HH : HH}:${mm<10 ? '0'+mm : mm}`);
console.log(`${DD}-${MM}-${YYYY} ${HH}:${mm}`);
console.log(`${DD}/${MM}/${YYYY} ${HH}:${mm}`);
