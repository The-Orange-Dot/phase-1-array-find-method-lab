
// function superbowlWin() {
//   for (let item of record) {
//     if (item.result === "W") {
//       let winResult = item.year
//       return winResult
//     }
//     if (item.result.find())
//   }
// }

// function superbowlWin(item) {
//     let winResult = item.find( ({result}) => result === "W" )
//     if (winResult.result === "W") {
//       return winResult.year
//     } 
// }

function superbowlWin(record) {
  for (let item of record) {
    if (item.result === "W") {
      let winResult = item.year
      return winResult
    }
  }
}