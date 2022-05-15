import React from 'react'

const Paginacion = (props) => {
    return (
        <div className='py-3'>
            <button onClick={props.paginaAterior} type='button' className='btn btn-info mr-1'>Anterior </button>
            <button onClick={props.paginaSiguiente} type='button' className='btn btn-info '>Siguiente </button>

        </div>
    )
}

export default Paginacion;
