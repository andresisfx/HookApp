import { UseCounter } from "../../src/hooks/UseCounter.js"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en useCounter', () => { 
    
    
    
    test('debe de retornar los valores por defecto', () => {
        
        const { result } = renderHook( () => UseCounter() )

        const { counter, increment, decrement, reset } = result.current;
        expect(counter).toBe(10)
        expect(increment).toEqual(expect.any(Function))
        expect(decrement).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))

     })


})