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
      context.strokeRect(init.x,init.y,100,100);
         
}




