import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en el hook useCounter', () => {

    test('Debe de retonar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() )
        const { counter, decrement, increment, reset } = result.current

        expect( counter ).toBe(10)
        expect( decrement ).toEqual(expect.any( Function ))
        expect( increment ).toEqual(expect.any( Function ))
        expect( reset ).toEqual(expect.any( Function ))

    })

    test('Debe de generar el counter con el valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) )
        const { counter} = result.current

        expect( counter ).toBe(100)
    })

    test('should be increment the counter', () => {

        const { result } = renderHook( () => useCounter(100) )
        const { counter, increment } = result.current

        act( () => {
            increment()
            increment(2)
        } )

        expect( result.current.counter ).toBe(103)

    })

    test('should be decrement the counter', () => {

        const { result } = renderHook( () => useCounter(100) )
        const { counter, decrement } = result.current

        act( () => {
            decrement()
            decrement(2)
        } )

        expect( result.current.counter ).toBe(97)

    })

    test('should be reset the counter', () => {

        const { result } = renderHook( () => useCounter(100) )
        const { counter, reset } = result.current

        act( () => {
            reset()
            reset(2)
        } )

        expect( result.current.counter ).toBe(100)

    })

})