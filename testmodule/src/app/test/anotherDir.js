'use strict';

// import '../qiantao.js'
var fuc = require('../qiantao.js')
console.log('dir ||inside|| module execute')
export default function (){
    console.log('dir start -- --')
    fuc() 
    console.log('dir end -- --')
}