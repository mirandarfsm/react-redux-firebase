import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import Duck from './Duck'

export class HomeView extends React.Component {
  render () {
    const ducks = [0,1,2,3].map((id,index) => <Duck key={index} />) 
    return (
      <div>
        <div className='jumbotron'>
            <div className='text-center'>
                <h1>Teste</h1>
                <p>Uma nova ideia</p>
                <p>
                  <a className='btn btn-primary btn-lg' href='#' role='button'>
                    Clique aqui!
                  </a>
                </p>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12 col-md-12 text-center'>
                <h3 className=''>Perto de você</h3>
                <p><i className="fa fa-chevron-down" aria-hidden="true"></i></p>
                <br />
            </div>
        </div>
        <div className='row'>
            {ducks}
        </div>
      </div>
    )
  }
}

export default HomeView
