import { render , screen} from "@testing-library/react"

import { MultipleCustomHooks } from "../../src/Examples/MultipleCustomHooks"


 describe('Pruebas en MultipleCustomHooks', () => { 
    test('debe de mostrar el componente por defecto', () => {

        render(<MultipleCustomHooks/>)
        expect(screen.getByText('Loading')).toBeTruthy()

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        expect(nextButton.disabled).toBeTruthy()
     })

 })