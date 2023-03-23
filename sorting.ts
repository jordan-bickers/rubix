// Author: Olivia Clarke-Edwards

// Testing for sorting algorithm
// combinatorial-generators module https://www.npmjs.com/package/combinatorial-generators?activeTab=readme
const { combinations } = require('combinatorial-generators')
// import { assertEquals } from 'asserts'

const testGroup = [
  'John',
  'Mary',
  'Dhan-nun',
  'Aurora',
  'Rawiri',
  'Ben',
  'Alice',
  'Lily',
  'Jenny',
  'Ken',
]

function fillArray() {
  const numTestArr = []
  for (let i = 0; i <= 9; i++) {
    numTestArr.push(i)
  }
  return numTestArr
}

console.log(fillArray())

const testArr = fillArray()

const allPermutations = [...combinations(testArr, 3)]

let group1: number[], group2: number[], group3: number[]

function getAllItersAndCombos(
  allPermutations: Array<[]>,
  numGroups = 3,
  numIterations = 2
): void {
  const combinations = {} as Record<string, []>

  for (let iter = 0; iter < numIterations; iter++) {
    for (let groups = 0; groups < numGroups; groups++) {
      combinations[String(groups)] = []
      if (iter === 0) {
        getNext(allPermutations, iter)
        allPermutations.shift()
        console.log(group1)
        // console.log(allPermutations)
      }
      // allPermutations[groups * iter]
      // console.log(combinations)
    }
  }
}

function getNext(allPermutations: Array<[]>) {
  const split = allPermutations.length / 3
  console.log(split)
  group1 = allPermutations[0]
  group2 = allPermutations[split * 1.5]
  group3 = allPermutations[split * 2]
  console.log(group1, group2, group3)
}

getAllItersAndCombos(allPermutations)

// console.log(sequences)
