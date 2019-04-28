const story = document.getElementById("story");
const button=   document.getElementById("new_number");
const firstName="Xander";
const lastName="Gillam"
const schoolSubject="math;reading;writing;french;spanish;computing;PE".split(";");
const adjective="smelly;googly;funny;hurrendous;fat;ugly".split(";")
const verbEndingInEd="flapped;deflated;danced;girated;stumbled;walked".split(";")
const grossAdjective="Smelly;Poopy;Dirty;Revolting;Repulsive;Sickening;Nauseating".split(";")
const grossThing="toilet water;toilet;underpants;poop;slime".split(";")
const place="England;the World;the School; the Universe".split(";")
const largeThing="big plushie;Doll house;Bluetooth speaker;cardboard box".split(";")
function random(list){
  return list[Math.floor(Math.random() * list.length)];
}


function genirateStory(){
story.innerHTML = `
This is ${firstName} ${lastName}. One day, ${firstName} was in
${random(schoolSubject)} class when a ${random(adjective)} dude ${random(verbEndingInEd)} through
the door he cried out "greetings ${random(adjective)} fools my name is Mr.
${random(grossAdjective)} ${random(grossThing)} and I am your new teacher."

${firstName} had seen this ${random(adjective)} guy before ! He was a
${random(adjective)} villan who was trying to take over ${random(place)}!
"You're not a teacher!" ${firstName} shouted. "yor are the evil villan,Professor ${random(grossAdjective)} ${random(grossThing)}!"
 ${firstName} grabbed a ${random(adjective)} ${random(largeThing)}and ${random(verbEndingInEd)} it at their new teacher. But the evil
 villan just ${random(verbEndingInEd)}



`
;
}


button.onclick=genirateStory;
genirateStory()
