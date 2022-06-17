import {FC, useState, useEffect} from 'react';
import "./formInput.scss"

interface IInputProps {
    value: string;
    onChange: (e:string)=>void;
    error: Array<any>;
    placeholder: string;
    isRequired?: boolean;
    name: string;
}

const FormInput: FC<IInputProps> = (props) => {
    const [messageError, setMessageError] = useState("")

    useEffect(()=>{
        showError();
    }, [props])
    function showError() {
        if(messageError===""){
            let arr = props.error;
            arr.map((item)=>{
                if (item.formInput === props.name){
                    return setMessageError(item.error);
                }else{
                    return
                }
            })
        }else{
            let arr = props.error;
            let isError = true;
            arr.map((item)=>{
                if (item.formInput === props.name){
                    return isError = false;
                }else{
                    return
                }
            })
            if (isError === true){
                return setMessageError("")
            }
        }
    }
    return (
        <div className="modal-input">
            <input type="text" name={props.name} value={props.value} onChange={(e) => {props.onChange(e.target.value)}} placeholder={props.placeholder} className={messageError? "modal-input__input modal-input__input_error":"modal-input__input"} />
            <span className="modal-input__error">{messageError}</span>
        </div>
    );
};

export default FormInput;