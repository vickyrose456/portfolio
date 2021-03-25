class Zebra extends Creature
{
    constructor()
    {
        super();
        this.aColor = random(150,225);
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
            line(n, this.y + 5, n - 10, this.y +12);
        }
        //body
        noStroke();
        fill(this.aColor);
        ellipse(this.x, this.y, this.size, this.size*1/2);

        //head
        fill(this.aColor);
        ellipse(this.x+8, this.y-8, this.size/2, this.size/2);
      //ears
      stroke("SaddleBrown");
      fill(this.aColor);
      circle(this.x+3, this.y-10,this.size/4);
      stroke("SaddleBrown");
      circle(this.x+15, this.y-10,this.size/4);

        //tail
      noStroke();
        fill("saddleBrown");
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
                //feet
                fill("SaddleBrown");
                circle(this.x -i, this.y + 10, this.size/10);
            }
            
        }

        //draw the zebra stripes
        for (let xc = this.x-10; xc <= this.x+10; xc+=5)
        {
            for(let yc = this.y-3; yc <= this.y+2; yc+=1)
            {
                strokeWeight(1);
                //strokes to dark brown lines
                stroke("saddleBrown");
                line(xc , yc, xc, this.y);
                
            }
        }


    }
    
}
