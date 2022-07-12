const Fs = require('fs');

Fs.writeFile('demo1.txt', 'Hi, There...', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Successful');
    }
})

Fs.appendFile('demo1.txt','I am Md. Majidur Rahman Sarker.', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Successful');
    }
})

Fs.readFile('demo1.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

// RENAME korar jonno use kora hoy.

// Fs.rename('demo1.txt', 'demo2.txt', (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('successful');
//     }
// })

// DELETE korar jonno use kora hoy

// Fs.unlink('demo1.txt', (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('successful');
//     }
// })

// EXIST use kora hoy kno kichu khuje ber korar jonno

Fs.exists('demo2.txt', (result) => {
    if(result){
        console.log('found');
    }else{
        console.log('not found');
    }
})