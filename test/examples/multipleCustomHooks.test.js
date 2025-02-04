import { render , screen} from "@testing-library/react"

import { MultipleCustomHooks } from "../../src/Examples/MultipleCustomHooks"


 describe('Pruebas en MultipleCustomHooks', () => { 
    test('debe de mostrar el componente por defecto', () => {

        render(<MultipleCustomHooks/>)
        expect(screen.getByText('Loading...')).toBeTruthy()
        expect(screen.getByText('BreakingBad Quotes')).toBeTruthy()
        screen.debug();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy()
     })

 })