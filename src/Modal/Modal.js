import React from 'react';

const Modal = (props) => {
    console.log(props);
    const {name, action} = props.gun;
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                    <h3 className="font-bold text-lg"> {name ? name : "No Data Found"} </h3>
                    <p className="py-4"> {action} </p>
                <div className="modal-action">
                <label 
                onClick={() => props.setModalData(null)}
                 htmlFor="my-modal" className="btn">Close</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Modal;