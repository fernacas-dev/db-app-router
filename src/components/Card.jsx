import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({name, description, type, id}) => {
  
  const path = `/assets/${type}-${id}.png`
  

  return (
    <div className="card m-3 col-12 col-md-4" style={{
      width: 200,
    }}>
      <img loading="lazy" src={path} className="card-img-top" alt={id} />
      <div className="card-body">
        <h3 className="card-title">
          {name}
        </h3>
        <p className="card-text">
          <Link className="card-link" to={`/characters/${id}`}>Ver Mas</Link>
        </p>
      </div>
    </div>
  )
}

export default Card