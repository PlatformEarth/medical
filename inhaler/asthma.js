(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 496,
	height: 425,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.asthma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.addEventListener('tick', fl_FadeSymbolIn.bind(this));
		this.normalOut.alpha = 0;
		
		function fl_FadeSymbolIn()
		{
			this.normalOut.alpha += 0.05;
			if(this.normalOut.alpha >= 1)
			{
				this.removeEventListener('tick', fl_FadeSymbolIn.bind(this));
			}
		}
		
		
		this.addEventListener('tick', fl_FadeSymbolIn_5.bind(this));
		this.normalOut.alpha = 0;
		
		function fl_FadeSymbolIn_5()
		{
			this.normalOut.alpha += 0.05;
			if(this.normalOut.alpha >= 1)
			{
				this.removeEventListener('tick', fl_FadeSymbolIn_5.bind(this));
			}
		}
		
		
		this.addEventListener('tick', fl_FadeSymbolIn_6.bind(this));
		this.normalOut.alpha = 0;
		
		function fl_FadeSymbolIn_6()
		{
			this.normalOut.alpha += 0.05;
			if(this.normalOut.alpha >= 1)
			{
				this.removeEventListener('tick', fl_FadeSymbolIn_6.bind(this));
			}
		}
		
		
		this.normalOutside.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(0);
		}
		
		
		
		this.moderateOutside.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(1);
		}
		
		
		
		this.severeOutside.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(2);
		}
		
		
		
		this.insideOutside1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		this.stop();
		
		this.addEventListener('tick', fl_FadeSymbolIn.bind(this));
		this.normalOut.alpha = 0;
		
		function fl_FadeSymbolIn()
		{
			this.normalOut.alpha += 0.05;
			if(this.normalOut.alpha >= 1)
			{
				this.removeEventListener('tick', fl_FadeSymbolIn.bind(this));
			}
		}
		
		
		this.addEventListener('tick', fl_FadeSymbolIn_5.bind(this));
		this.normalOut.alpha = 0;
		
		function fl_FadeSymbolIn_5()
		{
			this.normalOut.alpha += 0.05;
			if(this.normalOut.alpha >= 1)
			{
				this.removeEventListener('tick', fl_FadeSymbolIn_5.bind(this));
			}
		}
		
		
		this.addEventListener('tick', fl_FadeSymbolIn_6.bind(this));
		this.normalOut.alpha = 0;
		
		function fl_FadeSymbolIn_6()
		{
			this.normalOut.alpha += 0.05;
			if(this.normalOut.alpha >= 1)
			{
				this.removeEventListener('tick', fl_FadeSymbolIn_6.bind(this));
			}
		}
		
		
		this.normalOutside.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(3);
		}
		
		
		
		this.moderateOutside.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(4);
		}
		
		
		
		this.severeOutside.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(5);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.insideOutside2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(17));

	// Layer 3
	this.insideOutside1 = new lib.butt4();
	this.insideOutside1.setTransform(80.9,4.7);
	new cjs.ButtonHelper(this.insideOutside1, 0, 1, 2, false, new lib.butt4(), 3);

	this.insideOutside2 = new lib.butt5();
	this.insideOutside2.setTransform(80.9,4.7);
	new cjs.ButtonHelper(this.insideOutside2, 0, 1, 2, false, new lib.butt5(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.insideOutside1}]}).to({state:[{t:this.insideOutside2}]},3).wait(17));

	// Layer 2
	this.severeOutside = new lib.butt3();
	this.severeOutside.setTransform(365.5,354.5);
	new cjs.ButtonHelper(this.severeOutside, 0, 1, 2, false, new lib.butt3(), 3);

	this.moderateOutside = new lib.butt2();
	this.moderateOutside.setTransform(187,354.5);
	new cjs.ButtonHelper(this.moderateOutside, 0, 1, 2, false, new lib.butt2(), 3);

	this.normalOutside = new lib.butt1();
	this.normalOutside.setTransform(8.8,354.5);
	new cjs.ButtonHelper(this.normalOutside, 0, 1, 2, false, new lib.butt1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.normalOutside},{t:this.moderateOutside},{t:this.severeOutside}]}).wait(20));

	// detail circle
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#595959").ss(1,0,0,4).p("AAkhwQgZAqgcAtQg7BYgVAQIAoAdQB6iXAGgGQAEgEAKgGQAJgFAEgCIgbgcQgCgCghgQg");
	this.shape.setTransform(345.1,192);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6DBC6").s().p("AhhBSQAVgRA7hYQAcgtAZgqQAhAQACACIAbAcIgMAHQgLAGgEAEQgFAGh6CYg");
	this.shape_1.setTransform(345.1,191.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(1,0,0,4).p("AE1AAIppAA");
	this.shape_2.setTransform(301.4,192.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#241F20").ss(1,0,0,4).p("AB6AAQAAgxgkgkQgkgkgyAAQgxAAgkAkQgkAkAAAxQAAAyAkAkQAkAkAxAAQAyAAAkgkQAkgkAAgyg");
	this.shape_3.setTransform(344.7,192.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,0,0,4).p("AE1AAIppAA");
	this.shape_4.setTransform(301.4,192.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3,0,0,4).p("AB6AAQAAgxgkgkQgkgkgyAAQgxAAgkAkQgkAkAAAxQAAAyAkAkQAkAkAxAAQAyAAAkgkQAkgkAAgyg");
	this.shape_5.setTransform(344.7,192.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{y:192.2}},{t:this.shape_4,p:{y:192.2}},{t:this.shape_3,p:{y:192.2}},{t:this.shape_2,p:{y:192.2}},{t:this.shape_1,p:{y:191.8}},{t:this.shape,p:{y:192}}]}).to({state:[{t:this.shape_5,p:{y:172.2}},{t:this.shape_4,p:{y:172.2}},{t:this.shape_3,p:{y:172.2}},{t:this.shape_2,p:{y:172.2}},{t:this.shape_1,p:{y:171.8}},{t:this.shape,p:{y:172}}]},19).wait(1));

	// lungs
	this.normalOut = new lib.lungs1();
	this.normalOut.setTransform(358.8,182.7,1,1,0,0,0,72.6,100.2);

	this.normalOut_1 = new lib.lungs5();
	this.normalOut_1.setTransform(358.8,182.7,1,1,0,0,0,72.6,100.2);

	this.normalOut_2 = new lib.lungs6();
	this.normalOut_2.setTransform(358.8,182.7,1,1,0,0,0,72.6,100.2);

	this.normalIn = new lib.lungs2();
	this.normalIn.setTransform(358.8,183.7,1,1,0,0,0,72.6,100.2);

	this.moderateIn = new lib.lungs3();
	this.moderateIn.setTransform(358.8,182.7,1,1,0,0,0,72.6,100.2);

	this.severeIn = new lib.lungs4();
	this.severeIn.setTransform(358.8,182.7,1,1,0,0,0,72.6,100.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.normalOut}]}).to({state:[{t:this.normalOut_1}]},1).to({state:[{t:this.normalOut_2}]},1).to({state:[{t:this.normalIn}]},1).to({state:[{t:this.moderateIn}]},1).to({state:[{t:this.severeIn}]},1).to({state:[]},12).wait(3));

	// figure
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.886],0,-29.5,0,29.6).s().p("A1WEnIAApNMAqtAAAIAAJNg");
	this.shape_6.setTransform(361.2,308.9);

	this.instance = new lib.Path_8();
	this.instance.setTransform(363,304.4,1,1,0,0,0,66.3,29.4);
	this.instance.alpha = 0.051;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.setTransform(316.5,158.2,1,1,0,0,0,26.8,15.2);
	this.instance_1.alpha = 0.051;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.setTransform(261.4,207,1,1,0,0,0,23.4,33.7);
	this.instance_2.alpha = 0.051;

	this.instance_3 = new lib.Path_0_1();
	this.instance_3.setTransform(263.8,284.9,1,1,0,0,0,12.8,49.6);
	this.instance_3.alpha = 0.051;

	this.instance_4 = new lib.Path_1_1();
	this.instance_4.setTransform(457.3,278.6,1,1,0,0,0,14.2,55.6);
	this.instance_4.alpha = 0.051;

	this.instance_5 = new lib.Path_2_1();
	this.instance_5.setTransform(359.6,88.7,1,1,0,0,0,10.6,15.1);
	this.instance_5.alpha = 0.051;

	this.instance_6 = new lib.Path_3_1();
	this.instance_6.setTransform(431.5,238.3,1,1,0,0,0,12.2,25.9);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.Path_4_1();
	this.instance_7.setTransform(290.5,242.3,1,1,0,0,0,15.1,23.9);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.Path_5_1();
	this.instance_8.setTransform(464.1,201.2,1,1,0,0,0,17.2,32);
	this.instance_8.alpha = 0.031;

	this.instance_9 = new lib.Path_6_1();
	this.instance_9.setTransform(347.7,69.6,1,1,0,0,0,46.2,42.6);
	this.instance_9.alpha = 0.051;

	this.instance_10 = new lib.Path_7_1();
	this.instance_10.setTransform(399.8,134.8,1,1,0,0,0,33.3,37.9);
	this.instance_10.alpha = 0.051;

	this.instance_11 = new lib.Path_9();
	this.instance_11.setTransform(357.8,237.8,1,1,0,0,0,12,27.4);
	this.instance_11.alpha = 0.051;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#595959").ss(0.5,0,0,4).p("AvTYQQAUiJAHgbQAfiNAbh+QA3j5AEgIQAFgKAsCOQAqCKANA+QAhCUAJAsQAdCKAAAaIVZAAQBHoBADg6QACgeAYhRQAWhLgBgJIBBDkQBEDuAIAxQAJAwABBgQABAygBA5IFgAAQgCgEgCggQgEhTAGjpQAGjpg6jwQgShLgWhCIgTg0QAMkZhCilQgWg0gegoQgdgjgGgJQgQgYhEgjQg+gggMAAQgGAAgegWIgcgXQg5gMgOAAQgQAAjjhSQjthWgYgYQgXgXgMh3QgIhPAAhAQAAgHAph8QAtiIAOh0QAQiFhEh9QgxhahYhOQg+g4irgKQiOgJhWAUQgrAKhfAxQhiAygdAdQgZAZgHA3QgDAcABAXQgGAIgMBvQgHA4gFA1IAKANQAJAOgCAKQgDARhsCAIgEAIQgDAMAEAOQAGAUAfASQARAKAXAMQAJAHgBAdQgBAXgEAMQgCAGAcALQAPAGAOAEQgHAHgHAJQgOASAAAGQAAAEASATQAQARgEAHQgVAvADAbQADAWAWAZQAPAQBNgBQBYAAAWAIQAiAOgBAlQgCAegVAeQgPAVjPBYQjQBWgHADQgUALgUAAQgJAAgwAcIgvAdQgaACgvAhQgqAbgeAhQgYAbgxB/QgoBqgPA4QgIAgAIBnQAEAzAGAuQgqA9gmHLQgTDmgLDZg");
	this.shape_7.setTransform(360.8,180.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6DBC6").s().p("APXYQQABg5gBgyQgBhggJgwQgIgxhEjuIhBjkQABAJgWBLQgYBRgCAeQgDA6hHIBI1ZAAQAAgagdiKIgqjAQgNg+gqiKQgsiOgFAKQgEAIg3D5Ig6ELQgHAbgUCJIlkAAQALjZATjmQAmnLAqg9QgGgugEgzQgIhnAIggQAPg4AohqQAxh/AYgbQAeghAqgbQAvghAagCIAvgdQAwgcAJAAQAUAAAUgLIDXhZQDPhYAPgVQAVgeACgeQABglgigOQgWgIhYAAQhNABgPgQQgWgZgDgWQgDgbAVgvQAEgHgQgRQgSgTAAgEQAAgGAOgSIAOgQIgdgKQgcgLACgGQAEgMABgXQABgdgJgHIgogWQgfgSgGgUQgEgOADgMIAEgIQBsiAADgRQACgKgJgOIgKgNIAMhtQAMhvAGgIQgBgXADgcQAHg3AZgZQAdgdBigyQBfgxArgKQBWgUCOAJQCrAKA+A4QBYBOAxBaQBEB9gQCFQgOB0gtCIQgpB8AAAHQAABAAIBPQAMB3AXAXQAYAYDtBWQDjBSAQAAQAOAAA5AMIAcAXQAeAWAGAAQAMAAA+AgQBEAjAQAYQAGAJAdAjQAeAoAWA0QBCClgMEZIATA0QAWBCASBLQA6DwgGDpQgGDpAEBTQABAgACAEg");
	this.shape_8.setTransform(360.6,180.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{y:180.6}},{t:this.shape_7,p:{y:180.6}},{t:this.instance_11,p:{y:237.8}},{t:this.instance_10,p:{y:134.8}},{t:this.instance_9,p:{y:69.6}},{t:this.instance_8,p:{y:201.2}},{t:this.instance_7,p:{y:242.3}},{t:this.instance_6,p:{y:238.3}},{t:this.instance_5,p:{y:88.7}},{t:this.instance_4,p:{y:278.6}},{t:this.instance_3,p:{y:284.9}},{t:this.instance_2,p:{y:207}},{t:this.instance_1,p:{y:158.2}},{t:this.instance,p:{y:304.4}},{t:this.shape_6,p:{y:308.9}}]}).to({state:[{t:this.shape_8,p:{y:160.6}},{t:this.shape_7,p:{y:160.6}},{t:this.instance_11,p:{y:217.8}},{t:this.instance_10,p:{y:114.8}},{t:this.instance_9,p:{y:49.6}},{t:this.instance_8,p:{y:181.2}},{t:this.instance_7,p:{y:222.3}},{t:this.instance_6,p:{y:218.3}},{t:this.instance_5,p:{y:68.7}},{t:this.instance_4,p:{y:258.6}},{t:this.instance_3,p:{y:264.9}},{t:this.instance_2,p:{y:187}},{t:this.instance_1,p:{y:138.2}},{t:this.instance,p:{y:284.4}},{t:this.shape_6,p:{y:288.9}}]},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250.1,216.2,496,395.8);


// symbols:
(lib.Path_7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC4CUQABgbgyhKQhAhcgFgLQgRgihFhZQg+hPgRgPQhmhfgqgbQApARAwAXQBgAvAhAfQAjAjBZB9QBVB1ASAmIAdA+QAOAegCAJQgBAPgNAkQgPAqgMALQgLAJghBIIgiBIQA7jKABgug");
	this.shape.setTransform(24.4,39.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48.8,79.3);


(lib.Path_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("ADWBHQgcACgigBQgdAHgdADQg4AIgggKQkXh4AJgUQAMgdALgLQAFgHADAAQgNBBBzA0QA8AdBVAZQAkAOBvgRQA4gJAwgKQgJAggWAiQgIgigMgDg");
	this.shape.setTransform(26.6,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.2,21.6);


(lib.Path_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFESQhVgygLgKIgegcQgRgRgCgIQgBgKAKgeQAKgfAPghQASgmA/haQBFhkAigjQAgggBdguQAugXAogRQgQAKgoAxIgvA4QgMALhCBjQhEBmgRAkQgQAigEAuQgBAQABA8QAAAdAsA2QAVAbATAUQgEgDhOgwg");
	this.shape.setTransform(21.5,32.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43.1,65.2);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("ACdCFQAPgKgJgLQgKgMhkhHQhSg6gagSQgcgRghgSQgygbgQAAQgQAAgOAPQgGAHgEAIIAJg/QgCAPAcAIIAqAKQBRAoAdAXQAWARBcA+QBhBCAKAEIAcAJQAPAEgKABIgqAJIgoARIAUgKg");
	this.shape.setTransform(22.3,14.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.7,28.7);


(lib.Path_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBzQgPgIhTgRQACg/AIgcQAdhxANgQQAyAhAYAMQBSAtAMAEIAfAQQASALAMAEIhvglQgMgFgMACQgJACgRAJQgQAJgJAVQgIARACASQACAMACAfQADAbALAEIAhAMQAXAHAHAHQg8gJgMgHg");
	this.shape.setTransform(14.2,13.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,26.4);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjABQABhUAOhWQATgDARAKQAXAQAJACQAbAJAwAiQgagOghABQgcABgNAGQgHAEgFAYIgEAhQgDANAIA6QAJA/AJAEQANAFB5gBIiDBLIgCAAQhDAAABiqg");
	this.shape.setTransform(10,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,20.1,34.3);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AjEDrIBigFIAVgJIC+lDIAohWIAIgyIgBgpIAlBLIgagIIgeBPIh+DOIhMCbIAiA0g");
	this.shape.setTransform(19.7,28.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,56.1);


(lib.Path_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#241F20").ss(0.5).p("ADzEQIAEAFIAUAfQAbAlAIAKQAMANAcAhQAYAaAJAHQA1AlAHgFQAHgEALgXQANgZABgPQAEgNABgwQABgagCgSQgBgNABgDQACgGAHgCQAGgCAFAEIACAgQADAigBAHIASg4IAHgCQAHABAEAKIgaBiIAPgHQAQgHAGgBQAIgCAHAGQAGAHgJAEQgIADgTAQQgSAOgIAKQgIALgNATQgOAVgBAFIBJAjQACABANAFQAHACACAGQAEAHgRADQgQADgKgIIAIAKQAJAMACALQADALgJACQgJACgIgHQgBgCgPgaQgMgWgIgCQgQgGgKgDQgTgGgIABQgJABgEAEQgDADgDAIQgDAGAEAVQAEAUAGALQAGALAoAlQAEAEAPALQAMAKADAFQADAGgGAHQgGAGgFgBQgDgBgRgPQgRgQgFgCIAlA0QAHAJgGALQgGAKgKgIQgwhGgKgLIgMAkQgCAIgIgDQgIgDgCgIQAAgCABgvQABgrgEgEQgFgEgEABQgFABgFAAQgFAAgQAJQgIAEgHAEQgFgFgFgFQgKgLAFgCQAMgFANgIQATgMABgFQAKgKAEgPQAJgdgdgVQgdgUhGhNQhDhNgIgIQgPgQgggDQgkgDgYAXQgIAJg5BNQg+BNgaATQgaAVAIAdQAEAPAJAKQAAAGASALQAMAJAKAFQAHADgVAUQgYgSgIAAQgGgBgDAAQgDgBgFAFQgEAEACAqQABAvgBADQgBAIgHACQgIADgBgIQgBgGgFgPIgFgOQgIAKgrBGQgJAIgFgKQgGgKAGgKIAhg0QgEACgPAQQgPAPgDABQgEABgFgGQgGgHADgFQACgFALgKQANgLAEgEQAMgNAIgKQAQgRAFgJQAFgKADgVQAEgVgDgGQgDgIgCgCQgEgFgHgBQgHgBgRAGQgSAHgGACQgHACgKAWQgNAZgCADQgGAIgJgCQgIgDADgLQACgKAIgMIAHgLQgJAIgPgDQgOgDADgHQACgGAGgCQAMgFABgBIBCgjQgCgFgMgUQgLgUgHgKQgHgKgQgPQgRgQgIgDQgIgDAGgHQAGgHAHACQAIACAZANIgYhhQAEgLAHgBQADAAADACIAPA4QAAgHACghIACghQAEgEAGACQAGACACAGQABADgBANQgCASABAaQABAwADANQACAPALAZQAKAWAGAFQAEAEARgLQAIgGAZgTQAJgIAUgZQAUgYAPgWQBLhvAag6IAKgjQgOkFAAgRQAAgJgPheQgRhogDgYQgFgjgjg8Qgjg4gRgIQhdgthEgFQgbgBg9AKQgcAEgjAhQgkAhgBAYQgBATAeAQQAQAJAZAKQAIAFgLAXQgIARgJAMQgFAGgNgDQgMgDgBgEQgPgpgGgGQgBgCgGgTQgFgPgGADQgIAFAKhhQACgQAXgTQAggaA1gIQALgEAsABQAjAAAaACQAZABAwAVQAQAGABgMQABgNgQgIQgZgNgDgBQgPgHgVgFQgXgGgvgBQgqgBgaADQgYADgoASQgOAGgrAVQgWALgbAmQAAADgFgBQgJgBgVgSIAFglQgFgFgEgHQgIgNAKgLQAcggATgXQAlgsANgEQARgGAngBQAogCAZAFQAEABArATQA3AYBxAiQAnAMAsAgQATANAaAZQAQAWAYAxQAMAbAWAxQAQAgAVBQQAWBSAEAuQAEAgAICiQAKCaAKAVQAPAhA2A5g");
	this.shape.setTransform(56.5,74.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E38EBC").s().p("AjULdQgGgKAGgKIAhg0QgEACgPAQQgPAPgDABQgEABgFgGQgGgHADgFQACgFALgKIARgPIAUgXQAQgRAFgJQAFgKADgVQAEgVgDgGIgFgKQgEgFgHgBQgHgBgRAGIgYAJQgHACgKAWIgPAcQgGAIgJgCQgIgDADgLQACgKAIgMIAHgLQgJAIgPgDQgOgDADgHQACgGAGgCIANgGIBCgjQgCgFgMgUIgSgeQgHgKgQgPQgRgQgIgDQgIgDAGgHQAGgHAHACQAIACAZANIgYhhQAEgLAHgBQADAAADACIAPA4QAAgHACghIACghQAEgEAGACQAGACACAGQABADgBANQgCASABAaQABAwADANQACAPALAZQAKAWAGAFQAEAEARgLIAhgZQAJgIAUgZQAUgYAPgWQBLhvAag6IAKgjQgOkFAAgRQAAgJgPheIgUiAQgFgjgjg8Qgjg4gRgIQhdgthEgFQgbgBg9AKQgcAEgjAhQgkAhgBAYQgBATAeAQQAQAJAZAKQAIAFgLAXQgIARgJAMQgFAGgNgDQgMgDgBgEQgPgpgGgGIgHgVQgFgPgGADQgIAFAKhhQACgQAXgTQAggaA1gIQALgEAsABIA9ACQAZABAwAVQAQAGABgMQABgNgQgIIgcgOQgPgHgVgFQgXgGgvgBQgqgBgaADQgYADgoASIg5AbQgWALgbAmQAAABgBABQAAAAgBAAQAAABgBAAQgBAAgBgBQgJgBgVgSIAFglQgFgFgEgHQgIgNAKgLIAvg3QAlgsANgEQARgGAngBQAogCAZAFQAEABArATQA3AYBxAiQAnAMAsAgQATANAaAZQAQAWAYAxIAiBMQAQAgAVBQQAWBSAEAuQAEAgAICiQAKCaAKAVQAQAjA6A7IgFgEIAYAkQAbAlAIAKIAoAuQAYAaAJAHQA1AlAHgFQAHgEALgXQANgZABgPQAEgNABgwQABgagCgSQgBgNABgDQACgGAHgCQAGgCAFAEIACAgQADAigBAHIASg4IAHgCQAHABAEAKIgaBiIAPgHQAQgHAGgBQAIgCAHAGQAGAHgJAEQgIADgTAQQgSAOgIAKIgVAeQgOAVgBAFIBJAjIAPAGQAHACACAGQAEAHgRADQgQADgKgIIAIAKQAJAMACALQADALgJACQgJACgIgHIgQgcQgMgWgIgCIgagJQgTgGgIABQgJABgEAEQgDADgDAIQgDAGAEAVQAEAUAGALQAGALAoAlIATAPQAMAKADAFQADAGgGAHQgGAGgFgBQgDgBgRgPQgRgQgFgCIAlA0QAHAJgGALQgGAKgKgIQgwhGgKgLIgMAkQgCAIgIgDQgIgDgCgIIABgxQABgrgEgEQgFgEgEABIgKABQgFAAgQAJIgPAIIgKgKQgKgLAFgCQAMgFANgIQATgMABgFQAKgKAEgPQAJgdgdgVQgdgUhGhNIhLhVQgPgQgggDQgkgDgYAXIhBBWQg+BNgaATQgaAVAIAdQAEAPAJAKQAAAGASALQAMAJAKAFQAHADgVAUQgYgSgIAAIgJgBQgDgBgFAFQgEAEACAqIAAAyQgBAIgHACQgIADgBgIQgBgGgFgPIgFgOQgIAKgrBGQgEAEgDAAQgEAAgDgGg");
	this.shape_1.setTransform(56.5,74.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,114.7,149.9);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyEYQglgHhOg3QgHgFgvgWIAjAJQAlAKAIADQANAFAoAIQAtAJADgEQAEgEAKgZQAJgZACgJQABgGgIhkIgIhsIABhLQgBhAgFgBQgFgCgNALQgLALgCAFQgBAEgjAqIgkAwIAfg8QAeg9AGgHQAGgGAPgoQAOgmACAAQAEAAAGAFQAHAGABAFQAWBuACAwQALDZgBAKIgBA4QgBAygDAGQgGARgNANQgQAQgUAAIgKAAg");
	this.shape.setTransform(12.1,28.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.1,56.2);


(lib.Path_8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AqWEhQBXh6BriGQDWkIBjg2IAFgBIAaApQAjAoAiAAQAmAAAagYQAWgSAWgqQBYA+B3BnQDwDNCjDQg");
	this.shape.setTransform(66.4,29.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.5,132.7,58);


(lib.Path_7_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("AjkFvIgTgOIhOn/QgOhRAQhNQAIgnALgXQAVBeA3AyQAOANAXAPQASALACAFQAFAKAABmQAIBtArBAQARAaC/BHIDRBMIAeAOQAFAIgoAUQglAUjkAYQhxANh1ALIgEABQgJAAgRgMg");
	this.shape_1.setTransform(33.3,37.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.7,75.8);


(lib.Path_6_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D2625").s().p("AEcFzQhIhHAQhXQANg5ADgSQAFgcgOgeQgQghgfgSQgcgRghAAQgdAAgiAmQgeAigCAVQgCAPgggXQgggWgFgMQgOgegpgmIgmgiIhLg2Ij9hFQgCgRABgXQACgsATgYQATgYBXgxQBlg5BHgNQBZgRB+AIQCMAKA4AiQA4AjA7BSQA1BJANAwQAOAyALBLQAMBTgIAcIg2CvQguCTgBAHQgmgSgkgkg");
	this.shape_1.setTransform(46.3,42.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92.6,85.2);


(lib.Path_5_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D2625").s().p("AgfCrQgcglgjg2QgdgugEgEQgNgNgSikQgRijAFgGQAGgHA7ANQBQAxAJAAQAGAAAsApQAqAlALAMQAGAHAmCQIAoCYQAHAPgaCtQhXgThgiCg");
	this.shape_1.setTransform(17.2,32);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.6,64);


(lib.Path_4_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("Ah3DtQgJgDAFgeQANhDACgTQAUieg8i/IgCgHIAGAUQAVBFAXA9QAkBcAbAhQApAzA/A+QBFBCAPAAQi0AXg+AAQgVAAgHgCg");
	this.shape_1.setTransform(15.1,24);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.3,48);


(lib.Path_3_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("Ah4DFQAMAAA6hDQAzg9Akg0QAjgyAxi6QgpCtAPCRIANBWQAEAdgHADQgHADgSAAQg0AAiUgXg");
	this.shape_1.setTransform(12.2,25.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,3.9,24.3,44.1);


(lib.Path_2_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AjiDyQgKhhAFgKQADgFA5idQA4iZAIgHQAOgMA4gnQA8gqAHAAQAMAABrgxQBNgLAHAHQAHAHgeCuQgfCvgSAOQg+BOhEBFQiDCIhyARQgHgvgFgwg");
	this.shape.setTransform(23.4,33.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,67.5);


(lib.Path_2_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("AhWCRQgYgJAGgQQAIgYALgrQANgzAAgLIgEgmQgEgbAHgMQANgQARgQQAigfAPAAQAigBAUAGQAhALAJAjQALArgTA5QgVA/glAUQgcAQgcAaQgYAVgGABIgJABQgMAAgPgFg");
	this.shape_1.setTransform(10.6,15.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,21.3,30.1);


(lib.Path_1_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AkCBrQB1ANB6ALQDxAVAagJQAZgKhPiHQgohFgthCQgDASgKAUQgTApgdANQguAUkECEg");
	this.shape.setTransform(27.7,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("AgRB/Qh6gLh0gNQEDiDAugVQAdgNATgoQAKgVAEgSQAtBDAnBEQBQCIgaAJQgIADgcAAQhAAAingPg");
	this.shape_1.setTransform(27.4,15.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,54.1,30.6);


(lib.Path_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D2625").s().p("AAYEyQgDgfgyjDQg4jSghhQQgehLAKiOQAFhIALg4QBgC6BdHeQAvDwAcDLIhrAEQADgRgOjpg");
	this.shape_1.setTransform(14.2,55.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.5,111.3);


(lib.Path_0_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D2625").s().p("Ah+HsQAZi1AqjWQBTmpBXinQAKA6AEBHQAJCOgcBDQgcBGgnCvQgiCZgDAjQgBANgQBoQgRBiABAFg");
	this.shape_2.setTransform(12.8,49.6);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.6,99.3);


(lib.Path_9 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("AAAERQhbgDgQgFQgMgDABgDIAZgbQASgTAij0QAQh7ANh3QAFBoAvDOQAvDIAOAAQANAAAEAOQAEANgNAGQgIAEgrAAIg6gBg");
	this.shape_1.setTransform(12,27.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,23.9,54.9);


(lib.Path_18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#241F20").ss(0.3).p("AgbikQAfApAmAtQBKBYAUAUIiMh5IglAFQgLAHgMAKQgYAVgFASQgGASAGAVQAEASAEAFQACABBHAzQBGA0AMAKQjNhygVgTQgQgNAFgiQAGglAagdQAbggAigVQAkgWALALg");
	this.shape.setTransform(17.1,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiMAYQgQgOAGghQAGglAZgdQAcggAigVQAjgWALALIBFBWQBLBYATAUIiNh5IgkAFQgLAHgMAKQgXAVgGASQgFASAFAVQAEASAFAFIBGA0QBJA0ALAKQjMhygWgTg");
	this.shape_1.setTransform(15.4,15.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,32.6,33.6);


(lib.Path_17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#241F20").ss(0.3).p("ADkgsQg8gXhDgbQiEg2ghgXQghgYgpAiQgEADglApQgLAMgUAnQgYAtAJAFQAGAECbBNQCfBRAUAMQilh5gjgoQgYgbAQgwQAQgsASABQAOABB5AhQB2AgAiALg");
	this.shape.setTransform(23,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhABNIihhRQgJgFAYgtQAUgnALgMIApgsQApgiAhAYQAhAXCEA2QBDAbA8AXQgigLh2ggQh5ghgOgBQgSgBgQAsQgQAwAYAZQAjAqClB5QgUgMifhRg");
	this.shape_1.setTransform(23,17.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.8,47.8,36.1);


(lib.Path_16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#241F20").ss(0.3).p("ABJDQQgZgWgagZQhMhJgHgVQgMghgGgiQgGgqAKgSQAXgoAOgRQAcgkATAEQAdAHA8AbQBAAdAWAUAC6hAIgCgCIiiihQgJgIgqAWQg1AagoAyQgfAngTAwQgRAtAIAFQAHADBbBLQBWBKAPANQAGAFAnAeQAGAEAEAEQAXASACAE");
	this.shape.setTransform(18.6,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA/DTIgsgjIhmhXQhahLgHgFQgJgFARgrQATgwAggnQAogyA1gaQApgWAJAIICiChQgVgVhBgcQg7gbgegHQgTgEgcAkQgOARgWAoQgLASAHAqQAFAiAMAhQAIAVBMBJIAzAvIgLgIg");
	this.shape_1.setTransform(18.5,22);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,39.2,48.1);


(lib.Path_15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#241F20").ss(0.3).p("ADEgyQgngogngqQhYhcgGgEQgMgHgvARQg6AVgfArQgoA4gVArQgZAxAKAKQAPARC5CxQgZgjgZgpQgyhSgCgcQgEhaAsgfQAegVAdgHQAfgIAXAOQAQAKA6AaQAvAWAYAXgADNgpQgEgEgFgF");
	this.shape.setTransform(20.5,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjEAVQgKgMAZgwQAVgrAog3QAfgrA6gVQAvgSAMAIQAGAEBYBcIBOBSQgYgXgvgXQg6gZgQgLQgXgOggAIQgcAHgeAVQgsAfAEBbQACAcAyBRQAZApAXAjQi3iwgPgRg");
	this.shape_1.setTransform(20.1,21.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,42.9,45.1);


(lib.Path_14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#241F20").ss(0.3).p("AEDgGQjQjAgoglQgagbhDAZQg/AYgVAgQgnA4gWAlQgoBEAPAUQALASBJBaQBGBZAJANQgdg3gag+Qgyh6ATghQAagwANgRQAVgbAngFQAngFBzA6QBFAiBwBCg");
	this.shape.setTransform(25.9,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipCAQhJhagLgSQgPgUAohEQAWglAng4QAVggA/gYQBDgZAaAbID4DjQhwhAhFgiQhzg6gnAFQgnAFgVAbQgNARgaAwQgTAhAyB6QAaA+AdA3QgJgNhGhZg");
	this.shape_1.setTransform(26,23.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.9,53.8,48.1);


(lib.Path_13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#241F20").ss(0.3).p("AAQjBQDKCwAFAJQAGAIgPAiQgTAsguAzQguAxg1AMQghAHgSgHQgIgDhag2Qhag2gNgJQApANAuAMQBbAXAYgKQAdgLAVgbQAVgaARgtQAPgpghhFQgag4gcgag");
	this.shape.setTransform(21.1,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("AgMC+QgIgDhag2Qhag2gNgJQApANAuAMQBbAXAZgKQAcgLAVgbQAVgaARgtQAPgpghhFQgag4gcgaQDKCwAFAJQAGAIgPAiQgTAsguAzQguAxg1AMQgQAEgNAAQgMAAgKgEg");
	this.shape_1.setTransform(22.2,19.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.9,44.9,40.8);


(lib.Path_12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#241F20").ss(0.3).p("AgSjEQArAlAxAlQBiBMATAJQAVAKgTAqQgRAngkAqQgiAngyAiQg1AkgNgKQgMgIhEhFQhKhMgPgQQAeARAjAQQBGAgAagBQAaAAAbgiQAXgcANgkQAMgkgWgwQgXg2g4gyg");
	this.shape.setTransform(18.7,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("AgVDDQgMgIhEhFIhZhcQAeARAjAQQBGAgAagBQAcAAAZgiQAXgcANgkQAMgkgWgwQgXg2g4gyQArAlAxAlQBiBMATAJQAVAKgTAqQgRAngkAqQgiAngyAiQgqAcgQAAQgFAAgDgCg");
	this.shape_1.setTransform(19.8,19.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.9,40.4,41.5);


(lib.Path_11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#241F20").ss(0.3).p("AApjIQB7B1AuAmQAZAVgmA4QgUAfgmAuQgTAegvAiQg1AmgUgPQgRgMhOhVQhRhZgHgGQAmAcArAaQBUAzATgLQAigSA0gzQA9g4gKgVQgOgfgfgwQgegugWgbg");
	this.shape.setTransform(18.6,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("AgRDEQgSgMhOhVQhRhZgHgGQAmAcArAaQBUAzAVgLQAggSA0gzQA9g4gKgVQgOgfgfgwQgegugWgbQB7B1AuAmQAZAVgmA4QgUAfgmAuQgTAegvAiQgmAcgUAAQgIAAgGgFg");
	this.shape_1.setTransform(20.4,20.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,42.5,42.2);


(lib.Path_10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#241F20").ss(0.3).p("ABCiGQChBYAGAPQAEAKgRApQgRAqgLALQgNANgvAaQgzAbgIgGQgIgGhFg+QhFg8gKgIQgHgHgzgmQg0gogEgDQDqCiASAEQATAEAegEQAjgFAMgNQAXgbADgFQANgTgDgJQgEgOgngqQgogrgmggg");
	this.shape.setTransform(19.9,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("AA3CFIhNhEIhPhEQgHgHgzgmIg4grQDqCiASAEQATAEAegEQAjgFAMgNIAaggQANgTgDgJQgEgOgngqQgogrgmggQChBYAGAPQAEAKgRApQgRAqgLALQgNANgvAaQgqAXgNAAIgEgCg");
	this.shape_1.setTransform(21.7,13.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,45.3,29);


(lib.Path_9_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#241F20").ss(0.3).p("AgsjiQAUAkAXAnQAsBOANAMQAFAFA6A6QAzA0AMAIQANAJgGAeQgGAagNAUQgMASgtAhQguAigKgGQgLgGhiiDQhhh+gQgbQCcCxAUAKQALAFAqAUQAnAPAJgOQAKgOAGgbQAEgXgBgHQAAgBhBhYQhChbgEgOQgehVgKgZg");
	this.shape.setTransform(16.8,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("AAsDiQgKgGhiiDQhih+gQgbQCcCxAWAKIA0AZQAnAPAJgOQAJgOAGgbQAFgXgBgHIhChZQhAhbgFgOIgohuIArBLQArBOANAMIBAA/QAzA0ALAIQAOAJgHAeQgFAagOAUQgMASgsAhQgoAdgNAAIgEgBg");
	this.shape_1.setTransform(18,22.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-1.1,37.8,47.7);


(lib.Path_8_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#241F20").ss(0.3).p("ACqACQg/ghhDgkQiDhIgSgCIg6A5QCKCSA8AyQgmgpghgtQhDhYAggWQAegVBIAnQB3A+AYAGg");
	this.shape_1.setTransform(17.1,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiohFIA6g5QATACCCBIICCBFQgYgIh2g8QhJgngeAVQggAWBDBYQAiAtAlApQg8gyiKiSg");
	this.shape_2.setTransform(17.2,12.8);

	this.addChild(this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.9,35.9,27.5);


(lib.Path_7_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("AgPiRQCwBnATAMQgpAqgqAsQhTBXgDACQgggSgngZQhPgxgcgfQAjAQAnAOQBNAdAQgIQAYgJAdgbQAegcAAgPQABgSglgyQgkgygagVg");
	this.shape_2.setTransform(17.3,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#241F20").s().p("AhCBnQhPgxgcgfQAjAQAmAOQBOAcASgHQAWgJAdgbQAegcAAgQQABgRgmgzQgkgxgZgWQCwBnATANIhTBVQhUBYgDACQgfgTgngYg");
	this.shape_3.setTransform(18,14.7);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.9,36.9,31.3);


(lib.Path_6_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("AATh8QB/ByAQAZQhdBrgGACQgggWgmgiQhRhDgpg3QhChaBCBWQAjAhAnAeQBMA/ATgEQAWgGAPgRQAPgRACgYQACgTgfguQgXgigXgZg");
	this.shape_2.setTransform(16.1,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#241F20").s().p("AgHBFQhQhEgpg2QhChaBBBVQAkAhAnAeQBMBAASgFQAXgFAOgRQAPgRACgYQADgTgggvQgWgigYgZQB/BzAQAYQhcBsgGACQgggXgnghg");
	this.shape_3.setTransform(16.1,12.6);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.9,34.6,27.1);


(lib.Path_5_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("AgWB1QgagfgWgiQgzhMAXgTQAcgWAsAUQAqAVB1BZQiqiZg6gkQgSATgSATQgjAlgBADQB1CCAcAhQAGAHACAC");
	this.shape_2.setTransform(17,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiVgqQAAgDAkglIAjgmQA6AkCqCZQh1hZgqgVQgrgUgdAWQgXATAzBMQAXAiAaAfIiRijg");
	this.shape_3.setTransform(15.3,12.3);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,32.2,27.2);


(lib.Path_4_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("ADAgXIi0itQgtAngxArQhjBWgHATQCwClApAcQgggsghgxQhChfADgXQAFgbAngnQAmglAUgDQARgDBIAvQAmAYA+Aqg");
	this.shape_2.setTransform(19.1,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai9gCQAHgTBihWQAxgrAugnICzCtQg9gqgmgZQhIgugSADQgUADgmAlQgmAmgFAbQgDAWBCBhQAgAwAgAsQgogbiwilg");
	this.shape_3.setTransform(19.3,19.2);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,40.2,40.2);


(lib.Path_3_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("ACsgPQgEgEgDgEABADLQgtgygqg1QhZhrANgSQAZgpARgYQAggrAXADQAXAEBGAvQA2AkAUAUQggglghgnQhKhWgHgPQiyCYggAKQA6A0A+A6QBwBrAXAYIADAD");
	this.shape_2.setTransform(19.5,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6BIIh3huQAggKCxiZQAIAPBJBXIBCBLQgUgUg3gkQhFgugZgEQgVgDggArQgRAXgaAqQgNASBaBrQApA0AtAyQgWgXhxhrg");
	this.shape_3.setTransform(18.2,20.4);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.8,38.5,42.8);


(lib.Path_2_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("AAAiYQB2B4AlAvQgdAggeAhQg8BCgEAGQiDhegUgRQAZAQAeANQA9AbAYgMQAggPAbgfQAcghgKgNQgZgngUgfQglg6gQgRg");
	this.shape_2.setTransform(12.1,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#241F20").s().p("AiJAqQAaAQAeANQA9AbAXgMQAhgPAbgfQAcghgLgNIgshGQgkg6gPgSQBzB5AmAvIg7BAIhABIQiEhegUgQg");
	this.shape_3.setTransform(13.9,15.4);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,29.7,32.6);


(lib.Path_1_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("Ahrh1IDUC3IgtAxQglgtgmg0QhQhlgMgig");
	this.shape_2.setTransform(11.1,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#241F20").s().p("AgOAUQhQhmgLgiIDUC3IgtAyQgmgtgmg0g");
	this.shape_3.setTransform(11,12.1);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.6,23.4,25.5);


(lib.Path_0_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#241F20").ss(0.3).p("AADihQCGCxAKAXQgXAbgYAcQgwA4gGAJQiZiZgPgTQAfAZAjAbQBFA0AVgIQAegLAIgGQAOgLgBgTQgCgVgbhBQgbhCgagtg");
	this.shape_3.setTransform(13.1,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#241F20").s().p("AiGgMQAfAaAjAaQBFA0AVgHQAegMAIgGQAOgKgBgUQgCgVgbhAQgbhCgYgtQCECwAKAYIgvA2Ig2BBQiZiYgPgUg");
	this.shape_4.setTransform(14.3,16.2);

	this.addChild(this.shape_4,this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.9,29.2,34.2);


(lib.Group_20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AAKgNIjLisIhvhQIhQgtIAEgKIALAEIAeAMIAtAVIA3AhQAjAVAdAVQAlAZAgAZIBHA4QAlAgAgAdQAfAbAmAiIBCA+QA+A8AyA3QAvAyAdAiIAcAhIgHAHg");
	this.shape.setTransform(38.5,32.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,64.3);


(lib.Group_19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AE9EtQgUgLgVgOIg0giQg3glhGg0IhEg2IiGhzQgwgtgPgPQgsgsgNgPQghgkgPgTIgngwIgPgWIgMgSIgVglIAJgFIAcAdQAJAKAZAXIAtApIA2AvIGBFKIA2AxIBsBoIgGAIIgkgUg");
	this.shape.setTransform(35.9,32.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.9,64.4);


(lib.Group_18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AFOEuQgdgXg7gvIh5hlQgegYgmgiIjKizQgqgngTgRIg4gyQhEg/gsgrIAHgJQAyAlBJA4IA7AuIBBA1IDNCwIBCA9IBzBsQBDBAApAuIgGAIg");
	this.shape.setTransform(37.5,32.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75,65.6);


(lib.Group_17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AFrDVIhdgvIiDhIQgmgWgigUImLjoQgdgRgMgEIgjgSIADgKIBUAWQAhAKAYAKQAsARAWAKQAgAPAnATIBLAmIBJArIBLAtICIBYIBnBOIAkAeIAeAaIgGAIIgkgRg");
	this.shape.setTransform(40.6,23.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81.1,46.1);


(lib.Group_16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AEaC6Qg8gihNguIoTlPIgcgPIgKgEIADgKIAZAFIASAFQAbAIAUAIQAjAOAXALIBFAhIBKAnQBPArBNAxQCYBdCABkIB3BlIgGAIg");
	this.shape.setTransform(42.6,26);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85.1,51.9);


(lib.Group_15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AF8D2Ihhg8Ig/gpIkojEIhLgxIhHgtIg/gnQgUgMgjgTIhSgrIADgJIBBAQIAaAJIA8AWIAiAPIAkARQA5AcATALICcBfQAaARAzAkQAQAIA5AsIBDA0QAfAZAbAYQAgAcAQAPIBCBBIgGAIIglgWg");
	this.shape.setTransform(42.4,26.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84.7,53.8);


(lib.Group_14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AE4GIIgmgnIioi1Qg/hIhBhRIh/iaQhFhXgmg1IhiiOIAIgHIAjAhIAmAmIAxAyQA0A3BEBLICBCZQBMBcAyBAIDMEbIgJAGQgMgMgWgVg");
	this.shape.setTransform(35.5,42.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,85.1);


(lib.Group_13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AiKiQQg/hVgog6IheiRIAIgGIB4B8QB1CBB7ChICtDtIAuBGIAlA8IAbAwIAPAgIAFALIgIAFg");
	this.shape.setTransform(33.7,43.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.4,87.9);


(lib.Group_12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AE2GTIglgoIgwg1Ig3hAIg+hHQhAhMhBhSIhBhPIg9hQQg8hNguhDIgpg6IgfguIgagpIAIgGIB7B8QA/BFA4BBIBBBNQAkAtAbAkQAzA+BLBiIA4BMIAwBGIBfCTIgIAGg");
	this.shape.setTransform(35.2,43.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.5,87.7);


(lib.Group_11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AE2E0QgXgOgjgZQgXgPgrggIhHg4IjcjCIhFhEQhJhJgugzQgagdgTgWIgjgpIgcgkIAHgHIAkAcIBfBMQA3AuBKBBIBIBBIEYEDIA7A3IAyAtIBLA/IgFAJg");
	this.shape.setTransform(40.3,35.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.6,71.3);


(lib.Group_10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("ADEDaIhGg8Qg8g0hYhSIiQiIQhOhNgsgwIhyiBIAHgHIAmAcIBiBNQA5AuBMBCICSCHQBFA/BLBKIB7B9IAwAyIAkAoIAgAjIgHAIg");
	this.shape.setTransform(40.3,37.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.7,74.9);


(lib.Group_9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AFoFbIgsggQgjgagVgRIiIhvIkmkOQhJhKgxg0IhThdIgfgkIAIgIIBRA+QAYASAeAaQA9AwBJBBIBKBCIBIBFQA9A2BVBTIB8B8IAxAyIBGBHIgEAJg");
	this.shape.setTransform(40.7,37.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81.4,74.7);


(lib.Group_8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AFEFRIgUgWIl4ltQgjgigagcQg6g6gwg1IhjhzIAHgHIAiAYIAmAcIAxAnQB3BeB+B/QBGBEA0A6QAbAdAbAhQAUAXAaAiIAlAyQALAPAPAaIATAmIgJAFg");
	this.shape.setTransform(34,34.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,69.3);


(lib.Group_7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AFDFKIgkgiIgwgsIg4g0IlHk7QhKhLgmgrIhph4IAHgHQAOAJAWARIBbBGQB+BmCECEIC8DDIAxA7QAUAYAVAcIAdApIAYAmIgIAGg");
	this.shape.setTransform(36.2,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.5,72.3);


(lib.Group_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AEeE+IgVgOQgXgPgdgXIg6gvIg/g4IhBg9Ig/hBIh6iEQhBhMgkguIhChaQgPgXgIgNIAHgHICoCcIA6A7IA+BAIDxD+IA0A1IAXAYIAVAUIAiAiIAfAcIgFAIg");
	this.shape.setTransform(35,35.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69.9,70.2);


(lib.Group_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AE2FTIglgiIgvgrIg4g0Ig9g8QhIhFg4g9IhBhDIg9hCQhEhMgmgvIhih8IAIgHIB5BmQAqAkBMBKIBABAQAlAmAaAeIC1DHIAxA7IBGBbIAZAkIgIAGIgggdg");
	this.shape.setTransform(35,36.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,73.7);


(lib.Group_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AEVExIgxgsIh2hvQhEhCg9hAIhChCIg+hDQhDhKgogvIhjh9IAHgHIAiAbIBZBLQA9A3A5A3ICCCDQAdAcAkAnIA+BDIA4BAIAyA7IBgB/IgIAGg");
	this.shape.setTransform(35.5,36.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.9,73.5);


(lib.Group_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AExEUIghgeImUlWIhrhiIhkhlIAHgIIAhAUIBXA4QB9BVB3BqICyClIBTBhIAvBIIgJAGg");
	this.shape.setTransform(34,30.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,60.9);


(lib.Group_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AEpEHIgwgnIg6guIlSkWQhKhAgqgoIhuhrIAGgJIBOAwIA1AjQA2AlBJA2IBGA3IBEA6ICHB0IA8A6IA0A1IAqAwQAQASAPATIAZAjIgIAGg");
	this.shape.setTransform(37.5,32.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.9,64.2);


(lib.Group_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AE6EmIgpgWQgcgQgYgQQgfgTgdgWQgRgMgvgkIhCg1IhAg6QgcgZglghIg9g7Ig3g6Igwg0QgSgUgWgaIgdglQgQgUgJgMIAIgHIAgAYQAcAVA3AuIDwDUIEbD9IATAQIAQANIAgAZIgFAJIgmgQg");
	this.shape.setTransform(35.7,31.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.5,62.2);


(lib.Group_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AFCEvIgmgdIgxgmIg5guIg/g1QhKg+g6g2IiEh3QhEhBgpgsQgegfgNgPIg8hDIAHgIIAiAYIAoAcQAZARAZAUQAsAiBOA/IDGCxIA/A8IA6A6IAzA1IArAuQAMAOATAXIAaAhIgIAHIgggag");
	this.shape.setTransform(36.3,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.5,65.9);


(lib.Group = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AFFEuIgRgOIh/hjIhAg1QhbhMgrgoIiFh1Qg4g0g3g5IhMhRIgcggIAHgHIBKAzIAzAkQA3ApBEA4ICFB1QAfAZAlAiIB7B2IAzA1IArAuQANANATAYIAaAhIgHAGg");
	this.shape.setTransform(36.7,32.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.4,65.5);


(lib.Group_2_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AwNRkIBXhjIDnkDIFIlsIC6jNII7puICxi9IHooDIAHAGMggUAjNg");
	this.shape_1.setTransform(103.9,113.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,207.8,226.2);


(lib.Group_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AwNRkIBUhlIBih0ICAiUICYivIFlmPIDAjQIF9mdICyi6ICiinIFQlUIAHAGIk8FnIibCtIonJdIl7GeQh8CGg0A3IifCpIiHCNIhpBtIhcBeg");
	this.shape_1.setTransform(103.9,113.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,207.8,226.2);


(lib.Group_0_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("Av3P/IH5m7IC0ikQBOhHBxhrQBBg9CAh+QCCh9A+g/IBcheQAzg0AmgpIBVhcIBQhYIBLhVICCibIA3hFIBVhyIA0hLIASgbIAJAFIgSAcQgcAsgXAgIhTB1Ig1BFIjLD0QgxA4geAhIhVBcIhZBeIhcBfQheBghhBdQhnBmhbBUQhjBdhdBVQhTBMhjBXIilCQQhoBaiTB6IhgBOg");
	this.shape_1.setTransform(101.6,103.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203.3,206.2);


(lib.Group_21 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("Av3P/IHwnFIFxlZIDAi6QBohiBYhZIEMkVQAugwAjgnIBMhUIBFhPIAhgmIAegkIA4hEIBXhwQAZgfAdgrIATgaIAJAFIhmChIgtA/Ig0BHIjID3IhPBaIisC8IhcBgQhIBLh3ByQhCBBh/B6QhoBhhaBPQhUBMhjBWIinCOIiQB2IjSCkg");
	this.shape_1.setTransform(101.6,103.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203.3,206.2);


(lib.Path_18_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("AgWijQAdArAjAvQBEBcASAVIiBiDIgkgBQgLAFgLAJQgXAQgFAQQgGARAFAWQADARAEADQACACBCA4QBCA7ALALQjAiGgUgSQgPgPAGghQAGghAZgZQAbgaAhgQQAigQAKAMg");
	this.shape_2.setTransform(16.1,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiEABQgQgNAHghQAGghAZgZQAbgaAggQQAigQALAMIA/BaQBFBcASAVIiEiDIgigBQgKAFgMAJQgWAQgGAQQgFARAEAUQAEATAEADIBBA6QBEA7ALALQjAiGgTgUg");
	this.shape_3.setTransform(14.6,15.6);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,30.9,33.2);


(lib.Path_17_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("ACxAqQi1imgngyQgZggghALQgFABgcATQgJAHgSAXQgUAbAHAIQAKAMD3EGQh8ikgZgtQgSggAPggQANgfAPAJQAKAGBdBLQBaBGAZAWg");
	this.shape_2.setTransform(17.9,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiuhdQgHgIAUgbQASgXAJgGQAcgTAFgCQAhgLAZAgQAnAzC1ClQgZgVhahHQhdhLgKgGQgPgIgNAeQgPAhASAgQAZAtB8CkQj3kHgKgMg");
	this.shape_3.setTransform(17.9,18.3);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,37.6,38.4);


(lib.Path_16_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("ACKgtIgDgCACTCaQibhUgWgXQgXgYgSgXQgYghADgNQAFgdAFgMQALgaAUADQAeAGA9AUQBDAWAcAPIjNh4QgLgGgeAQQglASgQAkQgNAdACAjQACAgAKAEQAIADBuA3QBiAzAaAOQAIAEAuAXQAHAEAHADQAZAMAEAD");
	this.shape_2.setTransform(17.8,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACTCbIg1gbIh8hBIh2g8QgKgDgCgfQgDgjANgdQARgkAlgSQAegQALAGIDMB4QgbgPhEgWQg9gUgdgGQgUgDgLAaQgFAMgGAdQgCANAXAfQASAZAYAYQAUAXCdBUIgPgHg");
	this.shape_3.setTransform(16.3,16.3);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,37.4,36);


(lib.Path_15_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("ACxgcQgngogogoQhahbgFgEQgKgIgrAMQg0ANgYAkQgfAtgRAlQgSApALAMQAPAPC4CvQgYgigbgnQg1hNgEgZQgNhSAmgXQAagQAZgDQAcgEAWAOQAQALA4AcQAtAYAYAXgAC6gTQgEgFgFgE");
	this.shape_2.setTransform(18.8,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AixAAQgKgLASgpQAQglAfgtQAZgkAzgNQAsgMAJAIQAGAEBZBbIBPBQQgYgXgsgYQg4gcgQgLQgWgOgcAEQgaADgZAQQgmAXAMBSQAEAZA2BNQAbAnAYAiQi5ivgPgQg");
	this.shape_3.setTransform(18.3,19.2);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,39.4,40.3);


(lib.Path_14_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("ADkAlIj4jiQgcgag4AMQg0AKgNAZQgbApgOAcQgZAzAQAVQAMAQBNBUQBKBTAKANQgigygfg4Qg+htANgYQAPglAJgMQAPgTAhAAQA2ACEGCtg");
	this.shape_2.setTransform(22.8,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiDBcQhMhWgNgOQgQgUAag0QANgbAbgqQANgYA1gLQA3gLAcAaID4DhQkGitg1gBQgigBgOATQgJAMgQAlQgMAZA+BtQAfA3AhAzQgJgNhLhUg");
	this.shape_3.setTransform(22.9,19);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.9,47.5,39.8);


(lib.Path_13_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("AAGi0QDKCwAFAGQAGAKgMAfQgPApgqAsQgoAsgyAIQgfAFgTgIQgIgEhXg3QhZg3gNgJQAoAPAsANQBZAbAVgIQAcgKASgXQATgYANgrQAMgkgjhCQgcg1gcgag");
	this.shape_2.setTransform(19.6,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#010202").s().p("AgCCxQgIgEhZg3QhYg3gOgJQAoAPAtANQBYAbAXgIQAagKASgXQAUgYANgrQAMgkgkhCQgcg1gZgaQDHCwAGAGQAFAKgMAfQgPApgqAsQgoAsgyAIQgLABgLAAQgQAAgKgEg");
	this.shape_3.setTransform(21,18.3);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.9,42.4,38.4);


(lib.Path_12_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("AghisQArAkAwAnQBhBNASAJQAVALgNAjQgLAggcAhQgbAfgqAYQgrAZgPgJQgMgJhDhEQhLhKgQgQQAdASAiASQBDAkAXACQAYACAVgaQARgWAIggQAHgcgZgtQgbgxg4gyg");
	this.shape_2.setTransform(16.5,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#010202").s().p("AAACrQgKgJhFhEIhbhaQAdASAiASQBDAkAXACQAYACAVgaQARgWAIggQAHgcgZgtQgbgxg4gyIBbBLQBhBNASAJQAVALgNAjQgLAggcAhQgbAfgqAYQgfASgRAAQgGAAgEgCg");
	this.shape_3.setTransform(18,17.5);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.9,36.3,36.8);


(lib.Path_11_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("AANinQB8BzAuAnQAZASgaAtQgOAYgbAiQgNAWglAWQgqAagUgPQgSgOhOhSQhVhVgGgFQAmAbApAbQBQA3AQgGQAcgLAogkQAugngMgUQgQgcgigsQghgsgXgZg");
	this.shape_2.setTransform(16,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#010202").s().p("AALCjQgQgOhQhSQhVhVgGgFQAlAbApAbQBSA3AQgGQAbgLAngkQAugngLgUQgRgcghgsQghgsgVgZQB6BzAuAnQAYASgZAtQgOAYgbAiQgNAWglAWQgaAQgSAAQgLAAgHgFg");
	this.shape_3.setTransform(17.9,16.9);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,37.5,35.8);


(lib.Path_10_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("AA9h/QCeBaAHAPQAFAKgPAmQgPAngKAKQgLALgtAWQgvAYgIgGQgJgGhGg+QhFg7gJgJQgHgHgygnQg0gngEgDQDoCkASAEQASAFAcgDQAigDALgMQAWgaACgDQAMgRgEgLQgFgLgngqQgogqgmggg");
	this.shape_2.setTransform(19.2,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#010202").s().p("AA9B+IhNhEQhGg7gJgJQgHgHgzgnIg3gqQDnCkASAEQASAFAdgDQAigDAKgMIAYgdQAMgRgEgLQgEgLgogqQgogqgmggQCfBaAHAPQAEAKgPAmQgPAngKAKQgLALgsAWQgmAUgNAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAgBgBg");
	this.shape_3.setTransform(21.1,13);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.8,43.9,27.6);


(lib.Path_9_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("Ah2ilQB4BpAZAOQAHADBHAqQA/AjANAGQAOAGAGAWQAEATgEAQQgEAOgbAZQgcAagLgEQgMgEiDhdQiChagXgTQDFB9AWAHQALADAsANQAoALADgLQADgLgFgUQgEgRgDgFQgBAAhZg/QhXhBgKgKQgJgKhBhGg");
	this.shape_2.setTransform(16.8,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#010202").s().p("ABwClQgLgEiDheQiChagYgTQDGB+AWAGIA3ARQAnAKAEgKQACgLgEgUQgEgRgDgFIhag/QhXhBgKgLIhKhQQB5BpAYAOIBOAuQA/AjANAFQAOAHAFAWQAEATgEAPQgDAOgbAZQgZAYgLAAIgEgBg");
	this.shape_3.setTransform(18.6,16.7);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,39,35.2);


(lib.Path_8_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#241F20").ss(0.3).p("ACTAtQg7gog9goQh5hTgPgFIgiAcQCPCLA9AzQgpgngkgpQhKhQAUgJQAUgJBDAuQBtBHAVALg");
	this.shape_3.setTransform(14.7,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiRhQIAigcQAPAFB5BTIB5BQQgVgLhuhHQhDgugTAJQgVAJBLBPQAkApAoAnQg7gyiRiLg");
	this.shape_4.setTransform(14.8,11.2);

	this.addChild(this.shape_4,this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,31.2,24);


(lib.Path_7_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("AgYiDQCsBsATAMQgiAigjAkQhGBIgDABQgegTgngaQhMgzgdgeQAhARAlARQBKAgAPgFQAVgHAYgVQAZgXgBgQQAAgNgngxQgmgvgagWg");
	this.shape_4.setTransform(15.7,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#241F20").s().p("Ag0BXQhNgzgcgeQAhARAlARQBJAgAQgFQAVgHAYgVQAYgXAAgQQAAgNgngxQglgvgbgWIC+B4IhFBGQhFBIgDABQgfgTgmgag");
	this.shape_5.setTransform(16.5,13.4);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.9,33.8,28.6);


(lib.Path_6_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("AATh8QB/ByAQAZQhdBrgGACQgggWgmgiQhQhDgqg2QhChbBCBWQAjAhAnAeQBMA/ATgEQAWgGAPgRQAPgRACgYQACgTgfguQgXghgXgag");
	this.shape_4.setTransform(16.1,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#241F20").s().p("AgGBFQhRhDgpg3QhChaBBBVQAkAhAnAeQBMBAASgFQAXgGAOgQQAPgSACgYQADgSggguQgWgigYgaQB/BzAQAYQhcBsgGACQgggXgmghg");
	this.shape_5.setTransform(16,12.6);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.9,34.6,27);


(lib.Path_5_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("AgOBoIADADQAGAHACACAgOBoQgZgdgXgeQg2hJATgOQAYgRApAWQAoAXB1BaQiriYg4gmQgPAPgOAPQgdAeAAACQByB5AgAjg");
	this.shape_4.setTransform(16.3,11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiOguQAAgCAdgfIAdgdQA4AlCrCZQh1hbgogWQgpgXgYARQgTAPA2BIQAXAfAXAcIiQibg");
	this.shape_5.setTransform(14.5,11.2);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,30.8,25.2);


(lib.Path_4_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("ACxgIIizisQgpAfgqAjQhTBFgFAQQCvCjAqAdQgjgqghgvQhFhbABgVQACgYAggfQAggeAUgBQAOgBBHAwQAlAaA9Arg");
	this.shape_4.setTransform(17.6,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiugUQAFgQBThGQAqgiApgfICzCrIhihEQhHgwgOABQgUABggAeQggAfgCAYQgBAUBFBcQAhAvAjAqQgqgdivijg");
	this.shape_5.setTransform(17.8,17.4);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,37.2,36.5);


(lib.Path_3_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("ABMC6QgvgxgqgzQhchoALgPQAUgkAOgUQAbglAVAFQAWAFBEAwQA6AoATAUQgigmgkgnQhLhVgIgOQiZB9geAGQA7A1A+A5QBxBqAXAXIADADACfgEQgCgCgCgC");
	this.shape_4.setTransform(18.5,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvA4Ih5htQAegHCZh8QAIAOBLBUIBHBNQgTgTg7gpQhEgvgXgGQgUgEgaAkQgOAUgVAkQgKAPBbBoQArA0AuAwQgXgXhxhqg");
	this.shape_5.setTransform(17.2,18.8);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.8,36.2,39.4);


(lib.Path_2_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("AgGiJQBsCAAkAvQgZAXgZAXQgyAugDAFQh5hrgTgTQAXATAcARQA2AjAWgGQAcgHAWgWQAXgYgJgPQgBgBgqhCQgkg6gNgSg");
	this.shape_4.setTransform(10.7,13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#241F20").s().p("Ah5ALQAXASAcASQA3AjAVgGQAcgHAWgXQAXgXgJgPIgrhDQgig6gPgSQBsB/AkAwIgyAtQgyAvgDAEQh5hrgTgSg");
	this.shape_5.setTransform(12.3,13.7);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,26.5,29.4);


(lib.Path_1_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("Ahrh1IDUC3IgtAxQglgtgmg0QhQhlgMgig");
	this.shape_4.setTransform(11.1,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#241F20").s().p("AgOAUQhQhmgLgiIDUC3IgtAyQgmgtgmg0g");
	this.shape_5.setTransform(11,12.1);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.6,23.4,25.5);


(lib.Path_19 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.3).p("Agoi1QARAkATAnQAlBPALAOQAIAMAsA8QAqA6AKALQALAMgEAXQgEASgKANQgJALgjAMQgkANgJgIQgJgIhRiMQhSiHgOgbQCCDDAQAPQAJAIAjAeQAgAZAHgIQAHgJAEgUQADgRgBgGQgBgCg2heQg2hegEgNg");
	this.shape_2.setTransform(13.6,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#010202").s().p("AApDIQgIgIhSiMQhSiHgNgbQCCDEAQAPIArAmQAgAZAHgJQAHgJAEgUQADgQgBgGIg3hgQg1hegFgNIgjhoIAlBMQAkBOALAPIA1BHQAqA7AKALQALAMgFAWQgEATgKAMQgJALgjANQgWAIgMAAQgHAAgEgEg");
	this.shape_3.setTransform(14.7,20.5);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,31.2,42.8);


(lib.Group_20_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AALgPIg8g3Ig9g0IhvhXIgvgfIhHgoIAEgKIAJAEQASAFAJAFQAMAEAdAOQAlAUAOAIIA5AlIA+AtQAmAeAZAVQAnAjAWAUQAaAXAjAgQAjAiAWAXIA0A3IAtAzQAlAqAcAkIAYAeIgIAHg");
	this.shape_1.setTransform(34,29.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,58.3);


(lib.Group_19_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AETERIgkgWIgugeIiqiBQgmghgUgTIg7g0Ig3g3QgagcgXgaIhKhfQgQgXgHgNIgSghIAJgFIAZAaQAIAJAWAUID+DlIEcEGIAZAbIgGAIIghgSg");
	this.shape_1.setTransform(31.4,29.2);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.9,58.4);


(lib.Group_18_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("ADYDTIkdj9IihiWQg8g5gngnIAHgJQAtAgBBAzIDmDEIA8A1IA6A2IBkBkQAgAgAlAoIAYAdIgGAHg");
	this.shape_1.setTransform(33,29.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,59.6);


(lib.Group_17_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AFLDDIhWgrQhng3iShZIkoirIglgUIgggQIADgKIAlAHQAPADAZAJIA0ARQApAPAUAJQAiAPAfAPICJBKQAbAPAoAaIBBAoIA7ApIA0AnQASANAYAVIAgAbIAbAZIgGAIIghgPg");
	this.shape_1.setTransform(37.1,21.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.1,42.1);


(lib.Group_16_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AFdDeQgTgKgVgMIgzgcQg1gdhIgtInok1IgYgNIgKgEIADgKIAKACQAKABATAFQAdAJAPAFQAnAQAPAHQAkAPAbAPQATAIAzAbIBHApIBHAsIBIAtIBDAvQA+AsA3AsIBPBDIAdAbIgGAIg");
	this.shape_1.setTransform(39.1,24);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78.1,47.9);


(lib.Group_15_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AEDCsQglgYgUgOInQkwIgygcIhLgoIADgJIA8AOIBvApIAhAPIAjARQAUAJAPAJQAyAbAXAPIBHAuIBHAxIBDAwIA9AxIA1AuIArApIAgAgQASASAJAMIgGAHg");
	this.shape_1.setTransform(38.9,24.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77.8,49.8);


(lib.Group_14_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AEZFoIgjgkIgtguIhsh3Qg+hHg2hFIhziOQg6hMgkg0Igkg1IgzhPIAJgGIAfAeIAjAjIAtAuQAtAvA+BHIB0COQA4BCA6BMIBeCBIAkA1IAcApIAXAlIgIAGg");
	this.shape_1.setTransform(32,39.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,78.1);


(lib.Group_13_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("Ah+iDQgzhIgog8Ig9hgIgWgmIAIgGIAfAfIBOBTQBtB5BqCRQA/BRAtBDIAvBGIAoBBIAhA3IAXAsIAOAeIAEAKIgIAFg");
	this.shape_1.setTransform(30.2,40.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,80.9);


(lib.Group_12_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("ABfCiQhEhQgwhBIhyiRQg+hTghgzIg/hgIgXgmIAIgGIBwByQArAuBABNIB0CRQA7BKA1BJIAyBGIArBAIBVCIIgIAGg");
	this.shape_1.setTransform(31.7,40.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,80.7);


(lib.Group_11_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AFEEvIgqgYQgVgMgggWIg9gqIhBgzIhEg4IiFh2Ig/g9Qg6g5gyg4IhIhUIgZghIAHgHIAhAZICPBzIF/FZIA1AxIAuApIAkAfIAgAaIgFAJIgmgSg");
	this.shape_1.setTransform(36.8,32.2);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.6,64.3);


(lib.Group_10_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AEfEdIgzgnIg7gvIhAg2Qg5gxhNhIIiEh7QhHhGgogsIhnh2IAHgHIAjAZIBaBEQA3AsBDA6ICFB6QBLBEA4A4IA8A7ICACJIAdAgIgHAIg");
	this.shape_1.setTransform(36.8,33.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.7,67.9);


(lib.Group_9_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AFJE7QgagRgPgLIgzgnIh9hkIhFg7IjHi6QhAg+gwg0IhLhVIgcghIAIgIIBKA3IAyAoQArAiBQBEIBEA7IBBA/QA9A2BIBGIDeDfIgGAJg");
	this.shape_1.setTransform(37.2,33.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.4,67.7);


(lib.Group_8_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AELEMImGlvQg4g3grgtIhbhnIAHgIIAgAVIBRA6QA3ApA3AvQAeAZAeAcQAfAeAbAaQBCA+AvAzIAyA4IAqA0QAOASAUAcQAKAPANAXQAJAPAEAKIAEAKIgJAFg");
	this.shape_1.setTransform(31.5,31.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,62.3);


(lib.Group_7_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AEsEqIhNhHIg0guIkxkbQhDhDglgoIhihtIAHgHIAiAWIAlAbIAwAkQA1AoA/A2IB9ByIA+A8IA7A8IBkBwIAlAvIAwBJIgIAGIgdgcg");
	this.shape_1.setTransform(33.7,32.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.5,65.3);


(lib.Group_6_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AEcEpQgIgDgKgHIgUgMQgZgQgXgSQgdgUgagWQgVgQglghIg9g3QgZgZghgiIhyh2Qgzg5gpg2IgjguIgaglIgWggIAHgHIAfAaIBMBDIAyAuIA2A1IFeFjIATATIAfAeIAdAaIgFAIIgjgSg");
	this.shape_1.setTransform(32.5,31.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.9,63.2);


(lib.Group_5_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("ACdC/Ig5g1QhGhDgxgzIh1h5Qg2g7gsgzIhChSIgYggIAIgHQAMAIATAQIAkAcIAtAnQAvAmBAA9IA7A5IA7A+ICoCzIAtA3IAlAtIAbAlIAWAiIgHAGg");
	this.shape_1.setTransform(32.5,33.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65,66.7);


(lib.Group_4_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("ABmCJQhEhAg0g1IisixQgUgWgagfIhEhSIgYggIAHgHIAhAYQAVAQAPANIAtAlQA4AvA3A0IA9A6IA8A8ICqC0IAuA1IAlAvIAcAlIAXAhIgIAGg");
	this.shape_1.setTransform(33,33.2);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.9,66.5);


(lib.Group_3_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C20000").s().p("AELD0QgSgPgKgLIj2jQIg5guIg2gvQg2gygnglIgkgkIgcgcQgPgQgJgKIAHgIIAeARIAiAUQAQAJAcATQAtAeA7AsICoCNIA1AyIAvAxIAWAYIATAWIAfApIAoBBIgJAGg");
	this.shape_1.setTransform(30,26.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,53.9);


(lib.Group_2_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AEpEGIghgbIgrgkIg0goIh2heIg9g0Ig+gxIg8gzQg8g0gsgpIhHhFIgagbIAGgJIBGAqIAwAeQA5AlA5ArIA/AwIA9A0IA+AzIA6A1IA1AzIAuAxQAaAcALAOIAbAiIAWAgIgIAHg");
	this.shape_2.setTransform(33.4,28.6);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,57.2);


(lib.Group_1_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AEWEFQgPgGgWgNIgvgbQgdgRgZgSQghgXgYgTIg7gvQgYgVgigeIg5gzQgZgYgdgdIgwg0IgqgvIhRhoIAIgHIBnBQQBdBMB3BwID7DgIAfAaIAcAWIgFAJg");
	this.shape_2.setTransform(31.7,27.6);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,55.2);


(lib.Group_0_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("ABkB9QhThHgjghIh0hqQg8g7glgnIgmgpIgcggIgYgdIAHgIIBwBOQA3AqA1AsIA7AzIA6A1ICnCgIAsAwIAmApIAcAhIAWAeIgIAHg");
	this.shape_2.setTransform(32.3,29.4);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.5,58.9);


(lib.Group_22 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("ABmB8QhAg1g3gzIh2hoQg6g4gpgqIhbhmIAHgHIAfAUIAkAYIAtAhQA2AnA4AuIA8AyIA7A2ICpCeIAuAwIAlAqQALALARAVIAXAfIgHAGg");
	this.shape_2.setTransform(32.7,29.3);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.4,58.5);


(lib.Path_17_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("AgxiTQCKCaAgAfIiMh4IgggBQgJAEgJAHQgSAOgCAOQgCAOAIAVQAGAOAEAEQAkAaAjAcQBGA2ALAKQjDh9gWgQQgQgPAAgcQAAgeATgVQATgXAbgNQAdgNALAKg");
	this.shape_4.setTransform(15.7,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah5gBQgQgPAAgcQAAgeATgVQATgXAbgNQAdgNALAKQCKCaAgAfIiMh4IgggBQgJAEgJAHQgSAOgCAOQgCAOAIATQAGAQAEAEIBFA2QBIA2ALAKQjDh9gWgQg");
	this.shape_5.setTransform(14,14.1);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.9,29.7,30);


(lib.Path_16_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("ADOgRQjihpg0gmQghgYgiAZQgJAHgXAcQgIAJgPAgQgRAlAIAGQAOAIE7C0Qijh8glgmQgYgbAKgoQAJglARADQAMACByArQBwApAeAMg");
	this.shape_4.setTransform(20.8,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjLgcQgIgGARglQAPggAIgJQAXgcAJgHQAigZAhAYQA0AmDiBpQgegMhwgpQhygrgMgCQgRgDgJAlQgKAoAYAbQAlAmCjB8IlJi8g");
	this.shape_5.setTransform(20.8,16.2);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,43.4,34.2);


(lib.Path_15_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("ACTgoIgCgCABVC9QgdgZgegcQhNhIgJgTQgPgegIgdQgLgmAHgPQAQgfALgOQAVgcATAGQAZAJA5AeQA9AgAWAVIiiifQgJgHglANQgtARgeAnQgYAegLAoQgLAlAJAGQAGAEBbBKQBWBKAPANQAHAHAlAdQAKAIAIAGQAPANACAD");
	this.shape_4.setTransform(18.1,20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABUC2IgsgjIhlhYIhhhOQgIgFAKglQAMgoAXgfQAfgnAtgQQAkgOAJAIICjCeQgWgUg9ggQg5gfgZgIQgUgHgVAcQgKAOgQAgQgIAOALAnQAJAcAOAeQAKATBMBJIA7A1IgSgPg");
	this.shape_5.setTransform(16.4,19.8);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,34.9,43);


(lib.Path_14_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("ACzgfQgngogngpQhahagFgEQgKgIgsAMQg0AOgaAlQggAvgRAlQgTArAKAMQAQAOC4CvQgYgigbgnQg1hNgDgaQgMhTAngYQAagQAagEQAdgFAWAPQAPAKA5AcQAsAYAYAXgAC9gWQgFgFgFgE");
	this.shape_4.setTransform(19,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AizACQgLgKAUgqQAQgmAhgvQAZgkA1gOQArgMAKAHQAGAEBZBbIBPBQQgYgXgtgYQg4gbgQgLQgWgOgcAEQgaAEgbARQgmAYALBTQADAZA2BOQAaAnAYAiQi4ivgPgRg");
	this.shape_5.setTransform(18.5,19.5);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,39.8,40.9);


(lib.Path_13_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("AD2AKQjQi9gmglQgcgbg/AUQg7ASgSAdQgiAzgTAhQgiA9AQAWQAMAPBKBYQBIBXAJANQgfg1gcg8Qg3h0ARgeQAWgsALgPQASgXAlgDQAlgDBwA9QBAAiByBEg");
	this.shape_4.setTransform(24.7,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiaByQhJhZgNgRQgPgTAig+QASghAjgyQASgdA6gSQBAgUAbAaID3DjQhzhEg/gjQhwg9glADQglADgSAYQgMAOgVAsQgRAeA3B1QAbA7AfA1QgJgNhIhWg");
	this.shape_5.setTransform(24.7,21.4);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,51.3,44.7);


(lib.Path_12_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("AASjBQDKCwAFAJQAFAJgOAhQgTAtgvAyQgtAxg1AMQgiAIgSgIQgHgDhag2QhZg1gOgKQApAOAtALQBcAXAXgJQAegMAVgbQAWgbAQgsQAPgpghhFQgag3gcgbg");
	this.shape_4.setTransform(20.9,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#010202").s().p("AgLC+QgIgDhbg2QhZg1gOgKQApAOAuALQBbAXAZgJQAcgMAVgbQAWgbARgsQAOgpgghFQgag3gcgbQDJCwAFAJQAGAJgOAhQgUAtguAyQguAxg0AMQgRAEgNAAQgLAAgKgEg");
	this.shape_5.setTransform(22.1,19.5);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.9,44.8,40.9);


(lib.Path_11_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("AghiuQArAkAwAnQBhBNATAKQAUAKgNAjQgMAhgcAhQgbAggrAZQgsAagOgKQgOgKicicQAdARAiASQBDAkAXACQAYACAVgbQATgXAHgfQAIgegZgsQgbgyg4gyg");
	this.shape_4.setTransform(16.7,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#010202").s().p("AAACsQgPgKicicQAdARAiASQBDAkAXACQAYACAVgbQATgXAHgfQAIgegZgsQgbgyg4gyIBbBLQBhBNATAKQAUAKgNAjQgMAhgcAhQgbAggrAZQggATgQAAQgGAAgDgDg");
	this.shape_5.setTransform(18.1,17.7);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.9,36.6,37.1);


(lib.Path_10_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("AAci4QB8BzAuAnQAYAUggAyQgRAcghAoQgQAagqAdQgwAhgVgPQgQgNhPhUQhShWgHgGQAmAbAqAaQBTA2ARgJQAfgPAvgsQA1gxgKgUQgPgcghgvQgfgtgXgag");
	this.shape_4.setTransform(17.3,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#010202").s().p("AgDC1QgSgNhPhUQhShWgHgGQAmAbAqAaQBTA2ATgJQAdgPAvgsQA1gxgKgUQgPgcghgvQgfgtgXgaQB8BzAuAnQAYAUggAyQgRAcghAoQgQAagqAdQghAWgUAAQgJAAgFgEg");
	this.shape_5.setTransform(19.1,18.7);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,40.2,39.2);


(lib.Path_9_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("AAyhnQCbBfAHAMQAGAJgLAjQgKAigJAIQgKAJgnAQQgpASgIgGQgIgGhHg+QhEg7gKgJQgHgHgygnQg2gqgBgCQDkCoASAGQARAFAaAAQAfABAJgKQAQgTAEgFQAJgPgFgKQgFgMgognQgpgqgmggg");
	this.shape_4.setTransform(18.1,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#010202").s().p("ABJByIhNhEQhGg6gKgKQgHgHgygnIg3grQDkCoASAFQARAGAaAAQAfAAAJgKIAUgYQAJgOgFgLQgFgKgogpQgpgpgmggQCbBfAHANQAGAIgLAjQgKAhgJAIQgKAKgnAQQgfANgMAAQgEAAgCgCg");
	this.shape_5.setTransform(19.8,11.8);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,41.6,25.3);


(lib.Path_8_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#241F20").ss(0.3).p("AgsjiQAUAlAXAnQAsBNANANQABABA+A9QAzA0ALAIQAOAKgHAeQgFAZgNAUQgMATgtAgQguAigKgGQgLgFhiiEQhih+gPgbQCcCxATAKQALAFArAUQAnAQAJgOQAKgPAGgbQAEgXgBgGQgBgChAhXQhChbgEgOQgfhVgJgag");
	this.shape_5.setTransform(16.8,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#010202").s().p("AAtDiQgLgFhiiEQhih+gPgbQCcCxAVAKIA0AZQAnAQAJgOQAKgPAGgbQAEgXgBgGQgBgChAhXQhBhbgFgOIgohvIArBMQAsBNANANIA/A+QAzA0ALAIQAOAKgHAeQgFAZgNAUQgMATgtAgQgnAdgNAAIgEgBg");
	this.shape_6.setTransform(18,22.8);

	this.addChild(this.shape_6,this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-1,37.8,47.7);


(lib.Path_7_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#241F20").ss(0.3).p("ACfAYQg9gkhAgnQh+hNgRgEIguArQCNCPA8AxQgogngigrQhGhUAagQQAYgPBGArQBzBBAWAKg");
	this.shape_6.setTransform(15.8,13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AichKIAugrQARAEB+BNQBAAlA9AmQgWgKhzhCQhGgqgYAPQgbAQBHBTQAiAsAoAnQg8gyiNiOg");
	this.shape_7.setTransform(16,12);

	this.addChild(this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,33.7,25.7);


(lib.Path_6_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#241F20").ss(0.3).p("AgUiKIDBB2QglAmgmAnQhMBQgDABQgfgTgngZQhNgygdgeQAiAQAmAPQBLAfAPgGQAXgIAagYQAcgZgBgPQAAgQgmgyQglgwgagWg");
	this.shape_6.setTransform(16.4,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#241F20").s().p("Ag6BeQhOgygdgeQAiARAmAPQBLAeASgGQAVgIAagXQAbgaAAgPQAAgQgmgxQgkgxgbgWIDBB2IhMBNQhMBQgDABQgfgSgmgag");
	this.shape_7.setTransform(17.2,14);

	this.addChild(this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.9,35.3,29.8);


(lib.Path_5_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#241F20").ss(0.3).p("AATh8QB/ByAQAZQhcBrgGACQgggWgngiQhQhDgqg3QhBhaBBBWQAkAhAnAdQBMBAASgFQAXgFAOgRQAPgRACgYQACgTgfguQgXgjgXgYg");
	this.shape_6.setTransform(16.1,12.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#241F20").s().p("AgGBFQhRhEgpg2QhChaBCBVQAjAhAnAeQBMA/ATgEQAWgGAPgRQAPgRACgYQACgSgfgvQgXgigXgZQB/ByAPAZQhcBsgGACQgggXgmghg");
	this.shape_7.setTransform(16,12.6);

	this.addChild(this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.9,34.6,27.1);


(lib.Path_4_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#241F20").ss(0.3).p("AgOBoIADAEQAGAGACACAgOBoQgZgdgXgeQg2hJATgOQAYgSAqAXQAoAWB1BbQiriZg5glQgPAPgOAPQgdAeAAACQByB5AgAjg");
	this.shape_6.setTransform(16.3,11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiOguQAAgCAdgfIAcgdQA5AlCsCZQh2hbgngXQgqgWgYASQgTAOA2BJQAWAeAYAcIiQibg");
	this.shape_7.setTransform(14.6,11.2);

	this.addChild(this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,30.8,25.3);


(lib.Path_3_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#241F20").ss(0.3).p("ADAgXIi0itQgtAngxArQhjBWgHASQCwClApAcQgggsghgwQhDhgAEgXQAEgbAngmQAmglAUgEQASgCBIAuQAmAZA+Aqg");
	this.shape_6.setTransform(19.1,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai9gDQAHgSBihWQAxgrAugnICzCtQg9gqgmgZQhIgugSACQgUAEgmAlQgnAmgEAbQgEAVBDBiQAgAwAgAsQgogciwilg");
	this.shape_7.setTransform(19.3,19.3);

	this.addChild(this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,40.2,40.2);


(lib.Path_2_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#241F20").ss(0.3).p("AA8C9Qgrgygmg1QhVhuAMgPQAXglAQgUQAeglAWAGQAWAGBCAzQA1AqATAUQgggmgggpQhGhZgHgPQgoAfguAgQhcA/gTAEQA3A5A7A6QBnBtAYAaIACADQABABABABACigBQgCgDgDgE");
	this.shape_6.setTransform(18.5,19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2A4Ihzh0QATgDBchAQAugfAogfQAHAOBHBZIBABQQgTgVg2gpQhCgzgYgHQgTgFgeAlQgQAUgYAkQgMAQBVBtQAnA1AqAyQgXgahnhsg");
	this.shape_7.setTransform(17.3,19.3);

	this.addChild(this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.8,36.6,40.7);


(lib.Path_1_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#241F20").ss(0.3).p("AgIh/QBiCEAhAzQgVAQgWARQgrAhgDAEQhth3gRgSQAVATAZAVQAwApATgBQAZgCATgQQAUgRgJgQQhAhygUgfg");
	this.shape_6.setTransform(9.4,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#241F20").s().p("AhrgKQAVATAZAVQAyApASgBQAYgCAUgQQATgRgJgQQg9hygXgfQBiCEAhAzIgrAhQgrAigDADQhth3gRgSg");
	this.shape_7.setTransform(10.9,12.9);

	this.addChild(this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,23.7,27.5);


(lib.Path_20 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(0.3).p("Ahrh1IDUC3IgtAxQglgtgmg0QhQhlgMgig");
	this.shape_4.setTransform(11.1,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#241F20").s().p("AgOAUQhQhmgLgiIDUC3IgtAyQgmgtgmg0g");
	this.shape_5.setTransform(11,12.1);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.6,23.4,25.5);


(lib.Group_20_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AALgPIg8g3Ig9g0IhvhXIgvgfIhHgoIAEgKIAJAEQASAFAJAFQAMAEAdAOQAlAUAOAIIA5AlIA+AtQAmAeAZAVQAnAjAWAUQAaAXAjAgQAjAiAWAXIA0A3IAtAzQAlAqAcAkIAYAeIgIAHg");
	this.shape_2.setTransform(34,29.1);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,58.3);


(lib.Group_19_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AETERIgkgWIgugeIiqiBQgmghgUgTIg7g0Ig3g3QgagcgXgaIhKhfQgQgXgHgNIgSghIAJgFIAZAaQAIAJAWAUID+DlIEcEGIAZAbIgGAIIghgSg");
	this.shape_2.setTransform(31.4,29.2);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.9,58.4);


(lib.Group_18_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("ADYDTIkdj9IihiWQg8g5gngnIAHgJQAtAgBBAzIDmDEIA8A1IA6A2IBkBkQAgAgAlAoIAYAdIgGAHg");
	this.shape_2.setTransform(33,29.8);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,59.6);


(lib.Group_17_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AFLDDIhWgrQhng3iShZIkoirIglgUIgggQIADgKIAlAHQAPADAZAJIA0ARQApAPAUAJQAiAPAfAPICJBKQAbAPAoAaIBBAoIA7ApIA0AnQASANAYAVIAgAbIAbAZIgGAIIghgPg");
	this.shape_2.setTransform(37.1,21.1);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.1,42.1);


(lib.Group_16_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AFdDeQgTgKgVgMIgzgcQg1gdhIgtInok1IgYgNIgKgEIADgKIAKACQAKABATAFQAdAJAPAFQAnAQAPAHQAkAPAbAPQATAIAzAbIBHApIBHAsIBIAtIBDAvQA+AsA3AsIBPBDIAdAbIgGAIg");
	this.shape_2.setTransform(39.1,24);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78.1,47.9);


(lib.Group_15_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AEDCsQglgYgUgOInQkwIgygcIhLgoIADgJIA8AOIBvApIAhAPIAjARQAUAJAPAJQAyAbAXAPIBHAuIBHAxIBDAwIA9AxIA1AuIArApIAgAgQASASAJAMIgGAHg");
	this.shape_2.setTransform(38.9,24.9);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77.8,49.8);


(lib.Group_14_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AEZFoIgjgkIgtguIhsh3Qg+hHg2hFIhziOQg6hMgkg0Igkg1IgzhPIAJgGIAfAeIAjAjIAtAuQAtAvA+BHIB0COQA4BCA6BMIBeCBIAkA1IAcApIAXAlIgIAGg");
	this.shape_2.setTransform(32,39.1);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,78.1);


(lib.Group_13_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("Ah+iDQgzhIgog8Ig9hgIgWgmIAIgGIAfAfIBOBTQBtB5BqCRQA/BRAtBDIAvBGIAoBBIAhA3IAXAsIAOAeIAEAKIgIAFg");
	this.shape_2.setTransform(30.2,40.4);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,80.9);


(lib.Group_12_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("ABfCiQhEhQgwhBIhyiRQg+hTghgzIg/hgIgXgmIAIgGIBwByQArAuBABNIB0CRQA7BKA1BJIAyBGIArBAIBVCIIgIAGg");
	this.shape_2.setTransform(31.7,40.4);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,80.7);


(lib.Group_11_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AFEEvIgqgYQgVgMgggWIg9gqIhBgzIhEg4IiFh2Ig/g9Qg6g5gyg4IhIhUIgZghIAHgHIAhAZICPBzIF/FZIA1AxIAuApIAkAfIAgAaIgFAJIgmgSg");
	this.shape_2.setTransform(36.8,32.2);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.6,64.3);


(lib.Group_10_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AEfEdIgzgnIg7gvIhAg2Qg5gxhNhIIiEh7QhHhGgogsIhnh2IAHgHIAjAZIBaBEQA3AsBDA6ICFB6QBLBEA4A4IA8A7ICACJIAdAgIgHAIg");
	this.shape_2.setTransform(36.8,33.9);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.7,67.9);


(lib.Group_9_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AFJE7QgagRgPgLIgzgnIh9hkIhFg7IjHi6QhAg+gwg0IhLhVIgcghIAIgIIBKA3IAyAoQArAiBQBEIBEA7IBBA/QA9A2BIBGIDeDfIgGAJg");
	this.shape_2.setTransform(37.2,33.8);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.4,67.7);


(lib.Group_8_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AELEMImGlvQg4g3grgtIhbhnIAHgIIAgAVIBRA6QA3ApA3AvQAeAZAeAcQAfAeAbAaQBCA+AvAzIAyA4IAqA0QAOASAUAcQAKAPANAXQAJAPAEAKIAEAKIgJAFg");
	this.shape_2.setTransform(31.5,31.1);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,62.3);


(lib.Group_7_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AEsEqIhNhHIg0guIkxkbQhDhDglgoIhihtIAHgHIAiAWIAlAbIAwAkQA1AoA/A2IB9ByIA+A8IA7A8IBkBwIAlAvIAwBJIgIAGIgdgcg");
	this.shape_2.setTransform(33.7,32.7);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.5,65.3);


(lib.Group_6_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AEcEpQgIgDgKgHIgUgMQgZgQgXgSQgdgUgagWQgVgQglghIg9g3QgZgZghgiIhyh2Qgzg5gpg2IgjguIgaglIgWggIAHgHIAfAaIBMBDIAyAuIA2A1IFeFjIATATIAfAeIAdAaIgFAIIgjgSg");
	this.shape_2.setTransform(32.5,31.6);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.9,63.2);


(lib.Group_5_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("ACdC/Ig5g1QhGhDgxgzIh1h5Qg2g7gsgzIhChSIgYggIAIgHQAMAIATAQIAkAcIAtAnQAvAmBAA9IA7A5IA7A+ICoCzIAtA3IAlAtIAbAlIAWAiIgHAGg");
	this.shape_2.setTransform(32.5,33.4);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65,66.7);


(lib.Group_4_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("ABmCJQhEhAg0g1IisixQgUgWgagfIhEhSIgYggIAHgHIAhAYQAVAQAPANIAtAlQA4AvA3A0IA9A6IA8A8ICqC0IAuA1IAlAvIAcAlIAXAhIgIAGg");
	this.shape_2.setTransform(33,33.2);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.9,66.5);


(lib.Group_3_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C20000").s().p("AELD0QgSgPgKgLIj2jQIg5guIg2gvQg2gygnglIgkgkIgcgcQgPgQgJgKIAHgIIAeARIAiAUQAQAJAcATQAtAeA7AsICoCNIA1AyIAvAxIAWAYIATAWIAfApIAoBBIgJAGg");
	this.shape_2.setTransform(30,26.9);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,53.9);


(lib.Group_2_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C20000").s().p("AEpEGIghgbIgrgkIg0goIh2heIg9g0Ig+gxIg8gzQg8g0gsgpIhHhFIgagbIAGgJIBGAqIAwAeQA5AlA5ArIA/AwIA9A0IA+AzIA6A1IA1AzIAuAxQAaAcALAOIAbAiIAWAgIgIAHg");
	this.shape_3.setTransform(33.4,28.6);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,57.2);


(lib.Group_1_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C20000").s().p("AEWEFQgPgGgWgNIgvgbQgdgRgZgSQghgXgYgTIg7gvQgYgVgigeIg5gzQgZgYgdgdIgwg0IgqgvIhRhoIAIgHIBnBQQBdBMB3BwID7DgIAfAaIAcAWIgFAJg");
	this.shape_3.setTransform(31.7,27.6);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,55.2);


(lib.Group_0_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C20000").s().p("ABkB9QhThHgjghIh0hqQg8g7glgnIgmgpIgcggIgYgdIAHgIIBwBOQA3AqA1AsIA7AzIA6A1ICnCgIAsAwIAmApIAcAhIAWAeIgIAHg");
	this.shape_3.setTransform(32.3,29.4);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.5,58.9);


(lib.Group_23 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C20000").s().p("ABmB8QhAg1g3gzIh2hoQg6g4gpgqIhbhmIAHgHIAfAUIAkAYIAtAhQA2AnA4AuIA8AyIA7A2ICpCeIAuAwIAlAqQALALARAVIAXAfIgHAGg");
	this.shape_3.setTransform(32.7,29.3);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.4,58.5);


(lib.Group_2_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C20000").s().p("AwbRUIBYhiQCHiYBhhpQDNjhB9iIIF/mZQA+hGCDiJIITooICLiLIDHjHIAIAIItcOCIjBDPIwSRcg");
	this.shape_4.setTransform(105.2,111.5);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210.4,223);


(lib.Group_1_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C20000").s().p("AwURSIAVgcIA5hNIBdh3QA6hKBAhOICUixQBchsBMhXIC4jOIDAjOIDDjOIDAjFIC5i0ICnifQA1gxBchSIBxhjIBjhWIAIAHIhVBkQg8BHgnArIiBCRIiZCtIisC/Il6GZQgrAziTCdIi+DIQhiBmhRBSIiiCkQgjAjhpBlQg/A+gtArIhhBZg");
	this.shape_4.setTransform(104.6,111.4);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,209.1,222.7);


(lib.Group_0_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C20000").s().p("AwtQiIFzkmICviTIBghRIBjhVQBZhNB0hpIDNi/IBmhgIBkhiIBhhjQAZgYBEhKQBohuBDhPQBPhaBEhVIA+hRIA2hKIAvhCIAmg4QALgRASgeIAnhAIAJAFIhmCrQgKAQgjA0Ig1BLIg9BSQhABThQBgQheBvhMBRQhEBJgZAZIhhBkIgxAyQgdAbgWAUIhmBjQhYBTh2BsQhrBfhjBWQhGA8h/BoQhNA/hmBRQh1BcibB0QhDAygnAbg");
	this.shape_4.setTransform(107.1,106.7);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214.1,213.3);


(lib.Group_24 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C20000").s().p("AwtQiIMyrTIEzkcQCViLA2g2QBKhIAYgYIC5i+QAegfA2g8QAegfAxg4ICJihIA5hIIAxg/IBxijIAJAFIguBaIhcCbQgIAMgsBAIijDbIgmAvQgzA8geAkIgsAxIgsAxIhcBkIhhBkQhfBfhrBmIhoBhIhnBfQhlBahrBZQhsBchaBGIi2CNQhOA8hOA3Ih7BXQhDAvgpAZg");
	this.shape_4.setTransform(107.1,106.7);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214.1,213.4);


(lib.Group_2_5 = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C20000").s().p("AwbRUIBYhiQCHiXBhhqIFKlpIF/mZIDBjPIITooICLiKIDHjIIAIAIItcOCIjBDPIjDDOIi8DKIqTLEg");
	this.shape_5.setTransform(105.2,111.5);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210.4,223.1);


(lib.Group_1_5 = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C20000").s().p("AwURSIC1jXIB/iUQA8hGBchnIFkmLIDBjQIDBjOIF0l+ICjijIFYlIIAIAHIlGFbIidCpIosJTIi/DQIqQK5IjEDKg");
	this.shape_5.setTransform(104.6,111.4);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,209.1,222.7);


(lib.Group_0_5 = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C20000").s().p("AwtQiIFyknQBZhIBXhKIDDimQBUhJB4hsIGYmCIBhhjIBdhiQBZheBThfQBRhdBBhTQAOgQASgZIAegnIA2hKIAvhCIAmg5IAdguIAnhAIAJAFIhmCrIgtBEIgZAlIgcAmQgkAygZAgQhABThQBgQhVBlhVBbIhdBiIhhBkIhkBhIhmBjQhIBEiGB7Qh5BrhWBJQhFA9h/BoQhlBShOA+Qh2BdibBzQhCAygnAbg");
	this.shape_5.setTransform(107,106.7);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214.1,213.4);


(lib.Group_25 = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C20000").s().p("AwtQjILUpzQA3gwAtgqIBohcIDMi/QBwhnBbhaIBihiIC3i+QAogqAtgxIBOhZIAlgrIBjh3QAsg4AMgQIAwhAIBvilIAJAFIhhCuIgsBEQgMATgoA6IiACrIhMBcQgzA9gfAjIi0DEIhgBkQhbBahwBqIhoBhIhmBgQh6BshVBHQhXBLhvBZIi0COQhMA6hPA7QgwAjhKA0IhPA3IgcATg");
	this.shape_5.setTransform(107.1,106.7);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214.1,213.3);


(lib.butt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("View outside", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 120;
	this.text.setTransform(59.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// Layer 1
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

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(2,1,1).p("AJnjGIAAGNIzNAAIAAmNg");
	this.shape_3.setTransform(61.5,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,125,48.6);


(lib.butt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("View inside", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 120;
	this.text.setTransform(59.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// Layer 1
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

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(2,1,1).p("AJnjGIAAGNIzNAAIAAmNg");
	this.shape_3.setTransform(61.5,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,125,48.6);


(lib.butt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.text = new cjs.Text("Severe\nasthma", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 121;
	this.text.setTransform(59.5,2.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// Layer 2
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
p.nominalBounds = new cjs.Rectangle(-1,-1,125,41.8);


(lib.butt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Moderate \nasthma", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 121;
	this.text.setTransform(59.5,3.2);

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
p.nominalBounds = new cjs.Rectangle(-1,-1,125,41.8);


(lib.butt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.text = new cjs.Text("Normal lungs", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 120;
	this.text.setTransform(59.3,8.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// Layer 2
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

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(2,1,1).p("AJnjGIAAGNIzNAAIAAmNg");
	this.shape_3.setTransform(61.5,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,125,46);


(lib.arrowwhite = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEikwIlmBVQA5BCADgBQABAAiNCKQiNCIABgBQABAABRBdQBSBdABgBQABAAB6ibQB8iYABgBQABAAAaAaQAbAcABgBQABAAA2ivQA2ixABgBg");
	this.shape.setTransform(29,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjODUQhRhdgBAAICMiHQCNiKgBABQgDAAg6hCIFmhVQAAABg2CxQg2CvgBAAQgBABgbgcQgagagBAAIh9CaQh6CagBABIgBAAQgBAAhRhdg");
	this.shape_1.setTransform(29,30.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,60,63);


(lib.lungspair = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(132,91.6,1,1,0,0,0,12.1,28.1);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(121.1,83.5,1,1,0,0,0,19.7,28.1);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(11.4,101.1,1,1,0,0,0,10.1,17.2);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(16.8,70.7,1,1,0,0,0,14.2,13.2);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(22.7,93.2,1,1,0,0,0,22.3,14.3);
	this.instance_4.alpha = 0.199;

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(34.9,34.3,1,1,0,0,0,21.6,32.6);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(33.4,61.1,1,1,0,0,0,26.6,10.8);
	this.instance_6.alpha = 0.199;

	this.instance_7 = new lib.Path_7();
	this.instance_7.setTransform(111.8,42.6,1,1,0,0,0,24.4,39.6);
	this.instance_7.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,0,0,4).p("ADzpSQgkAJgyAZQhlAyhJBQQhTBahdCxQhWCjgOBJQgOBKgIDAQgJDJAOASQApA0AzgVQAFgDBGgpQA7gjA2gPQAUgGBagVQA0gMAbgOQApgWAMgQQASgYgJgrQgdiGBChfQAkg2AQiMQAOh/gLg6QgIgsAAgUQABgLAFgQQAOgngJhWQgLhvg+AEg");
	this.shape.setTransform(32,59.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0AFCC").s().p("Ak2IuQgOgSAJjJQAIjAAOhKQAOhJBWijQBdixBThaQBJhQBlgyQAygZAkgJQA+gEALBvQAJBWgOAnQgFAQgBALQAAAUAIAsQALA6gOB/QgQCMgkA2QhCBfAdCGQAJArgSAYQgMAQgpAWQgbAOg0AMIhuAbQg2APg7AjIhLAsQgPAGgOAAQgiAAgdglg");
	this.shape_1.setTransform(32,59.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,0,0,4).p("Aj5pSIBZAiQBnAyBKBRQBWBZBgCyQBYCiAOBKQAOBKAJDAQAJDIgPASQgqA0g0gVQgGgChHgqQg9gjg3gPQgRgEhggXQg1gMgcgOQgqgVgNgQQgSgYAJgsQAdiFhChgQgmg1gQiNQgOh+ALg7QAJgrgBgUQAAgLgGgRQgEgJgCgjQgDgrAEgmQALhvBAAEg");
	this.shape_2.setTransform(111.2,61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0AFCC").s().p("ADgJNQgGgChHgqQg9gjg3gPIhxgbQg1gMgcgOQgqgVgNgQQgSgYAJgsQAdiFhChgQgmg1gQiNQgOh+ALg7QAJgrgBgUQAAgLgGgRQgEgJgCgjQgDgrAEgmQALhvBAAEIBZAiQBnAyBKBRQBWBZBgCyQBYCiAOBKQAOBKAJDAQAJDIgPASQgeAlgjAAQgOAAgPgGg");
	this.shape_3.setTransform(111.2,61.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,146,122.8);


(lib.Path_22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_20();
	this.instance.setTransform(38.5,32.1,1,1,0,0,0,38.5,32.1);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,64.3);


(lib.Path_21 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group();
	this.instance.setTransform(36.6,32.8,1,1,0,0,0,36.6,32.8);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.4,65.5);


(lib.Path_20_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_0();
	this.instance.setTransform(36.2,32.9,1,1,0,0,0,36.2,32.9);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.5,65.9);


(lib.Path_19_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_1();
	this.instance.setTransform(35.7,31.1,1,1,0,0,0,35.7,31.1);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.5,62.2);


(lib.Path_18_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_2();
	this.instance.setTransform(37.5,32.1,1,1,0,0,0,37.5,32.1);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.9,64.2);


(lib.Path_17_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_3();
	this.instance.setTransform(34,30.4,1,1,0,0,0,34,30.4);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,60.9);


(lib.Path_16_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_4();
	this.instance.setTransform(35.5,36.7,1,1,0,0,0,35.5,36.7);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.9,73.5);


(lib.Path_15_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_5();
	this.instance.setTransform(35,36.9,1,1,0,0,0,35,36.9);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,73.7);


(lib.Path_14_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_6();
	this.instance.setTransform(35,35.1,1,1,0,0,0,35,35.1);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69.9,70.2);


(lib.Path_13_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_7();
	this.instance.setTransform(36.2,36.1,1,1,0,0,0,36.2,36.1);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.5,72.3);


(lib.Path_12_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_8();
	this.instance.setTransform(34,34.6,1,1,0,0,0,34,34.6);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,69.3);


(lib.Path_11_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_9();
	this.instance.setTransform(40.7,37.3,1,1,0,0,0,40.7,37.3);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81.4,74.7);


(lib.Path_10_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_10();
	this.instance.setTransform(40.3,37.4,1,1,0,0,0,40.3,37.4);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.7,74.9);


(lib.Path_9_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_11();
	this.instance.setTransform(40.2,35.6,1,1,0,0,0,40.2,35.6);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.6,71.3);


(lib.Path_8_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_12();
	this.instance.setTransform(35.2,43.9,1,1,0,0,0,35.2,43.9);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.5,87.7);


(lib.Path_7_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_13();
	this.instance.setTransform(33.6,43.9,1,1,0,0,0,33.6,43.9);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.4,87.9);


(lib.Path_6_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_14();
	this.instance.setTransform(35.5,42.5,1,1,0,0,0,35.5,42.5);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,85.1);


(lib.Path_5_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_15();
	this.instance.setTransform(42.4,26.9,1,1,0,0,0,42.4,26.9);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84.7,53.8);


(lib.Path_4_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_16();
	this.instance.setTransform(42.6,25.9,1,1,0,0,0,42.6,25.9);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85.1,51.9);


(lib.Path_3_0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_17();
	this.instance.setTransform(40.6,23.1,1,1,0,0,0,40.6,23.1);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81.1,46.1);


(lib.Path_2_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_18();
	this.instance.setTransform(37.5,32.8,1,1,0,0,0,37.5,32.8);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75,65.6);


(lib.Path_1_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_19();
	this.instance.setTransform(35.9,32.1,1,1,0,0,0,35.9,32.1);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.9,64.4);


(lib.Path_3_5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_21();
	this.instance.setTransform(101.6,103,1,1,0,0,0,101.6,103);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203.3,206.2);


(lib.Path_2_5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_0_1();
	this.instance.setTransform(101.6,103,1,1,0,0,0,101.6,103);
	this.instance.alpha = 0.719;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203.3,206.2);


(lib.Path_1_5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_1_1();
	this.instance.setTransform(103.9,113,1,1,0,0,0,103.9,113);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,207.8,226.2);


(lib.Path_23 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_2_1();
	this.instance.setTransform(103.9,113,1,1,0,0,0,103.9,113);
	this.instance.alpha = 0.719;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,207.8,226.2);


(lib.Path_21_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_22();
	this.instance_1.setTransform(32.6,29.2,1,1,0,0,0,32.6,29.2);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.4,58.5);


(lib.Path_20_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_0_2();
	this.instance_1.setTransform(32.2,29.4,1,1,0,0,0,32.2,29.4);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.5,58.9);


(lib.Path_19_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_1_2();
	this.instance_1.setTransform(31.7,27.6,1,1,0,0,0,31.7,27.6);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,55.2);


(lib.Path_18_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_2_2();
	this.instance_1.setTransform(33.4,28.6,1,1,0,0,0,33.4,28.6);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,57.2);


(lib.Path_17_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_3_1();
	this.instance_1.setTransform(30,26.9,1,1,0,0,0,30,26.9);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,53.9);


(lib.Path_16_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_4_1();
	this.instance_1.setTransform(33,33.2,1,1,0,0,0,33,33.2);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.9,66.5);


(lib.Path_15_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_5_1();
	this.instance_1.setTransform(32.5,33.4,1,1,0,0,0,32.5,33.4);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65,66.7);


(lib.Path_14_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_6_1();
	this.instance_1.setTransform(32.5,31.6,1,1,0,0,0,32.5,31.6);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.9,63.2);


(lib.Path_13_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_7_1();
	this.instance_1.setTransform(33.7,32.6,1,1,0,0,0,33.7,32.6);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.5,65.3);


(lib.Path_12_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_8_1();
	this.instance_1.setTransform(31.4,31.1,1,1,0,0,0,31.4,31.1);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,62.3);


(lib.Path_11_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_9_1();
	this.instance_1.setTransform(37.2,33.8,1,1,0,0,0,37.2,33.8);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.4,67.7);


(lib.Path_10_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_10_1();
	this.instance_1.setTransform(36.8,33.9,1,1,0,0,0,36.8,33.9);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.7,67.9);


(lib.Path_9_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_11_1();
	this.instance_1.setTransform(36.8,32.1,1,1,0,0,0,36.8,32.1);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.6,64.3);


(lib.Path_8_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_12_1();
	this.instance_1.setTransform(31.7,40.4,1,1,0,0,0,31.7,40.4);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,80.7);


(lib.Path_7_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_13_1();
	this.instance_1.setTransform(30.2,40.4,1,1,0,0,0,30.2,40.4);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,80.9);


(lib.Path_6_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_14_1();
	this.instance_1.setTransform(32,39.1,1,1,0,0,0,32,39.1);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,78.1);


(lib.Path_5_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_15_1();
	this.instance_1.setTransform(38.9,24.9,1,1,0,0,0,38.9,24.9);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77.8,49.8);


(lib.Path_4_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_16_1();
	this.instance_1.setTransform(39.1,23.9,1,1,0,0,0,39.1,23.9);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78.1,47.9);


(lib.Path_3_0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_17_1();
	this.instance_1.setTransform(37.1,21.1,1,1,0,0,0,37.1,21.1);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.1,42.1);


(lib.Path_2_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_18_1();
	this.instance_1.setTransform(33,29.8,1,1,0,0,0,33,29.8);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,59.6);


(lib.Path_1_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_19_1();
	this.instance_1.setTransform(31.4,29.2,1,1,0,0,0,31.4,29.2);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.9,58.4);


(lib.Path_0_3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_20_1();
	this.instance.setTransform(34,29.1,1,1,0,0,0,34,29.1);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,58.3);


(lib.Path_21_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_23();
	this.instance_2.setTransform(32.6,29.2,1,1,0,0,0,32.6,29.2);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.4,58.5);


(lib.Path_20_3 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_0_3();
	this.instance_2.setTransform(32.2,29.4,1,1,0,0,0,32.2,29.4);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.5,58.9);


(lib.Path_19_3 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_1_3();
	this.instance_2.setTransform(31.7,27.6,1,1,0,0,0,31.7,27.6);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,55.2);


(lib.Path_18_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_2_3();
	this.instance.setTransform(33.4,28.6,1,1,0,0,0,33.4,28.6);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,57.2);


(lib.Path_17_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_3_2();
	this.instance_2.setTransform(30,26.9,1,1,0,0,0,30,26.9);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,53.9);


(lib.Path_16_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_4_2();
	this.instance_2.setTransform(33,33.2,1,1,0,0,0,33,33.2);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.9,66.5);


(lib.Path_15_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_5_2();
	this.instance_2.setTransform(32.5,33.4,1,1,0,0,0,32.5,33.4);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65,66.7);


(lib.Path_14_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_6_2();
	this.instance_2.setTransform(32.5,31.6,1,1,0,0,0,32.5,31.6);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.9,63.2);


(lib.Path_13_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_7_2();
	this.instance_2.setTransform(33.7,32.6,1,1,0,0,0,33.7,32.6);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.5,65.3);


(lib.Path_12_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_8_2();
	this.instance_2.setTransform(31.4,31.1,1,1,0,0,0,31.4,31.1);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,62.3);


(lib.Path_11_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_9_2();
	this.instance_2.setTransform(37.2,33.8,1,1,0,0,0,37.2,33.8);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.4,67.7);


(lib.Path_10_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_10_2();
	this.instance_2.setTransform(36.8,33.9,1,1,0,0,0,36.8,33.9);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.7,67.9);


(lib.Path_9_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_11_2();
	this.instance_2.setTransform(36.8,32.1,1,1,0,0,0,36.8,32.1);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.6,64.3);


(lib.Path_8_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_12_2();
	this.instance_2.setTransform(31.7,40.4,1,1,0,0,0,31.7,40.4);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,80.7);


(lib.Path_7_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_13_2();
	this.instance_2.setTransform(30.2,40.4,1,1,0,0,0,30.2,40.4);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,80.9);


(lib.Path_6_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_14_2();
	this.instance_2.setTransform(32,39.1,1,1,0,0,0,32,39.1);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,78.1);


(lib.Path_5_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_15_2();
	this.instance_2.setTransform(38.9,24.9,1,1,0,0,0,38.9,24.9);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77.8,49.8);


(lib.Path_4_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_16_2();
	this.instance_2.setTransform(39.1,23.9,1,1,0,0,0,39.1,23.9);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78.1,47.9);


(lib.Path_3_0_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_17_2();
	this.instance_2.setTransform(37.1,21.1,1,1,0,0,0,37.1,21.1);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.1,42.1);


(lib.Path_2_0_3 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_18_2();
	this.instance_2.setTransform(33,29.8,1,1,0,0,0,33,29.8);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,59.6);


(lib.Path_1_0_3 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_19_2();
	this.instance_2.setTransform(31.4,29.2,1,1,0,0,0,31.4,29.2);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.9,58.4);


(lib.Path_0_4 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_20_2();
	this.instance_1.setTransform(34,29.1,1,1,0,0,0,34,29.1);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,58.3);


(lib.Path_5_5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_24();
	this.instance.setTransform(107,106.7,1,1,0,0,0,107,106.7);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214.1,213.4);


(lib.Path_4_5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_0_4();
	this.instance.setTransform(107,106.7,1,1,0,0,0,107,106.7);
	this.instance.alpha = 0.719;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214.1,213.3);


(lib.Path_3_6 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_1_4();
	this.instance_1.setTransform(104.5,111.4,1,1,0,0,0,104.5,111.4);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,209.1,222.7);


(lib.Path_2_6 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_2_4();
	this.instance_1.setTransform(105.2,111.5,1,1,0,0,0,105.2,111.5);
	this.instance_1.alpha = 0.719;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210.4,223);


(lib.Path_5_6 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_25();
	this.instance_1.setTransform(107,106.7,1,1,0,0,0,107,106.7);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214.1,213.3);


(lib.Path_4_6 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Group_0_5();
	this.instance_1.setTransform(107,106.7,1,1,0,0,0,107,106.7);
	this.instance_1.alpha = 0.719;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214.1,213.4);


(lib.Path_3_7 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_1_5();
	this.instance_2.setTransform(104.5,111.4,1,1,0,0,0,104.5,111.4);
	this.instance_2.alpha = 0.5;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,209.1,222.7);


(lib.Path_2_7 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Group_2_5();
	this.instance_2.setTransform(105.2,111.5,1,1,0,0,0,105.2,111.5);
	this.instance_2.alpha = 0.719;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210.4,223.1);


(lib.outsidesevere = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,0,4).p("AU8AAQAAIrmJGIQmIGJorAAQopAAmJmJQmImIAAorQAAoqGImIQGJmJIpAAQIrAAGIGJQGJGIAAIqg");
	this.shape.setTransform(136.2,143.6);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoMTdQjyhni7i7Qi7i7hnjyQhqj7AAkTQAAkSBqj6QBnjyC7i8QC7i6DyhnQD7hrERAAQETAAD6BrQDzBnC7C6QC7C8BmDyQBqD6AAESQAAEThqD7QhmDyi7C7Qi7C7jzBnQj6BpkTAAQkRAAj7hpg");
	mask.setTransform(135.7,143.9);

	// bronchi
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#241F20").p("AVGAAQAAkRhqj7Qhmjyi7i7Qi7i8jzhmQj6hrkTAAQkRAAj7BrQjyBmi7C8Qi7C7hnDyQhqD7AAERQAAETBqD7QBnDyC7C7QC7C7DyBnQD7BqERAAQETAAD6hqQDzhnC7i7QC7i7BmjyQBqj7AAkTg");
	this.shape_1.setTransform(135.7,143.3);

	this.instance = new lib.Path_0_3();
	this.instance.setTransform(206.4,68.2,1,1,0,0,0,34,29.1);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_1_0_2();
	this.instance_1.setTransform(215.4,57.5,1,1,0,0,0,31.4,29.2);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_2_0_2();
	this.instance_2.setTransform(210.6,62.9,1,1,0,0,0,33,29.8);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_3_0_1();
	this.instance_3.setTransform(187.8,85.1,1,1,0,0,0,37.1,21.1);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Path_4_0_1();
	this.instance_4.setTransform(192.8,80.4,1,1,0,0,0,39.1,23.9);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Path_5_0_1();
	this.instance_5.setTransform(197.9,76.1,1,1,0,0,0,38.9,24.9);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Path_6_0_1();
	this.instance_6.setTransform(70.3,204.2,1,1,0,0,0,32,39.1);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.Path_7_0_1();
	this.instance_7.setTransform(60.6,215.3,1,1,0,0,0,30.2,40.4);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.Path_8_0_1();
	this.instance_8.setTransform(65.9,209.9,1,1,0,0,0,31.7,40.4);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Path_9_0_1();
	this.instance_9.setTransform(88.5,184.4,1,1,0,0,0,36.8,32.1);
	this.instance_9.alpha = 0.5;

	this.instance_10 = new lib.Path_10_0_1();
	this.instance_10.setTransform(82.9,189.5,1,1,0,0,0,36.8,33.9);
	this.instance_10.alpha = 0.5;

	this.instance_11 = new lib.Path_11_0_1();
	this.instance_11.setTransform(78.6,193.8,1,1,0,0,0,37.2,33.8);
	this.instance_11.alpha = 0.5;

	this.instance_12 = new lib.Path_12_0_1();
	this.instance_12.setTransform(115.2,160.2,1,1,0,0,0,31.4,31.1);
	this.instance_12.alpha = 0.5;

	this.instance_13 = new lib.Path_13_0_1();
	this.instance_13.setTransform(119.1,155.7,1,1,0,0,0,33.7,32.6);
	this.instance_13.alpha = 0.5;

	this.instance_14 = new lib.Path_14_0_1();
	this.instance_14.setTransform(132.4,141.3,1,1,0,0,0,32.5,31.6);
	this.instance_14.alpha = 0.5;

	this.instance_15 = new lib.Path_15_0_1();
	this.instance_15.setTransform(126.8,146.5,1,1,0,0,0,32.5,33.4);
	this.instance_15.alpha = 0.5;

	this.instance_16 = new lib.Path_16_0_1();
	this.instance_16.setTransform(122.5,150.6,1,1,0,0,0,33,33.2);
	this.instance_16.alpha = 0.5;

	this.instance_17 = new lib.Path_17_0_1();
	this.instance_17.setTransform(151.5,125.1,1,1,0,0,0,30,26.9);
	this.instance_17.alpha = 0.5;

	this.instance_18 = new lib.Path_18_0_1();
	this.instance_18.setTransform(156.1,120.5,1,1,0,0,0,33.4,28.6);
	this.instance_18.alpha = 0.5;

	this.instance_19 = new lib.Path_19_2();
	this.instance_19.setTransform(168.4,104.4,1,1,0,0,0,31.7,27.6);
	this.instance_19.alpha = 0.5;

	this.instance_20 = new lib.Path_20_2();
	this.instance_20.setTransform(163.3,110.1,1,1,0,0,0,32.2,29.4);
	this.instance_20.alpha = 0.5;

	this.instance_21 = new lib.Path_21_1();
	this.instance_21.setTransform(159.1,114.8,1,1,0,0,0,32.6,29.2);
	this.instance_21.alpha = 0.5;

	this.instance_22 = new lib.Path_19();
	this.instance_22.setTransform(85.2,233.6,1,1,0,0,0,14.5,20.4);
	this.instance_22.alpha = 0.199;

	this.instance_23 = new lib.Path_1_3();
	this.instance_23.setTransform(99.7,227.1,1,1,0,0,0,10.8,12);
	this.instance_23.alpha = 0.102;

	this.instance_24 = new lib.Path_2_3();
	this.instance_24.setTransform(69.2,252.7,1,1,0,0,0,11.8,13.8);
	this.instance_24.alpha = 0.102;

	this.instance_25 = new lib.Path_3_3();
	this.instance_25.setTransform(24.4,201.9,1,1,0,0,0,17.4,18.9);
	this.instance_25.alpha = 0.199;

	this.instance_26 = new lib.Path_4_3();
	this.instance_26.setTransform(80.8,155,1,1,0,0,0,18.2,17.6);
	this.instance_26.alpha = 0.199;

	this.instance_27 = new lib.Path_5_3();
	this.instance_27.setTransform(122.6,112.1,1,1,0,0,0,15,11.8);
	this.instance_27.alpha = 0.199;

	this.instance_28 = new lib.Path_6_3();
	this.instance_28.setTransform(159,152,1,1,0,0,0,16,12.2);
	this.instance_28.alpha = 0.102;

	this.instance_29 = new lib.Path_7_3();
	this.instance_29.setTransform(200.8,111.3,1,1,0,0,0,16.3,13.3);
	this.instance_29.alpha = 0.102;

	this.instance_30 = new lib.Path_8_2();
	this.instance_30.setTransform(158.5,82.5,1,1,0,0,0,14.8,11.6);
	this.instance_30.alpha = 0.199;

	this.instance_31 = new lib.Path_9_2();
	this.instance_31.setTransform(103.8,208.5,1,1,0,0,0,18.6,16.5);
	this.instance_31.alpha = 0.199;

	this.instance_32 = new lib.Path_10_1();
	this.instance_32.setTransform(113.9,194.7,1,1,0,0,0,21.1,13.2);
	this.instance_32.alpha = 0.199;

	this.instance_33 = new lib.Path_11_1();
	this.instance_33.setTransform(144.6,173.3,1,1,0,0,0,17.9,16.6);
	this.instance_33.alpha = 0.199;

	this.instance_34 = new lib.Path_12_1();
	this.instance_34.setTransform(180.8,133.4,1,1,0,0,0,17.7,17.7);
	this.instance_34.alpha = 0.199;

	this.instance_35 = new lib.Path_13_1();
	this.instance_35.setTransform(226.8,86.9,1,1,0,0,0,20.8,17.9);
	this.instance_35.alpha = 0.199;

	this.instance_36 = new lib.Path_14_1();
	this.instance_36.setTransform(105.7,129.5,1,1,0,0,0,23.2,19);
	this.instance_36.alpha = 0.301;

	this.instance_37 = new lib.Path_15_1();
	this.instance_37.setTransform(136.3,95.3,1,1,0,0,0,18.6,19.4);
	this.instance_37.alpha = 0.301;

	this.instance_38 = new lib.Path_16_1();
	this.instance_38.setTransform(166.8,66.9,1,1,0,0,0,17.8,17.1);
	this.instance_38.alpha = 0.301;

	this.instance_39 = new lib.Path_17_1();
	this.instance_39.setTransform(208.1,32.2,1,1,0,0,0,18.3,18.8);
	this.instance_39.alpha = 0.301;

	this.instance_40 = new lib.Path_18_1();
	this.instance_40.setTransform(185.2,42,1,1,0,0,0,14.9,15.9);
	this.instance_40.alpha = 0.301;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("AEOGyQgPAAgUgDIgSgEIgKgEIgBgCIgDgBIjfiQQhphAh8hDIh1g+Ih3g8QgKgGgJgKQgIgIgEgNQgEgJgCgPQgCgMABgOQACgYAKgYIAVgrIABgBIABgCIAIgJQAFgFAGgEQAMgHANgEQAWgHAbgBQAbgBAWADIAYAGQAQAGAIAFIBZAtQArAUAxAVICIA5IkmirQgGgFgFgGQgIgKgFgOQgJgXgDgbQgBgeADgVQAEgdANgVIAIgLQAEgGAHgEQAMgJANgEQATgHAfgCQAagBAYAFQAMACAMAFIAMAHQAGAFACAIQAfApA2A5QAmApA3AzQBhBaBkBVQByBeBaBIIAgAaIABAAIAEAEIAEAFQAEAGADANQAEAdgJAqQgGAfgOAiQgPAlgRAYIgNAOIgBABIgGAFIgIAFQgPAIgTAFQgbAIgoAFQgdADgXAAIgPAAgAmKimQgYACgRAFIgSAIQgIAGgEAGIgUAmQgJAWgEATIgCAUIACAVQAEATAPAPQBjAsCLBHQB3A+BxBBIA3AiICrBuIAFADIADABIAOADIAfACQAdABAkgEQAlgFAZgHQASgGALgFIAFgEIAFgEIAKgLQARgYANgfQAMgfAHgeQAIgpgEgUQgCgJgCgDIgBgBIAAgBIgBAAIAAgBIghgaQh2hfhUhJQh3hohNhLQg2g1glgpQg0g5ggguIgBgCQgCgGgNgEQgJgCgNgBQgZgCgUADQgYADgTAHQgMAFgGAFIgGAGIgGAJQgJAQgEAYQgEAVACAYQACAaAHARQADAIAGAJIAGAGIACABIABABIAGAEIBTAxIDICAQATAOATAQIAZASIh8gpIhggjQgtgRgygUIhGggIgXgNIgBgBQgFgDgLgEIgVgEQgQgCgPAAIgMAAg");
	this.shape_2.setTransform(197.8,66.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF5300").s().p("ADTGcQjHiJkKiNIjkhyQgjgbAGg0QAFgsAdgtQATgeBCgCQA9gCAZATQA5AiCkBAQBTAgBFAZQgggaiYhcIiThWQgdgPgFhAQgFhCAegkQAXgcBFgBQBDgBAFAXQBQB0EQDtQCJB1B4BfQAYATgWBUQgWBUglAjQgcAahcAIQgcACgWAAQgvAAgPgLg");
	this.shape_3.setTransform(197.9,66);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#241F20").s().p("ADWGZQgUgIgKgJQgOgNgCgRIghgmIhJhHQgMgMgagXIhLhDIhPhCIkmjtIgCADQgNgHgHgOIgDgCIACgCQgFgLgBgQQgBgKACgTQADgQAEgMQAHgbANgbIAfgwQAJgNANgJQAIgGASgJQAagMAegFQAdgHAcACQAQAAAOADIAQAGQALAFAFAHIgBgBICICQQBHBMBDA/IBJBCQAgAcAsAhIBPA7IApAaQAYAOASAHIABABIABABQAQAKAJAUQAGAMAFAVQAFAggDAjQgEAjgKAeQgHASgHANQgIAPgLAOIgDADIgKAKIgQALQgMAHgUAGQgfAKgjAAQglgBgcgLgAkdmDQgbAGgWAKQgNAGgJAGQgKAHgHAJIgdArQgOAZgIAXQgKAcgCAXQgBARAFALIBIA2IFAEAIBLBFIBtBuQAQASAQAWIABABIAAABQAFAMAMAIQALAGAPAEQAYAFAigCQAigEAXgIQAPgFAKgHQAGgDAEgEIAEgEIABgBIABgBIACgDQAHgIAJgPQAEgIAHgSQALgeADgbQADgggDgZQgDgRgEgJQgFgNgIgGIACABQgWgKgXgPIgpgdIhzhdIj7jtQgggfgngnIhHhHQgDgFgNgDQgNgCgMAAIgEAAQgYAAgXAEg");
	this.shape_4.setTransform(158.5,114.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF5300").s().p("AEQGWQhWgBgKgtQhEhekYjnIkHjOQgLgXAKgsQAPg+Arg2QAeglBOgLQBKgLASAYID1D5QDuDgBqAvQAjAXgFBRQgFBTgsAxQgjAnhRAAIgEAAg");
	this.shape_5.setTransform(158.1,114.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#241F20").s().p("AC7HCIgRgDQgOgDgFgFIgBgBIgBgBIgagkIhph3Imtm1QgJgJgFgNQgFgMgCgSQgDgZAGgiQAGgdALgcQALgdAQgZQAKgOAJgKQAKgKAPgKQAbgPAegHQAggIAcACQASABANAFQAIACAHAFQAIAGAEAHQA6BIBGBSQA3BFBMBSIBFBJQAdAeAqAnQAgAfAqAkQAuAnAhAWIgBAAQANAHALASQAHAMAGASQAKAgACAfQACAggHAgQgDAQgHAQIgHAPIgHAKIgEAEQgJALgTAKQgMAHgSAGQgeAKgfAFQgjAGgcAAIgOABIgSgBgAkXmmQgeAJgUAMQgMAJgHAIQgIAIgJANQgOAUgMAcQgLAbgHAaQgHAcAAAbQAAAPAEALQAEAOAIAHIAAABICOCNQBBA+BQBRICPCRIBHBKIArAxIAXAdIAIACIAOACQAOABAPgBQAcgBAfgGQAhgGAZgIIAagLQAQgIAGgIIACgBIACgEIAEgFIAGgMQAGgNADgOQAHgdgCgdQgBgigHgYQgDgOgHgNQgHgNgJgGIgBgBQgjgZgrgoQgZgWgvgwQgggfgmgnIhFhJIiGiVQhAhFhGhRIgBgBIgBgBQgDgHgOgEQgKgEgPAAIgEAAQgZAAgZAGg");
	this.shape_6.setTransform(123,150.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF5300").s().p("ACgGuIgcgkQhKhajvjxIjhjeIAFADQghgWAQhTQAQhRAugyQAjglBEgIQBEgIANAcIDUD2QDrECBrBIQAiATAHBQQAIBSgjAsQgbAihgAPQgrAHgbAAQghAAgKgKg");
	this.shape_7.setTransform(122.9,150.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#241F20").s().p("AB3IlQgMgCgKgGQgOgHgDgLQgJgRgWghIj1lQIiSi7IiUi8QgIgIgEgNQgEgMgBgMQgCgPACgeQAFgtAOgsQARgxAZghQAUgaAQgKQATgMAdgEQApgDA0AOQAVAGAVAJIAVAJIAVANQAYAdAjAkIA9A/QAbAbAkAhIA+A9QBVBQArAnQBEA9BBA1QAjAaAhAZQAtAgAcAMIAAAAIABAAQAUAMANAbQAKAWACAYQADAZgGAXIgJAXIgLAQIgEAFQgQAQgcAHQgXAGgYAAQgaAAgUgFQgQgEgIgFIgCgBIgDgEIj4jPIgXgRQAKAkAQAlQAUAwAVAkQAZAtAbAfIAfAhIAkAbIAAgBQAKAGAJANQAFAJADANQAFATAAAbQgBAxgUAmIgNATQgHAJgNAHQgTAKgZADIgRABQgOAAgOgDgAlkoDQgVAEgNAIIgGAFIgBABIgFAGQgIAHgFAIQgYAegTApQgTAqgJAmQgEAVAAAUQABAZAKAKIABABIIWLMIAiAyIAAACQACAFALAFQAJADAKABQASACAWgDQAWgEAPgJQAIgFAFgGIAGgIIAFgIQASghACgtQAAgXgEgRQgGgWgMgHIgBAAIgmgdIgRgRIgQgSQgdglgYgrQgUgngSgwQgSgugKgsIgDgMIAKAGIAlAZIAkAaIBGA1IBFA3IBEA3IAQANQAFADALADQASAEAXAAQAYgBARgEQAWgGAKgLIABgCIACgCIADgEIAEgIQAFgJACgJQAFgRgBgWQgDgVgHgRQgKgUgNgHQgdgNgvgiQgjgaghgbQgygqhRhMQg5g2hFhEIg7g/Ih7h9Ig/g9QgEgEgNgFIgVgGQgSgEgXgEQgXgCgTAAQgWAAgSADg");
	this.shape_8.setTransform(77.3,203.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF5300").s().p("ABXIFQgjg/kNlmIkJlXQgegbAaheQAZhgA0gyQAkgjBYAPQBMAMAVAUIEKEOQEgETBdAnQAeAQAIAyQAIA1gdAjQgWAag5ADQgzABgSgOQj3jPgsgZIALAmQAOAuAUArQA9CIBUAzQAdAPgBA+QgCA/geAlQgWAcg3ABIgEAAQgxAAgGgXg");
	this.shape_9.setTransform(77.1,203.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#595959").ss(1,0,0,4).p("AJg1tQADAVgEAkQgHBHgkBJQgtBfhzCHQgRAVhXByQhGBbg2A6QghALgYAJQgsASANAgQAhBPhjBEQhWA8hzAKQgdACgZAiQgZAkAIAiQAVBahfBKQhHA3h7AnQhMAXgpAnQgtAtgWBSQgYBgh4BDQgJAEhcAuQg7AegeAYQg8AwhfAmQh3AwgJAEILjM7QA+hXA8hzQBGiDBkh+QB6iaBQgYQBWgbAkg+QAMgUAWhNQAghvAxg3QBAhIBvgGQBJgEAbhGQAJgWAGgiQAGgkABgEQAihvA4g1QA+g+BlgHQBPgGA4hCQAdgjAmhQQAshcB1hKQARgLBLgqQAzgdAYgUQA1gtAkgYg");
	this.shape_10.setTransform(131.8,135.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6DBC6").s().p("A0nI3QAJgFB3gwQBfglA8gwQAegYA7geIBlgzQB4hDAYhgQAWhSAsgsQAqgmBLgZQB7gmBIg3QBfhKgWhaQgHgiAZgkQAZgiAdgCQBzgLBWg7QBjhEghhQQgNgfAsgSQAYgKAhgKQA2g6BFhbQBXhyASgVQBziHAthfQAkhJAHhHQAEgkgDgVILIMZQgkAYg1AsQgYAUgzAdIhdA2Qh0BJgtBdQglBQgeAjQg3BBhQAHQhlAHg9A9Qg4A2giBvIgIAoQgFAigJAVQgcBHhIAEQhvAGhABHQgxA3ggBwQgWBNgNAUQgjA+hXAaQhQAZh5CaQhlB+hFCDQg8Bzg+BXg");
	this.shape_11.setTransform(131.9,136.1);

	this.shape_1.mask = this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = mask;

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,8.6,270.5,270.4);


(lib.outsideNormal = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,0,4).p("AU8AAQAAIrmJGIQmIGJorAAQopAAmJmJQmImIAAorQAAoqGImIQGJmJIpAAQIrAAGIGJQGJGIAAIqg");
	this.shape.setTransform(136.2,143.6);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoMTdQjyhni7i7Qi7i7hnjyQhqj7AAkTQAAkSBqj6QBnjyC7i8QC7i6DyhnQD7hrERAAQETAAD6BrQDzBnC7C6QC7C8BmDyQBqD6AAESQAAEThqD7QhmDyi7C7Qi7C7jzBnQj6BpkTAAQkRAAj7hpg");
	mask.setTransform(135.7,143.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#241F20").p("AVGAAQAAkShqj7Qhmjyi7i7Qi7i7jzhnQj6hqkTAAQkRAAj7BqQjyBni7C7Qi7C7hnDyQhqD7AAESQAAETBqD7QBnDyC7C7QC7C7DyBnQD7BqERAAQETAAD6hqQDzhnC7i7QC7i7BmjyQBqj7AAkTg");
	this.shape_1.setTransform(135.7,143.9);

	this.instance = new lib.Path_22();
	this.instance.setTransform(205.9,67.8,1,1,0,0,0,38.5,32.1);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_1_0_1();
	this.instance_1.setTransform(214.9,57,1,1,0,0,0,35.9,32.1);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_2_0_1();
	this.instance_2.setTransform(210.1,62.5,1,1,0,0,0,37.5,32.8);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_3_0();
	this.instance_3.setTransform(188.3,85.7,1,1,0,0,0,40.6,23.1);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.setTransform(193.3,80.9,1,1,0,0,0,42.6,25.9);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Path_5_0();
	this.instance_5.setTransform(198.4,76.7,1,1,0,0,0,42.4,26.9);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Path_6_0();
	this.instance_6.setTransform(69.8,204.1,1,1,0,0,0,35.5,42.5);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.Path_7_0();
	this.instance_7.setTransform(60,215.3,1,1,0,0,0,33.6,43.9);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.Path_8_0();
	this.instance_8.setTransform(65.4,209.9,1,1,0,0,0,35.2,43.9);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Path_9_0();
	this.instance_9.setTransform(87.9,184.4,1,1,0,0,0,40.2,35.6);
	this.instance_9.alpha = 0.5;

	this.instance_10 = new lib.Path_10_0();
	this.instance_10.setTransform(82.4,189.6,1,1,0,0,0,40.3,37.4);
	this.instance_10.alpha = 0.5;

	this.instance_11 = new lib.Path_11_0();
	this.instance_11.setTransform(78.1,193.8,1,1,0,0,0,40.7,37.3);
	this.instance_11.alpha = 0.5;

	this.instance_12 = new lib.Path_12_0();
	this.instance_12.setTransform(115.8,161.2,1,1,0,0,0,34,34.6);
	this.instance_12.alpha = 0.5;

	this.instance_13 = new lib.Path_13_0();
	this.instance_13.setTransform(119.6,156.8,1,1,0,0,0,36.2,36.1);
	this.instance_13.alpha = 0.5;

	this.instance_14 = new lib.Path_14_0();
	this.instance_14.setTransform(132.9,142.4,1,1,0,0,0,35,35.1);
	this.instance_14.alpha = 0.5;

	this.instance_15 = new lib.Path_15_0();
	this.instance_15.setTransform(127.2,147.5,1,1,0,0,0,35,36.9);
	this.instance_15.alpha = 0.5;

	this.instance_16 = new lib.Path_16_0();
	this.instance_16.setTransform(123,151.7,1,1,0,0,0,35.5,36.7);
	this.instance_16.alpha = 0.5;

	this.instance_17 = new lib.Path_17_0();
	this.instance_17.setTransform(151.5,125.2,1,1,0,0,0,34,30.4);
	this.instance_17.alpha = 0.5;

	this.instance_18 = new lib.Path_18_0();
	this.instance_18.setTransform(156.1,120.5,1,1,0,0,0,37.5,32.1);
	this.instance_18.alpha = 0.5;

	this.instance_19 = new lib.Path_19_1();
	this.instance_19.setTransform(168.4,104.4,1,1,0,0,0,35.7,31.1);
	this.instance_19.alpha = 0.5;

	this.instance_20 = new lib.Path_20_1();
	this.instance_20.setTransform(163.3,110.1,1,1,0,0,0,36.2,32.9);
	this.instance_20.alpha = 0.5;

	this.instance_21 = new lib.Path_21();
	this.instance_21.setTransform(159.1,115,1,1,0,0,0,36.6,32.8);
	this.instance_21.alpha = 0.5;

	this.instance_22 = new lib.Path_0_2();
	this.instance_22.setTransform(73.4,256.4,1,1,0,0,0,14.1,16.2);
	this.instance_22.alpha = 0.102;

	this.instance_23 = new lib.Path_1_2();
	this.instance_23.setTransform(99.7,227.7,1,1,0,0,0,10.8,12);
	this.instance_23.alpha = 0.102;

	this.instance_24 = new lib.Path_2_2();
	this.instance_24.setTransform(128.1,197.5,1,1,0,0,0,13.8,15.4);
	this.instance_24.alpha = 0.102;

	this.instance_25 = new lib.Path_3_2();
	this.instance_25.setTransform(23.1,199.2,1,1,0,0,0,18.4,20.5);
	this.instance_25.alpha = 0.199;

	this.instance_26 = new lib.Path_4_2();
	this.instance_26.setTransform(77.5,152.6,1,1,0,0,0,19.6,19.4);
	this.instance_26.alpha = 0.199;

	this.instance_27 = new lib.Path_5_2();
	this.instance_27.setTransform(121.7,111.1,1,1,0,0,0,15.7,12.8);
	this.instance_27.alpha = 0.199;

	this.instance_28 = new lib.Path_6_2();
	this.instance_28.setTransform(164,157.1,1,1,0,0,0,16.1,12.2);
	this.instance_28.alpha = 0.102;

	this.instance_29 = new lib.Path_7_2();
	this.instance_29.setTransform(206.4,115.8,1,1,0,0,0,17.8,14.7);
	this.instance_29.alpha = 0.102;

	this.instance_30 = new lib.Path_8_1();
	this.instance_30.setTransform(156.2,80.2,1,1,0,0,0,17.6,13.2);
	this.instance_30.alpha = 0.199;

	this.instance_31 = new lib.Path_9_1();
	this.instance_31.setTransform(88.1,237.6,1,1,0,0,0,18,22.5);
	this.instance_31.alpha = 0.199;

	this.instance_32 = new lib.Path_10();
	this.instance_32.setTransform(109.3,220.3,1,1,0,0,0,21.7,13.6);
	this.instance_32.alpha = 0.199;

	this.instance_33 = new lib.Path_11();
	this.instance_33.setTransform(149.1,177,1,1,0,0,0,20.4,19.8);
	this.instance_33.alpha = 0.199;

	this.instance_34 = new lib.Path_12();
	this.instance_34.setTransform(185.2,137.7,1,1,0,0,0,19.6,20.1);
	this.instance_34.alpha = 0.199;

	this.instance_35 = new lib.Path_13();
	this.instance_35.setTransform(228.6,89.8,1,1,0,0,0,21.9,19.2);
	this.instance_35.alpha = 0.199;

	this.instance_36 = new lib.Path_14();
	this.instance_36.setTransform(51.6,172.1,1,1,0,0,0,26.3,23.1);
	this.instance_36.alpha = 0.301;

	this.instance_37 = new lib.Path_15();
	this.instance_37.setTransform(99.2,127.9,1,1,0,0,0,20.6,21.6);
	this.instance_37.alpha = 0.301;

	this.instance_38 = new lib.Path_16();
	this.instance_38.setTransform(132.6,95.9,1,1,0,0,0,18.6,23.1);
	this.instance_38.alpha = 0.301;

	this.instance_39 = new lib.Path_17();
	this.instance_39.setTransform(167.8,65.2,1,1,0,0,0,22.6,17.2);
	this.instance_39.alpha = 0.301;

	this.instance_40 = new lib.Path_18();
	this.instance_40.setTransform(182.7,38.2,1,1,0,0,0,15.8,15.8);
	this.instance_40.alpha = 0.301;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("AEhHPIgLgCIgLgGIizh1QhEgqg0gfIh8hHIg+giIg/giQiMhKhyg2IgBAAQgKgFgEgMQgEgJABgMQACgSAHgVQAPgnAXgfIAbgeQAQgPARgJQAVgNATgDQAMgCAMACQANABAKAIIAxAbIE3CNIlPjGIgEgDQgDgCgDgEQgGgGgCgJQgEgNADgRQADgMAFgNQAKgZANgUQALgSASgVQAQgUAWgOQAYgOAWgHQAOgFAMAAQAIAAAGADQAJAFABAIQAfAqA+BAQAsAtA4A2QBbBUB6BpQBIA8CSB6IBOBAIADACIAEAGQAGALgCAOIgFAUQgLAbgaAmQgUAdgZAbQgKAMgQAPQgOANgQAJQgeAVgjAOQgUAIgQADIgSACIgDgBgAmRi+QgOADgQAJQgQAKgMALIgZAaQgKAMgNARQgOASgHAMQgKATgDAOQgBAKACAHQACAHAHAEQB5A5CGBGID8CHIB6BHIC3B0IACABIACAAIAGABQAGABAJgCQAOgDARgHQAegMAfgVQAPgKALgLIAZgYQAXgZAVgdQAZglAIgXQAEgIAAgGQABgHgCgEIAAgBIgCgCIhMg+QhuhbhrhdQgwgpg7g2QhHhBghghQgsgsg3g6Qg+hCgegsIAAgBIgBgBQgBgDgEgBQgCgBgGABQgKACgLAFQgQAIgWAQQgXASgJAMQgPAUgLASQgOAWgHASQgKAYADAOIADAGIACABIBBAoQAtAbB1BJIBQA1QAzAjAZAVIAcAUIghgMQgVgHhXghQgkgNhIgdQhFgbgngSIg2gYIg1gbIAAgBIgBAAQgHgFgJAAIgJABg");
	this.shape_2.setTransform(198.7,66.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF5300").s().p("AEWHBQjHiJlDisIkeiQQgZgOATgwQARgoAlgrQAbgfAhgPQAlgQAVAQQA4AiC/BPQBgAoBSAhQgggaiyhtIiuhoQgagOATgwQAPgpAkgrQAagfArgTQAtgUAEAWQBRB0E8EVQCfCJCPB0QAWARgqBCQgjA4guArQggAegzAXQgkAQgVAAQgMAAgHgGg");
	this.shape_3.setTransform(198.4,66.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#241F20").s().p("ADqHEQgLgCgFgFQgGgGgBgJQgYggg0gzIhThPIoBm9QgNgHgFgNQgEgLACgRQABgLAFgOIAKgYQALgUAOgXIAdgpIARgTIASgSQATgQAXgOQAcgQATgGQAQgFAMAAQAJAAAIADQAKADAGAIIgBgBICgCiQBZBZBLBEIBWBMQAjAeA1AoIAtAjQAUAQAaARQAaATAVAMQAXAOAZAMIABAAIABABQASALAEATQADAPgDASQgEAZgOAdQgXAuglAtIgTAVQgKAMgLAHQgIAHgOAKIgYAOQggAPgVAEQgKADgJAAIgLgBgAkDmoQgHAAgNAEQgSAGgXANQgTAMgSAPIgRAQIgPARQgnAxgRAdQgPAZgEAQQgEANADAIQABAJAKAHIAAABIFcEeQAnAhAvArQAwAtAjAhQAzAxAfAgQAyA0AZAkIABABIAAABQADAIALgBQAHAAAPgGQAVgJAXgPQAWgOASgQIAigkQARgVAOgUQAPgWALgVQANgaAFgTQACgMgCgIQgBgHgFgFQgZgMgZgRIgvgiQgfgXg7gxIhWhJIhVhMIinibIh9h1IgpgpIAAAAIgBgBQgCgDgGAAIgDAAg");
	this.shape_4.setTransform(159.8,115.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF5300").s().p("ADcGqQhEhek4kOIksj6IACABQgqgjBsiHQAhgpA2gbQA4gcAQAWIEnEdQEfEFBqAvQAfAVgeBCQgZA4g1A7QglApg6AZQgbAMgQAAQgSAAgCgQg");
	this.shape_5.setTransform(159.5,115.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#241F20").s().p("ADQHjIAAAAIAAgBIgdgdIAAgBIgBAAIglgrIjCjSQgkgmgtgtIiiihQhJhIhbhZQgKgIgCgMQgEgMACgRQACgNAFgOIALgZQAJgVASgaQAOgWASgVIARgUIAVgTQAUgQAZgOQAbgOAZgFQARgEAMACQAKABAGAEQAIAEAEAIICdCuQA8BEBjBnIBTBTQAhAiA0AuIArAoIAsAmIAtAmQAbAUAUAOIgBAAQAIAEAFAHQAEAGACAKQABAMgFARQgGASgQAeQgXAmglAuQgRAWgTAQIgoAhQgWARgXAMQgQAIgJADQgIACgIAAQgNAAgHgGgAkBnRQgUAFgaAOQgXANgSAPIgjAlQgjApgYAqQgOAagFAUQgEAMACALQABAKAJAIIgBABIGWGPIEMEUIADABIAKgCQAJgDAMgHQASgJAXgRQATgPATgRQAYgXAJgNQAqg0ATgcQARgaAFgRQAFgLgBgJQAAgKgIgEIgBgBQgWgQgYgVQgUgPgZgYIhVhRIlJlNQg3g4hshyIgBAAIAAgCQgEgHgKAAIgDAAQgJAAgKACg");
	this.shape_6.setTransform(124.5,152.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF5300").s().p("ADZHbIgdgeQhLhZkjklIkWkQIAFADQgfgVAfhCQAbg4A1g6QAlgoA2gVQA4gWAMAbIEMEfQEjErBrBJQAcAPgeA6QgUAkg0BBQggAog3AmQgsAfgVAAQgHAAgEgEg");
	this.shape_7.setTransform(124.4,152.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#241F20").s().p("ACAJJQgHgBgFgDQgGgEgBgHIgkg4Igng3IhNhtIiijZIikjUIisjeQgEgHgCgIQgCgLACgOQADgUAKgbQARgtAagoQAfgtAhgcQAkgeA4gHQAZgDAYADQAPACAKAEQAJACAEAFIABABIAEAEIADAEQAiAkAfAeQAyAxBVBMICIB7ICLB4QBPBEA/AxIBJA1QAzAjAaALIAAABIABAAQAQAJADARQADALgDARQgEAUgOAbQgJARgQAXIgPATQgGAJgLAKQgSAPgYALQgaAMgWADIgHAAIgPgCIgFgCIgDgBIgBgBIgBAAIgCgCIAAAAIkkkEIgTgOIBHCAIAeAvQAKAQAWAeIAtA2IAyAvIAWAQIAAgBQAOAIADAMQADAKgCAOQgCASgLAVQgOAfgcAlIgNAQIgPAOQgPAMgTAKQgWALgQAEQgKACgIAAIgEAAgAlJoqQgRAFgXAKQgTAKgPAMIgHAHIg0A6QgjAqgRAfQgMAWgEASQgFAaAMALIAAAAIHmKHICbDcIAAACIABAAQACAFAIAAIARgEQAPgFASgLQAQgKAOgMQAIgGAFgGIAMgOQAcglAMgbQAKgTACgPQABgJgBgGQgCgFgGgEIgBAAIgugkIgUgUIgTgWIgSgWIgRgXIgggvIgegwIhVinIAPAIIAnAcIAkAcIBIA7ICNB5IAyAsIABAAIACABIABAAIADAAIAFABIAEgBQASgCAWgKQAVgLAPgNIAPgPIANgSQAQgXAIgPQAMgXADgRQADgLgCgGQgCgHgFgDQgegOgxgkQgfgWgrgjQg1gphXhMQigiOhthtQhZhVgugpQgbgagqgjIgGgGIgBAAIgBgBIgDgBIgFgCQgGgBgPAAQgRAAgZAHg");
	this.shape_8.setTransform(78.5,205.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF5300").s().p("AB0I1Qgjg/kymYIktmJQgcgaAohMQAkhFA6g5QAlgkA+gJQA4gJAQAQIFKE2QFeE7BdAmQAaAOgTAwQgQApgkArQgYAcgpAQQgoAPgQgMQkhkDgsgZIBQCYQBgChBUAzQAZANgUAwQgQAnglAtQgZAfgtAUQgWAJgNAAQgOAAgCgLg");
	this.shape_9.setTransform(78.3,205.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#595959").ss(1,0,0,4).p("AJg1xQgiBAgxBRQhhCjhMBZQk7F1ofIEQo+IdjvCGILjM7QGAm3GsnVQNcupDkiWg");
	this.shape_10.setTransform(132,139.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6DBC6").s().p("A0nI3QDviGI9ocQIfoEE8l2QBMhZBhiiQAxhSAig/ILIMZQjlCWtbOoQmsHVmAG3g");
	this.shape_11.setTransform(132.1,139.5);

	this.shape_1.mask = this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = mask;

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,8.6,270.5,270.4);


(lib.outsidemoderate = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,0,4).p("AU8AAQAAIrmJGIQmIGJorAAQopAAmJmJQmImIAAorQAAoqGImIQGJmJIpAAQIrAAGIGJQGJGIAAIqg");
	this.shape.setTransform(136.2,143.6);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoMTdQjyhni7i7Qi7i7hnjyQhqj7AAkTQAAkSBqj6QBnjyC7i8QC7i6DyhnQD7hrERAAQETAAD6BrQDzBnC7C6QC7C8BmDyQBqD6AAESQAAEThqD7QhmDyi7C7Qi7C7jzBnQj6BpkTAAQkRAAj7hpg");
	mask.setTransform(135.7,143.9);

	// bronchi
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#241F20").p("AVGAAQAAkShqj7Qhmjyi7i7Qi7i7jzhnQj6hqkTAAQkRAAj7BqQjyBni7C7Qi7C7hnDyQhqD7AAESQAAETBqD7QBnDyC7C7QC7C7DyBnQD7BqERAAQETAAD6hqQDzhnC7i7QC7i7BmjyQBqj7AAkTg");
	this.shape_1.setTransform(135.7,143.5);

	this.instance = new lib.Path_0_4();
	this.instance.setTransform(206.4,68.4,1,1,0,0,0,34,29.1);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_1_0_3();
	this.instance_1.setTransform(215.4,57.7,1,1,0,0,0,31.4,29.2);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_2_0_3();
	this.instance_2.setTransform(210.6,63.1,1,1,0,0,0,33,29.8);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_3_0_2();
	this.instance_3.setTransform(187.8,85.3,1,1,0,0,0,37.1,21.1);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Path_4_0_2();
	this.instance_4.setTransform(192.8,80.6,1,1,0,0,0,39.1,23.9);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Path_5_0_2();
	this.instance_5.setTransform(197.9,76.3,1,1,0,0,0,38.9,24.9);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Path_6_0_2();
	this.instance_6.setTransform(70.3,204.4,1,1,0,0,0,32,39.1);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.Path_7_0_2();
	this.instance_7.setTransform(60.6,215.5,1,1,0,0,0,30.2,40.4);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.Path_8_0_2();
	this.instance_8.setTransform(65.9,210.1,1,1,0,0,0,31.7,40.4);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Path_9_0_2();
	this.instance_9.setTransform(88.5,184.6,1,1,0,0,0,36.8,32.1);
	this.instance_9.alpha = 0.5;

	this.instance_10 = new lib.Path_10_0_2();
	this.instance_10.setTransform(82.9,189.7,1,1,0,0,0,36.8,33.9);
	this.instance_10.alpha = 0.5;

	this.instance_11 = new lib.Path_11_0_2();
	this.instance_11.setTransform(78.6,194,1,1,0,0,0,37.2,33.8);
	this.instance_11.alpha = 0.5;

	this.instance_12 = new lib.Path_12_0_2();
	this.instance_12.setTransform(115.2,160.4,1,1,0,0,0,31.4,31.1);
	this.instance_12.alpha = 0.5;

	this.instance_13 = new lib.Path_13_0_2();
	this.instance_13.setTransform(119.1,155.9,1,1,0,0,0,33.7,32.6);
	this.instance_13.alpha = 0.5;

	this.instance_14 = new lib.Path_14_0_2();
	this.instance_14.setTransform(132.4,141.5,1,1,0,0,0,32.5,31.6);
	this.instance_14.alpha = 0.5;

	this.instance_15 = new lib.Path_15_0_2();
	this.instance_15.setTransform(126.8,146.7,1,1,0,0,0,32.5,33.4);
	this.instance_15.alpha = 0.5;

	this.instance_16 = new lib.Path_16_0_2();
	this.instance_16.setTransform(122.5,150.8,1,1,0,0,0,33,33.2);
	this.instance_16.alpha = 0.5;

	this.instance_17 = new lib.Path_17_0_2();
	this.instance_17.setTransform(151.5,125.3,1,1,0,0,0,30,26.9);
	this.instance_17.alpha = 0.5;

	this.instance_18 = new lib.Path_18_2();
	this.instance_18.setTransform(156.1,120.7,1,1,0,0,0,33.4,28.6);
	this.instance_18.alpha = 0.5;

	this.instance_19 = new lib.Path_19_3();
	this.instance_19.setTransform(168.4,104.6,1,1,0,0,0,31.7,27.6);
	this.instance_19.alpha = 0.5;

	this.instance_20 = new lib.Path_20_3();
	this.instance_20.setTransform(163.3,110.3,1,1,0,0,0,32.2,29.4);
	this.instance_20.alpha = 0.5;

	this.instance_21 = new lib.Path_21_2();
	this.instance_21.setTransform(159.1,115,1,1,0,0,0,32.6,29.2);
	this.instance_21.alpha = 0.5;

	this.instance_22 = new lib.Path_20();
	this.instance_22.setTransform(99.7,227.3,1,1,0,0,0,10.8,12);
	this.instance_22.alpha = 0.102;

	this.instance_23 = new lib.Path_1_4();
	this.instance_23.setTransform(88.8,240.7,1,1,0,0,0,10.5,12.8);
	this.instance_23.alpha = 0.102;

	this.instance_24 = new lib.Path_2_4();
	this.instance_24.setTransform(22.9,200.9,1,1,0,0,0,17.4,19.6);
	this.instance_24.alpha = 0.199;

	this.instance_25 = new lib.Path_3_4();
	this.instance_25.setTransform(79.6,154.1,1,1,0,0,0,19.6,19.4);
	this.instance_25.alpha = 0.199;

	this.instance_26 = new lib.Path_4_4();
	this.instance_26.setTransform(122.6,112.8,1,1,0,0,0,15,11.8);
	this.instance_26.alpha = 0.199;

	this.instance_27 = new lib.Path_5_4();
	this.instance_27.setTransform(121.6,195.4,1,1,0,0,0,16,12.2);
	this.instance_27.alpha = 0.102;

	this.instance_28 = new lib.Path_6_4();
	this.instance_28.setTransform(202.9,113,1,1,0,0,0,17,14);
	this.instance_28.alpha = 0.102;

	this.instance_29 = new lib.Path_7_4();
	this.instance_29.setTransform(157.7,80.9,1,1,0,0,0,16.4,12.4);
	this.instance_29.alpha = 0.199;

	this.instance_30 = new lib.Path_8_3();
	this.instance_30.setTransform(68.1,248,1,1,0,0,0,18,22.3);
	this.instance_30.alpha = 0.199;

	this.instance_31 = new lib.Path_9_3();
	this.instance_31.setTransform(105,218,1,1,0,0,0,19.4,11.6);
	this.instance_31.alpha = 0.199;

	this.instance_32 = new lib.Path_10_2();
	this.instance_32.setTransform(146.9,174.3,1,1,0,0,0,19.1,18.2);
	this.instance_32.alpha = 0.199;

	this.instance_33 = new lib.Path_11_2();
	this.instance_33.setTransform(183.8,135.6,1,1,0,0,0,17.9,17.7);
	this.instance_33.alpha = 0.199;

	this.instance_34 = new lib.Path_12_2();
	this.instance_34.setTransform(225.8,87.7,1,1,0,0,0,22,19.2);
	this.instance_34.alpha = 0.199;

	this.instance_35 = new lib.Path_13_2();
	this.instance_35.setTransform(55.9,175.8,1,1,0,0,0,24.9,21.4);
	this.instance_35.alpha = 0.301;

	this.instance_36 = new lib.Path_14_2();
	this.instance_36.setTransform(102,129.9,1,1,0,0,0,18.9,19.7);
	this.instance_36.alpha = 0.301;

	this.instance_37 = new lib.Path_15_2();
	this.instance_37.setTransform(134.4,98.4,1,1,0,0,0,16.2,20.5);
	this.instance_37.alpha = 0.301;

	this.instance_38 = new lib.Path_16_2();
	this.instance_38.setTransform(169.8,67.4,1,1,0,0,0,20.8,16.2);
	this.instance_38.alpha = 0.301;

	this.instance_39 = new lib.Path_17_2();
	this.instance_39.setTransform(185.5,41.3,1,1,0,0,0,14.3,14.1);
	this.instance_39.alpha = 0.301;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("ADxG/IgIgEIhghAQgcgTgegSQhCgpgygfQhxhDiAhFQhdg0iXhNIgBgBIgBgBIgGgIIgFgJQgEgKgDgMQgCgIAAgOQgBgKACgMIAEgWIAIgVIAKgUIANgSQAIgKAKgHIAUgMQASgJAZgFQAXgEAWACQAJAAAOAEQANADAJAIIAWAMIAYAMIAwAWQAmASA8AZICSA9IghgUIkWigQgIgFgFgGQgJgMgEgOQgDgLgBgPQgBgYAGgbQAGgbAMgVQAHgNAHgJIACgCIABgCIAGgGQAFgFAGgEQATgMAdgHQAZgGAZAAQARABAIADQAHACAGAEQAHAFABAHQAfArA7A8QAtAuA0AzQBcBWByBiQBxBeBjBSIBDA2IAEAEIAEAGQADAFABAIQACAPgKAYQgKAZgaAlQgVAdgXAaIgaAaQgOALgRAJQgfAQgkAKQgqAMgdAAQgOgBgHgCgAmmivQgVAEgOAIQgKAEgGAFQgHAGgFAFIgLAQIgKAQQgEAIgDAJIgGASIgCAKIgBAJIgBATIACATIAFASQBcApCaBPQCDBEBxBBIA6AjIA7AkICZBjIABAAIAAABIACABIACAAQAEACAJAAQAaABAngMQAjgLAagOQAQgIALgJIAXgYQAVgWAWgeQAYghAKgYQAIgRgBgKIgBgEIgDgDIhDg3QhrhZhohaIhnhcQg9g4gognQg6g8glgnQg3g7gigwIAAgBIAAgBQgDgGgMgCIgWAAQgUACgYAHQgaAJgNAKIgIAHIgDADIgCACIgBACQgGAHgGALQgVAqACArQAAAZAKAMIAFAFIDCB2QAvAcAiAXIAlAbQAXAQAQANIATAQIgYgHIhkgiIhlglIhkgnQgVgJgdgNIgZgMIgYgNIAAAAIgBgBQgKgHgWgCIgFgBQgPAAgRADg");
	this.shape_2.setTransform(199.6,66.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF5300").s().p("ADvGyQjHiJkriiIkFiFQgSgfAHgsQAHgtAfgkQAYgbA0gIQAygHAXASQA4AiCwBEQBYAjBKAbQgggaijhiIiehdQgcgPAFg6QAFg5AfgmQAYgdA7gJQA7gJAFAXQBQB0EuEKQCYCDCIBtQAWASgqBCQgjA3guArQgdAchEAUQgoALgXAAQgSAAgJgGg");
	this.shape_3.setTransform(199.5,66.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#241F20").s().p("ADgGxQgNgKgCgTQgPgTgUgVIgngnQgogmgqglIhRhKImmlfQgMgHgFgNQgFgMABgQQACgRAEgKQADgMAGgNQAKgXAOgXQAQgaANgRIASgUIAWgSQAVgOAagKQAfgMAWgCQAQgCAMABQAKACAGADQAKAEAGAHICWCaIBLBMIBPBJQAbAaA2AuQAnAiAsAhIBWBAIAtAdQAaAPAUAJIABAAIABABQARALAGASQAFAOAAATQAAAcgKAfQgSA3glAvIgTAWQgNAMgKAHQgJAHgPAKIgbANQggANgaAAQgUAAgMgJgAkEmcQgTACgaAKQgXAJgTANQgLAHgIAHIgIAIIgHAJQgkAtgTAlQgNAYgFAUQgCANACAJQADAKAIAGIAAABIFWEQIBVBJQA2AxAbAZQAvAtAhAhIAmApQAUAXAPAVIABACQAFAMAJAEQAIADAOgBQAVgEAZgPIAWgNIAoghIAQgTQAQgUANgYQALgUAKgbQAJgbACgWQAAgKgCgMQgDgIgHgGQgXgLgXgQIgtggQgjgagygqIhShFIhRhJIidiTIhOhLIhOhMIgBgBQgDgEgKgBIgIAAIgOABg");
	this.shape_4.setTransform(159.1,115.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF5300").s().p("ADaGSQhEhdkwkBIkhjoQgdgTAWg4QATgwAvg7QAfgnA/gTQA/gUARAXIEUEPQEMD2BqAuQAhAWgUBHQgUBDgvA1QgoAtg4ATQgVAHgQAAQgdAAgGgcg");
	this.shape_5.setTransform(158.7,115.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#241F20").s().p("ADQHcQgNgBgGgGIgBAAIgdgeIgBAAIAAgBIgigpIi2jHIhKhOIkykyIAAgBQgJgIgEgMQgEgLAAgSQAAgMADgRIAIgbQAHgYAQgcQALgWATgZIASgVQAKgKANgJQAWgQAbgMQAhgNAXgDQARgBAOACQAJACAHAEQAIAFAEAJQBHBUBJBUQBBBOBTBYQAqAuAjAjQArAqAkAjIApAmIAqAlQARAQAaAUQAZAUATAMIgBAAQAIAFAFAGQAFAGADAIQAEANAAAQQAAAZgLAeQgJAYgNAaQgHAOgIAKIgQAWQgQATgbARQgTANgdAOQgZANgZAIQgSAFgKABIgIABIgHgBgAjynGQgXAEgbALQgWAKgWAQQgMAKgHAHIgRAUQgSAWgMAWQgNAXgKAYQgLAbgCAXQgCANACAMQADAMAIAHIAAABIHFHIIBLBOIAlAoIAkAoIABAAIAcAcIAGABIALgBQALgBANgEQAUgHAbgNQAYgMAUgNQAcgUAKgMIAdgpQAOgZAIgVQALgdABgTQABgNgDgKQgDgLgIgFIgBAAIgsgjIgrgmIhQhOQg+g+hdhiIiXijQhUhbhDhLIgBAAIAAgCQgDgHgMgBIgJgBIgPABg");
	this.shape_6.setTransform(123.9,151.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF5300").s().p("ADFHNIgdgdQhLhakOkUIkAj/IAFADQgggWAYhIQAWhEAxg1QAkgnA9gSQA/gSAMAbID1EVQENEhBrBIQAeARgQA+QgPA5goAyQgdAkhHAhQgxAWgYAAQgLAAgGgFg");
	this.shape_7.setTransform(123.8,151.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#241F20").s().p("AB0I1QgHgCgEgDQgGgFgBgHIABABIgBgBIAAAAQgLgUgWggIglg0IhIhoIiZjNIiajJIicjJQgJgJgEgNQgDgKAAgPQAAgSAHgcQAKgsAWgrQAVgrAgghIAEgFIAPgMQANgJAKgEQAWgJAagCQAugEAvAOQAJADANAGIALAHIAIAIICeCdICBB4ICFB3QBMBCA8AwQApAfAdAUQAxAhAZAMIABAAIAAAAQALAGAIAMQAGAKADANQAEAUgFAYQgDAVgKAUQgGANgEAGQgGALgGAHQgFAHgLAJQgIAGgKAGQgTALgTAHQgWAHgTADQgPACgHgBIgMgBQgJgCgFgEIgBAAIkRj8IgFgFQAQAmAUAoQAaA0AYAmQAgAyAcAgIARATIASARQAIAIAMAIIAUAPQAMAGAFAMQAEALgBAMQgBARgIAYQgOAkgZAiIgMAQQgGAHgJAIQgOALgVAKQgVAKgSACIgLABQgGAAgFgBgAlRoUQgXAFgOAIIgQAJIgNANQgZAagbApQgaAmgOAmQgJAXgBASQgDAYAMALIAAABIEyGYICXDNIBvCbQAVAdAPAYIAAACQACAFAIABQAJAAAIgCQAOgDAUgKQAOgIAQgNIANgMIALgPQAWgeAOgjQAHgUACgPQAAgJgCgGQgCgFgGgEIgBAAIgWgQQgHgFgNgMQgTgQgSgWQgdgjgfgzQgZgqgXgyQgYgzgQguIgFgNIAMAHIAVAPIA7AuIBLBBICUCEIgBgBQACADAKAAIASgCQARgCATgHQARgGARgKIAPgKQAJgIADgFQAIgJADgGIAJgQQAIgSADgRQAEgUgEgPQgDgSgMgGIACAAQgdgMgxgkQgZgRgugkQg5gwhNhGQhCg8hBg9IkmkeIgIgEIgUgEQgPgCgPAAQgbAAgcAGgABiIkIAAAAg");
	this.shape_8.setTransform(77.3,204);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF5300").s().p("ABqIfQgkg/kfmBIkalzQgdgbAhhUQAghQA3g2QAkgjBKABQBAABATASIEoEgQE9ElBdAmQAbAPgFAvQgFAvggAmQgXAbg0AQQgzAPgQgMQj9jtgsgZIARApQAVAzAaAvQBQCVBUAzQAZANgRAzQgPAtgiAqQgYAegtAPQgSAHgMAAQgQAAgDgNg");
	this.shape_9.setTransform(77.1,204.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#595959").ss(1,0,0,4).p("AJg1wQgQATgRAiQgiBEgEBMQgDA3g3BAQhEBGgbAgQgTAWhLBiQg7BOg2A5QgEAFgpATQgmASgFAIQgjBAhcBMQiKBxgSASQgUASgJAJQgQAQgGAQQg+CajmCJQiRBWgvBhQgrBahsBHQgQAKhKAsQg2AhgeAXQg/AzhTAvQguAahJAmILjM7QATgKAbgZQA2gxAmhIQAuhZCAiNQCjiuBchlQAlgoATgWQAigoAKgiQAVhJBvhQQBAgsAggYQA4gpAjgmQAyg2AOgsQAdheBbhOQBAg0B1g+QAugYAjg2QAPgYAkhKQAshdB1hJQARgLBLgrQAzgdAYgUQA1gtAkgXg");
	this.shape_10.setTransform(131.8,136.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6DBC6").s().p("A0nI3QBJgmAugaQBTgvA/gzQAegXA1ghIBbg2QBshHArhaQAvhhCRhWQDliIA/ibQAGgQAQgPIAdgcQARgRCLhyQBbhLAkhAQAEgJAngSQAogSAFgGQA2g5A7hOQBKhhAUgXQAagfBEhGQA4hBADg3QAEhMAhhEQARgiARgTILIMZQgkAYg1AsQgYAUgzAeIhdA1Qh0BKgtBcQgjBLgPAYQgjA1guAYQh1A+hAA0QhbBOgdBeQgPAsgxA2QgjAmg5ApIhfBEQhvBQgVBJQgKAigiAoQgUAWglAoQhbBmikCtQh/COguBYQgnBIg1AxQgbAZgTAKg");
	this.shape_11.setTransform(131.9,136.3);

	this.shape_1.mask = this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = mask;

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,8.6,270.5,270.4);


(lib.lungs6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.arrowwhite();
	this.instance.setTransform(-241.2,193.1,0.5,0.5,0,0,0,29,30.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regX:28.9,regY:30.6,rotation:1.7,x:-159.2,y:105.1,alpha:1},7).to({regX:29,regY:30.5,rotation:0,x:-64.7,y:12.6,alpha:0},7).wait(7).to({rotation:180},0).to({regX:28.9,regY:30.6,rotation:181.7,x:-159.3,y:105,alpha:1},7).to({regX:29,regY:30.5,rotation:180,x:-241.2,y:193.1,alpha:0},7).to({_off:true},1).wait(15));

	// Layer 5
	this.instance_1 = new lib.arrowwhite();
	this.instance_1.setTransform(-241.2,193.1,0.5,0.5,0,0,0,29,30.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({regX:28.9,regY:30.6,rotation:1.7,x:-159.2,y:105.1,alpha:1},7).to({regX:29,regY:30.5,rotation:0,x:-64.7,y:12.6,alpha:0},7).wait(21).to({rotation:180},0).to({regX:28.9,regY:30.6,rotation:181.7,x:-159.3,y:105,alpha:1},7).to({regX:29,regY:30.5,rotation:180,x:-241.2,y:193.1,alpha:0},7).to({_off:true},1).wait(8));

	// Layer 6
	this.instance_2 = new lib.arrowwhite();
	this.instance_2.setTransform(-241.2,193.1,0.5,0.5,0,0,0,29,30.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:28.9,regY:30.6,rotation:1.7,x:-159.2,y:105.1,alpha:1},7).to({regX:29,regY:30.5,rotation:0,x:-64.7,y:12.6,alpha:0},7).wait(35).to({rotation:180},0).to({regX:28.9,regY:30.6,rotation:181.7,x:-159.3,y:105,alpha:1},7).to({regX:29,regY:30.5,rotation:180,x:-241.2,y:193.1,alpha:0},7).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_3 = new lib.outsidesevere();
	this.instance_3.setTransform(-148.2,101,1,1,0,0,0,135.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65));

	// Layer 2
	this.instance_4 = new lib.Path_0();
	this.instance_4.setTransform(60.7,73.5,1,1,0,0,0,56.1,73.7);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65));

	// Layer 1
	this.instance_5 = new lib.lungspair();
	this.instance_5.setTransform(72.6,128.6,1,1,0,0,0,71.6,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.88,y:121.2},29,cjs.Ease.get(1)).wait(6).to({scaleY:1,y:128.6},29,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.4,-43.6,430.1,284.1);


(lib.lungs5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.arrowwhite();
	this.instance.setTransform(-241.2,193.1,0.7,0.7,0,0,0,29,30.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({x:-156,y:105.9,alpha:1},10).to({x:-64.7,y:12.6,alpha:0},10).wait(9).to({rotation:180},0).to({x:-156,y:105.9,alpha:1},10).to({x:-241.2,y:193.1,alpha:0},10).to({_off:true},1).wait(20));

	// Layer 4
	this.instance_1 = new lib.arrowwhite();
	this.instance_1.setTransform(-241.2,193.1,0.7,0.7,0,0,0,29,30.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({x:-156,y:105.9,alpha:1},10).to({x:-64.7,y:12.6,alpha:0},10).wait(29).to({rotation:180},0).to({x:-156,y:105.9,alpha:1},10).to({x:-241.2,y:193.1,alpha:0},10).to({_off:true},1).wait(10));

	// Layer 5
	this.instance_2 = new lib.arrowwhite();
	this.instance_2.setTransform(-241.2,193.1,0.7,0.7,0,0,0,29,30.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-156,y:105.9,alpha:1},10).to({x:-64.7,y:12.6,alpha:0},10).wait(49).to({rotation:180},0).to({x:-156,y:105.9,alpha:1},10).to({x:-241.2,y:193.1,alpha:0},10).wait(1));

	// Layer 3
	this.instance_3 = new lib.outsidemoderate();
	this.instance_3.setTransform(-148.2,101,1,1,0,0,0,135.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	// Layer 2
	this.instance_4 = new lib.Path_0();
	this.instance_4.setTransform(60.7,73.5,1,1,0,0,0,56.1,73.7);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// Layer 1
	this.instance_5 = new lib.lungspair();
	this.instance_5.setTransform(72.6,128.6,1,1,0,0,0,71.6,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.88,y:121.2},39,cjs.Ease.get(1)).wait(10).to({scaleY:1,y:128.6},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.4,-42.4,430.1,283);


(lib.lungs1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.arrowwhite();
	this.instance.setTransform(-241.2,193.1,1,1,0,0,0,29,30.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:-156,y:105.9,alpha:1},15).to({x:-64.7,y:12.6,alpha:0},15).wait(15).to({rotation:180},0).to({x:-155.8,y:105.7,alpha:1},18).to({x:-241.2,y:193.1,alpha:0},17).wait(31));

	// Layer 5
	this.instance_1 = new lib.arrowwhite();
	this.instance_1.setTransform(-241.2,193.1,1,1,0,0,0,29,30.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:-156,y:105.9,alpha:1},15).to({x:-64.7,y:12.6,alpha:0},15).wait(48).to({rotation:180},0).to({x:-155.8,y:105.7,alpha:1},17).to({x:-241.2,y:193.1,alpha:0},16).wait(15));

	// Layer 6
	this.instance_2 = new lib.arrowwhite();
	this.instance_2.setTransform(-241.2,193.1,1,1,0,0,0,29,30.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-156,y:105.9,alpha:1},14).to({x:-64.7,y:12.6,alpha:0},15).wait(80).to({rotation:180},0).to({x:-155.8,y:105.7,alpha:1},16).to({x:-241.2,y:193.1,alpha:0},14).wait(1));

	// Layer 3
	this.instance_3 = new lib.outsideNormal();
	this.instance_3.setTransform(-148.2,101,1,1,0,0,0,135.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140));

	// Layer 2
	this.instance_4 = new lib.Path_0();
	this.instance_4.setTransform(60.7,73.5,1,1,0,0,0,56.1,73.7);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140));

	// Layer 1
	this.instance_5 = new lib.lungspair();
	this.instance_5.setTransform(72.6,128.6,1,1,0,0,0,71.6,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.88,y:121.2},59,cjs.Ease.get(1)).wait(15).to({scaleY:1,y:128.6},65,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.1,-39.3,429.9,280.6);


(lib.insideSevere = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,0,4).p("AU8AAQAAIrmJGIQmIGJorAAQopAAmJmJQmImIAAorQAAoqGImIQGJmJIpAAQIrAAGIGJQGJGIAAIqg");
	this.shape.setTransform(136.2,143.6);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoBUBQjyhmi7i7Qi8i7hmjzQhqj7AAkTQAAkRBqj7QBmjyC8i7QC7i7DyhnQD7hqEQAAQETAAD7BqQDyBnC7C7QC7C7BnDyQBqD7AAERQAAEThqD7QhnDzi7C7Qi7C7jyBmQj7BqkTAAQkQAAj7hqg");
	mask.setTransform(136.2,138.8);

	// bronchi
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#241F20").p("AVGAAQAAkRhqj7Qhmjyi7i7Qi7i8jzhmQj6hrkTAAQkRAAj7BrQjyBmi7C8Qi7C7hnDyQhqD7AAERQAAETBqD7QBnDyC7C7QC7C7DyBnQD7BqERAAQETAAD6hqQDzhnC7i7QC7i7BmjyQBqj7AAkTg");
	this.shape_1.setTransform(136.5,140.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").p("Ax3OIQGdldHRm3QOgttEEnCIDdD2QncHYnzH6QvjP5huC1g");
	this.shape_2.setTransform(130,136.2,1,1,0,0,0,0.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#241F20").p("AxCOWQGTlPHGmqQOKtQEDnCICeCzQnPHGnlHqQvHPShuC1g");
	this.shape_3.setTransform(129.5,135.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#633B00","#ECAA53"],[0,1],-12.6,-12.6,15.3,15.6).s().p("AxBOWQGSlPHGmpQOKtREEnCICdCzQnOHGnlHqQvIPThtC1g");
	this.shape_4.setTransform(129.5,135.7);

	this.instance = new lib.Path_2_6();
	this.instance.setTransform(141,161.1,1,1,0,0,0,105.2,111.5);
	this.instance.alpha = 0.719;

	this.instance_1 = new lib.Path_3_6();
	this.instance_1.setTransform(143.6,158.3,1,1,0,0,0,104.5,111.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_4_5();
	this.instance_2.setTransform(114.5,106.7,1,1,0,0,0,107,106.7);
	this.instance_2.alpha = 0.719;

	this.instance_3 = new lib.Path_5_5();
	this.instance_3.setTransform(113.5,107.7,1,1,0,0,0,107,106.7);
	this.instance_3.alpha = 0.5;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#241F20").s().p("AhnCTQgNgFgKgJIABgCQANAGALACQANACAIgHICYiOQAWgTARgQIASgTIAHgJQACgHAAgGQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAgEgEIgDgDIgBgBIgBgBIgEgGQgIgKgHgDIgDgBIgCgEQgDgFgLgCQgKAAgMADQgWAGgXAOQgTALgUARQgLAJgHAIIgRASQgmArgXAmQgPAZgFAUQgEAPABAJQABANAKAIIgBADQgNgIgEgOQgEgNACgPQADgYANgcQAVgrAkgtIASgVQAIgKAMgJQATgPAZgPQAbgOAZgFQAQgEAOACQAJABAHAFQAHAEAEAIQAFADAEAFIAKAMIADAGIAAABIABACIABADIADAGQACAEgBAFIgEAOIgHANIgRAUQgLAOgYAZIglAmQgSATgVARQgPARgXASIgVAQQgJAJgNAHQgIAFgJAAQgGAAgHgCg");
	this.shape_5.setTransform(98.3,120.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF5300").s().p("AhtCKIgRgJQgfgVAfhCQAbg2A1g6QAlgoA0gVQA5gWAMAbIAIAFQAJAIAGAMQADAGAEAEQACAEgEAOQgFAQhjBbQhbBYgVAPQgHAFgJAAQgIAAgJgEg");
	this.shape_6.setTransform(98.3,120.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFAF22").ss(8).p("AxCOUQGSlPHGmqQOKtQEEnCICeCzQnPHGnlHqQvIPShtC1g");
	this.shape_7.setTransform(130.6,135.9,1,1,0,0,0,1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#241F20").s().p("AhOBsQgOgHgFgQQgEgKABgPQADgQALgZQARgeAdggIAOgPQAGgGAJgGQALgJAUgMQATgKARgFQAMgDAHABQgIAAgLADQgOAEgUANQgPAKgNANIgNAOIgKAQQgXAjgLAdQgHATgBAPQgBAIADAEIACADIAJgCQAJgBAHgDIAegOIAZgSIAYgZQAMgLAPgLQAUgUAEgFQAMgQgBgQQAAgMgFgNQAGAOAAALQABAJgCAJQgDAJgFAHQgHAMgOARQgNAOgIAMIgKAPIgMAOIgNAOIgOAMIgPAKQgLAGgGACIgSAHQgLADgIABIgFABg");
	this.shape_8.setTransform(178.4,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF5300").s().p("AhUApQAPgpAkgqQAageApgTQAtgUAEAVQATAngTAdQgiAigWAbQgaAjgpASIgmAKQgZgNATgwg");
	this.shape_9.setTransform(179,31.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#241F20").s().p("AhNBsIgEgCQgOgGgFgQQgEgLACgOQADgSAKgXQASgiAagdIAOgPQAHgHAIgGQAQgOAPgIQATgKATgCQAMgBAIADQAKACAHAHQgPgJgUAGQgQAFgRAMQgPAKgKANQgHAGgFAIIgMAOQgaAjgKAaQgIATgCANQAAAHABAFIACAEIAJgCQAJgCAGgDIAbgQIAWgVIAggmIANgNQALgMAOgMQATgQADgIQADgGgCgJQgBgEgFgMIAKAPQAFAJgCAKQgCAIgGAJIgLAOIgWAbIgTAZIgKAPIgLAPIgYAaIggAUQgKAFgJACIgJADIgMABg");
	this.shape_10.setTransform(158.5,58.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF5300").s().p("AhUAmQAQgnAlgrQAbgfAfgPQAlgQAVAQQARAcgQATQgiAggaAjQgdAvgpATIgjAJQgZgNAUgwg");
	this.shape_11.setTransform(159,58);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#241F20").s().p("Ah4CEQgPgKgHgHQgGgHgBgGQgCgHACgIQADgLAKgQIAQgWIAkgnIBLhOQAJgJAKgJIAXgRQAcgSAbgEQAQgCAOAFQARAFAJAMQAFAFACAHQABAIgBAHQgCAJgGAQQgGAPgQAeQgdAzgeAeQgIAJgLAIIgVAQQgWAOgWAIQgZALgXAFQgPAEgKAAIgEAAQgNAAgIgFgABbh1QgLADgLAHQgLAGgKAIQgTAOgSAVIgQAUIgTAUQgOAQgZAUIgpAjIgUARQgNAMgEAHQgCAHAAAFQABAFAEAGQAFAHAOAKQAJAGAOgBQAMgCAMgEQAUgHAYgQQAVgOAQgPIARgPIBThYQASgYAIgRQAFgKABgNQACgNgHgFIgBgBQgIgIgMgBIgHgBQgIAAgJADg");
	this.shape_12.setTransform(234.3,91.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF5300").s().p("Ah3B/QgYgPgDgPQgCgNAQgUQAVgaBiheQBChLAyAAQAZAAAMAPQAVARgpBCQgkA2guArQggAegxAXQgjAPgVAAQgMAAgIgFg");
	this.shape_13.setTransform(234.3,92.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#241F20").s().p("AhrCVQgHgBgGgFQgFgFAAgHQACAIAFACQAFADAHAAQAKgBAOgFQAWgJAXgQQAagRANgPIARgRIAug/QAQgYAIgSQANgcADgRQACgLgCgIQgBgFgDgDIgPACIgXAEQgSAEgZALQgUAKgRAOQgIAGgJAKQgHAGgJAMQgSAUgNAQQgPARgOAWQgPAYgFATQgGAZALAWQgIgKgEgMQgEgNABgNQACgWANgcQALgXAOgUIAcgpIAQgVIATgTQATgSAXgNQAUgLAegIQAIgCASgDIAbgDIAFAAIAFADQARALAFAWQADAPgEASQgCAMgGAQIgMAaQgaAuglApIgSAUQgJAJgNAJQgTAQgZANQgcAOgXAFQgLADgJAAIgIgBg");
	this.shape_14.setTransform(190.4,138.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF5300").s().p("Ah3B7QgWghAYgxQAQgjA3hEQAngwBAgTQAggKAZABQAfAUgeBDQgZA2g0A6QglAqg4AZQgcALgQAAQgSAAgCgQg");
	this.shape_15.setTransform(189.8,139.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#241F20").s().p("Ah3CGQAKADAOgDQANgFAIgFQATgKAUgQQAUgPAPgQQAUgTANgNQADgDALgPIA5hXQABgCAAgDIAAgEIgBgCIgBgDIgSgRIgBgBIgGgBQgHAAgMADQgSAFgXANQgRAKgTAQIgRAQIgQAQIgeAkQgRAVgLASQgPAWgFAUQgEANACAJQACALAKAIQgMgGgFgLQgEgKABgQQACgWANgbQAIgRAQgZQALgRARgYQAIgMAHgIIATgSQAUgSATgOQAagPAWgHQARgFAMAAQAHgBALADQAKAEAIAJIALALIACADIABABIAAAAIABABIABABIAFAIIAEAJQACAKgBAJQgBAIgFAKIgVAfIgcAlIgPAUQgNAPgFAEQgTARgTAOQgWAQgSAKQgbAQgRAFQgQAFgIABIgHAAQgKAAgIgFg");
	this.shape_16.setTransform(129.3,84.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF5300").s().p("AhwB/Qg1ggBziNQAhgpAzgaQA4gcAQAVIAPAPQAHAIABAKQABALgFAIQg1BRgRASQgfAggtAgQgyAjgbAAQgIAAgGgDg");
	this.shape_17.setTransform(128.6,85.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#241F20").s().p("AhkCSIgdgeQgNgMgFgHQgFgGgBgHIgCgGIAAgDIABgCIACgEIAQgVIARgVQAYgaANgKIAogjIAogiIBYhEIAFgCIAFgCQAHgBAKACQALADAPAHIABAAQAHAFAFAHQAEAHAAAIQAAALgFAQQgHARgRAdIg4BTQgIAMgJAJQgLANgHAGQgTATgTANQgUAOgaALQgNAGgMADQgHABgHAAQgJgBgEgEgAhMCOQAKgEAMgIQAIgFAfgZIAkghQAXgUAMgOIAigkQARgTANgVQAQgbAFgSQAEgNgBgKIgEgJIgGgFQgOgFgKAAQgGgBgEABIgBAAIh8BqIgpAfIg+AwQgOAMgFAGQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIABAGQAAAGAEAGQAEAHANANIAeAcIAAAAQAGAFAPgGg");
	this.shape_18.setTransform(151.8,179.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF5300").s().p("AhhCNIgegdIgQgRQgHgJAAgNQgBgNB4hiQBehRAggXQALgHAgANQAcAQgeA5QgUAkg0A/QggApg1AlQgsAfgVAAQgHAAgEgEg");
	this.shape_19.setTransform(151.6,179.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#241F20").s().p("AhAB4QgHgBgEgEQgDgDgBgCIgBgFIgJgFQgEgCgDgGIgLgWQgCgEABgBIAAgFQAAgGADgGIAJgSQANgVAJgKIAYgeQATgXAggfIAdgZIAKgHQAHgEAKAAQAIABAHAEQAFAEAFAFIAMAKIgBAAQAMAIADANQACAKgCAMQgCALgKAcIgPAjQgJAUgLAQIgNAQIgQAPQgUAOgOAHQgUAKgUADIgJABIgNgCgAhVBXQACAJAGAGIABABQADAGAKgCQAIgBAIgEQAPgIAQgLQAOgJANgNIAxg2QAPgOAIgOQALgSACgRQABgHgDgJQgDgGgHgCIAAAAIgRgJIgCgCIgFgCIgCABIgGAGIgYAcQgnAugJAJIg/A/IgDAFIgBAAIAAgBg");
	this.shape_20.setTransform(93.3,244.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF5300").s().p("AhQBkQgIgFgEgIIgHgYQgEgNBGhLQA9hFASgNQAJgGAJAFQAFADADADIAPAKQAZANgUAwQgQAkglAuQgZAfgrATQgXAKgMAAQgOAAgCgLg");
	this.shape_21.setTransform(93.5,244.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#241F20").s().p("Ag5B0QgNgCgHgGIgCgBIgDgCIgNgPQgFgHgDgLIgEgUIgCgJIAAgBIAAgEIACgFIANgXQAIgKARgSIAagbIA2gyIAQgNQANgKAQADQAJABANAHQAJAFAIAIQALAIADAMQACAIgBAOQgDARgJAVIgQAiQgLAYgHALIgFAJIgGAIQgGAIgJAIQgQANgUAHQgRAHgWABIgIABIgMgBgAhWAtIgEAJQgFAMAAAFQgCAKAFAHIAIAJIAFAEIAGACQAGAEAKgCQAIgBAJgEQAOgHAQgMQAOgKAMgKIAZgYQANgMAMgPQANgMAIgRQAJgTAAgPQAAgJgDgGQgCgGgHgCIgCgBIgPgGQgHgDgGABQgFABgCACIgBACIgkAmIgYAbIgbAXIgcAYIgQANIAAAAIAAgCg");
	this.shape_22.setTransform(117.3,218);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF5300").s().p("AhNBlQgJgEgJgNQgGgIAAgPIACgYQABgIA6g3IBIhHQAMgNAXAIQALAFAJAHQAaANgTAxQgQAnglArQgXAcgnAPQgXAJgPAAQgLAAgHgFg");
	this.shape_23.setTransform(117.5,218.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#241F20").s().p("AiICdIgCgBIAAAAIgBAAIgDgCIgFgEIgFgIQgEgHgBgHQgIgLgBgSQAAgPAEgPQAHgXAOgfQAcg7AegmIATgXIAWgUQAZgTAdgHQAdgGAfABQAQABANADQAKACAEACQAIACAFAFIgBAAIAHAEIAKAKIACAEIAAgBIABgCIAAgBQAAAAABAAQAAgBAAAAQABAAABgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABABIAAACIAAABIABABIADAHIAHALIAAADQABAJgEAMQgEAJgMATIgTAYQglAlgzAnQgrAigyAgQgaARgYAMIgUAKIgJADIgCABgABIiOQgXAEgcANQgYANgSAOIglAlQgUATgSAVQgUAWgNAVQgPAagHAYQgDAPABALQABAOAJAGIABABIABAEQACAHADADIABACIAIgFIA4grQA8gvAbgYIBVhHIAUgTQAKgKAGgJIAEgHIABAAIAAgCIABgDIACgNIgBgCIAAABIgIgLIgFgEIgFgDIgBAAIAAAAQgIgGgRgBQgQAAgMACg");
	this.shape_24.setTransform(43.9,165.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF5300").s().p("AiDCVQgHgCgEgLIgDgKQgcgZAohNQAjhDA7g5QAlgkA8gJQA4gIAQAQIAGAEQAIAFAFAJQAIANgCgMIADASQAFAiiPBuQiFBpgRAAIgBAAg");
	this.shape_25.setTransform(43.6,165.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#595959").ss(1,0,0,4).p("AKK1XQgVARgZAhQgyBCgRBNQgLAsgcAUQgvAfgNAQQgsA6gIAJQgLAMgYAgQgcAmgEAJQgWA5gWAYQgbAehLAoQgPAIglAoQgkAngIAQQgiBJg0AzQg7A4hiAwQgXALgZAmQgPAWgVAoQhMCVihBOQhVAphAAyQhXBHgQBEQgVBdhkBGQgXAQhAAlQg2AhgbAVQg7AvhkAlQh5AtgLAGILFMyQAVgUAcgjQA5hGAjhIQArhaARgXQAsg6BMgRQAagGAUgfQANgUAIgZQAUhHAmgpQAkgoBKgeQAsgTAngvQAogtAUg0QAth2Aug6QBChVBagEQAxgCAmg0QAkgygGgsQgNhUBghBQAbgTA+ghQA9giAagSQBOg2AqgmQA/g7ARg2QAjhoBHhHQBGhFBKgFQBZgHBFgvg");
	this.shape_26.setTransform(132.8,138.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6DBC6").s().p("A0nImQALgGB4gtQBkglA8gvQAagVA3ghQBAglAXgQQBkhGAVhdQAPhEBYhHQBAgyBVgpQChhOBMiVQAUgoAPgWQAagmAXgLQBigwA7g4QA0gzAihJQAHgQAlgnQAlgoAPgIQBKgoAcgeQAWgYAWg5QADgJAdgmQAXggALgMQAJgJAsg6QANgQAugfQAdgUALgsQARhNAyhCQAZghAVgRIKeLtQhFAvhaAHQhKAFhGBFQhGBHgjBoQgSA2g+A7QgqAmhPA2QgaASg8AiQg+AhgbATQhhBBANBUQAHAsgkAyQgmA0gxACQhaAEhDBVQgtA6gtB2QgUA0goAtQgnAvgsATQhKAegkAoQgmApgVBHQgHAZgNAUQgUAfgaAGQhMARgtA6QgRAXgqBaQgjBIg5BGQgcAjgWAUg");
	this.shape_27.setTransform(132.9,138.2);

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = mask;

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,7.4,271.2,271.2);


(lib.insideNormal = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,0,4).p("AU8AAQAAIrmJGIQmIGJorAAQopAAmJmJQmImIAAorQAAoqGImIQGJmJIpAAQIrAAGIGJQGJGIAAIqg");
	this.shape.setTransform(136.2,143.6);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoBUBQjyhmi7i7Qi8i7hmjzQhqj7AAkTQAAkRBqj7QBmjyC8i7QC7i7DyhnQD7hqEQAAQETAAD7BqQDyBnC7C7QC7C7BnDyQBqD7AAERQAAEThqD7QhnDzi7C7Qi7C7jyBmQj7BqkTAAQkQAAj7hqg");
	mask.setTransform(136.2,138.8);

	// bronchi
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#241F20").p("AVGAAQAAkShqj7Qhmjyi7i7Qi7i7jzhnQj6hqkTAAQkRAAj7BqQjyBni7C7Qi7C7hnDyQhqD7AAESQAAESBqD8QBnDyC7C7QC7C7DyBmQD7BrERAAQETAAD6hrQDzhmC7i7QC7i7BmjyQBqj8AAkSg");
	this.shape_1.setTransform(136.5,144.7);

	this.instance = new lib.Path_23();
	this.instance.setTransform(153.3,167.8,1,1,0,0,0,103.9,113);
	this.instance.alpha = 0.719;

	this.instance_1 = new lib.Path_1_5();
	this.instance_1.setTransform(153.3,167.8,1,1,0,0,0,103.9,113);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_2_5();
	this.instance_2.setTransform(105.1,111.4,1,1,0,0,0,101.6,103);
	this.instance_2.alpha = 0.719;

	this.instance_3 = new lib.Path_3_5();
	this.instance_3.setTransform(105.1,111.4,1,1,0,0,0,101.6,103);
	this.instance_3.alpha = 0.5;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("AhnCTQgOgEgKgKQgNgHgEgPQgEgNADgPQACgVANgfQAWgsAkgsIARgVQALgLAKgHQAUgSAYgMQAagOAagGQAPgDAOABQAKACAHAEQAIAEADAIIAJAIIAJAMIADAGIABACIABABIAAADIAEAGQABACAAAIIgEANQgCAGgGAHIgzA7IglAnIhiBXIgWAQQgIAEgJAAQgGAAgHgCgABDh7QgUAFgZAOQgVAMgSAQQgLAJgHAIIgRATQgpAugUAiQgQAcgFASQgDAOABAKQABANAKAIQALAHANABQANACAIgHIASgRICFh8IAogkQAIgHAKgLIAGgKQADgGAAgGQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgFgEIgEgEIgFgHQgHgKgJgEIgDgBIgCgDQgDgGgKgBIgCAAQgIAAgMADg");
	this.shape_2.setTransform(92.7,118.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF5300").s().p("AhtCKIgRgJQgfgVAfhCQAbg2A1g6QAlgoA0gVQA4gWAMAbIAIAFQAJAIAHAMQADAGAEAEQABADgEAPQgEAQhjBbQhbBYgWAPQgHAFgJAAQgHAAgJgEg");
	this.shape_3.setTransform(92.7,119.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#241F20").ss(2).p("Ay0L8QGUlNHImoQONtOEDnCIF8G4QnRHPnnHxQvLPlhuC1g");
	this.shape_4.setTransform(130.3,141.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#855536","#E8BAB9"],[0,1],-27.7,-27.6,33.5,34).s().p("AyzL9QGTlOHImoQONtNEDnDIF9G4QnSHPnmHxQvMPmhtC0g");
	this.shape_5.setTransform(130.3,141.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#241F20").s().p("AhOBrQgOgHgFgPQgEgMACgNQACgSALgXQARgeAdggIAOgPQAIgHAHgGQAPgMAQgIQATgKARgFQAJgDAJABQgGgBgMAEQgOAEgUANQgPAKgNANIgMAOIgLAQQgXAjgLAdQgHASgBAPQgBAIADAFIACADIAJgCIAfgKIAPgIIAZgSQAIgHAEgFIAngjQATgSAFgHQAMgQgBgQQAAgMgFgNQAGAOAAALQABAJgCAJQgCAFgGALQgHAMgOARIgVAaIgKAOIgMAPIgNAOIgdAWIgjAPIgTAEIgFABg");
	this.shape_6.setTransform(174,33.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF5300").s().p("AhUApQAPgpAkgqQAagfApgTQAtgTAEAVQATAngTAdQgiAigWAbQgaAjgpASIglAKQgagNATgwg");
	this.shape_7.setTransform(174.6,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#241F20").s().p("AhRBqQgOgHgFgPQgEgMACgNQADgTAKgWQARggAbgfIAdgcQAQgOAPgIQAXgLAPgBQAKgBAKACQAKADAHAHQgPgJgUAGQgQAEgRAMQgNAKgMAOIgSAVIgFAHQgZAhgMAcQgJAUgBAMQAAAHABAFIADAEIABAAIAHgCIAPgFIANgIIAOgIIAMgKIAVgYIAWgZIAMgNQAKgLAQgNQASgRAEgHQACgGgCgJIgGgQIAKAOQAFALgCAIQgBAHgHALIgLAOIgWAaIgoA4IgYAaIgQALIgQAJIgTAHIgJADIgPABg");
	this.shape_8.setTransform(153.6,57.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF5300").s().p("AhUAlQAQgmAlgrQAcgfAegPQAlgQAVAQQARAbgQAUQgiAggaAjQgdAugpATIgjAKQgZgOAUgwg");
	this.shape_9.setTransform(154.1,57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#241F20").s().p("Ah4CEQgPgKgHgHQgFgFgCgIQgCgGACgJQADgKAKgQIAQgXIAkgnIBLhOIAqgjQAdgSAagDQAQgDAOAFQAQAFAJAMIABAAQAFAFACAIQABAFgBAJQgCAJgGAQQgHASgPAbQgbAxggAgIgTASQgLAJgKAGQgWANgWAKQgZAKgXAGQgOADgLAAIgFAAQgNAAgHgFgABbh1QgIADgOAHIgVAOQgSAPgTAUIgQAUIgTAUQgMAOgbAXIgpAjIgUARQgNAMgDAHQgDAFAAAGQABAGAEAFQAFAIAOAKQAJAGAOgCQAIgBAQgFQAXgJAVgNQAQgLAVgSIBDhFIAhgjQASgWAIgTQAFgKABgMQACgOgHgEIgBgBQgHgIgNgCIgIgBQgHAAgJADg");
	this.shape_10.setTransform(239.1,99.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF5300").s().p("Ah3B/QgYgPgDgOQgCgOAQgUQAVgZBiheQBChMAyAAQAZAAAMAPQAVARgpBCQgjA2guArQghAegxAXQgjAPgVAAQgMAAgIgFg");
	this.shape_11.setTransform(239.1,99.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#241F20").s().p("AhqCVQgJgBgFgEQgFgFAAgIQACAHAFAEQAFADAHgBQAIAAAQgGQATgHAbgSQAWgPAQgQIARgSIAQgUQAIgKAWggQAPgWAJgVQANgcADgRQACgNgCgGQgBgEgCgDIgQABIgXAEQgSAFgZAKQgUAKgRAOIgRAQIgQASIgfAkQgQATgNAUQgPAZgFASQgGAYALAXQgIgLgEgLQgEgMABgOQACgVANgdQAJgTAQgYIAdgpIAPgVQAKgMAJgHQASgRAYgOQAVgLAdgIQAQgEAKgBQAPgCAMAAIAFAAIAFADQASALAEAVQADAOgDATQgDAOgGAPIgLAZQgbAwglAnIgSAUQgHAIgOALQgVAQgYAMQgdAOgWAFQgKACgKAAIgHAAg");
	this.shape_12.setTransform(194.9,145.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF5300").s().p("Ah3B7QgWghAYgxQAQgjA3hEQAngxBAgSQAggKAZABQAfAUgeBDQgZA1g0A7QglAqg4AZQgcALgQAAQgSAAgCgQg");
	this.shape_13.setTransform(194.3,146.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#241F20").s().p("Ah2CGQAJADAOgDQAMgEAJgGQAUgLATgPQATgPAQgQQAWgVALgLQADgDALgPIANgRIAZgoIASgcIABgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIAAgFIgBgCIgBgDIgQgQIgBgBIgCgBIgGgBQgHAAgMADQgSAFgXANQgRAKgTAQIgRAQIguA0QgOARgOAWQgPAYgFASQgEANACAJQACALALAIQgNgFgFgMQgEgKABgQQACgVANgcQAIgRAQgZQALgRARgYIAPgUIATgSQAUgSATgOQAagPAWgHQASgFALAAQAHgBALADQALAEAHAJIALALIACADIABABIAAAAIABABIABABIAFAIIAEAJQACAKgBAJQgBAIgFAKIgUAfIgdAlIgPAUQgLANgHAGQgTARgTAOQgVAQgSAKQgdAQgQAFQgMAFgMABIgHAAQgKAAgHgFg");
	this.shape_14.setTransform(126.8,84.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF5300").s().p("AhwB/Qg1ggBziNQAhgpAzgaQA4gcAQAVIAPAPQAHAIABAKQABALgFAIQg1BRgRASQgeAggtAgQgzAjgbAAQgIAAgGgDg");
	this.shape_15.setTransform(126.1,85.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#241F20").s().p("AhlCSIgcgeQgNgMgGgHQgDgFgDgIIgBgGIAAgDIABgCIABgEQAHgKAKgMIARgUQATgVASgPIAngjICBhmIAFgCIAFgCQAHgBAKACQALADAPAHIABAAQAIAGADAFQAEAGABAJQAAANgGAPQgFAPgTAfQgFAKgWAfIgdAqIgQAVIgSATQgUATgTANQgVAPgYAKQgPAGgLADIgNABQgJgBgFgEgAhMCOQAKgEAMgIIAngeIAkghQAYgWALgMIAigkQARgUANgVQAPgYAGgUQAEgOgCgJQgBgGgCgDIgHgGIAAABQgNgFgKAAQgHgBgDABIgBAAIgBABIh7BpIgpAfIgqAgIgVAQIgSASIgCAEIAAAGQABAGADAGQAFAHANAMIAdAdIAAAAQAHAFAPgGg");
	this.shape_16.setTransform(157,185.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF5300").s().p("AhhCNIgdgdQgMgMgEgFQgHgJgBgNQgBgNB4hiQBehRAggXQALgHAgANQAcAQgeA5QgUAkg0A/QggAog1AmQgsAfgVAAQgHAAgEgEg");
	this.shape_17.setTransform(156.8,186.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#241F20").s().p("AhAB4QgHgCgEgDIgEgFIgBgFQgFgCgDgDIgIgIQgDgFgGgNIgCgEQgBAAAAgFIAAgFQABgFADgHQADgJAGgKQAGgLAPgTIAYgeQAUgXAggfQAQgPANgKIAKgHQAIgEAIAAQAJAAAHAFQAEADAGAHIgCgCIAMALQANAJACALQACAIgCAPQgCALgKAcIgPAjQgKAWgJAOIgNAQIgQAPQgRAMgRAJQgTAJgVADIgLACIgMgCgAhUBXQACAJAFAGIABAAIAAABQACAEAEAAIAHAAIAQgGQANgGASgMQAQgMALgKIAxg2QARgRAHgLQAKgSACgRQABgKgDgGQgCgGgHgCIgBgBIgRgIIgCgCIgEgCIgDABIgFAGIgZAcIgwA3Ig+A/IgEAFIAAAAIgBgBg");
	this.shape_18.setTransform(98.7,252.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF5300").s().p("AhQBkQgJgFgDgJQgCgDgGgUQgEgOBHhKQA+hGARgMQAJgGAJAFQAFACADAEIAOAKQAaANgUAwQgQAkglAuQgZAegrAUQgWAKgNAAQgOAAgCgLg");
	this.shape_19.setTransform(98.9,252.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#241F20").s().p("Ag6B0QgMgCgHgGIgDgBIgCgCIgKgKIgEgFQgFgHgCgLIgEgUIgCgJIAAgFIACgFIACgGIALgRQAHgKARgSIAbgbIA2gyIAKgJIAGgEQAMgKAQADQAKABANAHQAIAFAJAIQALAIACAMQADAKgCAMQgDARgJAVIgPAiQgIAUgKAPIgFAJIgGAIQgIAKgHAGQgRAOgTAGQgRAHgWABIgIABIgNgBgAhaA2QgEAJgCAIQgBAKAFAHIAIAJIAEAEIAGACQAGAEAKgCQAIgBAJgEQAOgHARgMQAKgIAPgMIAagYQAOgOALgNQAOgOAGgPQAKgTAAgPQAAgIgDgHQgDgGgHgCIgBgBIgPgGQgIgCgGAAQgEABgCACIgBACIgkAmIgYAbIhHA8QgBABAAgBg");
	this.shape_20.setTransform(122.7,224.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF5300").s().p("AhNBlQgJgEgJgNQgGgJAAgOIADgYQAAgIA6g3QA+g8AKgLQANgNAWAIQAMAFAIAHQAaANgTAxQgQAmgkAsQgYAcgnAPQgXAJgPAAQgLAAgHgFg");
	this.shape_21.setTransform(122.8,225.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#241F20").s().p("AiICdIgCgBIgEgCIgEgEIgGgIQgDgFgBgJQgJgLgBgSQAAgNAEgRQAGgWAPggQAeg+AcgjQALgOAIgJIAKgKIANgKQAYgTAegHQAcgGAfABQAQABANADIAOAEQAIADAFAEIAGAEIAFAEIAHAKIABgDIAAgBIAEgCQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIABABIAAACIAAABIABABIAHANIACADIABACIAAADQABAJgEAMQgEALgMARIgTAYQgkAlgzAnQgsAigxAgQghAUgSAJIgUAKIgJADIgCABgABJiOQgXAEgdANQgYANgRAOIgmAlIgmAoQgUAWgNAVQgQAbgFAXQgEARABAJQACAPAIAFIABABIABAEQACAGADAEIACACIACgBIAGgEIA4grQA1gpAhgeQA6guAcgZIATgTQAJgJAIgKIAEgHIAAgCIABgEIADgLIgCgDIAAABIgDgGIgKgJQgDgCgCgBIgBAAQgHgGgSgBQgQAAgLACg");
	this.shape_22.setTransform(41.3,163.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF5300").s().p("AiDCUQgHgCgEgKIgDgKQgcgZAohNQAkhDA6g5QAlgkA8gJQA4gIAQAQIAHAEQAHAFAFAJQAGALABgGIACAOQAFAiiPBuQiEBpgSAAIgBgBg");
	this.shape_23.setTransform(41,163.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#595959").ss(1,0,0,4).p("AJg1xQgiBAgxBRQhhCjhMBZQk7F1ofIEQo+IdjvCGILjM7QGAm3GsnVQNcupDkiWg");
	this.shape_24.setTransform(132.8,140.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6DBC6").s().p("A0nI3QDviGI+ocQIeoEE8l2QBLhZBiiiQAxhSAig/ILIMZQjlCWtbOoQmsHVmAG3g");
	this.shape_25.setTransform(132.9,140.3);

	this.shape_1.mask = this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = mask;

	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,7.4,271.2,271.2);


(lib.insideModerate = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,0,4).p("AU8AAQAAIrmJGIQmIGJorAAQopAAmJmJQmImIAAorQAAoqGImIQGJmJIpAAQIrAAGIGJQGJGIAAIqg");
	this.shape.setTransform(136.2,143.6);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoBUBQjyhmi7i7Qi8i7hmjzQhqj7AAkTQAAkRBqj7QBmjyC8i7QC7i7DyhnQD7hqEQAAQETAAD7BqQDyBnC7C7QC7C7BnDyQBqD7AAERQAAEThqD7QhnDzi7C7Qi7C7jyBmQj7BqkTAAQkQAAj7hqg");
	mask.setTransform(136.2,138.8);

	// bronchi
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#241F20").p("AVGAAQAAkRhqj7Qhmjyi7i7Qi7i8jzhmQj6hrkTAAQkRAAj7BrQjyBmi7C8Qi7C7hnDyQhqD7AAERQAAETBqD7QBnDyC7C7QC7C7DyBnQD7BqERAAQETAAD6hqQDzhnC7i7QC7i7BmjyQBqj7AAkTg");
	this.shape_1.setTransform(136.5,144.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(0.5).p("AylM/QGMlEHJmoQOPtPEwn0IE2FiQnZHXnwH6QvdP4huC1g");
	this.shape_2.setTransform(130.2,139.8,1,1,0,0,0,0.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#241F20").ss(0.5).p("AxZM+QGCk9G8mYQN2suEjnIIDbDzQnGHCncHkQu3PMhtC1g");
	this.shape_3.setTransform(129.8,140.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#7B5400","#E8BAB9"],[0,1],-15.8,-16.8,21.4,20.7).s().p("AxYM+QGBk8G8mYQN2suEjnIIDbDzQnGHBncHkQu2PMhuC1g");
	this.shape_4.setTransform(129.8,140.7);

	this.instance = new lib.Path_2_7();
	this.instance.setTransform(152,166.1,1,1,0,0,0,105.2,111.5);
	this.instance.alpha = 0.719;

	this.instance_1 = new lib.Path_3_7();
	this.instance_1.setTransform(152.6,166,1,1,0,0,0,104.5,111.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_4_6();
	this.instance_2.setTransform(110.5,107.8,1,1,0,0,0,107,106.7);
	this.instance_2.alpha = 0.719;

	this.instance_3 = new lib.Path_5_6();
	this.instance_3.setTransform(110.5,107.8,1,1,0,0,0,107,106.7);
	this.instance_3.alpha = 0.5;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#241F20").s().p("AhnCTQgNgEgLgLIAAAAQgNgGgEgPQgDgMABgQQADgWANgeQAVgsAkgtIASgUQALgLAJgIQAUgRAYgNQAcgOAYgFQAPgEAPACQALACAFAEQAIAEAEAIIAJAHIAJANIADAGIABABIAAACIABACIADAHQADAEgCAFIgDAOQgBAEgHAIIg0A8QgPARgVAVQgTATgUARIg7AzIgXAQQgHAFgJAAQgGAAgHgCgAhmCLQAOABAHgGICYiOQAWgTARgQQAJgHAJgMQAGgFABgEQADgHAAgGQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFgEIgDgDIgBgBIgEgHQgIgKgIgDIgDgBIgCgEQgDgFgLgCQgHAAgPADQgUAGgZANQgVANgRAQQgLAJgHAIIgSASQgoAugUAiQgPAbgGATQgEANACALQABAMAJAJIAAABIABgBQALAHAMACg");
	this.shape_5.setTransform(95.4,120.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF5300").s().p("AhtCKIgRgJQgfgVAfhCQAbg2A1g6QAlgoA0gVQA4gWAMAbIAIAFQAKAIAGAMQADAGAEAEQACAEgEAOQgFAQhjBbQhbBYgWAPQgHAFgJAAQgHAAgJgEg");
	this.shape_6.setTransform(95.4,121.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFAF22").ss(5).p("Ax9M+QGXlMHKmlQOStKEDnCIEEEpQnPHNnmHvQvJPihuC1g");
	this.shape_7.setTransform(130.2,140.6,1,1,0,0,0,0.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#241F20").s().p("AhOBsQgPgIgEgPQgEgMACgOQACgQALgYQARgeAeggIANgOIAPgNQALgJAUgMQASgJASgGQALgDAIAAIAFABIgFAAQgHAAgLADQgQAFgTAMQgOAIgOAPIgMAOIgLAPQgVAigNAgQgHARgBAQQAAAGACAGIACADIAZgGIAPgGQAIgDAHgFIAMgJIANgJIAzgvQATgRAFgIQAMgRgBgPQAAgKgFgOQAGANAAALQABAJgCAIQgCAJgFAIQgIAMgOARIgqA4IgOANIgOAMIgPAKIgjAPIgTAEIgEABg");
	this.shape_8.setTransform(176.6,34.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF5300").s().p("AhUAoQAQgoAkgqQAZgfApgTQAtgTAEAVQATAmgTAeQgiAigVAbQgbAjgpASIglAKQgagNATgxg");
	this.shape_9.setTransform(177.3,33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#241F20").s().p("AhNBsIgEgCQgPgHgEgPQgEgNACgMQACgUALgVQARghAbgeIAOgPQAGgHAIgGQARgOAPgIQAVgLARgBQAMgBAIACQAJADAIAHQgPgJgVAGQgRAGgPAKQgPALgLANIgXAcQgZAjgLAaQgJATgBANQgBAHACAFIADAEIABAAIAHgCIAcgMIANgJIAXgVIAsgzQAOgOAMgKIANgLQAHgHACgGQADgFgCgKIgGgQQAGAHAEAIQAFAKgCAIQgBAIgHAKIg+BRIgLAPIgNANIgMANIgPALQgIAGgJADIgSAHIgVAEg");
	this.shape_10.setTransform(156.3,59.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF5300").s().p("AhUAlQAQgmAlgrQAbgfAggPQAkgQAVAQQARAcgQATQgiAggZAjQgeAvgpATIgjAJQgZgNAUgxg");
	this.shape_11.setTransform(156.7,58.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#241F20").s().p("Ah4CEQgPgJgHgIQgFgGgCgHQgCgIACgHQADgLAKgPQAIgMAJgLQAQgUAUgTIBehgQAKgJANgIQAcgSAagDQAQgDAOAFQARAGAJALIgBgBQAGAFACAJQABAFgBAJQgBAKgHAPQgIAVgOAYQgcAygfAfIgTASQgLAJgKAGQgUAMgYALQgaAKgWAGQgOADgLAAIgFAAQgNAAgHgFgABch1QgJACgOAIQgJAFgLAJQgSAOgUAVIgiAoQgQARgXAUIgqAjIgUARQgMALgEAIQgDAHAAAEQABAEAEAHQAFAIAPAKQAIAGAPgCQAIgBAPgFQAYgJAUgNQAVgOAQgPQAIgHAKgJIAxg1IAhgjQARgUAJgVQAFgMACgKQACgNgIgFIgBgBQgIgIgMgCIgIgBQgHAAgIADg");
	this.shape_12.setTransform(236.8,97.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF5300").s().p("Ah3B/QgYgPgDgOQgCgOAQgUQAVgZBiheQBChMAyAAQAZAAAMAPQAVARgqBCQgjA2guArQggAegxAXQgkAPgVAAQgMAAgHgFg");
	this.shape_13.setTransform(236.8,97.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#241F20").s().p("AhrCVQgJgCgEgDQgFgFAAgIQABAHAGAEQAFADAHgBQAJAAAPgGQATgHAagSQAYgQAPgPQAKgKAHgIIAQgUQAIgKAVggQAPgWAKgVQAMgZAEgUQACgLgCgIQgBgEgDgDIgPABIgXAEQgTAFgZAKQgTAKgRAOIgRAQIgwA2QgQAUgMATQgPAWgFAVQgHAZAMAWQgJgKgDgMQgEgLABgPQABgVANgdQAIgQASgbIAcgpIAQgVQAHgJALgKQATgRAXgOQAWgLAcgIIAbgFQAPgCAMAAIAFAAIAFADQAIAFAGAJQAGAJABAJQAEAPgEASQgCAOgGAPQgHAQgFAJQgZAtgmAqIgTAUQgJAKgMAJQgUAQgYAMQgdAOgWAFQgLACgJAAIgIAAg");
	this.shape_14.setTransform(192.6,143.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF5300").s().p("Ah2B7QgWghAXgxQAQgjA4hEQAmgxBAgSQAggKAZABQAfAUgeBDQgZA1g0A7QglAqg4AZQgcALgPAAQgTAAgBgQg");
	this.shape_15.setTransform(192,144.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#241F20").s().p("Ah2CHQAJADAOgEQAMgEAJgFQAUgLATgQIAjgeQATgSAOgPQADgCALgPIANgSIAZgnIATgeQABgCAAgDIAAgFIgBgCIgBgCIgBgBIgCgDIgNgMIgBgCIgCgBIgGgBQgJAAgKADQgQAFgZAOQgRAJgTARIgRAPIgQARIgeAjQgQATgMAUQgQAZgEARQgEAOACAIQACAMALAIQgNgGgFgMQgEgJABgRQACgVANgbQAIgSAQgZQALgRARgXIAPgVIATgSQASgQAVgPQAagQAWgHQAOgFAPAAQAKAAAIADQALADAHAJIAOAPIAAABIACABIAFAIIAEAJQACAKgBAJQgBAIgFAKIgUAfIgdAmIgPATQgNAPgFAEQgQAOgWARQgZATgOAIQgbAOgSAHQgMAEgMABIgFAAQgMAAgHgEg");
	this.shape_16.setTransform(128.8,85.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF5300").s().p("AhwB/Qg1ggBziNQAhgpAzgaQA4gcAQAVIAPAPQAHAIABAKQABALgFAIQg1BRgRASQgeAggtAgQgzAjgbAAQgIAAgGgDg");
	this.shape_17.setTransform(128.1,86.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#241F20").s().p("AhlCSIgcgeQgNgMgGgHQgDgFgDgIIgBgGIAAgDIABgCIABgEQAHgKAKgMIARgUQATgVASgPIAngjICBhmIAFgCIAFgCQAHgBAKACQALADAPAHIABAAQAIAGADAFQAEAGABAJQAAANgGAPQgFAPgTAfQgFAKgWAfIgdAqIgQAVIgSATQgUATgTANQgVAPgYAKQgPAGgLADIgNABQgJgBgFgEgAhMCOQAKgEAMgIIAngeIAkghQAYgWALgMIAigkQARgUANgVQAPgYAGgUQAEgOgCgJQgBgGgCgDIgHgGIAAABQgNgFgKAAQgHgBgDABIgBAAIgBABIh7BpIgpAfIgqAgIgVAQIgSASIgCAEIAAAGQABAGADAGQAFAHANAMIAdAdIAAAAQAHAFAPgGg");
	this.shape_18.setTransform(154,183.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF5300").s().p("AhhCNIgdgdQgMgMgEgFQgHgJgBgNQgBgNB4hiQBehRAggXQALgHAgANQAcAQgeA5QgUAkg0A/QggAog1AmQgsAfgVAAQgHAAgEgEg");
	this.shape_19.setTransform(153.8,184.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#241F20").s().p("AhAB4QgHgCgEgDIgEgFIgBgFQgFgCgDgDIgIgIIgJgSIgCgEIgBgFIAAgFIADgMIAKgTQAIgPANgPIAYgeQASgWAhggIAegZIAKgHQAIgEAIAAQAJAAAHAFQAFAEAEAFIALAKQAMAIADAMQACAIgCAPQgDAQgJAXIgPAjQgKAWgKAOIgFAIIgIAIIgQAPQgPAMgSAJQgTAJgVADIgLACIgMgCgAhWBFIACASQABAIAGAHIABABQACAEAEAAIAHAAQAFgBALgFQAPgHAQgLQANgJAOgNIAxg2QARgRAHgLQAKgUACgPQABgKgDgGQgDgGgHgCIAAgBIgRgIIgCgCIgFgCIgCABIgGAGIgYAcIgwA3IgzAyIgPASIgBgBg");
	this.shape_20.setTransform(96,249.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF5300").s().p("AhRBkQgIgFgDgJIgIgXQgEgOBGhKQA+hGARgMQAJgGAKAFQAEACADAEIAPAKQAaANgUAwQgRAkglAuQgZAfgqATQgWAKgNAAQgOAAgDgLg");
	this.shape_21.setTransform(96.3,249.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#241F20").s().p("Ag5BzQgOgCgGgFIgKgIIgFgFIgDgFQgFgHgDgLIgEgUIgCgJIAAgCIAAgDIACgFIACgGQAFgKAGgHQAKgNAPgPQAPgRALgKIA2gyIAQgOQAMgIARACQAKACAMAGQAKAGAHAHQAKAHAEANQACAJgCANQgCAPgKAXIgPAiQgHARgLASIgLARQgHAJgIAGQgPANgVAIQgTAIgUAAIgFABIgPgCgAhUBhIAEADIAGADIAAAAQAGAEALgCQAFgBALgFQALgFAUgNIAagUIAMgLIANgNIAZgbQANgMAIgRQAJgUAAgOQABgKgEgGQgDgEgGgDIgCgBIgPgGQgHgDgGABQgFABgCACIgBACIhXBYIgqAjIgCACIAAAAIAAgCIgFALQgEAJgCAIQgBAKAFAHIAAAAQAEAGAEADg");
	this.shape_22.setTransform(119.3,223);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF5300").s().p("AhNBkQgKgDgIgNQgGgJAAgOIACgYQABgIA6g3QA+g8AKgLQAMgNAXAIQALAFAJAHQAZANgSAwQgQAnglArQgYAdgnAPQgWAJgPAAQgLAAgHgGg");
	this.shape_23.setTransform(119.5,223.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#241F20").s().p("AiICdIgCgBIgBAAIgDgBIgFgEIgFgJQgEgHgBgHQgIgLgBgRQAAgPAEgPQAGgWAPggQAcg7AegnIAdghIANgKQAYgSAdgHQAbgHAhACQATABAKACIAOAEQAIADAEAEIAHAEIAFAFIAFAFIACAEIABgBIAAgCIAAAAQAAgBABAAQAAgBAAAAQABAAABAAQAAgBABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABACIAAABIAAABIABABIAHAOIADAEIAAAEQABAJgEALQgEALgMASIgTAXQglAmgzAmQgvAlguAdQgQALgiATIgUAJIgJAEIgCAAIgBAAIgCAAgABIiOQgZAFgaAMQgXAMgSAPIgKAIIgcAdQgUAUgSAVQgUAVgNAVQgQAcgFAXQgEANABANQABANAJAGIABACIABADIAFALIACACIAHgFIA4gsQA2gpAhgeQA6guAbgZIAUgTQALgKAGgIIADgHIABAAIACgOIABgFIgBgBIgIgKIgFgFIgFgDIgBAAIAAAAQgHgGgSgBQgQAAgMACg");
	this.shape_24.setTransform(43.7,166.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF5300").s().p("AiDCVQgHgCgEgLIgDgKQgcgZAohNQAjhCA7g5QAlgkA8gKQA4gIAQAQIAGAEQAIAFAFAKQAGAKABgGIACAPQAFAhiPBuQiEBpgSAAIgBAAg");
	this.shape_25.setTransform(43.3,166.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#595959").ss(1,0,0,4).p("AJg1xQgXAUgZAjQg0BHgSBMQgLAxgvA5Qg4A9gYAcIgWAbQgLAKgFAFQgKAKgEAJQg0CGiIBKQghASgQAhQhRCwipBSQgaANgWAWQgWAWgNAaQgmBJhKBJQhNBLhRAnQhiAwgeAVQhCAugPBEQgVBdhrBRQgdAWg/AoQg7AlgYAUQhAAzhTAxQguAchKAnILjM7QAVgLAcgZQA4gzAjhIQAvhiAZgjQA4hPBLgRQAZgFAGgPQAKgZAAAAQA5hQAegqQA2hLA4gZQAtgSAdggQAbgfAUgzQAth1A5hKQBNhkBagDQAygCAdggQAbgegGgrQgNhVBnhSQA6gsB9hLQBSg5AcgZQA2gxARg2QAihmBUhMQBQhJBLgGQAxgDAWggQACgCANgWQAIgOAIgGg");
	this.shape_26.setTransform(132.8,140.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6DBC6").s().p("A0nI3QBJgnAvgbQBSgxBAgzQAZgUA6glQBAgpAcgVQBshRAVheQAPhDBCguQAdgWBjgvQBRgnBNhMQBKhIAmhJQANgbAWgVQAWgXAagMQCohSBSiwQAPgiAigSQCIhJA0iHQADgIALgKIAQgQIAWgbQAXgbA5g+QAug4AMgxQARhNA0hGQAagjAXgUILIMZQgIAFgIAOIgPAZQgWAfgxAEQhMAGhQBIQhTBMgiBnQgRA1g2AxQgcAahSA5Qh9BKg6AsQhnBSANBVQAGArgcAfQgcAfgyACQhaAEhNBkQg5BJgtB1QgVA0gbAeQgcAggtATQg4AYg2BMIhXB5IgLAZQgFAPgZAGQhLARg5BPQgZAjguBiQgjBIg4AyQgcAZgVALg");
	this.shape_27.setTransform(132.9,140.2);

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = mask;

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,7.4,271.2,271.2);


(lib.lungs4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.arrowwhite();
	this.instance.setTransform(-241.2,193.1,0.5,0.5,0,0,0,29,30.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regX:28.9,regY:30.6,rotation:1.7,x:-159.2,y:105.1,alpha:1},7).to({regX:29,regY:30.5,rotation:0,x:-64.7,y:12.6,alpha:0},7).wait(7).to({rotation:180},0).to({regX:28.9,regY:30.6,rotation:181.7,x:-159.3,y:105,alpha:1},7).to({regX:29,regY:30.5,rotation:180,x:-241.2,y:193.1,alpha:0},7).to({_off:true},1).wait(15));

	// Layer 5
	this.instance_1 = new lib.arrowwhite();
	this.instance_1.setTransform(-241.2,193.1,0.5,0.5,0,0,0,29,30.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({regX:28.9,regY:30.6,rotation:1.7,x:-159.2,y:105.1,alpha:1},7).to({regX:29,regY:30.5,rotation:0,x:-64.7,y:12.6,alpha:0},7).wait(21).to({rotation:180},0).to({regX:28.9,regY:30.6,rotation:181.7,x:-159.3,y:105,alpha:1},7).to({regX:29,regY:30.5,rotation:180,x:-241.2,y:193.1,alpha:0},7).to({_off:true},1).wait(8));

	// Layer 6
	this.instance_2 = new lib.arrowwhite();
	this.instance_2.setTransform(-241.2,193.1,0.5,0.5,0,0,0,29,30.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:28.9,regY:30.6,rotation:1.7,x:-159.2,y:105.1,alpha:1},7).to({regX:29,regY:30.5,rotation:0,x:-64.7,y:12.6,alpha:0},7).wait(35).to({rotation:180},0).to({regX:28.9,regY:30.6,rotation:181.7,x:-159.3,y:105,alpha:1},7).to({regX:29,regY:30.5,rotation:180,x:-241.2,y:193.1,alpha:0},7).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_3 = new lib.insideSevere();
	this.instance_3.setTransform(-148.2,101,1,1,0,0,0,135.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65));

	// Layer 2
	this.instance_4 = new lib.Path_0();
	this.instance_4.setTransform(60.7,73.5,1,1,0,0,0,56.1,73.7);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65));

	// Layer 1
	this.instance_5 = new lib.lungspair();
	this.instance_5.setTransform(72.6,128.6,1,1,0,0,0,71.6,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.88,y:121.2},29,cjs.Ease.get(1)).wait(6).to({scaleY:1,y:128.6},29,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.4,-38.5,429.1,278.6);


(lib.lungs3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.arrowwhite();
	this.instance.setTransform(-241.2,193.1,0.7,0.7,0,0,0,29,30.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({x:-156,y:105.9,alpha:1},10).to({x:-64.7,y:12.6,alpha:0},10).wait(9).to({rotation:180},0).to({x:-156,y:105.9,alpha:1},10).to({x:-241.2,y:193.1,alpha:0},10).to({_off:true},1).wait(20));

	// Layer 4
	this.instance_1 = new lib.arrowwhite();
	this.instance_1.setTransform(-241.2,193.1,0.7,0.7,0,0,0,29,30.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({x:-156,y:105.9,alpha:1},10).to({x:-64.7,y:12.6,alpha:0},10).wait(29).to({rotation:180},0).to({x:-156,y:105.9,alpha:1},10).to({x:-241.2,y:193.1,alpha:0},10).to({_off:true},1).wait(10));

	// Layer 5
	this.instance_2 = new lib.arrowwhite();
	this.instance_2.setTransform(-241.2,193.1,0.7,0.7,0,0,0,29,30.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-156,y:105.9,alpha:1},10).to({x:-64.7,y:12.6,alpha:0},10).wait(49).to({rotation:180},0).to({x:-156,y:105.9,alpha:1},10).to({x:-241.2,y:193.1,alpha:0},10).wait(1));

	// Layer 3
	this.instance_3 = new lib.insideModerate();
	this.instance_3.setTransform(-148.2,101,1,1,0,0,0,135.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	// Layer 2
	this.instance_4 = new lib.Path_0();
	this.instance_4.setTransform(60.7,73.5,1,1,0,0,0,56.1,73.7);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// Layer 1
	this.instance_5 = new lib.lungspair();
	this.instance_5.setTransform(72.6,128.6,1,1,0,0,0,71.6,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.88,y:121.2},39,cjs.Ease.get(1)).wait(10).to({scaleY:1,y:128.6},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.4,-38.4,429.1,280.2);


(lib.lungs2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.arrowwhite();
	this.instance.setTransform(-241.2,193.1,1,1,0,0,0,29,30.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:-156,y:105.9,alpha:1},15).to({x:-64.7,y:12.6,alpha:0},15).wait(15).to({rotation:180},0).to({x:-155.8,y:105.7,alpha:1},18).to({x:-241.2,y:193.1,alpha:0},17).to({_off:true},16).wait(15));

	// Layer 5
	this.instance_1 = new lib.arrowwhite();
	this.instance_1.setTransform(-241.2,193.1,1,1,0,0,0,29,30.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:-156,y:105.9,alpha:1},15).to({x:-64.7,y:12.6,alpha:0},15).wait(48).to({rotation:180},0).to({x:-155.8,y:105.7,alpha:1},17).to({x:-241.2,y:193.1,alpha:0},16).wait(15));

	// Layer 4
	this.instance_2 = new lib.arrowwhite();
	this.instance_2.setTransform(-241.2,193.1,1,1,0,0,0,29,30.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-156,y:105.9,alpha:1},14).to({x:-64.7,y:12.6,alpha:0},15).wait(80).to({rotation:180},0).to({x:-155.8,y:105.7,alpha:1},16).to({x:-241.2,y:193.1,alpha:0},14).wait(1));

	// Layer 3
	this.instance_3 = new lib.insideNormal();
	this.instance_3.setTransform(-148.2,101,1,1,0,0,0,135.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140));

	// Layer 2
	this.instance_4 = new lib.Path_0();
	this.instance_4.setTransform(60.7,73.5,1,1,0,0,0,56.1,73.7);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140));

	// Layer 1
	this.instance_5 = new lib.lungspair();
	this.instance_5.setTransform(72.6,128.6,1,1,0,0,0,71.6,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.88,y:121.2},59,cjs.Ease.get(1)).wait(15).to({scaleY:1,y:128.6},65,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.4,-38.4,429.1,280.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;