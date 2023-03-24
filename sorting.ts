// // Author: Olivia Clarke-Edwards

// // Testing for sorting algorithm
// // combinatorial-generators module https://www.npmjs.com/package/combinatorial-generators?activeTab=readme
// // const { combinations } = require('combinatorial-generators')
// // // import { assertEquals } from 'asserts'

// // const testGroup = [
// //   'John',
// //   'Mary',
// //   'Dhan-nun',
// //   'Aurora',
// //   'Rawiri',
// //   'Ben',
// //   'Alice',
// //   'Lily',
// //   'Jenny',
// //   'Ken',
// // ]

// // function fillArray() {
// //   const numTestArr = []
// //   for (let i = 0; i <= 9; i++) {
// //     numTestArr.push(i)
// //   }
// //   return numTestArr
// // }

// // console.log(fillArray())

// // const testArr = fillArray()

// // const allPermutations = [...combinations(testArr, 3)]

// // let group1: number[], group2: number[], group3: number[]

// // function getAllItersAndCombos(
// //   allPermutations: Array<[]>,
// //   numGroups = 3,
// //   numIterations = 2
// // ): void {
// //   const combinations = {} as Record<string, []>

// //   for (let iter = 0; iter < numIterations; iter++) {
// //     for (let groups = 0; groups < numGroups; groups++) {
// //       combinations[String(groups)] = []
// //       if (iter === 0) {
// //         getNext(allPermutations, iter)
// //         allPermutations.shift()
// //         console.log(group1)
// //         // console.log(allPermutations)
// //       }
// //       // allPermutations[groups * iter]
// //       // console.log(combinations)
// //     }
// //   }
// // }

// // function getNext(allPermutations: Array<[]>) {
// //   const split = allPermutations.length / 3
// //   console.log(split)
// //   group1 = allPermutations[0]
// //   group2 = allPermutations[split * 1.5]
// //   group3 = allPermutations[split * 2]
// //   console.log(group1, group2, group3)
// // }

// // getAllItersAndCombos(allPermutations)

// // console.log(sequences)

// /* WIP SOrting ALGO */

// function fillArray(n: number) {
//   const numTestArr = []
//   for (let i = 0; i < n; i++) {
//     numTestArr.push(i)
//   }
//   return numTestArr
// }

// const testArr = fillArray(20)

// /* RANDOMIZE ARRAY */
// const randomizeArrayIntoGroups = (
//   arr: number[],
//   groupSize: number,
//   previousGroups: Array<number[]>
// ) => {
//   /* THIS PART IS GOOD  */
//   let currentIndex = arr.length //starts at end of list
//   let randomIndex, tempValue
//   // While there are elements to shuffle
//   while (currentIndex !== 0) {
//     // Pick a remaining element
//     randomIndex = Math.floor(Math.random() * currentIndex) //generate random index
//     currentIndex--
//     // Swap it with the current element
//     tempValue = arr[currentIndex]
//     arr[currentIndex] = arr[randomIndex]
//     arr[randomIndex] = tempValue
//   }
//   /* END - THIS PART IS GOOD  */

//   /* MAKE GROUPS FROM RANDOMIZED ARRAY */
//   //WE HAVE TO FIX THIS

//   const groups = []
//   for (let i = 0; i < arr.length; i += groupSize) {
//     const group = arr.slice(i, i + groupSize)
//     // console.log(i + '. ', group)
//     // Check if any element in this group was previously grouped together
//     // const shouldReshuffle = group.some((element) =>
//     //   previousGroups.includes(element)
//     // )
//     // //INTERVENTION HERE!!!!!!!!!
//     // // If any element was previously grouped together, reshuffle the array and start over
//     // if (shouldReshuffle) {
//     //   randomizeArrayIntoGroups(arr, groupSize, previousGroups)
//     // }
//     // // Otherwise, add this group to the list of groups
//     groups.push(group)
//   }

//   const shouldReshuffle = groups.some((element) => {
//     previousGroups.includes(element)
//   })

//   if (shouldReshuffle) {
//     randomizeArrayIntoGroups(arr, groupSize, previousGroups)
//   }

//   return groups
// }

// /* RANDOMIZE GROUPS */
// const createRandomizedGroups = (
//   arrOfNames: number[],
//   numGroups: number,
//   iterations: number
// ) => {
//   const groupSize = Math.ceil(arrOfNames.length / numGroups) //should be 5
//   let previousGroups = [] as Array<number[]>
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

// createRandomizedGroups(testArr, 5, 4) // length of array must be divisible by number of groups for now
