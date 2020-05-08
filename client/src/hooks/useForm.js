import { useLocalStorage } from "./useLocalStorage"

export const useForm = (key, initialValue) => {
    const [values, setValues] = useLocalStorage(key, initialValue);
    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    const clearForm = (e) => {
        if (e) e.preventDefault();
        setValues(initialValue);
    };
    return [values, handleChanges, clearForm];
}


//CheckoutForm 
//  const handleChanges = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };




//Need handleChanges, clearForm ---> return [values, handleChanges, clearForm]
//utilize setValues and string operator 



