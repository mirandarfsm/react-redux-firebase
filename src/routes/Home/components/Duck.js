import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './Duck.scss'

export const Duck = () => (
    <div className='col-sm-3 col-md-3'>
        <div className="card">
            <img src="Duck.jpg" className="card-img-top duck" alt="..." />
            <div className="card-block">
                <h3 className="card-title">Title</h3>
                <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
                <p className="card-text">Text</p>
            </div>
        </div>
    </div>
)

export default Duck