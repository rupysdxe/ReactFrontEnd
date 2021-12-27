import React, {Component} from 'react';

class LeftComponent extends Component {
    render() {
        return (
            <div >
                <div>
                    <ul className="list-group-flush" id="trending-list">
                        <div>
                            <li className="list-group list-group-item trendingListItem text-center rounded-3" aria-current="true">
                                <img id="trending-logo" className="rounded-circle" src="/images/trending-logo.svg" alt="Trending Logo"/>
                                Trending</li>
                        </div>
                        <div>
                            <li className="list-group-item trendingListItem text-center rounded-3 hover-lightgray" aria-current="true">One</li>
                        </div>
                        <div>
                            <li className="list-group-item trendingListItem text-center rounded-3 hover-lightgray" aria-current="true">One</li>
                        </div>


                    </ul>
                </div>


            </div>
        );
    }
}

export default LeftComponent;