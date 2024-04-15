import Joi from "joi";
import { schemas } from "../../../utils/schemas.js";

export const addOrderSchema=Joi.object({
    body:{
        address:Joi.string(),
        phone_number:schemas.phoneNumber.required()
    },
    params:{},
    query:{}

})
export const deleteOrderSchema=Joi.object({
    body:{
       order_id:schemas.modelId.required()
    },
    params:{},
    query:{}

})