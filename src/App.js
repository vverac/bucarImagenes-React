import React, { Component } from 'react'
import Buscador from "./componenetes/Buscador";
import Resultado from './componenetes/Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start')
  }

  paginaAnterior = () => {
    //   console.log('anterior')
    // leer state de la pagina anterior
    let pagina = this.state.pagina;

    // leer si la pagina es 1 ya no ir hacia atras
    if (pagina === 1) return null;

    // restar 1 a la pagina actual
    pagina -= 1;

    // agrear el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll()
    })
  }


  paginaSiguiente = () => {
    // console.log('siguiente')
    // leer state de la pagina siguiente
    let pagina = this.state.pagina;

    // sumar 1 a la pagina actual
    pagina += 1;

    // agrear el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll()
    })
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`
    // console.log(url)

    // para leer la api(datos Json) necesitamos fetch
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))
  }



  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi()
    })
  }



  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>

          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className='row justify-content-center'>
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>


      </div>
    );
  }
}
export default App;


