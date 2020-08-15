var canvas = document.getElementById('canvas');
 
  var init={x:10,y:10}
  var move={x:100, y:60}
  var lntoY={c:460, l:460, x:110, y:210};
  var lntoX={c:110, l:210, x:60, y:60};

function draw(){


}

  var lineY=function(){

    var line = canvas.getContext('2d');

    line.moveTo(lntoY.c, lntoY.x);
    line.lineTo(lntoY.l, lntoY.y); 
    line.stroke();
  }

  var lineX=function(){

    var line = canvas.getContext('2d');

    line.moveTo(lntoX.c, lntoX.x);
    line.lineTo(lntoX.l, lntoX.y); 
    line.stroke();
  }

var square=function(){

  var context = canvas.getContext('2d');
      context.strokeRect(init.x+200,init.y,100,100);
         
}



/*

function draw(r = []) {
    var canvas = document.getElementById('canvas');
    canvas.innerHTML = ''
        /*if (canvas.getContext) {
    var context = canvas.getContext('2d');
    context.strokeRect(0,10,100,100);
    var context2 = canvas.getContext('2d');
    context2.strokeRect(200,10,100,100);

    
    
  }
}*-/

    var init = {
        x: 100,
        y: 50,
        start: 100
    }
    var o = function(from, to) {
        return !(from.x == to.x && from.y !== to.y)
    }
    var line = function(from, to) {
        var line = canvas.getContext('2d');

        if (o(from, to)) {
            line.moveTo(from.x + 100, from.y + 50)
            line.lineTo(to.x, to.y + 50);
        } else if (from.y > to.y) {
            line.moveTo(from.x + 50, from.y)
            line.lineTo(to.x + 50, to.y + 100)
        } else {
            line.moveTo(from.x + 50, from.y + 100)
            line.lineTo(to.x + 50, to.y)


        }
        if (to.y - to.x > 10) {
            //line.quadraticCurveTo(250, 100, 400, 250);

        }
        line.stroke()
    }
    var square = function(obj) {
        var context = canvas.getContext('2d');
        context.strokeRect(init.x, init.y, 100, 100);
        context.fillText(obj.text, init.x + 40, init.y + 50)
        obj.x = init.x;
        obj.y = init.y;
        if (init.x > 500) {
            init.x = init.start;
            init.y += 200;
        } else {
            init.x += 200;
        }
        //alert(init.x)
        return obj;
    }
    for (i = 0; i < r.length; i++)
        r[i] = square(r[i]);


    for (i = 0; i < r.length; i++)
        if (r[i].connectTo !== undefined)
            line(r[i], r[r[i].connectTo]);


    console.log(r);
}
var arr = [
    { id: 0, type: 0, text: 'Ponto A', connectTo: 1 },
    { id: 1, type: 0, text: 'Ponto B', connectTo: 5 },
    { id: 2, type: 0, text: 'Ponto C' },
    { id: 3, type: 0, text: 'Ponto D' },
    { id: 4, type: 0, text: 'Ponto E', connectTo: 6 },
    { id: 5, type: 0, text: 'Ponto F', connectTo: 6 },
    { id: 6, type: 0, text: 'Ponto G', connectTo: 2 }
]*/
