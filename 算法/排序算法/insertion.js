// 插入排序
/*
插入排序
插入排序从小到大排序：首先位置1上的数和位置0上的数进行比较，如果位置1上的数大于位置0上的数，将位置0上的数向后移一位，将1插入到0位置，否则不处理。位置k上的数和之前的数依次进行比较，如果位置K上的数更大，将之前的数向后移位，最后将位置k上的数插入不满足条件点，反之不处理。
*/

var insertionSort = function(arr) {
  var n = arr.length
  var temp = null
  for(var i = 1; i < n; i++) {
    if(arr[i] < arr[i-1]) {
      temp = arr[i]
      for( j = i; arr[j-1] > temp; j--) {
         arr[j] = arr[j-1]
      }
      arr[j] = temp
    }
  }

  return arr
}