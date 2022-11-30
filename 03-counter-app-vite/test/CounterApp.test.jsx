import { getByTestId, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('Probando counter app', () => {
  const initialValue = 100

  test('should  match with snapshot', () => {
    
    const {container} = render(<CounterApp value={initialValue} />)

    expect(container).toMatchSnapshot(); 
  })
  test('counter should be 100 ', () => {
      render(<CounterApp value={initialValue} />)
      screen.debug()
    // expect(screen.getByText(100)).toByTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(String(initialValue))
  })
  


})


