(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 496,
	height: 400,
	fps: 50,
	color: "#FFFFFF",
	manifest: [
		{src:"images/spiro.jpg", id:"spiro"}
	]
};

// stage content:
(lib.spirometer002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_499 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.repeat.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(499).call(this.frame_499).wait(1));

	// Actions
	this.repeat = new lib.butt2();
	this.repeat.setTransform(6.7,356.5);
	this.repeat._off = true;
	new cjs.ButtonHelper(this.repeat, 0, 1, 2, false, new lib.butt2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.repeat).wait(499).to({_off:false},0).wait(1));

	// lung
	this.instance = new lib.lung();
	this.instance.setTransform(381.7,294.5,0.902,0.874,0,0,0,66.5,79.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1,x:376.2,y:304.9},49,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.87,x:381.7,y:294.5},51,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1,x:376.2,y:304.9},49,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.87,x:381.7,y:294.5},126,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1,x:376.2,y:304.9},125,cjs.Ease.get(1)).wait(25).to({scaleX:0.9,scaleY:0.87,x:381.7,y:294.5},74,cjs.Ease.get(1)).wait(1));

	// thorax
	this.instance_1 = new lib.thorax();
	this.instance_1.setTransform(378,226.4,1,0.949,-10.2,0,0,101,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:128.1,scaleY:1,rotation:3.5,x:386.8,y:220.2},49,cjs.Ease.get(1)).to({regY:128,scaleY:0.95,rotation:-10.2,x:378,y:226.4},51,cjs.Ease.get(1)).to({regY:128.1,scaleY:1,rotation:3.5,x:386.8,y:220.2},49,cjs.Ease.get(1)).to({regY:128,scaleY:0.95,rotation:-10.2,x:378,y:226.4},126,cjs.Ease.get(1)).to({regY:128.1,scaleY:1,rotation:3.5,x:386.8,y:220.2},125,cjs.Ease.get(1)).wait(25).to({regY:128,scaleY:0.95,rotation:-10.2,x:378,y:226.4},74,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.804],0.2,-66.7,0.2,67).s().p("EgocAKcIAA03MBQ5AAAIAAU3g");
	this.shape.setTransform(245.4,333.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(500));

	// body
	this.instance_2 = new lib.body();
	this.instance_2.setTransform(367,747.3,0.928,1,0,0,0,111.2,543.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,x:360,y:747.7},49,cjs.Ease.get(1)).to({scaleX:0.93,x:367,y:747.3},51,cjs.Ease.get(1)).to({scaleX:1,x:360,y:747.7},49,cjs.Ease.get(1)).to({scaleX:0.93,x:367,y:747.3},126,cjs.Ease.get(1)).to({scaleX:1,x:360,y:747.7},125,cjs.Ease.get(1)).wait(25).to({scaleX:0.93,x:367,y:747.3},74,cjs.Ease.get(1)).wait(1));

	// head
	this.instance_3 = new lib.head();
	this.instance_3.setTransform(403.6,272.4,1,1,-11.7,0,0,119.8,260.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:119.7,regY:260.6,rotation:3.5,x:398,y:267.4},49,cjs.Ease.get(1)).to({regX:119.8,regY:260.7,rotation:-11.7,x:403.6,y:272.4},51,cjs.Ease.get(1)).to({regX:119.7,regY:260.6,rotation:3.5,x:398,y:267.4},49,cjs.Ease.get(1)).to({regX:119.8,regY:260.7,rotation:-11.7,x:403.6,y:272.4},126,cjs.Ease.get(1)).to({regX:119.7,regY:260.6,rotation:3.5,x:398,y:267.4},125,cjs.Ease.get(1)).wait(25).to({regX:119.8,regY:260.7,rotation:-11.7,x:403.6,y:272.4},74,cjs.Ease.get(1)).wait(1));

	// arm shading
	this.instance_4 = new lib.arm();
	this.instance_4.setTransform(350.8,386.7,1,1,-34.1,0,0,129.2,236.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(130).to({regX:129,rotation:-8.4,x:318,y:365.6},19,cjs.Ease.get(1)).to({regX:129.2,rotation:-23.6,x:350.8,y:386.7},126,cjs.Ease.get(1)).to({regX:129,rotation:-8.4,x:318,y:365.6},125,cjs.Ease.get(1)).to({regX:129.2,rotation:-34.1,x:350.8,y:386.7},99,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.instance_5 = new lib.breath();
	this.instance_5.setTransform(234.7,173.2,1.153,0.808,-13.1,0,0,-58.4,-1.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-58.8,regY:-2,scaleX:0.07,scaleY:0.03,rotation:0,x:313.6,y:139,alpha:0.488},49,cjs.Ease.get(1)).to({regX:-58.4,regY:-1.1,scaleX:1.15,scaleY:0.81,rotation:-13.1,x:234.7,y:173.2,alpha:0},51,cjs.Ease.get(1)).to({regX:-58.8,regY:-2,scaleX:0.07,scaleY:0.03,rotation:0,x:313.6,y:139,alpha:0.488},48,cjs.Ease.get(1)).to({x:219.2,y:142.6},1,cjs.Ease.get(1)).to({regX:-58.4,regY:-1.1,scaleX:1.15,scaleY:0.81,rotation:-16.3,x:126.7,y:205.9,alpha:0},126,cjs.Ease.get(1)).to({regX:-58.8,regY:-2,scaleX:0.07,scaleY:0.03,rotation:0,x:219.2,y:142.6,alpha:0.488},125,cjs.Ease.get(1)).to({_off:true},1).wait(24).to({_off:false,x:313.6,y:139},0).to({regX:-58.4,regY:-1.1,scaleX:1.15,scaleY:0.81,rotation:-13.1,x:234.7,y:173.2,alpha:0},74,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234.5,207.2,517.9,1285.3);


// symbols:
(lib.spiro = function() {
	this.initialize(img.spiro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,659,768);


(lib.spiro_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,0,0,4).p("AkllZQAiAXBbAWQBPAUBGAHQAkAFAlAHQAtABCxgUIo4hDAEJlOIAUjoAAWgaQgRAageAFQgfAGgagQQgbgSgGgfQgGgfASgbQASgaAfgGQAggGAYASQAbASAFAfQAGAfgSAagAiDEJQgJANgPADQgPADgNgJQgNgIgDgQQgDgPAIgNQAJgMAPgDQAQgDANAIQANAJACAPQADAQgIAMgAi2AVIFxA1IgTCDIlxg0gAgQGbQgMATgWAEQgVAEgTgNQgSgMgEgVQgEgWAMgSQANgSAVgFQAVgEASAMQATANAEAVQAFAWgNASgABlIfQgKAPgTADQgSAEgPgLQgPgKgEgSQgEgTALgPQAKgPASgEQATgDAPAKQAPAKAEATQAEASgLAQg");
	this.shape.setTransform(47,64.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AALh2IAAABIgVDqIAAAC");
	this.shape_1.setTransform(99.5,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AFeozIDrBSIgNB0Ij1ApAo7I2QAQASANADQAQAECQAXQB7ATAwAHQAhAGBPgDQBTgDAFgLQADgHACgTQACgTACgGQACgHAvm6QAPiKAKhgQASiwADgZQAAgCABgBQgHgMgFgLQgMgaALABQAeADAbADQBHAIBeANQAMACAMACABipPQh+gOiBgOQkWgcgDAFIgpENAnflzQgCATgXCzQgxGpgTCvQgOB5ACABAFeo0QjlgYgTgD");
	this.shape_2.setTransform(65.6,67.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("AFXpCQABAAgEAAAjtloIgBACAlWIyIANAR");
	this.shape_3.setTransform(41.5,65.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADBFD").s().p("AjTKAQgwgHh7gTQiQgXgQgEQgNgDgQgSIgNgRQgCgBAOh5IBEpYIAZjGQAiAXBaAWQBQAUBFAIQAnAEAkAHIACAAIADAAIAAAAIARAAIACAAIAFAAIADgBIAFAAIABAAIALgBIAEAAQA4gEBlgLIAAAAIALgBIo5hEIApkNQADgFEWAcID/AcIgUDoIAUjoIAEAAQATADDlAYIAAABIDrBSIgNB0Ij1ApIAAgCIAXjtIgXDtIgYgEQhegNhHgIIg5gGQgLgBAMAaQAFALAHAMIgBADIgVDJIgZDqQgvG6gCAHQgDAGgBATQgCATgDAHQgFALhTADIgyABQgpAAgVgEgAh5IZIAJgBQASgEALgPQgLAPgSAEIgJABIAAAAIgBAAQgLAAgLgHIgCgBQgPgKgEgTIgBgJQAAgNAIgMQALgPASgDIAJgBIAAAAIAAAAQANAAALAHQAQALADASIABAKQAAANgHALQAHgLAAgNIgBgKQgDgSgQgLQgLgHgNAAIAAAAIAAAAIgJABQgSADgLAPQgIAMAAANIABAJQAEATAPAKIACABQALAHALAAIABAAIAAAAgAj3GZIAJAAIAAgBIAAAAIAAAAIACAAQAVgEANgSQgNASgVAEIgCAAIAAAAIAAAAIAAABIgJAAIAAAAIAAAAQgPAAgOgJIAAAAQgSgMgFgWIgBgKQAAgQAKgOQAMgSAVgEIADgBIAIAAIAAAAIAAAAQAPAAAMAIIABAAIABABQASAMAFAWIABALQAAAPgJAOQAJgOAAgPIgBgLQgFgWgSgMIgBgBIgBAAQgMgIgPAAIAAAAIAAAAIgIAAIgDABQgVAEgMASQgKAOAAAQIABAKQAFAWASAMIAAAAQAOAJAPAAIAAAAIAAAAgAldEAIAGAAIABAAQAPgDAJgNQgJANgPADIgBAAIgGAAIAAAAIgBAAQgKAAgJgGIAAAAIgBAAQgNgJgDgPIgBgIQAAgLAHgJQAJgNAPgDIAHgBIAAAAIABAAQALABAJAGQANAJADAPIAAAIQAAALgGAJQAGgJAAgLIAAgIQgDgPgNgJQgJgGgLgBIgBAAIAAAAIgHABQgPADgJANQgHAJAAALIABAIQADAPANAJIABAAIAAAAQAJAGAKAAIABAAIAAAAgAmDB/IFyA0IARiDIlxgyIFxAyIgRCDIlyg0IASiBIgSCBgAjjgRIAOgCIACAAQAfgGASgaQgSAagfAGIgCAAIgOACIgBAAIAAAAQgWAAgTgNQgagSgGggQgCgIAAgHQAAgXANgTQASgbAggGIADAAIAMgBIAAAAIAAAAQAXAAAUANQAaASAGAfIABAPQAAAXgNAUQANgUAAgXIgBgPQgGgfgagSQgUgNgXAAIAAAAIAAAAIgMABIgDAAQggAGgSAbQgNATAAAXQAAAHACAIQAGAgAaASQATANAWAAIAAAAIABAAgAh+kfIgDAAIgCAAQgkgHgngEQhFgIhQgUQhagWgigXIAAgCII5BEIgLABIAAAAQhlALg4AEIgEAAIgLABIgBAAIgFAAIgDABIgFAAIgCAAIgRAAIAAAAgAnfl1g");
	this.shape_4.setTransform(65.6,67.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.1,1.7,119.2,130.9);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
	this.shape_5.graphics.f().s("#666666").ss(1,0,0,4).p("As6mVQAAgCAAgDQAAgJAKgRQACgCABgDQASgbAqgvQBRhbAPgsQAFgOgJgWQgMgYgDgLQgLgkAdi7QAijIAFgoQAEgWA2gxQA/g5BWgvQDxiFD9AYIA/AAQBNAEBJARQDoA2BmCoQCMDlAJDCQAEBCgMBHQgGAmgMA7QgKA+ghBgQgRAxgUA2QgBAGgUA/QgRAzgCARQgKA4AKBpQALCDAnB8QAXBIAzCnQBEDgADAiQACAOhEA8QhmBagyA1QjeDtAAEEQgBguhwhLQhCgsixhgQimhbg6gpQhdhCAcghQA1g+gUkiQgSisgJhcQgHhAgBgSQgCg7hLgOQgegHgxAHQgCAAhUAPQhnATgXglQgagpAEgfQAEgQADgKQgCgMABgNQgDgFgEgEQgOgQgEgKQgGgNA0gwQADgDAEgEQAzgwAegTQgpgagqgcQhVg4ADgOQAJgkAAgFQgBgFgFgGQgEgEgGgFQgmgRgbgSQg1gkgBgsQAAgBAAgCQABgHAIgNAqDBdQACgJAAgFQABgFgEgG");
	this.shape_5.setTransform(82.8,147.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6DBC6").s().p("AESVAQhCgsixhgQimhcg6goQhdhDAcghQA1g9gUkiIgbkIIgIhTQgCg7hLgOQgegGgxAGIhWAQQhnATgXglQgagpAEggIAHgZIACgOIAAgBQAAgFgDgGQADAGAAAFIAAABIgCAOQgCgNABgNIgHgJQgOgPgEgKQgGgNA0gwIAHgHQAzgxAegTIhTg1QhVg4ADgPQAJgkAAgFQgBgEgFgGIgKgKQgmgRgbgSQg1gjgBgsIAAgDQABgIAIgNQgIANgBAIIAAgGQAAgIAKgSIADgEQASgcAqgvQBRhbAPgrQAFgOgJgXQgMgYgDgKQgLglAdi7QAijHAFgpQAEgWA2gxQA/g4BWgwQDxiFD9AZIA/AAQBNADBJARQDoA2BmCoQCMDmAJDBQAEBCgMBHQgGAngMA7QgKA+ghBfIglBoIgVBEQgRAzgCASQgKA4AKBpQALCDAnB7QAXBIAzCnQBEDgADAiQACAPhEA7QhmBagyA2QjeDtAAEEQgBguhwhLg");
	this.shape_6.setTransform(82.8,146.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(350));

}).prototype = p = new cjs.MovieClip();
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
	this.shape_1.graphics.f().s("#241F20").ss(0.5).p("ACbCoQgBABgSiOQgUiWgFgbQgPhIgThUQgShRgFgOQgKgfgBglQAAgmgCgRQgGg3hGggQgogSgQgFQgMgFgMgCQgGgBgLAAQgPAAgPAEQgQAEgTAJQgVAKgJAIQgNANAHAnQACAMARAbQARAbAGACQAEABgIAQQgFAIgJAPQgDAFAaAUQAZASgFABQgLAEhAACQhEADgBgHQgCgHgSgaQgUgbgDgHQgCgFAYgWQAVgRADgDQgKgPgagRQhDgqABgFQABgIAOgoQAPgpAGgJQAGgKARgRQASgSAKgFQANgHAcgHQAigIAYgBQAsAAAmAFQAJACAUAHQASAHADACQAKAGAHgKQAHgJgQgKQgTgMgdgMQgcgLgPgCQgRgDgpAAQgyAAgVAHQgcAKg4AhQgMAIgXAYQgWAXgEAHIgYgPQAIgrgGgFQgEgEgEgGQgDgIABgGQACgGAzg8QAyg8ADgCQAIgEAJAAQACAAAlAAQAlAAAEABQB8A2AGABQAEAAAkAVQAnAVAFACQAJAEAoAYQAnAYADAFQADADAeAbQAhAlATA5QAlBqAAALQAAADAiBbQAoB1AXB5QAmDAgDBGQgKDfACAVQACAVgCBTQgBBRABAJQAGAwABAJQAFAbAGAAQAIAAAZgNQAagOALgMQAMgJAfgpQARgWAKgRQAHgMACgCQAFgEAIADQAHADABAGIgSAeQgTAegFAGIAyglIAHACQAHAFgDAMIhUBEIARAEQATAEAGACQAIAEABAKQABAKgJgDQgKgDgaACQgZACgNAEQgOADgXAJQgZAKgEADIAqBMQAAABAJAOQAEAGgBAGQgCAJgQgIQgQgHgEgNIABAOQAAAQgEAKQgEAMgKgEQgKgEgBgLQgBgDAEggQAEgagGgHQgLgPgHgJQgNgSgHgEQgHgEgaAaQgNANgQARQgGAEgKAUQgKAUgBANQgCAPALA4QACAGAFATQAFAQgBAGQgBAHgKACQgJABgDgDQgCgCgFgYQgFgZgDgFIAABFQAAAMgMAFQgMAFgEgNQADhbgCgPIghAXQgGAGgGgIQgFgHADgIQABgDAfgnQAcglgCgGQgBgGgEgDQgFgCgEgDQgFgDgTgDIgTgBQgCgIAAgIQgCgPAGABQAzAJAGgHQAQgDANgKQAagUgNgkQgKgcACiPQACirgLhbg");
	this.shape_1.setTransform(48.4,91.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E28DBB").s().p("AB0OIQAChbgCgPIggAXQgHAGgFgIQgGgHAEgIIAggqQAcglgCgGQgBgGgEgDQgGgCgDgDQgFgDgUgDIgSgBIgCgQQgCgPAFABQA0AJAGgHQAPgDAOgKQAagUgNgkQgKgcACiPQACirgLhbQgBABgTiOQgTiWgFgbQgPhIgThUQgShRgFgOQgLgfAAglQAAgmgCgRQgGg3hGggQgogSgQgFQgMgFgNgCIgQgBQgPAAgPAEQgQAEgUAJQgUAKgJAIQgNANAGAnQADAMARAbQARAbAGACQAEABgJAQIgNAXQgDAFAZAUQAZASgEABQgLAEhBACQhDADgBgHQgCgHgTgaQgTgbgDgHQgCgFAYgWIAYgUQgKgPgagRQhDgqABgFQABgIAOgoQAPgpAGgJQAGgKARgRQARgSALgFQANgHAcgHQAigIAXgBQAtAAAmAFQAJACAUAHIAVAJQAKAGAHgKQAHgJgQgKQgTgMgdgMQgcgLgPgCQgRgDgpAAQgyAAgWAHQgbAKg4AhQgMAIgYAYQgVAXgEAHIgYgPQAIgrgGgFQgEgEgEgGQgEgIACgGQABgGA0g8QAxg8AEgCQAIgEAJAAIAnAAQAlAAADABQB9A2AGABQAEAAAkAVIAsAXQAJAEAoAYQAnAYADAFQADADAeAbQAhAlATA5QAlBqAAALQAAADAiBbQAoB1AXB5QAlDAgCBGQgKDfACAVQABAVgBBTQgBBRABAJIAHA5QAFAbAGAAQAIAAAYgNQAbgOALgMQALgJAfgpQASgWAJgRQAIgMACgCQAFgEAIADQAGADACAGIgSAeIgYAkIAyglIAHACQAGAFgCAMIhUBEIARAEQATAEAGACQAIAEABAKQABAKgKgDQgJgDgaACQgZACgNAEQgOADgXAJQgZAKgEADIApBMIAKAPQAEAGgBAGQgCAJgQgIQgQgHgEgNIABAOQAAAQgEAKQgFAMgJgEQgKgEgCgLQAAgDAEggQADgagFgHIgSgYQgNgSgHgEQgIgEgZAaIgeAeQgFAEgKAUQgKAUgCANQgBAPALA4IAHAZQAEAQAAAGQgBAHgKACQgJABgDgDQgCgCgGgYQgEgZgEgFIAABFQABAMgMAFIgHABQgGAAgDgJg");
	this.shape_2.setTransform(48.4,91.6);

	this.addChild(this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,98.4,184.8);


(lib.butt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.text = new cjs.Text("Repeat", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 146;
	this.text.setTransform(72.4,8.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ALoDHIkZAAIg2AAIg4AAIxIAAIAAmNIRIAAIA4AAIA2AAIEZAAg");
	this.shape.setTransform(74.4,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC"],[0.435,1],-45.5,-19.9,-45.5,19.9).s().p("AgaDGIAAmMIA1AAIAAGMg");
	this.shape_1.setTransform(118.1,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#CCCCCC"],[0.435,1],-47.5,-19.9,-47.5,19.9).s().p("AiLDGIAAmMIEWAAIAAGMg");
	this.shape_2.setTransform(134.8,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#CCCCCC"],[0.435,1],-36.2,-19.9,-36.2,19.9).s().p("AgaDGIAAmMIA1AAIAAGMg");
	this.shape_3.setTransform(112.6,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#CCCCCC"],[0.435,1],6.6,-19.9,6.6,19.9).s().p("AokDGIAAmMIRIAAIAAGMg");
	this.shape_4.setTransform(54.9,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("ALoDHI3PAAIAAmNIXPAAg");
	this.shape_5.setTransform(74.4,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7FF219").s().p("ArnDGIAAmMIXOAAIAAGMg");
	this.shape_6.setTransform(74.4,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(2,1,1).p("AHljGIBvAAIAmAAIAAGNIgmAAIhvAAAJ6jGIBuAAIAAGNIhuAAAJUjGIAAGNAHljGIAAGNIzMAAIAAmNg");
	this.shape_7.setTransform(74.4,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,150.8,60);


(lib.breath = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aj7J1Qj5l1BUm5QAwj8CMi/ACZFhQiJjQAvj2QAbiOBPhrAFxDCQgBAAAAgBQhChlANh0QACgOACgNQAGgeALgbQAQgrAagkAGvCXQAAgBAAAAQgBgCgBgBQgvhJAJhTQABgBAAAAQABgKACgKQAEgXAIgUQABgCABgDQALgdASgYAEZEKQhnicAji4QAVhsA9hRAgXHaQizkTA+lFQAljBBriS");
	this.shape.setTransform(-68,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#CF5A9A"],[0.824,1],12.7,0.5,0,12.7,0.5,25.1).s().p("AhPCMIgCgDQguhJAJhTIAAgBIADgUQAFgWAHgUIADgFQALgdASgYICvB7IAQAWIi7CAIgLAIIgBgBg");
	this.shape_1.setTransform(-16.9,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#CF5A9A"],[0.824,1],27,0.8,0,27,0.8,33.9).s().p("AgIC+QhDhlAOh0IAEgbQAGgfAKgaQAQgsAZgjIAmAbIgDAHQgKAagGAfIgEAbQgEAeACAeQgKBTAvBIIACAEIABABIALgIIABAAIg7AoIgOALIAAgBg");
	this.shape_2.setTransform(-30.2,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#CF5A9A"],[0.824,1],66.3,2.3,0,66.3,2.3,83.7).s().p("AiSiCQAljBBtiSICjBzQhPBrgbCOQgvD2CJDQIiwB5QizkTA+lFg");
	this.shape_3.setTransform(-67.4,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#CF5A9A"],[0.824,1],88,1.9,0,88,1.9,111.5).s().p("AjHi5QAwj8CMi/IDoCjQhtCSglDBQg+FFCzETIjiCbQj5l2BUm4g");
	this.shape_4.setTransform(-89.7,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#CF5A9A"],[0.824,1],37.1,1,0,37.1,1,47.1).s().p("AhThLQAVhsA9hRIAxAkQgPAmgIAqQgMA/AEA8QgNB0BCBlIABABIAQgLIAGAIIhsBLQhnicAji4g");
	this.shape_5.setTransform(-38.2,-1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#CF5A9A"],[0.824,1],49.8,1.3,0,49.8,1.3,62.7).s().p("AhthmQAciOBPhrIB7BXQg8BRgWBsQgiC4BnCcIh+BXQiJjQAuj2g");
	this.shape_6.setTransform(-50.7,-1.4);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.8,-65.4,108.1,127.9);


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
	this.shape_9.graphics.f().s("#666666").ss(1,0,0,4).p("AsWo/QAAgKABgKQABgxAAgWIgBgMQgoAAglgYQhMguAIhyQADghAylXQAqkggCivQgBhbgJh7QgKiHgFhAQgPjlAbiKQAdiYAIh1QACgqAAhlQgEhggBhEQgCh/APhBQANg6ALi7QAMjYAGgvQADgdABjsQAAi/AdhOQAjhbDVk1QDCkZBPhcQF4mmGFA7QB6ASBsBAQA2AgAeAdQAHAKArA4QAvBCAjBIQBwDiAAENQAAFegMCIQgPCug1CIQhkEAjIHNQg6CFhFCwQhLC+gVBGQgZBUAECJQAGCcAsB7QATAzA3BIQBVBvAOAWQB9C+gEEMQgDEZhQDNQgmBkhICAQgKARgLATQgGANgGAOQggBQgDBYQgCA4AHBRQAAAjALElQAHE1gVCVQgRB5gnDSQgbCpANBZQAPBmASCtQARCiAEBMQADA4A7BBQAKALAfAfQATASABAGQABAJCQDuQCWEEAaB0QAcB9gJEHQgHDZgSBaQgKA3gLDxQgLDjADAZQABAMgoFcQgnGIALDYQAMDaA6BQQAQAWAaASQAXAQAEAJQAcA/AEAOQAZBGgCA3QgGCqj5gFQi5gEsjAGQq9AFgUgHQgpgPgKgCQghgFhHAFQhBAGgRhFQgGgcAJgZQAJgaAYgKQCxggAtgTQAagKC5g9QDMhEAdgKQAngOCphjQCkhgAVgFQAmgLCDh9QCLiFAAg0QAAg4hAnVQg+nHgijKQg7lzgnjeQhFmbgggsQgZgig9h2Qg5htgRgTQgUgSgOgRQgZgdgYgwQhDiMhDlIQgciLhKj6QhXkmgiiKQiEoaAFpPQABggAAgfg");
	this.shape_9.setTransform(111.2,543.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6DBC6").s().p("EgNnBU4QgpgPgKgCQghgFhHAFQhBAGgRhFQgGgcAJgZQAJgaAYgKQCxggAtgTQAagKC5g9IDphOQAngOCphjQCkhgAVgFQAmgLCDh9QCLiFAAg0QAAg4hAnVQg+nHgijKQg7lzgnjeQhFmbgggsQgZgig9h2Qg5htgRgTQgUgSgOgRQgZgdgYgwQhDiMhDlIQgciLhKj6QhXkmgiiKQiEoaAFpPIABg/IABgUQABgxAAgWIgBgMQgoAAglgYQhMguAIhyQADghAylXQAqkggCivQgBhbgJh7IgPjHQgPjlAbiKQAdiYAIh1QACgqAAhlQgEhggBhEQgCh/APhBQANg6ALi7QAMjYAGgvQADgdABjsQAAi/AdhOQAjhbDVk1QDCkZBPhcQF4mmGFA7QB6ASBsBAQA2AgAeAdIAyBCQAvBCAjBIQBwDiAAENQAAFegMCIQgPCug1CIQhkEAjIHNQg6CFhFCwQhLC+gVBGQgZBUAECJQAGCcAsB7QATAzA3BIQBVBvAOAWQB9C+gEEMQgDEZhQDNQgmBkhICAIgVAkIgMAbQggBQgDBYQgCA4AHBRQAAAjALElQAHE1gVCVQgRB5gnDSQgbCpANBZQAPBmASCtQARCiAEBMQADA4A7BBIApAqQATASABAGQABAJCQDuQCWEEAaB0QAcB9gJEHQgHDZgSBaQgKA3gLDxQgLDjADAZQABAMgoFcQgnGIALDYQAMDaA6BQQAQAWAaASQAXAQAEAJQAcA/AEAOQAZBGgCA3QgGCqj5gFQi5gEsjAGQkkACiuAAQj0AAgLgEg");
	this.shape_10.setTransform(111.2,543.6);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,224.4,1089.8);


(lib.thorax = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AADgwQATgFAWAFQArAJAaAkQAaAjgHAqQgGArgjAYQgjAYgsgJQgpgJgZgkQgaglAGgqQAEgZANgQQAJgOAPgKQASgLASgEgAg5gJIhMhrIA9gpIBLBt");
	this.shape.setTransform(1.1,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EADBFD").s().p("AAMCcQgpgJgZgkQgaglAGgqQAEgZANgQIhMhrIA9gpIBLBtQgSAEgSALQgPAKgJAOQAJgOAPgKQASgLASgEQATgFAWAFQArAJAaAkQAaAjgHAqQgGArgjAYQgaARgeAAQgLAAgMgCg");
	this.shape_1.setTransform(1.1,14.6);

	// Layer 11
	this.instance = new lib.Path_4();
	this.instance.setTransform(61.7,117.1,1.238,1.238,0,0,0,48.5,91.6);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(25.6,14.3,1.238,1.238,0,0,0,18.3,7.2);
	this.instance_1.alpha = 0.102;

	this.addChild(this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.3,-2.3,134.9,232.8);


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


(lib.arm = function() {
	this.initialize();

	// arm shading
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0D2BC").s().p("ACHGzIg0gdQgFgJh9mEQh/mCgLgWQgPgdAPgJQAPgKASAXQAbAkCcFrQCnF9gFAyQgEAjgcAAQgLAAgPgGg");
	this.shape.setTransform(98.1,194,1.341,1.341,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0D2BC").s().p("AB9EBQgKgLkXnNQgDgGABgVIABgUQCnDEBkClQAxBTAQAsQgCAYgQAJQgHAEgFAAQgHAAgFgGg");
	this.shape_1.setTransform(126.4,166.2,1.341,1.341,4);

	// spirometer
	this.instance = new lib.spiro_1();
	this.instance.setTransform(94.1,50.1,1,1,0,0,0,55.1,64.5);

	// arm
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,0,0,4).p("AJBEiQiZj9hgixQhfixgUhFIA0kKQAFgcASjIQASi/AJgpQADhLg+gBQg9gBgWBLQgBADgHgOAl40cQgPgCgMgBQgvgEgMBDQBNCPgZgkQgNgSglATQgnATAEAfQABANAYBFQATAygRABQhxAHAmBYQAHAOAaAsQARAbgJAAQhpAIAtBXQAXAuCiDJQAQAUBrC2QBvC8ADATQAFAaBeF6IA5DzQBBD+AcA/IAFAmQAJAuAWAvQBHCWCtBdAkHywQAKgHAFgKQALgXgXgUQgIgIgIgHQgBgBgBgBQAAAAABABQAOBGAAAGg");
	this.shape_2.setTransform(91.6,157.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7DCC5").s().p("ABwRrQgWgwgJguIgFgmQgcg+g/j/Ig7jzQhel6gFgcQgDgShvi6Qhri3gQgTQiijKgXgtQgthXBpgIQAJgBgRgaQgagsgHgPQgmhXBxgIQARgBgTgyQgYhFgBgMQgEgfAngUQAlgTANATQAZAjhNiPQAMhDAvAFIAbACQAGAAABgGIBaAkIABABIAAAAICFA1IAAADIAAgCIEuB7IAJgWQAGALABgDQAWhLA9ABQA+ABgDBLQgJApgSDAQgSDHgFAdIg0EJQAUBGBfCxQBgCwCZD9QAag7Aog4ImdP6Qg1g4gghDg");
	this.shape_3.setTransform(94.9,151.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7E6E5B").ss(0.3,0,0,4).p("ABBCoIhckdIglgsIBLEkg");
	this.shape_4.setTransform(69.8,16.5,1.341,1.341,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0D2BC").s().p("AALCAIhLkkIAlAsIBcEdg");
	this.shape_5.setTransform(69.8,16.9,1.341,1.341,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#7E6E5B").ss(0.3,0,0,4).p("AAvCxIgsidIgmi2IgMgLIA3FHg");
	this.shape_6.setTransform(85.6,16,1.341,1.341,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0D2BC").s().p("AAICZIg3lIIAMAMIAmC2IAtCcg");
	this.shape_7.setTransform(85.6,16.2,1.341,1.341,4);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(32.9,-12.8,131.3,302.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;