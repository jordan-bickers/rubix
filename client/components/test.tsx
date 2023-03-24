// const randomizeArrayIntoGroups = (arr, groupSize, previousGroups) => {
//   let currentIndex = arr.length
//   let randomIndex, temp
//   // While there are elements to shuffle
//   while (currentIndex !== 0) {
//     // Pick a remaining element
//     randomIndex = Math.floor(Math.random() * currentIndex)
//     currentIndex--
//     // Swap it with the current element
//     temp = arr[currentIndex]
//     arr[currentIndex] = arr[randomIndex]
//     arr[randomIndex] = temp
//   }
//   const groups = []
//   for (let i = 0; i < arr.length; i += groupSize) {
//     const group = arr.slice(i, i + groupSize)
//     // Check if any element in this group was previously grouped together
//     const shouldReshuffle = group.some((element) =>
//       previousGroups.some((previousGroup) => previousGroup.includes(element))
//     )
//     // If any element was previously grouped together, reshuffle the array and start over
//     if (shouldReshuffle) {
//       randomizeArrayIntoGroups(arr, groupSize, previousGroups)
//     }
//     // Otherwise, add this group to the list of groups
//     groups.push(group)
//   }
//   return groups
// }
// const createRandomizedGroups = (
//   arrOfNames: number[],
//   numGroups: number,
//   iterations: number
// ) => {
//   const groupSize = Math.ceil(arrOfNames.length / numGroups)
//   let previousGroups = []
//   // Create groups for each iteration
//   for (let i = 0; i < iterations; i++) {
//     const groups = randomizeArrayIntoGroups(
//       arrOfNames,
//       groupSize,
//       previousGroups
//     )
//     previousGroups.push(...groups)
//     // Reset previousGroups if it exceeds a certain length to avoid memory issues
//     if (previousGroups.length > arrOfNames.length) {
//       previousGroups = previousGroups.slice(-arrOfNames.length)
//     }
//     console.log(`Iteration ${i + 1}:`)
//     console.log(groups)
//     console.log()
//   }
// }
