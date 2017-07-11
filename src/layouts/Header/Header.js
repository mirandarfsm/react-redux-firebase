import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
    <nav className='navbar navbar-default'>
        <div className='container'>
            <div className='navbar-header'>
                <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                    <span className='sr-only'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                </button>
                <IndexLink to='/' className='navbar-brand' activeClassName=''>Teste</IndexLink>
            </div>
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                <ul className='nav navbar-nav'></ul>
                <ul className='nav navbar-nav navbar-right'>
                    <form className='navbar-form navbar-right'>
                        <div className='input-group'>
                            <input type='text' className='form-control' placeholder='Search' />
                            <div className='input-group-addon'>
                                <a href='#'><span className='glyphicon glyphicon-search'></span></a>
                            </div>
                        </div>
                    </form>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header
