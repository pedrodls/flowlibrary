
function draw(r = []) {
    var canvas = document.getElementById('canvas');
    var color=["red", "blue", "black", "#d35400", "#34495e","#f1c40f", "#8e44ad","#95a5a6","orange", "blueviolet", "brown"];
    canvas.innerHTML = ''
       
    var init = {
        x: 100,
        y: 50,
        start: 100
    }

   
    var line = function(from, to) {
         var line = canvas.getContext('2d');
         line.beginPath()

       

        if (to.x - from.x > 210 && from.y==to.y) {

          line.moveTo(from.x+50 , from.y-40)
          line.lineTo(to.x+50, to.y-40);
//line: v1
          line.moveTo(to.x+50 , from.y)
          line.lineTo(to.x+50, to.y-40);
//line: v2
          line.moveTo(from.x+50-2, from.y)
          line.lineTo(from.x+50-2, to.y-40);

        }else if(from.x > to.x+200 && from.y==to.y){

          line.moveTo(from.x+50 , from.y-40)
          line.lineTo(to.x+50, to.y-40);
//line: v1
          line.moveTo(to.x+50 , from.y)
          line.lineTo(to.x+50, to.y-40);
//line: v2
          line.moveTo(from.x+50-2, from.y)
          line.lineTo(from.x+50-2, to.y-40);

        }else if(from.x==to.x && from.y<to.y){

          line.moveTo(from.x+50 , from.y+100)
          line.lineTo(to.x + 50, to.y )

        }else if(from.x==to.x && from.y>to.y){

          line.moveTo(from.x+50 , from.y)
          line.lineTo(to.x + 50, to.y+100 )

        }else if(from.x==to.x && from.y>to.y){

          line.moveTo(from.x+50 , from.y)
          line.lineTo(to.x + 50, to.y+100 )
       
        }else if(from.x < to.x && from.y==to.y){
       
          line.moveTo(from.x+100 , from.y+50)
          line.lineTo(to.x, to.y+50);
       
        }else if(from.x > to.x && from.y==to.y){
       
          line.moveTo(from.x , from.y+50)
          line.lineTo(to.x+100, to.y+50);
       
        }

        line.lineWidth=2
        line.strokeStyle = color[parseInt(Math.random()*8)];
        line.stroke()
    }

    var square = (obj, context) => {

      context.beginPath();

      context.strokeRect(init.x, init.y, 100, 100);

      context.fillText(obj.text, init.x + 30, init.y + 50)

      obj.x = init.x;
      obj.y = init.y;

      if (init.x > 500) {
          init.x = init.start;
          init.y += 200;
      } else {
          init.x += 200;
      }
    } 

    var arc = (obj, context) => {

      context.beginPath();

      context.arc(init.x+50, init.y+50, 50, 0, 2 * Math.PI);

      context.fillText(obj.text, init.x + 30, init.y + 50)
      
      context.stroke();

      obj.x = init.x;
      obj.y = init.y;

      if (init.x > 500) {
          init.x = init.start;
          init.y += 200;
      } else {
          init.x += 200;
      }

    }
    
    var diamond = (obj, context) => {

      context.beginPath();

      var width=100, height=100;
      // top left edge
      context.lineTo(init.x - width / 2, init.y + height / 2);
      
      // bottom left edge
      context.lineTo(init.x , init.y);
      context.lineTo(init.x , init.y+he);

      
      // bottom right edge
      context.lineTo(init.x + width / 2, init.y + height / 2);
      
      obj.x = init.x;
      obj.y = init.y;

      if (init.x > 500) {
          init.x = init.start;
          init.y += 200;
      } else {
          init.x += 200;
      }

      context.closePath();
      
      context.fillStyle = "red";

      context.fill();
    }

    var object = function(obj) {
      
        var context = canvas.getContext('2d');
        
        if(obj.type==0)
            square(obj, context)
            
        if(obj.type==1)
          arc(obj, context);

        return obj;
    }

    for (i = 0; i < r.length; i++)
        r[i] = object(r[i]);


    for (i = 0; i < r.length; i++)
        if (r[i].connectTo !== undefined)
            line(r[i], r[r[i].connectTo]);


    console.log(r);
}
var arr = [
    { id: 0, type: 1, text: 'Ponto A', connectTo: 1},
    { id: 1, type: 1, text: 'Ponto B', connectTo:3},
    { id: 2, type: 0, text: 'Ponto C', connectTo:6},
    { id: 3, type: 0, text: 'Ponto D', connectTo:2},
    { id: 4, type: 1, text: 'Ponto E', connectTo:6},
    { id: 5, type: 1, text: 'Ponto F'},
    { id: 6, type: 0, text: 'Ponto G'}
]
