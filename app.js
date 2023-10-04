//Quick Question #1
//What does the following code return?

const set1 = new Set([1,1,2,2,3,4]);
//{1,2,3,4}



//Quick Question #2
//What does the following code return?

const set2 = [...new Set('referee')].join('');
//'ref'

//Quick Questions #3
//What does the Map m look like after running the code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// 0: {Array(3) => true}
// 1: {Array(3) => false}

//hasDuplicate
//Write a function called hasDuplicate whichh accepts an array and returns true or false if that array contains a duplicate.



const hasDuplicate = vals => new Set(vals).size !== vals.length;
//whatever is passsed through. turn that into a set. Checking the size of the new set, and checking if it is not the same as the orignal length of the array.

hasDuplicate([1,5,-1,4])

//vowelCount
//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.


const isVowel = char => 'aeiou'.includes(char);
// function isVowel(char){
//     return 'aeiou'.includes(char);
// }
function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCase = char.toLowerCase();
        if(isVowel(lowerCase)){
            if(vowelMap.has(lowerCase)){
                vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1);
            } else {
                vowelMap.set(lowerCase, 1);
            }
        }
    }
    return vowelMap;
}