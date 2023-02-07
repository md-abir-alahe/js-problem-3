// function findingBadData(ages){
//     if(Array.isArray(ages)){

//         let onlyNumber = 0;

//         for(let i = 0; i < ages.length; i++ ){
//             const index = i;
//             const element = ages[index];            
//             if(isNaN(element) || element==true || element==false || element){
//                 onlyNumber++;
//             }                       
//         }        
//         if(onlyNumber === 0){
//             let totalBadData = 0;
//             for(let i = 0; i < ages.length; i++){
//                 const index = i;
//                 const element = ages[index];
//                 if(element<0){
//                     totalBadData++;
//                 }               
//             }
//             return totalBadData;
//         }
//         return 'No string or bolean allowed inside array!';
//     }
//     return 'Please enter an array.';
// }
function findingBadData(ages){
    if(Array.isArray(ages)){
            let totalBadData = 0;
            for(let i = 0; i < ages.length; i++){
                const index = i;
                const element = ages[index];
                if(element<0){
                    totalBadData++;
                }               
            }
            return totalBadData;
    }
    return 'Please enter an array.';
}

const ages = [-4, -9, -5, -33, -55];
const passPerameter = findingBadData(ages);
console.log(passPerameter);