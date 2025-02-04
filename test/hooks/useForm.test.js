import { renderHook , act} from '@testing-library/react-hooks'
import { UseForm } from '../../src/hooks/UseForm'

 describe('Pruebas en useForm', () => { 
   
    const initialForm = { 
        nameUser: 'Andres', 
        emailUser: 'G8F8C@example.com',
       
    }
    const newValue= 'Andres'
    test('debe de retornar los valores por defecto', () => {
        
        const { result } = renderHook( () => UseForm(initialForm) )
        console.log(result.current)
        expect(result.current).toEqual(
            {
                nameUser:initialForm.nameUser, 
                emailUser:initialForm.emailUser,
                formState:initialForm,
                handleInputChange:expect.any(Function),
                onResetForm:expect.any(Function)
            }
        )
       

        

    })

    test ('debe de cambiar el nameUser', () => {
        
        
        const { result } = renderHook( () => UseForm(initialForm) )
        const { handleInputChange } = result.current

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            })
        })

      
        expect(result.current.nameUser).toBe(newValue)
        expect(result.current.formState.nameUser).toBe(newValue)

    })
    test ('debe resetear el formulario', () => {

        const { result } = renderHook( () => UseForm(initialForm) )
        const { onResetForm,handleInputChange } = result.current

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            })
            onResetForm()
        })
        
        expect(result.current.nameUser).toBe(initialForm.nameUser)
        expect(result.current.formState.nameUser).toBe(initialForm.nameUser)

    })
 })