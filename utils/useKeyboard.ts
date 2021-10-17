import * as React from 'react'

export function useOnKeyboardSave(fn) {
  React.useEffect(() => {
    const handleOnKeyDown = (event) => {
      if (event.key === 's' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault()
        fn && fn()
      }
    }
    window.addEventListener('keydown', handleOnKeyDown)
    return () => {
      window.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [])
}
