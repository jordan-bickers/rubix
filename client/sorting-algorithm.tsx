import { Member } from '../common/member'

/* RANDOMIZE ARRAY */
const randomizeArrayIntoGroups = (
  arr: Member[],
  groupSize: number,
  previousGroups: Array<Member[]>
) => {
  /* THIS PART IS GOOD  */
  let currentIndex = arr.length //starts at end of list
  let randomIndex, tempValue
  // While there are elements to shuffle
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex) //generate random index
    currentIndex--
    // Swap it with the current element
    tempValue = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] = tempValue
  }
  /* END - THIS PART IS GOOD  */

  /* MAKE GROUPS FROM RANDOMIZED ARRAY */
  //WE HAVE TO FIX THIS

  const groups = []
  for (let i = 0; i < arr.length; i += groupSize) {
    const group = arr.slice(i, i + groupSize)
    // console.log(i + '. ', group)
    // Check if any element in this group was previously grouped together
    // const shouldReshuffle = group.some((element) =>
    //   previousGroups.includes(element)
    // )
    // //INTERVENTION HERE!!!!!!!!!
    // // If any element was previously grouped together, reshuffle the array and start over
    // if (shouldReshuffle) {
    //   randomizeArrayIntoGroups(arr, groupSize, previousGroups)
    // }
    // // Otherwise, add this group to the list of groups
    groups.push(group)
  }

  const shouldReshuffle = groups.some((element) => {
    previousGroups.includes(element)
  })

  if (shouldReshuffle) {
    randomizeArrayIntoGroups(arr, groupSize, previousGroups)
  }

  return groups
}

/* RANDOMIZE GROUPS */
const createRandomizedGroups = (
  arrOfNames: Member[],
  numGroups: number,
  iterations: number
) => {
  const groupSize = Math.ceil(arrOfNames.length / numGroups) //should be 5
  let previousGroups = [] as Array<Member[]>
  // Create groups for each iteration
  const result = [] as Array<Array<Member[]>>
  for (let i = 0; i < iterations; i++) {
    const groups = randomizeArrayIntoGroups(
      arrOfNames,
      groupSize,
      previousGroups
    )
    previousGroups.push(...groups)
    // Reset previousGroups if it exceeds a certain length to avoid memory issues
    if (previousGroups.length > arrOfNames.length) {
      previousGroups = previousGroups.slice(-arrOfNames.length)
    }
    console.log(`Iteration ${i + 1}:`)
    console.log(groups)
    console.log()
    result.push(groups)
  }
  return result
}

export default createRandomizedGroups
