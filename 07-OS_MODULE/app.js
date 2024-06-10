const os = require('os');
// console.log(os) // 운영체제 정보 확인
// console.log(os.totalmem()); // 컴퓨터 토탈 메모리


let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`total memory:${totalMemory}`);
console.log(`free memory:${freeMemory}`);

