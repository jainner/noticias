import React,{useEffect, useState} from 'react'
import Formulario from './components/formulario/formulario'
import Header from './components/header/header'
import ListadoNoticia from './components/noticias/listadoNoticia'

function App() {

	const [categoria,guardarCategoria] = useState('')
	const [noticias,guardarNoticias] = useState([])
	
	useEffect(()=>{
		const consultarApi = async () =>{
			const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=9964a666e5f443e298488676ed8a1424`

			const respuesta = await fetch(url)
			const noticias = await respuesta.json()

			guardarNoticias(noticias.articles)
		}

		consultarApi()

	},[categoria])

	return (
		<>
			<Header title='Buscador de noticias'/>
			<div className='container white'>
				<Formulario
					guardarCategoria={guardarCategoria}
				/>
				<ListadoNoticia
					noticias={noticias}
				/>
			</div>
		</>
	);
}

export default App;
