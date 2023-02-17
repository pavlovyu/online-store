import Input from "./Input";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {actionClearCart} from "../../reducers/items.reducer";
import './CardForm.scss';

function CardForm({setRerender}) {
    const dispatch = useDispatch();
    const cart = JSON.parse(localStorage.getItem("cart"));
    const order = cart.map(item => item.name).toString();

    return (
        <Formik
            initialValues={{
                firstName: "",
                secondName: "",
                age: "",
                delivery: "",
                phone: "",
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .min(3, "Too Short.")
                    .max(15, "Too Long.")
                    .required("Must be filled."),
                secondName: Yup.string()
                    .min(3, "Too Short.")
                    .max(15, "Too Long.")
                    .required("Must be filled."),
                age: Yup.number()
                    .min(18, "Sale from 18 years.")
                    .max(100, "Enter the correct age.")
                    .required("Must be filled."),
                delivery: Yup.string()
                    .min(8, "Address too short.")
                    .max(40, "Address too long")
                    .required("Must be filled."),
                phone:  Yup.number()
                    .required("Must be filled."),
            })}
            onSubmit={(values) => {
                console.log(values,order)
                dispatch(actionClearCart());
                setRerender();
            }}>
            <Form>
                <fieldset className="form-block">
                    <h3 className="form-title">Payment information</h3>
                    <Input label="Name" placeholder="Name" type="text" name="firstName"/>
                    <Input label="Surame" placeholder="Surame" type="text" name="secondName"/>
                    <Input label="Age" placeholder="Age" type="number" name="age"/>
                    <Input label="Delivery Address" placeholder="Delivery Address" type="text" name="delivery"/>
                    <Input label="Phone" placeholder="+380 000-00-00" type="number" name="phone"/>
                    <button type="submit" className="form-btn">CHECKOUT</button>
                </fieldset>
            </Form>
        </Formik>
    )
}
export default CardForm;