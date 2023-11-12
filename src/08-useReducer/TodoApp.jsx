import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del alma',
        done: false,
    }
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)

  return (
    <>
        <h1>TodoApp: 10 <small>Pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <form action="">
                    <input
                        type="text"
                        placeholder="¿Que tareas hay para realizar?"
                        className="form-control"
                     />
                     <button 
                        type="submit"
                        className="btn btn-outline-primary mt-1"
                    >
                        Agregar
                     </button>
                </form>
            </div>
        </div>

        
    </>
  )
}
