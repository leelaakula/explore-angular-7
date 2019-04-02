import {Component, OnInit} from '@angular/core';
import {TempList} from './some-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'explore-angular-7';
  tempList = new TempList();

  ngOnInit() {
    this.tempList = {
      list: [
        {
          ob1: 123,
          ob2: 123,
          ob3: 123,
          flag: true
        }, {
          ob1: 1324234,
          ob2: 123,
          ob3: 3535,
          flag: false
        }, {
          ob1: 4563456,
          ob2: 123,
          ob3: 686578,
          flag: true
        }
      ]
    };
    console.log(this.tempList);
    this.charCount('abbcccdddd');
    const valu = this.same([1, 2, 3], [1, 4, 9]);
    const valu2 = this.same_refactored([1, 2, 3, 5], [1, 4, 9, 200]);
    const validAnagram = this.validAnagram('rat', 'car');
    const validAnagram_refactor = this.validAnagram_refactor('anagram', 'nagaram');
    const zeroSum = this.zeroSum([1, 2, 0]);
    const zeroSum_refactor = this.zeroSum_refactor([-2, -1, 0, 1, 2, 10]);
    const countUniqueValues = this.countUniqueValues_refactor([1, 1, 1, 1, 2, 3, 3, 2, 1]);
    const maxSubarraySum = this.maxSubarraySum([1, 2, 3, 4, 5], 4);
    const maxSubarraySum_refactor = this.maxSubarraySum_refactor([1, 2, 3, 4, 5], 4);
    const factorial = this.factorial(3);
    const collectOddVales = this.collectOddVales();
    const collectOddValues_recursive = this.collectOddValues_recursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const range_recursive = this.range_recursive(12, 2);
    const fibinocci_recursive = this.fibinocci_recursive(4);
    const linearSearch = this.linearSearch([10, 20, 51, 23], 23);
    const linearSearch_pseudoCode = this.linearSearch_pseudoCode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 9);
    const bubbleSort = this.bubbleSort([1, 5, 9, 159, 2, 5, 8, 258, 3, 5, 7, 357]);
    const naiveSearch = this.naiveSearch('temporarytemp', 'temp');
    const selectionSort = this.selectionSort([500, 200, 900, 5000, 1]);
    // const mergeArray= this.mergeArray([1,2,7],[4,5,6]);
    const mergeArray_master = this.mergeArray_master([1, 2, 7], [3, 6, 99, 2000]);
    const mergeSort = this.mergeSort([55, 98, 13, 87, 55, 0, 68]);
    const instertionSort_master = this.instertionSort_master([40, 20, 30, 100, 10]);
    const quick_sort_psuedo = this.quick_sort_psuedo([4, 6, 9, 1, 2, 5, 3]);
    console.log(quick_sort_psuedo);
  }

  charCount(string) {
    if (typeof string === 'string') {
      const obj = new Object();
      string.split('').forEach((s) => {
        obj[s] ? obj[s]++ : obj[s] = 1;
      });
      console.log(obj);
    }
  }

  same(array1, array2) {
    let state: boolean;
    if (array1.length === array2.length) {
      array1.forEach(item1 => {
        array2.forEach(item2 => {
          if ((item1 * item1) === (item2)) {
            state = true;
          } else {
            state = false;
          }
        });
      });
    } else {
      state = false;
    }
    return state;
  }

  same_refactored(arr1, arr2) {
    let ob1: any = new Object();
    let ob2: any = new Object();
    for (let i of arr1) {
      ob1[i] = (ob1[i] || 0) + 1;
    }
    for (let i of arr2) {
      ob2[i] = (ob2[i] || 0) + 1;
    }
    // for (let key in ob1) {
    //   if (!(key ** 2 in ob2)) {
    //     return false;
    //   }
    //   if (ob1[key] !== ob2[key ** 2]) {
    //     return false;
    //   }
    // }
    return true;
  }

  validAnagram(str1, str2) {
    let ob1 = {};
    let ob2 = {};
    if (str1.length !== str2.length) {
      return false;
    }
    for (let i of str1) {
      ob1[i] = (ob1[i] || 0) + 1;
    }
    console.log(ob1);
    for (let i of str2) {
      ob2[i] = (ob2[i] || 0) + 1;
    }
    console.log(ob2);
    for (let key in ob1) {
      if (key in ob2) {
        if (ob1[key] !== ob2[key]) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }

  validAnagram_refactor(first, second) {
    if (first.length !== second.length) {
      return false;
    }
    let lookup = {};
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
    return true;
  }

  zeroSum(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === 0) {
          return [array[i], array[j]];
        }
      }

    }
  }

  zeroSum_refactor(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
      let sum = array[left] + array[right];
      if (sum === 0) {
        return [array[left], array[right]];
      } else if (sum > 0) {
        right--;
      } else {
        left--;
      }
    }
  }

  countUniqueValues(array) {
    let count = 0;
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
      if (array[left] === array[right]) {
        count++;
      }
    }
    return count;
  }

  countUniqueValues_refactor(array) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
      // console.log(i, j);
    }
    return i + 1;
  }

  maxSubarraySum(array, num) {
    if (array.length === 0) {
      return false;
    }
    let max = -Infinity;
    for (let i = 0; i < array.length - num + 1; i++) {
      console.log(array[i]);
      let sum = 0;
      for (let j = 0; j < num; j++) {
        sum += array[i + j];
      }
      if (sum > max) {
        max = sum;
      }
    }
    return max;
  }

  maxSubarraySum_refactor(arr, num) {
    if (arr.length === 0) {
      return false;
    }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }

  factorial(num) {
    if (num <= 1) {
      return 1;
    }
    return num * this.factorial(num - 1);
  }

//  helper methods in recursive
  collectOddVales() {
    let result = [];

    function helper(helperInput) {
      if (helperInput.length === 0) {
        return;
      }
      if (helperInput[0] % 2 !== 0) {
        result.push(helperInput[0]);
      }
      helper(helperInput.splice(1));
    }

    helper([1, 2, 3, 4, 5, 6, 7]);
    return result;
  }

  collectOddValues_recursive(list) {
    let result = [];
    if (list.length === 0) {
      return result;
    }
    if (list[0] % 2 !== 0) {
      result.push(list[0]);
    }
    result = result.concat(this.collectOddValues_recursive(list.splice(1)));
    return result;
  }

  range_recursive(min, max) {
    let value = 0;
    let arr = [];
    if (min > max) {
      let temp = min;
      min = max;
      max = temp;
    }
    if (min < max) {
      value = min + 1;
      if (value !== max) {
        arr.push(value);
      }
    }
    if (min === max) {
      return arr;
    }
    arr = arr.concat(this.range_recursive(value, max));
    return arr;
  }

  fibinocci_recursive(num) {
    if (num <= 2) {
      return 1;
    }
    return this.fibinocci_recursive(num - 1) + this.fibinocci_recursive(num - 2);
  }

  linearSearch(arr, val) {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
          return i;
        }
      }
    }
  }

  linearSearch_pseudoCode(arr, item) {
    if (arr.length === 0) {
      return -1;
    }
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    while (arr[middle] !== item && left <= right) {
      if (item < arr[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
      middle = Math.floor((left + right) / 2);
    }
    return arr[middle] === item ? middle : -1;
  }

  naiveSearch(ls, ss) {
    if (ss.length > ls.length) {
      return -1;
    }
    let count = 0;
    for (let i = 0; i < ls.length; i++) {
      for (let j = 0; j < ss.length; j++) {
        if (ss[j] !== ls[i + j]) {
          break;
        }
        if (j === ss.length - 1) {
          count++;
        }
      }
    }
    return count;
  }

  bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
      let noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwaps = false;
        }
      }
      if (noSwaps) {
        break;
      }
    }
    return arr;
  }

  selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let least = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[least]) {
          least = j;
        }
      }
      if (i !== least) {
        let temp = arr[i];
        arr[i] = arr[least];
        arr[least] = temp;
      }
    }
    return arr;
  }

  mergeArray(l1, l2) {
    for (let i = 0; i < l1.length; i++) {
      for (let j = 0; j < l2.length; j++) {
        if (l1[i] < l2[j]) {
          l1.splice(i + 1, 0, l2[j]);
          break;
        } else if (l1[i] > l2[j]) {
          l1.splice(i, 0, l2[j]);
          break;
        }
      }
    }
  }

  mergeArray_master(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push((arr2[j]));
        j++;
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    return results;
  }

  mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = this.mergeSort(arr.slice(0, mid));
    let right = this.mergeSort(arr.slice(mid));
    return this.mergeArray_master(left, right);
  }

  insertionSort(arr) {
    let i = 0;
    let swap = null;
    while (i < arr.length) {
      if (arr[i + 1] < arr[i]) {
        swap = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = swap;
      }
      i++;
    }
  }

  instertionSort_master(arr) {
    for (var i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      for (var j = i - 1; j > -1 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }

  qc_pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    const pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
  }

  quick_sort_psuedo(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = this.qc_pivot(arr, left, right);
      //left
      this.quick_sort_psuedo(arr, left, pivotIndex - 1);
      //right
      this.quick_sort_psuedo(arr, pivotIndex + 1, right);
    }
    return arr;
  }
}
