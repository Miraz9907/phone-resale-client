import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();

    const handleAddProduct = data =>{
        console.log(data);

    }
    return (
        <div className="h-[500px] ">
      <div className="w-96 p-7">
        <h1 className="text-4xl text-center font-bold">Add A Product</h1>
        <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs mt-3 bordered">
        <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" {...register("email",{
                    required: true
                })} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">User Name</span></label>
                <input type="text" {...register("name",{
                    required: true
                })} className="input input-bordered w-full max-w-xs"/>
            </div>
            <label className="label"><span className="label-text">Product Category</span></label>
            <select className="select-bordered outline-purple-500" {...register("category", { required: "Selected UserType" })}>
                <option selected value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                <option value="oneplus">OnePlus</option>
            </select>
            </div>
        <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Product Name</span></label>
                <input type="text" {...register("productName")} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text"> Original Price</span></label>
                <input type="text" {...register("originalPrice")} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Resale Price</span></label>
                <input type="text" {...register("resalePrice")} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Mobile number</span></label>
                <input type="text" {...register("number")} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Location</span></label>
                <input type="text" {...register("location")} className="input input-bordered w-full max-w-xs"/>
            </div>
            
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Year of Used</span></label>
                <input type="text" {...register("usedYear")} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Photo</span></label>
                <input type="file" {...register("photo")} className="input input-bordered w-full max-w-xs"/>
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
};

export default AddProduct;