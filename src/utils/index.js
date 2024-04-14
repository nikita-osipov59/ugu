export const arrayToMatrix = (arr) =>{
    let matrix_res = [], i, k;

    for(i = 0, k = -1; i< arr.length; i++){
        if(i % 6 === 0){
            k++
            matrix_res[k] = [];
        }
        matrix_res[k].push(arr[i]);
    }

    return matrix_res;
}