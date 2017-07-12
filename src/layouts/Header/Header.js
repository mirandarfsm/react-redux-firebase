import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
    <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
        <div className='container'>
            <button type='button' className='navbar-toggler navbar-toggler-right' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                <span className="navbar-toggler-icon"></span>
            </button>
            <IndexLink to='/' className='navbar-brand' activeClassName=''>Teste</IndexLink>
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                <ul className="navbar-nav mr-auto"></ul>
                <form className='form-inline my-2 my-lg-0'>
                    <div className='input-group'>
                        <input type='text' className='form-control' placeholder='Search' />
                        <div className='input-group-btn'>
                            <button className="btn btn-secondary" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </nav>
)

export default Header
