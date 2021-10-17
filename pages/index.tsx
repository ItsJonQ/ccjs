import Head from 'next/head'
import * as React from 'react'
import { styled } from '../stitches.config'
import { CodeEditor } from '../components/CodeEditor'
import { formatWithPrettier } from '../utils/prettier'
import { useOnKeyboardSave } from '../utils/useKeyboard'

const Box = styled('div', {})

const Text = styled('p', {
  fontFamily: '$system',
})

export default function Home() {
  const [content, setContent] = React.useState('')

  const formatContent = () => setContent(formatWithPrettier)
  useOnKeyboardSave(formatContent)

  return (
    <Box css={{ padding: 20 }}>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <button onClick={formatContent}>Format</button>
      <CodeEditor value={content} onChange={setContent} />
    </Box>
  )
}
