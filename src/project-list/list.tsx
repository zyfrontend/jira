import React from 'react'
interface Users {
  id: string
  name: string
  email: string
  title: string
  organization: string
}
interface Project {
  id: string
  name: string
  personId: string
  pin: boolean
  organization: string
}
interface List {
  list: Project[]
  users: Users[]
}
const List: React.FC<List> = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map(project => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default List
