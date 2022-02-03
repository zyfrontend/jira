import React from 'react'
export interface Users {
  id: string
  name: string
  email: string
  title: string
  organization: string
  token: string
}
interface SearchPanelProps {
  users: Users[]
  param: {
    name: string
    personId: string
  }
  setParam: (param: SearchPanelProps['param']) => void
}
const SearchPanel: React.FC<SearchPanelProps> = ({ users, param, setParam }) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={evt =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={evt =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value={''}>负责人</option>
          {users.map(user => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}

export default SearchPanel
