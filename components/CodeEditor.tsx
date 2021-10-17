import { Controlled as CodeMirror } from 'react-codemirror2'

if (typeof navigator !== 'undefined') {
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/jsx/jsx')
  require('codemirror/mode/htmlmixed/htmlmixed')
  require('codemirror/mode/diff/diff')
  require('codemirror/addon/edit/closebrackets')
  require('codemirror/addon/edit/matchbrackets')
  require('codemirror/addon/edit/matchtags')
  require('codemirror/addon/edit/closetag')
  require('codemirror/addon/fold/xml-fold')
  require('codemirror/addon/scroll/simplescrollbars')
  require('codemirror/addon/selection/active-line')
  require('codemirror/addon/display/autorefresh')
}

export function CodeEditor({ value, onChange }) {
  return (
    <CodeMirror
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
