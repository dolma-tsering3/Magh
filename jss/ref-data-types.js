 /* reference data types :
-array 
-object 
*/

let man1 = { // object
    name : "Ram",
    age : 78,
    address : {
       street : "woodside",
       zip : 4445
    }
  }
   let man2 = man1;  // js stores the location or reference of man1 in variable man2.
   man2.name = "Hari" // changes is done in the original ie in man1
   man2.address.street='newyork'
  
  // to keep the original as it is and makes changes only in man2 we use object
  man2 = {...man1} // three dots is called spread operator. it copies the datas from man1 in object man2.
  man2.name = 'Shiva'
  console.log(man1)
  console.log(man2)
  
  
  // similarly for array
  let brands1 = ['apple','addidas','puma']
  let brands2 = [...brands1] // copies datas from brand1 in array brand2
  brands2[3]='nike'
  console.log(brands1)
  console.log(brands2)