//
// Main click elements
//
let clicksbutton = document.getElementById("clicksbutton");
let clickstext = document.getElementById("clicks");

//
// Data elements
//
let clickrate = document.getElementById("clickrate");
let clickbaitcount = document.getElementById("clickbaitcount");
let viralvidscount = document.getElementById("viralvidscount");
let dramacount = document.getElementById("dramacount");
let botcount = document.getElementById("botcount");
let stanscount = document.getElementById("stanscount");
let overlordcount = document.getElementById("overlordcount");
let clickbaitp = document.getElementById("clickbaitp");
let viralvidsp = document.getElementById("viralvidsp");
let dramap = document.getElementById("dramap");
let botp = document.getElementById("botp");
let stansp = document.getElementById("stansp");
let overlordp = document.getElementById("overlordp");

//
// Events elements
//
const PULSE_SLOW = "pulse-slow";
const PULSE_MED = "pulse-med"
const PULSE_FAST = "pulse-fast";
const INCR_ANIM = "random-incr";
const DECR_ANIM = "random-decr";
const MULT_ANIM = "random-mult";
const FADE_IN = "fade-in";
const END_ANIM = "fill-screen";
let eventtext = document.getElementById("event");
let magicbutton = document.getElementById("magicbutton");
let events_div = document.getElementById("eventsbar");
let clickratep = document.getElementById("clickratep");
let cursorimg = document.getElementById("cursorimg")
let magiccontainer = document.getElementById("magiccontainer");
let contentcontainer = Array.prototype.slice.call(document.getElementsByClassName("content-container"));
let midcontainer = Array.prototype.slice.call(document.getElementsByClassName("mid-container"));
let outercontainer = Array.prototype.slice.call(document.getElementsByClassName("outercontainer"));
let contentcontainers = contentcontainer.concat(midcontainer).concat(outercontainer).concat(magiccontainer);
let theend = document.getElementById("theend");
let theendtext = document.getElementById("theendtext");

//
// UI containers
//
let upgrades_div = document.getElementById("upgrades");
let shop_div = document.getElementById("shop");
//let content = document.getElementsByClassName("container");

//
// UI modication functions
//
function setText(element, text){
	element.innerHTML = text;
}

function addDiv(parent_element, classname){
	var newdiv = document.createElement('div');
	newdiv.className = classname;
	parent_element.appendChild(newdiv);
	return newdiv;
}

function addP(parent_element, classname, text){
	var newp = document.createElement('p');
	newp.classname = classname;
	setText(newp, text);
	parent_element.appendChild(newp);
	return newp;
}

function addButton(parent_element, classname, text){
	var newbut = document.createElement('button');
	newbut.classname = classname;
	setText(newbut, text);
	parent_element.appendChild(newbut);
	return newbut;
}

function makeHidden(element){
	if (!element.classList.contains("hidden")){
		element.classList.add("hidden");
	}
}

function makeVisible(element){
	element.classList.remove("hidden");
}

function addAnimation(element, anim){
	if (!element.classList.contains(anim)){
		element.classList.add(anim);
	}
}

function addAnimations(elements, anim){
	for ( var i=0; i<elements.length; i++) {
		if (!elements[i].classList.contains(anim)){
			elements[i].classList.add(anim);
			console.log(elements[i]);
		}
	}
}

function removeAnimation(element, anim){
	element.classList.remove(anim);
}

function removeAnimations(elements, anim){
	for ( var i=0; i<elements.length; i++) {
		elements[i].classList.remove(anim);
	}
}

//
// Upgrades and shop functions
//
function buyUpdate(div, price, effect){
	if (data.clicks >= price) {
		div.classList.add("inactive");
		data.clicks -= price;
		effect();
	}
}

function buyItem(price_element, item){
	if (data.clicks >= item.price) {
		data.clicks -= item.price;
		item.price = Math.floor(item.price*1.1);
		setText(price_element, item.price + " clicks");
		data[item.type]++;
		item.effect();
	}
}

function createUpgrade(name, desc, price, effect){
	let div_el = addDiv(upgrades_div, "innercontainer");
	addAnimation(div_el, FADE_IN);
	let name_el = addP(div_el, "upgradename", name);
	name_el.classList.add("bold");
	let desc_el = addP(div_el, "upgradedesc", desc);
	let price_el = addP(div_el, "upgradeprice", price + " clicks");
	let but_el = addButton(div_el, "upgradebutton", "Buy");
	but_el.addEventListener("click", function(){ buyUpdate(div_el, price, effect) });
	return 1;
}

function createItemDiv(item){
	let div_el = addDiv(shop_div, "innercontainer");
	addAnimation(div_el, FADE_IN);
	let name_el = addP(div_el, "itemname", item.name);
	name_el.classList.add("bold");
	let desc_el = addP(div_el, "itemdesc", item.desc);
	let price_el = addP(div_el, "itemprice", item.price+" clicks");
	let but_el = addButton(div_el, "itembutton", "Buy");
	but_el.addEventListener("click", function(){ buyItem(price_el, item) });
	return 1;
}

