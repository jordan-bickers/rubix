import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { getAllMembers } from '../apiClient'
import { useNavigate } from 'react-router-dom'
import { Member } from '../../common/member'

//  const navigate = useNavigate();
// useEffect(() => {
//   if (userIsInactive) {
//     fake.logout();
//     navigate("/session-timed-out");
//   }
// }, [userIsInactive]);
// }

interface Props {
  groupos: (groups: number, iterations: number, membs: Member[]) => void
}

function Form({ groupos }: Props) {
  const [members, setMembers] = useState([] as Member[])

  const [num, updateNum] = useState(1)
  const [iterations, updateIterations] = useState(1)
  const navigate = useNavigate()

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    groupos(num, iterations, members)
    navigate('/result')
  }

  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    updateNum(Number(evt.target.value))
  }

  const handleIterations = (evt: ChangeEvent<HTMLSelectElement>) => {
    updateIterations(Number(evt.target.value))
  }

  useEffect(() => {
    getAllMembers()
      .then((data) => {
        setMembers(data)
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
      <ul>
        {members.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Form
