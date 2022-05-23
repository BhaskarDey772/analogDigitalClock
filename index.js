const deg = 6;
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');
const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const ampm = document.getElementById('ampm');
const daynum = document.getElementById('daynum');
const month = document.getElementById('month');
const year = document.getElementById('year');

const body = document.getElementById('body');
const label = document.getElementById('label');
const icon = document.getElementById('icon');

label.addEventListener('click',()=>{
    body.className = body.className=="light"?"dark":"light";
    icon.className = body.className=="light"?"fas fa-moon":"fas fa-sun";
})


setInterval(clock,1000)

function clock() {

    let day = new Date();
let hh = day.getHours()*30;
let mm = day.getMinutes()*deg;
let ss = day.getSeconds()*deg;

let dhh = day.getHours();
let dmm = day.getMinutes();
let dnum = day.getDate();
let mo = day.getMonth();
let yr = day.getFullYear();
year.innerHTML=yr;
if(dhh>=12){ampm.innerText="PM"}
if (dhh==0) {dhh=12;}
if(dhh>12){dhh=(dhh-12).toString();}
hour.innerText=dhh;
if(dmm<10){dmm="0"+dmm.toString();}
minutes.innerText=dmm;
if(dnum<10){dnum="0"+dnum.toString();}
daynum.innerText=dnum;
const mon = new Array("January", "Feburuary","March","April","May","June","July","August","Septembar","Ocatbar","November","Decembar");
month.innerText = mon[mo];
hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${(mm)}deg)`;
sc.style.transform = `rotateZ(${(ss)}deg)`;
    
}

clock()

