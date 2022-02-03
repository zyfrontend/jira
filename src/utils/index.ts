import { useEffect, useState } from 'react'

export const isFalsy = (value: unknown) => (value === 0 ? false : !value)
// 在一个函数里面 改变传入的对象本身是不好的
export const cleanObject = (object: object) => {
  // Object.assign({}, object)
  const result = { ...object }
  Object.keys(result).forEach(key => {
    /* eslint-disable */
    // @ts-ignore
    const value = result[key]
    if (isFalsy(value)) {
    /* eslint-disable */
      // @ts-ignore
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
}

// 用泛型来规划 any
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    // 每次在 value 变化以后 设置一个 定时器
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    // 每次在上一个 useEffect 处理完之后再运行
    return () => clearTimeout(timer)
  }, [value, delay])
  return debouncedValue
}


export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray)
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value,item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value]
      copy.splice(index, 1)
      setValue(copy)
    }
  }
}
