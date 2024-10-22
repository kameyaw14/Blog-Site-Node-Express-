const fs = require('fs')

// read
// fs.readFile('blog1.txt',(err,data)=>{
//     if (err) {
//         console.log(err);
        
//     }
//     console.log(data.toString());
    
// })

// console.log('last');

// write
 
// fs.writeFile('blog2.js', 'take care', ()=>{
//     console.log("written");
    
// })

// directories
// const setInt = setInterval(() => {
    
//     if (!fs.existsSync('./rappers')) {
//         fs.mkdir('./rappers',(err)=>{
//             if (err) {
//                 console.log(err);
                        
//             }
//             console.log("created");
            
//         })
        
//     } else {
//         fs.rmdir('./rappers', (err)=>{
//             if (err) {
//                 console.log(err);
                
//             }
//             console.log('deleted');
            
//         })
//     }
// }, 10);

// setTimeout(() => {
//     clearInterval(setInt)
// }, 20000);

if (fs.existsSync('./test.js')) {
    fs.unlink('./test.js',(err)=>{
        if (err) {
        console.log('error');
                    
        }
        console.log("deleted");
        
    })
}