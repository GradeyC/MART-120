//var for character and Mouse
var PCx = 30;
var PCy = 30;
var Mouse1 = 0;
var Mouse2 = 0
var MouseX = 10;
var MouseY = 10;
var diameter = 50;
//var for movement
var BlockX1 = 225;
var BlockY1 = 310;
var BlockX2 = 400;
var BlockY2 = 210;
var Movex = movement = Math.floor(Math.random() * 5) + 1;
var MoveY = movement = Math.floor(Math.random() * 5) + 1;
var Move = movement = Math.floor(Math.random() * 2) + 1;

function Player()
{
    fill(141,219,91);
     circle(PCx,PCy,20); 
}

function Obstacles()
{
    fill(150,21,35);
    rect(BlockX1,BlockY1,50,100);//Moving Wall(R)
    fill(35,21,150);
    rect(BlockX2,BlockY2,100,50);//Moving Wall(L)
        MoveThings()  
}
function Walls()
{
    strokeWeight(3);
    line(690,600,690,10);//right wall (has the exit)(good)
    line(10,10,690,10);//top wall(good)
    line(10,690,10,10);//left wall (good)
    line(690,690,10,690);//bottom wall(good)
    WinMessage()
}
function MoveThings()
{
    if(BlockX1>=600 || BlockX1 <= 0)//good
    {
   Movex *= -1;
     }
    BlockX1+=Movex;
    
   if(BlockY1>=600 || BlockY1 <= 0)//good
   {
   Movex *= -1;
   }
   BlockY1 += Movex;
   if(BlockX2>=600 || BlockX2 <= 0)//good
    {
    MoveY*= -1;
     }
    BlockX2+=MoveY;
   if(BlockY2>=600 || BlockY2 <= 0)//good
   {
   MoveY *= -1;
   }
   BlockY2 += MoveY;
}

function WinMessage()
{
    if(PCx >= 750|| PCx == 0 && PCy == 630  || PCy <-50 )
                {
                    fill(225,225,255);
                    textSize(100);
                    text("You Won!", 150,350);
                }
}

function keyPressed()
{
 if(key == 'a')
    {
        PCx-=120;
        console.log("moveLeft")
    }
    else
 if(key == 'w')
    {
        PCy-=20;
        console.log("moveUp")
    }
    else
 if(key == 's')
    {
        PCy+=120;
        console.log("moveDown")
    }
    else
 if(key == 'd')
    {
        PCx+=40;
        console.log("moveRight")
    } 
            
}

function mousePressed()
{
   Mouse1=MouseX;
   Mouse2=MouseY;
}

function setup()
{
    createCanvas(700,700);
}
function Mouse()
{
    fill(100,20,10);
            circle(Mouse1,Mouse2,diameter);
            if (Mouse1 >= 300) 
            {
              MouseX = 50;
            }     
            if (Mouse2 >= 300) 
            {
              MouseY = 50;
            }
      
            if (diameter < 200) 
            {
              diameter += 2;
            } 
            else if (diameter >= 200) 
            {
              diameter = 25;
            }
            {
                circle(MouseX, MouseY, 30);
            } 
}

function draw()
{
    background(100,100,16);
    //Player Character
        Player()
    
    //obstcals
        //mouse
            Mouse()        
        
            //moving things
           Obstacles()
           
           
            
            //walls
           Walls()
                
          
    

            }
