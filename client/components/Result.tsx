import { useState } from 'react'
import NumGroups from './NumGroups'

interface Props {
  numGroups: number
  numIters: number
}

function Result({ numGroups, numIters }: Props) {
  const [groups, setGroups] = useState(0)

  return (
    <>
      <p>{numGroups}</p> <p>{numIters}</p>
    </>
  )
}

export default Result
