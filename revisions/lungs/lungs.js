(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 496,
	height: 525,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.lungs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.buttZero.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.buttOne.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(0);
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 11
	this.buttZero = new lib.next();
	this.buttZero.setTransform(1.8,481.3);
	new cjs.ButtonHelper(this.buttZero, 0, 1, 2, false, new lib.next(), 3);

	this.buttOne = new lib.anim();
	this.buttOne.setTransform(1.8,481.3);
	new cjs.ButtonHelper(this.buttOne, 0, 1, 2, false, new lib.anim(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.buttZero}]}).to({state:[{t:this.buttOne}]},1).wait(1));

	// Layer 9
	this.instance = new lib.loop1();
	this.instance.setTransform(253,236.9,1,1,0,0,0,7.5,-1.7);

	this.instance_1 = new lib.lables();
	this.instance_1.setTransform(253,236.9,1,1,0,0,0,7.5,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(248.8,265.1,456.8,524.5);


// symbols:
(lib.next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Labels", "bold 15px 'Arial'");
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


(lib.Path_8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AvfGyQCCi4CgjHQFAmNCUhRIAGgBIAGAAIgEAAIAoA9QAyA8A0AAQA5AAAogkQAggbAig/QCDBdCzCaQFmEyD0E6g");
	this.shape.setTransform(99.2,44.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.7,198.5,86.8);


(lib.Path_7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AlXImIgbgVIh1r+QgWh4AYh0QAMg6AQgiQAgCMBTBLQAVATAjAXQAaARADAHQAHAPAACYQAMClBBBgQAaAmEeBrQCSA2CmA7IAuAVQAHAMg7AeQg4AdlVAlQiqASivARIgGAAQgOAAgagQg");
	this.shape.setTransform(49.9,56.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99.7,113.4);


(lib.Path_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2625").s().p("AGpIsQhrhrAXiCQAUhVAFgbQAHgqgVgtQgYgygugbQgqgYgyAAQgrAAgzA5QgtAygDAfQgDAXgwgjQgwghgIgSQgVgsg9g6Ig6gzIhvhQIl6hoQgEgaACgiQADhCAdgkQAcgjCChJQCXhWBqgUQCFgZC9ANQDSAOBUA0QBUAzBYB7QBPBuATBIQAVBLAQBvQATB+gMApIhQEFQhFDcgCALQg6gbg1g1g");
	this.shape.setTransform(69.2,63.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.1,138.5,127.4);


(lib.Path_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2625").s().p("AgwEAQgqg4gzhRQgrhEgGgGQgVgUgaj2Qgaj0AIgJQAJgKBXAUQB5BIAOABQAJAABCA9QA9A2ASAUQAJAKA4DXQA6DeADAGQAKAXgnEDQiCgdiRjCg");
	this.shape.setTransform(25.7,47.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,51.7,95.8);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("Ai7FKQgNgFAJgsQAShmAEgaQAbjehLkHQAdBfAeBQQA2CNApAvQA/BMBdBdQBoBjAVAAQkMAihdAAQggAAgMgDg");
	this.shape.setTransform(23.4,38.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.5,5,43.8,66.8);


(lib.Path_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AggE/Qi3gVAmAAQASAABWhkQBNhcA1hNQAiguAtiNQAYhOAZhfQg+EGAWDcQADAbAQBmQAHAsgLAEQgJAEgZAAQgxAAhtgNg");
	this.shape.setTransform(18,38.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,5.3,37.1,66.5);


(lib.Path_2_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AlTFqQgPiSAIgPQAEgGBWjsQBTjmAMgKQAXgTBTg5QBZg/AMAAQARAACghJIA7gHQA8gGAGAGQALAKgtEFQguEHgcAVQgHAFg8BIQhGBVg5A7QjFDKiqAaQgKhGgIhIg");
	this.shape.setTransform(35,50.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,100.9);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AiBDZQgjgNAIgYQALgiAShCQAUhMAAgRIgIg6QgFgpAKgRQAUgYAagXQAzgvAXgBQAygCAeAKQAzASAMA0QAQBAgcBVQgfBeg3AfQgrAYgqAnQgkAfgKACIgNABQgSAAgWgIg");
	this.shape.setTransform(15.9,22.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.9,45.1);


(lib.Path_1_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AmBCfQCuATC3AQQFqAhAngPQAmgOh3jLQg8hnhDhkQgFAbgPAfQgdA9grATQhFAfmFDGg");
	this.shape.setTransform(40.4,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("AgaC+Qi3gQiugTQGFjGBFgfQArgTAdg9QAPgfAFgbQBDBkA8BnQB3DLgmAOQgMAFgrAAQhgAAj6gXg");
	this.shape_1.setTransform(40.2,22.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,79.8,44.7);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2625").s().p("AAvKQIgMjGQgDgthMkmQhUk5gxh5QguhxAPjUQAHhrARhUQCQEXCMLLQBHFnApEvIifAHQACgMgIikg");
	this.shape.setTransform(21.3,83.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.6,166.5);


(lib.Path_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2625").s().p("Ai+LgQAmkOA/lAQB9p+CCj5QAPBWAGBrQAODUgpBlQgrBog7EHQgzDmgDAzQgCAUgZCbQgZCSABAIg");
	this.shape.setTransform(19.1,74.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,148.5);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AABGYQiKgEgXgHQgTgFACgEIAkgoQAcgdAyluQAZi4AUiyQAHCbBHE2QBHEsAVAAQATAAAGAUQAGAUgTAJQgMAFg+AAIhZgCg");
	this.shape.setTransform(17.9,41.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,35.8,82.2);


(lib.Path_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#241F20").ss(0.5).p("AAFq1QAKCsAHB4QAODmAPAgQAQAhAtA2QAXAbATAUIAlA0QAoA5AMAOQASAUAqAwQAjAoAOAKQAoAcAQAJQAbARAIgGQAJgHARgiQATglACgWQAGgUAChIQABgmgCgcQgCgTABgFQADgGAKgDQALgDAGAGQAIBbgCAQIAbhTIAKgDQALABAGAQIgnCRIAXgKQAYgLAJgCQAMgDAJALQAKAKgNAFQgNAFgdAXQgbAXgLAPQgMAPgUAdQgUAfgDAIIBuAzQADACAUAHQAJAEAEAIQAFALgYAEQgYAFgQgLIANAPQANASAEAPQAEARgOAEQgOADgLgMQgDgDgVgnQgSgggMgDQgZgJgPgEQgcgJgMABQgNABgGAHQgEADgFANQgEAJAGAfQAGAfAJAPQAHAOAaAaQAPAOAUATQAHAGAVARQATAPAEAHQAFAJgKAJQgJAJgHgBQgEgBgZgXQgbgXgGgDIA3BOQAKANgJAPQgJAQgPgMQhIhpgOgQIgIAVQgIAXgCAKQgDAMgMgFQgMgEgDgMQgBgEADhFQABhAgGgGQgHgHgGABQgIACgHAAQgIAAgYANQgMAHgKAGQgJgHgHgIQgOgQAHgDQAPgHAWgNQAdgRABgIQAQgQAGgWQANgsgsgeQgsgehnhzQhkh0gNgNQgWgXgugCQg3gFgkAgQgKANhaBzQhbBzgnAeQgnAfALAsQAGAWAOAQQABANA6AgQAKAFgeAdQglgagLAAQgKgBgDgBQgGgBgGAHQgGAGACBAQACBGgBADQgCAMgLAEQgLAEgCgLQgCgKgHgXIgHgVQgNAQhABpQgNAMgIgQQgJgPAJgOIAyhNQgGACgXAYQgXAXgDABQgHABgIgJQgIgKAEgIQADgHARgQQAYgVABgBQA0g3AJgSQAIgPAFgfQAFgfgEgJQgEgMgDgEQgGgHgLgBQgLgBgZAIQgbALgJACQgKADgQAhQgTAngDADQgJALgNgDQgMgDAEgRQAEgPALgSIALgPQgNALgWgFQgWgEAFgLQADgIAIgEQARgHAEgCIBhg0QgCgHgSgfQgRgdgLgQQgKgOgYgXQgZgXgMgFQgMgFAJgKQAIgLALADQANAEAkATIgjiSQAGgQAKAAQAFAAAEADIAXBTQgBgKAEgzIADguQAGgGAJADQAJADACAGQACAFgCATQgCAcABAmQABBIAGAUQACAXAQAkQAQAiAIAHQAHAFAYgQQAQgKAigbQAOgLAegmQAdgjAXgiQBzikAmhXQANgbADgQIAAgKQAAgFgQj3QgQjvAAgQ");
	this.shape_1.setTransform(63.6,69.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E38EBC").s().p("AoPKsQgJgPAJgOIAyhNQgGACgXAYQgXAXgDABQgHABgIgJQgIgKAEgIQADgHARgQIAZgWQA0g3AJgSQAIgPAFgfQAFgfgEgJQgEgMgDgEQgGgHgLgBQgLgBgZAIIgkANQgKADgQAhQgTAngDADQgJALgNgDQgMgDAEgRQAEgPALgSIALgPQgNALgWgFQgWgEAFgLQADgIAIgEIAVgJIBhg0QgCgHgSgfQgRgdgLgQQgKgOgYgXQgZgXgMgFQgMgFAJgKQAIgLALADQANAEAkATIgjiSQAGgQAKAAQAFAAAEADIAXBTQgBgKAEgzIADguQAGgGAJADQAJADACAGQACAFgCATQgCAcABAmQABBIAGAUQACAXAQAkQAQAiAIAHQAHAFAYgQQAQgKAigbQAOgLAegmQAdgjAXgiQBzikAmhXQANgbADgQIAAgKIgQj8QgQjvAAgQICagCIAREkQAODmAPAgQAQAhAtA2QAXAbATAUIAlA0QAoA5AMAOIA8BEQAjAoAOAKQAoAcAQAJQAbARAIgGQAJgHARgiQATglACgWQAGgUAChIQABgmgCgcQgCgTABgFQADgGAKgDQALgDAGAGQAIBbgCAQIAbhTIAKgDQALABAGAQIgnCRIAXgKQAYgLAJgCQAMgDAJALQAKAKgNAFQgNAFgdAXQgbAXgLAPQgMAPgUAdQgUAfgDAIIBuAzIAXAJQAJAEAEAIQAFALgYAEQgYAFgQgLIANAPQANASAEAPQAEARgOAEQgOADgLgMQgDgDgVgnQgSgggMgDIgogNQgcgJgMABQgNABgGAHQgEADgFANQgEAJAGAfQAGAfAJAPQAHAOAaAaIAjAhIAcAXQATAPAEAHQAFAJgKAJQgJAJgHgBQgEgBgZgXQgbgXgGgDIA3BOQAKANgJAPQgJAQgPgMQhIhpgOgQIgIAVQgIAXgCAKQgDAMgMgFQgMgEgDgMQgBgEADhFQABhAgGgGQgHgHgGABQgIACgHAAQgIAAgYANIgWANIgQgPQgOgQAHgDQAPgHAWgNQAdgRABgIQAQgQAGgWQANgsgsgeQgsgehnhzQhkh0gNgNQgWgXgugCQg3gFgkAgIhkCAQhbBzgnAeQgnAfALAsQAGAWAOAQQABANA6AgQAKAFgeAdQglgagLAAIgNgCQgGgBgGAHQgGAGACBAIABBJQgCAMgLAEQgLAEgCgLQgCgKgHgXIgHgVQgNAQhABpQgGAFgEAAQgGAAgFgJg");
	this.shape_2.setTransform(63.6,69.4);

	this.addChild(this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-1,128.8,140.9);


(lib.Path_9 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#241F20").ss(0.5).p("AFzGdQAAgNgRhhQgUhvgEglQgGg0g5hZQg0hRgZgNQiLhEhlgHQgkgChfAPQgqAHg1AxQg0AxgCAkQgCAaAuAZQAYANAkAPQANAHgQAjQgNAZgOASQgHAJgTgEQgSgFgCgGQgWg8gJgKQgBgCgKgdQgHgWgJAEQgNAHAQiPQACgYAjgdQAwgnBQgMQAcgICRAGQAjACBJAgQAWAJACgTQACgTgZgMQgngUgCgBQgWgJgegJQgjgJhGgBQg+gBgoAFQgjAEg8AaQgXAKg+AfQgVAKgcAhQgOARgKAOQgBAEgGgBQgOgDgfgaIAHg4QgIgHgGgKQgLgUAPgQQAogxAdgiQA4hBAUgHQAYgIA7gCQA9gDAkAIQAHABA/AcQBTAkCnAzQBXAbBrBgQAZAgAjBKQATApAhBHQAXAwAgB4QAgB7AHBE");
	this.shape_1.setTransform(53.1,41.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E38EBC").s().p("AFiEvQgUhvgEglQgGg0g5hZQg0hRgZgNQiLhEhlgHQgkgChfAPQgqAHg1AxQg0AxgCAkQgCAaAuAZQAYANAkAPQANAHgQAjQgNAZgOASQgHAJgTgEQgSgFgCgGQgWg8gJgKIgLgfQgHgWgJAEQgNAHAQiPQACgYAjgdQAwgnBQgMQAcgICRAGQAjACBJAgQAWAJACgTQACgTgZgMIgpgVQgWgJgegJQgjgJhGgBQg+gBgoAFQgjAEg8AaIhVApQgVAKgcAhQgOARgKAOQgBAEgGgBQgOgDgfgaIAHg4QgIgHgGgKQgLgUAPgQIBFhTQA5hBATgHQAYgIA7gCQA9gDAkAIQAHABA/AcQBTAkCnAzQBXAbBrBgQAZAgAjBKIA0BwQAXAwAgB4QAhB7AGBEIicADQAAgNgRhhg");
	this.shape_2.setTransform(53.1,41.6);

	this.addChild(this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.8,107.6,84.8);


(lib.Path_7_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADmGxQAtioAAgsQABgphKhuQhgiLgHgPQgZg0hoiFQheh0gZgXQiWiPhBgpQA+AZBHAjQCPBGAxAuQA2A2CGC8QB+CwAbA3IAsBcQAUAugCANQgDAXgSA1QgXA/gSARQgQAOgyBqIgyBtQAWhMAWhUg");
	this.shape_1.setTransform(36.5,59.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73,118.7);


(lib.Path_6_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("AFBBrQgqACgzAAQgsAJgqAGQhVALgvgPQmji0ANgfQATgrAQgRQAIgJAEAAQgTBgCsBQQBaArB/AlQA2AVCngZQBTgNBIgQQgNAwghAyQgMgygSgEg");
	this.shape_1.setTransform(39.7,16.2);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.6,32.3);


(lib.Path_5_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUHnIAAAAIAAAAgAhpGaQh/hLgPgPIgugpQgagZgCgNQgCgPAPguQAOguAXgxQAbg4BfiJQBmiVA0g1QAxgvCLhFQBFgjA8gZQgYAQg9BIIhFBUQgTARhjCUQhmCZgaA2QgYAzgFBGQgCAZABBYQABArBBBRQAgAoAeAfQgEgEh5hJg");
	this.shape_1.setTransform(32.3,48.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.5,97.6);


(lib.Path_4_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("ADrDHQAXgPgOgRQgOgSiWhqQiChcgigWQgmgZg0gcQhLgpgZAAQgXAAgUAXQgKALgFAKIAMhdQgCAXAqALIA+APQAjARAsAYQA+AjAZATQAfAYCLBfQCRBjAPAGIAqAMQAWAHgOACIg/ANIhAAbIAigQg");
	this.shape_1.setTransform(33.4,21.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.8,43);


(lib.Path_3_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCCtQgSgKiAgcQAEhfALgrQAQg/AMgoQAVhIAOgSQBLAzAjASQCABEAPAEQAFACApAWQAdARATAHQiPgvgagJQgTgIgRADQgPADgZAOQgYAOgOAeQgMAbAEAaQACARADAvQAEAoARAIIA0AQQAhALALAMQhbgOgTgKg");
	this.shape_1.setTransform(21.3,19.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,39.4);


(lib.Path_2_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiVACQABh/AViBQAdgFAYAQQAkAXANAEQAZAIAvAdQAXAOASANQgngVgzABQgqABgTAKQgKAGgHAkIgHAyQgEAUAMBXQANBeANAFQAVAIC2gCIjGBxIgCAAQhkAAABj+g");
	this.shape_1.setTransform(15.1,25.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,30.1,51.4);


(lib.Path_1_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#241F20").s().p("AkmFgICTgIIAfgNIEenkIA7iCIANhJIgDg+IA4BvIgmgMIguB3Ii9E1IhyDoIA0BOg");
	this.shape_3.setTransform(29.5,42);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,84);


(lib.Path_10 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABLGjQglgIhCgoQgrgZgbgUQgIgGgigQIgngSIA1AOQA3AOANAFQARAHA+ANQBDAMAGgFQAFgGAPgmQANglADgOQACgJgMiWIgMihIABhxQgChggHgCQgIgCgSAQQgRAQgDAIQgCAGgzA/Ig4BIIAuhaQAvhbAJgLQAIgJAXg8QAVg5ADAAQAFAAAKAIQAKAJABAIQAhCkAEBHQAQFIgBANIgCBUQgBBLgEAKQgLAagSASQgZAZgdAAIgPgBg");
	this.shape_3.setTransform(18.1,42);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.1,84.1);


(lib.diaphram = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F0AFCC").ss(2,1,0,4).p("AvYDZQgSgmgCgwQgDheBWgrQGcjZGuAFQEiAEE6BUQDbA7B4A9QBbArAXAeQAnAzgTBp");
	this.shape.setTransform(100.5,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#241F20").ss(4,1,0,4).p("AvYDZQgSgmgCgwQgDheBWgrQGcjZGuAFQEiAEE6BUQDbA7B4A9QBbArAXAeQAnAzgTBp");
	this.shape_1.setTransform(100.5,22);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,205,48);


(lib.arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.5,1,1).p("AgbhTIA2AAIgHBaIAVABIgmBMIgrhNIAYAAg");
	this.shape.setTransform(-0.1,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.3,-9.4,10.4,19);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Animation", "bold 15px 'Arial'");
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


(lib.top = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_9();
	this.instance.setTransform(52.9,40.9,1,1,0,0,0,53.1,41.1);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-1.1,106.1,84);


(lib.lungs_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_10();
	this.instance.setTransform(197.5,137.1,1,1,0,0,0,18.1,42.1);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.setTransform(181.2,124.9,1,1,0,0,0,29.5,42);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.setTransform(17,151.2,1,1,0,0,0,15.1,25.7);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.Path_3_1();
	this.instance_3.setTransform(25.2,105.8,1,1,0,0,0,21.3,19.7);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.Path_4_1();
	this.instance_4.setTransform(34,139.6,1,1,0,0,0,33.4,21.5);
	this.instance_4.alpha = 0.199;

	this.instance_5 = new lib.Path_5_1();
	this.instance_5.setTransform(52.1,51.4,1,1,0,0,0,32.2,48.8);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.Path_6_1();
	this.instance_6.setTransform(49.9,91.4,1,1,0,0,0,39.7,16.1);
	this.instance_6.alpha = 0.199;

	this.instance_7 = new lib.Path_7_1();
	this.instance_7.setTransform(167.3,63.8,1,1,0,0,0,36.5,59.4);
	this.instance_7.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,0,0,4).p("AFst6Qg1AOhLAlQiXBLhuB5Qh8CGiMEJQiAD0gVBuQgVBvgMEfQgNEsAVAbQA9BOBMggQAJgDBog+QBYg1BQgWQAagICMghQBNgSApgVQA+ggASgYQAbgkgOhBQgqjHBhiQQA3hPAXjTQAVi+gRhYQgMhBABgdQAAgSAJgYQAFgOADg0QAFhBgGg3QgRinhdAGg");
	this.shape.setTransform(47.8,89.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0AFCC").s().p("AnPNDQgVgbANksQAMkfAVhvQAVhuCAj0QCMkJB8iGQBuh5CXhLQBLglA1gOQBdgGARCnQAGA3gFBBQgDA0gFAOQgJAYAAASQgBAdAMBBQARBYgVC+QgXDTg3BPQhhCQAqDHQAOBBgbAkQgSAYg+AgQgpAVhNASQiMAhgaAIQhQAWhYA1QhoA+gJADQgWAKgVAAQgzAAgrg4g");
	this.shape_1.setTransform(47.8,89.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,0,0,4).p("Al1t6IAlAMQAvAQAwAXQCbBLBwB5QCACGCPEJQCED0AWBuQAVBuANEgQANEsgVAbQhABOhNgfQgIgDhsg/Qhag1hTgWQgdgIiNghQhPgSgqgVQhAgggSgYQgdgkAPhBQAsjHhkiQQg4hPgYjTQgWi+ARhXQANhBgBgeQgBgRgIgZQgFgOgEg0QgEhAAGg4QARinBfAGg");
	this.shape_2.setTransform(168.4,91.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0AFCC").s().p("AFQNyQgIgDhsg/Qhag1hTgWQgdgIiNghQhPgSgqgVQhAgggSgYQgdgkAPhBQAsjHhkiQQg4hPgYjTQgWi+ARhXQANhBgBgeQgBgRgIgZQgFgOgEg0QgEhAAGg4QARinBfAGIAlAMQAvAQAwAXQCbBLBwB5QCACGCPEJQCED0AWBuQAVBuANEgQANEsgVAbQguA4g0AAQgVAAgWgJg");
	this.shape_3.setTransform(168.4,91.7);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,219.4,182.9);


(lib.bottom = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_1_1();
	this.instance.setTransform(63.4,69.8,1,1,0,0,0,63.6,69.8);
	this.instance.alpha = 0.5;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-0.2,128.8,140.2);


(lib.body = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.886],0,-44.2,0,44.3).s().p("A/8G6IAAtzMA/5AAAIAANzg");
	this.shape.setTransform(204.6,424.2);

	this.instance = new lib.Path_8();
	this.instance.setTransform(207.3,417.5,1,1,0,0,0,99.2,44.1);
	this.instance.alpha = 0.051;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.setTransform(138.3,198.9,1,1,0,0,0,39.8,22.3);
	this.instance_1.alpha = 0.051;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.setTransform(55.4,271.8,1,1,0,0,0,35.1,50.5);
	this.instance_2.alpha = 0.051;

	this.instance_3 = new lib.Path_0();
	this.instance_3.setTransform(58.7,388.2,1,1,0,0,0,19.1,74.2);
	this.instance_3.alpha = 0.051;

	this.instance_4 = new lib.Path_1();
	this.instance_4.setTransform(348.3,378.8,1,1,0,0,0,21.2,83.2);
	this.instance_4.alpha = 0.051;

	this.instance_5 = new lib.Path_2();
	this.instance_5.setTransform(202.2,94.8,1,1,0,0,0,15.9,22.6);
	this.instance_5.alpha = 0.051;

	this.instance_6 = new lib.Path_3();
	this.instance_6.setTransform(309.5,318.3,1,1,0,0,0,18.1,38.5);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.Path_4();
	this.instance_7.setTransform(99.5,327.1,1,1,0,0,0,23.4,38.4);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.Path_5();
	this.instance_8.setTransform(358.6,263,1,1,0,0,0,25.8,47.9);
	this.instance_8.alpha = 0.031;

	this.instance_9 = new lib.Path_6();
	this.instance_9.setTransform(184.5,66,1,1,0,0,0,69.2,63.6);
	this.instance_9.alpha = 0.051;

	this.instance_10 = new lib.Path_7();
	this.instance_10.setTransform(262.4,163.6,1,1,0,0,0,49.9,56.7);
	this.instance_10.alpha = 0.051;

	this.instance_11 = new lib.Path();
	this.instance_11.setTransform(199.4,317.8,1,1,0,0,0,17.9,41.1);
	this.instance_11.alpha = 0.051;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#241F20").ss(0.5,0,0,4).p("EgW5AkSQAfjNAKgoQAujTAqi9QBRl0AHgMQAHgPBBDVQA/DMAUBfQAuDNARBSQArDPAAAmMAgBAAAQBpsAAFhVQADguAkh5QAihwgCgNIBiFVQBkFkANBIQANBJACCQQAAADAACcIIOAAQgEgGgCgwQgHh8AKldQAJlchXlnQgbhwghhjIgchNQATmmhkj1QgghPgug9Qgrg0gJgOQgXgkhng0QhcgvgSAAQgKAAgsgiIgpghQhWgTgVAAQgYAAlTh6QljiAgkgkQgjgkgSiyQgMh2AAhgQAAgRATg2QAbhLAQgyQBEjKAVivQAXjGhli7QhKiHiDh1QhehTkAgQQjUgNiAAeQhCAQiOBIQiSBLgrAsQgmAlgKBTQgFAqACAiQgJAMgTCmQgJBTgIBQIAPATQANAVgDAQQgFAZihC/IgFAMQgFARAGAWQAJAeAvAbQAYAPAjASQANAKgBArQgBAigGASQgDAKAqAQQAVAJAWAGQgKALgLANQgVAaAAAKQAAAGAaAcQAYAagFAKQggBGAFApQAEAgAhAmQAWAZB0gCQCDgBAhANQAzAVgCA3QgCAsggAuQgWAfk2CFQk3CAgKAFQgeAPgfAAQgMAAhJArQgkAVgiAVQgnAEhFAwQg/AqguAyQgkAohIC/Qg9CfgWBTQgMAvAMCaQAHBNAIBEQg/Bcg5KvQgdFXgQFFg");
	this.shape_1.setTransform(203.8,232.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6DBC6").s().p("EAW/AkSIAAifQgCiQgNhJQgNhIhklkIhilVQACANgiBwQgkB5gDAuQgFBVhpMAMggBAAAQAAgmgrjPQgRhSgujNQgUhfg/jMQhBjVgHAPQgHAMhRF0IhYGQQgKAogfDNIoUAAQAQlFAdlXQA5qvA/hcQgIhEgHhNQgMiaAMgvQAWhTA9ifQBIi/AkgoQAugyA/gqQBFgwAngEQAigVAkgVQBJgrAMAAQAfAAAegPQAKgFE3iAQE2iFAWgfQAgguACgsQACg3gzgVQghgNiDABQh0ACgWgZQghgmgEggQgFgpAghGQAFgKgYgaQgagcAAgGQAAgKAVgaIAVgYQgWgGgVgJQgqgQADgKQAGgSABgiQABgrgNgKQgjgSgYgPQgvgbgJgeQgGgWAFgRIAFgMQChi/AFgZQADgQgNgVIgPgTQAIhQAJhTQATimAJgMQgCgiAFgqQAKhTAmglQArgsCShLQCOhIBCgQQCAgeDUANQEAAQBeBTQCDB1BKCHQBlC7gXDGQgVCvhEDKIgrB9QgTA2AAARQAABgAMB2QASCyAjAkQAkAkFjCAQFTB6AYAAQAVAABWATIApAhQAsAiAKAAQASAABcAvQBnA0AXAkQAJAOArA0QAuA9AgBPQBkD1gTGmIAcBNQAhBjAbBwQBXFngJFcQgKFdAHB8QACAwADAGg");
	this.shape_2.setTransform(203.6,232.2);

	this.addChild(this.shape_2,this.shape_1,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,409.2,469.4);


(lib.loop1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.arrow();
	this.instance.setTransform(0.8,-22.1,1,1,176.8,0,0,0.8,2.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({regY:2.4,rotation:175.9,x:-0.1,y:-34.2,alpha:1},5).to({rotation:164.7,x:-7.4,y:-96.8},15).to({regX:0.7,regY:2.5,rotation:154.6,x:-13.2,y:-107.5,alpha:0},5).to({_off:true},1).wait(7).to({_off:false,rotation:-25.4,x:-11.6},0).to({regX:0.8,regY:2.4,rotation:-15.3,x:-7,y:-96.8,alpha:1},5).to({rotation:-4.1,x:1.5,y:-34.1},15).to({regY:2.5,rotation:-3.2,x:3,y:-17.8,alpha:0},5).to({_off:true},1).wait(36));

	// Layer 10
	this.instance_1 = new lib.arrow();
	this.instance_1.setTransform(0.8,-22.1,1,1,176.8,0,0,0.8,2.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({regY:2.4,rotation:175.9,x:-0.1,y:-34.2,alpha:1},5).to({rotation:164.7,x:-7.4,y:-96.8},15).to({regX:0.7,regY:2.5,rotation:154.6,x:-13.2,y:-107.5,alpha:0},5).to({_off:true},1).wait(17).to({_off:false,rotation:-25.4,x:-11.6},0).to({regX:0.8,regY:2.4,rotation:-15.3,x:-7,y:-96.8,alpha:1},5).to({rotation:-4.1,x:1.5,y:-34.1},15).to({regY:2.5,rotation:-3.2,x:3,y:-17.8,alpha:0},5).to({_off:true},1).wait(31));

	// Layer 9
	this.instance_2 = new lib.arrow();
	this.instance_2.setTransform(0.8,-22.1,1,1,176.8,0,0,0.8,2.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({regY:2.4,rotation:175.9,x:-0.1,y:-34.2,alpha:1},5).to({rotation:164.7,x:-7.1,y:-96.8},15).to({regX:0.7,regY:2.5,rotation:154.6,x:-13.2,y:-107.5,alpha:0},5).to({_off:true},1).wait(27).to({_off:false,rotation:-25.4,x:-11.6},0).to({regX:0.8,regY:2.4,rotation:-15.3,x:-7,y:-96.8,alpha:1},5).to({rotation:-4.1,x:1.5,y:-34.1},15).to({regY:2.5,rotation:-3.2,x:3,y:-17.8,alpha:0},5).to({_off:true},1).wait(26));

	// Layer 8
	this.instance_3 = new lib.arrow();
	this.instance_3.setTransform(0.8,-22.1,1,1,176.8,0,0,0.8,2.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({regY:2.4,rotation:175.9,x:-0.1,y:-34.2,alpha:1},5).to({rotation:164.7,x:-7.1,y:-96.8},15).to({regX:0.7,regY:2.5,rotation:154.6,x:-13.2,y:-107.5,alpha:0},5).to({_off:true},1).wait(37).to({_off:false,rotation:-25.4,x:-11.6},0).to({regX:0.8,regY:2.4,rotation:-15.3,x:-7,y:-96.8,alpha:1},5).to({rotation:-4.1,x:1.5,y:-34.1},15).to({regY:2.5,rotation:-3.2,x:3,y:-17.8,alpha:0},5).to({_off:true},1).wait(21));

	// Layer 7
	this.instance_4 = new lib.arrow();
	this.instance_4.setTransform(0.8,-22.1,1,1,176.8,0,0,0.8,2.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({regY:2.4,rotation:175.9,x:-0.1,y:-34.2,alpha:1},5).to({rotation:164.7,x:-7.4,y:-96.8},15).to({regX:0.7,regY:2.5,rotation:154.6,x:-13.2,y:-107.5,alpha:0},5).to({_off:true},1).wait(47).to({_off:false,rotation:-25.4,x:-11.6},0).to({regX:0.8,regY:2.4,rotation:-15.3,x:-7,y:-96.8,alpha:1},5).to({rotation:-4.1,x:1.5,y:-34.1},15).to({regY:2.5,rotation:-3.2,x:3,y:-17.8,alpha:0},5).to({_off:true},1).wait(16));

	// Layer 2
	this.instance_5 = new lib.arrow();
	this.instance_5.setTransform(0.8,-22.1,1,1,176.8,0,0,0.8,2.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:2.4,rotation:175.9,x:-0.1,y:-34.2,alpha:1},5).to({rotation:164.7,x:-7.4,y:-96.8},15).to({regX:0.7,regY:2.5,rotation:154.6,x:-13.2,y:-107.5,alpha:0},5).to({_off:true},1).wait(57).to({_off:false,rotation:-25.4,x:-11.6},0).to({regX:0.8,regY:2.4,rotation:-15.3,x:-7,y:-96.8,alpha:1},5).to({rotation:-4.1,x:1.5,y:-34.1},15).to({regY:2.5,rotation:-3.2,x:3,y:-17.8,alpha:0},5).to({_off:true},1).wait(11));

	// lungs
	this.instance_6 = new lib.bottom();
	this.instance_6.setTransform(6.1,3.3,1,1,0,0,0,63.4,69.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:0.9,y:-3.7},50,cjs.Ease.get(1)).wait(8).to({scaleY:1,y:3.3},51,cjs.Ease.get(1)).wait(11));

	// lungs
	this.instance_7 = new lib.top();
	this.instance_7.setTransform(-46.2,-107.9,1,1,0,0,0,52.8,40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// lungs
	this.instance_8 = new lib.lungs_1();
	this.instance_8.setTransform(5.5,55.5,1,1,0,0,0,108.7,90.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.9,y:46},50,cjs.Ease.get(1)).wait(8).to({scaleY:1,y:55.5},51,cjs.Ease.get(1)).wait(11));

	// lungs
	this.instance_9 = new lib.diaphram();
	this.instance_9.setTransform(7.5,153.4,1,1,0,0,0,100.5,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleY:1.41,y:144.4},50,cjs.Ease.get(1)).wait(8).to({scaleY:1,y:153.4},51,cjs.Ease.get(1)).wait(11));

	// figure
	this.instance_10 = new lib.body();
	this.instance_10.setTransform(7.5,-1.6,1,1,0,0,0,204.6,234.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.1,-236,409.2,468.7);


(lib.lables = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Diaphram", "bold 15px 'Arial'");
	this.text.lineHeight = 17;
	this.text.lineWidth = 131;
	this.text.setTransform(130,156.3);

	this.text_1 = new cjs.Text("Bronchiole", "bold 15px 'Arial'");
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 131;
	this.text_1.setTransform(130,25.3);

	this.text_2 = new cjs.Text("Bronchi", "bold 15px 'Arial'");
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 100;
	this.text_2.setTransform(130,-12.7);

	this.text_3 = new cjs.Text("Trachea", "bold 15px 'Arial'");
	this.text_3.lineHeight = 17;
	this.text_3.lineWidth = 100;
	this.text_3.setTransform(130,-81.7);

	this.text_4 = new cjs.Text("Lung", "bold 15px 'Arial'");
	this.text_4.lineHeight = 17;
	this.text_4.lineWidth = 100;
	this.text_4.setTransform(130,69.9);

	// lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,0,0,4).p("AKPn5IybAAAJ3SoIiqAAAJ3E5IriAAAKPhzIriAAAKPynI0dAA");
	this.shape.setTransform(64,48.7);

	// lungs
	this.instance = new lib.bottom();
	this.instance.setTransform(6.1,3.3,1,1,0,0,0,63.4,69.8);

	// lungs
	this.instance_1 = new lib.top();
	this.instance_1.setTransform(-46.2,-107.9,1,1,0,0,0,52.8,40.9);

	// lungs
	this.instance_2 = new lib.lungs_1();
	this.instance_2.setTransform(5.5,55.5,1,1,0,0,0,108.7,90.4);

	// lungs
	this.instance_3 = new lib.diaphram();
	this.instance_3.setTransform(7.5,153.4,1,1,0,0,0,100.5,21.9);

	// figure
	this.instance_4 = new lib.body();
	this.instance_4.setTransform(7.5,-1.6,1,1,0,0,0,204.6,234.1);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape,this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.1,-236,462.1,468.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;