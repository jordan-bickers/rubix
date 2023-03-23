import { useState } from 'react'
import Form from './Form'

interface Props {
  numGroups: number
  numIters: number
}

function Result({ numGroups, numIters }: Props) {
  const [groups, setGroups] = useState(0)

  const fillArray = () => {
    const numTestArr = []
    for (let i = 0; i < 20; i++) {
      numTestArr.push(`${i}`)
    }
    console.log(numTestArr)
    return numTestArr
  }

  return (
    <>
      {fillArray()}
      <p>{numGroups}</p> <p>{numIters}</p>
    </>
  )
}

export default Result
