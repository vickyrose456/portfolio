class Creature
{
    /**
     * 
     * x is the x value on the canvas
     * y is the y value on the canvas 
     * speed is how fast it will move across canvas
     * body size will be at 20
     * color will be chosen randomly
     */
    constructor()
    {
        this.x = random(0, width - 80);
        this.y = random(30, height -80);
        this.speed = random(1, 2.5);
        this.size = 20;
        this.aColor = random(20, 90);

    }
    /**
     * display will display each part of the animal to the canvas
     * it will also display grass under the feet of the creature
     */
    display()
    {
    //draw the grass
    for(let n = this.x - 10; n <= this.x + 25;n+=8)
    {
      stroke("darkGreen");
      strokeWeight(1);
      //fill();
      //triangle(x, this.y+ 10, x + 10, this.y, x + 30, this.y+10);
      line(n, this.y + 5, n - 10, this.y +12);
  }
        //the gen creature is an elephant
        //body
        noStroke();
        fill(this.aColor);
        ellipse(this.x, this.y, this.size, this.size*1/2);
    
        //head
        fill(this.aColor);
        ellipse(this.x+8, this.y-8, this.size/2, this.size/2);

        //ears
        fill(this.aColor - 10);
        ellipse(this.x + 5, this.y - 8, this.size/2, this.size/1.5);

        //trunk
        fill(this.aColor);
        ellipse(this.x + 15, this.y - 8, this.size/2, this.size/4);

        //tail
        fill(this.aColor);
        ellipse(this.x - 12, this.y, this.size/4, this.size/6);

        //4 legs
        for(let i = -10; i <= 10; i+=5)
        {
            if( i > -5 && i < 5)
            {
                //do nothing
            }else
            {
                fill(this.aColor);
                ellipse(this.x - i, this.y +5, this.size/8, this.size/2);
            }
        }
  
    }

    /**
    *this fns will allow the animal to move across 
    * the screen and wrap around continously 
    */
    move()
    {
        this.x += this.speed;
        //wrap x if it goes beyond the canvas (600)
        //+40 to the width so that the creature passes the edge before getting to x=0
        if(this.x > width + 40)
        {
            this.x = 0;
        }
    }

    /**
     * 
     * @param {x} x coordinate
     * @param {y} y coordinate
     * If the given point is within the boundary of the creature,
     * then return false, if not return true
     */
    within(x, y)
    {
        let distAbsVal = dist(this.x + 15, this.y + 15, x, y);
      
      if(distAbsVal <= 40)
         {
             //console.log("True");
           return true;
         }
        else
        {
           // console.log("false");
          return false;
        }
      
    }
}
