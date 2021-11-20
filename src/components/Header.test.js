import React from 'react'

import Header from './Header'
import { render } from '@testing-library/react'

it('renders user name', () => {
  const { getByText } = render(<Header user={{ name: 'friend' }} />)

  expect(getByText('hello friend')).toBeTruthy()
})

it('renders guest when no user', () => {
  const { getByText } = render(<Header />)

  expect(getByText('hello Guest')).toBeTruthy()
})
