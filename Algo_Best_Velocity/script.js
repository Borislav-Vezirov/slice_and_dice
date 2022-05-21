
function solve(arr) {

    if(arr.length < 3){
        return 'error'
    }

    let result = {}

    currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i + 2] != undefined){

            let sum = arr[i] + arr[i + 1] + arr[i + 2];
            
            if( sum >= currentSum){
                currentSum = sum;
                result.sequence = [arr[i], arr[i + 1], arr[i + 2]];
                result.sum = sum;
            }
        }else{
            break;
        }
    }

    return result

}
console.log(solve([76, 80, 81, 77, 83, 78, 80]));