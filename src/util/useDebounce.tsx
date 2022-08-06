import React from 'react'

const useDebounce = (debounceText: string) => {
  const [ready, setReady] = React.useState(false)
  const [result, setResult] = React.useState('')
  const debounceFnTimeout = React.useRef<NodeJS.Timeout>()

  React.useEffect(() => {
    if (debounceFnTimeout.current) {
      clearTimeout(debounceFnTimeout.current)
    }
    setReady(false)
    debounceFnTimeout.current = setTimeout(() => {
      setReady(true)
      setResult(debounceText)
    }, 1000)

    return () => {
      if (debounceFnTimeout.current) {
        clearTimeout(debounceFnTimeout.current)
      }
    }
  }, [debounceText])

  return {ready, result}
}

export default useDebounce
