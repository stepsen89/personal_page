function nextSmaller(n) {
  let array = n.toString().split("");
  let array2 = [];
  array.forEach((s) => array2.push(Number(s)));

  const swapfc = (arr, ia, ib) => {
    let tmp = arr[ia];
    arr[ia] = arr[ib];
    arr[ib] = tmp;
  };

  console.log(array2);

  for (let i = (array2.length-1); i>0; i--){
    console.log('here');
    if (array2[i] < array2[i-1]){
      if (array2[i] === 0){
        if (array2[i+1] < array2[i-1]){
          let moved = array2[i+1]
          array2.splice((i+1), 1);
          array2.splice((i-1), 0, moved);    
          return array2      
          console.log(array2)
          console.log("ez")
        } else {
          console.log(jlj);
          return -1;
        }

      } else {
      swapfc(array2, i, i-1);
      return Number(array2.join(""));
      }
    }
  }

  return -1
}


function nextBigger(n) {
  const digitSort = (n) => n.toString().split('').sort((a, b) => b - a).join('')
  if (n.toString() === digitSort(n)) return -1;
  for (i = n + 1; i <= parseInt(digitSort(n)); i++) {
    if (digitSort(i) === digitSort(n)) return i;
  }
}

nextsmaller2(513)