import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

function TaskList(props) {
    const {allTasks} = useContext(TaskContext);
    return (
        <div className='container'>
            <div className='bg-primary text-white mt-5 p-4'>
                <div className='d-flex mb-3 align-items-center'>
                    <h2 className='text-white'>Tasks List</h2>
                    <Link className='btn btn-info ms-auto' to="/create-task">Create Task</Link>
                </div>
                <div className='mt-3 p-2 mb-2 bg-dark rounded-1'>
                    <div className='row'>
                        <div className='col-lg-1'>Sr. No.</div>
                        <div className='col-lg-3'>Title</div>
                        <div className='col-lg-4'>Description</div>
                        <div className='col-lg-2'>Due Date</div>
                        <div className='col-lg-2'>Actions</div>
                    </div>
                    {
                        allTasks?
                        allTasks.map((task)=>{
                            return (
                                <div key={task.id} className='row p-2 mb-2 bg-dark rounded-1'>
                                    <div className='col-lg-1'>{task.id}</div>
                                    <div className='col-lg-3'>{task.title}</div>
                                    <div className='col-lg-4'>{task.description}</div>
                                    <div className='col-lg-2'>{task.duedate}</div>
                                    <div className='col-lg-2'>
                                        <span className='px-2'>
                                            <FontAwesomeIcon icon = {faEye} />
                                        </span>
                                        <span className='px-2'>
                                            <FontAwesomeIcon icon = {faPenToSquare} />
                                        </span>
                                        <span className='px-2'>
                                            <FontAwesomeIcon icon = {faTrash} />
                                        </span>
                                    </div>
                            </div> 
                            ) 
                        }) : <p>No Task to show</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default TaskList;