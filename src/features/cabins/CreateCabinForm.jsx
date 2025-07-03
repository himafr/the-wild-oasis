import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";


function CreateCabinForm() {
  const queryClient=useQueryClient()
  const {register,handleSubmit,reset,getValues,formState}=useForm();
  const {errors}=formState;
  const {isPending,mutate}=useMutation({
    mutationFn:createCabin,
    onSuccess:()=>{
      toast.success("Cabin created successfully!")
      queryClient.invalidateQueries({queryKey:["cabins"]})
      reset()
    },
    onError:(err)=>{
      toast.error(`Failed to create cabin: ${err.message}`)
    }
  })

function onSubmit(data){
  mutate({...data,image:data.image[0]})
  
}
function onError(errors){
  console.log(errors)
}
  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input type="text" id="name" {...register("name",{
          required:"this field is required"
        })} />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" {...register("maxCapacity",{
          required:"this field is required",
          min:{
            value:1,
            message:"minimum capacity is 1"
          }
        })} />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice" 
        disabled={isPending}
        {...register("regularPrice",{
          required:"this field is required",
          
        })} />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0}
        disabled={isPending}
         {...register("discount",{
          required:"this field is required",
          validate:(value)=>value<= getValues().regularPrice || "Discount must be less than or equal to regular price"
        })} />
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message}>
        <Textarea type="number" id="description" defaultValue="" 
        disabled={isPending}
         {...register("description",{
          required:"this field is required"
        })} />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput id="image" accept="image/*" 
        disabled={isPending}
        
        {...register("image",{
          required:"this field is required"
        })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isPending}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
