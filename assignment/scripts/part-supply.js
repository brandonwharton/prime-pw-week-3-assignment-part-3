console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges); // Making a visual of our array in the console

// 3. Console log the value of 'supplyChanges' at index 2
console.log('3. Item at index 2 is:');
console.log(supplyChanges[2]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');
let supplyRemoval = supplyChanges.pop();
console.log(supplyRemoval);
console.log(supplyChanges); // Checking my work.

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(supplyChanges); // Checking again

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, skip it. Do not log it to the console.
//    - if the value is negative, format the log as 'Part count -x.'
console.log('6. Showing supplyChanges...');
for (i=0; i<supplyChanges.length; i++) {
  if (supplyChanges[i] > 0) {
    console.log(`Added ${supplyChanges[i]} parts.`);
  } // Setting the condition for positive values
  else if (supplyChanges[i] === 0) {
  } // Setting the condition for value of 0 to do nothing.
  else {
    console.log(`Part count ${supplyChanges[i]}.`);
  } // Setting the condition for negative values
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');
for (supplies of supplyChanges) {
  if (supplies > 0) {
    console.log('Added', supplies, 'parts.');
  } // Setting the condition for positive values
  else if (supplies === 0) {
  } // Another blank code block for value of 0
  else {
    console.log('Part count '+ supplies + '.');
  } // Setting the condition for negative values with different string syntax
}

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');
let j = 0;
while (j < supplyChanges.length) {
  if (supplyChanges[j] > 0) {
    console.log(`Added ${supplyChanges[j]} parts.`);
  } // Condition for positive values
  else if (supplyChanges[j] === 0) {
  } // Condition for value of 0
  else {
    console.log(`Part count ${supplyChanges[j]}.`);
  } // Condition for negative values
  j++; // Remembering to iterate the while loop INSIDE of the main code block. Learned
       // that one the hard way on one of the assignment part 2 questions...
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');
let totalSupplies = 0;
for (i=0; i<supplyChanges.length; i++) {
  totalSupplies = totalSupplies + supplyChanges[i];
}
console.log(totalSupplies);
