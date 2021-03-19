/* exported isAnagram */

// function must test if characters in string1 are the same as characters in string2
// if strings have the same length it may indicate that they are anagrams also
// look for a method that can test this condition
// looked at includes() unsure if that's a good option for this

function isAnagram(firstString, secondString) {
  var first = firstString.replace(/\s/g, '');
  var second = secondString.replace(/\s/g, '');
  var i = 0;
  if (first.includes(second[i]) && first.length === second.length) {
    i++;
    return true;
  } else {
    return false;
  }
}

// all but one test passes "nearby there" and "nearly there"
