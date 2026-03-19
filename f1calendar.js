/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const calendar = [

{
name:"GP Australia 🇦🇺",
circuit:"Albert Park",
date:"2026-03-08T05:00:00"
},

{
name:"GP China 🇨🇳",
circuit:"Shanghai International Circuit",
date:"2026-03-15T08:00:00"
},

{
name:"GP Japón 🇯🇵",
circuit:"Suzuka Circuit",
date:"2026-03-29T07:00:00"
},

{
name:"GP Miami 🇺🇸",
circuit:"Miami International Autodrome",
date:"2026-05-03T21:00:00"
},

{
name:"GP Canadá 🇨🇦",
circuit:"Circuit Gilles Villeneuve",
date:"2026-05-24T20:00:00"
},

{
name:"GP Mónaco 🇲🇨",
circuit:"Circuit de Monaco",
date:"2026-06-07T15:00:00"
},

{
name:"GP España 🇪🇸",
circuit:"Circuit de Barcelona-Catalunya",
date:"2026-06-14T15:00:00"
},

{
name:"GP Austria 🇦🇹",
circuit:"Red Bull Ring",
date:"2026-06-28T15:00:00"
},

{
name:"GP Gran Bretaña 🇬🇧",
circuit:"Silverstone",
date:"2026-07-05T15:00:00"
},

{
name:"GP Bélgica 🇧🇪",
circuit:"Spa-Francorchamps",
date:"2026-07-19T15:00:00"
},

{
name:"GP Hungría 🇭🇺",
circuit:"Hungaroring",
date:"2026-07-26T15:00:00"
},

{
name:"GP Países Bajos 🇳🇱",
circuit:"Zandvoort",
date:"2026-08-23T15:00:00"
},

{
name:"GP Italia 🇮🇹",
circuit:"Monza",
date:"2026-09-06T15:00:00"
},

{
name:"GP España (Madrid) 🇪🇸",
circuit:"Madring",
date:"2026-09-13T15:00:00"
},

{
name:"GP Azerbaiyán 🇦🇿",
circuit:"Baku City Circuit",
date:"2026-09-27T13:00:00"
},

{
name:"GP Singapur 🇸🇬",
circuit:"Marina Bay",
date:"2026-10-11T14:00:00"
},

{
name:"GP Estados Unidos 🇺🇸",
circuit:"Circuit of the Americas",
date:"2026-10-25T21:00:00"
},

{
name:"GP México 🇲🇽",
circuit:"Autódromo Hermanos Rodríguez",
date:"2026-11-01T21:00:00"
},

{
name:"GP Brasil 🇧🇷",
circuit:"Interlagos",
date:"2026-11-08T18:00:00"
},

{
name:"GP Las Vegas 🇺🇸",
circuit:"Las Vegas Strip Circuit",
date:"2026-11-21T07:00:00"
},

{
name:"GP Qatar 🇶🇦",
circuit:"Losail",
date:"2026-11-29T17:00:00"
},

{
name:"GP Abu Dhabi 🇦🇪",
circuit:"Yas Marina",
date:"2026-12-06T17:00:00"
}

];

function getNextRace(){

const now = new Date().getTime();

for(let race of calendar){

const time = new Date(race.date).getTime();

if(time > now){
return race;
}

}

return null;

}

function startCountdown(target,element){

setInterval(()=>{

const now = new Date().getTime();

const diff = target-now;

const d=Math.floor(diff/(1000*60*60*24));
const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
const m=Math.floor((diff%(1000*60*60))/(1000*60));

document.getElementById(element).innerHTML=
d+"d "+h+"h "+m+"m";

},1000);

}

