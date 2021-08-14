import React from 'react';
import '../css/LoginCard.css';
import Header from '../Header';
import Footer from '../Footer';
import {Link} from 'react-router-dom';

function RegisterCardUI() {
    return (
        <div>
            {/*Header Start*/}

            <Header />

            {/*Header End */}

            <div id="editor-background">
                <div id="editorMain-background">

                    <Link id="link" to="#">
                        <div id="des">
                            <div className="editor-home">Admin Register</div>
                        </div>
                    </Link>

                    <Link id="link" to="#">
                        <div id="des2">
                            <div className="editor-home">Customer Register</div>
                        </div>
                    </Link>

                </div>
            </div>
            <Footer/>

            

        </div>
    );
}

export default RegisterCardUI;
