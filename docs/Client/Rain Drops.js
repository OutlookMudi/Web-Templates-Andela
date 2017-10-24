module.export = 
{
    function getAllFactorsFor(remainder) {
        let factorlist = [], i;
        let mySet = new Set();
        
        for (i = 2; i <= remainder; i++) 
        {
            while ((remainder % i) === 0) {
                mySet.add(i);
                remainder /= i;
            }
        }
        factorlist = Array.from(mySet);
        console.log(factorlist);
        let emptyList = [];
    
      for (let q = 0; q < factorlist.length; q++) 
    {
       if(factorlist[q]== 3)
       {
         
        emptyList.push("pling");
       }
       if(factorlist[q] == 5)
       {
        emptyList.push("plang");
       }
       if(factorlist[q] == 7)
       {
        emptyList.push("plong");
       }
       else
       {
            factorlist[q].toString();
       }
    } 
    console.log(emptyList);
    result = emptyList.join("");
    
    }
    
}

getAllFactorsFor(3500);