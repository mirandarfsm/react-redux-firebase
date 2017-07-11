import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './Duck.scss'

export const Duck = () => (
    <div>
        <div className='col-sm-3 col-md-3'>
            <div className='thumbnail'>
                <img src='Duck.jpg' className='duck' alt='...' />
                <div className='caption'>
                    <h3>Teste</h3>
                    <span>fodd</span>
                    <p>Bla bla</p>
                </div>
            </div>
        </div>
    </div>
)

export default Duck