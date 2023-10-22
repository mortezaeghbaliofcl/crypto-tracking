import React from 'react'

const SendMessageComponent = () => {
    return (
        <div className='pt-3'>

            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="FormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label className="form-label">Your Message</label>
                <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
            </div>
            <button className='btn btn-outline-primary mb-2'>Send</button>


        </div>
    )
}

export default SendMessageComponent
