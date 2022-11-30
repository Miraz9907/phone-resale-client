import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    
    const { user } = useContext(AuthContext);
   

    const handleAddProduct = data =>{
        // console.log(data);
        const email = data.email;
        const sellerName = data.name;
        const category = data.category;
        const name = data.productName;
        const originalPrice = data.originalPrice;
        const resalePrice = data.resalePrice;
        const phoneNumber = data.number;
        const location = data.location;
        const usedYear = data.usedYear;
        const picture = data.image;
        const condition = data.condition;
        const description = data.description;
        const verified = false;
        const report = false;
        const advertise = false;
        const isSoled = false;
        const dateobj = new Date();
        const postedTime = dateobj.toISOString();

        const product = {
            email,
            sellerName,
            category,
            name,
            originalPrice,
            resalePrice,
            phoneNumber,
            location,
            usedYear,
            picture,
            condition,
            description,
            verified,
            report,
            advertise,
            isSoled,
            postedTime

            
        }
        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){

                
                
                toast.success("Added successfuly");
            }
        })


    }
    return (



    <div className="h-[500px] ">
      <div className="w-96 p-7">
        <h1 className="text-4xl text-center font-bold">Add A Product</h1>
        <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs mt-3 bordered">
        <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Email</span></label>
                <input defaultValue={user.email} type="email" {...register("email",{
                    required: true
                })} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">User Name</span></label>
                <input defaultValue={user.displayName}  type="text" {...register("name",{
                    required: true
                })} className="input input-bordered w-full max-w-xs"/>
            </div>
            <label className="label"><span className="label-text">Product Category</span></label>
            <select className="select-bordered outline-purple-500" {...register("category", { required: "Selected UserType" })}>
                <option selected value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="OnePlus">OnePlus</option>
            </select>
            </div>
        <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Product Name</span></label>
                <input  required type="text" {...register("productName")} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label required className="label"><span className="label-text"> Original Price</span></label>
                <input type="text" {...register("originalPrice")} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label required className="label"><span className="label-text">Resale Price</span></label>
                <input type="text" {...register("resalePrice")} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Mobile number</span></label>
                <input required type="text" {...register("number")} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Location</span></label>
                <input type="text" {...register("location")} className="input input-bordered w-full max-w-xs"/>
            </div>
            
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Year of Used</span></label>
                <input required type="text" {...register("usedYear")} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Photo</span></label>
                <input required type="text" {...register("image")} className="input input-bordered w-full max-w-xs"/>
            </div>
          
         

            <div className="form-control w-full max-w-xs mt-3 bordered">
            <label className="label"><span className="label-text">condition type</span></label>
            <select className="bordered" {...register("condition", { required: "Selected UserType" })}>
                <option selected value="Excellent">Excellent</option>
                <option selected value="Good">Good</option>
                <option value="Fair">fair</option>
            </select>
            {errors.userType && <p className="text-red-600 font-semibold">{errors.userType?.message}</p>}
            
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Description</span></label>
                <input type="text" {...register("description")} className="input input-bordered w-full max-w-xs"/>
            </div>
          <input className="btn btn-primary w-full mt-5" value="Add Product" type="submit" />
          
        </form>
        
      </div>
    </div>











   
    
    );
            }

export default AddProduct;