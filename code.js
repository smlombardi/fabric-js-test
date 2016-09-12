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

function rasterize () {
  if (!fabric.Canvas.supports('toDataURL')) {
    alert("This browser doesn't provide means to serialize canvas to an image");
  } else {
    window.open(canvas.toDataURL('png'));
  }
}
