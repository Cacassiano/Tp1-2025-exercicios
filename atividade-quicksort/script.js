function quicksort(arr, ini, fim) {
    if(ini < fim) {
        let index = sort(arr, ini, fim);

        quicksort(arr,index+1, fim);
        quicksort(arr,ini, index-1);
    }
    

}

function sort(arr, ini, fim) {
    let index, pivot;
    index = ini-1;
    pivot = arr[fim]

    for (let i = ini ; i < fim; i++) {
        if(arr[i] <= pivot) {
            index++;

            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
        
    }
    index++;

    let temp = arr[index];
    arr[index] = arr[fim];
    arr[fim] = temp;
    
    return index;
}



let arr = [43,44,321,65,678,4,984,56456,8,66,128,6,8,333,895,2,44,21,5,5];
quicksort(arr, 0, arr.length-1); 
console.log(arr);
alert(arr);