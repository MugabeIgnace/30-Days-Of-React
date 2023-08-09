// // Declare and initialize the array
// var itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ];

// // Print the array
// console.log(itCompanies);

// // Print the number of companies
// console.log('Number of companies:', itCompanies.length);

// // Print the first, middle, and last companies
// console.log('First company:', itCompanies[ 0 ]);
// console.log('Middle company:', itCompanies[ Math.floor(itCompanies.length / 2) ]);
// console.log('Last company:', itCompanies[ itCompanies.length - 1 ]);

// // Print out each company
// itCompanies.forEach(company =>
// {
//     console.log(company);
// });

// // Convert each company name to uppercase and print them
// var uppercasedCompanies = itCompanies.map(company => company.toUpperCase());
// console.log(uppercasedCompanies);

// // Print the array as a sentence
// var sentence = itCompanies.join(', ') + ' are big IT companies.';
// console.log(sentence);

// // Check if a certain company exists in the array
// var searchCompany = 'Google';
// if (itCompanies.includes(searchCompany))
// {
//     console.log(searchCompany + ' exists in the array.');
// } else
// {
//     console.log(searchCompany + ' is not found.');
// }

// // Filter out companies with more than one 'o'
// var filteredCompanies = itCompanies.filter(company => (company.match(/o/g) || []).length <= 1);
// console.log('Companies with <= 1 "o":', filteredCompanies);

// // Sort the array
// itCompanies.sort();
// console.log('Sorted array:', itCompanies);

// // Reverse the array
// itCompanies.reverse();
// console.log('Reversed array:', itCompanies);

// // Slice out the first 3 companies
// var firstThree = itCompanies.slice(0, 3);
// console.log('First 3 companies:', firstThree);

// // Slice out the last 3 companies
// var lastThree = itCompanies.slice(-3);
// console.log('Last 3 companies:', lastThree);

// // Slice out the middle company/companies
// var middleIndex = Math.floor(itCompanies.length / 2);
// var middleCompanies = itCompanies.slice(middleIndex, middleIndex + 1); // Use +1 for odd-length arrays
// console.log('Middle company/companies:', middleCompanies);

// // Remove the first company
// itCompanies.shift();
// console.log('Array after removing first company:', itCompanies);

// // Remove the middle company/companies
// itCompanies.splice(middleIndex, 1); // Use 1 for odd-length arrays
// console.log('Array after removing middle company/companies:', itCompanies);

// // Remove the last company
// itCompanies.pop();
// console.log('Array after removing last company:', itCompanies);

// // Remove all companies
// itCompanies = [];
// console.log('Array after removing all companies:', itCompanies);
