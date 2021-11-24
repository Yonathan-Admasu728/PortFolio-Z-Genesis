import React from 'react'
import '../stylesheets/HeaderButton.css';
import { FaEye } from 'react-icons/fa';

const HeaderButton = () => {

    return (
        <>
            <div className="mx-auto">
                <a href="#courosel"><button className="see">Checkout Portfolio <span>
                      <FaEye color='black' fontSize="1.8rem"/>
                  </span></button></a>
            </div>
        </>
    )
}

export default HeaderButton
