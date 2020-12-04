import React, {Component} from 'react'

class Welcome extends Component {

    render(){
        return(
            <div className="row tm-welcome-row">
                <div className="col-12 tm-page-cols-container">
                    <div className="tm-page-col-left tm-welcome-box tm-bg-primary">
                        <p className="tm-welcome-text">
                            <em>"Hello, this is a clean layout. left side is the text and right
                                side is a parallax image."</em>
                        </p>
                    </div>
                    <div className="tm-page-col-right">
                        <div
                            className="tm-welcome-parallax"
                            data-parallax="scroll"
                            data-image-src="img/blue-contem-girl.jpg"
                        ></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
