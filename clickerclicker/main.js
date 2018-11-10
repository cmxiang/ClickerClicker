var data = new Object();
var items = new Object();
//var upgrades = new Object();
var events = new Object();

var magicevent = false;

var tickrate = 0.5;
var uiupdate_tickrate = 30;
var unlockevents_tickrate = 10;

init();
window.setInterval(update, 1000/tickrate);
window.setInterval(updateui, 1000/uiupdate_tickrate);
window.setInterval(updateevents, 1000/unlockevents_tickrate);

let random_events = [randomIncr, randomDecr, randomMultiply];

function init() {
	data.clicks = 0;
	data.clickweight = 1;
	data.autoclick = 0;
	data.clickrate = 0;
	
	data.clickbait = 0;
	data.viralvideos = 0;
	data.drama = 0;
	data.stans = 0;
	data.roboclickers = 0;
	data.overlord = 0;

	data.clicker = 0;
	data.betterclicker = 0;
	data.evenbetterclicker = 0;
	data.turboclicker = 0;
	data.warpclicker = 0;
	data.infinityclicker = 0;

	//data.event = 0;

	init_shop(); 
	//init_shopitems();
	//init_upgrades();
	init_events();
}

const incrClicks = (amt) => {
	if (data.clicks + amt < Number.MAX_SAFE_INTEGER){
		data.clicks = data.clicks + amt;
		setText(clickstext, data.clicks);
	}
}

function update_list(list){
	for (i in list) {
		if (list[i].update) list[i].update();
	}
}

function update() {
	if (data.clicks + Math.floor(data.autoclick) < Number.MAX_SAFE_INTEGER){
		data.clicks += Math.floor(data.autoclick);
	}
	if (Math.round( (data.autoclick/((1000/tickrate)/1000))*10 )/10 < Number.MAX_SAFE_INTEGER){
		data.clickrate = Math.round( (data.autoclick/((1000/tickrate)/1000))*10 )/10;
	}
}

function updateui() {
	setText(clickstext, data.clicks);
	setText(clickrate, data.clickrate);
	if (data.clickbait>0){
		setText(clickbaitcount, data.clickbait);
	}
	if (data.viralvideos>0){
		setText(viralvidscount, data.viralvideos);
	}
	if (data.drama>0){
		setText(dramacount, data.drama);
	}
	if (data.stans>0){
		setText(stanscount, data.stans);
	}
	if (data.roboclickers>0){
		setText(botcount, data.roboclickers);
	}
	if (data.overlord>0){
		setText(overlordcount, data.overlord);
	}
}

function updateevents() {
	update_list(events);
}

clicksbutton.onclick = function () { incrClicks(data.clickweight); };
magicbutton.onclick = function () { getRandomEvent(); makeHidden(magicbutton);};



