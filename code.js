// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c', {
  backgroundColor: 'rgb(242, 226, 129)',
  selectionColor: 'blue',
  selectionLineWidth: 2
});

fabric.Object.prototype.transparentCorners = false;


// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 10,
  fill: 'red',
  width: 20,
  height: 20,
});

// "add" rectangle onto canvas
canvas.add(rect);

var circle = new fabric.Circle({
  radius: 20, fill: 'green', left: 150, top: 20
});
var triangle = new fabric.Triangle({
  width: 20, height: 30, fill: 'blue', left: 50, top: 20
});

canvas.add(circle, triangle);

fabric.Image.fromURL('128.jpg', function (oImg) {
  oImg.scale(0.75).setOpacity(1.0).setFlipY(true);
  oImg.set({left: 30, top: 10});
  // add filter
  oImg.filters.push(new fabric.Image.filters.Grayscale());
  // apply filters and re-render canvas when done
  oImg.applyFilters(canvas.renderAll.bind(canvas));
  canvas.add(oImg);
});

var text = new fabric.Text('hello world', {
  left: 100,
  top: 100,
  fontFamily: 'PrecisionSans_W_Rg',
  fontSize: 30
});
canvas.add(text);

// export as png
function rasterize () {
  if (!fabric.Canvas.supports('toDataURL')) {
    alert("This browser doesn't provide means to serialize canvas to an image");
  } else {
    window.open(canvas.toDataURL('png'));
  }
}

// add a text object
function addText () {
  var text = 'Hello World';

  var textSample = new fabric.Text(text, {
    left: 0,
    top: 0,
    fontFamily: 'PrecisionSans_W_Rg',
    fill: '#000',
    scaleX: 0.5,
    scaleY: 0.5,
    fontWeight: 'normal',
    originX: 'left',
    hasRotatingPoint: true,
    centerTransform: true
  });

  canvas.add(textSample);
}

var $ = function(id){return document.getElementById(id)};

var angleControl = $('angle-control');
  angleControl.onchange = function() {
    rect.setAngle(parseInt(this.value, 10)).setCoords();
    canvas.renderAll();
  };

  var scaleControl = $('scale-control');
  scaleControl.onchange = function() {
    rect.scale(parseFloat(this.value)).setCoords();
    canvas.renderAll();
  };

  var topControl = $('top-control');
  topControl.onchange = function() {
    rect.setTop(parseInt(this.value, 10)).setCoords();
    canvas.renderAll();
  };

  var leftControl = $('left-control');
  leftControl.onchange = function() {
    rect.setLeft(parseInt(this.value, 10)).setCoords();
    canvas.renderAll();
  };

  function updateControls() {
    scaleControl.value = rect.getScaleX();
    angleControl.value = rect.getAngle();
    leftControl.value = rect.getLeft();
    topControl.value = rect.getTop();
  }
  canvas.on({
    'object:moving': updateControls,
    'object:scaling': updateControls,
    'object:resizing': updateControls,
    'object:rotating': updateControls
  });


  function sendBackwards () {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.sendBackwards(activeObject);
    }
  };

  function sendToBack () {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.sendToBack(activeObject);
    }
  };

  function bringForward () {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.bringForward(activeObject);
    }
  };

  function bringToFront () {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.bringToFront(activeObject);
    }
  };
