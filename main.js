function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    background("white");
    
}
randomfish=Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[randomfish]);
sketch=quick_draw_data_set[randomfish];
document.getElementById("id").innerHTML="you have to draw: "+sketch;
timer_counter=0;
timer_check="";
drawn="";
answer="";
score=0;