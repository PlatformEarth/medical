(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 496,
	height: 310,
	fps: 50,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.alveoli = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 13
	this.instance = new lib.lungs();
	this.instance.setTransform(411,147,0.6,0.6,0,0,0,109.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.53},101,cjs.Ease.get(1)).wait(50).to({scaleY:0.6},99,cjs.Ease.get(1)).wait(6));

	// Layer 10
	this.instance_1 = new lib.bunch();
	this.instance_1.setTransform(198.1,96.4,0.598,0.598,-82.2,0,0,83.4,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:83.5,scaleX:0.5,scaleY:0.5},101,cjs.Ease.get(1)).wait(50).to({regX:83.4,scaleX:0.6,scaleY:0.6},99,cjs.Ease.get(1)).wait(6));

	// stem shading
	this.instance_2 = new lib.bunch2();
	this.instance_2.setTransform(170.9,197.4,0.598,0.598,0,0,0,57.4,42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.5,scaleY:0.5,x:167.9,y:190.4},101,cjs.Ease.get(1)).wait(50).to({scaleX:0.6,scaleY:0.6,x:170.9,y:197.4},99,cjs.Ease.get(1)).wait(6));

	// corner shading
	this.instance_3 = new lib.bunch();
	this.instance_3.setTransform(78.4,150.3,0.598,0.598,0,0,0,84.5,23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.5,scaleY:0.5},101,cjs.Ease.get(1)).wait(50).to({scaleX:0.6,scaleY:0.6},99,cjs.Ease.get(1)).wait(6));

	// Layer 11
	this.instance_4 = new lib.tubes();
	this.instance_4.setTransform(146,156,0.598,0.598,0,0,0,244,238);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(256));

	// figure
	this.instance_5 = new lib.person();
	this.instance_5.setTransform(382.4,159.6,0.656,0.656,0,0,0,247.6,243.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(256));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(247.7,155,545.1,319.3);


// symbols:
(lib.Path_16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA7I0Ig5gFQhxnAiYmFQhMjEg1hqQDoFqE8EeQBJBCBsBXQA/AzgJACQgWAEgCBXQgBAsADArQiDAZg/A3QggAbgFAWQgSgKg9gHg");
	this.shape.setTransform(39.3,58.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78.6,116.4);


(lib.Path_15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtH/Ig+gIQgZiTi0nGQhZjkhVjGQDGEbEdFUQCPCrBoByIAzAHQAjAIhIgDQhJgDhWBCQgrAhgdAhQgHgEhBgKg");
	this.shape.setTransform(39.7,52.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.4,105.2);


(lib.Path_14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKDvIgxgFQgXiOiElJIgIgTQCWDOCNCEQBIBDApAaQg0ATghAhQgQARgHANQgcgLg4gHg");
	this.shape.setTransform(20.3,25.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.6,51.5);


(lib.Path_13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcFlQg/gqheAGQgNABgGgLQgHgLAHgLQEOmbA1ihIAEgMQgEgegCgjQAHgBAEAJQAHARgMAoQAMBdAhAoQAVAaAUgCIjRHnQgCAIgJADIgFABQgGAAgGgEg");
	this.shape.setTransform(20.9,36.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.8,72.4);


(lib.Path_12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdDDQg3glhjADQgMAAgGgLQgGgLAHgLQBbiBBvjEQAMBNAnAoQATAUARAFQgGAJgdBTQgjBpgSArQgDAJgJADIgHABQgGAAgFgDg");
	this.shape.setTransform(14.8,19.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.6,39.7);


(lib.Path_11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABNBsQhKgyhcAFQgNABgGgLQgGgLAHgLQAlg2AsgxQAWgZANgNQADAuAiAuQAVAbAfAZQAMAKgGAOQgIATAKgDQALgDgJAaQgEAKgJADIgHABQgGAAgFgDg");
	this.shape.setTransform(11.2,11.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.6,22.4);


(lib.Path_10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBFQgagMgUgVQgagagRgkQBHAFA3AjQAJAFAKgDQAKgEACgKQADgGgDAMIgBAGQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQgEAIACgHQgGAEgVAVQggAegHAAIgBAAgAhYgbQgMABgGgLQgGgLAGgLQAOgVgFAbQgGAbANgUQAHgLANACQANACAEAMIAFAPQgTgCgVABg");
	this.shape.setTransform(11.1,7.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,22.2,13.9);


(lib.Path_9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjKE1Ii3kbQiWjigWgdQgbgjh3i1Qh3i1grhHQgkg6ghgnIgkgkQAvgKAxgUQBjgqAQg5IACgMQCrGHAMALQAJAJAiA4QAgA4ANAaQAVArA5BOQBKBlAxAdQAwAdE/A/QCiAgCpAdQAVAFDSAUQDUAYAWAAIBcAEQANABj+AeQj+AeghgCIisgWQiQgUgmAFQgtAHgfATQgZAPgKAWQgIAOAKCdQAFBPAIBlQACAXBBCLQAjBIAuBZIAzBfQAmBHACAMg");
	this.shape.setTransform(97.1,97.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,194.2,194.5);


(lib.Path_8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdK/QhRiLhXiPQitkfgWgZQgcgfhdiQQhgiVgWgvQgPgfhEhSQhFhTgUgpQgZgwghgwIgegqIA8gTQBAgWANggIDJFtIBVCLQBYCNASASQAjAjBEAiQBbAvBpATQCdAcFXA3QAZAFBhAOQBdANAjADQAnAEAyALQhyAEh3ACQjuAFgbgIQghgJh0gMQhygLgTAFQgTAEgjAtQglAtACASQADAZASBkQARBsAGAOQADAIAHBEQAGBAAIAIIAGAHIgKgIg");
	this.shape.setTransform(83.4,71.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,166.9,142.3);


(lib.Path_7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACfArQg4g9gHgKQgNgSgrgVQgwgYg6gKQg2gJhOCLQgoBGgcBIQADgbARhIIAShJQA9ikATgWQAPgRApgOQAtgOAhAFQAkAGAqAbQAvAfAZApQAXAkA4ChQAdBRAXBKQgvhrg9hQg");
	this.shape.setTransform(26.8,23);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.6,46.1);


(lib.Path_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABOH+QA5imgHhiQgIhihVidQhXiYgNgZQgZgzjAmZIDGEsQDKE6AeBAQAPAhAgAoQASAXAjApQA2BEgeAiQiGCWgMAdQgGAOgsBUIg0BjQAcg8AahNg");
	this.shape.setTransform(28.4,64.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.7,129.6);


(lib.Path_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhiBSQgzgOgNgdIgCgZQAwg5CBgcQBBgOA4gCQAqAfgPAkQgDAHgjAnQgUAXhEAWQgxARgoAAQgYAAgUgGg");
	this.shape.setTransform(16.7,8.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0,33.1,17.7);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AheBDQgqgFgTgUQA2ggBCgbQCCg7A9AKQABAVgOAYQgdAwhKAWQg9ATgwAAIgZgBg");
	this.shape.setTransform(15.7,6.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.3,13.8);


(lib.Path_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhiAlQAmglBSgVQArgMAigDIgIAGQgyAuhKAPQgeAGgYAAIgLAAg");
	this.shape.setTransform(10,3.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,7.6);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAuCrQghgXgVgJQgsgRg0AFQgGABgbAKQgRAGAFgIIBWh6IA2hLQA3hkAwgLQA7gNgCCWQAAAOhFC3IAGgFQgDAJgPAFQgIADgFAAQgGAAgFgDg");
	this.shape.setTransform(15.2,17.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.4,34.9);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkOAXQA+AFA3gNQBxgagohiIFfAaQgaAVgZAjQgyBEADBEQlfhNhcgJg");
	this.shape.setTransform(27.6,11);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,0,54.4,22);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiaEtIgsAGQgNgOgJgfQgQg/AXhXIg+i9QBLA5BbAUQCzAlBTi1IhTisIBVCoIgCAEIARAiIAgACQAoAHAiAYQgVAggSAuQglBhALBVQgtAKg0AVQhnAsgeA7QhjgVgkAFg");
	this.shape.setTransform(27.7,37.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,5.7,55.3,63.5);


(lib.Path_4_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("AlRFoQgPiRAIgPQADgFBWjsQBSjkANgKQAXgUBRg4QBag/ALAAQASAACehIIA7gIQA8gGAGAHQALAKgtEDQgtEGgcAVQgIAGg6BHQhGBUg5A6QjFDKipAZQgJhFgIhIg");
	this.shape_1.setTransform(34.9,50.2);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,69.7,100.4);


(lib.Path_3_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Al/CeQCtATC2AQQFoAhAmgPQAngOh3jKQg7hmhDhkQgFAbgPAfQgcA9grATQhFAemDDFg");
	this.shape_1.setTransform(40.2,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("AgaC9Qi1gQiugTQGEjFBEgeQArgTAdg9QAOgfAGgbQBDBkA7BmQB2DKgmAOQgMAFgrAAQhfAAj5gXg");
	this.shape_2.setTransform(39.9,22.5);

	this.addChild(this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,79.2,44.5);


(lib.Path_2_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("AvaGvQCCi2CejGQE/mLCUhQQADgCAIAAIgDABIAnA8QAyA8AzAAQA5AAAngkQAhgbAig+QCCBbCyCaQFlEyDxE2g");
	this.shape_1.setTransform(98.7,43.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.6,197.4,86.3);


(lib.Path_7_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADlGvQAsioABgrQABgohKhuQheiJgJgRQgZgzhniEQhchzgagZQiZiPg9gnQA9AZBHAjQCOBFAyAvQA1A1CFC6QB+CwAaA2IAsBdQAUAtgCANQgDAXgSA0QgWA/gTAQQgQAPgxBqIgyBsQAWhLAWhUg");
	this.shape_1.setTransform(36.3,59);

	this.addChild(this.shape_1);
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("ADpDGQAXgPgOgRQgOgSiVhpQiChdghgUQgmgagzgbQhLgpgYAAQgYAAgUAXQgKALgFAKIAMhdQgCAXAqALIA+APQB7A/AqAgQAfAYCKBdQCQBjAPAHIAqALQAWAGgOADIg/ANIg/AbIAhgQg");
	this.shape_2.setTransform(33.2,21.4);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.5,42.8);


(lib.Path_3_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDCsQgRgJiAgdQADheANgqIAbhnQAUhJAOgRQBMAyAjATIBMApQA2AbALADQAFACApAXQAeARATAHQiQgvgZgKQgTgHgSADQgNACgaAOQgYAOgNAeQgNAbAEAbQACAQADAvQAEAoARAHIA0ARQAgALAMALQhbgOgTgKg");
	this.shape_3.setTransform(21.3,19.6);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.6,39.3);


(lib.Path_2_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiUACQABh+AViBQAdgFAYAQQAjAXANAEQAZAIAvAdQAXAOASANQgngVgzABQgqABgTAKQgKAGgHAkQgDATgEAeQgDAUAMBWQANBeANAFQAUAIC1gCIjEBxIgDAAQhjAAABj9g");
	this.shape_2.setTransform(15,25.6);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,30,51.1);


(lib.Path_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("AkkFeICSgIIAfgNIEcniIA7iAIAMhJIgCg+IA3BvIgmgNIgtB3Ii8EzIhyDnIA0BOg");
	this.shape_1.setTransform(29.4,41.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.8,83.5);


(lib.Path_17 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABLGgQgmgHhBgoQgrgZgbgUQgQgLhAgcIA0ANQA4AOAMAGQASAHA9AMQBCANAGgGQAGgGAOgmQANgkADgOQACgJgLiVIgMihIAAhwQgBhfgHgCQgIgCgSAQQgSAPgDAJQgBAFgzA/Ig4BIIAvhaQAuhbAJgKQAIgJAWg8QAVg4ADAAQAGAAAJAIQAKAIACAIIARBfQARBfACAsQAQFGgBANIgCBTQgBBLgEAKQgLAagSASQgYAYgdAAIgPgBg");
	this.shape_1.setTransform(18,41.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.9,83.6);


(lib.Path_18 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("AABGWQiJgEgYgHQgTgFADgFIAkgmQAbgdAylsQAZi3AUiyQAHCaBHE1QBGEqAUAAQATAAAHAUQAGAUgTAJQgMAFg9AAIhZgCg");
	this.shape_2.setTransform(17.8,40.8);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.6,81.7);


(lib.Path_7_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("AlVIjIgcgVIhzr6QgWh4AYhzQAMg6AQghQAgCLBSBLQAVASAjAXQAaARADAHQAHAPAACYQAMCjBABgQAaAmEdBqQCRA2ClA6IAuAWQAHALg7AfQg3AclUAlIlXAjIgGAAQgOAAgagQg");
	this.shape_2.setTransform(49.6,56.4);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99.2,112.8);


(lib.Path_6_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D2625").s().p("AGnIpQhqhrAXiBQAUhUAEgbQAHgqgVgsQgYgygtgbQgpgYgzAAQgrAAgyA4QgtAygDAfQgCAXgwgjQgwghgIgRQgVgsg9g6Ig5gzIhuhPIl5hoQgEgaACghQADhCAdgkQAcgjCBhJQCWhVBqgUQCEgZC9ANQDPAOBVA0QBTAyBXB7QBPBtAUBIQAVBMAPBtQASB9gLApQgIAchIDoQhEDcgCAKQg6gbg1g1g");
	this.shape_2.setTransform(68.8,63.3);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.7,126.8);


(lib.Path_5_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D2625").s().p("AgwD+Qgqg3gzhRQgrhEgGgFQgUgUgbj1QgZjyAIgKQAJgJBXATQB4BIAOABQAIAABDA9QA9A2ARATQAJAKA4DWQA6DdADAGQAJAXgmEBQiCgdiQjBg");
	this.shape_2.setTransform(25.6,47.6);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,51.5,95.3);


(lib.Path_4_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#241F20").s().p("AiyFhQgOgFAJgsQAThkADgcQAdjshZkcIgDgLIAJAeQAfBnAjBbQA1CKAoAwQA9BMBgBcQBmBjAWAAQkMAihdAAQgfAAgLgDg");
	this.shape_3.setTransform(22.5,35.7);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.1,71.4);


(lib.Path_3_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#241F20").s().p("Ai6FCQASAABWhjQBPhcAyhMQAigwAsiKQAdhZAZhpIAIgeIgCALQhKEcAXDsQADAaAQBmQAHAsgLAFQgKADgZAAQhOAAjegig");
	this.shape_4.setTransform(18.9,35.7);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0,37.5,71.4);


(lib.Path_2_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#241F20").s().p("AiADYQgjgNAHgYQAMghARhCQAUhMAAgRIgHg6QgFgoAJgSQAVgXAZgXQAygvAYgBQAygBAdAKQAzARAMAzQAQBAgdBVQgeBdg3AfQgqAYgrAnQgjAfgKACIgMABQgSAAgWgIg");
	this.shape_3.setTransform(15.9,22.4);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.7,44.9);


(lib.Path_1_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D2625").s().p("AAvKOIgLjGQgEguhLkjQhUk4gxh5QgthwAPjTQAHhqAQhUQCQEWCLLHQBGFlApEtIieAHQACgLgIiig");
	this.shape_2.setTransform(21.1,82.8);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.3,165.6);


(lib.Path_19 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D2625").s().p("Ai9LcQAlkNA/k+QB8p7CCj3QAPBWAGBqQANDTgoBjQgrBog6EGQgyDigFA1QgBAVgZCaQgZCRABAIg");
	this.shape_3.setTransform(19,73.9);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,147.7);


(lib.Path_89 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiDjIgegFQgXAChBgpQhWg1gshSQgrhOAXhrQALg2ATglQAdBABPAvQA9AlBkAeQBGAWCBAGQBBADAygBQgIAqgOAeQgZA4gyAqQhVBHhmAHIgYABQgRAAgUgCg");
	this.shape.setTransform(31.1,23);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.3,46);


(lib.Path_88 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag8DdQhJgQgxgmQg3gqgphOQguhVAYhoQALg0AVgiQAABGBGBHQBGBHBjAeQBOAZCKgWQBFgMA1gOQgOBdhxBdQgdAYg6AQQgsAMgrAAQghAAgjgIg");
	this.shape.setTransform(30.9,23);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,46);


(lib.Path_87 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhdCSQiCgsg1iJQgbhFgBg8QAXA5BVA7QBSA4BRARQBGAPCNglQBGgQA5gWQg4B5hsAzQg9AchBAAQgzAAg5gTg");
	this.shape.setTransform(30.5,16.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61,33.2);


(lib.Path_86 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag/BxQhtgchAhrQghg2gKgxQAqBPAzAlQA1AmBjAVQBIAQCBgfQBAgPAxgTQhQBbheAZQgkAJgmAAQgtAAgygNg");
	this.shape.setTransform(28.1,12.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.2,25.4);


(lib.Path_85 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB1CbQgugJhGgfQhigsinhZQA/hgBRgkQBigrBxAvQBoAqAuCNQAWBIACA/Qh1gLgfgGg");
	this.shape.setTransform(26.6,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.2,34.4);


(lib.Path_84 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABNB8QgZgJhGgnQgugZidhcQCiiIB6A7QBUAnAtBrQAYA2AFAuQgfAJghAAQgnAAgpgNg");
	this.shape.setTransform(22.2,13.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.4,27.6);


(lib.Path_83 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkBJQgwgBgrgWQhCghgbgPQgtgYgIgVQAagNAigIQBEgRAoAXQAuAZAgAoQAcAkABAaQgNAEgUAAIgFAAg");
	this.shape.setTransform(13.9,7.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.8,14.6);


(lib.Path_81 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiDjIgegEQgYABhAgoQhWg2gshSQgrhNAXhsQALg1ATgmQAdBABPAvQA9AlBkAeQBGAWCBAHQBBADAygBQgIAqgOAdQgZA4gyAqQhVBHhmAIIgVAAQgTAAgVgCg");
	this.shape.setTransform(31.1,23);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.3,46);


(lib.Path_80 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag8DdQhJgRgxgmQg3gqgphNQgthVAXhoQAMg0AUgjQAABGBGBIQBGBHBjAeQBOAZCKgXQBFgLA1gOQgJA7gzA+QgZAegqAjQgeAYg5AQQgsANgrAAQghAAgjgJg");
	this.shape.setTransform(30.9,23);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.9,46);


(lib.Path_79 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhdCSQiCgsg1iJQgbhFgBg8QAXA5BVA7QBSA4BRARQBGAQCNgmQBGgQA5gWQg4B5hsAzQg9AchBAAQgzAAg5gTg");
	this.shape.setTransform(30.5,16.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61,33.2);


(lib.Path_78 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag/BxQhtgdhAhrQghg2gKgxQAqBQAzAlQA1AlBjAWQBIAQCBgfQBAgPAxgTQhQBbheAZQgkAKgnAAQgsAAgygOg");
	this.shape.setTransform(28.1,12.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.2,25.4);


(lib.Path_77 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB1CaQgugJhGgeQhigsinhaQA/hfBRgkQBigrBxAvQBoAqAuCNQAWBHACA/Qh1gKgfgHg");
	this.shape.setTransform(26.6,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.2,34.4);


(lib.Path_76 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABNB8QgZgJhGgnQgugZidhcQCiiIB6A7QBUAnAtBrQAYA2AFAuQgfAJghAAQgnAAgpgNg");
	this.shape.setTransform(22.2,13.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.4,27.6);


(lib.Path_75 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkBJQgwgBgrgWQhCghgbgPQgtgYgIgUQAagNAigJQBEgRAoAWQAuAaAgAoQAcAkABAaQgNAEgUAAIgFAAg");
	this.shape.setTransform(13.9,7.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.8,14.6);


(lib.Path_73 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmD9IgigFQgZAChIgtQhgg8gxhbQgwhXAZh3QAMg8AWgqQAgBHBYA1QBFApBvAhQBOAZCQAHQBIAEA4gCQgKAxgOAfQgcA/g4AvQhfBOhxAJIgaAAQgUAAgXgCg");
	this.shape.setTransform(34.7,25.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69.4,51.2);


(lib.Path_72 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhED3QhRgSg3grQg9gugthXQgzhfAah0QANg6AXgnQAABPBOBQQBOBPBuAhQBYAdCagaQBNgMA7gRQgQBph/BnQggAbhAASQgxANgwAAQgmAAgngJg");
	this.shape.setTransform(34.5,25.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69.1,51.3);


(lib.Path_71 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhnCjQiSgxg8iZQgdhNgBhDQAZBABeBCQBdA+BaATQBOARCegpQBOgTA/gYQg+CHh5A4QhEAghJAAQg5AAg+gVg");
	this.shape.setTransform(34,18.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.1,37);


(lib.Path_70 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhHB+Qh4gghJh3Qgjg9gNg2QAvBYA5AqQA7AqBvAYQBRASCPgjQBIgRA3gVQhZBmhpAcQgoAKgsAAQgxAAg5gPg");
	this.shape.setTransform(31.3,14.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.6,28.4);


(lib.Path_69 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACDCsQg0gKhOgiQhtgxi7hkQBGhqBbgoQBsgxCAA1QB0AvAyCdQAaBQACBGQiCgMgjgHg");
	this.shape.setTransform(29.7,19.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.3,38.4);


(lib.Path_68 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABWCKQgcgKhOgsQg0gbiuhnQC0iYCIBCQBeAsAzB3QAaA8AGAzQgjALglAAQgsAAgtgPg");
	this.shape.setTransform(24.8,15.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.6,30.8);


(lib.Path_67 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABvBRQg1gBgwgYQhKglgegRQgygbgJgXQAdgOAmgKQBMgTAtAaQAzAcAkAsQAeApACAdQgPAEgXAAIgFAAg");
	this.shape.setTransform(15.5,8.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,16.3);


(lib.Path_65 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmD9IgigFQgZAChIgtQhgg8gxhbQgwhXAZh4QAMg7AWgqQAgBHBYA0QBEAqBwAhQBOAZCQAHQBIAEA4gCQgKAxgOAfQgcA/g5AvQheBOhxAJIgaAAQgUAAgXgCg");
	this.shape.setTransform(34.7,25.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69.4,51.2);


(lib.Path_64 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhED3QhQgSg4grQg9gvgthWQgzhfAah0QANg6AXgnQAABPBOBPQBOBPBuAiQBYAcCagZQBNgNA7gQQgQBph/BnQggAbhAASQgxANgwAAQgmAAgngJg");
	this.shape.setTransform(34.5,25.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69.1,51.3);


(lib.Path_63 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhnCjQiSgxg8iZQgdhNgBhDQAZBABeBCQBdA+BaATQBOARCegpQBOgTA/gYQg/CHh4A4QhEAghJAAQg5AAg+gVg");
	this.shape.setTransform(34,18.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.1,37);


(lib.Path_62 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhHB+Qh4gghJh3Qgjg9gNg2QAvBYA5AqQA7AqBvAYQBRASCPgjQBIgRA3gVQhZBmhpAcQgoAKgsAAQgxAAg5gPg");
	this.shape.setTransform(31.3,14.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.6,28.4);


(lib.Path_61 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACDCsQg0gKhOgiQhtgxi7hkQBGhqBbgoQBsgxCAA0QB0AvAyCeQAaBQACBGQiCgMgjgHg");
	this.shape.setTransform(29.7,19.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.3,38.4);


(lib.Path_60 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABWCKQgcgKhOgsQg0gbiuhnQC0iYCIBCQBeAsAzB3QAaA8AGAzQgjALglAAQgsAAgtgPg");
	this.shape.setTransform(24.8,15.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.6,30.8);


(lib.Path_59 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABvBRQg1gBgwgYQhKglgegRQgygbgJgXQAdgOAmgKQBMgTAtAaQAzAcAkAsQAeApACAdQgPAEgXAAIgFAAg");
	this.shape.setTransform(15.5,8.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,16.3);


(lib.Path_57 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmD4IgggEQgaABhGgsQhfg7gwhZQgvhWAZh1QAMg7AVgpQAgBGBWAzQBEApBtAhQBNAYCNAHQBHAEA3gCQgKAwgOAfQgbA9g4AuQhdBOhvAIIgZABQgUAAgXgDg");
	this.shape.setTransform(34.1,25.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.3,50.4);


(lib.Path_56 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhCDzQhQgTg2gpQg8gugthVQgyheAahyQANg5AWgmQAABNBNBPQBMBOBtAgQBWAcCXgZQBMgMA6gQQgPBnh9BlQgfAbhAARQgwAOgvAAQglAAgmgJg");
	this.shape.setTransform(33.9,25.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.9,50.4);


(lib.Path_55 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhmCgQiPgwg6iWQgdhMgBhCQAZA/BcBAQBbA+BZATQBNAQCagoQBNgTA+gXQg9CEh3A4QhCAfhIAAQg4AAg+gVg");
	this.shape.setTransform(33.4,18.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,36.4);


(lib.Path_54 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhFB8Qh3gfhHh1Qgjg8gMg2QAuBXA4ApQA6AqBsAXQBQARCNghQBGgRA2gVQhXBkhoAbQgoALgqAAQgxAAg2gPg");
	this.shape.setTransform(30.8,13.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.5,27.9);


(lib.Path_53 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACBCqQgzgKhNgiQhsgwi3hiQBGhoBYgoQBrgwB9A0QByAuAyCbQAZBOACBFQiAgLgigHg");
	this.shape.setTransform(29.1,18.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.3,37.7);


(lib.Path_52 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABVCHQgZgIhQgsQgygbishlQCxiVCGBAQBcAsAyB0QAZA8AHAyQgjAKgjAAQgrAAgtgPg");
	this.shape.setTransform(24.3,15.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48.7,30.2);


(lib.Path_51 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABtBQQgzgBgwgYQhIglgegQQgxgagKgXQAdgOAlgJQBLgTAtAZQAyAbAiAsQAfAoACAdQgPAEgWAAIgGAAg");
	this.shape.setTransform(15.2,8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.4,16);


(lib.Path_49 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglD0IgggEQgZAChFgsQhdg6gvhYQguhUAYhzQAMg6AVgpQAfBFBUAzQBCAoBsAgQBMAYCKAHQBGADA2gBQgJAugOAfQgbA9g3AtQhbBMhtAIIgZABQgUAAgWgDg");
	this.shape.setTransform(33.5,24.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,49.5);


(lib.Path_48 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhBDuQhOgSg2gpQg6gtgshTQgyhcAahwQAMg4AXglQgBBMBMBNQBLBMBqAgQBVAbCVgYQBKgMA5gQQgKBBg3BBQgbAhgtAmQggAag9ARQgvANgvAAQgkAAgmgJg");
	this.shape.setTransform(33.3,24.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.7,49.5);


(lib.Path_47 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhkCdQiNgwg5iSQgdhLAAhBQAZA+BaBAQBZA8BYASQBLARCYgoQBLgSA9gYQg8CCh0A3QhCAfhGAAQg3AAg9gVg");
	this.shape.setTransform(32.9,17.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.7,35.7);


(lib.Path_46 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhFB6Qh0gfhGhzQgig7gMg0QAtBVA3AoQA5ApBrAXQBOARCLghQBFgRA1gUQhWBihmAbQgmAKgqAAQgwAAg3gOg");
	this.shape.setTransform(30.2,13.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.5,27.4);


(lib.Path_45 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB+CnQgygKhLghQhqgwi0hgQBEhmBXgnQBqgvB6AzQBwAtAxCYQAZBNACBEQh+gLgigHg");
	this.shape.setTransform(28.6,18.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.3,37.1);


(lib.Path_44 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTCFQgbgKhLgqQgygbiphjQCuiSCEA/QBaArAxByQAZA7AHAxQgiALgkAAQgqAAgsgPg");
	this.shape.setTransform(23.9,14.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.9,29.7);


(lib.Path_43 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrBOQgygBgvgYQhHgjgdgRQgwgZgKgWQAcgOAlgKQBKgSArAZQAyAbAiArQAdAnACAcQgPAEgWAAIgFAAg");
	this.shape.setTransform(14.9,7.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,15.8);


(lib.Path_41 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglD0IgggFQgZAChFgsQhdg6gvhXQguhUAXh0QAMg5AVgpQAfBFBVAzQBDAoBrAgQBMAYCKAHQBGADA2gBQgKAvgNAeQgbA8g3AuQhbBMhtAIIgbABQgTAAgVgDg");
	this.shape.setTransform(33.5,24.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.1,49.5);


(lib.Path_40 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhBDuQhPgRg1gqQg6gtgshTQgyhcAZhwQANg4AWglQAABLBLBOQBMBMBqAgQBVAcCUgZQBLgMA5gQQgKBBg3BCQgbAhguAlQggAag9ARQgvANguAAQgkAAgmgJg");
	this.shape.setTransform(33.3,24.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.7,49.5);


(lib.Path_39 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhkCeQiNgwg5iTQgdhLAAhBQAZA+BaBAQBZA8BYASQBLARCXgoQBNgSA8gYQg8CCh0A3QhCAfhHAAQg3AAg8gUg");
	this.shape.setTransform(32.9,17.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.7,35.7);


(lib.Path_38 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEB6Qh1gfhFhzQgjg7gMg0QAtBVA3ApQA5AoBrAXQBOARCLghQBFgQA1gVQhWBihmAbQgmAKgqAAQgwAAg2gOg");
	this.shape.setTransform(30.2,13.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.5,27.4);


(lib.Path_37 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB+CnQgygKhLgiQhqgvi0hgQBEhmBXgnQBqgvB6AyQBwAuAxCYQAZBNACBEQh+gMgigGg");
	this.shape.setTransform(28.6,18.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.3,37.1);


(lib.Path_36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTCFQgcgKhLgqQgxgaiphkQCuiSCEA/QBaArAyByQAYA7AGAxQgiALgjAAQgqAAgsgPg");
	this.shape.setTransform(23.9,14.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.8,29.7);


(lib.Path_35 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrBOQgzAAgugYQhIgkgcgQQgxgagJgWQAcgOAlgJQBKgTArAZQAxAbAiArQAeAnACAcQgOAEgWAAIgGAAg");
	this.shape.setTransform(15,7.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,15.8);


(lib.Path_33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglD0IgggFQgZAChFgrQhdg6gvhYQguhUAXh0QAMg5AVgpQAfBFBVAzQBDAoBrAgQBMAYCKAHQBGADA2gBQgKAvgNAeQgbA8g3AuQhbBMhtAIIgbABQgTAAgVgDg");
	this.shape.setTransform(33.5,24.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.1,49.5);


(lib.Path_32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhBDuQhOgRg2gqQg6gtgshTQgyhcAZhwQANg4AWglQAABLBLBOQBMBMBqAgQBVAcCVgZQBKgMA5gQQgKBBg3BCQgbAhguAlQgfAag9ARQgwANguAAQgkAAgmgJg");
	this.shape.setTransform(33.3,24.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.7,49.5);


(lib.Path_31 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhkCeQiNgwg5iTQgdhLAAhBQAZA+BaBAQBZA8BYASQBLARCXgoQBNgSA8gXQg8CCh0A2QhCAfhHAAQg3AAg8gUg");
	this.shape.setTransform(32.9,17.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.7,35.7);


(lib.Path_30 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEB6Qh1gfhFhzQgjg7gMg0QAtBVA3ApQA5AoBrAXQBOARCLghQBFgQA1gVQhWBihmAbQgmAKgqAAQgwAAg2gOg");
	this.shape.setTransform(30.2,13.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.5,27.4);


(lib.Path_29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB+CnQgygKhLgiQhqgvi0hgQBEhmBXgnQBqgvB6AyQBwAuAxCYQAZBNACBEQh+gMgigGg");
	this.shape.setTransform(28.6,18.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.3,37.1);


(lib.Path_28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTCFQgcgKhLgqQgxgaiphkQCviSCDA/QBaArAyByQAYA7AGAxQgiALgjAAQgqAAgsgPg");
	this.shape.setTransform(23.9,14.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.8,29.7);


(lib.Path_27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrBOQgzAAgugYQhIgkgcgQQgxgagJgWQAcgOAlgJQBKgTArAZQAxAbAiArQAeAnACAcQgOAEgWAAIgGAAg");
	this.shape.setTransform(15,7.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,15.8);


(lib.Path_25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglD0IgggEQgZAChGgsQhcg6gvhYQguhUAXhzQAMg6AVgpQAfBFBVAzQBDAoBrAgQBLAYCLAHQBFADA2gBQgJAugOAfQgbA9g2AtQhbBMhuAIIgaABQgTAAgVgDg");
	this.shape.setTransform(33.5,24.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,49.5);


(lib.Path_24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhBDuQhOgSg2gpQg6gtgshTQgxhcAZhwQAMg4AXglQgBBLBMBNQBLBNBqAgQBVAbCVgYQBKgMA5gQQgKBBg3BBQgbAhgtAmQggAag9ARQgvANgvAAQgkAAgmgJg");
	this.shape.setTransform(33.3,24.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.6,49.5);


(lib.Path_23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhkCeQiNgwg5iTQgchLgBhBQAYA+BbBAQBZA8BYATQBLAQCYgoQBLgSA9gXQg8CCh0A2QhCAfhGAAQg3AAg9gUg");
	this.shape.setTransform(32.8,17.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.7,35.7);


(lib.Path_22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEB6Qh1gfhFhzQgjg7gMg0QAtBVA3AoQA5ApBrAXQBOARCLghQBFgRA1gUQhWBihmAbQgnAKgqAAQgvAAg2gOg");
	this.shape.setTransform(30.2,13.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.5,27.4);


(lib.Path_21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB/CnQgygKhMghQhqgwi0hgQBFhmBWgnQBqgvB6AzQBwAtAxCYQAYBNADBEQh/gMgggGg");
	this.shape.setTransform(28.6,18.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,37.1);


(lib.Path_20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTCFQgZgJhOgqQgxgbiphkQCuiSCDA/QBbArAyByQAYA7AGAxQgiALgjAAQgqAAgsgPg");
	this.shape.setTransform(23.9,14.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.8,29.7);


(lib.Path_19_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrBOQgygBgvgYQhHgjgdgRQgwgZgKgWQAcgOAlgKQBKgSArAZQAyAbAiArQAdAnACAcQgPAEgWAAIgFAAg");
	this.shape.setTransform(14.9,7.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,15.8);


(lib.Path_17_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACuG4QhogaguhUQgIAFgTgBQgpgCg8ggQhBgigdgiQgXgcgohSQgeg/gFhTQgBgWADhRQgfgEglgOQhIgcgZgxQgbg2AAhHQABhIAdgdQgCBNAjBTQBICmDAAfIgJAtQgHA2AJA2QAeCrCwBUIBXAQQBjAKBBgcQBLghA1g4QAyg1AMgyIAFAuQADA2gIAuQgbCRiEADQgHANgWAKQgXAJgdAAQgeAAglgJg");
	this.shape.setTransform(48.8,45);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,97.5,89.9);


(lib.Path_16_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AClD/QAFgjAAgiIgBgbQgViaiMhQQhEgphCgLQAOgYAChjQgFhNgmg/QgTgggSgQQBeAOAZBXQANAqgHAoQDVB6AgCdQAQBQgbA3QAzCQhCBSQgiApgrANQBGhLAShtg");
	this.shape_1.setTransform(19.1,44);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,87.9);


(lib.Path_15_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhsDfQhdBFgsguQgOgPgHgYIgEgVQgugEgOgvIgEguQC1DADGhQQBNgfA9hDQA4g8ASg9QAahbgYhaQgMgtgSgcQBeABAFA9QADAfgRAfQAlA0gdAuQgKAOgPAMIgNAJQglEYi2AIIgLAAQhTAAhPgyg");
	this.shape_1.setTransform(33.6,27.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,67.1,54.7);


(lib.Path_14_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvCbQhXgEhBhEQg+hAAXhcQALgvAYgiQAbCaB3BQQA8ApA3AKQghAYg6AAIgOAAg");
	this.shape_1.setTransform(15.2,15.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.4,31.2);


(lib.Path_13_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag7ALQgVgbgDgcQAgAAAvgMQAUgGARgGQAGAkAXA1IAWAwQhjgCgsg4g");
	this.shape_1.setTransform(8.4,6.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,13.9);


(lib.Path_12_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhDgUQADgrALglQAbAjAxAeQAaAPAUAIQgnAXghAvQgRAYgKATQgrgjAGhWg");
	this.shape_1.setTransform(7,10.2);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,13.9,20.3);


(lib.Path_11_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhUAeICphIQgSANgVAQQgqAggMAYQg5gMgTgBg");
	this.shape_1.setTransform(8.5,4.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,8.6);


(lib.Path_10_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag+AAQAGAAA7gaIA8gaQgPAOgRAuQgIAYgGAVQgQgWg/gfg");
	this.shape_1.setTransform(6.4,5.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.8,10.7);


(lib.Path_9_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0ARQgegPgXgEQBZABBFgtQAjgXASgXQgmA0gRBGQgIAlgCAaQgkgug5geg");
	this.shape_1.setTransform(10.6,9.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,21.2,18.6);


(lib.Path_8_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAABHQhAhEhhgMQANgQAFgYQAIgugugpQBAAjBNAhQCZBEBFAAQgjAJgiAXQhFAtACA8QgNggghgig");
	this.shape_1.setTransform(18.3,13.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,27.5);


(lib.Path_7_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhQAfQgNhdgzg1QAtAjA7AjQBzBIBGALQgoABgwALQheAXgnArQADglgHgwg");
	this.shape_3.setTransform(14.6,11.7);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.2,23.3);


(lib.Path_6_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgxhgQAxA4AlAGIAMAAQg0AXgVA1QgMAdgBAaQAAgrgMiWg");
	this.shape_3.setTransform(5,9.7);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,19.4);


(lib.Path_5_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhagjQAJhJACg9QBSBFBNgSQAmgKAWgXQguBhADBgQABAxALAdQhgghhVAmQgrATgYAaQAgg+ARiPg");
	this.shape_3.setTransform(14,17);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.1,34);


(lib.Path_4_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA2CDIACgMQgChfh1gYQg/gOg/AHQAsgaAshbQAWguANgpQAZB1B1gCQA8AAA2gYQhEAsgoBrQgSAwgIAoIAAAJIgDBUIABhRg");
	this.shape_4.setTransform(19,21.2);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.1,42.5);


(lib.Path_3_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZgRQAdgxAQguIACgFQgCBWBABGQAgAjAgATQg7gUh7AVQg/AKgyAOQBGg1A0hSg");
	this.shape_5.setTransform(14.9,11.9);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.8,23.8);


(lib.Path_89_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgD2QhWgNg6g6QgTgRgOgWIgOgUQgNgNgKg9QgNhOAahGQAZhEBMgsQAngWAfgIQgVAzANBJQAJA4AiBLQAaA3BABRQAhApAbAdQgeATgZAIQgfAJggAAQgTAAgSgDg");
	this.shape_1.setTransform(18.8,25);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.6,50);


(lib.Path_88_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADDxQgcgEgogaQg4gkgeg5Qgdg1gDgyQgEg1AZhCQAchKBLgpQAmgVAegGQgpAlgGBRQgFBQAhBKQAaA+BXBIQAsAjAmAXQgsAdhGAAQgfAAglgGg");
	this.shape_1.setTransform(18.5,24.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.1,49.5);


(lib.Path_87_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTDMQhbgngphiQgrhlA4hpQAcg1AkggQgXAsAJBSQAJBRAhA4QAdAzBgBBQAwAhArAWQgvAPgsAAQg0AAgugVg");
	this.shape_1.setTransform(17.1,22.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.2,45.1);


(lib.Path_86_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYCgQg2glgjhFQgohOAfhhQAQgxAXggQgZBDAEAzQAFA1AoBFQAeA2BVA8QArAfAmAUQhiAAg/grg");
	this.shape_1.setTransform(13.7,20.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.5,40.7);


(lib.Path_85_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBzQgTghgSg7QgbhSgiiVQBbgMA/AdQBOAkAhBfQAeBTg+BnQgfA0glAjQg2hMgNgWg");
	this.shape_1.setTransform(13.9,21.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,27.8,42.6);


(lib.Path_84_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBZQgIgSgPhCQgKgmgaiRQCmAZAeBqQAVBGgpBVQgVArgYAcQgwgfgYg7g");
	this.shape_1.setTransform(10.3,18);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.6,35.9);


(lib.Path_83_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFBcQgXgdgJgmQgRg4gFgZQgIgpAIgQQAVAJAYAQQAsAhAJAkQAJAogIAqQgIAjgOAPQgLgGgMgPg");
	this.shape_1.setTransform(5.5,11.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.9,22.8);


(lib.Path_81_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgD2QhWgNg6g5QgSgSgPgWIgOgUQgNgNgKg9QgNhOAahGQAZhEBMgsQAngWAfgIQgVAzANBJQAJA4AiBLQAaA3BABRQAhApAbAdQgeATgZAIQgfAJggAAQgTAAgSgDg");
	this.shape_1.setTransform(18.8,25);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.6,50);


(lib.Path_80_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADDxQgcgFgogaQg3gkgfg5Qgdg0gDgyQgEg1AZhCQAchLBMgpQAlgUAegGQgpAlgFBQQgGBQAiBLQAZA+BXBHQAsAkAmAXQgtAdhGAAQgfAAgkgGg");
	this.shape_1.setTransform(18.5,24.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.1,49.5);


(lib.Path_79_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTDMQhagngphiQgrhlA3hpQAcg1AkggQgXAsAJBSQAKBRAgA4QAdAzBgBBQAwAhArAWQgvAPgsAAQg1AAgtgVg");
	this.shape_1.setTransform(17,22.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.2,45.1);


(lib.Path_78_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYCgQg2glgjhFQgohOAfhhQAQgxAXggQgZBDAEAzQAFA1AoBFQAeA2BVA8QArAfAmAUQhiAAg/grg");
	this.shape_1.setTransform(13.7,20.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.5,40.7);


(lib.Path_77_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBzQgTghgSg7QgbhSgiiVQBbgMA/AdQBOAkAhBfQAeBTg+BnQgfA0glAjQg2hMgNgWg");
	this.shape_1.setTransform(13.9,21.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,27.8,42.6);


(lib.Path_76_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBZQgIgSgPhCQgKgmgaiRQCmAZAeBqQAVBGgpBVQgUArgZAcQgwgfgYg7g");
	this.shape_1.setTransform(10.3,18);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.6,35.9);


(lib.Path_75_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFBcQgXgdgJglQgRg6gFgYQgIgpAIgQQAVAJAYARQAsAfAJAmQAJAngIAqQgHAjgPAPQgLgGgMgPg");
	this.shape_1.setTransform(5.5,11.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.9,22.8);


(lib.Path_73_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkETQhggQhBg/QgVgUgQgYIgPgXQgPgPgLhDQgPhYAdhNQAchMBWgxQAqgZAjgJQgYA5APBRQAKBAAnBTQAcA9BIBbQAkAtAfAhQgjAUgbAJQgiALglAAQgUAAgUgDg");
	this.shape_1.setTransform(20.9,27.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,55.7);


(lib.Path_72_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAEENQgfgFgugdQg9gpgjg/Qggg7gDg4QgFg7AchJQAghTBTguQAqgXAigGQgtApgHBaQgGBZAlBTQAdBFBhBPQAwAoArAaQgyAghOAAQgjAAgngGg");
	this.shape_1.setTransform(20.7,27.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.3,55.2);


(lib.Path_71_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWDkQhlgsgthtQgwhxA+h1QAeg7ApgkQgZAxAKBcQAKBaAlA+QAgA6BrBJQA2AkAwAZQg1AQgxAAQg6AAg0gXg");
	this.shape_1.setTransform(19,25.2);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.1,50.3);


(lib.Path_70_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbCyQg8gognhOQgthXAjhtQARg1AbglQgdBMAFA4QAFA8AtBNQAhA7BfBEQAxAjAqAVQhtAAhHgwg");
	this.shape_1.setTransform(15.3,22.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.7,45.4);


(lib.Path_69_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrCAQgVglgVhBQgehcgmimQBmgOBGAhQBXAoAlBpQAiBdhFB0QgjA6gpAmQg8hUgPgZg");
	this.shape_1.setTransform(15.4,23.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.9,47.6);


(lib.Path_68_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBkQgJgVgRhJQgLgrgdiiQC5AcAiB3QAXBOgtBfQgXAvgcAfQg1ghgbhCg");
	this.shape_1.setTransform(11.5,20);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.9,40);


(lib.Path_67_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGBnQgaghgLgqQgSg/gFgbQgKgtAJgTQAYALAaARQAyAlAKApQAKAsgJAuQgJAogQAQQgMgHgNgQg");
	this.shape_1.setTransform(6.1,12.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,12.1,25.4);


(lib.Path_65_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkETQhggPhBhAQgUgUgRgYIgPgWQgOgPgMhDQgOhYAchOQAchMBWgxQAqgYAjgKQgXA6AOBQQAKBAAnBTQAcA9BIBbQAkAtAfAhQgkAVgaAIQgiALglAAQgUAAgUgDg");
	this.shape_1.setTransform(20.9,27.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,55.7);


(lib.Path_64_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAEENQgggFgtgdQg9gogig/Qghg7gDg4QgFg8AchJQAghTBTguQAqgXAigGQgtApgHBaQgGBZAlBTQAdBGBhBPQAwAoArAZQgyAghOAAQgiAAgogGg");
	this.shape_1.setTransform(20.7,27.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.3,55.2);


(lib.Path_63_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWDkQhkgrguhuQgwhwA+h2QAfg7AogkQgZAxAKBcQAKBaAlA/QAgA5BrBJQA2AkAwAZQg1AQgxAAQg6AAg0gXg");
	this.shape_1.setTransform(19,25.2);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.1,50.4);


(lib.Path_62_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbCyQg9gpgmhNQgthXAjhsQARg2AagkQgcBLAFA4QAFA7AtBOQAhA7BfBEQAwAiAqAWIgCAAQhrAAhGgwg");
	this.shape_1.setTransform(15.3,22.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,45.4);


(lib.Path_61_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrCAQgWglgUhCQgehbgmimQBmgOBGAhQBXAoAlBpQAiBdhGB0QgiA6gqAmQg8hVgOgYg");
	this.shape_1.setTransform(15.5,23.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,47.6);


(lib.Path_60_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBkQgJgWgRhIQgKgrgeiiQC5AcAiB2QAXBPgtBfQgXAvgbAfQg2gigbhBg");
	this.shape_1.setTransform(11.4,20);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.9,40);


(lib.Path_59_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGBnQgaghgKgqQgTg/gFgcQgKgtAJgSQAYAKAaASQAyAkAKAqQAKArgJAvQgIAogRAQQgLgHgOgQg");
	this.shape_1.setTransform(6.1,12.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.2,25.4);


(lib.Path_57_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAjEOQhegPhAg+QgUgUgQgYIgPgWQgOgOgLhCQgPhXAdhMQAchLBTgwQAqgYAigJQgXA5APBPQAJA/AmBRQAcA8BHBZQAjAtAeAgQgiAUgbAJQgiAKgkAAQgTAAgUgDg");
	this.shape_1.setTransform(20.5,27.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.1,54.7);


(lib.Path_56_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAEEIQgfgFgsgdQg9gngig+Qgfg6gEg3QgEg6AchIQAfhRBSguQApgWAhgHQgtApgGBYQgGBXAlBSQAcBEBfBOQAwAnAqAaQgyAghMAAQgiAAgngHg");
	this.shape_1.setTransform(20.3,27.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.6,54.3);


(lib.Path_55_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVDgQhjgrgthrQgvhvA9hzQAeg6AogkQgZAxAKBaQAKBYAkA+QAgA5BoBHQA2AkAvAYQg0AQgwAAQg6AAgygXg");
	this.shape_1.setTransform(18.7,24.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.4,49.5);


(lib.Path_54_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaCvQg7gognhMQgshWAihqQARg1AagkQgcBKAFA3QAFA7AsBMQAhA6BdBDQAwAiApAWIgCAAQhpAAhFgwg");
	this.shape_1.setTransform(15,22.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.1,44.6);


(lib.Path_53_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqB9QgVgjgVhBQgdhaglijQBkgOBFAgQBVAnAlBoQAhBchEBxQgiA5gpAmQg7hTgOgZg");
	this.shape_1.setTransform(15.2,23.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.4,46.8);


(lib.Path_52_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBiQgIgUgRhIQgKgrgdieQC2AbAhB1QAXBMgtBeQgWAugbAfQg1ghgbhBg");
	this.shape_1.setTransform(11.3,19.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.5,39.4);


(lib.Path_51_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFBlQgYgggLgpQgSg/gFgaQgKgtAJgSQAYAKAZASQAxAjAKApQAKArgJAuQgIAmgRASQgLgIgOgQg");
	this.shape_1.setTransform(6,12.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,25);


(lib.Path_49_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAjEJQhdgOg/g+QgTgTgQgXIgPgWQgOgOgLhBQgOhVAchLQAbhKBTgvQApgXAhgJQgXA3APBOQAJA+AmBPQAbA8BGBXQAiAsAeAgQghAUgbAIQghAKgjAAQgTAAgUgDg");
	this.shape_1.setTransform(20.2,26.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.4,53.8);


(lib.Path_48_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADEDQgegEgrgdQg8gnghg9Qgfg4gDg2QgEg6AbhHQAehPBRgtQAogWAhgGQgsAogHBWQgGBWAkBRQAcBDBeBMQAvAmApAZQgwAghLAAQghAAgogHg");
	this.shape_1.setTransform(20,26.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,39.9,53.3);


(lib.Path_47_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVDcQhhgqgshpQguhtA7hyQAeg4AngjQgYAvAKBZQAJBXAkA8QAfA4BnBGQA1AjAuAYQgzAPgvAAQg5AAgygWg");
	this.shape_1.setTransform(18.3,24.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.8,48.6);


(lib.Path_46_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaCsQg6gngmhLQgrhUAhhpQARg0AagjQgbBJAEA2QAFA6ArBKQAgA6BcBCQAvAgAoAWIgCAAQhnAAhEgvg");
	this.shape_1.setTransform(14.7,21.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.6,43.9);


(lib.Path_45_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqB7QgUgjgUg/QgdhYglihQBigOBEAgQBUAnAkBmQAgBahCBvQgiA4goAlQg6hSgOgYg");
	this.shape_1.setTransform(14.9,23);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,46);


(lib.Path_44_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBhQgIgUgRhHQgKgqgdicQCzAbAhByQAWBMgsBcQgWAtgaAfQg0gigag+g");
	this.shape_1.setTransform(11.1,19.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.2,38.7);


(lib.Path_43_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGBjQgZgfgKgpQgSg9gFgaQgKgrAJgSQAXAKAZAQQAxAjAJApQAKApgJAuQgIAmgQAQQgLgHgNgQg");
	this.shape_1.setTransform(5.9,12.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.8,24.5);


(lib.Path_41_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAjEJQhdgOg/g+QgTgTgQgXIgOgWQg4h7Ash0QAbhJBTgwQApgXAigJQgXA3AOBOQAJA+AmBQQAbA7BGBXQAiAsAeAgQghAUgbAIQggAKgkAAQgTAAgUgDg");
	this.shape_1.setTransform(20.2,26.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,40.5,53.8);


(lib.Path_40_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADEEQgegGgrgcQg8gnghg9Qgfg4gDg2QgEg6AbhGQAehQBRgtQAogWAhgGQgsAogHBWQgGBXAlBQQAbBDBeBMQAvAmApAZQguAehEACIgJAAQgeAAgrgGg");
	this.shape_1.setTransform(19.9,26.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.9,53.3);


(lib.Path_39_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVDcQhhgqgshpQguhtA7hyQAeg4AngjQgZAwAKBYQAKBXAjA8QAgA4BnBGQA0AjAuAYQgyAPgvAAQg5AAgygWg");
	this.shape_1.setTransform(18.4,24.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.8,48.6);


(lib.Path_38_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaCsQg6gnglhLQgshUAihoQARg0AZgkQgbBJAEA2QAFA5ArBLQAhA6BbBCQAvAgAoAWIgCAAQhngBhEgug");
	this.shape_1.setTransform(14.7,21.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.5,43.8);


(lib.Path_37_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqB7QgUgjgUg/QgdhYglihQBigOBEAgQBUAnAkBmQAgBahCBvQgiA4goAlQg6hRgOgZg");
	this.shape_1.setTransform(14.9,22.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,45.9);


(lib.Path_36_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBhQgIgTgRhIQgKgqgdicQCzAcAhByQAWBLgsBcQgWAtgaAfQg0ghgag/g");
	this.shape_1.setTransform(11,19.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.1,38.7);


(lib.Path_35_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFBjQgYgfgLgpQgRg9gGgaQgJgsAJgRQAXAJAZASQAwAiAKAoQAKArgJAsQgIAngQAQQgLgHgOgQg");
	this.shape_1.setTransform(5.9,12.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,11.8,24.6);


(lib.Path_33_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAjEJQhdgOg/g+QgTgTgQgXIgPgWQgOgOgLhBQgOhVAchLQAbhKBTgvQApgXAhgJQgXA3APBOQAJA+AmBPQAbA8BGBXQAiAsAeAgQgjAUgZAIQghAKgkAAQgTAAgTgDg");
	this.shape_1.setTransform(20.2,26.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.4,53.8);


(lib.Path_32_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADEDQgegEgrgdQg8gnghg9Qgfg5gDg2QgEg5AahHQAfhPBRgtQAogWAggGQgsAogGBWQgGBWAkBQQAcBDBeBNQAvAmApAZQgwAghLAAQghAAgogHg");
	this.shape_1.setTransform(20,26.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,39.9,53.3);


(lib.Path_31_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVDcQhhgqgshpQguhtA7hyQAeg4AngjQgYAwAKBYQAJBXAkA9QAfA3BnBGQA1AjAuAYQgzAPgvAAQg5AAgygWg");
	this.shape_1.setTransform(18.4,24.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.8,48.6);


(lib.Path_30_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaCsQg6gngmhLQgrhUAhhpQARg0AagjQgbBJAEA2QAFA6ArBKQAgA6BcBCQAvAgAoAWQhpAAhEgvg");
	this.shape_1.setTransform(14.7,21.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.6,43.9);


(lib.Path_29_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqB8QgUgkgVg/QgchYglihQBigNBEAgQBUAmAkBmQAgBahCBvQgiA4goAlQg6hSgOgXg");
	this.shape_1.setTransform(14.9,22.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,45.9);


(lib.Path_28_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBgQgKgWgPhEQgKgqgdicQCzAbAhBzQAWBLgsBbQgWAugaAfQg0gigag/g");
	this.shape_1.setTransform(11.1,19.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.2,38.6);


(lib.Path_27_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFBjQgYgfgKgoQgSg+gFgaQgKgsAJgRQAXAJAZASQAxAiAJApQAKAqgJAtQgIAmgQAQQgLgHgOgQg");
	this.shape_1.setTransform(5.9,12.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.8,24.6);


(lib.Path_25_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAjEJQhdgOg/g+QgTgTgQgXIgPgWQgOgOgLhBQgOhVAchLQAbhKBTgvQApgXAhgJQgXA3APBOQAJA+AmBPQAbA8BGBXQAiAsAeAgQghAUgbAIQghAKgjAAQgTAAgUgDg");
	this.shape_1.setTransform(20.2,26.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.4,53.8);


(lib.Path_24_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADEEQgegGgrgcQg8gnghg9Qgfg4gDg2QgEg6AahHQAfhPBRgtQAogWAggGQgsAogGBWQgGBXAkBQQAcBDBeBMQAvAmApAZQguAehEACIgJAAQgfAAgqgGg");
	this.shape_1.setTransform(20,26.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,39.9,53.3);


(lib.Path_23_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVDcQhhgqgshpQguhtA7hyQAeg4AngjQgZAvAKBZQAKBWAkA9QAfA4BnBGQA1AjAuAYQgzAPgvAAQg5AAgygWg");
	this.shape_1.setTransform(18.4,24.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.8,48.6);


(lib.Path_22_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaCsQg6gogmhKQgrhVAhhnQARg0AagkQgbBJAEA2QAFA6ArBKQAhA6BbBCQAvAgAoAWIgCAAQhngBhEgug");
	this.shape_1.setTransform(14.7,21.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.6,43.8);


(lib.Path_21_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqB7QgUgjgVg/QgchYglihQBigOBEAgQBUAnAkBmQAgBahCBvQgiA4goAlQg6hRgOgZg");
	this.shape_1.setTransform(14.9,23);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,46);


(lib.Path_20_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguBhQgJgWgPhFQgKgqgdicQCzAbAhBzQAWBLgsBcQgWAtgbAfQgzghgbg/g");
	this.shape_1.setTransform(11.1,19.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.2,38.7);


(lib.Path_19_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFBjQgYgfgKgpQgSg9gFgaQgKgsAJgRQAXAJAZARQAxAjAJAoQAKArgJAsQgIAngQAQQgLgHgOgQg");
	this.shape_1.setTransform(5.9,12.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.8,24.6);


(lib.Path_17_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtG8QgMACgSgIQgjgRgcg2QgohOAbhHQgIgDgKgNQgVgagNg1QgOg5AGgkQAEgdAchBQAWg0AxgwQAIgJA3gtQgOgVgLgdQgWg7AQgpQASgtArgmQAqglAhACQgvAngdBCQg+CEBRCEQgzAYgsA2QhYBrAtCYIAkA9QAvBCA0AYQA5AbA/ACQA5ACAlgTQgkAvgzAeQgtAbgoAAQgvAAgogrg");
	this.shape_1.setTransform(21.5,48.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,42.9,97.6);


(lib.Path_16_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjLExQBSACBMgvQAmgYAUgYQg5BrhVAEIgGABQgnAAgdgTgABGgJQgMhAgdgtQAVgEA+g0QArgsASg5QAJgcAAgUQAqBBgnA9QgTAegbARQAoDBhPBoQgnA0gwANQBShfgZh+g");
	this.shape_2.setTransform(20.4,32.4);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.9,64.8);


(lib.Path_15_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiSCRQgzg1gNhOQhbgSAFgzQACgZAUgWQgWgeAVghQALgRAPgKQgUDRCbBOQA8AeBHACQBCABAvgXQBEggAqg/QAVgdAHgZQAyA3giAjQgLAMgSAHIgQAGQgMAygrAHIgpgEQhoBFhLAAQhBAAgtgwg");
	this.shape_2.setTransform(29.8,19.4);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,59.6,38.8);


(lib.Path_14_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBpQgtg4AGhKQAGhHBDgkQAigSAhgEQhNBjANByQAIA6AXAmQgkgHgggrg");
	this.shape_2.setTransform(7.2,15.6);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,14.3,31.2);


(lib.Path_13_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvgjQAFgdAQgQQAaAeAxAcQgdAjgZBDQg1g8ALg3g");
	this.shape_2.setTransform(5,8.1);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,16.2);


(lib.Path_12_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGgZQAagWAcgMQgGAiAJAtQAEAXAGAQQgjgKguAFQgXACgRAEQgCgtA4gog");
	this.shape_2.setTransform(6.1,6.1);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.3,12.2);


(lib.Path_11_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAdAXQgogHgXAEQgXgngJgLICFA9QgRgEgVgEg");
	this.shape_2.setTransform(6.8,3.2);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,6.4);


(lib.Path_10_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxglIAzAaIAwAUQgbgDg8AgQAEgVgQg2g");
	this.shape_2.setTransform(5,3.9);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.1,7.8);


(lib.Path_9_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhDgbQgHgagIgQQAuA2A/ARQAhAIAXgBQgzAEgzAdQgaAPgRANQAIgvgNgyg");
	this.shape_2.setTransform(8.4,7.1);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,14.1);


(lib.Path_8_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfB6Qg+gSgiAhQAMgYADgnQAGhKgrhCQAQAAARgKQAhgUgBgxQAOA4ASBBQAqCAAkAqQgZgPgggJg");
	this.shape_2.setTransform(8.9,14.7);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.8,29.4);


(lib.Path_7_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAcBSQg/gugvgBQAZgSAYgbQAxg7AFg7QADAuAJA2QATBsAeAxQgWgXgggYg");
	this.shape_4.setTransform(8.3,12.9);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.6,25.8);


(lib.Path_6_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAvg2QgIA5ASAaIAGAIQgqgUgrAQQgYAJgQANQAYgVBVhYg");
	this.shape_4.setTransform(6.6,5.6);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0,12.7,11.2);


(lib.Path_5_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhsAbQgigQgdgBQA3gLBhhDQAugiAmgfQADBXA0AlQAaAQAZAAQhSAZg5A1QgdAbgLAWQgfhMhFgfg");
	this.shape_4.setTransform(17.2,13.5);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,26.9);


(lib.Path_4_5 = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNBgIANgNQAmgyhthLQg+grhMghQBRgjBgAfQAvAQAfAWQBEBGA3AiQAbASAOAEQhVgVhOAjQgcAMgTAPQgDAGgHAGIg0ArIAxgqg");
	this.shape_5.setTransform(21.1,13.8);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.1,27.7);


(lib.Path_3_5 = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpgPQgngggkgXQBGAPBMgOQAvgIAjgOIAFgCQg2AtgJBLQgEAmAGAdQgUguhNg/g");
	this.shape_6.setTransform(11.7,9.4);

	this.addChild(this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.5,18.9);


(lib.tubes = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("EAmIAlMMhMPAAAMAAAhKXMBMPAAAg");
	this.shape.setTransform(244,238);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0.537,1],0,238,0,-238).s().p("EgmHAlMMAAAhKWMBMPAAAMAAABKWg");
	this.shape_1.setTransform(244,238);

	this.instance = new lib.Path();
	this.instance.setTransform(269.1,269.7,1,1,0,0,0,27.7,37.4);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(291.6,125.5,1,1,0,0,0,27.6,11);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(139.6,201.6,1,1,0,0,0,15.2,17.4);
	this.instance_2.alpha = 0.199;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(140.3,27.1,1,1,0,0,0,10,3.8);
	this.instance_3.alpha = 0.102;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(136.7,24.3,1,1,0,0,0,15.7,6.9);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(135.9,22.5,1,1,0,0,0,16.7,8.8);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(153.3,103.2,1,1,0,0,0,28.4,64.8);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.Path_7();
	this.instance_7.setTransform(187.2,161.5,1,1,0,0,0,26.8,22.9);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.Path_8();
	this.instance_8.setTransform(226.9,98.9,1,1,0,0,0,83.4,71.1);
	this.instance_8.alpha = 0.148;

	this.instance_9 = new lib.Path_9();
	this.instance_9.setTransform(233.4,117.2,1,1,0,0,0,97.1,97.2);
	this.instance_9.alpha = 0.148;

	this.instance_10 = new lib.Path_10();
	this.instance_10.setTransform(136.9,218.1,1,1,0,0,0,11.1,7.1);
	this.instance_10.alpha = 0.051;

	this.instance_11 = new lib.Path_11();
	this.instance_11.setTransform(137.2,208.9,1,1,0,0,0,11.2,11.2);
	this.instance_11.alpha = 0.051;

	this.instance_12 = new lib.Path_12();
	this.instance_12.setTransform(141.6,199.3,1,1,0,0,0,14.8,19.8);
	this.instance_12.alpha = 0.051;

	this.instance_13 = new lib.Path_13();
	this.instance_13.setTransform(147.5,183,1,1,0,0,0,20.9,36.1);
	this.instance_13.alpha = 0.051;

	this.instance_14 = new lib.Path_14();
	this.instance_14.setTransform(257.6,275.2,1,1,0,0,0,20.3,25.7);
	this.instance_14.alpha = 0.102;

	this.instance_15 = new lib.Path_15();
	this.instance_15.setTransform(255.3,248.4,1,1,0,0,0,39.7,52.6);
	this.instance_15.alpha = 0.102;

	this.instance_16 = new lib.Path_16();
	this.instance_16.setTransform(253.2,242.7,1,1,0,0,0,39.3,58.1);
	this.instance_16.alpha = 0.102;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808080").s().p("ALjLtQAAgGABgGIAGgWIAPgpIiDkBQhCiBhEiBIiLj9QhiizgnhNQgphPgVg0QgSgtgEgZQgIgnAEghQAFgmAVgeQAVgeAhgRQAggRAlgGQAPgCAWAAIAkAAQB5AECnAeQAzAKBbAUICNAjIAAABIAAAAIAAABIAAAAIiNgkQhhgVgtgIQikgeh8gEIgkAAQgcABgIABQglAGggARQghARgUAdQgUAdgFAmQgEAgAHAoQAFAaARArQAWA0AoBPQAfA8BrDDICLD9QBICGA/B8ICEECIAAACIgPAqIgGAVQgBAIgFAOIAAAEgAEoLIIgHgTIgIgTIgGgUQgYhJgdhSQgbhLgghPQg+ibhGiRQhFiRhUiPQgqhGgthFIgKgSQgEgIgHgJQgNgPgRgMQglgagoAFQglAEgjAfQgcAagXAlQgjA1gqBcQgxBthIDCIgZBEIgFAJQgHAJgMgCQgFgBgEgDIgJgFQgPgIgWgJQgpgOgogCQgtgBgjALIgBAAIABAAIAAgBQAkgLAsABQApACAoAOQAWAIAPAJIAJAFQAFADAEABQAMABAGgIQADgCACgHIAZhDQBKjIAuhoQAphaAjg4QAagnAbgYQAjgfAmgFQApgFAlAaQASANANAPQAHAJAFAJIAKARQA3BUAgA4QBVCPBFCQQBJCYA7CVQAgBOAbBLQATA0AjBoIAGATIAFAUIAIAcIgDgIgAucCGIAAAAIAAAAIAAAAgAucCGIAAAAg");
	this.shape_2.setTransform(216.4,202.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("AjJA3QANAtBEAQQBEAPBRgXQBUgXAzgwQAygugMgtQgMgthEgPQhEgQhSAXQhUAYgyAwQgzAuAMAsg");
	this.shape_3.setTransform(136.1,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#966A91").p("AikAtQAKAkA3AMQA4AMBDgTQBFgTApgnQApgkgKgkQgJgkg4gMQg4gMhCASQhFATgpAnQgqAlAKAkg");
	this.shape_4.setTransform(135.7,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").p("AqU2dIABAEQBZDQBbC0QC2FnBuBUQB0BZHwA8QFOApDWAFQhIA4gYBKQgMAlACAaQjvhAi7gXQh1gPhPADQhGADgxApQhFA7AXBxQAPBJCREIQD5HJBDCFICWElQgTAygEAXQgGAlAHBBQgvALg2AWQhqAtgeA6IhDgRIhEABQiOoijmnHQhHiLhOh9Qg+hhgEgJQgVgug4gPQhNgXhFBWQg7BMhSDKQgsBtg7ClQgEAJgJADQgJADgJgGQg2gihEgEQgygDgkAN");
	this.shape_5.setTransform(222.1,158);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").p("AiSOpIACgDQCbjdBJh/QCAjgADjCQADi4jZnfQhqjvhtjK");
	this.shape_6.setTransform(138.5,122.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").p("ADJgpQgSgohBgMQhCgNhOAWQhTAXgzAwQgzAuANAtQADAMAHAJ");
	this.shape_7.setTransform(135.9,18.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#7A7A7A").p("AjFAuQAZAhA+AJQA/AJBGgUQBUgXAygwQAzgugNgtIgDgJ");
	this.shape_8.setTransform(136.8,24.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2A0B7").s().p("AhjBdQg3gMgKgkQgKgkAqglQApgnBFgTQBCgSA4AMQA4AMAJAkQAKAkgpAkQgpAnhFATQgpAMglAAQgXAAgWgFg");
	this.shape_9.setTransform(135.7,21.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2A0B7").s().p("AhnB3Qg+gJgZgiQgHgIgEgNQgMgsAzguQAygwBUgYQBNgVBCAMQBCANASAoIADAJQAMAtgyAuQgzAwhUAXQgvANguAAQgUAAgTgCgAgahSQhFATgpAnQgqAlAKAkQAKAkA3AMQA4AMBDgTQBFgTApgnQApglgKgkQgJgkg4gMQgWgFgYAAQglAAgnAMg");
	this.shape_10.setTransform(136.1,21);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2A0B7").s().p("AGjWJIhEABQiOoijmnHQhHiMhOh9Qg+hggEgJQgVgug4gPQhNgXhFBWQg7BMhSDKQgsBtg7CkQgEAKgJADQgJACgJgFQg2gjhEgDQgygDgkANIABgCQCdjeBJh/QCAjgADi/QADi7jZneQhsjwhtjKIAAAAQAZAhA+AJQA+AJBIgUQBUgXAzgwQAygwgMgtIgDgJIAAAAQBZDQBbC0QC2FmBuBUQB0BaHwA8QFOApDWAFQhIA3gYBKQgMAmACAaQjvhBi7gWQh1gPhPADQhGADgxApQhFA6AXByQAPBJCREIQD5HJBDCEICWEmQgTAygEAXQgGAlAHBBQgvALg2AWQhqAtgeA6g");
	this.shape_11.setTransform(218.2,158);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,490,478);


(lib.person = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.659],-57,0,57,0).s().p("EgI4Ak4MAAAhJvIRxAAMAAABJvg");
	this.shape.setTransform(365.1,236);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.659],0,-56.9,0,57.1).s().p("EggKAI6IAAxzMBAWAAAIAARzg");
	this.shape_1.setTransform(206,430);

	this.instance = new lib.Path_2_1();
	this.instance.setTransform(299.5,435.3,1,1,0,0,0,98.7,43.8);
	this.instance.alpha = 0.051;

	this.instance_1 = new lib.Path_3_1();
	this.instance_1.setTransform(230.7,217.9,1,1,0,0,0,39.4,22.2);
	this.instance_1.alpha = 0.051;

	this.instance_2 = new lib.Path_4_1();
	this.instance_2.setTransform(148.4,290.4,1,1,0,0,0,34.9,50.2);
	this.instance_2.alpha = 0.051;

	this.instance_3 = new lib.Path_19();
	this.instance_3.setTransform(151.7,406.3,1,1,0,0,0,19,73.9);
	this.instance_3.alpha = 0.051;

	this.instance_4 = new lib.Path_1_2();
	this.instance_4.setTransform(439.9,396.9,1,1,0,0,0,21.2,82.8);
	this.instance_4.alpha = 0.051;

	this.instance_5 = new lib.Path_2_3();
	this.instance_5.setTransform(294.4,114.3,1,1,0,0,0,15.8,22.4);
	this.instance_5.alpha = 0.051;

	this.instance_6 = new lib.Path_3_3();
	this.instance_6.setTransform(402,334,1,1,0,0,0,18.9,35.6);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.Path_4_3();
	this.instance_7.setTransform(191.5,342.8,1,1,0,0,0,22.5,35.6);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.Path_5_2();
	this.instance_8.setTransform(449.9,281.6,1,1,0,0,0,25.6,47.6);
	this.instance_8.alpha = 0.031;

	this.instance_9 = new lib.Path_6_2();
	this.instance_9.setTransform(276.8,85.7,1,1,0,0,0,68.9,63.3);
	this.instance_9.alpha = 0.051;

	this.instance_10 = new lib.Path_7_2();
	this.instance_10.setTransform(354.2,182.8,1,1,0,0,0,49.6,56.4);
	this.instance_10.alpha = 0.051;

	this.instance_11 = new lib.Path_18();
	this.instance_11.setTransform(291.6,336.2,1,1,0,0,0,17.8,40.9);
	this.instance_11.alpha = 0.051;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#595959").ss(1,0,0,4).p("EgWxAkFQAejMAKgoQABgBBXmMQBRlzAGgMQAHgOBBDTQA/DMAUBeQA7EQADANQArDOAAAmIf2AAQBpr8AFhVQADguAkh3QAhhvgCgOIBiFUQBkFhAMBIQANBJACCOIAACfIILAAQgDgGgDgwQgGh7AJlbQAKlbhXlkQgbhvghhjIgchNQATmjhjj0QgghPgug8Qgrg0gJgOQgXgkhmg0QhbgvgTAAQgJAAgsghIgpghQhWgTgUAAQgYAAlSh6Qlgh/gkgkQgjgjgSixQgMh1AAhgQAAgRATg2QAbhKAQgyQBEjJAUiuQAYjFhmi6QhJiFiCh1QhdhTj/gQQjUgNh/AeQhBAQiNBIQiRBKgsArQglAmgKBSQgFAqACAhQgJANgTClQgJBSgIBQIAPASQANAWgDAPQgFAZigC+IgGANQgEARAGAVQAJAeAuAbQAYAPAjARQANAKgBArQgBAjgGARQgDAKAqAQQAVAJAWAGQgLALgKANQgVAaAAAJQAAAGAaAcQAYAagFAKQggBGAFApQAEAgAhAlQAWAZBzgCQCCgBAhANQAzAVgCA2QgCAtggAtQgVAfk1CEQk2B/gKAFQgeAPgeAAQgMAAhJArIhGAqQgmAEhFAwQg/AqgtAxQgkAohIC+Qg8CdgWBTQgMAvAMCaQAHBNAIBDQg+Bbg6KrQgcFWgRFDg");
	this.shape_2.setTransform(296,251.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6DBC6").s().p("EAW3AkFIAAifQgCiOgNhJQgMhIhklhIhilUQACAOghBvQgkB3gDAuQgFBVhpL8I/2AAQAAgmgrjOIg+kdQgUheg/jMQhBjTgHAOQgGAMhRFzIhYGNQgKAogeDMIoSAAQARlDAclWQA6qrA+hbQgIhDgHhNQgMiaAMgvQAWhTA8idQBIi+AkgoQAtgxA/gqQBFgwAmgEIBGgqQBJgrAMAAQAeAAAegPQAKgFE2h/QE1iEAVgfQAggtACgtQACg2gzgVQghgNiCABQhzACgWgZQghglgEggQgFgpAghGQAFgKgYgaQgagcAAgGQAAgJAVgaQAKgNALgLQgWgGgVgJQgqgQADgKQAGgRABgjQABgrgNgKQgjgRgYgPQgugbgJgeQgGgVAEgRIAGgNQCgi+AFgZQADgPgNgWIgPgSQAIhQAJhSQATilAJgNQgCghAFgqQAKhSAlgmQAsgrCRhKQCNhIBBgQQB/geDUANQD/AQBdBTQCCB1BJCFQBmC6gYDFQgUCuhEDJQgQAygbBKQgTA2AAARQAABgAMB1QASCxAjAjQAkAkFgB/QFSB6AYAAQAUAABWATIApAhQAsAhAJAAQATAABbAvQBmA0AXAkQAJAOArA0QAuA8AgBPQBjD0gTGjIAcBNQAhBjAbBvQBXFkgKFbQgJFbAGB7QACAwAEAGg");
	this.shape_3.setTransform(295.8,251.1);

	this.addChild(this.shape_3,this.shape_2,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,495.5,487);


(lib.lungs = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_17();
	this.instance.setTransform(196.3,136.3,1,1,0,0,0,17.9,41.8);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_1_1();
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

	this.instance_7 = new lib.Path_7_1();
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


(lib.bunch2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAUQhGgmgbgDQAHgfgMgGQC7BDAYACIgTAOQgVAQgIASQgdgTgggUg");
	this.shape.setTransform(62.9,107.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAjQAPgWgNghIgPgfQAaAWBLAaQgkADgYAPQgMAIgGAIQgRAVgCAAQgCAAALgRg");
	this.shape_1.setTransform(88,150.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVgMIADheQAQAbAXAIQAMAEAKgCQgUAMACBBQABAiAEAfQgagGgZATIgVAVQAPgXAGhgg");
	this.shape_2.setTransform(108.6,78.4);

	this.instance = new lib.Path_3_4();
	this.instance.setTransform(70.6,33.7,1,1,0,0,0,14.8,11.8);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_4_4();
	this.instance_1.setTransform(34.1,59.8,1,1,0,0,0,19,21.2);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_5_3();
	this.instance_2.setTransform(113,79.6,1,1,0,0,0,14,17);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_6_3();
	this.instance_3.setTransform(138.6,115.2,1,1,0,0,0,5,9.7);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Path_7_3();
	this.instance_4.setTransform(88.5,147.8,1,1,0,0,0,14.6,11.7);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Path_8_1();
	this.instance_5.setTransform(63.9,107.5,1,1,0,0,0,18.2,13.8);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Path_9_1();
	this.instance_6.setTransform(113.4,151.8,1,1,0,0,0,10.6,9.4);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.Path_10_1();
	this.instance_7.setTransform(115.1,150,1,1,0,0,0,6.4,5.4);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.Path_11_1();
	this.instance_8.setTransform(47.1,49.4,1,1,0,0,0,8.5,4.3);
	this.instance_8.alpha = 0.102;

	this.instance_9 = new lib.Path_12_1();
	this.instance_9.setTransform(83.1,149.7,1,1,0,0,0,7,10.2);
	this.instance_9.alpha = 0.199;

	this.instance_10 = new lib.Path_13_1();
	this.instance_10.setTransform(111.7,154.9,1,1,0,0,0,8.4,6.9);
	this.instance_10.alpha = 0.199;

	this.instance_11 = new lib.Path_14_1();
	this.instance_11.setTransform(126.1,163.6,1,1,0,0,0,15.2,15.6);
	this.instance_11.alpha = 0.102;

	this.instance_12 = new lib.Path_15_1();
	this.instance_12.setTransform(80.8,85.2,1,1,0,0,0,33.6,27.3);
	this.instance_12.alpha = 0.051;

	this.instance_13 = new lib.Path_16_1();
	this.instance_13.setTransform(119.3,96.1,1,1,0,0,0,19.2,44);
	this.instance_13.alpha = 0.102;

	this.instance_14 = new lib.Path_17_1();
	this.instance_14.setTransform(85.9,116.5,1,1,0,0,0,48.8,45);
	this.instance_14.alpha = 0.148;

	this.instance_15 = new lib.Path_19_1();
	this.instance_15.setTransform(79.1,58.3,1,1,0,0,0,14.9,7.9);
	this.instance_15.alpha = 0.102;

	this.instance_16 = new lib.Path_20();
	this.instance_16.setTransform(76.6,59.5,1,1,0,0,0,23.9,14.8);
	this.instance_16.alpha = 0.102;

	this.instance_17 = new lib.Path_21();
	this.instance_17.setTransform(75.4,60.2,1,1,0,0,0,28.6,18.5);
	this.instance_17.alpha = 0.102;

	this.instance_18 = new lib.Path_22();
	this.instance_18.setTransform(70.9,93.7,1,1,0,0,0,30.2,13.7);
	this.instance_18.alpha = 0.102;

	this.instance_19 = new lib.Path_23();
	this.instance_19.setTransform(72.8,89.7,1,1,0,0,0,32.8,17.9);
	this.instance_19.alpha = 0.102;

	this.instance_20 = new lib.Path_24();
	this.instance_20.setTransform(73.2,82.5,1,1,0,0,0,33.2,24.8);
	this.instance_20.alpha = 0.051;

	this.instance_21 = new lib.Path_25();
	this.instance_21.setTransform(73.7,82.3,1,1,0,0,0,33.5,24.7);
	this.instance_21.alpha = 0.051;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B46281").p("AkvCRQA8B/CEAuQCCAvB+g9QB/g8AuiEQAviCg9h+Qg8h+iEgvQiCgvh+A9Qh+A8gvCEQgvCCA9B+g");
	this.shape_3.setTransform(73.9,73.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E3A1B9").s().p("AhvE+QiEgug8h/Qg9h+AviCQAviEB+g8QB+g9CCAvQCEAvA8B+QA9B+gvCCQguCEh/A8QhHAihJAAQg2AAg6gUg");
	this.shape_4.setTransform(73.9,73.5);

	this.instance_22 = new lib.Path_27();
	this.instance_22.setTransform(107.7,101.3,1,1,0,0,0,15,7.9);
	this.instance_22.alpha = 0.102;

	this.instance_23 = new lib.Path_28();
	this.instance_23.setTransform(105.1,102.6,1,1,0,0,0,23.9,14.8);
	this.instance_23.alpha = 0.102;

	this.instance_24 = new lib.Path_29();
	this.instance_24.setTransform(104,103.3,1,1,0,0,0,28.6,18.5);
	this.instance_24.alpha = 0.102;

	this.instance_25 = new lib.Path_30();
	this.instance_25.setTransform(99.4,136.7,1,1,0,0,0,30.2,13.7);
	this.instance_25.alpha = 0.102;

	this.instance_26 = new lib.Path_31();
	this.instance_26.setTransform(101.4,132.8,1,1,0,0,0,32.9,17.9);
	this.instance_26.alpha = 0.102;

	this.instance_27 = new lib.Path_32();
	this.instance_27.setTransform(101.8,125.5,1,1,0,0,0,33.3,24.8);
	this.instance_27.alpha = 0.051;

	this.instance_28 = new lib.Path_33();
	this.instance_28.setTransform(102.2,125.3,1,1,0,0,0,33.5,24.7);
	this.instance_28.alpha = 0.051;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B46281").p("AkvCRQA8B+CEAvQCCAvB+g9QB+g8AviEQAviCg9h+Qg8h+iEgvQiCgvh+A9Qh/A8guCEQgvCCA9B+g");
	this.shape_5.setTransform(102.5,116.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3A1B9").s().p("AhvE+QiEgvg8h+Qg9h+AviCQAuiEB/g8QB+g9CCAvQCEAvA8B+QA9B+gvCCQgvCEh+A8QhHAihJAAQg2AAg6gUg");
	this.shape_6.setTransform(102.5,116.5);

	this.instance_29 = new lib.Path_35();
	this.instance_29.setTransform(154.1,128.5,1,1,0,0,0,15,7.9);
	this.instance_29.alpha = 0.102;

	this.instance_30 = new lib.Path_36();
	this.instance_30.setTransform(151.5,129.8,1,1,0,0,0,23.9,14.8);
	this.instance_30.alpha = 0.102;

	this.instance_31 = new lib.Path_37();
	this.instance_31.setTransform(150.3,130.5,1,1,0,0,0,28.6,18.5);
	this.instance_31.alpha = 0.102;

	this.instance_32 = new lib.Path_38();
	this.instance_32.setTransform(145.8,163.9,1,1,0,0,0,30.2,13.7);
	this.instance_32.alpha = 0.102;

	this.instance_33 = new lib.Path_39();
	this.instance_33.setTransform(147.8,160,1,1,0,0,0,32.9,17.9);
	this.instance_33.alpha = 0.102;

	this.instance_34 = new lib.Path_40();
	this.instance_34.setTransform(148.2,152.7,1,1,0,0,0,33.3,24.8);
	this.instance_34.alpha = 0.051;

	this.instance_35 = new lib.Path_41();
	this.instance_35.setTransform(148.6,152.5,1,1,0,0,0,33.5,24.7);
	this.instance_35.alpha = 0.051;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#67364B").p("AkvCRQA8B+CEAvQCCAvB+g9QB+g8AviEQAuiCg8h+Qg8h/iEguQiCgvh+A9Qh/A8guCEQgvCCA9B+g");
	this.shape_7.setTransform(148.9,143.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E3A1B9").s().p("AhvE+QiEgvg8h+Qg9h+AviCQAuiEB/g8QB+g9CCAvQCEAuA8B/QA8B+guCCQgvCEh+A8QhHAihJAAQg2AAg6gUg");
	this.shape_8.setTransform(148.9,143.7);

	this.instance_36 = new lib.Path_43();
	this.instance_36.setTransform(114.7,160.7,1,1,0,0,0,14.9,7.9);
	this.instance_36.alpha = 0.102;

	this.instance_37 = new lib.Path_44();
	this.instance_37.setTransform(112.1,161.9,1,1,0,0,0,23.9,14.8);
	this.instance_37.alpha = 0.102;

	this.instance_38 = new lib.Path_45();
	this.instance_38.setTransform(111,162.6,1,1,0,0,0,28.6,18.5);
	this.instance_38.alpha = 0.102;

	this.instance_39 = new lib.Path_46();
	this.instance_39.setTransform(106.5,196.1,1,1,0,0,0,30.2,13.7);
	this.instance_39.alpha = 0.102;

	this.instance_40 = new lib.Path_47();
	this.instance_40.setTransform(108.4,192,1,1,0,0,0,32.9,17.8);
	this.instance_40.alpha = 0.102;

	this.instance_41 = new lib.Path_48();
	this.instance_41.setTransform(108.8,184.8,1,1,0,0,0,33.3,24.8);
	this.instance_41.alpha = 0.051;

	this.instance_42 = new lib.Path_49();
	this.instance_42.setTransform(109.3,184.7,1,1,0,0,0,33.5,24.8);
	this.instance_42.alpha = 0.051;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#552A3D").p("AkvCRQA8B+CEAvQCCAuB+g8QB/g8AuiEQAviCg9h+Qg8h/iEguQiCgvh+A9Qh+A8gvCEQgvCCA9B+g");
	this.shape_9.setTransform(109.5,175.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E3A1B9").s().p("AhvE+QiEgvg8h+Qg9h+AviCQAviEB+g8QB+g9CCAvQCEAuA8B/QA9B+gvCCQguCEh/A8QhHAihJAAQg2AAg6gUg");
	this.shape_10.setTransform(109.5,175.9);

	this.instance_43 = new lib.Path_51();
	this.instance_43.setTransform(65.7,121.8,1,1,0,0,0,15.2,8);
	this.instance_43.alpha = 0.102;

	this.instance_44 = new lib.Path_52();
	this.instance_44.setTransform(63.1,123.1,1,1,0,0,0,24.3,15.1);
	this.instance_44.alpha = 0.102;

	this.instance_45 = new lib.Path_53();
	this.instance_45.setTransform(61.9,123.9,1,1,0,0,0,29.1,18.9);
	this.instance_45.alpha = 0.102;

	this.instance_46 = new lib.Path_54();
	this.instance_46.setTransform(57.4,157.8,1,1,0,0,0,30.8,13.9);
	this.instance_46.alpha = 0.102;

	this.instance_47 = new lib.Path_55();
	this.instance_47.setTransform(59.2,153.8,1,1,0,0,0,33.4,18.2);
	this.instance_47.alpha = 0.102;

	this.instance_48 = new lib.Path_56();
	this.instance_48.setTransform(59.7,146.4,1,1,0,0,0,33.9,25.2);
	this.instance_48.alpha = 0.051;

	this.instance_49 = new lib.Path_57();
	this.instance_49.setTransform(60.1,146.3,1,1,0,0,0,34,25.2);
	this.instance_49.alpha = 0.051;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#552A3D").p("Ak1CUQA+CBCGAvQCEAvCBg9QCAg9AwiHQAviEg9iAQg+iBiGgvQiEgwiBA9QiAA+gwCGQgvCFA9CAg");
	this.shape_11.setTransform(60.4,137.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E3A1B9").s().p("AhxFDQiGgug+iBQg9iAAviFQAwiGCAg+QCBg9CEAvQCGAwA+CBQA9CAgvCEQgwCGiAA+QhJAihKAAQg4AAg6gVg");
	this.shape_12.setTransform(60.4,137.3);

	this.instance_50 = new lib.Path_59();
	this.instance_50.setTransform(41.4,70.6,1,1,0,0,0,15.5,8.2);
	this.instance_50.alpha = 0.102;

	this.instance_51 = new lib.Path_60();
	this.instance_51.setTransform(38.8,71.8,1,1,0,0,0,24.8,15.3);
	this.instance_51.alpha = 0.102;

	this.instance_52 = new lib.Path_61();
	this.instance_52.setTransform(37.6,72.6,1,1,0,0,0,29.7,19.2);
	this.instance_52.alpha = 0.102;

	this.instance_53 = new lib.Path_62();
	this.instance_53.setTransform(32.9,107.2,1,1,0,0,0,31.3,14.2);
	this.instance_53.alpha = 0.102;

	this.instance_54 = new lib.Path_63();
	this.instance_54.setTransform(34.8,103,1,1,0,0,0,34,18.4);
	this.instance_54.alpha = 0.102;

	this.instance_55 = new lib.Path_64();
	this.instance_55.setTransform(35.3,95.6,1,1,0,0,0,34.5,25.7);
	this.instance_55.alpha = 0.051;

	this.instance_56 = new lib.Path_65();
	this.instance_56.setTransform(35.8,95.4,1,1,0,0,0,34.7,25.6);
	this.instance_56.alpha = 0.051;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#67354A").p("Ak6CWQA+CDCJAwQCHAxCCg/QCDg+AxiJQAwiHg/iCQg+iDiJgwQiHgxiCA/QiDA+gwCJQgwCHA+CCg");
	this.shape_13.setTransform(36.1,86.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E3A1B9").s().p("AhzFJQiJgwg+iDQg+iCAviHQAwiJCDg+QCEg/CGAxQCIAwA/CDQA+CCgvCHQgxCJiDA+QhJAjhMAAQg4AAg8gVg");
	this.shape_14.setTransform(36.1,86.3);

	this.instance_57 = new lib.Path_67();
	this.instance_57.setTransform(110.7,20.1,1,1,0,0,0,15.5,8.2);
	this.instance_57.alpha = 0.102;

	this.instance_58 = new lib.Path_68();
	this.instance_58.setTransform(108,21.4,1,1,0,0,0,24.8,15.3);
	this.instance_58.alpha = 0.102;

	this.instance_59 = new lib.Path_69();
	this.instance_59.setTransform(106.9,22.1,1,1,0,0,0,29.7,19.2);
	this.instance_59.alpha = 0.102;

	this.instance_60 = new lib.Path_70();
	this.instance_60.setTransform(102.1,56.8,1,1,0,0,0,31.3,14.2);
	this.instance_60.alpha = 0.102;

	this.instance_61 = new lib.Path_71();
	this.instance_61.setTransform(104.1,52.5,1,1,0,0,0,34,18.4);
	this.instance_61.alpha = 0.102;

	this.instance_62 = new lib.Path_72();
	this.instance_62.setTransform(104.6,45.1,1,1,0,0,0,34.5,25.7);
	this.instance_62.alpha = 0.051;

	this.instance_63 = new lib.Path_73();
	this.instance_63.setTransform(105,45,1,1,0,0,0,34.7,25.6);
	this.instance_63.alpha = 0.051;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B46281").p("Ak6CWQA/CDCIAxQCHAwCDg/QCCg+AxiJQAwiHg/iCQg+iDiJgxQiHgwiCA/QiDA+gxCJQgvCHA+CCg");
	this.shape_15.setTransform(105.3,35.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3A1B9").s().p("AhzFKQiJgxg+iDQg/iCAxiHQAwiJCDg+QCCg/CHAxQCIAwA/CCQA/CEgxCGQgwCIiDA/QhKAjhLAAQg5AAg7gUg");
	this.shape_16.setTransform(105.3,35.9);

	this.instance_64 = new lib.Path_75();
	this.instance_64.setTransform(63.4,27.3,1,1,0,0,0,13.8,7.3);
	this.instance_64.alpha = 0.102;

	this.instance_65 = new lib.Path_76();
	this.instance_65.setTransform(61.1,28.5,1,1,0,0,0,22.2,13.7);
	this.instance_65.alpha = 0.102;

	this.instance_66 = new lib.Path_77();
	this.instance_66.setTransform(60,29.2,1,1,0,0,0,26.6,17.2);
	this.instance_66.alpha = 0.102;

	this.instance_67 = new lib.Path_78();
	this.instance_67.setTransform(55.8,60.2,1,1,0,0,0,28.1,12.7);
	this.instance_67.alpha = 0.102;

	this.instance_68 = new lib.Path_79();
	this.instance_68.setTransform(57.6,56.5,1,1,0,0,0,30.5,16.6);
	this.instance_68.alpha = 0.102;

	this.instance_69 = new lib.Path_80();
	this.instance_69.setTransform(58,49.8,1,1,0,0,0,30.9,23);
	this.instance_69.alpha = 0.051;

	this.instance_70 = new lib.Path_81();
	this.instance_70.setTransform(58.4,49.6,1,1,0,0,0,31.1,22.9);
	this.instance_70.alpha = 0.051;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#B46281").p("AkZCHQA4B1B6ArQB5AsB1g4QB1g4Arh7QAsh5g4h1Qg4h1h7grQh4gsh2A4Qh1A5grB6QgrB4A4B2g");
	this.shape_17.setTransform(58.6,41.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3A1B9").s().p("AhnEnQh6grg4h1Qg4h2Arh4QArh6B1g5QB2g4B4AsQB7ArA4B1QA4B1gsB5QgrB7h1A4QhCAfhEAAQgyAAg2gTg");
	this.shape_18.setTransform(58.6,41.5);

	this.instance_71 = new lib.Path_83();
	this.instance_71.setTransform(135.2,73,1,1,0,0,0,13.8,7.3);
	this.instance_71.alpha = 0.102;

	this.instance_72 = new lib.Path_84();
	this.instance_72.setTransform(132.9,74.2,1,1,0,0,0,22.2,13.8);
	this.instance_72.alpha = 0.102;

	this.instance_73 = new lib.Path_85();
	this.instance_73.setTransform(131.9,74.9,1,1,0,0,0,26.6,17.2);
	this.instance_73.alpha = 0.102;

	this.instance_74 = new lib.Path_86();
	this.instance_74.setTransform(127.7,105.9,1,1,0,0,0,28.1,12.7);
	this.instance_74.alpha = 0.102;

	this.instance_75 = new lib.Path_87();
	this.instance_75.setTransform(129.4,102.2,1,1,0,0,0,30.5,16.6);
	this.instance_75.alpha = 0.102;

	this.instance_76 = new lib.Path_88();
	this.instance_76.setTransform(129.8,95.4,1,1,0,0,0,30.9,22.9);
	this.instance_76.alpha = 0.051;

	this.instance_77 = new lib.Path_89();
	this.instance_77.setTransform(130.2,95.3,1,1,0,0,0,31.1,22.9);
	this.instance_77.alpha = 0.051;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#67364B").p("AkaCHQA5B1B6AsQB5AqB1g3QB1g5Arh6QAsh5g4h1Qg5h1h6gsQh4gqh2A3Qh1A5grB6QgsB5A4B1g");
	this.shape_19.setTransform(130.5,87.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3A1B9").s().p("AhnEnQh6grg5h1Qg4h2Ash4QArh7B1g3QB2g4B4AqQB6AsA5B1QA4B1gsB5QgrB6h1A5QhCAfhEAAQgzAAg1gTg");
	this.shape_20.setTransform(130.5,87.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3).p("AqQE0QgDBUAkBNQA+CACGAvQCGAwCBg+IAPgGQgOA4AFA6QAGA7AaA2QA8B/CCAuQCEAvB+g9QBXgpAzhRQAyhOADhdQBjAWBngyQB/g8AuiEQAviEg8h+QgohShKgzQhJgyhXgIQBJhDAUhkQAUhmgtheQgkhLhDgvQhCgthQgJQA2hMAJhdQAIhggphXQg/iDiIgwQiJgwiBA+QhUApg0BLIAAgCQhFgvhSgIQhWgHhOAlQhtA0guBwQgtBvAoBxIgBAAQgpAJgnASQiDA/gwCJQgwCIA+CDQAlBMBGA0QBDAyBUAOQgnBHgDBSg");
	this.shape_21.setTransform(91.8,105.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(7).p("AposYQgUAsgGAYQgRBEAJBVQACANgVANQgLAHgXAMQioBlgkCtQgRBXAPBCQAdBhBMBDQA6A2BTAhQAjAPgUAxQgbBBATBgQAVBwBLBTQBLBTBuAPQA8AIBQgNQALgCAggLQALgDAHAEQAMAGgFAUQgHAgAMA6QAOBCAhA6QBcCeCvADQCrAEBsh0QBWhbAGhlQABgMAHgGQAGgGAIABQAYAFAxgJQA+gLA2gaQCdhNAVimQAnkqkhhgQgLgEgHgKQgIgNAIgKQAlgtAShEQAZhagchUQgbhSg8g7Qg5g3hJgVQgNgEgHgNQgIgOAGgLQAvhggIhwQgNiliXhYQi1hqinBXQg1AbguArIgjAmQgWgUgqgQIgngMQiZgchuBNQhCAtgiBEg");
	this.shape_22.setTransform(91.8,105.5);

	this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.shape_18,this.shape_17,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.shape_16,this.shape_15,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.shape_14,this.shape_13,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.shape_12,this.shape_11,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.shape_10,this.shape_9,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.shape_8,this.shape_7,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.shape_6,this.shape_5,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.shape_4,this.shape_3,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-15.1,201.7,242.7);


(lib.bunch = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBQQgDgcgHggQgNg8gMgTQAWgNgCgJIAdBNQAfBNAIAJQgfgLgWAJg");
	this.shape.setTransform(48.6,61.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBARIgTgDIgRAAQgMgBAVgDQAVgDANgYIAKgaQABAcAZA7QgVgUgWgHg");
	this.shape_1.setTransform(33.9,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgzAmIgYgCQAVgDA9guIA7gxQgIAYAIATQAFAKAFAFQgRgFgnAiQgUATgPASQgLgSgZgGg");
	this.shape_2.setTransform(88.7,74.4);

	this.instance = new lib.Path_3_5();
	this.instance.setTransform(93.2,32.8,1,1,0,0,0,11.7,9.4);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_4_5();
	this.instance_1.setTransform(57.9,20.9,1,1,0,0,0,21.1,13.8);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_5_4();
	this.instance_2.setTransform(90.9,77.9,1,1,0,0,0,17.2,13.5);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_6_4();
	this.instance_3.setTransform(82.1,110,1,1,0,0,0,6.6,5.5);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Path_7_4();
	this.instance_4.setTransform(34.5,97.6,1,1,0,0,0,8.3,12.9);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Path_8_2();
	this.instance_5.setTransform(49.4,59.9,1,1,0,0,0,8.8,14.7);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Path_9_2();
	this.instance_6.setTransform(51,117.3,1,1,0,0,0,8.3,7);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.Path_10_2();
	this.instance_7.setTransform(50.9,117.4,1,1,0,0,0,5,3.9);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.Path_11_2();
	this.instance_8.setTransform(74.2,22.5,1,1,0,0,0,6.8,3.1);
	this.instance_8.alpha = 0.102;

	this.instance_9 = new lib.Path_12_2();
	this.instance_9.setTransform(30.9,95.2,1,1,0,0,0,6.2,6);
	this.instance_9.alpha = 0.199;

	this.instance_10 = new lib.Path_13_2();
	this.instance_10.setTransform(45.5,118.6,1,1,0,0,0,5,8.1);
	this.instance_10.alpha = 0.199;

	this.instance_11 = new lib.Path_14_2();
	this.instance_11.setTransform(43.3,131.9,1,1,0,0,0,7.2,15.6);
	this.instance_11.alpha = 0.102;

	this.instance_12 = new lib.Path_15_2();
	this.instance_12.setTransform(72,66.1,1,1,0,0,0,29.9,19.4);
	this.instance_12.alpha = 0.051;

	this.instance_13 = new lib.Path_16_2();
	this.instance_13.setTransform(82.1,88.6,1,1,0,0,0,20.4,32.4);
	this.instance_13.alpha = 0.102;

	this.instance_14 = new lib.Path_17_2();
	this.instance_14.setTransform(50.7,79.2,1,1,0,0,0,21.5,48.8);
	this.instance_14.alpha = 0.148;

	this.instance_15 = new lib.Path_19_2();
	this.instance_15.setTransform(85.9,47.5,1,1,0,0,0,5.9,12.2);
	this.instance_15.alpha = 0.102;

	this.instance_16 = new lib.Path_20_1();
	this.instance_16.setTransform(84.5,48.4,1,1,0,0,0,11.1,19.3);
	this.instance_16.alpha = 0.102;

	this.instance_17 = new lib.Path_21_1();
	this.instance_17.setTransform(83.3,49.8,1,1,0,0,0,14.9,22.9);
	this.instance_17.alpha = 0.102;

	this.instance_18 = new lib.Path_22_1();
	this.instance_18.setTransform(60.9,57.2,1,1,0,0,0,14.7,21.9);
	this.instance_18.alpha = 0.102;

	this.instance_19 = new lib.Path_23_1();
	this.instance_19.setTransform(64.6,54.8,1,1,0,0,0,18.4,24.3);
	this.instance_19.alpha = 0.102;

	this.instance_20 = new lib.Path_24_1();
	this.instance_20.setTransform(66.2,52.2,1,1,0,0,0,19.9,26.7);
	this.instance_20.alpha = 0.051;

	this.instance_21 = new lib.Path_25_1();
	this.instance_21.setTransform(67.1,52.4,1,1,0,0,0,20.2,26.9);
	this.instance_21.alpha = 0.051;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B46281").p("Aj5hpQgsBoAqBmQAqBpBoAsQBoArBmgqQBogpAshoQAshogqhmQgqhphngsQhogshmArQhpApgsBog");
	this.shape_3.setTransform(73.5,51.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E3A1B9").s().p("AhoD6QhogtgqhnQgrhnAthoQArhoBpgqQBngqBnAsQBnAtArBoQAqBmgtBoQgrBohoApQg0AVgyAAQg0AAg0gWg");
	this.shape_4.setTransform(73.5,51.9);

	this.instance_22 = new lib.Path_27_1();
	this.instance_22.setTransform(75.1,87.6,1,1,0,0,0,5.9,12.2);
	this.instance_22.alpha = 0.102;

	this.instance_23 = new lib.Path_28_1();
	this.instance_23.setTransform(73.7,88.6,1,1,0,0,0,11.1,19.3);
	this.instance_23.alpha = 0.102;

	this.instance_24 = new lib.Path_29_1();
	this.instance_24.setTransform(72.5,89.9,1,1,0,0,0,14.9,22.9);
	this.instance_24.alpha = 0.102;

	this.instance_25 = new lib.Path_30_1();
	this.instance_25.setTransform(50.2,97.3,1,1,0,0,0,14.7,21.9);
	this.instance_25.alpha = 0.102;

	this.instance_26 = new lib.Path_31_1();
	this.instance_26.setTransform(53.9,94.9,1,1,0,0,0,18.4,24.3);
	this.instance_26.alpha = 0.102;

	this.instance_27 = new lib.Path_32_1();
	this.instance_27.setTransform(55.5,92.4,1,1,0,0,0,19.9,26.7);
	this.instance_27.alpha = 0.051;

	this.instance_28 = new lib.Path_33_1();
	this.instance_28.setTransform(56.3,92.5,1,1,0,0,0,20.2,26.9);
	this.instance_28.alpha = 0.051;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B46281").p("Aj5hpQgsBoArBmQAqBpBnAsQBoAsBmgrQBogqAshnQAshogqhmQgqhohngtQhogshmArQhoAqgtBng");
	this.shape_5.setTransform(62.8,92);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3A1B9").s().p("AhpD6QhngsgqhpQgrhmAshoQAthnBogqQBmgrBoAsQBnAtAqBoQAqBmgsBoQgsBnhoAqQgzAVgyAAQg0AAg1gWg");
	this.shape_6.setTransform(62.8,92);

	this.instance_29 = new lib.Path_35_1();
	this.instance_29.setTransform(83.4,130.1,1,1,0,0,0,5.9,12.2);
	this.instance_29.alpha = 0.102;

	this.instance_30 = new lib.Path_36_1();
	this.instance_30.setTransform(82,131,1,1,0,0,0,11.1,19.3);
	this.instance_30.alpha = 0.102;

	this.instance_31 = new lib.Path_37_1();
	this.instance_31.setTransform(80.8,132.4,1,1,0,0,0,14.9,22.9);
	this.instance_31.alpha = 0.102;

	this.instance_32 = new lib.Path_38_1();
	this.instance_32.setTransform(58.5,139.7,1,1,0,0,0,14.8,21.9);
	this.instance_32.alpha = 0.102;

	this.instance_33 = new lib.Path_39_1();
	this.instance_33.setTransform(62.2,137.3,1,1,0,0,0,18.4,24.3);
	this.instance_33.alpha = 0.102;

	this.instance_34 = new lib.Path_40_1();
	this.instance_34.setTransform(63.8,134.8,1,1,0,0,0,19.9,26.7);
	this.instance_34.alpha = 0.051;

	this.instance_35 = new lib.Path_41_1();
	this.instance_35.setTransform(64.6,134.9,1,1,0,0,0,20.2,26.9);
	this.instance_35.alpha = 0.051;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#67364B").p("Aj5hpQgsBoArBmQAqBoBnAtQBoArBmgqQBogpAthoQAshogrhmQgqhphngsQhogshmArQhpApgsBog");
	this.shape_7.setTransform(71,134.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E3A1B9").s().p("AhpD5QhngsgqhnQgrhnAshnQAshoBpgrQBmgqBoAtQBnArAqBpQArBmgsBoQgtBnhoAqQgzAVgyAAQg0AAg1gXg");
	this.shape_8.setTransform(71,134.4);

	this.instance_36 = new lib.Path_43_1();
	this.instance_36.setTransform(43.1,123.5,1,1,0,0,0,5.9,12.2);
	this.instance_36.alpha = 0.102;

	this.instance_37 = new lib.Path_44_1();
	this.instance_37.setTransform(41.7,124.4,1,1,0,0,0,11.1,19.3);
	this.instance_37.alpha = 0.102;

	this.instance_38 = new lib.Path_45_1();
	this.instance_38.setTransform(40.5,125.7,1,1,0,0,0,14.9,22.9);
	this.instance_38.alpha = 0.102;

	this.instance_39 = new lib.Path_46_1();
	this.instance_39.setTransform(18.1,133.1,1,1,0,0,0,14.7,21.9);
	this.instance_39.alpha = 0.102;

	this.instance_40 = new lib.Path_47_1();
	this.instance_40.setTransform(21.9,130.6,1,1,0,0,0,18.4,24.2);
	this.instance_40.alpha = 0.102;

	this.instance_41 = new lib.Path_48_1();
	this.instance_41.setTransform(23.4,128.2,1,1,0,0,0,19.9,26.7);
	this.instance_41.alpha = 0.051;

	this.instance_42 = new lib.Path_49_1();
	this.instance_42.setTransform(24.3,128.3,1,1,0,0,0,20.2,26.9);
	this.instance_42.alpha = 0.051;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#552A3D").p("Aj5hpQgsBnArBnQAqBpBnAsQBoAsBmgrQBogpAshoQAshogqhmQgqhohngtQhogrhmAqQhoApgtBog");
	this.shape_9.setTransform(30.7,127.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E3A1B9").s().p("AhpD6QhngsgqhpQgrhnAshnQAthoBogqQBmgpBoArQBnAtAqBoQAqBmgsBoQgsBohoApQgzAVgyAAQg0AAg1gWg");
	this.shape_10.setTransform(30.7,127.8);

	this.instance_43 = new lib.Path_51_1();
	this.instance_43.setTransform(40.4,73.3,1,1,0,0,0,6,12.5);
	this.instance_43.alpha = 0.102;

	this.instance_44 = new lib.Path_52_1();
	this.instance_44.setTransform(38.9,74.2,1,1,0,0,0,11.2,19.7);
	this.instance_44.alpha = 0.102;

	this.instance_45 = new lib.Path_53_1();
	this.instance_45.setTransform(37.8,75.7,1,1,0,0,0,15.2,23.4);
	this.instance_45.alpha = 0.102;

	this.instance_46 = new lib.Path_54_1();
	this.instance_46.setTransform(15,83.1,1,1,0,0,0,15,22.3);
	this.instance_46.alpha = 0.102;

	this.instance_47 = new lib.Path_55_1();
	this.instance_47.setTransform(18.8,80.6,1,1,0,0,0,18.7,24.7);
	this.instance_47.alpha = 0.102;

	this.instance_48 = new lib.Path_56_1();
	this.instance_48.setTransform(20.5,78,1,1,0,0,0,20.3,27.1);
	this.instance_48.alpha = 0.051;

	this.instance_49 = new lib.Path_57_1();
	this.instance_49.setTransform(21.3,78.2,1,1,0,0,0,20.6,27.4);
	this.instance_49.alpha = 0.051;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#552A3D").p("Aj9hrQgtBqArBoQArBqBpAtQBqAtBogrQBqgrAthpQAthqgrhoQgrhqhpgtQhqgthoArQhqArgtBpg");
	this.shape_11.setTransform(27.8,77.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E3A1B9").s().p("AhrD+QhpgtgrhqQgrhoAthqQAthpBqgrQBogrBqAtQBpAtArBqQArBogtBqQgtBphqArQg0AVgzAAQg1AAg2gXg");
	this.shape_12.setTransform(27.8,77.7);

	this.instance_50 = new lib.Path_59_1();
	this.instance_50.setTransform(58.3,31.4,1,1,0,0,0,6,12.7);
	this.instance_50.alpha = 0.102;

	this.instance_51 = new lib.Path_60_1();
	this.instance_51.setTransform(56.9,32.3,1,1,0,0,0,11.4,20);
	this.instance_51.alpha = 0.102;

	this.instance_52 = new lib.Path_61_1();
	this.instance_52.setTransform(55.8,33.8,1,1,0,0,0,15.5,23.8);
	this.instance_52.alpha = 0.102;

	this.instance_53 = new lib.Path_62_1();
	this.instance_53.setTransform(32.6,41.3,1,1,0,0,0,15.3,22.7);
	this.instance_53.alpha = 0.102;

	this.instance_54 = new lib.Path_63_1();
	this.instance_54.setTransform(36.5,38.8,1,1,0,0,0,19.1,25.2);
	this.instance_54.alpha = 0.102;

	this.instance_55 = new lib.Path_64_1();
	this.instance_55.setTransform(38.2,36.1,1,1,0,0,0,20.7,27.6);
	this.instance_55.alpha = 0.051;

	this.instance_56 = new lib.Path_65_1();
	this.instance_56.setTransform(38.9,36.3,1,1,0,0,0,20.9,27.8);
	this.instance_56.alpha = 0.051;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#67354A").p("AkBhtQguBrAsBrQArBsBrAuQBsAtBqgrQBsgtAthqQAuhsgrhqQgshshrgtQhrguhrAsQhsArgtBrg");
	this.shape_13.setTransform(45.6,35.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E3A1B9").s().p("AhtEDQhrgvgrhrQgshqAuhrQAthsBsgrQBrgsBrAtQBrAuAsBsQArBqguBrQgtBshsAsQg1AVg0AAQg2AAg3gXg");
	this.shape_14.setTransform(45.6,35.8);

	this.instance_57 = new lib.Path_67_1();
	this.instance_57.setTransform(125.7,46.3,1,1,0,0,0,6.1,12.7);
	this.instance_57.alpha = 0.102;

	this.instance_58 = new lib.Path_68_1();
	this.instance_58.setTransform(124.3,47.2,1,1,0,0,0,11.5,20);
	this.instance_58.alpha = 0.102;

	this.instance_59 = new lib.Path_69_1();
	this.instance_59.setTransform(123.1,48.7,1,1,0,0,0,15.5,23.8);
	this.instance_59.alpha = 0.102;

	this.instance_60 = new lib.Path_70_1();
	this.instance_60.setTransform(99.8,56.2,1,1,0,0,0,15.2,22.7);
	this.instance_60.alpha = 0.102;

	this.instance_61 = new lib.Path_71_1();
	this.instance_61.setTransform(103.7,53.8,1,1,0,0,0,19,25.2);
	this.instance_61.alpha = 0.102;

	this.instance_62 = new lib.Path_72_1();
	this.instance_62.setTransform(105.5,51.1,1,1,0,0,0,20.7,27.6);
	this.instance_62.alpha = 0.051;

	this.instance_63 = new lib.Path_73_1();
	this.instance_63.setTransform(106.2,51.2,1,1,0,0,0,20.9,27.8);
	this.instance_63.alpha = 0.051;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B46281").p("AkChtQgtBsAsBqQAsBsBqAtQBrAuBrgsQBsgrAuhrQAthsgshqQgrhshrguQhsgthqArQhsAsguBrg");
	this.shape_15.setTransform(112.9,50.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3A1B9").s().p("AhtECQhqgtgthsQgrhqAuhsQAuhqBsgtQBpgrBsAuQBrAtArBtQAsBqguBrQgtBrhsArQg1AWg0AAQg2AAg3gYg");
	this.shape_16.setTransform(112.9,50.7);

	this.instance_64 = new lib.Path_75_1();
	this.instance_64.setTransform(96.2,21.6,1,1,0,0,0,5.5,11.4);
	this.instance_64.alpha = 0.102;

	this.instance_65 = new lib.Path_76_1();
	this.instance_65.setTransform(94.8,22.4,1,1,0,0,0,10.2,17.9);
	this.instance_65.alpha = 0.102;

	this.instance_66 = new lib.Path_77_1();
	this.instance_66.setTransform(93.7,23.8,1,1,0,0,0,13.8,21.4);
	this.instance_66.alpha = 0.102;

	this.instance_67 = new lib.Path_78_1();
	this.instance_67.setTransform(73,30.6,1,1,0,0,0,13.7,20.4);
	this.instance_67.alpha = 0.102;

	this.instance_68 = new lib.Path_79_1();
	this.instance_68.setTransform(76.4,28.3,1,1,0,0,0,17,22.6);
	this.instance_68.alpha = 0.102;

	this.instance_69 = new lib.Path_80_1();
	this.instance_69.setTransform(77.9,25.9,1,1,0,0,0,18.5,24.8);
	this.instance_69.alpha = 0.051;

	this.instance_70 = new lib.Path_81_1();
	this.instance_70.setTransform(78.7,26,1,1,0,0,0,18.8,24.9);
	this.instance_70.alpha = 0.051;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#B46281").p("AjnhhQgpBgAoBfQAnBhBgApQBgApBfgoQBhgnAphgQAphggohfQgnhhhggpQhggphfAnQhhAngpBhg");
	this.shape_17.setTransform(84.7,25.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3A1B9").s().p("AhhDoQhggpgnhhQgohfAphgQAphhBhgnQBfgnBgApQBgApAnBhQAoBfgpBgQgpBghhAnQgvAUgvAAQgwAAgxgVg");
	this.shape_18.setTransform(84.7,25.6);

	this.instance_71 = new lib.Path_83_1();
	this.instance_71.setTransform(106.9,89.3,1,1,0,0,0,5.5,11.4);
	this.instance_71.alpha = 0.102;

	this.instance_72 = new lib.Path_84_1();
	this.instance_72.setTransform(105.5,90,1,1,0,0,0,10.2,17.9);
	this.instance_72.alpha = 0.102;

	this.instance_73 = new lib.Path_85_1();
	this.instance_73.setTransform(104.4,91.4,1,1,0,0,0,13.8,21.4);
	this.instance_73.alpha = 0.102;

	this.instance_74 = new lib.Path_86_1();
	this.instance_74.setTransform(83.7,98.2,1,1,0,0,0,13.7,20.4);
	this.instance_74.alpha = 0.102;

	this.instance_75 = new lib.Path_87_1();
	this.instance_75.setTransform(87.1,96,1,1,0,0,0,17.1,22.6);
	this.instance_75.alpha = 0.102;

	this.instance_76 = new lib.Path_88_1();
	this.instance_76.setTransform(88.6,93.6,1,1,0,0,0,18.5,24.8);
	this.instance_76.alpha = 0.051;

	this.instance_77 = new lib.Path_89_1();
	this.instance_77.setTransform(89.4,93.6,1,1,0,0,0,18.8,24.9);
	this.instance_77.alpha = 0.051;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#67364B").p("AjnhhQgpBgAnBfQAnBhBhApQBgApBfgoQBhgnAphgQAphggohfQgnhhhggpQhggphfAnQhhAngpBhg");
	this.shape_19.setTransform(95.4,93.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3A1B9").s().p("AhhDoQhhgpgnhhQgnhfAphgQAphhBhgnQBfgnBgApQBgApAnBhQAoBfgpBgQgpBghhAnQgwAUguAAQgwAAgxgVg");
	this.shape_20.setTransform(95.4,93.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3).p("Apaj0Qg0ArgbA/QgtBpArBoQArBrBpAsIAMAGQhWAtgnBaQgsBnArBpQAqBoBnAsQBHAeBNgMQBJgMA6gvQAmBGBWAlQBmAsBogqQBpgqAshnQAchEgJhIQgIhGgqg5QBRAHBHgpQBIgqAghNQAag9gHhCQgIhAglgzQBLgIA9gsQA+guAehIQAuhrgshsQgshshrguQhFgdhKAIIABgBQgGhBgog3Qgpg5hAgcQhZgmhcAfQhZAfguBUIgBAAQgJgEgUgMQgUgLgLgFQhrgthsAsQhsAsguBrQgbBAAFBGQAGBDAkA7QhAAOgzAqg");
	this.shape_21.setTransform(70.6,80.8);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.shape_18,this.shape_17,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.shape_16,this.shape_15,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.shape_14,this.shape_13,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.shape_12,this.shape_11,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.shape_10,this.shape_9,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.shape_8,this.shape_7,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.shape_6,this.shape_5,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.shape_4,this.shape_3,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.8,-2.4,150.8,165.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;