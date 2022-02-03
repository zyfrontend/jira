import React, { useState, useEffect } from 'react'
import * as qs from 'qs'
import SearchPanel from './search-panel'
import List from './list'
import { cleanObject, useMount, useDebounce } from '../utils'

// url
const apiUrl = 'http://localhost:9999'

const ProjectListScreen: React.FC = () => {
  const [users, setUsers] = useState([])

  const [param, setParam] = useState({
    name: '',
    personId: '',
  })
  const [list, setList] = useState([])
  const debounceParam = useDebounce(param, 500)
  useEffect(async () => {
    const res = await fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`)
    if (res.ok) {
      setList(await res.json())
    }
  }, [debounceParam])
  useMount(async () => {
    const res = await fetch(`${apiUrl}/users`)
    if (res.ok) {
      setUsers(await res.json())
    }
  })

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  )
}
export default ProjectListScreen
