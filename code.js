(function () {
  'use strict';

  // create a wrapper around native canvas element (with id="c")
  var canvas = new fabric.Canvas('c', {
    backgroundColor: 'rgb(242, 226, 129)',
    selectionColor: 'blue',
    selectionLineWidth: 2
  });

  // create a rectangle object
  var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20,
    angle: 45
  });

  // "add" rectangle onto canvas
  canvas.add(rect);

  var circle = new fabric.Circle({
    radius: 20, fill: 'green', left: 100, top: 100
  });
  var triangle = new fabric.Triangle({
    width: 20, height: 30, fill: 'blue', left: 50, top: 50
  });

  canvas.add(circle, triangle);

  fabric.Image.fromURL('128.jpg', function (oImg) {
    oImg.scale(0.75).setOpacity(0.5).setFlipY(true);
    canvas.add(oImg);
  });
}());
