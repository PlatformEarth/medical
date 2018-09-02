(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 496,
	height: 330,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.nebuliser = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.lungs();
	this.instance.setTransform(345.3,146.3,0.693,0.627,0,0,0,109.7,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.65,scaleY:0.53},59,cjs.Ease.get(1)).wait(21).to({scaleX:0.69,scaleY:0.63},59,cjs.Ease.get(1)).wait(1));

	// Layer 10
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(247.8,164.2,1,1,0,0,0,241.8,161.2);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(253.8,167,483.8,323.8);


// symbols:
(lib.Path_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AjoD5QgLhkAGgLQACgEA7iiQA5idAJgHQAPgNA5goQA9grAIAAQAMAABugyQBPgMAHAHQAIAHgfCzQgfC0gUAPQhABRhFBGQiHCMh1ASIgMhig");
	this.shape.setTransform(24.1,34.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48.2,69.5);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AkJBuQB4ANB9AMQD5AWAagKQAbgKhSiLQgphHguhEQgEASgKAVQgUArgeANQgvAVkLCHg");
	this.shape.setTransform(28.4,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("AgRCDQh+gMh4gNQELiHAwgVQAdgNAUgrQAKgVAEgSQAuBEApBHQBSCLgaAKQgIADgdAAQhCAAisgPg");
	this.shape_1.setTransform(28.2,15.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55.7,31.6);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AqpEsQBah+BtiJQDckQBmg4IAIgBQCegQigARIAbAqQAjApAjAAQAnAAAbgZQAWgTAYgqQBaA/B7BqQD2DSCoDXg");
	this.shape.setTransform(68.2,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.1,136.5,60.2);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#010202").ss(0.5).p("AETE8QAbAoAIAJQANAOAcAhQAZAcAJAGQAbATAMAHQATALAFgDQAGgFAMgXQANgaABgPQAFgOABgxQAAgagBgUQgBgNABgDQABgGAHgCQAHgCAFAEQAGBAgCALIATg5IAHgCQAHAAAFALIgbBkIAPgHQARgHAGgBQAIgCAHAHQAGAHgJADQgJADgTARQgTAPgIAKQgIAKgNAVQgOAVgCAFIBLAkQADABANAFQAHADACAFQAEAIgRADQgRADgKgIIAIALQAJAMADAKQADAMgKACQgJADgIgIQgCgDgPgaQgMgXgIgCQgRgFgKgEQgUgGgIABQgJABgEAFQgDACgDAJQgDAGAEAVQAEAVAGALQAGALApAnQAFAEAOAMQAOAKACAFQADAGgGAHQgHAGgEgBQgDgBgSgQQgSgQgEgCIAmA2QAHAJgGALQgHAKgKgIQgxhIgKgLIgGAPQgFAPgCAHQgCAIgIgDQgIgDgCgIQgBgCACgxQABgrgEgFQgFgEgFABQgFABgFAAQgFAAgRAJQgIAEgHAFQgGgFgFgGQgJgLAEgCQALgEAPgKQAUgMABgFQAKgLAFgPQAJgegfgVQgegUhHhQQhFhPgIgJQgQgQgggDQgmgDgZAXQgHAJg8BPQg/BPgbAVQgbAVAIAeQAEAPAKALQAAAGASAMQANAIAKAFQAHAEgVAUQgZgSgIAAQgHgBgCAAQgEgBgEAFQgEAEABAsQABAwAAACQgCAJgHADQgIACgBgIIgLglQgJALgsBJQgJAHgGgKQgFgLAGgJIAig1QgEACgQAQQgQAQgCAAQgFABgFgGQgGgHADgGQACgFAMgKQAQgOABgCQAkgnAGgLQAFgKAEgWQADgVgCgGQgDgJgCgCQgEgFgIgBQgIAAgRAGQgSAHgGACQgHACgLAWQgNAbgCACQgHAIgIgCQgJgDADgLQACgLAIgMIAIgLQgKAIgPgDQgOgDADgIQACgFAGgDQAMgFACgBIBDgjQgCgFgMgWQgLgTgIgMQgHgKgRgPQgRgQgIgEQgIgDAGgHQAGgHAHACQAJACAZANIgYhkQAEgLAHAAQADAAADACIAQA5QgBgHACgjIADghQAEgEAGACQAGACACAGQABADgBANQgCAUABAaQABAxAEAOQABAPALAaQALAXAGAFQAHAGAwgoQAKgHAVgaQAUgZAQgXQBMhyAbg7IALglQgOkMAAgRQAAgKgQhhQgShsgDgYQgFgkgkg9Qgkg5gSgJQhfguhHgFQgYgChCAKQgdAFgkAiQgkAigCAZQgBATAfARQARAJAZAKQAJAFgLAYQgIASgKAMQgGAGgNgDQgMgDgBgEQgFgNgEgLQgIgVgEgEQgBgBgHgUQgFgPgGADQgIAEAKhjQABgRAZgTQAhgbA3gIQASgGBkAEQAcACAwAVQAPAHACgNQABgNgRgJQgTgKgJgEQgPgHgXgFQgXgGgxgBQgqgBgcADQgYADgpASQgRAHgpAVQgYAMgbAnQAAADgFgBQgJgCgWgSIAFgmQgGgFgDgHQgIgOAKgLQAcghAUgYQAngtANgEQARgGAogBQAqgCAZAFQAFABArATQA5AZB0AjQA8ATBIBCQARAWAYAzQANAcAWAyQAQAhAWBSQAXBVAEAvQAEAgAJCnQAJCfALAVQAPAjA2A6QADACACADg");
	this.shape.setTransform(58.2,76.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E38EBC").s().p("AjbLyQgFgLAGgJIAig1QgEACgQAQQgQAQgCAAQgFABgFgGQgGgHADgGQACgFAMgKIARgQQAkgnAGgLQAFgKAEgWQADgVgCgGQgDgJgCgCQgEgFgIgBQgIAAgRAGIgYAJQgHACgLAWIgPAdQgHAIgIgCQgJgDADgLQACgLAIgMIAIgLQgKAIgPgDQgOgDADgIQACgFAGgDIAOgGIBDgjQgCgFgMgWIgTgfQgHgKgRgPQgRgQgIgEQgIgDAGgHQAGgHAHACQAJACAZANIgYhkQAEgLAHAAQADAAADACIAQA5IABgqIADghQAEgEAGACQAGACACAGQABADgBANQgCAUABAaQABAxAEAOQABAPALAaQALAXAGAFQAHAGAwgoQAKgHAVgaQAUgZAQgXQBMhyAbg7IALglQgOkMAAgRQAAgKgQhhQgShsgDgYQgFgkgkg9Qgkg5gSgJQhfguhHgFQgYgChCAKQgdAFgkAiQgkAigCAZQgBATAfARQARAJAZAKQAJAFgLAYQgIASgKAMQgGAGgNgDQgMgDgBgEIgJgYQgIgVgEgEIgIgVQgFgPgGADQgIAEAKhjQABgRAZgTQAhgbA3gIQASgGBkAEQAcACAwAVQAPAHACgNQABgNgRgJIgcgOQgPgHgXgFQgXgGgxgBQgqgBgcADQgYADgpASIg6AcQgYAMgbAnQAAADgFgBQgJgCgWgSIAFgmQgGgFgDgHQgIgOAKgLIAwg5QAngtANgEQARgGAogBQAqgCAZAFQAFABArATQA5AZB0AjQA8ATBIBCQARAWAYAzIAjBOQAQAhAWBSQAXBVAEAvQAEAgAJCnQAJCfALAVQAQAkA8A9IgGgFIAaAlQAbAoAIAJIApAvQAZAcAJAGQAbATAMAHQATALAFgDQAGgFAMgXQANgaABgPQAFgOABgxQAAgagBgUQgBgNABgDQABgGAHgCQAHgCAFAEQAGBAgCALIATg5IAHgCQAHAAAFALIgbBkIAPgHIAXgIQAIgCAHAHQAGAHgJADQgJADgTARQgTAPgIAKQgIAKgNAVQgOAVgCAFIBLAkIAQAGQAHADACAFQAEAIgRADQgRADgKgIIAIALQAJAMADAKQADAMgKACQgJADgIgIIgRgdQgMgXgIgCIgbgJQgUgGgIABQgJABgEAFQgDACgDAJQgDAGAEAVQAEAVAGALQAGALApAnIATAQQAOAKACAFQADAGgGAHQgHAGgEgBQgDgBgSgQQgSgQgEgCIAmA2QAHAJgGALQgHAKgKgIQgxhIgKgLIgGAPIgHAWQgCAIgIgDQgIgDgCgIIABgzQABgrgEgFQgFgEgFABIgKABQgFAAgRAJIgPAJIgLgLQgJgLAEgCQALgEAPgKQAUgMABgFQAKgLAFgPQAJgegfgVQgegUhHhQIhNhYQgQgQgggDQgmgDgZAXIhDBYQg/BPgbAVQgbAVAIAeQAEAPAKALQAAAGASAMQANAIAKAFQAHAEgVAUQgZgSgIAAIgJgBQgEgBgEAFQgEAEABAsIABAyQgCAJgHADQgIACgBgIIgLglQgJALgsBJQgEADgDAAQgEAAgEgGg");
	this.shape_1.setTransform(58.2,76.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-2.1,118,155.5);


(lib.Path_7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#241F20").ss(1,0,0,4).p("AAOkXQgqA6guA8QhcB4gJAJQgmArgLA9QgRBkB1AgIC4BKICsgB");
	this.shape.setTransform(23.3,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah/DNQh1ggAShlQAKg9AngqQAIgKBch3IBYh2IDbIsIitABg");
	this.shape_1.setTransform(23.5,28.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.7,48.1,57.9);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("AAAEZQhdgDgRgFQgNgDACgEIAZgbQATgUAij7QARh+AOh7QAFBrAwDUQAxDOAOAAQANAAAEAOQAFAOgOAGQgIAEgqAAIg+gBg");
	this.shape_2.setTransform(12.3,28.2);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,24.6,56.5);


(lib.Path_7_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("AjrF6IgTgOIhQoOQgQhTARhQQAIgoAMgXQAVBgA5A0QAPANAYAPQASAMACAFQAFALAABoQAIBxAtBCQARAaDFBJQBkAmBzAoIAfAPQAFAIgpAVQgmAUjrAZIjtAYIgEAAQgKAAgRgLg");
	this.shape_2.setTransform(34.3,39);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.6,78);


(lib.Path_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2625").s().p("AEkF+QhJhJAQhaQAOg6ADgTQAEgdgOgeQgRgjgfgSQgdgRgiAAQgeAAgjAnQgfAjgCAVQgBAQghgYQghgXgGgMQgOgfgqgnIgogjIhMg3IkFhHQgCgSABgYQADguATgYQATgYBagyQBng7BKgOQBcgRCBAIQCQAKA6AkQA5AjA9BUQA2BMAOAyQAOA0ALBMQANBWgIAcIg4C0QgvCXgBAIQgogTglglg");
	this.shape.setTransform(47.6,43.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95.3,87.6);


(lib.Path_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2625").s().p("AggCvQgdgmgjg4QgegugEgEQgPgOgSipQgSioAGgGQAGgGA8ANQBUAyAJAAQAGAAAtAqQArAnALAMQAGAHAnCUQAoCYACAEQAHAQgbCyQhZgUhjiGg");
	this.shape.setTransform(17.7,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.6,65.9);


(lib.Path_4_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AiADgQgJgDAFgeIAQhYQASiWgyizQATA9AVA4QAkBgAcAgQAsA0BABAQBHBEAOAAQi2AYhBAAQgWAAgIgDg");
	this.shape.setTransform(16.1,26.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,3.9,30,45.5);


(lib.Path_3_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("Ah8DMQANAAA7hEQA1hAAkg1QAlgzAzjDQgrC0AQCWQABARALBIQAFAegIADQgGADgSAAQg1AAiagYg");
	this.shape_1.setTransform(12.6,26.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,3.7,25,45.7);


(lib.Path_2_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("AhYCVQgYgJAFgQQAJgaALgrQAOg0AAgMIgFgoQgEgcAHgLQAOgQARgRQAjggAQAAQAigBAUAGQAjAMAJAkQALAsgUA6QgUBAgmAWQgdAQgdAbQgZAWgHABIgIAAQgNAAgPgFg");
	this.shape_2.setTransform(10.9,15.5);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,21.9,31);


(lib.Path_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D2625").s().p("AAgHEQgFhkgDglQgCggg0jJQg6jXghhTQgfhOAKiSQAFhJALg6QBjDABgHsQAwD2AdDQIhuAFQACgHgGhxg");
	this.shape_1.setTransform(14.6,57.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,114.5);


(lib.Path_8 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D2625").s().p("AiCH6QAai6ArjcQBVm2BairQAKA7AFBJQAJCTgcBEQgdBIgpC0QgjCdgDAlQgBAOgQBqQgSBkABAGg");
	this.shape_3.setTransform(13.2,51.1);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.3,102.1);


(lib.Path_7_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADlGvQAsioABgrQABgohKhuQheiJgJgRQgZgzhniEQhchzgagZQiZiPg9gnQA9AZBHAjQCOBFAyAvQA1A1CFC6QB+CwAaA2IAsBdQAUAtgCANQgDAXgSA0QgWA/gTAQQgQAPgxBqIgyBsQAWhLAWhUg");
	this.shape_3.setTransform(36.3,59);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.6,118.1);


(lib.Path_6_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("AE/BqQgqADgygBQgsAJgqAGQhUALgwgPQmgizANgeQATgrAQgRQAIgJAEAAQgTBfCrBQQBZArB/AlQA2AUClgZQBTgMBIgRQgNAwghAyQgMgygSgEg");
	this.shape_1.setTransform(39.6,16.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.1,32.2);


(lib.Path_5_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoGYQh+hLgQgPIgugpQgagZgBgMQgCgQAOgsQAPgvAXgxQAag3BfiIQBliVA0g0QAwgvCLhFQBFgiA7gaQgYAQg8BJIhFBTQgTARhiCTQhmCYgZA1QgZAzgFBGQgCAcACBUQABArBABRQAhAnAeAgIh9hNg");
	this.shape_1.setTransform(32.1,48.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,97);


(lib.Path_4_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("ADpDGQAXgPgOgRQgOgSiVhpQiChdghgUQgmgagzgbQhLgpgYAAQgYAAgUAXQgKALgFAKIAMhdQgCAXAqALIA+APQB7A/AqAgQAfAYCKBdQCQBjAPAHIAqALQAWAGgOADIg/ANIg/AbIAhgQg");
	this.shape_1.setTransform(33.2,21.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.5,42.8);


(lib.Path_3_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDCsQgRgJiAgdQADheANgqIAbhnQAUhJAOgRQBMAyAjATIBMApQA2AbALADQAFACApAXQAeARATAHQiQgvgZgKQgTgHgSADQgNACgaAOQgYAOgNAeQgNAbAEAbQACAQADAvQAEAoARAHIA0ARQAgALAMALQhbgOgTgKg");
	this.shape_2.setTransform(21.3,19.6);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.6,39.3);


(lib.Path_2_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiUACQABh+AViBQAdgFAYAQQAjAXANAEQAZAIAvAdQAXAOASANQgngVgzABQgqABgTAKQgKAGgHAkQgDATgEAeQgDAUAMBWQANBeANAFQAUAIC1gCIjEBxIgDAAQhjAAABj9g");
	this.shape_3.setTransform(15,25.6);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,30,51.1);


(lib.Path_1_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("AkkFeICSgIIAfgNIEcniIA7iAIAMhJIgCg+IA3BvIgmgNIgtB3Ii8EzIhyDnIA0BOg");
	this.shape_2.setTransform(29.4,41.7);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.8,83.5);


(lib.Path_9 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABLGgQgmgHhBgoQgrgZgbgUQgQgLhAgcIA0ANQA4AOAMAGQASAHA9AMQBCANAGgGQAGgGAOgmQANgkADgOQACgJgLiVIgMihIAAhwQgBhfgHgCQgIgCgSAQQgSAPgDAJQgBAFgzA/Ig4BIIAvhaQAuhbAJgKQAIgJAWg8QAVg4ADAAQAGAAAJAIQAKAIACAIIARBfQARBfACAsQAQFGgBANIgCBTQgBBLgEAKQgLAagSASQgYAYgdAAIgPgBg");
	this.shape_4.setTransform(18,41.8);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.9,83.6);


(lib.lungs = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_9();
	this.instance.setTransform(196.3,136.3,1,1,0,0,0,17.9,41.8);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.setTransform(180.3,124.2,1,1,0,0,0,29.4,41.7);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.setTransform(16.9,150.4,1,1,0,0,0,15,25.6);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.Path_3_2();
	this.instance_3.setTransform(25.2,105.2,1,1,0,0,0,21.3,19.6);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.Path_4_2();
	this.instance_4.setTransform(33.8,138.8,1,1,0,0,0,33.2,21.4);
	this.instance_4.alpha = 0.199;

	this.instance_5 = new lib.Path_5_1();
	this.instance_5.setTransform(51.7,51.1,1,1,0,0,0,32,48.5);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.Path_6_1();
	this.instance_6.setTransform(49.7,91,1,1,0,0,0,39.6,16.1);
	this.instance_6.alpha = 0.199;

	this.instance_7 = new lib.Path_7_2();
	this.instance_7.setTransform(166.3,63.4,1,1,0,0,0,36.3,59);
	this.instance_7.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#010202").ss(0.8).p("AFqt1Qg1AOhLAlQiWBLhtB3Qh7CGiLEIQiADygVBtQgUBugNEfQgMEqAUAaQA+BOBKgfQAJgEBog+QBYg0BPgWQAegICHggQBNgTAogUQA+ggASgYQAbgjgOhCQgqjGBhiOQA2hPAXjTQAVi8gQhXQgMhBAAgdQABgRAIgYQAFgOAEg1QAEhAgGg3QgQimhdAGg");
	this.shape.setTransform(47.5,88.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEA2CC").s().p("AnNM+QgUgaAMkqQANkfAUhuQAVhtCAjyQCLkIB7iGQBth3CWhLQBLglA1gOQBdgGAQCmQAGA3gEBAQgEA1gFAOQgIAYgBARQAAAdAMBBQAQBXgVC8QgXDTg2BPQhhCOAqDGQAOBCgbAjQgSAYg+AgQgoAUhNATQiHAggeAIQhPAWhYA0QhoA+gJAEQgVAJgVAAQgyAAgsg4g");
	this.shape_1.setTransform(47.5,88.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#010202").ss(0.8).p("Alzt1IAlAMQAuAQAxAXQCaBLBvB3QB/CGCPEIQCDDyAVBtQAWBuAMEfQANEqgVAaQg/BOhNgfQgJgEhqg+Qhag0hSgWQgagHiPghQhPgTgqgUQg/gggTgYQgcgkAPhBQArjGhjiOQg4hPgYjTQgVi8ARhXQAMhBgBgdQAAgRgJgZQgFgOgDg0QgFhAAGg3QARimBfAGg");
	this.shape_2.setTransform(167.4,91.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EEA2CC").s().p("AFONtQgJgEhqg+Qhag0hSgWQgagHiPghQhPgTgqgUQg/gggTgYQgcgkAPhBQArjGhjiOQg4hPgYjTQgVi8ARhXQAMhBgBgdQAAgRgJgZQgFgOgDg0QgFhAAGg3QARimBfAGIAlAMQAuAQAxAXQCaBLBvB3QB/CGCPEIQCDDyAVBtQAWBuAMEfQANEqgVAaQgtA4g0AAQgVAAgWgJg");
	this.shape_3.setTransform(167.4,91.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,218.2,181.9);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F1F2F2").ss(3,0,0,4).p("AwEKWQgEgVAEgdQAIg4AlghQB1hpFrCoQFwCrCxhrQA7gjAthGQAnhHAPgTQBDhRCehvQDCiIBygEQB8gFBekcQBakOgLkN");
	this.shape.setTransform(159.5,206.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A7A9AC").ss(6,0,0,4).p("AwEKPQgEgVAEgdQAIg4AlghQB1hpFrCoQFwCrCxhrQA7gjAthGQAnhHAPgTQBDhRCehvQDCiIBygEQB8gFBekcQBakOgLkN");
	this.shape_1.setTransform(159.5,207.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#241F20").ss(1,0,0,4).p("AnqD4IPVnv");
	this.shape_2.setTransform(325.2,56.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#241F20").ss(1,0,0,4).p("AAXAAQAAgIgHgHQgHgHgJAAQgIAAgHAHQgHAGAAAJQAAAJAHAHQAHAHAIAAQAJAAAHgHQAHgHAAgJg");
	this.shape_3.setTransform(276.1,81.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#514CA8").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_4.setTransform(276.1,81.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#241F20").ss(1,0,0,4).p("AAuAjIhbAAIAAhFIBbAAg");
	this.shape_5.setTransform(263.1,132.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#514CA8").s().p("AgtAjIAAhFIBbAAIAABFg");
	this.shape_6.setTransform(263.1,132.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#241F20").ss(1,0,0,4).p("ABSA+IijAAIAAh7ICjAAg");
	this.shape_7.setTransform(265.7,122.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#514CA8").s().p("AhRA+IAAh7ICjAAIAAB7g");
	this.shape_8.setTransform(265.7,122.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#241F20").ss(1,0,0,4).p("Ahgg7IAAByIDBAAIAAgo");
	this.shape_9.setTransform(265.7,111);

	this.instance = new lib.Path_7();
	this.instance.setTransform(273.4,86.2,1,1,0,0,0,23.5,28.2);
	this.instance.alpha = 0.602;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#241F20").ss(1,0,0,4).p("AAOkXQgqA6guA8QhcB4gJAJQgmArgLA9QgRBkB1AgIC4BKICsgB");
	this.shape_10.setTransform(273.1,86.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#241F20").ss(1,0,0,4).p("AB+EtIgMAFIjtpeIAUgGQDhJPAEAQg");
	this.shape_11.setTransform(286.3,86);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E7E8").s().p("AhMAzIAdiCIB8AKIgNCVg");
	this.shape_12.setTransform(9.4,270.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E7E8").s().p("AjxAIIgniJIIxCiIgWBhg");
	this.shape_13.setTransform(30.8,293.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E7E8").s().p("AgnAwIAXhiIA4AAIgXBlg");
	this.shape_14.setTransform(63.3,302.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6E7E8").s().p("AikgtIFTBLIldAQg");
	this.shape_15.setTransform(112.5,281.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6E7E8").s().p("AhajnIBAggQAqA5AqDlQAVB1AMBoIhbATg");
	this.shape_16.setTransform(76.2,223.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6E7E8").s().p("AjwggIH7gtIg0BeInhA9g");
	this.shape_17.setTransform(95,300.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AAugiIAABFIhbAAIAAhFg");
	this.shape_18.setTransform(57,275.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AkNFrQgOgwgOiFQgNiCgFiCQgFhsAQhYIAQhBICKgQQCggKB1AaIAWAcQAbAoAZA8QBRDBAjFD");
	this.shape_19.setTransform(55.3,218.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AA0EHIhooM");
	this.shape_20.setTransform(70.4,225.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AmYidIADAQQghAGgiAJQhFARgKAMQgNAPgMBCQgNBBAKAHQAKAHAMADIFkA7QB0ATALAAQACAAAQADQAUADAWABQBIAFBtgEQCcgGDugZQAOgBAHgHIADgH");
	this.shape_21.setTransform(76.1,273.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AlEj/QiEACgVAAIiMAUQgIABgJADQgRAGgDAJQgDAJgGBMQgCAmgDAkIARBOQASBSAJANQAJANASAEQAJACAIgBQHWB2AXAAQAKAAAmAFQAjAFAJgBQHNg+AMAAQALAAAXgQIAzhfIA+gJIAsgcIAAguImIhfIgZh8IkXgzQimAFiDADg");
	this.shape_22.setTransform(67.7,283.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AABgVIgBAr");
	this.shape_23.setTransform(56,283.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AihgMICbAZICpgJ");
	this.shape_24.setTransform(56.9,280.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#241F20").ss(0.5,0,0,4).p("Ag5AZIAFgqIBzgC");
	this.shape_25.setTransform(46,280.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AhBgvIByAWIANBO");
	this.shape_26.setTransform(68.3,283.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AkPBkQADgoAHgqQAPhTAagKQAkgOB5gEQCMgGDHAM");
	this.shape_27.setTransform(63.1,272.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AluA4QAGgfAIggQAPhCAIgLQALgMANgKQANgKAFAAIAFAAQCKgJA+gDQCtgHAzALQAwAKBOAEQBBADADADQAGAEANA2QAGAbAFAYIgJCE");
	this.shape_28.setTransform(57.1,274.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AAKlhQgRASgHBmQgNC/AtGQ");
	this.shape_29.setTransform(23.1,218.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#241F20").ss(0.5,0,0,4).p("ACqA2QAJAAAJgFQASgLgBgaQgBgYgZgOQgGgDgXgHQgKgEgtgGQg5gIgqABQguABg8AFQg1AEgGACQgjAMAAAfQgBAZAIAKQAKANAcAAg");
	this.shape_30.setTransform(48.1,193.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AB2F1IgEgaIi9ADQgMhigMhnQgWjLAEgXQAIgtAjhnQAoh6AXgOQAGgDAPgE");
	this.shape_31.setTransform(23.2,220.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#241F20").ss(0.5,0,0,4).p("AlFlnQBKgRCFgEQCXgFBIAWQAHACAJAGQBKAxBCEFQA3DUAFB9IgTAFQiJAhiGAKIgCAgIj1AK");
	this.shape_32.setTransform(56.8,219.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D1D3D4").s().p("AgyBXQgKgHANhDQAMhBANgOQAKgMBDgRIAAARIgFAAQgFAAgNAKQgNAKgLAMQgIALgNBAIgOBBIgBACQgMgDgKgGg");
	this.shape_33.setTransform(23.2,270.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D1D3D4").s().p("AhPAKIAGgtICZAbIgDAqIAAACg");
	this.shape_34.setTransform(48.1,282.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#514CA8").s().p("AgtgeIBbAAIAAA8IgBgBIhaACg");
	this.shape_35.setTransform(57,275.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#514CA8").s().p("AgtAEIAAgGIBagCIABABIAAAHg");
	this.shape_36.setTransform(57,278.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D1D3D4").s().p("AjIFsQgvmQANjAQAHhlATgSQBKgRCFgEQCXgFBIAWQAHACAJAGIgJAHQh1gaigALIiKAPIgRBCQgPBXAEBtQAGCCANCCQAOCEANAwIAAADIggABg");
	this.shape_37.setTransform(45.1,218.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D1D3D4").s().p("AA0AjIgTgCQgKAAhzgTIAAgCIAEgqICogJIANBOIAAABQgWgCgTgDg");
	this.shape_38.setTransform(65.2,284.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D1D3D4").s().p("AlfBSIABgDIAOhAQAOhBAJgKQAKgMANgKQAOgKAEAAIAGgBQCKgJA+gCQCtgIAyALQAxALBNAEQBCADADACQjHgLiOAFQh3AFgkANQgaALgPBSQgHArgDAoIAAABg");
	this.shape_39.setTransform(55.5,271.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D1D3D4").s().p("AjNFdIhAABIAAgDQgOgwgOiEQgNiCgFiCQgFhtAQhXIAQhCICKgPQCggLB1AaIAWAcQAbAoAZA9QBRDBAjFCIAAABQiIAhiHAKIgCAgIj1AKgAhMlBQguABg8AFQg1AEgGACQgjAMAAAhQgBAZAIAKQAKANAcAAIFJAEQAJAAAJgFQASgLgBgaQgBgagZgOQgGgDgXgHQgKgEgtgGQgwgHgpAAIgKAAg");
	this.shape_40.setTransform(55.3,220.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D1D3D4").s().p("ABVFGQgjlFhPi/Qgag8gagoIgWgcIAJgHQBKAxBAEEQA3DVAFB8IgTAFg");
	this.shape_41.setTransform(78.5,216.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D1D3D4").s().p("AExAkQgNg0gGgEQgDgDhBgDQhOgEgwgKQgzgLitAHQg+ADiKAJIAAgRQAigJAhgGIgDgQQCDgDCkgFIEZAzIAZB6IgRAEIgLg1g");
	this.shape_42.setTransform(62.1,265.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D1D3D4").s().p("AjQA/IAKiCIARgDIGGBfIgEAHQgGAHgPABQjrAZicAGg");
	this.shape_43.setTransform(113.7,281.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#241F20").s().p("AgBEWIgkgDIgigFIgIgBIgIAAIgLgCIhOgSQhAgPhHgTIiHgkIiGgmIgBAAQgGABgIgCQgKgCgFgCIgDgCIgEgCIgGgGIgCgCIgCgCIAAgBIgBgBIgEgHIgJgcIgHgcQgOg4gMg3IAAgBIAAgBIAMidIAAgCIABgBIAAgBIAAgBIABgCQADgGAIgFQAJgFANgEICWgYIACAAIBwgCIFSgLIABAAIEjAyIADAMIANB8IGIBeIAAA1IguAdIgBABIgBAAIg7AJIgzBdIgBABIgPAKIgIAEQgDADgHABInbBHgAp9A2IAPA3IADAFIAAABIAEAEIAFAEIACACIADABIAMAEIANABIABAAIABABQAuAJBaAUIFjBOIAJABIBOAIIAFAAIHdg2IAOgFIANgHIA0hgIA/gJIApgaIAAgoImEheIgDAAIgihyIkNgzIm+AFIiUAVQgKACgHAEQgEACgBACIAAAAIgBAIIgDAVIgLCAIAAgCIAXBvg");
	this.shape_44.setTransform(67.6,283.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#241F20").s().p("AiSGDIgFABIgEgVIi/ACIAAgEQgNhRgUibQgIhAgEg2QgFgmAAgVIABgRIAKgsQAPg1ATg+QALgfAJgaQAQgmAKgSIALgOIAEgEIAEgEIADgBIAAAAIABAAIACgBIALgEIAYgGQAWgEAmgFQA5gHA/gDQA+gDA4ACQBMAEAuAMIADABIABAAIAFACIAGADIAQAKIAYAYQAQATASAiQAYAvAWBBQAfBeAaCIQANA/AGA3QAKBKAAAtIABAEIhMASQgLADgZAEIizAYIgCAhIgFAAIj0AJgAiOF+IDsgIIADghIC6gZQAZgEALgDIBDgPQgEgrgOhGIgXh0QgQhBgOgwQgQg8gTg0QgWg+gXgtQgRgfgOgQIgIgKIgKgJIgJgFIgHgDIgFgCQgqgMhHgDQgzgDhBADQhBACg0AGQgoAFgSAEIgTAEQgDAAgDACIgEABIgCABIgBABIgBABIgHAKQgLASgOAhIgUA3QgUA4gQA5IgLAqIAAAGQgBACABAEIACA5IAJB2IAXDoIC/gCg");
	this.shape_45.setTransform(49.8,218.8);

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(325.6,134.7,1,1,0,0,0,58.6,75.2);
	this.instance_1.alpha = 0.199;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.659],0,-39.4,0,39.4).s().p("A2PGJIAAsRMAsfAAAIAAMRg");
	this.shape_46.setTransform(341.1,283.4);

	this.instance_2 = new lib.Path_1();
	this.instance_2.setTransform(342.6,286.8,1,1,0,0,0,68.2,30);
	this.instance_2.alpha = 0.051;

	this.instance_3 = new lib.Path_2();
	this.instance_3.setTransform(294.8,136.6,1,1,0,0,0,27.6,15.6);
	this.instance_3.alpha = 0.051;

	this.instance_4 = new lib.Path_3();
	this.instance_4.setTransform(238.1,186.9,1,1,0,0,0,24.1,34.7);
	this.instance_4.alpha = 0.051;

	this.instance_5 = new lib.Path_8();
	this.instance_5.setTransform(240.5,267.1,1,1,0,0,0,13.2,51.1);
	this.instance_5.alpha = 0.051;

	this.instance_6 = new lib.Path_1_1();
	this.instance_6.setTransform(439.6,260.5,1,1,0,0,0,14.6,57.2);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.Path_2_1();
	this.instance_7.setTransform(339.2,65.1,1,1,0,0,0,11,15.5);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.Path_3_1();
	this.instance_8.setTransform(413,218.9,1,1,0,0,0,12.6,26.5);
	this.instance_8.alpha = 0.051;

	this.instance_9 = new lib.Path_4_1();
	this.instance_9.setTransform(268.5,225.1,1,1,0,0,0,16.1,26.6);
	this.instance_9.alpha = 0.051;

	this.instance_10 = new lib.Path_5();
	this.instance_10.setTransform(446.7,180.8,1,1,0,0,0,17.8,32.9);
	this.instance_10.alpha = 0.031;

	this.instance_11 = new lib.Path_6();
	this.instance_11.setTransform(326.9,45.4,1,1,0,0,0,47.6,43.8);
	this.instance_11.alpha = 0.051;

	this.instance_12 = new lib.Path_7_1();
	this.instance_12.setTransform(380.4,112.5,1,1,0,0,0,34.2,39);
	this.instance_12.alpha = 0.051;

	this.instance_13 = new lib.Path_4();
	this.instance_13.setTransform(337.2,218.5,1,1,0,0,0,12.3,28.2);
	this.instance_13.alpha = 0.051;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#595959").ss(1,0,0,4).p("AvvY9QAUiOAHgbQABgDA8kQQA4kAAEgJQAFgJAtCSQArCNAOBBQBJFJAAAlIWBAAQBIoRAEg7QACgfAYhTQAXhNgBgJIBDDqQBGD1AIAyQAJAyACBjIAABuIFpAAQgCgEgCgiQgEhVAGjwQAHjwg8j2QgThNgXhEIgTg1QANkihFipQgWg3gfgoQgegkgGgKQgQgYhHglQg/gggNAAQgGAAgegXIgdgXQg7gNgOAAQgRAAjphUQj0hYgZgZQgYgZgMh6QgIhQAAhDQAAgHAriAQAuiLAOh4QAQiJhGiAQgyhchahRQhBg6ivgKQiSgJhYAUQgtALhiAyQhlAzgeAeQgaAagHA5QgDAdACAXQgHAJgNByQgGA5gFA3IAKANQAJAOgCALQgDAShvCDIgEAIQgDAMAEAPQAGAUAgATQARAKAYANQAJAHgBAdQgBAYgEAMQgCAHAdALQAPAGAPAEQgHAIgHAJQgPASAAAGQAAAEASAUQARASgEAHQgWAwADAcQADAXAXAZQAPARBQgBQBagBAXAKQAjAOgCAmQgBAegWAgQgPAVjWBbQjWBYgHAEQgVAKgUAAQgIAAgzAdIgwAeQgbACgvAiQgsAcgfAiQgZAbgxCEQgpBsgQA6QgJAgAJBrQAEA1AGAuQgrA/goHZQgTDsgMDgg");
	this.shape_47.setTransform(340.3,159.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E6DBC6").s().p("APzY9IAAhuQgBhjgJgyQgJgyhFj1IhDjqQABAJgXBNQgZBTgBAfQgEA7hJIRI2BAAQAAglhIlJQgOhBgriNQgtiSgFAJQgEAJg4EAIg9ETQgHAbgUCOIlvAAQAMjgATjsQAonZArg/QgGgugEg1QgJhrAJggQAQg6AphsQAxiEAZgbQAfgiAsgcQAugiAcgCIAwgeQAygdAJAAQAUAAAVgKIDdhcQDVhbAPgVQAXggABgeQABgmgjgOQgXgKhZABQhQABgPgRQgXgZgDgXQgDgcAWgwQAEgHgRgSQgSgUAAgEQAAgGAOgSIAOgRIgdgKQgdgLACgHQAEgMABgYQABgdgKgHIgogXQgggTgGgUQgEgPACgMIAFgIQBviDADgSQACgLgJgOIgKgNIALhwQANhyAGgJQgBgXADgdQAHg5AagaQAegeBlgzQBhgyAtgLQBZgUCRAJQCwAKBAA6QBbBRAyBcQBGCAgQCJQgOB4gvCLQgrCAAAAHQABBDAHBQQAMB6AZAZQAZAZDzBYQDqBUARAAQAOAAA6ANIAdAXQAeAXAHAAQANAAA/AgQBHAlAPAYQAHAKAdAkQAgAoAWA3QBFCpgNEiIATA1QAXBEATBNQA7D2gGDwQgHDwAFBVQACAiACAEg");
	this.shape_48.setTransform(340.1,159.7);

	this.addChild(this.shape_48,this.shape_47,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.shape_46,this.instance_1,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.instance,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-1,483.8,323.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;