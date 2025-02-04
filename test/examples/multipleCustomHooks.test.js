import { fireEvent, render , screen} from "@testing-library/react"
import { UseFetch } from "../../src/hooks/UseFetch"
import { UseCounter } from "../../src/hooks/UseCounter"
import { MultipleCustomHooks } from "../../src/Examples/MultipleCustomHooks"

jest.mock('../../src/hooks/UseFetch')  
jest.mock('../../src/hooks/UseCounter')


 describe('Pruebas en MultipleCustomHooks', () => { 

    const mockIncrement = jest.fn();

    UseCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
        
    })
    test('debe de mostrar el componente por defecto', () => {

        UseFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false
        })
        render(<MultipleCustomHooks/>)
        expect(screen.getByText('Loading...')).toBeTruthy()
        expect(screen.getByText('BreakingBad Quotes')).toBeTruthy()
        screen.debug();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy()
     })
     test('debe de mostrar un quote', () => {

        UseFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: false
        })
        render(<MultipleCustomHooks/>)
        expect(screen.getByText('Hola Mundo')).toBeTruthy()
        expect(screen.getByText('Fernando')).toBeTruthy()
        
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy()
        screen.debug();
     })

     test('debe de llamar ala funcion incrementar', () => {

        UseFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: false
        })
       
        render(<MultipleCustomHooks/>)
       
        
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton)
        expect(mockIncrement).toHaveBeenCalled()  
        screen.debug();
     })

 })