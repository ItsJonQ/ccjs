import { useCallback, useEffect, useState } from 'react'

import { copyToClipboard } from './clipboard'

export function useClipboard(text: string, timeout: number = 1500) {
  const [hasCopied, setHasCopied] = useState(false)

  const onCopy = useCallback(() => {
    const didCopy = copyToClipboard(text)
    setHasCopied(didCopy)
  }, [text])

  useEffect(() => {
    if (hasCopied) {
      const id = setTimeout(() => {
        setHasCopied(false)
      }, timeout)

      return () => clearTimeout(id)
    }
    return undefined
  }, [timeout, hasCopied])

  return { hasCopied, onCopy, value: text }
}
