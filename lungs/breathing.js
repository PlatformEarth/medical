(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 496,
	height: 450,
	fps: 50,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.breathing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.89],0,-29.6,0,29.6).s().p("EgnWAEoIAApPMBOtAAAIAAJPg");
	this.shape.setTransform(252,420.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(140));

	// Layer 1
	this.instance = new lib.person();
	this.instance.setTransform(105.4,156.9,0.656,0.656,0,0,0,247.6,243.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140));

	// Layer 4
	this.instance_1 = new lib.arrow();
	this.instance_1.setTransform(402.5,389.7,0.998,0.998,29.8,0,0,4.6,9.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:399.9,y:403.6,alpha:1},29,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:399,y:408.6,alpha:0},30,cjs.Ease.get(1)).to({_off:true},1).wait(19).to({_off:false,regX:4.5,regY:9.4,rotation:-150.2,x:333.8,y:403.5},0).to({regY:9.3,scaleX:1,scaleY:1,x:336.2,y:390.7,alpha:1},30,cjs.Ease.get(-1)).to({regY:9.4,scaleX:1,scaleY:1,x:337,y:386.8,alpha:0},30,cjs.Ease.get(1)).wait(1));

	// diaphram
	this.instance_2 = new lib.diaphram();
	this.instance_2.setTransform(368.9,383.7,0.983,1.412,0,0,0,60,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:364.9,y:392.5},59,cjs.Ease.get(1)).wait(20).to({scaleX:0.98,scaleY:1.41,x:368.9,y:383.7},60,cjs.Ease.get(1)).wait(1));

	// lung
	this.instance_3 = new lib.lung();
	this.instance_3.setTransform(381.7,290.5,0.902,0.874,0,0,0,66.5,79.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:376.2,y:300.9},59,cjs.Ease.get(1)).wait(20).to({scaleX:0.9,scaleY:0.87,x:381.7,y:290.5},60,cjs.Ease.get(1)).wait(1));

	// thorax
	this.instance_4 = new lib.thorax();
	this.instance_4.setTransform(378.2,222,1,1,-4.2,0,0,101,128.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:0,x:382.9,y:214.2},59,cjs.Ease.get(1)).wait(20).to({rotation:-4.2,x:378.2,y:222},60,cjs.Ease.get(1)).wait(1));

	// body
	this.instance_5 = new lib.body();
	this.instance_5.setTransform(367,743.3,0.928,1,0,0,0,111.2,543.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,x:360,y:743.7},59,cjs.Ease.get(1)).wait(20).to({scaleX:0.93,x:367,y:743.3},60,cjs.Ease.get(1)).wait(1));

	// head
	this.instance_6 = new lib.head();
	this.instance_6.setTransform(398.5,264,1,1,-5.7,0,0,119.8,260.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:0,x:397,y:260.7},59,cjs.Ease.get(1)).wait(20).to({rotation:-5.7,x:398.5,y:264},60,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(240.4,224.5,511.6,1289);


// symbols:
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


(lib.Path_4_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AlRFoQgPiRAIgPQADgFBWjsQBSjkANgKQAXgUBRg4QBag/ALAAQASAACehIIA7gIQA8gGAGAHQALAKgtEDQgtEGgcAVQgIAGg6BHQhGBUg5A6QjFDKipAZQgJhFgIhIg");
	this.shape.setTransform(34.9,50.2);

	this.addChild(this.shape);
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


(lib.Path_7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADlGvQAsioABgrQABgohKhuQheiJgJgRQgZgzhniEQhchzgagZQiZiPg9gnQA9AZBHAjQCOBFAyAvQA1A1CFC6QB+CwAaA2IAsBdQAUAtgCANQgDAXgSA0QgWA/gTAQQgQAPgxBqIgyBsQAWhLAWhUg");
	this.shape.setTransform(36.3,59);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.6,118.1);


(lib.Path_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("AE/BqQgqADgygBQgsAJgqAGQhUALgwgPQmgizANgeQATgrAQgRQAIgJAEAAQgTBfCrBQQBZArB/AlQA2AUClgZQBTgMBIgRQgNAwghAyQgMgygSgEg");
	this.shape.setTransform(39.6,16.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.1,32.2);


(lib.Path_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhoGYQh+hLgQgPIgugpQgagZgBgMQgCgQAOgsQAPgvAXgxQAag3BfiIQBliVA0g0QAwgvCLhFQBFgiA7gaQgYAQg8BJIhFBTQgTARhiCTQhmCYgZA1QgZAzgFBGQgCAcACBUQABArBABRQAhAnAeAgIh9hNg");
	this.shape.setTransform(32.1,48.5);

	this.addChild(this.shape);
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


(lib.Path_1_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("AkkFeICSgIIAfgNIEcniIA7iAIAMhJIgCg+IA3BvIgmgNIgtB3Ii8EzIhyDnIA0BOg");
	this.shape_2.setTransform(29.4,41.7);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.8,83.5);


(lib.Path_8 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABLGgQgmgHhBgoQgrgZgbgUQgQgLhAgcIA0ANQA4AOAMAGQASAHA9AMQBCANAGgGQAGgGAOgmQANgkADgOQACgJgLiVIgMihIAAhwQgBhfgHgCQgIgCgSAQQgSAPgDAJQgBAFgzA/Ig4BIIAvhaQAuhbAJgKQAIgJAWg8QAVg4ADAAQAGAAAJAIQAKAIACAIIARBfQARBfACAsQAQFGgBANIgCBTQgBBLgEAKQgLAagSASQgYAYgdAAIgPgBg");
	this.shape_2.setTransform(18,41.8);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.9,83.6);


(lib.Path_9 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#241F20").s().p("AABGWQiJgEgYgHQgTgFADgFIAkgmQAbgdAylsQAZi3AUiyQAHCaBHE1QBGEqAUAAQATAAAHAUQAGAUgTAJQgMAFg9AAIhZgCg");
	this.shape_3.setTransform(17.8,40.8);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.6,81.7);


(lib.Path_7_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241F20").s().p("AlVIjIgcgVIhzr6QgWh4AYhzQAMg6AQghQAgCLBSBLQAVASAjAXQAaARADAHQAHAPAACYQAMCjBABgQAaAmEdBqQCRA2ClA6IAuAWQAHALg7AfQg3AclUAlIlXAjIgGAAQgOAAgagQg");
	this.shape_1.setTransform(49.6,56.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99.2,112.8);


(lib.Path_6_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D2625").s().p("AGnIpQhqhrAXiBQAUhUAEgbQAHgqgVgsQgYgygtgbQgpgYgzAAQgrAAgyA4QgtAygDAfQgCAXgwgjQgwghgIgRQgVgsg9g6Ig5gzIhuhPIl5hoQgEgaACghQADhCAdgkQAcgjCBhJQCWhVBqgUQCEgZC9ANQDPAOBVA0QBTAyBXB7QBPBtAUBIQAVBMAPBtQASB9gLApQgIAchIDoQhEDcgCAKQg6gbg1g1g");
	this.shape_1.setTransform(68.8,63.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.7,126.8);


(lib.Path_5_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D2625").s().p("AgwD+Qgqg3gzhRQgrhEgGgFQgUgUgbj1QgZjyAIgKQAJgJBXATQB4BIAOABQAIAABDA9QA9A2ARATQAJAKA4DWQA6DdADAGQAJAXgmEBQiCgdiQjBg");
	this.shape_1.setTransform(25.6,47.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,51.5,95.3);


(lib.Path_4_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241F20").s().p("AiyFhQgOgFAJgsQAThkADgcQAdjshZkcIgDgLIAJAeQAfBnAjBbQA1CKAoAwQA9BMBgBcQBmBjAWAAQkMAihdAAQgfAAgLgDg");
	this.shape_2.setTransform(22.5,35.7);

	this.addChild(this.shape_2);
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


(lib.Path_1_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D2625").s().p("AAvKOIgLjGQgEguhLkjQhUk4gxh5QgthwAPjTQAHhqAQhUQCQEWCLLHQBGFlApEtIieAHQACgLgIiig");
	this.shape_3.setTransform(21.1,82.8);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.3,165.6);


(lib.Path_10 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3D2625").s().p("Ai9LcQAlkNA/k+QB8p7CCj3QAPBWAGBqQANDTgoBjQgrBog6EGQgyDigFA1QgBAVgZCaQgZCRABAIg");
	this.shape_4.setTransform(19,73.9);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,147.7);


(lib.diaphram = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AJQDHQgPAMgPgJIgMgMQAUhrgbgyQgWglhIghQichGiegeQkbg1jfBeQhSAjg1BZQgaAtgKAmQgSALgVgKQgLgFgHgHQARgtAig2QBEhoBWgnQDhhjExA5QC3AjCcBJQBMAkAcA1QAiBDgVB3g");
	this.shape.setTransform(60,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5B5CE").s().p("AIyDKIgMgMQAUhrgbgyQgWglhIghQichGiegeQkbg1jfBeQhSAjg1BZQgaAtgKAmQgSALgVgKQgLgFgHgHQARgtAig2QBEhoBWgnQDhhjExA5QC3AjCcBJQBMAkAcA1QAiBDgVB3QgJAHgIAAQgHAAgGgEg");
	this.shape_1.setTransform(60,20.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,122.1,43.3);


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


(lib.arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F7E7E").ss(0.3,0,0,4).p("ABHAWIhHjzIhuAiIBjDmIguATICNCbIAcjNg");
	this.shape.setTransform(-25.4,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BAIAtgTIhjjmIBughIBIDyIApgJIgcDNg");
	this.shape_1.setTransform(-25.4,25);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.6,2,24.5,46);


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


(lib.lungs = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_8();
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

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(51.7,51.1,1,1,0,0,0,32,48.5);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(49.7,91,1,1,0,0,0,39.6,16.1);
	this.instance_6.alpha = 0.199;

	this.instance_7 = new lib.Path_7();
	this.instance_7.setTransform(166.3,63.4,1,1,0,0,0,36.3,59);
	this.instance_7.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#010202").p("AFqt1Qg1AOhLAlQiWBLhtB3Qh7CGiLEIQiADygVBtQgUBugNEfQgMEqAUAaQA+BOBKgfQAJgEBog+QBYg0BPgWQAegICHggQBNgTAogUQA+ggASgYQAbgjgOhCQgqjGBhiOQA2hPAXjTQAVi8gQhXQgMhBAAgdQABgRAIgYQAFgOAEg1QAEhAgGg3QgQimhdAGg");
	this.shape.setTransform(47.5,88.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEB4CD").s().p("AnNM+QgUgaAMkqQANkfAUhuQAVhtCAjyQCLkIB7iGQBth3CWhLQBLglA1gOQBdgGAQCmQAGA3gEBAQgEA1gFAOQgIAYgBARQAAAdAMBBQAQBXgVC8QgXDTg2BPQhhCOAqDGQAOBCgbAjQgSAYg+AgQgoAUhNATQiHAggeAIQhPAWhYA0QhoA+gJAEQgVAJgVAAQgyAAgsg4g");
	this.shape_1.setTransform(47.5,88.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#010202").p("Alzt1IAlAMQAuAQAxAXQCaBLBvB3QB/CGCPEIQCDDyAVBtQAWBuAMEfQANEqgVAaQg/BOhNgfQgJgEhqg+Qhag0hSgWQgagHiPghQhPgTgqgUQg/gggTgYQgcgkAPhBQArjGhjiOQg4hPgYjTQgVi8ARhXQAMhBgBgdQAAgRgJgZQgFgOgDg0QgFhAAGg3QARimBfAGg");
	this.shape_2.setTransform(167.4,91.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EEB9CB").s().p("AFONtQgJgEhqg+Qhag0hSgWQgagHiPghQhPgTgqgUQg/gggTgYQgcgkAPhBQArjGhjiOQg4hPgYjTQgVi8ARhXQAMhBgBgdQAAgRgJgZQgFgOgDg0QgFhAAGg3QARimBfAGIAlAMQAuAQAxAXQCaBLBvB3QB/CGCPEIQCDDyAVBtQAWBuAMEfQANEqgVAaQgtA4g0AAQgVAAgWgJg");
	this.shape_3.setTransform(167.4,91.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,219.4,181.9);


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


(lib.person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.961],198.8,0,-198.7,0).s().p("EgfCAk3MAAAhJtMA+FAAAMAAABJtg");
	this.shape.setTransform(197.4,256.1,0.497,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.659],0,-56.9,0,57.1).s().p("EggKAI6IAAxzMBAWAAAIAARzg");
	this.shape_1.setTransform(298.9,438.3,1.085,0.942);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(140));

	// Layer 2
	this.instance = new lib.lungs();
	this.instance.setTransform(299.3,230.2,0.834,0.75,0,0,0,109.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:0.99,y:225.6},59,cjs.Ease.get(1)).wait(21).to({scaleX:0.83,scaleY:0.75,y:230.2},59,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.Path_2_1();
	this.instance_1.setTransform(299.5,435.3,1,1,0,0,0,98.7,43.8);
	this.instance_1.alpha = 0.051;

	this.instance_2 = new lib.Path_3_1();
	this.instance_2.setTransform(230.7,217.9,1,1,0,0,0,39.4,22.2);
	this.instance_2.alpha = 0.051;

	this.instance_3 = new lib.Path_4_1();
	this.instance_3.setTransform(148.4,290.4,1,1,0,0,0,34.9,50.2);
	this.instance_3.alpha = 0.051;

	this.instance_4 = new lib.Path_10();
	this.instance_4.setTransform(151.7,406.3,1,1,0,0,0,19,73.9);
	this.instance_4.alpha = 0.051;

	this.instance_5 = new lib.Path_1_3();
	this.instance_5.setTransform(439.9,396.9,1,1,0,0,0,21.2,82.8);
	this.instance_5.alpha = 0.051;

	this.instance_6 = new lib.Path_2_3();
	this.instance_6.setTransform(294.4,114.3,1,1,0,0,0,15.8,22.4);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.Path_3_3();
	this.instance_7.setTransform(402,334,1,1,0,0,0,18.9,35.6);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.Path_4_3();
	this.instance_8.setTransform(191.5,342.8,1,1,0,0,0,22.5,35.6);
	this.instance_8.alpha = 0.051;

	this.instance_9 = new lib.Path_5_1();
	this.instance_9.setTransform(449.9,281.6,1,1,0,0,0,25.6,47.6);
	this.instance_9.alpha = 0.031;

	this.instance_10 = new lib.Path_6_1();
	this.instance_10.setTransform(276.8,85.7,1,1,0,0,0,68.9,63.3);
	this.instance_10.alpha = 0.051;

	this.instance_11 = new lib.Path_7_1();
	this.instance_11.setTransform(354.2,182.8,1,1,0,0,0,49.6,56.4);
	this.instance_11.alpha = 0.051;

	this.instance_12 = new lib.Path_9();
	this.instance_12.setTransform(291.6,336.2,1,1,0,0,0,17.8,40.9);
	this.instance_12.alpha = 0.051;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,0,0,4).p("EgWxAkFQAejMAKgoQABgBBXmMQBRlzAGgMQAHgOBBDTQA/DMAUBeQA7EQADANQArDOAAAmIf2AAQBpr8AFhVQADguAkh3QAhhvgCgOIBiFUQBkFhAMBIQANBJACCOIAACfIILAAQgDgGgDgwQgGh7AJlbQAKlbhXlkQgbhvghhjIgchNQATmjhjj0QgghPgug8Qgrg0gJgOQgXgkhmg0QhbgvgTAAQgJAAgsghIgpghQhWgTgUAAQgYAAlSh6Qlgh/gkgkQgjgjgSixQgMh1AAhgQAAgRATg2QAbhKAQgyQBEjJAUiuQAYjFhmi6QhJiFiCh1QhdhTj/gQQjUgNh/AeQhBAQiNBIQiRBKgsArQglAmgKBSQgFAqACAhQgJANgTClQgJBSgIBQIAPASQANAWgDAPQgFAZigC+IgGANQgEARAGAVQAJAeAuAbQAYAPAjARQANAKgBArQgBAjgGARQgDAKAqAQQAVAJAWAGQgLALgKANQgVAaAAAJQAAAGAaAcQAYAagFAKQggBGAFApQAEAgAhAlQAWAZBzgCQCCgBAhANQAzAVgCA2QgCAtggAtQgVAfk1CEQk2B/gKAFQgeAPgeAAQgMAAhJArIhGAqQgmAEhFAwQg/AqgtAxQgkAohIC+Qg8CdgWBTQgMAvAMCaQAHBNAIBDQg+Bbg6KrQgcFWgRFDg");
	this.shape_2.setTransform(296,251.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6DBC6").s().p("EAW3AkFIAAifQgCiOgNhJQgNhIhjlhIhilUQACAOghBvQglB3gCAuQgFBVhpL8I/2AAQAAgmgrjOIg+kdQgVheg+jMQhBjTgHAOQgGAMhRFzIhYGNQgKAogeDMIoSAAQAQlDAdlWQA6qrA+hbQgIhDgHhNQgMiaAMgvQAWhTA8idQBIi+AkgoQAtgxA+gqQBFgwAngEIBGgqQBJgrAMAAQAeAAAegPQAKgFE2h/QE0iEAWgfQAggtACgtQACg2gzgVQghgNiCABQh0ACgVgZQghglgEggQgFgpAghGQAFgKgZgaQgZgcAAgGQAAgJAVgaQAKgNALgLQgWgGgVgJQgqgQADgKQAGgRABgjQABgrgNgKQgjgRgYgPQgugbgJgeQgHgVAFgRIAGgNQCgi+AFgZQADgPgOgWIgOgSQAIhQAJhSQASilAKgNQgDghAGgqQAKhSAlgmQAsgrCRhKQCNhIBBgQQB/geDUANQD/AQBcBTQCDB1BJCFQBlC6gXDFQgUCuhEDJQgRAygbBKQgSA2AAARQAABgAMB1QASCxAjAjQAkAkFgB/QFRB6AZAAQAUAABVATIAqAhQAsAhAJAAQATAABbAvQBmA0AXAkQAJAOArA0QAuA8AfBPQBkD0gTGjIAcBNQAhBjAbBvQBXFkgKFbQgKFbAHB7QACAwAEAGg");
	this.shape_3.setTransform(295.9,251.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75.3,19.1,447.2,473);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;