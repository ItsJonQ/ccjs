import Head from 'next/head'
import * as React from 'react'
import { styled } from '../stitches.config'
import { Button } from '../components/Button'
import { CodeEditor } from '../components/CodeEditor'
import { Tooltip } from '../components/Tooltip'
import { formatWithPrettier, formatWithJSComments } from '../utils/format'
import { useOnKeyboardSave } from '../utils/useKeyboard'

const Page = styled('div', {
  color: '$text',
  display: 'flex',
  fontFamily: '$system',
  minHeight: '100vh',
  width: '100%',
})

const Pane = styled('div', {
  flex: 1,
  position: 'relative',
  padding: '$3 $3 $3 $1',
})

const LeftPane = Pane

const RightPane = styled(Pane, {
  borderLeft: '1px solid rgba(255,255,255,0.1)',
})

const ActionWrapper = styled('div', {
  position: 'absolute',
  top: 8,
  right: 8,
  zIndex: 999,
  display: 'inline-flex',
})

const ExampleContent = `
import * as React from "react";
import styled from "@emotion/styled";
import { useComponent } from "./useComponent";
import { type ComponentProps } from "./Component.types";

const View = styled("div")({});

export const Component = React.forwardRef((props, ref) => {
  const { children, ...rest } = useComponent(props);

  return (
    <View {...rest} ref={ref}>
      {children}
    </View>
  );
});

export default Component;
`

const initialContent = ExampleContent.trim()
const initialComments = formatWithJSComments(initialContent)

export default function Home() {
  const [content, setContent] = React.useState(initialContent)
  const [comments, setComments] = React.useState(initialComments)
  const contentRef = React.useRef(content)

  const updateContent = (next) => {
    contentRef.current = next
    setContent(next)
  }

  const formatContent = () => {
    const value = contentRef.current

    if (value) {
      const nextContent = formatWithPrettier(value)
      const nextComments = formatWithJSComments(nextContent)
      updateContent(nextContent)
      setComments(nextComments)
    }
  }

  useOnKeyboardSave(formatContent)

  return (
    <Page>
      <Head>
        <title>A tiny JS code comment converter app</title>
      </Head>
      <LeftPane>
        <ActionWrapper>
          <Tooltip title="Format on save (⌘ + S)">
            <Button onClick={formatContent}>Format</Button>
          </Tooltip>
        </ActionWrapper>
        <CodeEditor value={content} onChange={updateContent} />
      </LeftPane>
      <RightPane>
        <ActionWrapper>
          <Button primary>Copy</Button>
        </ActionWrapper>
        <CodeEditor value={comments} onChange={setComments} />
      </RightPane>
    </Page>
  )
}
