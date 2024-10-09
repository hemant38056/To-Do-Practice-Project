import React, { useState } from 'react';
import logo from '../assetts/logo.png'
function Profile(props) {
    const[isEditClick, setIsEditClick] = useState(false);
    const[profileData, setProfileData] = useState(null);

    const handleEditClick = () => {
        setIsEditClick(!isEditClick);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfileData({
            ...profileData,
            [name] : value
        });
    }

    return (
        <div className='container-fluid h-100'>
            <div className='card bg-primary text-white'>
                <div className='card-body d-flex justify-content-evenly align-items-center'>
                    <div>
                        <img src={logo} alt="Profile" className='img-fluid rounded-circle' style={{ width: '150px', height: '150px' }} />
                    </div>
                    <div className='d-flex flex-column text-center'>
                        <h2 className='mb-1'>John Doe</h2>
                        <h5 className='mb-1'>Date of Birth: 05/03/1987</h5>
                        <h5 className='mb-1'>Gender: Male</h5>
                        <h5 className='mb-1'>Contact: 9876543210</h5>
                        <h5 className='mb-3'>Role: Web Developer</h5>
                        <button className='btn btn-light' onClick={handleEditClick}>
                            {isEditClick ? "Cancel" : "Edit Profile"}
                        </button>
                    </div>
                </div>
            </div>

            {isEditClick && (
                <div className='container mt-5'>
                    <div className='card bg-primary text-white'>
                        <div className='card-header'>
                            <h4 className='mb-0'>User Information</h4>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className='row mb-3'>
                                    <div className='col-md-6'>
                                        <label htmlFor="first-name" className='form-label'>First Name</label>
                                        <input  onChange={handleChange} type="text" name='first-name' className='form-control' id="first-name" placeholder="Enter your first name" />
                                    </div>
                                    <div className='col-md-6'>
                                        <label htmlFor="last-name" className='form-label'>Last Name</label>
                                        <input onChange={handleChange} type="text" name='last-name' className='form-control' id="last-name" placeholder="Enter your last name" />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-md-6'>
                                        <label htmlFor="gender" className='form-label'>Gender</label>
                                        <input onChange={handleChange} type="text" name='gender' className='form-control' id="gender" placeholder="Enter your gender" />
                                    </div>
                                    <div className='col-md-6'>
                                        <label htmlFor="contact" className='form-label'>Contact</label>
                                        <input onChange={handleChange} type="number" name='contact' className='form-control' id="contact" placeholder="Enter your contact number" />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-md-6'>
                                        <label htmlFor="job_role" className='form-label'>Role</label>
                                        <select  onChange={handleChange} name="job_role" className='form-select' id="job_role">
                                            <option value="">Select Job Role</option>
                                            <option value="frontend">Frontend Developer</option>
                                            <option value="backend">Backend Developer</option>
                                            <option value="full_stack">Full Stack Developer</option>
                                            <option value="ui_ux">UI/UX Designer</option>
                                        </select>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-end'>
                                        <button type="submit" className='btn btn-light w-100'>Update Profile</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;