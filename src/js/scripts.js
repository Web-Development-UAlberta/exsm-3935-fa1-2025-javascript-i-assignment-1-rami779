// Assignment 1
async function main() {
  // Collect the first name of a user
  let firstName = String(await input("What is your first name? "));
  
  // Collect the last name of a user
  let lastName = String(await input("What is your last name? "));

  // Assign both the first and last name to a new variable named fullname
  let fullname = String(firstName + " " + lastName);

  output("Your full name is: " + fullname); // to check if it works correctly

  output("-------------------------------"); // making a space

  // Replace any ‘o’ characters in fullname to be ‘a’ characters
  fullnameCharactersReplaced = fullname.replace(/o/g, "e");

  // output the result
  output("Hi, This is your new name with characters are replaced: " + fullnameCharactersReplaced);

  output("-------------------------------"); // making a space

  // Ask the user to enter a number larger than 10
  let numberLargerThan10 = Number(await input("Enter a number larger than 10: "));

  // Ask the user to enter a number smaller than 10
  let numberSmallerThan10 = Number(await input("Enter a number smaller than 10: "));

  output("-------------------------------"); // making a space

  // Output the remainder of the larger number divided by the smaller number
  newNumber = Number(numberLargerThan10 % numberSmallerThan10);
  output("The remainder of " + numberLargerThan10 + " divided by " + numberSmallerThan10 + " is: " + newNumber);
}
