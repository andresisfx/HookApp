import { UseCounter } from "../../src/hooks/UseCounter.js"
import { act,renderHook } from '@testing-library/react-hooks'

describe('Pruebas en useCounter', () => { 
    
    
    
    test('debe de retornar los valores por defecto', () => {
        
        const { result } = renderHook( () => UseCounter() )

        const { counter, increment, decrement, reset } = result.current;
        expect(counter).toBe(10)
        expect(increment).toEqual(expect.any(Function))
        expect(decrement).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))

     })
     test('Debe recibir el valor de 100',() => {
        const { result } = renderHook( () => UseCounter(100) )

        const { counter } = result.current;
        expect(counter).toBe(100)
     })
     test('Debe incrementar el contador',() => {
        const { result } = renderHook( () => UseCounter(100) )

        const { counter, increment } = result.current;

        act(() => {
            increment()
        })
         
        expect(result.current.counter).toBe(101)
     })

     test('Debe decrementar el contador',() => {
      const { result } = renderHook( () => UseCounter(100) )

      const { counter, decrement } = result.current;

      act(() => {
          decrement(3)
      })
       
      expect(result.current.counter).toBe(97)
   })
   test('Debe resetear el contador',() => {
      const { result } = renderHook( () => UseCounter(100) )

      const { counter, reset} = result.current;

      act(() => {
          reset()
      })
       
      expect(result.current.counter).toBe(100)
   })

})