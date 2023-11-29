import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/useContext/HomePage"
import { UserContext } from "../../src/useContext/context/UserContext"

describe('Pruebs en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Sergio'
    }

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={ {user: null} } >
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect( preTag.innerHTML ).toBe( 'null' )
        // screen.debug()

    })

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={ {user} } >
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect( preTag.innerHTML ).toContain(user.id.toString())
        expect( preTag.innerHTML ).toContain(user.name)

        // screen.debug()

    })

})