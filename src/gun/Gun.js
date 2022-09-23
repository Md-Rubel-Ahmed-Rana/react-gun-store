import React, { useState } from 'react';
import "./Gun.css";
import Modal from "../Modal/Modal"

const Gun = (props) => {
    const [modalData, setModalData] = useState({});
    const {increase} = props.increase
    const {img, name, action, bullet} = props.gun
    return (
        <div className='p-4 shadow-lg bg-light rounded'>
            <img className='img-fluid w-100' style={{height: "200px"}} src={img} alt="" />
            <h5> {name}  <small className='rounded-pill py-1 px-2 new'>NEW</small> </h5>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <p> <small className='border border-danger mx-2 p-1 rounded-pill'> {action} </small> <small className='border border-danger mx-2 py-1 px-2 rounded-pill'> {bullet} </small> </p>

            <button onClick={increase} className='btn btn-dark mx-2 rounded'>ADD TO CART</button>
                <label
                 htmlFor="my-modal" className="btn modal-button"
                onClick={() => setModalData(props.gun)}
                 >open modal</label>

            {
                modalData && (<Modal gun={modalData} setModalData={setModalData} />)
            }
        </div>
    );
};

export default Gun;