import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from "react";

export const HomePage = () => {

    return (
        <>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <p>container 3 start</p>
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img
                            className="rounded-circle mt-5" width="150px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span
                            className="font-weight-bold">Edogaru</span><span
                            className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <p>container 2 start</p>
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label><input type="text"
                                                                                                       className="form-control"
                                                                                                       placeholder="first name"/>
                                </div>
                                <div className="col-md-6"><label className="labels">Surname</label><input type="text"
                                                                                                          className="form-control"
                                                                                                          placeholder="surname"/>
                                </div>
                            </div>

                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button">Save Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p>container 3 start</p>
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience">
                                <span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i
                                className="fa fa-plus"></i>&nbsp;Experience</span></div>
                            <br/>
                            <div className="col-md-12"><label className="labels">Experience in Designing</label><input
                                type="text" className="form-control" placeholder="experience"/></div>
                            <br/>
                            <div className="col-md-12"><label className="labels">Additional Details</label><input
                                type="text" className="form-control" placeholder="additional details"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
