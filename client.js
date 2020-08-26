let refrigeratorContents  = {
  baconStrips: 8,
  chocolateChips: 200,
  cheeseSlices: 6,
  eggs: 4,
  onions: 1,
  pancakeMixBags: 1,
  tomatoes: 1,
};

let pickyEaters = 4;

// You shouldn't need to change anything above this line initially
// You may change it to test different scenarios, but it should work as is

function breakfastChecker( contents ){
  if( contents.eggs >= ( pickyEaters * 2 ) ){
    console.log( 'Enough Eggs!' );
  } // end if: eggs
  else{
    console.log( 'Not Enough Eggs!' );
  } // end else: eggs

  if( contents.baconStrips >= ( pickyEaters * 3 ) ){
    console.log( 'Enough Bacon Strips!' );
  } // end if: baconStrips
  else{
    console.log( 'Not Enough Bacon Strips!' );
  } // end else: baconStrips

  if( ( contents.pancakeMixBags * 10 ) >= ( pickyEaters * 3 ) ){
    console.log( 'Enough Pancake Mix!' );
  } // end if: pancakeMixBags
  else{
    console.log( 'Not Enough Pancake Mix!' );
  } // end else: pancakeMixBags

  if( contents.chocolateChips >= ( pickyEaters * 15 ) ){
    console.log( 'Enough Chocolate Chips!' );
  } // end if: chocolateChips
  else{
    console.log( 'Not Enough Chocolate Chips!' );
  }
  
  if( ( contents.eggs >= ( pickyEaters * 2 ) && contents.baconStrips >= ( pickyEaters * 3 ) ) ||
  ( ( contents.pancakeMixBags * 10 ) >= ( pickyEaters * 3 ) && contents.chocolateChips >= (pickyEaters * 15 ) ) ){
    return 'Yes!';
  } // end if
  else{
    return 'No!';
  } // end else
} // end breakfastChecker

// Your function should return 'yes' or 'no'
console.log( 'Does the refrigerator have enough food for breakfast?', breakfastChecker( refrigeratorContents ) );