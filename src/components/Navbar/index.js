import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import history from '../../services/history';

function Navbar() {
    const [collapseButton, setCollapseButton] = useState('');
    const [ariaExpanded, setAriaExpanded] = useState('false');
    const [navbarCollapse, setNavbarCollapse] = useState('');
    const [navbarStyle, setNavbarStyle] = useState({});
    const [searchField, setSearchField] = useState('');

    async function collapse() {
        setNavbarCollapse('collapsing');

        setNavbarStyle({ height: '268px' });

        await setTimeout(() => {  
            setNavbarStyle({});
            
            if (collapseButton === '') {
                setNavbarCollapse('show')
                
                setCollapseButton('collapsed');
                
                setAriaExpanded('true');
            } else {
                setNavbarCollapse('');

                setCollapseButton('');
        
                setAriaExpanded('false');
            }
        }, 200);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (searchField.length < 3) {
            alert('Type a valid Pokemon name');
        } else {
            history.push(`/pokemon-list/#/results/${searchField}`);

            window.location.reload();
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Pokemon list</Link>

            <button
                className={`navbar-toggler ${collapseButton}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={ariaExpanded}
                aria-label="Toggle navigation"
                onClick={collapse}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className={`collapse navbar-collapse ${navbarCollapse}`}
                id="navbarSupportedContent"
                style={navbarStyle}
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorites">Favorites</Link>
                    </li>
                </ul>

                <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchField}
                        onChange={event => setSearchField(event.target.value)}
                    />
                    
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;