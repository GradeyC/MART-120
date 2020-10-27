var x1 = 350;//x axis for head
var x2 = 380;//x axis for out/in eye Right
var x3a = 295;//x axis for main torso (shirt)   
var x3b = 245;//x axis for shirt sleeve Right
var x3c = 355;//x axis for shirt sleeve left

var y1 = 185;//Y axis for out/in eye Left
var y2 = 420;//Y axis for L/R hands
var y3a = 310;//y axis for shirt parts

var Move = movement = Math.floor(Math.random() * 5) + 1;

var TextSmall = 7;//small size of text

var PeachR = 255;//peach Red value
var PeachG = 229;//Peach Green value
var PeachB = 180;//Peach blue value

function setup()
{
    createCanvas(700,700);
}
function draw()
{
     background(240,10,102);//colors
    
     //Head (objects) 
     fill(PeachR,PeachG,PeachB);//peach color
     ellipse(x1, 200, 200,);//head shape (will move on x axis)
        if(x1>=600 || x1 <= 0)//good
        {
            Move *= -1;
        }
        x1 += Move;
        //eyes
            fill(255,250,250);//outer eye color 
            circle(x2,185,20);//outer eye Right(shape) (will move on x AXIS)
            circle(320,y1,20);//outer eye Left(shape) (will move on y axis)
            fill(104,124,122);//inner eye color
            circle(x2,185,15);//inner eye Right(shape) (will move on x AXIS)
            circle(320,y1,15);//inner eye Left(shape) (will move on Y AXIS)
                if(x2>=690 || x2 <= 0)//good
                {
                    Move *= -1;
                } 
                x2+=Move;
                if(y1>=690 || y1 <= 0)//good
                {
                    Move *= -1;
                } 
                 y1+=Move;
        //mouth
            stroke(3);
            line(390,250,300,250);//mouth line 
            
        //nose
            fill(350, 210, 210,);//nose color (slightly lighter/darker than other skin for differation)
            triangle(325,230,375,230,350,210);//nose shape
           //order is (x1,y1)-left corner (x2,y2)-right corner (x3,y3)-connecting point/top
            strokeWeight(5);
            point(340,220);//Nostril(L)
            point(360,220); //Nostril(R)
            strokeWeight(2);
            line(350,210,350,200);//nose bridge line
        
        //neck
            noStroke();            
            fill(255,229,180);//peach Color
            rect(295,270,100,50);//Neck (shape)
    
    //Chest Objects

        //shirt (will move diagnoally)
            fill(0,191,255);
            rect(x3a,y3a,100,200);//main torso of shirt
            rect(x3b,y3a,100,50);//Sleeve(R)
            rect(x3c,y3a,100,50);//sleeve(L)
                if(x3a>= 550 || x3a <= 0)//good
                {
                    Move *= -1;
                }
                x3a+=Move;
                if(x3b>= 500 || x3b <= 0)//good 
                {
                    Move *= -1;
                }     
                x3b+=Move;      
                if(x3c>= 600 || x3c <= 0)//good is 600
                {
                    Move *= -1;
                }
                x3c+=Move;
                if(y3a>= 500 || y3a <= 0)//good
                {
                    Move *= -1;
                } 
                y3a+=Move;

        //arms
            fill(255,229,180);
            rect(225,310,50,100);//arm(R)
            rect(415,310,50,100);//arm(L)

        //hands (will move on y axis)
            fill(255,229,180);
            circle(250,y2,50);//Hand(R)
            circle(440,y2,50);//Hand(L)
                if(y2>= 670 || y2 <= 0)//good
                {
                    Move *= -1;
                }
                 y2+=Move;

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
    textSize(TextSmall);
    text('A Simple Me', 10,40);
    textSize(30);
    text('Gradey Cashin', 500,680);
                if(TextSmall>=50 || TextSmall<=0)
                {
                    Move *= -1;
                }
                TextSmall+=Move;
}
