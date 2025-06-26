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

let arr = []
for(i = 0; i<10;i++) {
    arr.push(parseInt(Math.random()*100))
}
quicksort(arr, 0, arr.length-1); 
console.log(arr);
alert(arr);