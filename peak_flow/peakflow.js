(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 496,
	height: 400,
	fps: 50,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.peakflow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.play_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(251));

	// Layer 3
	this.play_btn = new lib.butt2();
	this.play_btn.setTransform(3.8,357);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.butt2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(250));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.804],0.2,-38.3,0.2,38.4).s().p("EgocAF/IAAr9MBQ5AAAIAAL9g");
	this.shape.setTransform(245.4,361.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(251));

	// Layer 2
	this.instance = new lib.pointer();
	this.instance.setTransform(190.9,204,1,1,6.5,0,0,2.9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:2.8,rotation:20.6,x:195.9,y:155.7},75,cjs.Ease.get(1)).to({rotation:29.4,x:237.4,y:139.6},10,cjs.Ease.get(1)).to({regY:3,rotation:12.5,x:172.6,y:211.8},40,cjs.Ease.get(1)).wait(21).to({rotation:3.7,x:149.9,y:229},54,cjs.Ease.get(1)).wait(50).to({rotation:3.7},0).wait(1));

	// lung
	this.instance_1 = new lib.lung();
	this.instance_1.setTransform(381.7,294.5,0.902,0.874,0,0,0,66.5,79.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.11,scaleY:1,x:376.2,y:304.9},75,cjs.Ease.get(1)).wait(10).to({scaleX:0.9,scaleY:0.87,x:381.7,y:294.5},40,cjs.Ease.get(1)).wait(126));

	// thorax
	this.instance_2 = new lib.thorax();
	this.instance_2.setTransform(378,226.4,1,0.949,-10.2,0,0,101,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:128.1,scaleY:1,rotation:3.5,x:386.8,y:220.2},75,cjs.Ease.get(1)).wait(10).to({regY:128,scaleY:0.95,rotation:-10.2,x:378,y:226.4},40,cjs.Ease.get(1)).wait(126));

	// body
	this.instance_3 = new lib.body();
	this.instance_3.setTransform(367,747.3,0.928,1,0,0,0,111.2,543.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,x:360,y:747.7},75,cjs.Ease.get(1)).wait(10).to({scaleX:0.93,x:367,y:747.3},40,cjs.Ease.get(1)).wait(126));

	// head
	this.instance_4 = new lib.head();
	this.instance_4.setTransform(403.6,272.4,1,1,-11.7,0,0,119.8,260.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:119.7,regY:260.6,rotation:3.5,x:398,y:267.4},75,cjs.Ease.get(1)).wait(10).to({regX:119.8,regY:260.7,rotation:-11.7,x:403.6,y:272.4},40,cjs.Ease.get(1)).wait(126));

	// arm shading
	this.instance_5 = new lib.arm();
	this.instance_5.setTransform(301.8,404.7,1,1,-23.1,0,0,129.2,236.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:129.1,regY:236.9,rotation:-9.4,x:255.8,y:376.7},75,cjs.Ease.get(1)).to({regY:237,rotation:0.3,x:258.1,y:367.8},10,cjs.Ease.get(1)).to({regX:129.2,regY:236.8,rotation:-16.6,x:301.9,y:404.7},40,cjs.Ease.get(1)).wait(21).to({rotation:-23.1,x:301.8},54,cjs.Ease.get(1)).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234.5,207.2,517.9,1285.3);


// symbols:
(lib.pointer = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AgtgIIA3gsIAjBlg");
	this.shape.setTransform(3.2,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsgHIA3grIAiBlg");
	this.shape_1.setTransform(3.2,3.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.7,11.2,12.4);


(lib.head = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DED1BD").s().p("AmkD0QCygsDEhYQFkifBvjGQjFGOgTAXQgVAZikAYQiSAWiqAAQg8AAhAgDg");
	this.shape.setTransform(71,138.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DED1BD").s().p("Ak3GoQB1j5DxmgQB6jQBiifQAYAsAYAcQgrCdjqHPQhzDphtDKIiABag");
	this.shape_1.setTransform(93.1,171.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DED1BD").s().p("ADjHdQhahHh9ggQiGgkhqAhQCikLAshjQAAhJgLhiQgWjDg3hzIAzA7QA5A+AhAPIAiDRQAkDWAHAhQAEAXBDC3QA4CbgHAAIgBAAg");
	this.shape_2.setTransform(138.1,167);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DED1BD").s().p("AG4I6QhihRAEhcQACgxAWhwQANhAgXgoQgjg7gpgXQgzgehLAPQgtAJgkA6QgMARgWA1QhBgpgLgKQgng3gvg2QhdhohKgdQh2gvkWhLIAIg3QAKg6AGgKQAYgmBihBQCVhjC6gqQC7gqDBAmQBCANA3AUQAsAQAJAIIAyAkQA0AoAsAvQCLCVAcC5QAdC5gUB7QgHAwgbBAQgLAbgtCIQguCMAAAKQgxgWgygpg");
	this.shape_3.setTransform(89.8,64.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DED1BD").s().p("Ah/DVQghgUAJgnIAXhDQAVg+ABgVQAAgMgHg2QgGgvAEgKQAOgWATgYQAmguAYgGQAugKAnAHQBFAMAPBBQAOBBgaBPQgVBBgRANIhpBTQgXAdgUAQQgVARgWAAQgSAAgRgLg");
	this.shape_4.setTransform(108.5,94.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(1,0,0,4).p("AEn2nQDoA2BmCoQCMDlAJDCQAEBCgMBHQgGAmgMA7QgKA+ghBgQgRAxgUA2QgBAGgUA/QgRAzgCARQgKA4AKBpQALCDAnB8QAXBIAzCnQBEDgADAiQACAOhEA8QhmBagyA1QjeDtAAEEQgBguhwhLQhCgsixhgQimhbg6gpQhdhCAcghQA1g+gUkiQggkvgDg0QgCgwgygSQgigNhOgBQhjgCgYgDQg+gJgTgfQgZgoANg0QATgwABgKQAAgJgSgYQgWgdgEgJQgGgPANgSQALgPAYgPQgWgFgXgHQgtgPADgOQALgxACgNQADgfgOgLQgmgRgbgSQg1gjgBgsQgBgXBKhSQBRhbAPgsQAFgOgJgWQgMgYgDgLQgLgkAdi7QAijIAFgoQAEgWA2gxQA/g5BWgvQDxiFD9AYIA/AAQBNAEBJARg");
	this.shape_5.setTransform(82.8,147.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6DBC6").s().p("AESVAQhCgsixhgQimhcg6goQhdhDAcghQA1g9gUkiQggkvgDg0QgCgxgygSQgigNhOgBQhjgCgYgDQg+gIgTgfQgZgoANg1QATgwABgKQAAgJgSgYQgWgdgEgJQgGgOANgSQALgQAYgPQgWgFgXgHQgtgOADgPQALgwACgOQADgfgOgKQgmgRgbgSQg1gkgBgsQgBgWBKhTQBRhbAPgrQAFgOgJgXQgMgYgDgKQgLglAdi7QAijHAFgpQAEgWA2gxQA/g4BWgwQDxiFD9AZIA/AAQBNADBJARQDoA2BmCoQCMDmAJDBQAEBCgMBHQgGAngMA7QgKA+ghBfIglBoIgVBEQgRAzgCASQgKA4AKBpQALCDAnB7QAXBIAzCnQBEDgADAiQACAPhEA7QhmBagyA2QjeDtAAEEQgBguhwhLg");
	this.shape_6.setTransform(82.8,146.6);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,167.6,296.1);


(lib.Path_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjeEhQglgMAEgxQAKh2AohgQAUgvASgYQAQgXBShiQBThnAPgMQgZBGgYBPQg0CcAAAsQgBBGCjArQBTAVBTAHQipgJiYAzQhMAagrAbIgNACQgNAAgMgFg");
	this.shape.setTransform(25.7,29.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.4,58.8);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABWFgQhigLjzhPQBgAFBhgGQC+gOADg9QADhbAciGQAjipA7iRQgBBlgMCAQgVD9guCIQgXBAgKAPQgFAIgBgFQgBAHgVAAQgMAAgRgCg");
	this.shape.setTransform(25.7,35.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.3,70.9);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApQC4QACgJASgMQATgLABgHQACgLgPgiQgOgjABgHQAGgtARgeIAfg8IAFBGQALA/AbgbQAvgtB3hgQCMhxAqgPQCEgvA+gRQCtgvCJAFQASAABdgyQBig1gBgWQARA4AHAvQABAIgSAaQgTAZACAKQABAIAfAjQAeAjABAEQAJBDAGA+QgEgPhqhLQhshMgWAAQjCAAiNAXQh4AUg+AhQiWBQiHCSQhGBNg8BTQgXAZgwBsQgsBkgGAfQAThxAjivg");
	this.shape.setTransform(64.8,47.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,129.5,94.5);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnrFSQAAgDAIguQA0hxBRiAQCgj/CPhNQBHgnBZgOQBGgLAcAIQAGACAjAFQAmAIAhAWQBoBCA9C/QATA6heAcQgdAIgpAGIgpAEQhZgMiBAZQj8Awj9DBQgrAhgQAAQgIAAgDgHg");
	this.shape.setTransform(49.3,34.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,98.4,69);


(lib.Path_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai2AzIA4g7QA2g7AEAAIAzgCQAugCAHABQALACCIA3QgzgJhFAHQiIANhdBKQgTgSADgDg");
	this.shape_1.setTransform(18.3,7.2);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.7,14.5);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#241F20").ss(0.5).p("ACbCoQgBABgSiOQgUiWgFgbQgPhIgThUQgShRgFgOQgJgcgJg0QgKg8gGgWQgXhehKghQgbgLgbgOQgNgHgJgCQhDgGgXAGQgOADgaAQQgYAPgKAJQgNANgLARQgQAXACAMQACALAZAVQAWATAIADQAGACADAIQAEAJgEAHQgDAFgIARQgHAPgHACQgIADgIgEQgKgEgBgIQgFgTgJgXQgNghgJAAQABAAABgKQgBgagBgWQgBgpAFgIQAGgKARgRQASgSAKgFQANgHAcgHQAigIAYgBQAsAAAmAFQAJACAUAHQASAHADACQAKAGAHgKQAHgJgQgKQgTgMgdgMQgcgLgPgCQgRgDgpAAQgyAAgVAHQgcAKg4AhQgMAIgXAYQgWAXgEAHIgYgPQAIgrgGgFQgEgEgEgGQgDgIABgGQACgGAzg8QAyg8ADgCQAIgEAJAAQACAAAlAAQAlAAAEABQB8A2AGABQAEAAAkAVQAnAVAFACQAJAEAoAYQAnAYADAFQADADAeAbQAhAlATA5QAlBqAAALQAAADAiBbQAoB1AXB5QAmDAgDBGQgKDfACAVQACAVgCBTQgBBRABAJQAGAwABAJQAFAbAGAAQAIAAAZgNQAagOALgMQAMgJAfgpQARgWAKgRQAHgMACgCQAFgEAIADQAHADABAGIgSAeQgTAegFAGIAyglIAHACQAHAFgDAMIhUBEIARAEQATAEAGACQAIAEABAKQABAKgJgDQgKgDgaACQgZACgNAEQgOADgXAJQgZAKgEADIAqBMQAAABAJAOQAEAGgBAGQgCAJgQgIQgQgHgEgNIABAOQAAAQgEAKQgEAMgKgEQgKgEgBgLQgBgDAEggQAEgagGgHQgLgPgHgJQgNgSgHgEQgHgEgaAaQgNANgQARQgGAEgKAUQgKAUgBANQgCAPALA4QACAGAFATQAFAQgBAGQgBAHgKACQgJABgDgDQgCgCgFgYQgFgZgDgFIAABFQAAAMgMAFQgMAFgEgNQADhbgCgPIghAXQgGAGgGgIQgFgHADgIQABgDAfgnQAcglgCgGQgBgGgEgDQgFgCgEgDQgFgDgTgDIgTgBQgCgIAAgIQgCgPAGABQAzAJAGgHQAQgDANgKQAagUgNgkQgKgcACiPQACirgLhbg");
	this.shape_1.setTransform(48.4,91.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E28DBB").s().p("AB0OIQAChbgCgPIggAXQgHAGgFgIQgGgHAEgIIAggqQAcglgCgGQgBgGgEgDQgGgCgDgDQgFgDgUgDIgSgBIgCgQQgCgPAFABQA0AJAGgHQAPgDAOgKQAagUgNgkQgKgcACiPQACirgLhbQgBABgTiOQgTiWgFgbQgPhIgThUQgShRgFgOQgJgcgKg0QgJg8gGgWQgXhehKghQgbgLgbgOQgOgHgIgCQhDgGgXAGQgOADgaAQQgYAPgKAJQgNANgMARQgPAXACAMQABALAaAVQAWATAIADQAFACAEAIQADAJgDAHIgLAWQgHAPgHACQgIADgJgEQgJgEgCgIQgEgTgJgXQgNghgJAAIABgKIgBgwQgBgpAFgIQAGgKARgRQARgSALgFQANgHAcgHQAigIAXgBQAtAAAmAFQAJACAUAHIAVAJQAKAGAHgKQAHgJgQgKQgTgMgdgMQgcgLgPgCQgRgDgpAAQgyAAgWAHQgbAKg4AhQgMAIgYAYQgVAXgEAHIgYgPQAIgrgGgFQgEgEgEgGQgEgIACgGQABgGA0g8QAxg8AEgCQAIgEAJAAIAnAAQAlAAADABQB9A2AGABQAEAAAkAVIAsAXQAJAEAoAYQAnAYADAFQADADAeAbQAhAlATA5QAlBqAAALQAAADAiBbQAoB1AXB5QAlDAgCBGQgKDfACAVQABAVgBBTQgBBRABAJIAHA5QAFAbAGAAQAIAAAYgNQAbgOALgMQALgJAfgpQASgWAJgRQAIgMACgCQAFgEAIADQAGADACAGIgSAeIgYAkIAyglIAHACQAGAFgCAMIhUBEIARAEQATAEAGACQAIAEABAKQABAKgKgDQgJgDgaACQgZACgNAEQgOADgXAJQgZAKgEADIApBMIAKAPQAEAGgBAGQgCAJgQgIQgQgHgEgNIABAOQAAAQgEAKQgFAMgJgEQgKgEgCgLQAAgDAEggQADgagFgHIgSgYQgNgSgHgEQgIgEgZAaIgeAeQgFAEgKAUQgKAUgCANQgBAPALA4IAHAZQAEAQAAAGQgBAHgKACQgJABgDgDQgCgCgGgYQgEgZgEgFIAABFQABAMgMAFIgHABQgGAAgDgJg");
	this.shape_2.setTransform(48.4,91.6);

	this.addChild(this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,98.4,184.8);


(lib.butt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Play", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 121;
	this.text.setTransform(59.6,10.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AJnjGIAAGNIzNAAIAAmNg");
	this.shape.setTransform(61.5,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC"],[0.435,1],0,-19.9,0,19.9).s().p("ApmDGIAAmMITNAAIAAGMg");
	this.shape_1.setTransform(61.5,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("ApmDGIAAmMITNAAIAAGMg");
	this.shape_2.setTransform(61.5,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(2));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(2,1,1).p("AJnjGIAAGNIzNAAIAAmNg");
	this.shape_3.setTransform(61.5,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,125,47.5);


(lib.body = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DED1BD").s().p("AASEWQhVhUgHgFQgTgOgTgaQgcgnAEgeIA7mhQAUBGBZCFQBABeAmAqQALANgUCUIgXCqQAAAFgEAAQgOAAhCg8g");
	this.shape.setTransform(46.9,209.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DED1BD").s().p("AAuFmQgbgEhRhAIhOg/QAUg7gEjiQgIjZACgFIgFgrQgEgjAPAAQANAABSBKQBeBXAoAaQAxAggTDTQgKBsgUB3QAAAZgNARQgNASgYAAIgJgBg");
	this.shape_1.setTransform(44.7,263.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DED1BD").s().p("AhdCmQgKhfgBhMQgCizAjiOIBYA5QBaBBgCApQgCA4g6DMQg6DXgXANQgEACgDAAQgeAAgUihg");
	this.shape_2.setTransform(36.3,323.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DED1BD").s().p("AtuBfQghgPgSgBQhEAAgSgCQg8gKAFgkQAGgmANgLQAJgIAbAAQARAABOAUQBcAXANACICxAoQC8AfDogDQDhgDC+gWQBigLBmgOQAvgDCRAQIC6ATQBdAHBRggQB1gsgMhsIAOA2QAKA5gTAVQgWAXhOAeQhKAcgdAAI6cAEQgKAAgggOg");
	this.shape_3.setTransform(110.9,1073.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DED1BD").s().p("AgsamQiKggAni2QBOlsAAiZQAAhHglqLQgmqUgPimQgNicgTnGQgSmkAAhkIA+BJQBJBcA/BaQDGEiAMCvQANCxg9OeQgqJ2geFjQgGBKAWBXQALAwAXBRQAQBOAFBRQAGBlgVASQgXAUg1AMQgfAHgcAAQgYAAgYgGg");
	this.shape_4.setTransform(185.5,896.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DED1BD").s().p("ACpTsQguhSgchbQgRg4hom0Qhtm5gIgcQgYhTg6ksQhElbAAhiQAAkBACgmQAGjLAgh6IBJAsQBYA6BMBEQDwDcAfD6QAhEGAFJYQAEIGgMCAIgVD/QgQC2gNArQgEAQgJAAQgSABgjg/g");
	this.shape_5.setTransform(67.3,607.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DED1BD").s().p("AA7PNQhsgag+hYQhHhjgvptQgTj9gEjhQgEjqAPhgQAZiiDphfQB1gvBxgPQAZI5g/GCQgTB1geBxIghB6QgNBFAjE0QASCZAUCNQhGgDg6gOg");
	this.shape_6.setTransform(138.1,615.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DED1BD").s().p("AjlFlIgBiQQAdgOAMgMQAQgQAMggQARgsAzj0QAqjICWh7QAvgnA1gbIArgTQgSAzgYEEQgMCCgJB1QgrA8gnB9QgYBSgbCDQgQBOiJAxQhFAXhCAJQAMgxABiYg");
	this.shape_7.setTransform(54.2,339.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DED1BD").s().p("AAbFLQjXkRguigIAEnUIAUBqQAdCDApB5QCDGCDICcIAOBpQAQBuAOAaQhjhohtiIg");
	this.shape_8.setTransform(62.3,179.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(1,0,0,4).p("EAPohPYQBwDiAAENQAAFegMCIQgPCug1CIQhkEAjIHNQg6CFhFCwQhLC+gVBGQgZBUAECJQAGCcAsB7QATAzA3BIQBVBvAOAWQB9C+gEEMQgDEZhQDNQgsByhXCWQgrBdgEBmQgCA4AHBRQAAAjALElQAHE1gVCVQgRB5gnDSQgbCpANBZQAPBmASCtQARCiAEBMQADA4A7BBQAKALAfAfQATASABAGQABAJCQDuQCWEEAaB0QAcB9gJEHQgHDZgSBaQgKA3gLDxQgLDjADAZQABAMgoFcQgnGIALDYQAMDaA6BQQAQAWAaASQAXAQAEAJQAcA/AEAOQAZBGgCA3QgGCqj5gFQi5gEsjAGQq9AFgUgHQgpgPgKgCQghgFhHAFQhBAGgRhFQgGgcAJgZQAJgaAYgKQCxggAtgTQAagKC5g9QDMhEAdgKQAngOCphjQCkhgAVgFQAmgLCDh9QCLiFAAg0QAAg4hAnVQg+nHgijKQg7lzgnjeQhFmbgggsQgZgig9h2Qg5htgRgTQgUgSgOgRQgZgdgYgwQhDiMhDlIQgciLhKj6QhXkmgiiKQiNo/AQp9QABgxAAgWIgBgMQgoAAglgYQhMguAIhyQADghAylXQAqkggCivQgBhbgJh7QgKiHgFhAQgPjlAbiKQAdiYAIh1QACgqAAhlQgEhggBhEQgCh/APhBQANg6ALi7QAMjYAGgvQADgdABjsQAAi/AdhOQAjhbDVk1QDCkZBPhcQF4mmGFA7QB6ASBsBAQA2AgAeAdQAHAKArA4QAvBCAjBIg");
	this.shape_9.setTransform(111.2,543.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6DBC6").s().p("EgNnBU4QgpgPgKgCQghgFhHAFQhBAGgRhFQgGgcAJgZQAJgaAYgKQCxggAtgTQAagKC5g9IDphOQAngOCphjQCkhgAVgFQAmgLCDh9QCLiFAAg0QAAg4hAnVQg+nHgijKQg7lzgnjeQhFmbgggsQgZgig9h2Qg5htgRgTQgUgSgOgRQgZgdgYgwQhDiMhDlIQgciLhKj6QhXkmgiiKQiNo/AQp9QABgxAAgWIgBgMQgoAAglgYQhMguAIhyQADghAylXQAqkggCivQgBhbgJh7IgPjHQgPjlAbiKQAdiYAIh1QACgqAAhlQgEhggBhEQgCh/APhBQANg6ALi7QAMjYAGgvQADgdABjsQAAi/AdhOQAjhbDVk1QDCkZBPhcQF4mmGFA7QB6ASBsBAQA2AgAeAdIAyBCQAvBCAjBIQBwDiAAENQAAFegMCIQgPCug1CIQhkEAjIHNQg6CFhFCwQhLC+gVBGQgZBUAECJQAGCcAsB7QATAzA3BIQBVBvAOAWQB9C+gEEMQgDEZhQDNQgsByhXCWQgrBdgEBmQgCA4AHBRQAAAjALElQAHE1gVCVQgRB5gnDSQgbCpANBZQAPBmASCtQARCiAEBMQADA4A7BBIApAqQATASABAGQABAJCQDuQCWEEAaB0QAcB9gJEHQgHDZgSBaQgKA3gLDxQgLDjADAZQABAMgoFcQgnGIALDYQAMDaA6BQQAQAWAaASQAXAQAEAJQAcA/AEAOQAZBGgCA3QgGCqj5gFQi5gEsjAGQkkACiuAAQj0AAgLgEg");
	this.shape_10.setTransform(111.2,543.6);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,224.4,1089.8);


(lib.arm = function() {
	this.initialize();

	// thumb
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(0.3,0,0,4).p("AgngCQACgLAJgJQARgTAdAFIASAbQANAbgXAOQgYAOgTgUQgTgZgDgDg");
	this.shape.setTransform(68.2,40.5,1.339,1.339,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CAB297").s().p("AgRAaIgWgcQACgLAJgJQARgTAdAFIASAbQANAbgXAOQgKAGgJAAQgMAAgMgMg");
	this.shape_1.setTransform(68.2,40.5,1.339,1.339,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(0.3,0,0,4).p("AgOEsQgVgbgVghQgrhCAEgbQAFglABg+QAChCgGgTQAAgBgshWQglhIACgVQAIg0ALgOQAbghBOApQAWAMAUAyQAJAZAOAmQADAFALAEQABAAAYAFQAfAKAXAMQAjAVAdAm");
	this.shape_2.setTransform(77.7,60.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7DCC5").s().p("AgVCxQgjguABgUQACgdgDguQgCgxgGgNIglg/QgggzABgQQACgnAHgLQATgaA8AaQASAIASAkIAUAtQACAEAIACIATADQAYAFARAJQAcANAYAbIh6ESQgQgTgRgYg");
	this.shape_3.setTransform(76.8,61.2,1.34,1.34,4.2);

	// Layer 15
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#808080").ss(0.5,0,0,4).p("AFKgvIqMCEIgHglIKMiEg");
	this.shape_4.setTransform(66.8,21.1,1.339,1.339,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8FF00").s().p("AlJAwIKMiEIAHAlIqMCEg");
	this.shape_5.setTransform(66.8,21.1,1.339,1.339,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,0,0,4).p("AlGBTIKTiGQAGgBAEgGQAEgFgCgHQgBgGgFgEQgGgDgGABIqTCGQgHABgDAGQgEAFACAGQABAHAFADQAFAEAHgBg");
	this.shape_6.setTransform(66.7,15.1,1.339,1.339,4.2);

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,0,0,4).p("As3h8QAAABAXgDQAMgCANgCQAFAjABABQPoiEABgBQgCgmgBAAQArgEADAAQACAGAIBNIB5gRICLAcQDsgPAAAAQAOBzABABQgBAAjlAwIiDAzIh2ASQAIBQABAAIgvAFQABgCgIgaQj6Aij3AhQlMAtimAVQADAegBABIgwAFQgOhigOhiQgcjDACgCg");
	this.shape_7.setTransform(92.1,17.6);

	// meter
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(0.3,0,0,4).p("AgYAPQABgHADgHQAFgMAGgCQAOgEALASQgQgIgGAEQgHADgLAPg");
	this.shape_8.setTransform(36.1,2.5,1.339,1.339,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CAB297").s().p("AgQABQAFgMAGgCQAOgEALASQgQgIgFAEQgIADgKAPIADgOg");
	this.shape_9.setTransform(35.5,2.5,1.339,1.339,4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(0.3,0,0,4).p("AggAVQABgJADgKQAFgRAJgDQATgIASAaQgXgLgIAFQgHAEgGAGQgCADgJAOg");
	this.shape_10.setTransform(49.2,0.5,1.339,1.339,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CAB297").s().p("AgXACQAFgRAJgDQATgIASAaQgYgLgHAFQgHAEgGAGIgLARIAEgTg");
	this.shape_11.setTransform(48.5,0.5,1.339,1.339,4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(0.3,0,0,4).p("AggAWQABgJACgKQAFgRAJgEQATgJATAYQgXgJgJAFQgJAGgOAXg");
	this.shape_12.setTransform(64.1,-1.8,1.339,1.339,4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CAB297").s().p("AgYADQAFgRAJgEQATgJATAYQgYgJgIAFQgJAGgOAXIADgTg");
	this.shape_13.setTransform(63.5,-1.9,1.339,1.339,4.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#999999").ss(0.3,0,0,4).p("AgoAWIAJgUQAMgSAMgCQAagEAPAeQgagPgMAEQgJACgJAGQgFAEgNANg");
	this.shape_14.setTransform(81.6,-6.9,1.339,1.339,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CAB297").s().p("AgbABQAMgSAMgCQAagEAPAeQgagPgMADQgJADgJAFIgTASg");
	this.shape_15.setTransform(81.1,-6.8,1.339,1.339,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#4D4D4D").ss(0.5,0,0,4).p("AjChvICNAXIDogPIAQBxIjkAwIiDA1g");
	this.shape_16.setTransform(152.3,8.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjChvICNAXIDogPIAQByIjkAvIiDA2g");
	this.shape_17.setTransform(152.3,8.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#4D4D4D").ss(0.5,0,0,4).p("AgZBcIBVgSIgiilIhVATg");
	this.shape_18.setTransform(128.4,9.4,1.339,1.339,4.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Ag7hIIBVgTIAiClIhVASg");
	this.shape_19.setTransform(128.4,9.5,1.339,1.339,4.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#4D4D4D").ss(0.5,0,0,4).p("AANCVIAigHIg6kiIgjAHg");
	this.shape_20.setTransform(120,10.5,1.339,1.339,4.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AguiNIAigHIA7EiIgiAHg");
	this.shape_21.setTransform(120,10.5,1.339,1.339,4.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#4D4D4D").ss(0.5,0,0,4).p("AANCVIAigHIg7kiIgiAHg");
	this.shape_22.setTransform(14.8,24.5,1.339,1.339,4.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AguiNIAigHIA7EiIgiAHg");
	this.shape_23.setTransform(14.8,24.5,1.339,1.339,4.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#666666").ss(1,0,0,4).p("AGMAqIrmCbIgxjuILmibg");
	this.shape_24.setTransform(67.6,17.7,1.339,1.339,4.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AmLgpILmibIAxDuIrmCbg");
	this.shape_25.setTransform(67.6,17.7,1.339,1.339,4.2);

	// arm shading
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E0D2BC").s().p("AgGAfQC5j6ACg0IAKAjQAHAugMA5QgmCyjUDUIiAAPQBdhzBdh+g");
	this.shape_26.setTransform(279.2,147.5,1.339,1.339,4.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E0D2BC").s().p("Ak5DEQACgfAJghQAIgiCYh8QBQhDB/hlQAxgoBpABQA1ABArAIQhwAakMDZQiIBuhxBpIABgmg");
	this.shape_27.setTransform(251.3,126.1,1.339,1.339,4.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E0D2BC").s().p("Ai8A5QBRh3BkhuQA5hAB+gkQA/gSA0gGQizEEjaC/QhuBghKAtQgHhMBtijg");
	this.shape_28.setTransform(223.1,221,1.339,1.339,4.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E0D2BC").s().p("AhqDGQgggEgUgHIgPgGQAGgdATgpQAlhSBEg7QCqiZArgOIAEBUQgCBdgdAkQgqA1hSBAQhTBBglAAIgFAAg");
	this.shape_29.setTransform(178.9,170.1,1.339,1.339,4.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E0D2BC").s().p("AAfB4IhtkZIAbAJICCE6g");
	this.shape_30.setTransform(57,21.5,1.339,1.339,4.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E0D2BC").s().p("ACHGzIg0gdQgFgJh9mEQh/mCgLgWQgPgdAPgJQAPgKASAXQAbAkCcFrQCnF9gFAyQgEAjgcAAQgLAAgPgGg");
	this.shape_31.setTransform(98.4,195.6,1.339,1.339,4.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E0D2BC").s().p("AB9EBQgKgLkXnNQgDgGABgVIABgUQCnDEBkClQAxBTAQAsQgCAYgQAJQgHAEgFAAQgHAAgFgGg");
	this.shape_32.setTransform(126.7,168,1.339,1.339,4.2);

	// arm
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#666666").ss(0.3,0,0,4).p("AAyghQgEACgEADQgEABgCACQgoAWgvAm");
	this.shape_33.setTransform(90,43.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#999999").ss(0.3,0,0,4).p("AAhgpQgNAFgPAOQgdAZgHAr");
	this.shape_34.setTransform(63.7,65.3,1.34,1.34,4.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#999999").ss(0.3,0,0,4).p("AAwg1QgRAGgWAQQgpAfgPA6");
	this.shape_35.setTransform(63.7,65.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#666666").ss(1,0,0,4).p("Ax+u0QgmhigohmQhUjYgQgWQgNgTgYAJQgaAJAEAeQABAQA7DAQA4CzgHAOQgrBbB4FoQAYA4AxAmQAvAlAAACQAJAVBCDSQBCDUADAUQAEASAwDXQAtDIALAwIA6DzQA/D+AdA+IAEAnQAJAuAWAvQBGCWCtBdQBigfBxgyQDehlBFhhQAQgQAdgXQA5guA+giQBzg/DKiuQEHjkCKjSQCHhkByiSQDkkjhpjlQgQgcglgdQhKg5hlgHQlEgXneHmQhjAnh0BQQjmCfhaDHQiNjsh8j2QhujZgXhOQg8juAGggQAGgggVhhQgUhgAJgmQgDgNgUiLQgJg5gJgQQgOhCgPhLQgfiWgohdQguhsgxA0QgOAQgOAeQgHAPgEAMIAkGHQgVhYgWhcQgri2gBgNQgBgOgTgQQgUgPgUgGQg5gMAOBWQAIA0AhClQAeCTABAIQgchdgghhQg/jDgXgVQgVgUggAKQgjALAJAoQAOA8ArCXQArCZAUA6IAEAM");
	this.shape_36.setTransform(170.8,139.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E7DCC5").s().p("AqETwQgWgwgJguIgEgmQgdg+g/j/Ig6jyIg4j4Ig0jqQgDgUhCjTQhCjTgJgUQAAgCgvglQgxgmgYg4Qh4lpArhaQAHgOg4i0Qg7jAgBgPQgEgfAagIQAYgJANATQAQAWBUDYIBODHQgUg5griaQgriXgOg8QgJgnAjgLQAggKAVATQAXAVA/DEQAgBgAcBeQgBgJgeiTQghikgIg1QgOhVA5AMQAUAFAUAQQATAQABANQABAOArC2IArC0IgkmIQAEgMAHgPQAOgeAOgQQAxgzAuBsQAoBcAfCXIAdCNQAJAQAJA4QAUCMADAMQgJAnAUBfQAVBhgGAhQgGAfA8DvQAXBNBuDaQB8D2CNDsQBajIDmifQB0hPBjgoQHenmFEAXQBlAIBKA4QAlAdAQAcQBpDmjkEjQhyCSiHBkQiKDSkHDjQjKCvhzA/Qg+Aig5AuQgdAXgQAPQhFBhjeBlQhxAzhiAfQithdhGiWg");
	this.shape_37.setTransform(170.8,139.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#7E6E5B").ss(0.3,0,0,4).p("ABBCoIhckdIglgsIBLEkg");
	this.shape_38.setTransform(70.9,18.4,1.339,1.339,4.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E0D2BC").s().p("AALCAIhLkkIAlAsIBcEdg");
	this.shape_39.setTransform(70.9,18.7,1.339,1.339,4.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#7E6E5B").ss(0.3,0,0,4).p("AAvCxIgsidIgmi2IgMgLIA3FHg");
	this.shape_40.setTransform(86.6,17.9,1.339,1.339,4.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E0D2BC").s().p("AAICYIg3lGIAMALIAmC1IAtCeg");
	this.shape_41.setTransform(86.6,18.1,1.339,1.339,4.2);

	this.addChild(this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.7,-12,302,303.4);


(lib.thorax = function() {
	this.initialize();

	// Layer 11
	this.instance = new lib.Path_4();
	this.instance.setTransform(61.7,117.1,1.238,1.238,0,0,0,48.5,91.6);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(25.6,14.3,1.238,1.238,0,0,0,18.3,7.2);
	this.instance_1.alpha = 0.102;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.7,3,119.9,228.4);


(lib.lung = function() {
	this.initialize();

	// lung
	this.instance = new lib.Path();
	this.instance.setTransform(73.7,39.7,1,1,0,0,0,49.3,34.5);
	this.instance.alpha = 0.211;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(68.9,87.2,1,1,0,0,0,64.8,47.2);
	this.instance_1.alpha = 0.102;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(106.9,118.2,1,1,0,0,0,25.7,35.5);
	this.instance_2.alpha = 0.09;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(33.6,119,1,1,0,0,0,25.7,29.4);
	this.instance_3.alpha = 0.09;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,0,0,4).p("AowDoQBqh2BDg+QBuhiB0g+QErihGrA0");
	this.shape.setTransform(69.3,78.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,0,0,4).p("AqCItQABgVAGgwQANhgAeiEQABgEATgMQATgLABgEQAGgSgOggQgPgfgBgEQgEgPAPgpQAOgoAVgmQALgQAWg4QAVg3AYgoIB7jMQBDhvBphwQBFhKA4gtQBLg/B4gUQC0gdB8CAQAaAbAcBAQAaA8AUBHQAHAbARA5QAPAzAHAnQACAMgTAYQgTAYABAMQACAJAeAgQAeAfABAKQAFArAHA5QAFAtADA1QALDNgZDPQgUCrgiBlQgbBNipgwQgtgNhdgiQhUgegegHQhlgdglgIQgygLh9AFQhPADh8AhQidAqgTAEQhRAOgYggQgcgmAmh0g");
	this.shape_1.setTransform(68.5,79.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0AFCD").s().p("AGNMGQgtgNhdgiQhUgegegHQhlgdglgIQgygLh9AFQhPADh8AhQidAqgTAEQhRAOgYggQgcgmAmh0QABgVAGgwQANhgAeiEQABgEATgMQATgLABgEQAGgSgOggIgQgjQgEgPAPgpQAOgoAVgmQALgQAWg4QAVg3AYgoIB7jMQBDhvBphwQBFhKA4gtQBLg/B4gUQC0gdB8CAQAaAbAcBAQAaA8AUBHIAYBUQAPAzAHAnQACAMgTAYQgTAYABAMQACAJAeAgQAeAfABAKIAMBkQAFAtADA1QALDNgZDPQgUCrgiBlQgQAvhHAAQgsAAhBgSg");
	this.shape_2.setTransform(68.5,79.3);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,-1,135.1,160.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;