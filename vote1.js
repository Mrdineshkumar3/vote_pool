console.log('hello')
let button1=document.getElementById('button1')
let button2=document.getElementById('button2')
let button3=document.getElementById('button3')
let button4=document.getElementById('button4')

let right1=document.getElementById('right1')
let right2=document.getElementById('right2')
let age=['71 years','69 years','57 years','50 years']
let names=['M.K. Stalin','Edappadi K. Palaniswami','Seeman','Vijay']
let photo=['01.jpg','02.jpg','03.jpg','04.jpg']
 let count1=0
let count2=0
let count3=0
let count4=0

button1.addEventListener('click',()=>{
    
    right1.style.top='-600px'
    right2.style.top='40px'
    button1.style.backgroundColor=" rgb(11, 55, 68)"
    button1.style.color="white"
    button1.style.boxShadow="none"
    document.getElementById('canname').innerHTML=names[0]
    document.getElementById('canage').innerHTML=age[0]
    document.getElementById('katchi').innerHTML='திராவிட முன்னேற்றக் கழகம்'
    document.getElementById('polimg').src=photo[0]
    button2.style.pointerEvents='none'
    button3.style.pointerEvents='none'
    button4.style.pointerEvents='none'
    

   setTimeout(somereturn,7000)
count1++
})

function somereturn(){
    right1.style.top='0px'
    right2.style.top='580px'
    button1.style.backgroundColor=""
    button1.style.color=""
    button1.style.boxShadow=""
    button2.style.pointerEvents='auto'
    button3.style.pointerEvents='auto'
    button4.style.pointerEvents='auto'
}
button2.addEventListener('click',()=>{
    
    right1.style.top='-600px'
    right2.style.top='40px'
    button2.style.backgroundColor=" rgb(11, 55, 68)"
    button2.style.color="white"
    button2.style.boxShadow="none"
    document.getElementById('canname').innerHTML=names[1]
    document.getElementById('canage').innerHTML=age[1]
    document.getElementById('katchi').innerHTML='அனைத்திந்திய அண்ணா திராவிட முன்னேற்றக் கழகம்'
    document.getElementById('polimg').src=photo[1]
   setTimeout(somereturn1,7000)
   count2++
   button1.style.pointerEvents='none'
   button3.style.pointerEvents='none'
   button4.style.pointerEvents='none'
   

})

function somereturn1(){
    right1.style.top='0px'
    right2.style.top='580px'
    button2.style.backgroundColor=""
    button2.style.color=""
    button2.style.boxShadow=""
    button1.style.pointerEvents='auto'
    button3.style.pointerEvents='auto'
    button4.style.pointerEvents='auto'
}


button3.addEventListener('click',()=>{
    
    right1.style.top='-600px'
    right2.style.top='40px'
    button3.style.backgroundColor=" rgb(11, 55, 68)"
    button3.style.color="white"
    button3.style.boxShadow="none"
    document.getElementById('canname').innerHTML=names[2]
    document.getElementById('canage').innerHTML=age[2]
    document.getElementById('katchi').innerHTML='நாம் தமிழர் கட்சி '
    document.getElementById('polimg').src=photo[2]
   setTimeout(somereturn2,7000)
   count3++
   button1.style.pointerEvents='none'
   button2.style.pointerEvents='none'
   button4.style.pointerEvents='none'
})

function somereturn2(){
    right1.style.top='0px'
    right2.style.top='580px'
    button3.style.backgroundColor=""
    button3.style.color=""
    button3.style.boxShadow=""
    button2.style.pointerEvents='auto'
    button1.style.pointerEvents='auto'
    button4.style.pointerEvents='auto'
}
button4.addEventListener('click',()=>{
    
    right1.style.top='-600px'
    right2.style.top='40px'
    button4.style.backgroundColor=" rgb(11, 55, 68)"
    button4.style.color="white"
    button4.style.boxShadow="none"
    document.getElementById('canname').innerHTML=names[3]
    document.getElementById('canage').innerHTML=age[3]
    document.getElementById('katchi').innerHTML='தமிழக வெற்றிக் கழகம் '
    document.getElementById('polimg').src=photo[3]
   setTimeout(somereturn3,7000)
   count4++
   button1.style.pointerEvents='none'
   button3.style.pointerEvents='none'
   button2.style.pointerEvents='none'
    
})

function somereturn3(){
    right1.style.top='0px'
    right2.style.top='580px'
    button4.style.backgroundColor=""
    button4.style.color=""
    button4.style.boxShadow=""
    button1.style.pointerEvents='auto'
    button3.style.pointerEvents='auto'
    button2.style.pointerEvents='auto'
}



let esult=document.getElementById('esult')
esult.addEventListener('click',()=>{
    document.getElementById('q1').innerHTML=count1
    document.getElementById('q2').innerHTML=count2
    document.getElementById('q3').innerHTML=count3
    document.getElementById('q4').innerHTML=count4
    document.getElementById('resulttable').style.visibility='visible'
})