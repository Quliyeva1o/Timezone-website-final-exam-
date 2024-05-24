import * as Yup from "yup"

export const MyValidations = Yup.object({
    title:Yup.string().required(),
    img:Yup.string().url().required(),
    price:Yup.number().required(),
    desc:Yup.string().required(),

})