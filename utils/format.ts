import prettier from 'prettier/standalone'
import parserBabel from 'prettier/parser-babel'
import parserTypescript from 'prettier/parser-typescript'

export function formatWithPrettier(value: string): string {
  try {
    const next = prettier.format(value, {
      parser: 'babel',
      plugins: [parserBabel, parserTypescript],
    })
    return next
  } catch (err) {
    return value
  }
}

export function formatWithJSComments(value: string): string {
  const rows = value.trim().split('\n')
  const result = ['/**']

  rows.forEach((row) => {
    result.push(` * ${row}`)
  })

  result.push(' */')

  return result.join('\n').trim()
}
