import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';


class Resultado extends Component {

    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;

        if (imagenes.length === 0) return null;
        // console.log(imagenes)

        return (
            <>
                <div className='row col-12 p-5'>

                    {imagenes.map(imagen => (
                        <Imagen
                            key={imagen.id}
                            imagen={imagen}
                        />
                    ))}
                </div>
                <Paginacion
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                />
            </>
        )
    }
    render() {
        return (
            <>
                {this.mostrarImagenes()}
            </>
        );
    }
}

export default Resultado;