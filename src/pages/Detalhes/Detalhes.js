import { useParams } from "react-router-dom"

function Detalhes() {

  const {id} = useParams()
  console.log(id)

  return (
    <h1>Página de detalhes</h1>
  )
}

export default Detalhes