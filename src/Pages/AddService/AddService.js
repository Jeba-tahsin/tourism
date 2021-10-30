import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
    const {register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post("http://localhost:5000/details", data)
         .then(res => {
             if(res.data.insertedId){
                 alert('Successfull!');
                 reset();
             }
         })
    };
    return (
        <div className='service'>
            <h5>Add a favourite service</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder='Name'/>
            <textarea {...register("details")} placeholder='Details'/>
            <input type="number" {...register("cost")} placeholder='Cost'/>
            <input type="number" {...register("duration")} placeholder='Duration'/>
            <input type="number" {...register("people")} placeholder='People'/>
            <input {...register("img")} placeholder='Image'/>
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;