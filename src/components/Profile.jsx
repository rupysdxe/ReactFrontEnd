import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button hover-blue" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                My Profile Information
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show"
                             aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                {/*All the profile Information Here Please!*/}
                                <div className="card mt-2">
                                    <div id="profile-info" className="card-body">
                                        <img src="/images/human.svg" alt="userProfilePicture" width="100%" height="200px"/>
                                    </div>
                                </div>

                                <div className="card">

                                    <form>
                                        <div className="form">
                                            <div>
                                                <div className="form-group" id="id-group">
                                                    <label htmlFor="type">Student ID : </label>
                                                    <label htmlFor="studentId">BN102030</label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-group p-10">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <input type="text" className="form-control" id="form-firstName"
                                                           placeholder="First Name.." required/>
                                                </div>

                                                <div className="form-group p-10">
                                                    <label htmlFor="lastName">lastName</label>
                                                    <input type="text" className="form-control" id="form-lastName"
                                                           placeholder="Last Name..." required/>
                                                </div>

                                            </div>


                                            <div className="form-group p-10">
                                                <label htmlFor="inputEmail4">Email</label>
                                                <input type="email" className="form-control" id="inputEmail4"
                                                       placeholder="Email"/>
                                            </div>

                                            <div className="form-group p-10">
                                                <label htmlFor="inputPassword4"> Change Password</label>
                                                <input type="password" className="form-control" id="inputPassword4"
                                                       placeholder="Password"/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary p-10">Update</button>
                                    </form>

                                </div>


                            </div>
                        </div>
                    </div>

                </div>








                <div id="myPosts">
                    <div id="individual-feed">

                        <div className="card mt-1">
                            <div className="card-body">

                                <div id="post-profileImgAndUsername">
                                    <img  className="rounded-circle" src="/images/human.svg"  height="30px" alt="profilePicture"/>
                                    <label>User</label>
                                </div>
                                <hr/>
                                <div id="postTitle">
                                    <h6 className="text-center">Title</h6>

                                </div>
                                <div id="postContent">
                                    <p >
                                        Because of the nature of quantum mechanics, no single image has been entirely satisfactory at visualizing the atom’s various characteristics, which thus forces physicists to use complementary pictures of the atom to explain different properties. In some respects, the electrons in an atom behave like particles orbiting the nucleus. In others, the electrons behave like waves frozen in position around the nucleus. Such wave patterns, called orbitals, describe the distribution of individual electrons. The behaviour of an atom is strongly influenced by these orbital properties, and its chemical properties are determined by orbital groupings known as shells.
                                    </p>
                                </div>

                                <div className="card mt-2">
                                    <div id="postImage" className="card-body">
                                        <img src="/images/human.svg" alt="userProfilePicture" width="100%" height="350px"/>
                                    </div>
                                </div>

                                <div id="likeAndComment">
                                    <a href="#" id="likeButton" className="btn btn hover-lightgray">
                                        <label id="likeCount">10</label>
                                        <img src="/images/like.svg" width="20px"/>
                                    </a>
                                    <a href="#" id="commentButton" className="btn btn hover-lightgray">
                                        <img src="/images/comment.svg"/>
                                    </a>
                                </div>




                            </div>
                        </div>
                    </div>
                    
                </div>


            </>
        );
    }
}

export default Profile;