import prettier from 'prettier/standalone'
import parserBabel from 'prettier/parser-babel'
import parserTypescript from 'prettier/parser-typescript'

export function formatWithPrettier(value: string) {
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
