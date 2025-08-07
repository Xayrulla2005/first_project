function solveProblem() {
  const type = document.getElementById('problemType').value;
  const inputStr = document.getElementById('inputArgs').value;
  let result;

  try {
    // Convert input to real JavaScript arguments
    const args = eval("[" + inputStr + "]");

    switch (type) {
      case 'palindrome':
        result = longestPalindrome(args[0]);
        break;
      case 'cutAndAttach':
        result = cutAndAttach(args[0], args[1]);
        break;
      case 'sumCheck':
        result = checkSum(args[0], args[1]);
        break;
      case 'arrayDiff':
        result = arrayDiff(args[0], args[1]);
        break;
      default:
        result = "Noma'lum masala turi.";
    }
  } catch (e) {
    result = "Xatolik: Argumentlarni to‘g‘ri formatda kiriting!";
  }

  document.getElementById('output').textContent = JSON.stringify(result, null, 2);
}

// 1. Eng uzun palindrom
function longestPalindrome(str) {
  let max = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let sub = str.slice(i, j + 1);
      if (sub === sub.split("").reverse().join("") && sub.length > max.length) {
        max = sub;
      }
    }
  }
  return max;
}

// 2. Kesib oxiriga ulash
function cutAndAttach(arr, num) {
  if (num >= arr.length) return arr;
  const cut = arr.splice(0, num);
  return arr.concat(cut);
}

// 3. Yig'indiga teng kombinatsiya
function checkSum(arr, target) {
  function helper(i, sum) {
    if (sum === target) return true;
    if (i >= arr.length) return false;
    return helper(i + 1, sum + arr[i]) || helper(i + 1, sum);
  }
  return helper(0, 0);
}

// 4. Arraylar orasidagi farq
function arrayDiff(arr1, arr2) {
  const diff = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
  return [...new Set(diff)];
}


