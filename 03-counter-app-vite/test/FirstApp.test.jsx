import { getByTestId, render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en FirstApp', () => {
  const title = 'hola soy goku'
  const subtitle = 'no hay subtitulo'
  const name = 'luis'
  
  test('debe hacer match con el snapshop ', () => {
    const { container, getAllByText, getByTestId } = render(
      <FirstApp title={title} subtitle={subtitle} name={name} />,
    )
    expect(getAllByText(title)).toBeTruthy()

    expect(getByTestId('h1').innerHTML).toContain(title)
  })
  
  
  test('debe mostrar el mensaje hola soy goku ', () => {
    render(<FirstApp title={title} subtitle={subtitle} name={name} />)

    expect(screen.getAllByText(title)).toBeTruthy()
  })

  test('debe mostrar un titulo h1 ', () => {
    render(<FirstApp title={title} subtitle={subtitle} name={name} />)
    
    expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title)
  })
  test('debe mostrar un titulo h1 ', () => {
    render(<FirstApp title={title} subtitle={subtitle} name={name} />)
    
    expect(screen.getAllByText(subtitle).length).toBe(2)
  })
})
