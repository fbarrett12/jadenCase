
// function jadenCase(str){
//   casedArr = []
//   str = this.split(" ")
//   for(i=0; i < str.length; i++){
//     if(str[i][0] === str[i][0].toUpperCase()){
//       casedArr.push(str[i])
//     } else {
//       capFirst = str[i].slice(0,1).toUpperCase()
//       restOfWord = str[i].slice(1)

//       casedArr.push(capFirst + restOfWord)
//     }
//   }
//   return casedArr.join(" ")
// }

// jadenCase("The rain in Spain")

function jadenCaseTwo(str){
  let str = str.split(" ")
  let newArr = str.map(x => x[0].toUpperCase() + x.slice(1))
  return newArr.join(" ")
}

jadenCaseTwo("The rain in Spain one more word")