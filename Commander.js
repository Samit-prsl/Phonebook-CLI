#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {AddName,FindCustomer,UpdateCustomer,DeleteCustomer,listCustomers} = require('./index')

const questions = [
    {
        type : 'input',
        name : 'firstname',
        message : 'Contact First Name'
    },
    {
        type : 'input',
        name : 'lastname',
        message : 'Contact Last Name'
    },
    {
        type : 'input',
        name : 'phone',
        message : 'Contact Phonenumber'
    },
    {
        type : 'input',
        name : 'email',
        message : 'Contact email address'
    }
]

program
 .version('1.0.0')
 .description('Client Management System')

program
 //.command('add <firstname> <lastname> <phone> <email>')
 .command('add')
 .alias('a')
 .description('Add a contact')
 //.action((firstname,lastname,phone,email)=>{
   // AddName({firstname,lastname,phone,email});
 //})
 .action(()=>{
    prompt(questions).then((answers)=>{
        AddName(answers)
    })
    
 })

 program
 //.command('add <firstname> <lastname> <phone> <email>')
 .command('update <id>')
 .alias('u')
 .description('update a contact')
 //.action((firstname,lastname,phone,email)=>{
   // AddName({firstname,lastname,phone,email});
 //})
 .action((_id)=>{
    prompt(questions).then((answers)=>{
        UpdateCustomer(_id,answers)
    })
    
 })

program
 .command('find <n>')
 .alias('f')
 .description('Find a contact')
 .action((n)=>{
    FindCustomer(n)
 })

 program
 .command('remove <n>')
 .alias('r')
 .description('remove a contact')
 .action((_id)=>{
    DeleteCustomer(_id)
 })

 program
 .command('list')
 .alias('l')
 .description('Listing the contacts')
 .action(()=>{
    listCustomers()
 })


 program.parse(process.argv);