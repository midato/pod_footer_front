import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { screen } from '@testing-library/dom'
import { Footer } from './Footer'

describe('pruebas de footer', () => {
  let container = null
  beforeEach(() => {
    container = document.createElement('footer')
    document.body.appendChild(container)
  })
  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })
  it('render footer', () => {
    act(() => {
      render(<Footer />, container)
    })
    const footer = screen.getByTestId('footer')
    expect(footer).toBeTruthy()
  })
})
