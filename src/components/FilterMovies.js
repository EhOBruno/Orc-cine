import React from 'react'

const FilterMovies = (props) => {
     function onFilterValueChange(event){
        props.onFilterValueSelected(event.target.value)
     }
  return (
    <div>
        <select name='Filtrar' onChange={onFilterValueChange}>
            <option value="en">Filmes em Inglês</option>
            <option value="es">Filmes em Espanhol</option>
            <option value="pt">Filmes em Portugues</option>
        </select>
    </div>
  )
}
export default FilterMovies