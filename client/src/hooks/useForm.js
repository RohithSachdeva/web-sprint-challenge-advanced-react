import { useLocalStorage } from "./useLocalStorage"

export const useForm = (key, initialValue) => {
    const [values, setValues] = useLocalStorage(key, initialValue);
}











