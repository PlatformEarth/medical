(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 496,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.mdi2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
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
		
		this.myPlay.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay(15);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(521));

	// Layer 21
	this.myPlay = new lib.next();
	this.myPlay.setTransform(5.5,357.1);
	this.myPlay._off = true;
	new cjs.ButtonHelper(this.myPlay, 0, 1, 2, false, new lib.next(), 3);

	this.timeline.addTween(cjs.Tween.get(this.myPlay).wait(4).to({_off:false},0).to({_off:true},1).wait(520));

	// Layer 20
	this.text = new cjs.Text("Remove cap", "bold 20px 'Arial'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 283;
	this.text.setTransform(8,6.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(5).to({_off:false},0).wait(71).to({text:"Shake well"},0).wait(118).to({text:"Breath out"},0).wait(95).to({text:"Press down and breath in"},0).wait(59).to({text:"Hold breath"},0).wait(66).to({text:"Breath out"},0).wait(62).to({text:"Replace cap"},0).wait(49));

	// Image 2 Image
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.918],0,-53.6,0,53.8).s().p("EgmvAIYIAAwwMBNeAAAIAAQwg");
	this.shape.setTransform(248,351.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(525));

	// Layer 6
	this.instance = new lib.lung();
	this.instance.setTransform(376.2,310.9,1,1,0,0,0,66.5,79.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(194).to({_off:false},0).wait(19).to({scaleX:0.9,scaleY:0.87,x:381.7,y:300.5},60,cjs.Ease.get(1)).wait(16).to({scaleX:1,scaleY:1,x:376.2,y:320.9},59,cjs.Ease.get(1)).wait(66).to({scaleX:0.9,scaleY:0.87,x:381.7,y:300.5},61,cjs.Ease.get(1)).to({_off:true},1).wait(49));

	// Image 2 Image
	this.instance_1 = new lib.finger();
	this.instance_1.setTransform(230.9,165.5,0.615,0.615,-0.8,0,0,17.4,15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(289).to({_off:false},0).to({regY:14.9,rotation:12.2,x:252.6,y:144.1},59,cjs.Ease.get(1)).to({_off:true},1).wait(176));

	// thorax
	this.instance_2 = new lib.thorax();
	this.instance_2.setTransform(382.9,224.2,1,1,0,0,0,101,128.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(194).to({_off:false},0).wait(19).to({regY:128,rotation:-11,x:374,y:230.2},60,cjs.Ease.get(1)).wait(16).to({regY:128.1,rotation:0,x:382.9,y:234.2},59,cjs.Ease.get(1)).wait(66).to({regY:128,rotation:-11,x:374,y:230.2},61,cjs.Ease.get(1)).to({_off:true},1).wait(49));

	// body
	this.instance_3 = new lib.body();
	this.instance_3.setTransform(360,753.7,1,1,0,0,0,111.2,543.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(194).to({_off:false},0).wait(19).to({scaleX:0.93,x:367,y:753.3},60,cjs.Ease.get(1)).wait(16).to({scaleX:1,x:360,y:763.7},59,cjs.Ease.get(1)).wait(66).to({scaleX:0.93,x:367,y:753.3},61,cjs.Ease.get(1)).to({_off:true},1).wait(49));

	// head
	this.instance_4 = new lib.head();
	this.instance_4.setTransform(397,270.7,1,1,0,0,0,119.8,260.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},0).wait(19).to({rotation:-12.5,x:399,y:269.6},60,cjs.Ease.get(1)).wait(16).to({rotation:0,x:397,y:280.7},59,cjs.Ease.get(1)).wait(66).to({rotation:-12.5,x:399,y:269.6},61,cjs.Ease.get(1)).to({_off:true},1).wait(49));

	// Image 2 Image
	this.instance_5 = new lib.breath();
	this.instance_5.setTransform(373.4,289.5,0.615,0.615,-20.3,0,0,283.8,122.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(194).to({_off:false},0).wait(19).to({rotation:-28.2},60,cjs.Ease.get(1)).to({regX:283.7,rotation:-4.3},16,cjs.Ease.get(1)).to({regX:283.8,rotation:5.5,x:373.5},59,cjs.Ease.get(1)).wait(1).to({rotation:-0.2,x:373.4},65,cjs.Ease.get(1)).to({regX:283.7,rotation:-13.3},61,cjs.Ease.get(1)).to({_off:true},1).wait(49));

	// Layer 7
	this.instance_6 = new lib.shake();
	this.instance_6.setTransform(348.3,218.3,1,1,0,0,0,225.2,180.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(76).to({_off:false},0).wait(17).to({regX:484.1,regY:332.2,x:607.3,y:370.3},0).to({rotation:3.7},5).to({rotation:0},5).to({rotation:3.7},5).to({rotation:0},5).to({rotation:3.7},5).to({rotation:0},5).to({rotation:3.7},5).to({rotation:0},5).to({rotation:3.7},5).to({rotation:0},5).to({rotation:3.7},5).to({rotation:0},5).to({rotation:3.7},5).to({rotation:0},5).to({rotation:3.7},5).to({rotation:0},5).to({rotation:3.7},5).to({rotation:0},5).to({rotation:3.7},5).to({regX:484.2,regY:332.1,rotation:-3.7},5).to({_off:true},1).wait(331));

	// Layer 6
	this.instance_7 = new lib.lh();
	this.instance_7.setTransform(154.8,182.6,1,1,0,0,0,130.8,93.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({x:148.8},0).wait(3).to({x:121.8,y:175.6},19,cjs.Ease.get(1)).to({_off:true},26).wait(401).to({_off:false,x:96.8,y:158.6},0).wait(39).to({x:154.8,y:182.6},9).wait(1));

	// Layer 7
	this.instance_8 = new lib.rh();
	this.instance_8.setTransform(332.6,169.6,1,1,0,0,0,125.9,98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({x:335.6},0).wait(3).to({x:350.6},19,cjs.Ease.get(1)).to({_off:true},26).wait(401).to({_off:false,x:360.6,y:144.6},0).wait(39).to({x:332.6,y:169.6},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(228.3,289.7,537,315.3);


// symbols:
(lib.shake = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94BDCD").s().p("AAUD+QgYgFgthhQguhjgWhkQgbh3AZg1QAehABjAxQgCAlBFCoQBACdgLA4QgIAkgfAVQgXAPgbAAQgKAAgLgCg");
	this.shape.setTransform(63.5,188,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDgVQB3gsBAAHQhOAXhmAjIiyA8QBEgtBrgkg");
	this.shape_1.setTransform(72.9,176.8,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah2AKQAhgJBHgJIBngVQA/gMAggIQg1Ajh9AUQiQAaguARQAKgZA4gOg");
	this.shape_2.setTransform(78,193.1,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#94BDCD").s().p("AihBwQgdikgnhOQgagyg2gUQArgLBCgjQBLgrAmgTQBHgiA1gEQBGgFA+ApQASAwATBTQAbB1AGAWQAMArAkBhQAcBVgGArQgIAxgmAbQghAWg7AIQguAGh1gBQhsgBgxAKQARhBgdirgAC3DFIhoAVQhIAMgfAIQg4APgJAZQAtgSCQgaQB9gWA2giQghAHg/AMgAgsjfQhqAmhFAtICyg+QBngjBNgXIgSgBQg+AAhnAmg");
	this.shape_3.setTransform(74.5,184.5,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAzFbQA7gIAhgXQAmgaAIgyQAGgrgchUQgkhhgMgsQgGgWgbh1QgThSgSgxQg8gohGAEQg3AEhHAjIgCgNQBCg5BbAHQBcAHAnBJQASAkAUBVIAgCLQALApAfBnQAYBagGAiQgKA2gtAaQgiAVhEAJg");
	this.shape_4.setTransform(79,184,0.378,0.378);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#94BDCD").s().p("AgyBTQhIgEgmghQAcgHAwgFIBNgJQBCgJAigSQAtgbAKg1IANACQgMBTgzA9IgKAMQhUAHgmAAIgQAAg");
	this.shape_5.setTransform(81.3,196.7,0.378,0.378);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94BDCD").s().p("ADJFKQAGgjgYhZQgfhngLgrIggiKQgUhVgSgjQgnhJhcgHQhbgHhCA5QABg/BigZQBRgVB1AJIABAAQAKA5AeBiIAzCrQA9DTgTB7g");
	this.shape_6.setTransform(79.3,181,0.378,0.378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHGWQAxg9AMhVQATh7g8jTIgyirQgdhigLg5IgBAAIABgKQAVgBAJAQQADAHAHAcQAIBUAsChQAxCqAKBLQASCRgzBnQgiAZgHAJg");
	this.shape_7.setTransform(85.3,183.7,0.378,0.378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBACIgDgDIAJADg");
	this.shape_8.setTransform(94.2,33.6,0.378,0.378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAAQARqRAMlWQAGHjgPIBQgPIqgiHBQALlCASqmg");
	this.shape_9.setTransform(94.5,127.7,0.378,0.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABOhaQjxgblQA4QEqhNEaAeQFXAkBLC9Qhsirk5gkg");
	this.shape_10.setTransform(102.8,170.1,0.378,0.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ai2gLQAigIBygOQDMgXBpAXQjJAJhhAIQisANhOAwQAOgnBNgRg");
	this.shape_11.setTransform(99.2,186.8,0.378,0.378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0D2BC").s().p("AAbAlQimgXgkABIgLgFIgSgVQgKgPABgRQBvAABzAWQBCAMCIAiQgpATg/AAQgmAAgugHg");
	this.shape_12.setTransform(101.1,33.1,0.378,0.378);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0D2BC").s().p("Ai2D5QgwgUgcg1QgYgwgDhAQgCg+ATg2QAUg5AkgeQAXgTBtg1QBtg2AbgEQAZgEAbAEQAQACAgAIQAIAkAGATQAQA2ArB6QAnBuASBDQhMBGiGAjQhHASg7AAQhGAAg6gXg");
	this.shape_13.setTransform(99.5,206.4,0.378,0.378);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#94BDCD").s().p("AlCCtQAHgIAigaQAzhmgSiPIARgDQBPgyCqgNQBigIDJgJIAKAcQjdBSg0AVQiSA9hZBCQgPAMgpA6QgfAtghAFIgJABQgZAAANgRg");
	this.shape_14.setTransform(97.6,192.7,0.378,0.378);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ai7EEQgugVgeg2QgbgygGhBQgFhBARg4QASg+AngjQAXgUB9g6QB+g7AigDQApgDAxAXQgCAeAKAiIgDACQgGgUgJgkQgfgIgRgCQgbgDgZADQgbAFhsA1QhuA1gXATQgkAegUA6QgSA1ACA/QACBAAZAwQAbA1AwATQBuAtCVgoQCGgiBLhHIAHACQgPAlg5AhQg1AfhMASQhMASg/AAQhSAAg/gdg");
	this.shape_15.setTransform(99.3,206.3,0.378,0.378);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAzCxQgRhDgmhuQgrh6gPg2IADgBQAKAiAaA0IArBaQA1BsgMA8IgDALg");
	this.shape_16.setTransform(108.4,205.3,0.378,0.378);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ADYCvQhvhEhGgiQjchqjPAgQgFiBBphKQBdhACWgHQCNgGB8AvQCCAyAoBTQANA/gJB1QgKCJAGA9QgtgYh9hOg");
	this.shape_17.setTransform(104.5,88.2,0.378,0.378);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#94BDCD").s().p("Ah0AWQCRglBYgMQgRAnhSAGIhEACQgpACgXAGg");
	this.shape_18.setTransform(119.1,180.2,0.378,0.378);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#94BDCD").s().p("AnBQ8QguiigIhUQgHgcgDgGQgJgQgVAAQAYkZAMq6QAKqOAik7QAHg8BGg2QBLg6BYACQBfAECBA2QBNAhB/BFQB/BGBAAtQB5BUASA9QANAtgIBnIgPC2QgDA8AECLQAEB+gFA3QgTDbgHFUQgHFoANDbQAFBJAZAvQggAJjXAyQiXAihSAlQAygGBIgSICGgiIABAGIgHACQAUAUBKgMIB0gSQhCAphbAnQhEAehpAmIgKgcQhogXjMAXQhyAOgjAIQhNATgOAnIgRADQgKhMgxirgABKLtQE5AkBsCtQhMi/lXgkQkagekpBNQDigmC4AAQBZAABOAJgAjfkYQgTKlgLFBQAknAAQorQAOoBgGniQgMFVgSKTg");
	this.shape_19.setTransform(102.9,138.4,0.378,0.378);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AheACQAkgaANgZQAPABAQAOQAOAOANABQAlgDBDAFQBBAEhPAEQiEATh0AnQAMgQAngfg");
	this.shape_20.setTransform(130.3,80.5,0.378,0.378);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7DCC5").s().p("Ag0C5QhNg3hxgZQhugYhyALQh1ALhbAvQAVhBBeg1IBQgoQAwgaAbgYQAlgfBfhwQBNhdA9giQAdgDAqAIQApAIAbgDQAOANAiArQAfAlAVARQBSBBDLBZQDKBXBTBDQhAA1iGAPQiKAQhVgsQgzAhg4A3IhdBmQgYhUhSg9g");
	this.shape_21.setTransform(119.2,72.9,0.378,0.378);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ap3AhIADgeQBRAICNgQQDCgZARgBQCYgKD8AOIGnAXIAAAWImOgPQjigDijAHIjzAVQhaAIhDAAQgrAAghgDg");
	this.shape_22.setTransform(119.7,218.1,0.378,0.378);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNgCQAbgJAbgCQABATgiABQgnABgGAGQgKgHAigJg");
	this.shape_23.setTransform(143.9,78.4,0.378,0.378);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7DCC5").s().p("AolASQgChpANg4QCFA5DBgmQAhgGCBgfQBigZA+gIQBvDaFJAyQlvAji3ATQk7AgjpAjQABgVgCicg");
	this.shape_24.setTransform(145.5,110.5,0.378,0.378);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7DCC5").s().p("AFXFtQiMhNg2h2Qg9ADi8A2QihAvhhgOQgMgCg9gaQgpgRglAPQgDgxgqgpQg6g7gGgLQAIhCABhhIAAiwIAKgKQBVhPDNgkQAhgFCQgUQBugPA9gPQBTCuCVC0QBGBUDRDcQABBDAWBBQANAmAiBGQibgRh6hDg");
	this.shape_25.setTransform(144,96,0.378,0.378);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ArDIkQgGg3gZgXQgDjtAEkrIAJoUQBTAlClgHQCTgGB9giQAXgGA2AeQA+AhAVADQAtAHBZgSQBYgRAuAIQAoAHAqAgQAQAMA3AzQBbBTBMgFQAZDLCvBNQg4Dfg2BvQhQCliCBFQi+AhlvAsQmHAuiqAbQgDgEgGg6g");
	this.shape_26.setTransform(151.9,157.9,0.378,0.378);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E7DCC5").s().p("AJOGXQguhCgHhgQiug/iSiJQgygDhOAGQhfAIgWABQiAADg3hAQiUAjiJAJQi3ALhcgvIgBjGQAAh3ALhGQHHhLKhguQCjEFCJC9QATAbAqAzQAiAuAFAYQARBPggB6QgpCegEA0QhLgmgqg8g");
	this.shape_27.setTransform(153.5,133.2,0.378,0.378);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AIZBSQjyhIh6ggQmyh6lAgBQh4AAjUgJIABgYQBEADA1AAQE2ACDhAZQD6AcDVBBQBuAhDmBJQDSBDCdAhIgGAcQiZghjahAg");
	this.shape_28.setTransform(178.1,224.7,0.378,0.378);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("EghbAmPQhMg6gQh1QgIg6ALg9IAbhvQgigIg8gCQhFgCgigDQh6gJgpg4QgdABgxAHIhQAMQhfAMgvggQgggVgahhQgXhtgJghQgehigLgyQgThZAUgrQAUgpBqgdQCAgkAugiQAWgQAog8QAkg2AWgKQAlgQBLgDIBsgBIAdryQASnRANk1QABjpANhgQAVifBfg+QgNhdAvhNQANgVAdgpQAYgkAKggQBYhJC2iOQCfiABbhrQgcgJiFgYQhpgTg2gcQhUgrh1iOQh5iSgShZQgeiXBHhQQBHhQCeALQBEAFBdATICfAkQA6ANBkANQB1AQAtAIQCZAcEeBkQE7BuCIAgQAWAFCRAbQBiARAtAVQA6AbBJBcIB/CXQAtAvBpBRQBkBOAoAsQAnArA+BuQA+BrAlAoQBLBRC3BgQDYBxBCAyQBBAyBKBnQAqA6BPB3QEfGTDVETIDcEeQB0CQB8B4QCRCNBNBBQB4BkCKBUQAlAYA6AsIgPAWIi8hrQhxhAg7gxQgrgkhDhGQhVhagZgYQjqjekOluQhfh/iHjEIjilHQhoiVgSgXQhMhjg+gxQhHg3jThwQi3hhhLhMQgpgqg7hmQhChygigqQgmguhfhNQhwhcgjgjQgSgShviEQhNheg0gaQg6gch8gSQiegXgogLQhagYicg5QjyhagegKQlWh2jSAJQgVABgmAOQgoAOgVABQhRAHhagOQhcgNhFgeQAlgBCoAXQB7ASBAgeQiIgkhBgMQh2gWhvAAQAAARAKAPIARAXQgqgUgZgZQhuBYApCMQAaBWBnCIQBXBzBWAwQBUAvCtAeQAOADBxAMQBRAIAqARQAlAPAzA3QA6BAAYAQQBkBFCuBKQDLBYA1AdQA1DFCvDWQA2BCBmBvQByB6AqAyQAVCcBFCMQAuBgBwCeQAjAwBeByQBPBmAMA2QARBPgdCJQgRBOgpCSQgSBKgfCLQgdByggA/QghBDhCBHQhMBQg/AWQgvARhfAIIieAPQglAGmIAqQkVAdikArQhkAbiEA2IjkBjQibA6hOAgQiMA5g5A/QgqAwgVBPQgUBLAFBSQAFBTAdA+QAgBDA0AYQArAVBAAGIgDAdQh0gLhCgygEgi4Ae4QgPATAkgDQAhgFAfgtQApg6APgMQBZhCCUg/QA0gVDdhSQBpgmBEgeQBbgnBCgpIh0ASQhKAMgUgUIAHgCQAXgGAqgCIBGgDQBSgFAQgqQhXANiTAnIiGAiQhIASgyAGQBSglCXgiQDXgyAggJQgZgvgFhJQgNjbAHloQAHlUATjdQAFg3gEh8QgEiLADg8IAPi2QAIhngNgtQgSg9h5hUQhAgth/hGQh/hFhNghQiDg2hfgEQhYgChLA6QhGA2gHA8QgiE7gKKMQgMK8gYEZIgBAKQh3gIhQAVQhiAZgCA+IACANQgmAThLAqQhCAkgrAKQA2AVAaAxQAoBOAdCnQAdCqgSBBQAygJBtABQB2ABAtgGIACANIhOAJQgvAFgdAGQAnAiBIADQAkACBngJIAKgLgEgtzAWyQgZA1AaB3QAXBmAuBjQAtBgAZAFQAnAIAggVQAggUAHglQAMg3hBigQhEinABgmQgrgVgfAAQgnAAgRAlgAy6MuQgEEtADDtQAZAXAGA3QAGA6ADAEQCqgbGHguQFxgsC+ghQCAhFBQilQA2hvA4jhQivhNgZjLQhKAFhbhTQg3gzgQgMQgqgggogHQgugIhYARQhbASgtgHQgVgDg+ghQg2gegXAGQh9AiiTAGQilAHhTglIgJIUgAjTEQQCSCKCsA+QAHBhAuBCQAqA8BLAlQAEgzApieQAgh6gRhPQgFgYgiguQgqg1gTgbQiJi8ihkEQqjAunHBKQgLBHAAB1IABDIQBcAvC3gLQCJgJCUglQA3BBCAgDQAWAABhgIQA6gEArAAIAbAAgAyolgQACCcgBAUQDpgiE9ggQC3gTFvgjQlJgyhvjcQg+AIhkAYQiBAgghAGQjBAmiFg6QgNA5ACBrgAg9kyQghhGgNgmQgWhBgChDQjRjehFhUQiVi1hTitQg/APhuAPQiQAUghAFQjNAkhVBPIBdhlQA3g4A0ghQBUAsCLgPQCGgPA/g2QhShCjKhZQjMhZhShCQgUgQgfglQgigrgPgOQgcAEgqgJQgqgIgcADQg9AjhOBcQhfBxgkAeQgcAYgvAaIhRArQhdA0gVBBQBaguB2gMQBygLBuAYQBxAZBNA4QBUA8AYBUIgKAKIAACwQgBBjgJBBQAHAMA6A6QApAqAEAwQAkgPAqASQA8AaAMABQBiAOChguQC9g2A+gEQA2B3CLBMQB7BECaARIAAAAgA6bt6QBGAiBuBFQB+BNAsAYQgFg8AKiJQAIh4gNg/QgohTiCgxQh8gviOAGQiXAGhcBBQhqBJAFCBQAwgHAwAAQCjAACrBTgAxzyMQgoAfgMARQB0gnCGgVQBQgEhBgEQhDgFgmADQgMgBgRgPQgPgNgQgBQgMAYgkAcgAq4zIQgiALAJAHQAGgHApAAQAigBgBgWQgbADgcAJg");
	this.shape_29.setTransform(169.8,124.6,0.378,0.378);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AJDEyIiEg9IkXh6QiohJhwg1QgogThXg8QhPg2grgRQgggLhFgDQhEgDgggNQgbgKgzgxQg7g5gWgOIAOgWIBXBCQAvAiAgAMQAdAMBBAEQBEAFAcAJQAiANA1AoQA9AuAWALQEtCgH7DGQANAGAmAHQAiAJAKAWIAAARIgHAAQg+AAhKgeg");
	this.shape_30.setTransform(310,179.7,0.378,0.378);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBgHQACAHABAHIgDABg");
	this.shape_31.setTransform(337.4,192.1,0.378,0.378);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AYkKjQgtglgXgOQizhphAgnQiHhShmhKQhAgtjhizQiziMh6hKQiRhXjshYQh1gukshjQjghJjjgsQjdgqkCgVQiogNi/gpIAGgcQBXATBgANQBWAMDJAKQCwAKBhASQGwBUH6DEIDbBUQB8AyBNAuQB9BMCwCIQD4DEApAeQBkBKCBBRQBcA5CVBYIBLAsQArAdAUAiIgCAAIADACIABABQgKADgKAAQgeAAgggWg");
	this.shape_32.setTransform(274.9,256.8,0.378,0.378);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E7DCC5").s().p("EArtAyDQhWg1gqgXQhKgqguAHQgUghgrgdIhLgsQiVhYhcg6QiBhQhkhKQgpgej4jEQiwiLh9hLQhNguh8gyIjbhUQn8jFmuhTQhhgTiwgJQjJgKhWgMQhggNhXgTQidghjShCQjmhMhughQjXhAj6gcQjggak3gCQg0AAhFgDImogXQj9gOiYAKQgRABjDAZQiMAShRgIQhAgFgrgVQg0gZgghDQgdg9gFhUQgFhSAUhKQAVhQAqgvQA4g/CMg6QBPgfCbg6IDkhjQCEg2BkgbQCkgrEUgeQGJgpAlgGICegPQBegIAwgRQBBgXBLhQQBDhGAhhDQAgg9AdhzQAfiKAShKQApiSARhOQAdiJgRhPQgMg2hPhmQhehygjgyQhwiegwhgQhFiMgVicQgrgyhxh6Qhmhvg3hCQiujWg1jFQg1gejMhXQithLhkhEQgYgQg6hAQgzg3glgPQgrgRhQgJQhygMgNgCQitgehUgvQhXgwhWhzQhniIgahXQgpiLBuhYQAZAZAqAUIADAFIAIAAQBEAeBdANQBaAOBRgHQAVgCAngOQAngNAVgBQDSgKFVB3QAeAKDyBaQCdA5BaAYQAoALCeAWQB8ATA6AcQAzAaBPBeQBwCEASASQAjAjBwBcQBeBMAnAvQAiAqBCByQA6BmAqAqQBLBMC3BhQDSBwBIA3QA+AxBLBjQATAXBoCVIDhFHQCHDEBeCBQEOFuDqDeQAZAYBVBZQBDBHArAkQA6AxByBAIC8BpQAWAOA7A5QA0AwAbALQAfANBFADQBFACAfAMQAsAQBPA3QBWA7ApAUQByA2CnBKIEXB6ICFA9QBOAgBBgDIAAAHQDSBAIpCUQHpCCEMBYQgwECimO+QiCLxhgHDQl3h5nHjlgEg5TAMIQgjADh/A7Qh9A5gXAVQgnAjgTA9QgQA6AFBCQAGBAAbAzQAdA2AvAVQBwA0CugpQBLgSA2gfQA5ghAOglIAEgMQAMg8g1htIgthaQgag1gKgiQgKgjACgdQgsgUglAAIgJAAg");
	this.shape_33.setTransform(241,166,0.378,0.378);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AsMPBIgCgCQAvgIBKArQApAXBXA1QHHDlF1B5QBgnECCrxQClu8AxkBQkNhYnmiCQopiVjShAIAAgGIAEgBQgBgIgDgHQgCgOAMgDIMKDWQHyCIEaBQIjeTjQiHL7hTHtQpRiioUlag");
	this.shape_34.setTransform(367,246.7,0.378,0.378);

	this.addChild(this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(56.3,29.8,340.3,272.4);


(lib.rh = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAEIAJgHIgFAHg");
	this.shape.setTransform(33.2,111,0.415,0.415);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKjRQARgvAagWQANgKAJgCIgFAHIgLAJIAGAAQgSAkAHBCIhRHPQgZldA+iXg");
	this.shape_1.setTransform(31.4,122.6,0.415,0.415);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AACgyIAHABIgQBkQgHhBAQgkg");
	this.shape_2.setTransform(33.1,113.3,0.415,0.415);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAFIADgHIAEgDIgCALg");
	this.shape_3.setTransform(33.4,111,0.415,0.415);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#94BDCD").s().p("AgICNQgbAVgJAwIgFgBIBOnAQACATAKBCQAJA2AAAhQABBEgPBeIgaCRQgUgdAChGg");
	this.shape_4.setTransform(31.6,125.4,0.415,0.415);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AgGAHQiGgag7gnQAjAMCuAlQCCAbA8ApQgtgRihgjg");
	this.shape_5.setTransform(43.2,132.9,0.415,0.415);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94BDCD").s().p("AgoB0QiDgzhEgUQAphZASiMIALABQA7AnCDAdQCkAiAsASIALACQgVCfg8BXQhJgUh+gxg");
	this.shape_6.setTransform(42,138.1,0.415,0.415);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94BDCD").s().p("ADJE+Qg8gpiCgdQiuglgigMIgLgBQAPhzgEh4QgEh7gXhnQBCAECSgbQCjgfAygDQASDCAEB6QAHC+gSCGg");
	this.shape_7.setTransform(43.2,122.2,0.415,0.415);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#94BDCD").s().p("AhBHLQAogWADgIQBMiFAFkZQADjJgjkIIgBgJQgCgKgZgCQgTgBASgRQAJgJAJAAQAJAAALAJIAAACQA5EagOETQgSFaiFBTQgVgZAcgPg");
	this.shape_8.setTransform(50.8,127.6,0.415,0.415);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#94BDCD").s().p("AikCfQA3hWAehAQAohWAQhcQCiAjAaAFQgWANgqA9IhPByQhRBvhBAAQgVAAgTgLg");
	this.shape_9.setTransform(55.8,142.5,0.415,0.415);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#94BDCD").s().p("AAeFVQhEgTgeADQABjygEhyQgHjKgphuQAVgLA3AIIBTANQgcBhgCB0QgECEAeB+QAdB/A3BQQgNAFgTAAQgYAAgigJg");
	this.shape_10.setTransform(57.7,121.5,0.415,0.415);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ADfClQADh0AbhfIhVgMQg3gJgUALIgKACIAAgCQgLgJgJAAQgJAAgLAJQgSARATABQAbACACAKIABAJIgLABQgyADiiAcQiTAbhCgDIgCgOQAzgfBegMQA1gHBlgLQAdgFAqgfQAsgeAXgEQAagEA/ARQBFARAWAAQAugfAxg6IASALQhDBKgaA2QgnBPgCBxg");
	this.shape_11.setTransform(48.9,109.6,0.415,0.415);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AAMgPIgXAfQAGgPARgQg");
	this.shape_12.setTransform(69,126.4,0.415,0.415);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#94BDCD").s().p("AAODCQiLgDiwglQgMgPAWgZIAogoQCLilBHhnQAZCEBiBSQBOBBCTAxQhbA9izAAIgXgBg");
	this.shape_13.setTransform(66.5,143.5,0.415,0.415);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BFA888").s().p("AhKEZQhgghg+hEQhBhIgGhdQgMitCRhQQB8hFDnAEQAdDoAKA1QAdCZA0BaQhPA/hqANQgbAEgcAAQhFAAhGgYg");
	this.shape_14.setTransform(79.9,134.4,0.415,0.415);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglAmQgFgxgHkfQAQgCAEAMQgFC8AQCGQASCeAxBsQhEhSgSi0g");
	this.shape_15.setTransform(103.3,128.8,0.415,0.415);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjoIZQjggXgrgbQgTgMgSgiQgTgkgYgSQgyglhxgfQh+gigzgcQgMglgFgoQgFgvAGgkQAJgwAbgWQgCBHAWAdIAaiQQAPhegBhGQAAgggJg2QgKhDgCgTIAShlIAHAAQAWBnAEB7QAEB6gPBwQgSCMgpBbQBEAUCEAzQB/AxBJAUQA8hWAViiQATiEgHjAQgFh6gSjCIALgBQAkEJgEDLQgEEWhPCFQgDAJgnAVQgdAPAVAZQCIhTARlZQAPkTg6kbIAKgCQApBvAHDKQAEB0gCDvQAfgDBGAUQA8AQAdgNQg2hQgeh9Qgdh9ADiHIAJABQgCB8AoCHQAlB9A4BQQAZgnAbhpQAZhlAggrQAvg9Bxg6QCQhKAjgbQAbgUAfgjIAHAHIgZAcQA6gSBygoIAHATQl2CFifDBQgUASgFAPIAZghQA9g5CCgiQCMgkBxAUQATBeAcDBQAeCmA1BVQgaA7hpAUQh+APg1AQQCDgTDHgGQESgJAtgDIACAZIi/AMQgjADi4AHQiGAEhNAQQgWAFhOAlQhIAhgwAFQgmAFgzAAQhgAAiSgPgAkrGNIgoAoQgWAZAMAPQCxAlCNADQDCAEBghAQiSgxhPhBQhihUgZiEQhHBniLCngAmAEzQgeBAg3BWQBOAuBtiSIBQhzQAqg+AVgNQgZgEilgkQgPBcgoBYgABmiIQiOBQALCtQAGBdBABJQA9BEBhAhQBgAgBkgMQBpgOBPg/QgzhZgdibQgKg1gejnIgZAAQjXAAh1BBg");
	this.shape_16.setTransform(68.5,130.1,0.415,0.415);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#94BDCD").s().p("AptLmQgoiHACh8QADhwAmhRQAag3BDhJQAZgdBBhEQA7g/AcgfQH/pjEpk1QARCqA3CZQAvCGBRCGQhpCFiiCpQhWBZjPDOQgYAZgmAuQgsA7gOAPQgfAjgbAVQgjAaiQBLQhxA5gwA+QghAqgZBlQgbBrgZAnQg4hPgliAg");
	this.shape_17.setTransform(85.9,96.4,0.415,0.415);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#94BDCD").s().p("Ag3ABQABg1AWgQQAegEAVALQAOAGAXARIguA1QgaAhgQAWQgXgNAAg4g");
	this.shape_18.setTransform(109.3,56.6,0.415,0.415);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#94BDCD").s().p("AAsDNQgJgbgIABQgIghgmiEQgchbgEgzQgEgigBgaQgBg1AQA0IAiDBQAXCRApA8QgDAHgDAAQgDAAgEgLg");
	this.shape_19.setTransform(108,64.5,0.415,0.415);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AATA7QgEgYgTgjQgUgjgFgYQAgA2ALAUQAYAtgNAAIgGgBg");
	this.shape_20.setTransform(111.6,76.6,0.415,0.415);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAQgdQgMg5gahnQgbhigIgqQCrGlhTDtQAcicgrjKg");
	this.shape_21.setTransform(111.6,126.7,0.415,0.415);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#94BDCD").s().p("AolFfQBph5DvjyQDijqByiEQAvASA4AmIBfBBQB2BNB7ABQg7A8iIBuQiFBqg+A/QiRAUigAvQhbAbi9BDQhzAog5ASg");
	this.shape_22.setTransform(108.1,98.1,0.415,0.415);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#94BDCD").s().p("AgdAZQAEgMAQgNQAPgLADgNQAWAOgCAjg");
	this.shape_23.setTransform(131.5,87.9,0.415,0.415);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ArPE8QBMhTB6hpICsiRICgiUQBkhdBGg7QAcgZAtgxIBOhXQBjhrBOgfQBOggCDgeIDdgwQBGgRBggHIACAXQg1AEgjAHQgvAIhQAXQhbAbgqALIiNAhQhTATgkASQgkATg4A+IhiBtQhWBXh1BqQiZCKgqAnQgpAlhIAzQhRA6gaAWQihCLhfCAQiMC/AdCIIgXAGQgui7Dij4g");
	this.shape_24.setTransform(100.4,59,0.415,0.415);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAKizQACAUgKCdQgHB7AZA7QhMhSBCkVg");
	this.shape_25.setTransform(139.4,49.2,0.415,0.415);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghgIIBCgEIABAWIhBADg");
	this.shape_26.setTransform(139.4,28.3,0.415,0.415);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEFEFE").s().p("AhFGAQgsgZhvhFQhHh6grhoQg1iBgXiGQAdg7BYhOQBdhSAegzQCmHIGmCFQAGATgaAeIgyAzIh6CAQhMBRg0ApQhMgjhXgzg");
	this.shape_27.setTransform(124.7,69.5,0.415,0.415);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("Ak+kcQBig9B/BDQBMAoBqBoQBoBkAzBNQBHBwAFB3QgcAOgMAaQnqhphsntg");
	this.shape_28.setTransform(131.9,60.6,0.415,0.415);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E0D2BC").s().p("AjpD/QCHhuBAhBQAGgagLgYQgOgdgBgJQAqhBBShVQBohqAbgeQhHBWghCSQgpCyBOByQg6iSAqirQArisByhQQgRgBgJAKQgFAEgKASQgBgFAOguQAMgrgPgbQAiAcA+A+QA7A/AjAbQgKA+gZB2QgVBpgDBTQidCJi/BMQjOBTj+APQA7g8CNhzg");
	this.shape_29.setTransform(136.3,86.5,0.415,0.415);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ADImeQidCEhkDfQhWC8g4EdQBCpKFNjyg");
	this.shape_30.setTransform(158.5,48.5,0.415,0.415);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AqQMaQAOgQAug6QAmgvAYgYQDPjPBWhaQCiiqBniFQhPiEgviFQg3iagRipQkpE0oBJiQgcAhg7A+QhBBEgZAdIgSgLQARgUAjgtQAigsATgWQhWhPgXhcIAXgFQAUBbBgBBQB1iTDekAIFpmfIBJhgQAzhCAlgiQBxhqBeBSQBujxDtBlQBfAoBkBaQBZBSBFBiQBsCbApAwQBZBpBSAgQAmimAUhRQAliNAthSQglCRhOEcQhBD7gUDQQgkAUiJBuQhwBahVAeQh1ApjqAdQkPAihqAaQjlA5iYA2IgHgUQC+hCBbgbQCigwCPgUQA+g/CFhrQCIhvA7g7Qh8gCh1hMIhfhCQg4gmgwgSQhvCEjkDqQjvD1hpB4gAKKAJQhUBWgqBAQABALAOAdQAKAYgFAaQhABBiHBvQiNByg8A8QD/gPDQhSQC/hNCciIQAEhUAVhrQAZh0AKg9Qgjgcg8g+Qg9g/gigbQAPAagNAsQgNAuABAEQAKgSAEgDQAKgKAQABQhxBPgrCrQgqCsA6CSQhOhxApi1QAgiQBHhWQgaAehoBogAHGDMQgQANgEAMIA8AAQACglgWgNQgDAMgRANgAABpBQhWBOgdA8QAYCGA1CCQAoBoBHB4QBwBFAsAZQBZAzBLAjQA1gpBMhRIB5h+IAzgyQAagegHgUQmoiHimnHQgdAyheBSgAgThFQATAkAEAYQAYAJgcg1QgKgWgig2QAFAYAUAkgACarjQBtHvHrBpQANgaAbgOQgEh3hHhwQgzhPhohkQhshohMgoQhDgjg7AAQg1AAgvAdgAg5iaQAHAUAGgPQgpg9gZiRIgijCQgQg0ACA0QAAAaAEAjQAFAyAcBdQAnCFAIAhIABAAQAIAAAIAZgAhoprQgVAPgBA3QgBA4AXAOQAQgWAdghIAtg3QgXgRgNgHQgRgIgUAAIgRACg");
	this.shape_31.setTransform(112.2,79.5,0.415,0.415);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AKpCWQgqgMgXgMQg2gbhFgvIhzhPQiJhdhpgMQh8gNjJAzQjeBAhlASQhdAQiSAKIgCgXQCggMB5gfQBggYDag+QDCgtCCAVQBHAMCVBOQAlAUBfBIQBXBFA9AbQAkARA0AUIgGAQIhDgTg");
	this.shape_32.setTransform(138.7,147.1,0.415,0.415);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AncBbIB5gHQBEgFA4gKQBhgRDvhLQDihICPgTIADAZQhxAPjbBJQjnBMiHAYQg3AJhJAEIh+ADg");
	this.shape_33.setTransform(160.6,23.9,0.415,0.415);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AiPgfQgUgKgngeQgmgegXgKIgSgHIAGgQIB7AvQBGAdAxAbQASAKBjBAQBCArA3AVQAnAPAmALIAAACQjZhBjQhlg");
	this.shape_34.setTransform(181.5,159.1,0.415,0.415);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AiKj1QhYg9hPgPQg8gMhVALIgEgZQCRgTCLAOQCOBVCcDAQBaBrCqDgIAgAmQAaAfAJAMIAAABIgiAVQlrnSjEiKg");
	this.shape_35.setTransform(199.2,33.6,0.415,0.415);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQgKIAggVIABA/g");
	this.shape_36.setTransform(217.4,48.9,0.415,0.415);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQgWIAAAAIAhAqIAAADQgVgagMgTg");
	this.shape_37.setTransform(217.3,49.4,0.415,0.415);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E0D2BC").s().p("AYHbmQihgPh9glQgmgLgngQQg2gVhDgrQhlhCgSgKQgxgbhGgcIh7gwQg0gUgkgRQg9gbhXhFQhfhKglgUQiVhOhHgMQiAgVjEAtQjaA+hgAYQh5AfigAMQgtADkSAJQjHAGiDATQA1gQB+gPQBpgUAag7Qg1hVgeimQgcjDgTheQhxgUiMAkQiCAig9A5QCfjBF2iFQCYg2Dlg5QBqgaERgiQDqgdB1gpQBTgdBwhaQCJhsAkgVQAUjPBBj9QBOkdAliRQgtBSglCOQgUBRgmClQhSgfhZhqQgpgwhsibQhDhihZhRQhkhahfgpQjthkhuDwQhghRhxBpQglAjgzBCIhJBfIlpGiQjeEAh1CQQhghAgUhaQgeiICNi/QBeiAChiLQAbgWBQg6QBJg0AogmQAqgnCaiKQB2hrBWhWIBjhtQA4g+AjgTQAlgSBSgTICNghQArgLBagbQBRgXAugJQAjgGA2gEIBDgDIB8gEQBJgDA3gKQCIgXDohOQDbhKBxgPQBWgLA7AMQBQAPBYA9QDGCKFqHUIAAAAQAMAUAXAcMAACAsBQjFgBh4gKgAu+IjQAHEgAFAzQASCzBGBSQgyhrgTieQgQiJAFi8QgDgKgMAAIgFAAgArdJfQAcBmAMA6QAsDMgdCcQBUjtiumnQAJApAaBjgADcqfQA4kdBWi+QBljgCdiDQlODxhCJNgAgSt7Qgbg6AJh9QAKidgCgUQhEEWBOBSg");
	this.shape_38.setTransform(141,93.6,0.415,0.415);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F6D0B1").s().p("AAAgNIABAAIgBAcg");
	this.shape_39.setTransform(218.2,168,0.415,0.415);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgOgQIAAgDIAdAnQgPgSgOgSg");
	this.shape_40.setTransform(218.7,51.2,0.415,0.415);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E0D2BC").s().p("AgMWBMgADgsBQAPAVAPASIABAAMgAaArag");
	this.shape_41.setTransform(218.7,108.9,0.415,0.415);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AmIgvIAAgBQB9AlChANQB1AKDGABIAAAeQBLABBtgDIAAABQhSAHhUAAQkmAAlFhgg");
	this.shape_42.setTransform(209.5,166.8,0.415,0.415);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AE9AQQhrgXiKgDQg7gBjHAHQhuADhKgBIACgeQCcAICkgGQCcgGB6AHQAvAJBeAoIgFAOQgZgMgYgGg");
	this.shape_43.setTransform(233.6,168.7,0.415,0.415);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("ACNBEQgxghl0jmIh2hNQhHgugrgTIAGgOQDcBiEeC4QFCDNC/C2IgGAiQh/h+jvieg");
	this.shape_44.setTransform(270.1,184.2,0.415,0.415);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgIAlIAAgKIgfgdIAGgiQAlAkAkAlg");
	this.shape_45.setTransform(292.8,198.9,0.415,0.415);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E0D2BC").s().p("AC9VTQkei4jchiQhegqgwgKQh6gGidAFQikAGidgHMAAcgraQB2CHCnCFQA3AtEYDPQBSA9CpCJQCXB0BqAuQAnAQBWAOQBXAPAmAPQBUAhBzBdIC/CaQCvCCCUBfMgFmAgKQi/i2lCjPg");
	this.shape_46.setTransform(262.2,124.7,0.415,0.415);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ALhIoIjAiaQhzhdhUghQgmgPhXgPQhWgOgngQQhqguiWh0QipiHhSg9QkYjPg3gtQioiFh1iHIAAAAIgBgBIgggpIgBhCIAEgCQAHAfA1BGQAsA8AtAxQBPBWCSBsQBWA/C+CFQA4ApBMA0ICABVICBBiQBMA8A1AWQAnARBeAPQBgAPAeANQBXAkB3BcQBCAyCBBmICTBxQBYBFA/AoIgGAhQiUhfiuiCg");
	this.shape_47.setTransform(262.2,79.7,0.415,0.415);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag0gPIAGggQAyAhAxAWIAAAoQg4ghgxgeg");
	this.shape_48.setTransform(308.4,112.7,0.415,0.415);

	this.addChild(this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(29.1,18.7,281.6,181.9);


(lib.next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Play", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 121;
	this.text.setTransform(59.5,10.2);

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
p.nominalBounds = new cjs.Rectangle(-1,-1,125,46.8);


(lib.lh = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFBGNIpcBEAlAnQIJYAJ");
	this.shape.setTransform(-10.6,130.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0D2BC").s().p("Ak/nQIJWAJIAqNUIpcBEg");
	this.shape_1.setTransform(-10.6,130.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsPdIAA+6QAsAFAtABIAAeoIhPAMg");
	this.shape_2.setTransform(11.6,128,0.435,0.435);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgsgIIAKAAIBPgMIAAAbIhZAOg");
	this.shape_3.setTransform(11.6,171.4,0.435,0.435);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Av/JsIAAghQFHACE6hzQEqhtDFi1QAngjC1isQCHiCBVhHQCJhwBWhKQB9hrBshnIAPAQIhbBaQhXBWh+BuIjYC4QhXBJh/B5QiYCSg2AwQivCfkuBpQkoBnkaAAIg0gBg");
	this.shape_4.setTransform(58.2,58.2,0.435,0.435);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("A2SDQQDWgbFogNQDPgGGvgKQF1gMDxgcQE6gmDEhKQBhgjCRhHID4h6IAPgIIAMAZIi7BdQixBbiSA2Qi3BFi4AiQkUAzqxALQmMAFiHAFQkjAKi9AZg");
	this.shape_5.setTransform(75.7,161.4,0.435,0.435);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqgHIAPgDQAcgFAmgEIAEAaQgqAFgcAGIgJACg");
	this.shape_6.setTransform(157.9,141.1,0.435,0.435);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ACdgqQitAWgNABQh8AFgmgwQBAAZBygDQBcgDBYgTQAOASABAjQABAqAEANIAFAPIgEACQgTgvgMg6g");
	this.shape_7.setTransform(161.2,83.3,0.435,0.435);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0D2BC").s().p("AA8DCQiPgihVg8QBLgUAjgUQA1geAPgwQgbAkg3AcQgkAThGAZQg7gmgcgUQgwgigZgkQgDhkAGhlIAHABQAmAwB8gGQANAACtgWQAMA7ATAvQApBrBQBbQA/BIBpBSQi6gXhegXg");
	this.shape_8.setTransform(167.1,91,0.435,0.435);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiFBxQCBgiAvghQBRg1ABhsQAjBbhiBNQhMA/hUAAQgSAAgRgDg");
	this.shape_9.setTransform(176.5,75.2,0.435,0.435);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AvlDFIAFgEQAVgUBsh1QBWhaBCgzQDGidDnAlQBZANCqBVQCjBRBgALQBJAICXgHQCfgHBDAGQCpANCOAtIgIAbIgXgHQh6gkjEgDQjmADh6gEQhzgEiMgyQiahBhLgcQiBgwhfACQh7ADh1BSQhEAwheBVQg2AzhxByg");
	this.shape_10.setTransform(145.5,22.5,0.435,0.435);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AArAuQAIg8AFhtQAHiLADgkQARDIgUCMQgdDUhqAuQBZhCAai8g");
	this.shape_11.setTransform(190.8,123.6,0.435,0.435);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAqAqQBIiFAKinQAMCjhNCOQhAB7h3BZQBvhuA3hrg");
	this.shape_12.setTransform(191.3,50.5,0.435,0.435);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABrBpQgcgXgog0Qgug7gTgTQgngpgsgPQgrgPhJgDIABgUQA1ACA+gDQBAAjBkBsQBjBnBHAjIgaAHQgxgGgrgig");
	this.shape_13.setTransform(189.8,69,0.435,0.435);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AicA/QAegPA6gGIBigLQB1gQAFhQQAbBHhxAkQhHAYhcAAQgdAAgegDg");
	this.shape_14.setTransform(193.6,96.9,0.435,0.435);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYgfIAZgHIANAHQgCAfANAfIgZAIQgNgjgLgjg");
	this.shape_15.setTransform(199.5,76.7,0.435,0.435);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ACGCXQibgRg/gLQh2gThQggQhMgehghBQhthLgTgwIgEgNIAYgHQAZAlAwAjQAcAUA7AmQBHgZAkgSQA2gdAdgmQgRAyg0AeQgkAUhLAUQBWA6CRAjQBdAWC4AXQhohSg9hGQhRhcgphrIAFgCQAnBoBtBrQBHBGBxBSQB4gBBvAcQBXAWBnAuIgLAZQiOg7ksggg");
	this.shape_16.setTransform(176.8,96.5,0.435,0.435);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAfAfQA5g5A5hrQgdBnhBBFQhOBZh0AHQBlgbBJhNg");
	this.shape_17.setTransform(207.8,68.1,0.435,0.435);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AjsCsQA3hLAJgVQAMgbAHg4IALhoQARiBA1gWQAxgUBfAfQBYAcAuApQAZAWARAkQAHAPAUA2IgIACQgSg4grgrQgogphGgVIiegmQgVAJgJAVQgTAegLBwQgMB2gcA6QgGANg5BFQgpAzACApIgKABQgCguAog1g");
	this.shape_18.setTransform(219,130.7,0.435,0.435);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAEQg2hegXg7IAbgIQALAeAfAxQAkA5AJATQAOAaAUAwQAWA3AJAUIgYALQgVgvg5hrg");
	this.shape_19.setTransform(203.4,85,0.435,0.435);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#365C67").s().p("AgmDuQAHg5AAgbQAGkuA0iHQARBPgICUQgEAzgMB7QgKBwgDA3QgrgEgCgrg");
	this.shape_20.setTransform(211.6,98.2,0.435,0.435);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOBQQg5g+h3g9IASgRQCmBCBcCYQAHgdAdg2QAbgyAHgjQgvgChDgNIhsgZIAEgQQBkAWB2AOIAAj3IAYAAQAAATAJB+QAGBagJAyQgGAggnBFQgmBFgHAoQgFAcABAgIgaAAQgFhyhLhUg");
	this.shape_21.setTransform(229.1,118.4,0.435,0.435);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgsALIAAgcQAsADAtAAIAAAfQgtgBgsgFg");
	this.shape_22.setTransform(11.6,84.4,0.435,0.435);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AB8C9Qh7gug+gWQhvglhbgPQh3gTiZgHQizgJiAAOIgDgcQCMgQCrAHQCiAGCBAWQBQAOBoAkQA7AVB1ArQDbBMCzgUQiOgRgbgHQhZgagMhGIgCgPIAJgBIADAQQALAzBVAgQBVAfBZgOQB/gUBYiNQBaiPgtiHIAIgCQAKAdAMAYIAaAAIAFBaQAAA1gLAlQgbBXhfBTQhjBWhjAMQghAEgkAAQiOAAi0hAg");
	this.shape_23.setTransform(196.5,139.3,0.435,0.435);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0D2BC").s().p("AHyHkQhnguhXgVQhvgch4ABQhvhShJhIQhthsgnhoIgGgPQgEgLgBgsQgBgjgOgSQhXATheADQhyADhBgZIgGAAQAFhOALhHQAjggA6gnIBhhCQBzhRAthTQAuAuBNAKQAPADB/ADQBGADArAPQAsAPAoApQASATAwA9QAoA0AdAXQAqAiAxAGQALAlANAjQAYA7A1BeQA8BrAUAvQAoBZANBUQAQBlgUByQhcgrgvgWgAFGE0IhkAKQg7AHgeAOQCBAKBfgeQBxglgbhIQgFBRh0ARgAg1ivQgwAhiCAhQBoAQBehMQBghOgkhbQAABshQA3g");
	this.shape_24.setTransform(180.7,84.9,0.435,0.435);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AlJDUQAPiFgEgrQAnguBEg0QBSg5AngdQCRhtAjh9QAFAUgJAgQgHAaALAMQBhA2CUAHIgBAVQh/gEgOgCQhOgLgtgtQguBThxBRIhhBCQg5AngjAdQgLBHgGBPQgGBlADBjIgZAHQgTg9ANhug");
	this.shape_25.setTransform(165.4,72.9,0.435,0.435);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BFA888").s().p("AitEsQhVgggMgzIgCgQQgCgpApgzQA5hFAGgNQAcg4AMh4QALhwATgeQAJgVAVgJICeAmQBGAVAoApQArArASA4QAsCFhaCRQhXCNh+AUQgbAFgbAAQg8AAg7gWg");
	this.shape_26.setTransform(219.4,133.7,0.435,0.435);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AA7E2IinhZQhog2hCgcIALgZQAvAWBbArQAUhygPhjQgNhUgohZIAYgLQAUAuAZAiQALiOAshLIAYAHQg2CHgFEuQgBAbgHA5QADArAsAEQADg3ALhwQAMh7ADgzIARABIgOCxQgJBsgDBKQCKA6CrAkIgEAQQhCgNgoADIgSARQgrgWgygYg");
	this.shape_27.setTransform(214.1,101,0.435,0.435);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#365C67").s().p("AAsFDQiogkiMg6QAChKAJhsIAPixQAIh7gEhpQCZAKBRAJQCAANBgARQAYBSAKB0QAHBaAACFIgBD4Qh1gPhngWg");
	this.shape_28.setTransform(224.3,101.4,0.435,0.435);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AjZBrQAkgSCzh0QB/hVBXgTIAGAeQg5AOhbA4IiXBgQgrAZhQAqg");
	this.shape_29.setTransform(146.8,146.4,0.435,0.435);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#365C67").s().p("AijhsQAogDBCANIBsAYQBDAOAuACQgGAkgbAwQgdA3gHAdQheiWikhEg");
	this.shape_30.setTransform(228.7,120.6,0.435,0.435);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAagUQhwiFiTgxIAIgaQB6AoBNA7QA4AtBPBvIB9C2IgWAUQh3ithDhMg");
	this.shape_31.setTransform(198.8,34.4,0.435,0.435);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAgHIAAABIADAUQgKgpAHAUg");
	this.shape_32.setTransform(235,86.3,0.435,0.435);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AD9AaQgJhygYhSQhhgSh+gMQhSgJiZgLQAEBqgJB4IgRgBQAJiRgRhQIgZgGQAGgLAJgNQBogECbASQBaAKCpAaQAOAaAAgFIAMgBIABAMQAAAPATCZQAOB6gKA4QgGAjAAAmIgYAAQAAiIgHhZg");
	this.shape_33.setTransform(224.5,95.4,0.435,0.435);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AEqHVIAAgBQgKhAgYgkQgog3gnhBIgJgOQhyjBh+i0QhgiIiijRIAWgUIAIALQCpDWBfCGQB4CqB8DRIAOAWQA7BiAJAWQAWAxADBPIgNABQAAgJgMgbg");
	this.shape_34.setTransform(222.1,65.5,0.435,0.435);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E0D2BC").s().p("EgnvgCuQEyAKFEhxQEuhpCxieQA2gxCYiSQCAh6BWhJIDYi5QB+htBYhWIBahaQByhyA2gzQBdhXBFgwQB1hSB5gDQBfgCCBAwQBLAcCbBBQCNA0BzAEQB6AEDmgDQDEADB6AkIAXAHQCTAxByCFQBDBNB3CuQCiDQBgCJQCAC1ByDCIAIANIA+BqIAbBJQgQg4ASAzIAVA/QipgahcgLQibgRhoAEQgJAMgGALQgrBLgMCMQgYghgVgtQgJgTgXg4QgTgwgOgbQgKgUglg5QgfgxgMgeQgMghACgfIgOgHQhHgjhjhpQhmhshAgjQg/AEg0gDQiUgHhhg2QgLgMAHgaQAJghgFgTQgjB9iTBsQgnAehSA5QhEA0gnAwQAEArgPCEQgNBvATA8IAFAOQASAvBtBKQBgBCBNAfQBPAgB2ATQBAALCdARQEsAgCOA7QBCAbBoA2ICqBZQAxAYArAWQB3A/A5A/QBNBUAFByQgMgZgKgdQgTg2gHgPQgSgkgYgVQgvgphYgcQhggggxAVQg2AVgQCCIgMBoQgHA5gLAcQgJAVg4BKQgoA2ADAuIACAPQAMBFBZAaQAbAICOARQizATjbhLQh3gsg7gUQhogkhQgOQiBgXiigGQirgGiMAPQgmAEgeAGIgPACQhXATiBBVQizB2gkASIgOAIIj4B6QiQBHhgAlQjFBKk5AlQjxAdl4AMQmuAKjPAGQloAMjXAcgAYwJHQgFBtgIA/QgaC7hbBCQBsguAdjUQAUiOgRjIQgDAkgHCLgAeeoWQhKBOhmAaQB0gHBRhZQBAhGAdhoQg5Bsg5A6gAYuugQg5BrhvBvQB3haBCh7QBNiQgMijQgKCnhICHg");
	this.shape_35.setTransform(124.3,92.8,0.435,0.435);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AApBfIgVg+QgSgyAQA2IgZhHIgvhRQAgAzAfAsQAXAjALBAQgKgVAMAsIgCgXQAMAcAAAJIAAAAQgCAAgMgVg");
	this.shape_36.setTransform(233.2,82.5,0.435,0.435);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,1,1).p("AgTmqIAnNU");
	this.shape_37.setTransform(123.9,94.1,1,1,0,0,0,106,-33.6);

	this.addChild(this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.7,13.3,281.1,164.6);


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
	this.shape_5.graphics.f().s("#000000").ss(1,0,0,4).p("AEn2nQDoA2BmCoQCMDlAJDCQAEBCgMBHQgGAmgMA7QgKA+ghBgQgRAxgUA2QgBAGgUA/QgRAzgCARQgKA4AKBpQALCDAnB8QAXBIAzCnQBEDgADAiQACAOhEA8QhmBagyA1QjeDtAAEEQgBguhwhLQhCgsixhgQimhbg6gpQhdhCAcghQA1g+gUkiQggkvgDg0QgCgwgygSQgigNhOgBQhjgCgYgDQg+gJgTgfQgZgoANg0QATgwABgKQAAgJgSgYQgWgdgEgJQgGgPANgSQALgPAYgPQgWgFgXgHQgtgPADgOQALgxACgNQADgfgOgLQgmgRgbgSQg1gjgBgsQgBgXBKhSQBRhbAPgsQAFgOgJgWQgMgYgDgLQgLgkAdi7QAijIAFgoQAEgWA2gxQA/g5BWgvQDxiFD9AYIA/AAQBNAEBJARg");
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
	this.shape_1.graphics.f("#000000").s().p("AhDDNIgSmbQAHA5ALAeQAVA+AmgDQAjgCALhHQAGgkgCgjIAsGXQhEABgUACIgTABQgTAAgbgCg");
	this.shape_1.setTransform(8.7,20.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.4,41.5);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj9BHIBOhTQBLhSAFAAIBHgDQBBgCAJABQAQACC8BNQhGgMhgAJQi+ASiBBnQgagYAEgEg");
	this.shape_1.setTransform(25.4,10);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50.9,20);


(lib.finger = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhLD7IA8hGICbi1QCoiUABAAIgvhxQg2AegfASQgwAbABAAIieBXIj7EFAk0DmQAXg1AAgBAhMEGIAAgK");
	this.shape.setTransform(-27.2,-29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,0,0,4).p("Ah3hXIASgbAB2BuIACAD");
	this.shape_1.setTransform(-47.8,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("Ak/EEIATgdQAMglAKgPQAEgHAEgDQAMgJAbgeQAagfAFgFQAwgzArgsQBVhaAJgDQAFgBA+goQA9glANgCQAIgBAxgjQAIgGAIgGQA9gsALACQAPAEAUA7QAVA7gLAGQiFB6gWANQgNAFg8BIQhBBNgKAJQgLAJgLANQgGAHgIAIQgGAHgIAIQgbAegFAKQAAAAgBABQAAABAAABQAAADAAAF");
	this.shape_2.setTransform(-27.8,-30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7DCC5").s().p("AhXFmIjdjiIAXg3QAFgHAEgDQAMgJAbgeIAfgiIBahhQBVhaAKgDQAEgBA+goQA9glANgCQAJAAAxgkIBVgwIAvByIipCVIibC0IgOAOIgOAPQgcAegEAKIgBABIAAACIAAAIIgEBpIgBAOIAAAQIgCApIgBAWg");
	this.shape_3.setTransform(-27.2,-20);

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ACFhcIgEAFACFhcQgEgGgQgUQgYgdABAAQABAAjhDBQABADAkAyQAkAzABgCQC/jqAEgCQABAAgDgEg");
	this.shape_4.setTransform(3.2,-34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhhBjQgkgygBgDIDgjBIAXAdIAUAaIgEAFIAEgFIACAEQgEACi/DqIAAAAQgCAAgjgxgABaiTIAAAAIAAAAg");
	this.shape_5.setTransform(3.2,-34.8);

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmGGEIALsIIMBAKIgEFDIgcARIgGADIgDAMQhKAwhIA5IgLgOQjchPh9DOIhgChQgKAQgIARg");
	this.shape_6.setTransform(-21.8,-43.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.9,-82.2,78.7,99.4);


(lib.breath = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("Aj5meIFhJqIAWAQQAdAOAjgNIA8DD");
	this.shape.setTransform(95.6,-112.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,0,0,4).p("ACRhBQgyAGg+ATQh4Aog2BE");
	this.shape_1.setTransform(103.7,-68.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,4).p("ABHgbIiMA3");
	this.shape_2.setTransform(126.5,-78);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,0,0,4).p("AhOATICdgl");
	this.shape_3.setTransform(123.7,-88.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,0,0,4).p("AinngIF0J6IAfAeICigWIApCYIiKBCIABAoIlCBCImhqug");
	this.shape_4.setTransform(90.9,-109.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#94BDCD").s().p("Am2jLIEPkXIF0J6IAfAeICigWIApCYIiKBBIABAoIlDBCg");
	this.shape_5.setTransform(91,-109.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,0,0,4).p("ACiguIhVh7IjpC1IBtCn");
	this.shape_6.setTransform(54.4,-149.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AieAIIDpi1IBUB6IjQDhg");
	this.shape_7.setTransform(54.7,-149.4);

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0D2BC").s().p("ApIDTICtg/QDRhNCyhHQI1jfAshMQg0BhiUB8QknD1nbCFg");
	this.shape_8.setTransform(279.2,172.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0D2BC").s().p("Aq+EMQAOg0AZg3QAbg2EvijQCghXD7iAQBhgzEZgIQCNgFB5AGQjHAGp+FHQk+ClkYCkIAPhBg");
	this.shape_9.setTransform(248.8,109.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0D2BC").s().p("AlXAAQDKiXDgh7QCGhIDlAMQByAHBZAUQm7FCnWDBQjrBhiUAgQAgiCEQjPg");
	this.shape_10.setTransform(100.2,188.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0D2BC").s().p("AmnFXQg6gVgigTIgXgQQApg3BRhLQCgiWDGheQHzj0BigOIgVAyQgcA9geA5QhjCzhjBCQiKBbjjBiQjTBZhRAAQgQAAgMgDg");
	this.shape_11.setTransform(145.8,229.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0D2BC").s().p("AglPcQgfgWghglIgagfQgEgWBKtvQBItxgLgzQgMhEAigMQAkgLAXA6QAMAdAMEbQAMEXAFFZQANN3gqBqQgXA5gqAAQgeAAgngeg");
	this.shape_12.setTransform(-16.2,135.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0D2BC").s().p("AgZMOQgfgDgJgiQgGgXgIq1QgHq3gCgJQgDgRAPguIAOgrQCvKqgbHkQgNDzgxBqQgRAwgdAAIgDAAg");
	this.shape_13.setTransform(26.1,115);

	// Layer 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,0,0,4).p("AjMBiQAlgVATgxIAYh7IA+gZIAUAZQg5BLgNAKQgQALgCAbQgDAnAnAkQAlAiAqgbIAfgjQAkARBIgRQAmgIAsgO");
	this.shape_14.setTransform(40.8,-47.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,0,0,4).p("AGtBfQAvBhhZALQggAEgkgJQgigJgGgLQgKgRgPgsIgNgnQAPgegFgUQgDgNgsg5Qgug+gHgJQgQgXglgfQgvgpgZAFQgaAGh5A/Qh3A8gdAVQgmAcg+BIQhKBZgBAs");
	this.shape_15.setTransform(31.3,-61.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,0,0,4).p("Aryz5QAfgWAggUQBAgqAKAGQAVAOC1gzQBJgVAkA+QAMAUAEAZQAEAVgEADQgHAFijBkQjPCdgSAFQgRAFi0C0QgJAJg2CKQg3CMgUAVQgdAggzAzQg3A5gZAWQgWAVgBBQQAAApADAkQAEDLAfEsQAxHSBbE7QCzjdG5h6QDdg8C4gRQKSpOHGicQFsh+DZCcQCaBtBCDxQAhB4ACBiQA2FFqOFBQlHChlSBgQjuDUn6DLQlOCFjwA7QhYAWhYAmIhGAiQoPFRjrATQhKAGgkgaQgLgIgGgLIgEgJQi6ivAKm+QADiMAWiWIAWh6QgPhYAklcIAmlLQABgnA2mSQA3mRACgTQAWjXADhBQAAj1ABjUQACmhAMghQAMgiAWhmQAVhjACgKQAEgOASiCQASh8ADgWQACgXAPgtQARg0ANgKQAMgJAbgfQAOgPARgUQAwgzArguQBVhaAJgDQAFgCBAgnQA9gmANgBQAKgBA/gvQA9gtALADQAPADAUA8QAVA7gLAFQiFB7gWAMQgNAHg8BIQhBBOgKAIQgWAUgeAgQghAkAAAHQgHDzgFAUQAkgcArgaQBVg1AfAEQA1AIA+A+IA/AwQBCAzALATQAWAlAYAvQAjBAAGAWQAIAcAXBDQAaBKAJAQg");
	this.shape_16.setTransform(150.4,74.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7DCC5").s().p("EgbZAmuQgLgIgGgLIgEgJQi6ivAKm+QADiMAWiWIAWh6QgPhYAklcIAmlLQABgnA2mSIA5mkQAWjXADhBIABnJQACmhAMghQAMgiAWhmIAXhtQAEgOASiCIAViSQACgXAPgtQARg0ANgKQAMgJAbgfIAfgjIBbhhQBVhaAJgDQAFgCBAgnQA9gmANgBQAKgBA/gvQA9gtALADQAPADAUA8QAVA7gLAFQiFB7gWAMQgNAHg8BIQhBBOgKAIQgWAUgeAgQghAkAAAHQgHDzgFAUQAkgcArgaQBVg1AfAEQA1AIA+A+IA/AwQBCAzALATQAWAlAYAvQAjBAAGAWQAIAcAXBDQAaBKAJAQQAfgWAggUQBAgqAKAGQAVAOC1gzQBJgVAkA+QAMAUAEAZQAEAVgEADIiqBpQjPCdgSAFQgRAFi0C0QgJAJg2CKQg3CMgUAVQgdAggzAzQg3A5gZAWQgWAVgBBQQAAApADAkQAEDLAfEsQAxHSBbE7QCzjdG5h6QDdg8C4gRQKSpOHGicQFsh+DZCcQCaBtBCDxQAhB4ACBiQA2FFqOFBQlHChlSBgQjuDUn6DLQlOCFjwA7QhYAWhYAmIhGAiQoPFRjrATIgaABQg3AAgdgVg");
	this.shape_17.setTransform(150.4,74.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,0,0,4).p("AB6huQgrAgg0AtQhlBWguA7");
	this.shape_18.setTransform(1.1,-84);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,0,0,4).p("ABBhDIiBCH");
	this.shape_19.setTransform(49.5,-47.5);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.8,-176.8,392.5,502.7);


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
	this.shape_9.graphics.f().s("#000000").ss(1,0,0,4).p("EAPohPYQBwDiAAENQAAFegMCIQgPCug1CIQhkEAjIHNQg6CFhFCwQhLC+gVBGQgZBUAECJQAGCcAsB7QATAzA3BIQBVBvAOAWQB9C+gEEMQgDEZhQDNQgsByhXCWQgrBdgEBmQgCA4AHBRQAAAjALElQAHE1gVCVQgRB5gnDSQgbCpANBZQAPBmASCtQARCiAEBMQADA4A7BBQAKALAfAfQATASABAGQABAJCQDuQCWEEAaB0QAcB9gJEHQgHDZgSBaQgKA3gLDxQgLDjADAZQABAMgoFcQgnGIALDYQAMDaA6BQQAQAWAaASQAXAQAEAJQAcA/AEAOQAZBGgCA3QgGCqj5gFQi5gEsjAGQq9AFgUgHQgpgPgKgCQghgFhHAFQhBAGgRhFQgGgcAJgZQAJgaAYgKQCxggAtgTQAagKC5g9QDMhEAdgKQAngOCphjQCkhgAVgFQAmgLCDh9QCLiFAAg0QAAg4hAnVQg+nHgijKQg7lzgnjeQhFmbgggsQgZgig9h2Qg5htgRgTQgUgSgOgRQgZgdgYgwQhDiMhDlIQgciLhKj6QhXkmgiiKQiNo/AQp9QABgxAAgWIgBgMQgoAAglgYQhMguAIhyQADghAylXQAqkggCivQgBhbgJh7QgKiHgFhAQgPjlAbiKQAdiYAIh1QACgqAAhlQgEhggBhEQgCh/APhBQANg6ALi7QAMjYAGgvQADgdABjsQAAi/AdhOQAjhbDVk1QDCkZBPhcQF4mmGFA7QB6ASBsBAQA2AgAeAdQAHAKArA4QAvBCAjBIg");
	this.shape_9.setTransform(111.2,543.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6DBC6").s().p("EgNnBU4QgpgPgKgCQghgFhHAFQhBAGgRhFQgGgcAJgZQAJgaAYgKQCxggAtgTQAagKC5g9IDphOQAngOCphjQCkhgAVgFQAmgLCDh9QCLiFAAg0QAAg4hAnVQg+nHgijKQg7lzgnjeQhFmbgggsQgZgig9h2Qg5htgRgTQgUgSgOgRQgZgdgYgwQhDiMhDlIQgciLhKj6QhXkmgiiKQiNo/AQp9QABgxAAgWIgBgMQgoAAglgYQhMguAIhyQADghAylXQAqkggCivQgBhbgJh7IgPjHQgPjlAbiKQAdiYAIh1QACgqAAhlQgEhggBhEQgCh/APhBQANg6ALi7QAMjYAGgvQADgdABjsQAAi/AdhOQAjhbDVk1QDCkZBPhcQF4mmGFA7QB6ASBsBAQA2AgAeAdIAyBCQAvBCAjBIQBwDiAAENQAAFegMCIQgPCug1CIQhkEAjIHNQg6CFhFCwQhLC+gVBGQgZBUAECJQAGCcAsB7QATAzA3BIQBVBvAOAWQB9C+gEEMQgDEZhQDNQgsByhXCWQgrBdgEBmQgCA4AHBRQAAAjALElQAHE1gVCVQgRB5gnDSQgbCpANBZQAPBmASCtQARCiAEBMQADA4A7BBIApAqQATASABAGQABAJCQDuQCWEEAaB0QAcB9gJEHQgHDZgSBaQgKA3gLDxQgLDjADAZQABAMgoFcQgnGIALDYQAMDaA6BQQAQAWAaASQAXAQAEAJQAcA/AEAOQAZBGgCA3QgGCqj5gFQi5gEsjAGQkkACiuAAQj0AAgLgEg");
	this.shape_10.setTransform(111.2,543.6);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,224.4,1089.8);


(lib.thorax = function() {
	this.initialize();

	// thorax
	this.instance = new lib.Path_4();
	this.instance.setTransform(26.5,10.9,1,1,0,0,0,25.4,10);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(100.9,136.7,1,1,0,0,0,8.7,20.8);
	this.instance_1.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F7E7E").ss(0.3,0,0,4).p("AoYn6QAMg7gIgHQgIgFgFgKQgGgLADgIQACgIBQhUQBOhSAFgDQAMgGAPAAQAEAAA5AAQA6AAAGABQADAABiAnQBgAlAGAAQAHABBKAcQAnAPAwASQANAFA8AoQA7AoAFAHQARAVAXAlQAnBAAeBEQAzBxAAATQAAAEAhCIQAhCmAGChQAIEDAhElQABAIhTgBQhUgBgCABQgDAAgMj8QgLj9ACgNQACgQgPicQgOiegHgRQgJhfgahZQg0ivh2guQhbgkhBgLQhqgKgkAJQgVAFgpAWQgmAUgPANQgTARgTAZQgYAgADAQQADAPAnAeQAiAaANAEQAJADAFALQAGANgGAJQgFAHgMAYQgLAVgKADQgNAEgOgFQgOgGgDgLQgFgYgQgiQgUgvgPABQACgBABgNQgBglgBgeQgCg6AIgLQAJgOAbgXQAcgYAQgIQAUgJAsgKQA0gMAmAAQBGgCA6AJQAOABAeALQAcAJAFADQAQAIAKgNQALgNgagOQgdgQgrgRQgsgPgXgDQgZgEhCAAQhOAAghAKQguANhVAvQgSAKglAhQghAfgHALg");
	this.shape.setTransform(55,79.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFB0C0").s().p("AHUMWIhWAAQgDAAgMj8QgLj9ACgNQACgQgPicQgOiegHgRQgJhfgahZQg0ivh2guQhbgkhBgLQhqgKgkAJQgVAFgpAWQgmAUgPANQgTARgTAZQgYAgADAQQADAPAnAeQAiAaANAEQAJADAFALQAGANgGAJIgRAfQgLAVgKADQgNAEgOgFQgOgGgDgLQgFgYgQgiQgUgvgPABQACgBABgNIgChDQgCg6AIgLQAJgOAbgXQAcgYAQgIQAUgJAsgKQA0gMAmAAQBGgCA6AJQAOABAeALQAcAJAFADQAQAIAKgNQALgNgagOQgdgQgrgRQgsgPgXgDQgZgEhCAAQhOAAghAKQguANhVAvQgSAKglAhQghAfgHALIgmgVQAMg7gIgHQgIgFgFgKQgGgLADgIQACgIBQhUQBOhSAFgDQAMgGAPAAIA9AAQA6AAAGABIBlAnQBgAlAGAAQAHABBKAcIBXAhQANAFA8AoQA7AoAFAHQARAVAXAlQAnBAAeBEQAzBxAAATQAAAEAhCIQAhCmAGChQAIEDAhElQABAHhJAAIgKAAg");
	this.shape_1.setTransform(55,79.1);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,112.1,160.2);


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