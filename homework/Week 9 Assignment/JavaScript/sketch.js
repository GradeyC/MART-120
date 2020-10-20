function setup()
{
    createCanvas(700,700);
}
function draw()
{
     background(240,10,102);
    // Head
     fill(255,229,180);
     ellipse(350, 200, 200,)//peach color;
     
        //eyes
            fill(255,250,250);
            circle(380,185,20);
            circle(320,185,20);
            fill(104,124,122);
            circle(380,185,15);
            circle(320,185,15);
            
        //mouth
            stroke(3);
            line(390,250,300,250);//work on fixing for mouth
            
        //nose
            fill(350, 210, 210,);
            triangle(325,230,375,230,350,210);
           //order is (x1,y1)-left corner (x2,y2)-right corner (x3,y3)-connecting point/top
            strokeWeight(5);
            point(340,220);//Nostril(L)
            point(360,220); //Nostril(R)
            strokeWeight(2);
            line(350,210,350,200);   
        //neck
            noStroke();            
            fill(255,229,180);
            rect(295,270,100,50);
    //Chest

        //shirt
            fill(0,191,255);
            rect(295,310,100,200);//main torso of shirt
            rect(245,310,100,50);//Sleeve(R)
            rect(355,310,100,50);//sleeve(L)
        //arms
            fill(255,229,180);
            rect(225,310,50,100);//arm(R)
            rect(415,310,50,100);//arm(L)
        //hands
            fill(255,229,180);
            circle(250,420,50);//Hand(R)
            circle(440,420,50);//Hand(L)

         //legs/pants
            fill(165,42,42);//belt color (brownish red)
            rect(295,490,100,20);//belt
            fill(0,0,205);//get a jean color for pants
            rect(295,510,40,125);//Leg(R)
            rect(355,510,40,125);//Leg(L)
     
        //feet/shoes
        fill(165,42,42);//brown for tops of shoes
        rect(265,620,70,40,20);//top of shoe(R)
        rect(355,620,70,40,20);//top of shoe(L)
        
    //signature
    fill(225,225,255);
    textSize(20);
    text('A Simple Me', 10,40);
    textSize(30);
    text('Gradey Cashin', 500,680);
}
