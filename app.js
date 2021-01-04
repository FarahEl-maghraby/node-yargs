// 1) Import node core modules

const fs = require('fs')
fs.writeFileSync('notes.txt','Hello')
console.log(fs.readFileSync('notes.txt').toString())

fs.appendFileSync('notes.txt','Adam')

/////////////////////////////////////////////////////////////////////////////////////////

// 2) Import your own files
const x = require('./data')
console.log(x.name1)

//////////////////////////////////////////////////////////////////////////////////////

// npm init -y 
// Name of package
// In case node_modules --> npm i / npm install

// chalk
// 3) Import node package module

const validator = require('validator')
console.log(validator.isEmail('farah@gmail.com'))

///////////////////////////////////////////////////////////////////////////////

// console.log(process.argv)

// const command = process.argv[2]
// if(command === 'add'){
//     console.log('Add Item')
// }
// else if (command === 'delete'){
//     console.log('Delete Item')
// }
// else{
//     console.log('Unknown')
// }

///////////////////////////////////////////////////////////////////////////////////

// Yargs 

const yargs = require('yargs')

// yargs.command({
//     command:'add',
//     describe: 'Add note',
//     handler: function(){
//         console.log('Note has been added')
//     }

// })

// yargs.command({
//     command:'delete',
//     describe: 'Delete note',
//     handler: function(){
//         console.log('Note has been delete')
//     }

// })

// yargs.command({
//     command:'read',
//     describe: 'Read note',
//     handler: function(){
//         console.log('Notes has been read')
//     }

// })

// yargs.command({
//     command:'list',
//     describe: 'List note',
//     handler: function(){
//         console.log('Notes has been listed')
//     }

// })


////////////////////////////////////////////////////////////////////////////////////
//2

yargs.command({
    command:'add',
    describe: 'Add note',
    builder:{
        title:{
            describe: 'Title of note to be added',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe: 'Body of note to be added',
            demandOption:true,
            type: 'string'
        },
    },
    handler: function(argv){
         console.log('Title is', argv.title)
         console.log('Body is', argv.body)
         console.log('Note has been added')
    }

})

 console.log(yargs.argv)
yargs.parse()
// console.log(yargs.argv)




