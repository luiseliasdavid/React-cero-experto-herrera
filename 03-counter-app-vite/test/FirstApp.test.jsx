import {render} from '@testing-library/react' 
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en FirstApp', () => {
  test('debe hacer match con el snapshop ', () => {
    
    const title= "hola soy goku"
    const subtitle= 'no hay subtitulo'
    const name= 'luis'
     render(<FirstApp title={title} subtitle={subtitle} name={name}  />)

  })
  
})
