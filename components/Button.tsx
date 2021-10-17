import { styled } from '../stitches.config'

export const Button = styled('button', {
  appearance: 'none',
  border: 'none',
  backgroundColor: '$backgroundLighter',
  color: '$text',
  fontFamily: '$system',
  fontWeight: 'bold',
  padding: '$1 $2',
  borderRadius: 6,
  boxShadow: '0 1px 2px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.2)',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#434E68',
  },
  '&:active': {
    backgroundColor: '$backgroundLighter',
  },
  variants: {
    primary: {
      true: {
        backgroundColor: '$purple500',
        '&:hover': {
          backgroundColor: '#7357E3',
        },
        '&:active': {
          backgroundColor: '$purple500',
        },
      },
    },
  },
})
