import { useMutation } from "@tanstack/react-query";
import { signup as signupApi} from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
    const {mutate:signup,isPending}=useMutation({
        mutationFn:signupApi,
        onSuccess:()=>{
            toast.success("user created successfully pls verify you account")
        }
    })
    return {signup,isPending}

}