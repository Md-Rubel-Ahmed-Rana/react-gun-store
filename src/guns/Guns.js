import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Gun from '../gun/Gun';

const Guns = (increase) => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
        .then((res) => res.json())
        .then((data) => setGuns(data))
    },[])

    const styles = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
    }

    return (
        <div>
            <h2 className='text-center my-3 fw-bolder'>Welcome To My Gun Shop</h2>
            <div style={styles} >
                {
                    guns.map((gun) => <Gun increase={increase} gun={gun} key={gun.id} />)
                }
            </div>
        </div>
    );
};

export default Guns;