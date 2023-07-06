import React from 'react'
import Hijo from './Hijo'

const Padre = () => {
  return (
    <div>
        <h3>Padre</h3>
        <Hijo ajustes={ajustes} />
    </div>
  )
}

export default Padre