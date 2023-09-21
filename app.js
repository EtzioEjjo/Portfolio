const socials=require('./public/styles/js/socialmedia.js')

const express=require('express');
const mailer=require('nodemailer');

const bodyParser=require('body-parser');


const port=3000;
const app=new express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));



const transporter=mailer.createTransport({

    service:'gmail',
    auth:{
        user:'othmanaujjeh@gmail.com',
        pass:'dtkt euwq tnha ghmi'
    }

})



app.get('/mhmdFB',(req,res)=>{

    res.redirect(socials['facebook'])
})

app.get('/mhmdPIN',(req,res)=>{
    res.redirect(socials['pinterest'])


})
app.get('/mhmdIN',(req,res)=>{
    res.redirect(socials['linkden'])


})
app.get('/',(req,res)=>{
    res.render('me.ejs')
})


app.post('/sendEmail',async (req,res)=>{

    const {username,email,message}=req.body;
    
    const info = await transporter.sendMail({
        from:email, // sender address
        to: 'qq-21@outlook.com', // list of receivers
        subject:"Hello Mohammed ,I've checked your portfolio ✔ ", // Subject line
        text: `By ${username} \nEmail : ${email} \nMessage : ${message}`, // plain text body
        
      }) .then(info=>{

      }).catch(err=>{
        
        
      });

    

})
app.listen(port);