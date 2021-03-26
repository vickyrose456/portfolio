/**
 * Victoria Olivieri
 * IGME-599: Project 2, 12/1/20
 * Create a program that visualizes 4 aspects of Monroe
 * County based on census data file.
 * the 4 aspects are :
 *  1.)
 *  2.)
 *  3.)
 *  4.)
 */


"use strict"; //catch some common coding errors

const tractArray = [];

function setup() 
{
    createCanvas(3000, 3000);

    loadJSON("P2DataMonroe.json", readTracts);
    loadJSON("P2DataMonroe.json", printTract);
    rectMode(CENTER);
    angleMode(DEGREES);
    noStroke();

}//end setup
 
/* readTracts - callback function iterates thru each item in tracts and calls printTract() for it.
@param {Array} tracts - array of arrays, 1 per census tract
*/
 function readTracts(tracts)
{
  console.log(tracts.length);

  //start at 1 since we do not need the first slot of info
  for (let i = 1; i < tracts.length; i++)
  {
    tractArray.push(new Tract(tracts[i]));
  }

  updateViz();
}//end callback readTracs


function printTract(fields)
{
  console.log(fields); //check for presence

  let count = new Intl.NumberFormat();
  let percent = new Intl.NumberFormat("us-EN", {style: "percent"});
  let dollars = new Intl.NumberFormat("us-EN", {style: "currency", currency: "USD"});

  //want to skip the first 3 items after housing median to get to tract
  let [popul, male, female, poverty, income, value, , , , tractID] = fields;

  console.log("population", popul, "and tract ID: ",tractID);

  console.log(popul, percent.format(poverty/popul),dollars.format(income), tractID); //check


  let tString = "Tract " + tractID + " Population: ";

  if(popul > 0)
  {
    //population. F vs M compared to the population
    tString += count.format(popul) + " => " + 
      percent.format(male/popul) + " male , " +
        percent.format(female/popul) + " female.\n";
    //people  in poverty vs population
    tString += percent.format(poverty/popul) + " low poverty ratio: ";
    tString += dollars.format(income) + " median income: " +
      dollars.format(value) + " median resident value.";
  } else
    {
      tString += "0";
    }
  console.log(tString);

}//end printTract

/***
 * 1.	If the length of tractArray is bigger than 0, 
 * call the .display() method on every item in it.
Otherwise, show a loading message, e.g. 
“"Waiting to load data files...” in 
the center of the canvas.
 */
function updateViz()
{
  background(0);
  if(tractArray.length > 0)
  {
    for (let i=0; i< tractArray.length; i++)
    {
      tractArray[i].display();
    }
  }else
  {
    text("Waiting to load the files", 50, height/2);
  }
  
}//end update
