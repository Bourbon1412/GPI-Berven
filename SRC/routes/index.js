const express = require('express');
const router =express.Router();

router.get('/',(req,res)=>{res.render('index.html',{title:"Transportes Berven"});});
router.get('/contact',(req,res)=>{res.render('contact.html',{title:"Contáctanos"});});
router.get('/galeria',(req,res)=>{res.render('galeria.html',{title:"Galería"});});
router.get('/ns',(req,res)=>{res.render('ns.html',{title:"Nuestros Servicios"});});
router.get('/cotizaciones',(req,res)=>{res.render('cotizaciones.html',{title:"Cotización de Transporte"});});
module.exports=router;