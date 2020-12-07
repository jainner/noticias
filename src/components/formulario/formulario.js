import React from 'react';
import styles from './formulario.module.css'

const Formulario = () => {
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form>
                   <h2 className={styles.heading}>Encuentra Noticias Por Categorias</h2>
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
 
export default Formulario;