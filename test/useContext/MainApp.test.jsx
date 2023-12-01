
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/useContext/MainApp"
import { render, screen } from "@testing-library/react"

describe('Pruebas en MainApp', () => {

    test('Debe de mostrar el HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )

        expect( screen.getByText('Home Page') ).toBeTruthy()

    })

    test('Debe de mostrar el LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )

        expect( screen.getByText('Login Page') ).toBeTruthy()

    })

    test('Debe de mostrar el About', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        )

        expect( screen.getByText('About') ).toBeTruthy()

    })

})