// 选择排序
/*
选择排序
选择排序从小到大排序：一开始从0~n-1区间上选择一个最小值，将其放在位置0上，然后在1~n-1范围上选取最小值放在位置1上。重复过程直到剩下最后一个元素，数组即为有序。
*/

var selectionSort = function(arr) {
  for(var i = 0; i < arr.length -1; i++) {
    var min = i
    for(var j = i+1; j < arr.length; j++) {
      if (arr[min] > j) {
        min = j
      }
    }
    if(min != i) {
      k = arr[min]
      arr[min] = arr[i]
      arr[i] = k
    }
  }
  return arr
}