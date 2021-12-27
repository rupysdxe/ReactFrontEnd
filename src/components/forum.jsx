import React, {Component} from 'react';

class Forum extends Component {
    render() {
        return (
            <>
                <div className="accordion" id="accordionExample">


                    <div className="forum-object">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Discussion Started By Rupesh.
                            </button>
                        </h2>

                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                               File One
                            </div>
                        </div>




                    </div>





                </div>



            </>
        );
    }
}

export default Forum;