import React from 'react'
import Formulario from './components/formulario/formulario'
import Header from './components/header/header'

function App() {
	return (
		<>
			<Header title='Buscador de noticias'/>
			<div className='container white'>
				<Formulario/>
			</div>
		</>
	);
}

export default App;
