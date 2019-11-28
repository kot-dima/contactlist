import React from "react";
import "./contactitem.css";

const ContactItem = ({avatar, description, name, gender}) =>{
    let URL=`https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
    return(
        <div className="row">
            <div className="col-sm-6 de-flex-center">
                <div className="panel">
                    <div className="panel-body p-t-10">
                        <div className="media-main">
                            <a className="pull-left" href="#">
                                <img className="thumb-lg img-circle bx-s" src={URL} alt="" />
                            </a>
                            <div className="pull-right btn-group-sm">
                                <a href="#" className="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                                    <i className="fa fa-pencil"></i>
                                </a>
                                <a href="#" className="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                                    <i className="fa fa-close"></i>
                                </a>
                            </div>
                            <div className="info">
                                <h4>{name}</h4>
                                <p className="text-muted">{description}</p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <hr />
                        <ul className="social-links list-inline p-b-10">
                            <li>
                                <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="#" data-original-title="Facebook"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="#" data-original-title="Twitter"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="#" data-original-title="LinkedIn"><i className="fa fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="#" data-original-title="Skype"><i className="fa fa-skype"></i></a>
                            </li>
                            <li>
                                <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="#" data-original-title="Message"><i className="fa fa-envelope-o"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactItem;