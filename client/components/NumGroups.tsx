import { ChangeEvent, FormEvent, useState } from 'react'
import {} from '../apiClient'

function NumGroups() {
  const [num, updateNum] = useState(0)
  const [iterations, updateIterations] = useState(0)

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
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
