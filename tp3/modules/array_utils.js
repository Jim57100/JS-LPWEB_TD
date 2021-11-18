

export function getSum (arr) {
  return arr.reduce((sum, n) => sum + n);
}

export function getNumberOfEven (arr) {
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      number++;
    }
  }
  return number;
}

export function getMaxEven (arr) {
  let maxEven = Number.MIN_SAFE_INTEGER;
  arr.forEach(
    n => {
      if (n % 2 === 0 && n > maxEven) {
        maxEven = n;
      } 

    });

  return maxEven;
}

export function binarySearch (arr, element) {
  let result = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end && result === -1) {
    const half = Math.round((end + start) / 2);
    if (element === arr[half]) {
      result = half;
    } else if (element > arr[half]) {
      start = half + 1;
    } else {
      end = half - 1;
    }
  }
  return result;
}
