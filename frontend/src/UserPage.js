import React from "react";
import './styles.css';

function UserPage() {

    

    return (
        <div className='d-flex justify-content-center allign-items-center bg-primary vh-100'>
            <div className='bg-white p-4 rounded w-25'>
                <h2>User Page</h2>
                
                
                
                
            </div>   
            <div className="bottom-right-button-container"> 
                    <button id="deleteAccountButton" className='btn btn-success w-100 rounded-0'> Delete My Account</button>
                </div>
            
        </div>

    
    )
}

export default UserPage