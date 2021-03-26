class Tract
{
    constructor(jsonTract)
    {
        //set id to the geo id
        this.id = jsonTract.geoid;
        //deconstruct 
        //put what we want in order inside the bracket. 
        //use comma to skip it
        [this.aland, this.aWater, ,, this.x, this.y] = jsonTract.gazetteer;
        
        /**
        //Set this.pop to be element 0 of the .sexByAge property array of jsonTract.
        //Set this.male to be element 1 of the .sexByAge property array of jsonTract.
        Set this.female to be element 25 of the .sexByAge property array of jsonTract.
         */
    
        this.pop = jsonTract.sexByAge[0];
        this.male = jsonTract.sexByAge[1];
        this.female = jsonTract.sexByAge[25];    
        
        //change all existing prop values into numbers
        //by iterating over all properties in this object
        for(let prop in this)
        {
            this[prop] = Number(this[prop]);
        }

        this.x = map(this.x, 42.954, 43.46, 100, width - 100);
        this.y = map(this.y, -77.961, -77.4, 100, height - 100);
        //console.log(this.id, this.x, this.y);
    }

    display()
    {

        fill(225, 100);
        let scaledPop = this.pop/70;
        ellipse(this.x, this.y, scaledPop);

        //making slices to rep. male vs female
     //sex pie chart   
    let startValue = 0;
    let range = 0;

    //female slice
    range = this.female/this.pop;
    this.drawSlice(color(230, 129, 230, 80), scaledPop, startValue, startValue + range);
    startValue += range;
    
    //male slice
    range = this.male/this.pop;
    this.drawSlice(color(0, 100, 255, 80), scaledPop, startValue, startValue + range);
    startValue += range;


        //console.log(this.id);
        fill(200, 160, 100, 150);
        text(this.id, this.x, this.y);
        

    }
    /**
     * {color } - fill color
     * {number} - d diameter
     * {float} - peercent 1 and 2
     */
    drawSlice(fColor, d, percent1, percent2)
    {
        fill(fColor);
        arc(this.x, this.y, d, d, -90 + percent1 *360, -90 + percent2 *360);
    }
}
