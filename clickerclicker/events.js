function init_events(){
	//
	// General data based game events
	//
	events.clicks1 = new GameEvent(
			function() {
				return data.clicks>= 10;
			},
			function() {
				setText(eventtext, "Click click click away!");
			}
		);
	events.clicks2 = new GameEvent(
			function() {
				return data.clickrate >= 100;
			},
			function() {
				setText(eventtext, "The echo of clicks can be heard around the world... click click click......");
			}
		);
	events.clicks3 = new GameEvent(
			function() {
				return data.clickrate >= 500;
			},
			function() {
				setText(eventtext, "The sound of clicks blend together into one unending sound.");
			}
		);
	events.viralvideo1 = new GameEvent(
			function() {
				return data.viralvideos >= 1;
			},
			function() {
				setText(eventtext, "You've gone VIRAL babey");
				items.drama = new ShopItem("Drama", "Stir up some drama for the clicks", 300, "drama", function(){
				data.autoclick+=10;});
				createItemDiv(items.drama);
				makeVisible(viralvidp);
			}
		);
	events.viralvideo2 = new GameEvent(
			function() {
				return data.viralvideos >= 10;
			},
			function() {
				setText(eventtext, "You're channel is growing in popularity, you now have at least one subscriber.");
			}
		);
	events.viralvideo2 = new GameEvent(
			function() {
				return data.viralvideos >= 100;
			},
			function() {
				setText(eventtext, "You take up every spot on the trending page. Jimmy Fallon who?");
			}
		);
	events.viralvideo3 = new GameEvent(
			function() {
				return (data.viralvideos >= 250 || data.clickbait >= 300);
			},
			function() {
				setText(eventtext, "Your videos have amassed you a following of loyal fans.");
				items.stans = new ShopItem("Stans", "An army of clickers", 0, "stans", function(){
				data.autoclick+=500;});
				createItemDiv(items.stans);
			}
		);
	events.drama1 = new GameEvent(
			function() {
				return data.drama >= 1;
			},
			function() {
				makeVisible(dramap);
			}
		);
	events.stans = new GameEvent(
			function() {
				return data.stans >= 1;
			},
			function() {
				items.roboclicker = new ShopItem("ClickerBot", "A bot to do the clicking for you", 0, "roboclickers", function(){
				data.autoclick+=500;});
				createItemDiv(items.roboclicker);
				makeVisible(stansp);
			}
		);
	events.clickbait1 = new GameEvent(
			function() {
				return data.clickbait >= 1;
			},
			function() {
				setText(eventtext, "Absolutely genius. Who needs to make quality content when you have clickbait?");
				makeVisible(clickbaitp);
			}
		);
	events.clickbait2 = new GameEvent(
			function() {
				return data.clickbait >= 10;
			},
			function() {
				setText(eventtext, "YOU WON'T BELIEVE what one man will do for clicks!!! is the title of your next video.");
			}
		);
	events.roboclicker1 = new GameEvent(
			function() {
				return data.roboclickers >= 1;
			},
			function() {
				setText(eventtext, "Who needs people when you have bots?");
				makeVisible(botp);
			}
		);
	events.roboclicker2 = new GameEvent(
			function() {
				return data.roboclickers >= 50;
			},
			function() {
				setText(eventtext, "Machines are stealing our jobs. Doesn't matter though, you need those clicks.");
			}
		);
	events.roboclicker3 = new GameEvent(
			function() {
				return data.roboclickers >= 100;
			},
			function() {
				setText(eventtext, "You may have made a mistake. The robots are taking over. But they've been programmed to want clicks and clicks only, how bad could it get?");
			}
		);
	events.roboclicker4 = new GameEvent(
			function() {
				return data.roboclickers >= 200;
			},
			function() {
				setText(eventtext, "Uhoh");
				items.overlord = new ShopItem("ClickerBot Overlord", "", data.clicks*2, "overlord", function(){});
				createItemDiv(items.overlord);
			}
		);
	events.finalevent = new GameEvent(
			function() {
				return data.overlord == 1;
			},
			function() {
				makeVisible(overlordp);
				theEnd();
			}
		);
	//
	// Clicker upgrade events
	//
	events.clickerupgrade = new GameEvent(
			function() {
				return data.clicks >= 10;
			},
			function() {
				createUpgrade("Clicker v2", "+1 clicks per click", 50, function(){
					data.clickweight++;
				});
			}
		);
	events.betterclicker = new GameEvent(
			function() {
				return data.clicks >= 100;
			},
			function() {
				createUpgrade("Better Clicker", "A better clicker, just for you", 200, function(){
					data.clickweight += 3;
				});
			}
		);
	events.evenbetterclicker = new GameEvent(
			function() {
				return data.clickrate >= 50;
			},
			function() {
				createUpgrade("Even Better Clicker", "An even better clicker!", 1000, function(){
					data.clickweight += 10;
				});
			}
		);
	events.turboclicker = new GameEvent(
			function() {
				return data.clickrate >= 100;
			},
			function() {
				createUpgrade("Turbo Clicker", "Clicking at turbo speed", 1500, function(){
					data.clickweight += 20;
				});
			}
		);
	events.lightspeedclicker = new GameEvent(
			function() {
				return data.clickrate >= 200;
			},
			function() {
				createUpgrade("Lightspeed Clicker", "Clickclickclickclickclick", 3000, function(){
					data.clickweight += 50;
				});
			}
		);
	events.warpclicker = new GameEvent(
			function() {
				return data.clickrate >= 600;
			},
			function() {
				createUpgrade("Warp Clicker", "Thank Zefram Cochrane for this one", 5000, function(){
					data.clickweight += 200;
				});
			}
		);
	events.infinityclicker = new GameEvent(
			function() {
				return data.clickrate >= 1000;
			},
			function() {
				createUpgrade("Infinity Clicker", "CLICKCLICKCLICKCLICKCLICKCLICK", 10000, function(){
					data.clickweight += 1000;
				});
			}
		);
	//
	// Item upgrade events
	//
	events.clickbait2 = new GameEvent(
		function() {
				return data.clickbait >= 1;
			},
			function() {
				createUpgrade("Make your clickbait baitier", "", 200, function(){
					data.autoclick += data.clickbait * 2;
				});
			}
		);
	//
	//Animation events
	//
	events.clickrate = new GameEvent(
		function() {
				return data.clickrate > 0;
			},
			function() {
				addAnimation(cursorimg, PULSE_SLOW);
			}
		);
	events.clickrate1 = new GameEvent(
		function() {
				return data.clickrate >= 10;
			},
			function() {
				addAnimation(cursorimg, PULSE_MED);
			}
		);
	events.clickrate2 = new GameEvent(
		function() {
				return data.clickrate >= 50;
			},
			function() {
				addAnimation(cursorimg, PULSE_FAST);
			}
		);
}

function GameEvent(condition, effect, delay = 0){
	this.unlocked = false;
	this.condition = condition;
	this.effect = effect;
	this.delay = delay;
	this.update = function(){
		if(!this.unlocked){
			if(this.condition()){
				this.delay -= 1/unlockevents_tickrate;
				if(this.delay < 0){
					this.unlocked = true;
					this.effect();
				}
			}
		}
	}
}

window.setInterval(function(){magicButtonEvent()}, 10000);

const magicButtonEvent = () => {
	if (magicevent==false){
		let r = Math.floor((Math.random() * 10) + 1);
		if (!magicbutton.classList.contains("hidden")){
			makeHidden(magicbutton);
		}
		if (r==8) {
			makeVisible(magicbutton);
		}
	}
}

// Random events
const randomIncr = (interval) => {
	magicevent = true;
	let r = Math.floor((Math.random() * 100) + 1);
	let anim;
	data.autoclick += r;
	if (cursorimg.classList.contains(PULSE_SLOW)) {
		anim = PULSE_MED;
	}
	else if (cursorimg.classList.contains(PULSE_MED)) {
		anim = PULSE_FAST;
	}
	else {
		anim = PULSE_SLOW;
	}
	addAnimation(cursorimg, anim);
	addAnimations(contentcontainers, INCR_ANIM);
	clickratep.style.color = "red";
	setTimeout(function(){ removeAnimation(cursorimg, anim) }, interval*1000);
	setTimeout(function(){ removeAnimations(contentcontainers, INCR_ANIM) }, interval*1000);
	setTimeout(function(){ data.autoclick-=r; magicevent = false; clickratep.style.color="black"; }, interval*1000);
}
const randomDecr = (interval) => {
	let r = Math.floor((Math.random() * 10) + 1);
	if (data.autoclick >= 1){
		magicevent = true;
		data.autoclick /= r;
		addAnimation(cursorimg, PULSE_SLOW);
		addAnimations(contentcontainers, DECR_ANIM);
		clickratep.style.color="gray";
		setTimeout(function(){ removeAnimation(cursorimg, PULSE_SLOW) }, interval*1000);
		setTimeout(function(){ removeAnimations(contentcontainers, DECR_ANIM) }, interval*1000);
		setTimeout(function(){ data.autoclick+=r; magicevent = false; clickratep.style.color="black"; }, interval*1000);
	}
	else {
		randomIncr(interval);
	}
}
const randomMultiply = (interval) => {
	if (data.autoclick > 0){
		magicevent = true;
		let r = Math.floor((Math.random() * 5) + 2);
		data.autoclick *= r;
		addAnimation(cursorimg, PULSE_FAST);
		addAnimations(contentcontainers, MULT_ANIM);
		clickratep.style.color="red";
		setTimeout(function(){ removeAnimation(cursorimg, PULSE_FAST)}, interval*1000);
		setTimeout(function(){ removeAnimations(contentcontainers, MULT_ANIM) }, interval*1000);
		setTimeout(function(){ data.autoclick/=r; magicevent = false; clickratep.style.color="black"; }, interval*1000);
	}
	else {
		randomIncr(interval);
	}
}
const randomInterval = () => {
	let r = Math.floor((Math.random() * 30) + 5);
	return r;
}

const getRandomEvent = () => {
	let r = Math.floor((Math.random() * random_events.length));
	random_events[r](randomInterval());
}

function theEnd() {
	addAnimation(cursorimg, END_ANIM);
	setTimeout(function(){ 
		addAnimation(theendtext, FADE_IN); 
		makeVisible(theend); 
		makeHidden(cursorimg);}, 
		6000);
}

