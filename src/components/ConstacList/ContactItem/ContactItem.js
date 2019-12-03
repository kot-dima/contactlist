import React from "react";
import "./contactitem.css";

class ContactItem extends React.Component {

    state = {
        name: this.props.name,
        description: this.props.description,
        avatar: this.props.avatar,
        gender: this.props.gender,
        btnStatus: false,
        divStyll:false,
        off:false,
        show:true
    }
    RandomAva = () => {
        const newAvatar = Math.floor(Math.random() * 100);
        this.setState({
            avatar: newAvatar,
            btnStatus: !this.state.btnStatus,
            divStyle: true
        })
    }

    render() {
        const { name, description, avatar, gender } = this.state;
        let URL = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
        let btnStyle = "btnrandom btn btn-outline-primary true col-2 offset-4";
        if (this.state.btnStatus) {
            btnStyle = "btnrandom btn btn-outline-danger true col-2 offset-4";
        }
        let divactive = "border col-sm-6 de-flex-center"
        
        onBorderOff=()=>{
            this.state.off
        }
        onBorderShow=()=>{
            this.state.show
        }
        
        return (
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
                            <button className={btnStyle} onClick={this.RandomAva}>Random</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactItem;