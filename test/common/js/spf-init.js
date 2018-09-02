// Detect whether browser supports canvas
var canvasSupport = (function() {
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
})();

yepnope({
  load: ["../common/js/TweenMax.js"],
  complete: function() {
    yepnope({
      test: canvasSupport,
      // Load canvas drawing libraries
      yep: ["../common/js/easeljs.js", "../common/js/tweenjs.js", "../common/js/movieclip.js"]
    })
  }
})

var scripts = [];
var callbacks = {};

/*
 * Converts and routes events to the correct rendering engine
 */
var relayEvents = function(e) {
  e.preventDefault();
  var $self = $(this);
  var name = $self.data("event");
  var params = $self.data("params") || [];
  if (canvasSupport) {
    var event = new createjs.Event(name);
    event.params = params;
    e.delegateTarget.exportRoot.dispatchEvent(event);
  }
}

/*
 * Extracts animation data from DOM and initialises the correct rendering engine
 */
var initInteractive = function() {
  var self = this;
  var $self = $(self);
  var resource; // yepnope resource uri
  var callback; // yepnope resource callback

  $self.on("click", "a[data-event]", relayEvents);
  if (canvasSupport) {
    var root = $self.data("canvas-root");
    if (root) {
      // URI of script to load
      resource = $self.data("canvas-uri");
      // Callback once script has loaded 
      callback = function() {
        var canvas, stage, exportRoot;
        canvas = $('<canvas />').attr({
          "width": lib.properties.width,
          "height": lib.properties.height
        })[0];
        $self.prepend(canvas);
        self.exportRoot = exportRoot = new lib[root]();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        TweenLite.ticker.addEventListener("tick", stage.update, stage);

        // Find preset active buttons and trigger them
        $self.find("li.spf-active:first-child a").trigger("click");
      }
    }
  } else {
    // load SVG version
  }

  if (resource) {
    scripts.push(resource);
    callbacks[resource] = callback;
  }
}

// Wait until DOM has loaded
$(function() {
  // Find and load interactivities
  $(".spf-interactive").each(initInteractive);

  yepnope({
    load: scripts,
    callback: callbacks
  })
});

$(function() {
  $(".spf-navbar").on("click", "a", function(e) {
    e.preventDefault();
    var $self = $(this);
    var $parent = $self.parent();
    $parent.addClass("spf-active");
    $parent.siblings(".spf-active").each(function() {
      $(this).removeClass("spf-active");
    });
  })
});