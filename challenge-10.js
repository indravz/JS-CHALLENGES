/*
Sets are primitive jstype that allows us to create a unique set of items. We can use sets when we have dataset that contains repeating values and we want to remove the duplicate instances

vendor1: ["pizza", "pasta"]
vendor2: ["pizza", "calzones"]
vendor3: ["lobster"]
vendor4: ["calzones"]

return the master menu which does not contain duplicates 
*/

function MasterMenu(vendorList) {
  let { vendor1, vendor2, vendor3, vendor4 } = vendorList;

  concatList = vendor1.concat(vendor2, vendor3, vendor4);
  return (new Set(concatList))

}

let vendorList = {
  vendor1: ["pizza", "pasta"],
  vendor2: ["pizza", "calzones"],
  vendor3: ["lobster"],
  vendor4: ["calzones"]
}

console.log(MasterMenu(vendorList));

// can also use flat