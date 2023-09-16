const socials=require('./public/styles/js/socialmedia.js')
const express=require('express');

const port=3000;
const app=new express();
app.use(express.static('public'));



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

app.listen(port);