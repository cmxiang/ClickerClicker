function init_shop(){
	// Starting shop items
	items.clickbait = new ShopItem("Clickbait", "You just HAVE to click it", 100, "clickbait", function(){
		data.autoclick++;
	});
	createItemDiv(items.clickbait);
	items.viralvideo = new ShopItem("Viral Video", "You make a viral video. You just do it.", 200, "viralvideos", function(){
		data.autoclick+=5;
	});
	createItemDiv(items.viralvideo);
}


function ShopItem(name, desc, price, type, effect){
	this.name = name;
	this.desc = desc;
	this.price = price;
	this.type = type;
	this.effect = effect;
	//this.unlocked = createItem(name, desc, price, type, effect);
}