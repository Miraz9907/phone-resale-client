import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();

    const handleAddProduct = data =>{

    }
    return (
        <div className="h-[500px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-4xl text-center font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Name</span></label>
                <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs"/>
            </div>
          <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" {...register("email",{
                    required: true
                })} className="input input-bordered w-full max-w-xs"/>
            </div>
          <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Password</span></label>
                <input type="password" {...register("password",{
                    required: "Password is required",
                    minLength:{value: 6, message: 'Password must be 6 charecter or more'},
                    pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "password must be strong"}
                })} className="input input-bordered w-full max-w-xs"/>
                {errors.password && <p className="text-red-600 font-semibold">{errors.password?.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs mt-3 bordered">
            <select className="bordered" {...register("userType", { required: "Selected UserType" })}>
                <option selected value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
            </select>
            {errors.userType && <p className="text-red-600 font-semibold">{errors.userType?.message}</p>}
            
            </div>
          <input className="btn btn-primary w-full mt-5" value="Login" type="submit" />
          
        </form>
        
      </div>
    </div>
    );
};

export default AddProduct;