import { useState, FormEvent } from 'react'
import { addMember, getRandomName } from '../apiClient'
import { Member, ExternalMember } from '../../common/member'
import { useParams, useNavigate } from 'react-router-dom'

function AddMember() {
  const navigate = useNavigate()
  // const { id: memberID } = useParams()

  const [newName, setNewName] = useState('')

  const getExternalName = (e: FormEvent) => {
    e.preventDefault()
    getRandomName()
      .then((extMember) => setNewName(extMember.first + ' ' + extMember.last))
      .catch((err) => {
        console.log(err.message)
      })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const obj = {
      name: newName,
      group: null,
    }
    addMember(obj)
      .then(() => navigate('/'))
      .catch((err) => console.log(err.message))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newMember">New member name:</label>
        <input
          id="newMember"
          type="text"
          name="newMember"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        ></input>

        <button type="submit">SUBMIT NEW MEMBER</button>
      </form>
      <button onClick={getExternalName()}>GET A RANDOM NAME</button>
    </>
  )
}

export default AddMember
