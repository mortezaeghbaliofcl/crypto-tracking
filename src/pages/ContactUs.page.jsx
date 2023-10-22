import React from 'react';
import meImg from '../assets/images/support.svg';
import { FaPhoneSquare } from 'react-icons/fa';
import { FaSquareEnvelope } from 'react-icons/fa6';
import SendMessageComponent from '../components/ui/SendMessage.component';

const ContactUsPage = () => {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-12  p-3 rounded ">
                    <h3>Contact us</h3>

                </div>
            </div>
            <div className="row align-items-center  ">
                <div className="col-md-7">
                    <div >
                        <h3 className='text-primary' >How to Contact us</h3>
                        <h5><FaPhoneSquare/> +49 1516 1022 447</h5>
                        <h5><FaSquareEnvelope/> morteza.eghbali.ofcl@gmail.com</h5>
                        <SendMessageComponent/>

                    </div>
                </div>
                <div className="col-md-5 text-center ">
                    <img src={meImg} alt="meImg" className="img-fluid about-img" />

                </div>

            </div>

        </div>
    )
}

export default ContactUsPage
