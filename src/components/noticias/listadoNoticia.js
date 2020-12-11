import React from 'react'
import PropTypes from 'prop-types'
import Noticias from './noticias'

const ListadoNoticia = ({noticias}) => {
    return (
        <div className='row'>
            {noticias.map((noticia) =>(
                <Noticias
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    )
}

ListadoNoticia.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default ListadoNoticia
