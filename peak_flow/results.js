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
(lib.results = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.butt1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(1);
		}
		
		
		
		this.butt2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(0);
		}
		
		
		
		/* Fade In Movie Clip
		Fades in the symbol instance by increasing its alpha property within an Tick event until it is fully visible.
		
		Instructions:
		1. To change the speed at which the symbol instance fades in, change the 0.01 value below (the number must be greater than 0 and less than or equal to 1). Higher values cause faster fade in.
		2. Because the animation uses an Tick event, it progresses only when the playhead moves to a new frame. The speed of the animation is also affected by the document frame rate.
		*/
		
		this.addEventListener('tick', fl_FadeSymbolIn.bind(this));
		this.withoutMed.alpha = 0;
		
		function fl_FadeSymbolIn()
		{
			this.withoutMed.alpha += 0.05;
			if(this.withoutMed.alpha >= 1)
			{
				this.removeEventListener('tick', fl_FadeSymbolIn.bind(this));
			}
		}
	}
	this.frame_1 = function() {
		this.addEventListener('tick', fl_FadeSymbolIn_2.bind(this));
		this.withMed.alpha = 0;
		
		function fl_FadeSymbolIn_2()
		{
			this.withMed.alpha += 0.05;
			if(this.withMed.alpha >= 1)
			{
				this.removeEventListener('tick', fl_FadeSymbolIn_2.bind(this));
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 6
	this.butt1 = new lib.butt1();
	this.butt1.setTransform(1.5,358.6);
	new cjs.ButtonHelper(this.butt1, 0, 1, 2, false, new lib.butt1(), 3);

	this.butt2 = new lib.butt2();
	this.butt2.setTransform(1.5,358.6);
	new cjs.ButtonHelper(this.butt2, 0, 1, 2, false, new lib.butt2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.butt1}]}).to({state:[{t:this.butt2}]},1).wait(1));

	// Layer 4
	this.withoutMed = new lib.without();
	this.withoutMed.setTransform(269,134.1,1,1,0,0,0,198,131.9);

	this.withMed = new lib._with();
	this.withMed.setTransform(269.3,134.1,1,1,0,0,0,198.3,131.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.withoutMed}]}).to({state:[{t:this.withMed}]},1).wait(1));

	// Layer 3
	this.text = new cjs.Text("Peak\nflow\nrate", "bold 15px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 17;
	this.text.lineWidth = 46;
	this.text.setTransform(58,23);

	this.text_1 = new cjs.Text("Time(days)", "bold 15px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 100;
	this.text_1.setTransform(415.8,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).to({state:[{t:this.text_1},{t:this.text}]},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A/iWJMA/FAAAA/iP0MA/FAAAA/iJfMA/FAAAA/iDKMA/FAAAA/ipeMA/FAAAA/ijJMA/FAAAA/ivzMA/FAAAA/i2IMA/FAAA");
	this.shape.setTransform(264.5,185);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("EghVgcJMA/FAAAA9vpyMA/FAAAA9vcKMA/FAAAA9vV1MA/FAAAA9vPgMA/FAAAA9vjdMA/FAAAA9vC2MA/FAAAA9vJLMA/FAAAA9v2cMA/FAAAA9vwHMA/FAAA");
	this.shape_1.setTransform(253,166.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("A/i2IMA/FAAAA/ivzMA/FAAAA/ijJMA/FAAAA/ipeMA/FAAAA/iDKMA/FAAAA/iJfMA/FAAAA/iP0MA/FAAAA/iWJMA/FAAA");
	this.shape_2.setTransform(264.5,185);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,1).p("EghVgcJMA/FAAAA9vwHMA/FAAAA9v2cMA/FAAAA9vJLMA/FAAAA9vC2MA/FAAAA9vjdMA/FAAAA9vPgMA/FAAAA9vV1MA/FAAAA9vcKMA/FAAAA9vpyMA/FAAA");
	this.shape_3.setTransform(253,166.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("AJf5VMAAAAyrAP05VMAAAAyrAWJ5VMAAAAyrAce5VMAAAAyrA8d5VMAAAAyrA2I5VMAAAAyrAvz5VMAAAAyrApe5VMAAAAyrAjJ5VMAAAAyrADK5VMAAAAyr");
	this.shape_4.setTransform(264.5,184.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(1,1,1).p("AMq5VMAAAAyrAZU5VMAAAAyrAS/5VMAAAAyrAfp5VMAAAAyrA/o5VMAAAAyrA5T5VMAAAAyrAy+5VMAAAAyrAsp5VMAAAAyrAGV5VMAAAAyrAAA5VMAAAAyrAmU5VMAAAAyr");
	this.shape_5.setTransform(264.5,184.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(1,1,1).p("Ace5VMAAAAyrAWJ5VMAAAAyrAP05VMAAAAyrAJf5VMAAAAyrADK5VMAAAAyrAjJ5VMAAAAyrApe5VMAAAAyrAvz5VMAAAAyrA2I5VMAAAAyrA8d5VMAAAAyr");
	this.shape_6.setTransform(264.5,184.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(1,1,1).p("Afp5VMAAAAyrAS/5VMAAAAyrAZU5VMAAAAyrAMq5VMAAAAyrAmU5VMAAAAyrAAA5VMAAAAyrAGV5VMAAAAyrAsp5VMAAAAyrAy+5VMAAAAyrA5T5VMAAAAyrA/o5VMAAAAyr");
	this.shape_7.setTransform(264.5,184.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(248.5,185.5,469.3,426.1);


// symbols:
(lib.without = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Without medication", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 194;
	this.text.setTransform(163,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993300").ss(2,1,1).p("A+6AsIDRjGIC+C8IDSjaIDcEMIDIiyIDIEXIDch5ICqAyIDSi8IDaDRICgkrID6E1IC+jlIDSDlIC0i9IDIC9IC+kNIDwENIC+kNIBkEX");
	this.shape.setTransform(198,244.4);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,398,263.9);


(lib._with = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("With medication", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 194;
	this.text.setTransform(163,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(2,1,1).p("A++GUIDRjIIC+C+IDSjcIDcEOIDIi0IDIEYIDch4ICqAyIDTkTIDdBYIDDjGIDJBuIDMkiIDJC0IDGkfIDJB+IDCkoIDWA8IC5jrIB5As");
	this.shape.setTransform(198.4,208.4);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,398.8,263.9);


(lib.butt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.text = new cjs.Text("View results\nwithout medication", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 146;
	this.text.setTransform(72.4,2.6);

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
	this.shape_7.graphics.f().s("#999999").ss(2,1,1).p("AHljGIBvAAIAmAAIAAGNIgmAAIhvAAIzMAAIAAmNITMAAIAAGNAJUjGIAAGNAJ6jGIBuAAIAAGNIhuAA");
	this.shape_7.setTransform(74.4,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,150.8,54);


(lib.butt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.text = new cjs.Text("View results\nwith medication", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 146;
	this.text.setTransform(72.4,2.6);

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
	this.shape_7.graphics.f().s("#999999").ss(2,1,1).p("AHljGIBvAAIAmAAIBuAAIAAGNIhuAAIgmAAIhvAAIzMAAIAAmNITMAAIAAGNAJUjGIAAGNAJ6jGIAAGN");
	this.shape_7.setTransform(74.4,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,150.8,54);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;