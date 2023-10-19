import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { screen } from '@testing-library/dom'
import App from './App'

describe('pruebas de APPJS', () => {
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
      render(<App />, container)
    })
    const footer = screen.getByTestId('footer')
    expect(footer).toBeTruthy()
  })
})
