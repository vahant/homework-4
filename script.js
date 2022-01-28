

/*const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6, 2]

const arra = arr1.concat(arr2)
console.log(arra)

const arrb = arr1.fill(6, 1)
console.log(arrb)

const arrc = arr2.find(e => e <5)
console.log(arrc)

const arrd = arr2.findIndex(e => e<5)
console.log(arrd)

const arr3 = [1, 3, 5, [5, 8, [11, 19]]]
const arre = arr3.flat(2)
console.log(arre)

const arrf = arr2.map(e => e + 1)
console.log(arrf)

const arrg = arr2.reduce((prevalue, curvalue) => prevalue + curvalue)
console.log(arrg)*/



const arr = [1, 16, 57, 12, 16,  21]

function isunique(array){
    for(i = 0; i<array.length; i ++){
        for(z = 0; z< array.length; z++){
            if(i!=z && array[i]==array[z]){
                return false
            }
        }
    }
    return true
}

console.log(isunique(arr))

function isisogram(string){
    for(i = 0; i<string.length; i ++){
        for(z = 0; z< string.length; z++){
            if(i!=z && string[i]==string[z]){
                return false
            }
        }
    }
    return true
}

const word = "ambidextrously"
console.log(isunique(word))
console.log(isisogram(word))

//lodashy chhaskaca vonc install anem
_.intersection([3, 2, 4, 6], [5, 3, 2, 6])
//=> [3, 2]

const array = [2, 3, 5, 1, 2, 4]
_.pull(array, 2, 4)
//=> [3, 5, 1]

_.tail(array)
//=> [3, 5, 1, 2, 4]

_.take(array)
//=> [3]

_.take(array, 3)
//=> [3, 5, 1]
