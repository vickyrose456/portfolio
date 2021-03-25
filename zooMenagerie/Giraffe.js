class Giraffe extends Creature
{
    constructor()
    {
        super();
        this.cColors = ["Tan", "Wheat","Chocolate", "DarkGoldenRod"];
        //this.aColor = "#cd8500";
        //initialized as a random color as aColor
        let c = floor(random(this.cColors.length));
        this.aColor = this.cColors[c];

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

        //neck
        fill(this.aColor);
        ellipse(this.x+8, this.y-8, this.size/4, this.size/1.25);

        //head
        fill(this.aColor);
        ellipse(this.x + 12, this.y - 14, this.size/2,this.size/2.5);
       

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

        //spots
        for (let xc = this.x - 8; xc <= this.x + 8; xc+=5)
        {
            for(let yc = this.y - 3; yc <= this.y + 3; yc+=4)
            {
                //draw the spots on the body of the giraffe
                fill("SaddleBrown");
                ellipse(xc, yc, this.size/8, this.size/15);
            }
          
        }
        
      
    }
    
    
}
