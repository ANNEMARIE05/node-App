import "../../../public/assets/static/todolist.css"



export default function TodoList() {
    return(
        <>
            <div className="container" >
                <h1>BIENVENUE DANS TA TODOLIST</h1>
                <form action="#!">
                    <input type="text" id="tache" placeholder="Entrez une nouvelle tâche ici " /> 
                    <input type="button" value="Enregistrer" />
                </form>

                <table>
                    <thead>
                    <tr>
                        <th>#ID</th>
                        <th>TÂCHES</th>
                        <th>ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>


                    </tbody>
                </table>
            </div>
        </>
    )
}