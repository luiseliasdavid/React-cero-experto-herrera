import { fireEvent, getByTestId, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('Probando counter app', () => {
  const initialValue = 100

  xtest('should  match with snapshot', () => {
    
    const {container} = render(<CounterApp value={initialValue} />)

    expect(container).toMatchSnapshot(); 
  })
  test('counter should be 100 ', () => {
      render(<CounterApp value={initialValue} />)
     // screen.debug()
    // expect(screen.getByText(100)).toByTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(String(initialValue))
  })
  
  test('should increment with button +1', () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByTestId("+1")) 
    
    /* otra opcion por text
    expect(screen.getByText('11')).tobeTruthy();
    */
    expect(screen.getByTestId('h2').innerHTML).toContain("101")
  })

  test('should decrement with button -1', () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText("-1")) 
    
    /* otra opcion por text
    expect(screen.getByText('11')).tobeTruthy();
    */
    expect(screen.getByTestId('h2').innerHTML).toContain("99")
  })

  test('debe de funcionar el botón de reset', () => {
        
    render( <CounterApp value={ 355 } /> );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    // fireEvent.click( screen.getByText('Reset') );
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect( screen.getByText( 355 ) ).toBeTruthy();

});
  
  


})


