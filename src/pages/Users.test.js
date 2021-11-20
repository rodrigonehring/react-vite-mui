import React from 'react'

import Users from './Users'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

function setup(props = {}) {
  return (
    <MemoryRouter>
      <Users {...props} />
    </MemoryRouter>
  )
}

it('render properly with image import and router', () => {
  const { getByText } = render(setup())
  const button = getByText('home')
  expect(button).toBeTruthy()
  expect(button.getAttribute('href')).toBe('/')
})
