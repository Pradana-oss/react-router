import React, {Component} from 'react'
import Containerright from './component/containerright';
class Container extends Component {
    
    render(){
        return(
            <div>
            <section className="row tm-pt-4 tm-pb-6">
                <div className="col-12 tm-page-cols-container">
                    <div className="tm-page-col-right">
                        <h2 className="tm-text-secondary tm-mb-5">
                            Nunc tristique velit ut semper
                        </h2>
                        <p className="tm-mb-6">
                            Homepage main photo is provided by <strong>Moose Photos</strong> from <strong>Pexels</strong>. Next Level CSS Template is brought to you by Template Mo website. You can feel free to adapt it for your websites. No need to put a footer credit link. Please kindly spread a word about us. Thank you. If you have any question, feel free to contact us on Facebook page.

                        </p>
                        <p className="mb-0">
                            Nullam nec dictum dolor. Sed ultricies purus nec suscipit vulputate. Fusce a massa eu orci
                            vulputate varius. Praesent id felis ac erat elementum condimentum. Pellentesque a
                            libero vitae nisi vestibulum tempor vitae vitae nulla. Praesent ut
                            eleifend ligula, nec pretium erat.
                        </p>
                    </div>
                </div>
            </section>
            <Containerright/>
            </div>
        )
    }
}

export default Container


