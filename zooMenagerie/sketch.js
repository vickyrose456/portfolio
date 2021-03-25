/**
 * Victoria Olivieri
 * IGME-599: Project 1, 10/7/20
 * Animals will move across the screen from left to right and 
 * wrap around.
 *  When you click on a creature, it will replace that creature
 * with a new one at the indicated index
 */

"use strict"; //catch some common coding errors


let menagerie = [];

function setup() 
{
    createCanvas(800, 700);
    //filliing the menagerie array with creatures
    menagerie = stockMenagerie(15);
    //console.log(menagerie);

  }
  
  function draw() 
  {
    background("#58c789");

    //display and move the creatures
    for(let c = 0; c <= menagerie.length-1; c++)
    {
      menagerie[c].display();
      menagerie[c].move();
    }

    //mouseHover(menagerie);
    if(mouseIsPressed)
    {
      //draw animal control pole at mouse location
      //use mouseX and mouseY
      strokeWeight(2);
      stroke("SaddleBrown");
      line(mouseX, mouseY, mouseX + 10, mouseY - 15)
      noFill();
      stroke(0);
      circle(mouseX + 15, mouseY - 15, 10);
    }
    

  }


  /**
   * this will randomly select a creature and return it
   */
  function getNewCreature()
  {
    let newCreature = null;
    let creaturePick = random(1, 10);

    //randomization of which creature to create
    if(creaturePick <= 5)
    {
      //normal(elephant)
      newCreature = new Creature();
    } else if(creaturePick <= 6)
    {
      //Giraffe
      newCreature = new Giraffe();
    }else if(creaturePick <= 7)
    {
      //tiger
      newCreature = new Tiger();
    }
    else if(creaturePick <= 10)
    {
      //zebra
      newCreature = new Zebra();
    }

    return newCreature;
  }


  /**
   * 
   * @param {cNum} Number of creatures you want in the array
   * this function will push new creatures into the menagerie array 
   */
  function stockMenagerie(cNum)
  {
    let critters = [];
    let newCritter;
    
    console.log("************Stocking the Menagerie**************");
    
    for(let i = 0; i <= cNum-1; i++)
    {
      newCritter = getNewCreature();
      critters[i] = newCritter;
    }
      //console.log(critters);
      return critters;
  }
  
  /**
   * when the mouse is clicked on a current creature, 
   * replace it with a different creature at that index
   */
  function mouseClicked()
  {
    //console.log(menagerie);
    let replaceMe = -1;

      for(let c = 0; c<= menagerie.length -1; c++)
      {
        
        if(menagerie[c].within(mouseX, mouseY) == true)
        {
          //console.log("HIT");
          replaceMe = c;
          //console.log("c is : ", c);
        }
        
      }
      if(replaceMe > -1)
        {
          //console.log(replaceMe);
          //replace the creature with a new creature at that index
          let newCreat = getNewCreature();
          menagerie[replaceMe] = newCreat;
        }
  }
  /**
   * 
   * @param {menagerie} Array menagerie will be used to determine
   * if the mouse is hovering over a creature.
   * If the mouse is over a creature, then an animation will appear
   * If not, the normal cursor will appear on the screen.
   */
function mouseHover(menagerie)
{
  let menag = menagerie;
  
  for(let c = 0; c<= menag.length -1; c++)
    {
      
        if(menag[c].within(mouseX, mouseY) === true)
          {
            // starting point of each circle depends on mouse position
    const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
    const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
    const angle = xAngle * (5 / width) + yAngle * (5 / height);

    // each particle moves in a circle
    const myX = mouseX + 10 * sin(2 * PI * t + angle);
    const myY = mouseY + 10 * sin(2 * PI * t + angle);

            noStroke();
            fill("SaddleBrown");
    circle(myX, myY, 10); // draw circle
    t = t + 0.01; 
            
          }
          else 
            {
              cursor(ARROW);
              //console.log("arrow");
            }
      
    }
  
}
