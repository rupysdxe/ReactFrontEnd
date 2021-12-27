import React, {Component} from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <header id="header" >
                <nav className="navbar bg-white " id="header-nav">
                    <div className="col-md-3" id="home-header-logoAndImage">
                        <a className="navbar-brand" href="#">
                            <img id="home-logo" className="rounded-circle hover-blue" src="/images/pencil.png" alt="logo"/>
                            <img id="home-logo-text" className="rounded hover-blue" src="/images/logo-text-img.png" alt="logo-text"/>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a href="/">
                            <img id="home-home-logo" className="rounded-circle hover-blue" src="/images/home.svg" alt="home-home-logo"/>
                        </a>
                        <a href="/list">
                            <img id="home-human-logo" className="rounded-circle hover-blue" src="/images/human.svg"  alt="home-human-logo"/>
                        </a>
                        <a href="/forum">
                            <img id="home-forum-logo" className="rounded-circle hover-blue" src="/images/forum-img.svg" alt="home-forum-logo"/>
                        </a>


                    </div>

                    <div className="col-md-3">

                        <a href="/profile">
                            <img id="home-profile-img" className="rounded-circle hover-blue" src="/images/human.svg"  alt="profile"/>
                        </a>


                        <a href="#">
                            <img id="home-logout-logo" className="rounded-circle hover-red" src="/images/logout-img.svg"  alt="profile"/>
                        </a>
                    </div>

                </nav>
            </header>
        );
    }
}

export default HeaderComponent;