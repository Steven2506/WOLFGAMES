/* ================================
   CALENDARIO F1 2026
================================ */

const f1Calendar = [

{
name:"GP Australia 🇦🇺",
circuit:"Albert Park",
date:"2026-03-08T05:00:00"
},

{
name:"GP China 🇨🇳",
circuit:"Shanghai",
date:"2026-03-15T08:00:00"
},

{
name:"GP Japón 🇯🇵",
circuit:"Suzuka",
date:"2026-03-29T07:00:00"
},

{
name:"GP Miami 🇺🇸",
circuit:"Miami International Autodrome",
date:"2026-05-03T22:00:00"
},

{
name:"GP Emilia Romagna 🇮🇹",
circuit:"Imola",
date:"2026-05-17T15:00:00"
},

{
name:"GP Mónaco 🇲🇨",
circuit:"Monte Carlo",
date:"2026-05-24T15:00:00"
},

{
name:"GP España 🇪🇸",
circuit:"Barcelona",
date:"2026-05-31T15:00:00"
},

{
name:"GP Canadá 🇨🇦",
circuit:"Montreal",
date:"2026-06-14T20:00:00"
},

{
name:"GP Austria 🇦🇹",
circuit:"Red Bull Ring",
date:"2026-06-28T15:00:00"
},

{
name:"GP Gran Bretaña 🇬🇧",
circuit:"Silverstone",
date:"2026-07-05T16:00:00"
},

{
name:"GP Hungría 🇭🇺",
circuit:"Hungaroring",
date:"2026-07-19T15:00:00"
},

{
name:"GP Bélgica 🇧🇪",
circuit:"Spa-Francorchamps",
date:"2026-07-26T15:00:00"
},

{
name:"GP Países Bajos 🇳🇱",
circuit:"Zandvoort",
date:"2026-08-30T15:00:00"
},

{
name:"GP Italia 🇮🇹",
circuit:"Monza",
date:"2026-09-06T15:00:00"
},

{
name:"GP Azerbaiyán 🇦🇿",
circuit:"Bakú",
date:"2026-09-20T13:00:00"
},

{
name:"GP Singapur 🇸🇬",
circuit:"Marina Bay",
date:"2026-10-04T14:00:00"
},

{
name:"GP Estados Unidos 🇺🇸",
circuit:"Austin",
date:"2026-10-18T21:00:00"
},

{
name:"GP México 🇲🇽",
circuit:"Hermanos Rodríguez",
date:"2026-10-25T21:00:00"
},

{
name:"GP Brasil 🇧🇷",
circuit:"Interlagos",
date:"2026-11-08T18:00:00"
},

{
name:"GP Las Vegas 🇺🇸",
circuit:"Las Vegas Strip",
date:"2026-11-22T05:00:00"
},

{
name:"GP Qatar 🇶🇦",
circuit:"Losail",
date:"2026-11-29T17:00:00"
},

{
name:"GP Abu Dhabi 🇦🇪",
circuit:"Yas Marina",
date:"2026-12-06T14:00:00"
}

];


/* ================================
   ORDENAR CALENDARIO
================================ */

f1Calendar.sort((a,b)=> new Date(a.date) - new Date(b.date));


/* ================================
   DETECTAR SIGUIENTE GP
================================ */

function getNextRace(){

const now = new Date().getTime();

for(let race of f1Calendar){

const time = new Date(race.date).getTime();

if(time > now){
return race;
}

}

// 🔥 fallback (nunca debería pasar)
return f1Calendar[0];

}


/* ================================
   COUNTDOWN
================================ */

function startCountdown(target, element){

setInterval(()=>{

const now = new Date().getTime();
const diff = target - now;

const d = Math.floor(diff/(1000*60*60*24));
const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
const m = Math.floor((diff%(1000*60*60))/(1000*60));

document.getElementById(element).innerHTML =
d + "d " + h + "h " + m + "m";

},1000);

}