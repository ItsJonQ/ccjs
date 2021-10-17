import { Controlled as CodeMirror } from 'react-codemirror2'
import { styled } from '../stitches.config'

if (typeof navigator !== 'undefined') {
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/jsx/jsx')
  require('codemirror/mode/htmlmixed/htmlmixed')
  require('codemirror/mode/diff/diff')
  require('codemirror/addon/comment/comment')
  require('codemirror/addon/comment/continuecomment')
  require('codemirror/addon/edit/closebrackets')
  require('codemirror/addon/edit/matchbrackets')
  require('codemirror/addon/edit/matchtags')
  require('codemirror/addon/edit/closetag')
  require('codemirror/addon/fold/xml-fold')
  require('codemirror/addon/scroll/simplescrollbars')
  require('codemirror/addon/selection/active-line')
  require('codemirror/addon/display/autorefresh')
}

type CodeEditorProps = {
  value: string
  onChange?: (value: string) => void
}

const StyledEditor = styled(CodeMirror, {
  minHeight: '100%',
  '& .CodeMirror': {
    height: '100%',
  },
})

export function CodeEditor({ value, onChange }: CodeEditorProps) {
  return (
    <StyledEditor
      options={{
        mode: 'jsx',
        theme: 'ayu-mirage',
        lineNumbers: true,
        tabSize: 2,
      }}
      value={value}
      onBeforeChange={(_, __, value) => {
        onChange && onChange(value)
      }}
    />
  )
}
