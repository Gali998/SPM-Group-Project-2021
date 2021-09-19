import React from 'react';
import '../css/cardStyle.css';
import Header from '../Header';
import Footer from '../Footer';
import {Link} from 'react-router-dom';

function LoginCardUI() {
    return (
        <div>
            {/*Header Start*/}

            <Header />

            {/*Header End */}

            <div id="editor-background">
                <div id="editorMain-background">

                    <Link id="link" to="/login">
                        <div id="des">
                            <div className="editor-home">Admin Login</div>
                        </div>
                    </Link>

                    <Link id="link" to="/user-login">
                        <div id="des2">
                            <div className="editor-home">Customer Login</div>
                        </div>
                    </Link>

                </div>
            </div>
            <Footer/>

            

        </div>
    );
}

export default LoginCardUI;
