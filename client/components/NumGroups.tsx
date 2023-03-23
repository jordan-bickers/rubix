import { ChangeEvent, FormEvent, useState } from 'react'
import {} from '../apiClient'
import { useNavigate } from 'react-router-dom'

//  const navigate = useNavigate();
// useEffect(() => {
//   if (userIsInactive) {
//     fake.logout();
//     navigate("/session-timed-out");
//   }
// }, [userIsInactive]);
// }

interface Props {
  groupos: (groups: number, iterations: number) => void
}

function NumGroups({ groupos }: Props) {
  const [num, updateNum] = useState(1)
  const [iterations, updateIterations] = useState(1)

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    groupos(num, iterations)
    console.log('num', num)
    console.log('iterations', iterations)
  }

  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    updateNum(Number(evt.target.value))
  }

  const handleIterations = (evt: ChangeEvent<HTMLSelectElement>) => {
    updateIterations(Number(evt.target.value))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numberOfGroups">
          Select Number of Groups:
          <select
            id="numberOfGroups"
            name="numberOfGroups"
            onChange={handleChange}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>

        <label htmlFor="numberOfIterations">
          Select Number of Iterations:
          <select
            id="numberOfIterations"
            name="numberOfIterations"
            onChange={handleIterations}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default NumGroups
