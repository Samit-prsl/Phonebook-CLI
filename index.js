const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Name = require('./Models/Contact');

const db = mongoose.connect(process.env.MONGO_URI,{ 
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(console.log('Loading...')).catch((e)=>{
    console.log(e)
})

//Add Customer
const AddName = (name)=>{
    Name.create(name).then((name)=>{
        console.log('New name added');
    })
   // db.close();
}

//Find Customer
const FindCustomer = (n)=>{
    const search = new RegExp(n,'i');
    Name.find({$or : [{firstname : search},{lastname : search}]}).then((n)=>{
        console.log(n);
        console.log(`${n.length} mathches`);
       // db.close();
    })
}

//update Customer
const UpdateCustomer = (_id,name)=>{
    Name.findByIdAndUpdate({_id},name).then((name)=>{
        console.log(`Contact Updated`);
    })
}

//delete customer

const DeleteCustomer = (_id)=>{
    Name.findByIdAndRemove({_id}).then((name)=>{
        console.log(`Contact Deleted`);
    })
}

//list all
const listCustomers = ()=>{
    Name.find().then((name)=>{
        console.log(name);
        console.log(`${name.length} contacts`);
    })
}

module.exports = {
    AddName,FindCustomer,UpdateCustomer,DeleteCustomer,listCustomers
}