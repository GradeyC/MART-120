//var for character and Mouse
var PCx = 30;
var PCy = 30;
var Mouse1 = 0;
var Mouse2 = 0
var MouseX = 10;
var MouseY = 10;
var diameter = 50;
//var for movement
var BlockX1 = [];
var BlockY1 = [];
var Movex = [];
var MoveY = [];
var Hight = [];
var length = [];
var R = [];
var B = [];
var G = [];
function getRandomNumber(number)//from instruction page 
    {
        return Math.floor(Math.random()*number)+10;
    }
    function setup() 
    {
      // create a for loop here to create the circles
        for(var i = 0; i < 2; i++)
        {
            // get all the random numbers to create a circles
            BlockX1[i] = getRandomNumber(200);
            BlockY1[i] = getRandomNumber(200);
            Hight[i] = getRandomNumber(100);
            length[i]= getRandomNumber(100);
            R[i]= getRandomNumber(15);
            B[i]= getRandomNumber(10);
            G[i]= getRandomNumber(25);
        }
    }
function Player()
{
    fill(141,219,91);
     circle(PCx,PCy,20); 
}

function Obstacles()
{
    setup()
    fill(R,G,B);
    rect(BlockX1,BlockY1,Hight,length);//Moving Wall(R)
    fill(R,G,B);
    rect(BlockX1,BlockY1,Hight,length);//Moving Wall(L)
   
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
    createCanvas(700,700);
    background(100,100,16);
    //Player Character
        Player()
    
    //obstcals
        //mouse
            Mouse()        
        
            //moving things
           Obstacles()
           
           for(var i = 0; i < 500; i++)
      {
        // concentric circle randomly using arrays
        rect(BlockX1[i],BlockY1[i],Hight[i],length[i]);
      }
            
            //walls
           Walls()
                
          
    

            }
