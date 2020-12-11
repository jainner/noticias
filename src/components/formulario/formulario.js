import React from 'react';
import PropTypes from 'prop-types'

import styles from './formulario.module.css'
import useSelect from '../../hooks/useSelect'


const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value:'general',label:'General'},
        {value:'business',label:'Negocios'},
        {value:'entertainment',label:'Entretenimiento'},
        {value:'science',label:'Ciencia'},
        {value:'sports',label:'Deporte'},
        {value:'technology',label:'Tecnologia'},
        {value:'health',label:'Salud'}
    ]

    const [categoria,SelectNoticias] = useSelect('general',OPCIONES)

    const handleBuscar = (e)=>{
        e.preventDefault()
        guardarCategoria(categoria)
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form onSubmit={handleBuscar}>
                   <h2 className={styles.heading}>Encuentra Noticias Por Categorias</h2>

                   <SelectNoticias/>

                   <div className='input-ield col s12'>
                       <input
                        type='submit'
                        className={`${styles.btn_block} btn-large amber darken-2`}
                        value='buscar'
                       />
                   </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
	guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;