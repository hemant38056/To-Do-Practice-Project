import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import TaskContext from '../context/TaskContext';
import AuthContext from '../auth/AuthContext';



function TaskForm(props) {
    const initalData = {
        title : "", 
        description : "",
        duedate : ""
    }
    const {addTask, updateTask} = useContext(TaskContext);
    const {user} = useContext(AuthContext);
    // const[formData, setFormData] = useState(null);
    const[formData, setFormData] = useState(initalData);

    const {isUpdate, data, setIsUpdate} = props;

    const handleChange = (e) => {
        let {name, value} = e.target;
        setFormData((prev) => {
            return{
                ...prev, [name] : value, userid : user.id, modifiedon : Date()
            }
        })
    }

    const handleSubmit = () => {
        addTask(formData);
    }

    const handleUpdate = () => {
        updateTask(formData);
    }

    const handleCancel = () => {
        setFormData(initalData);
        setIsUpdate(false);
    }


    useEffect(() => {
        if(isUpdate){
            setFormData(data)
        }
    }, [isUpdate])

    return (
        <div className='py-3 w-50'>
            <h2 className='text-white'>{isUpdate ? "Update Task" : "Create Task"}</h2>
            <div className='card p-3'>
                <div className='mb-3'>
                    <label htmlFor="form-label">Title</label>
                    <input type="text" name='title' className='form-control'  value={formData.title}  onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="form-label">Description</label>
                    <input type="text" name='description' className='form-control'  value={formData.description}  onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="form-label">Due Date</label>
                    <input type="datetime-local" name='duedate' className='form-control'  value={formData.duedate}  onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    {
                        isUpdate ?
                        <>
                            <button  onClick = {handleUpdate} className='btn btn-primary'>Update Task</button>
                            <button  onClick={handleCancel} className='btn btn-warning ms-2'>Cancel</button>
                        </>
                        :
                        <button className='btn btn-primary' onClick={handleSubmit}>Create Task</button>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default TaskForm;