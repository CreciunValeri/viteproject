import { TextField } from "@mui/material"
import { FieldError } from "react-hook-form"

interface IProps {
    valueInput: string,
    labelInput: string,
    defaultValue ?: string,
    errorInput: FieldError | undefined,
    onChangeInput: (text: string) => void
}

const InputComponent = (props: IProps) => {
    const onChangeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChangeInput(e.target.value)
    }
    return (
        <>


            <TextField
                error={!!props.errorInput}
                label={props.labelInput}
                defaultValue={props.defaultValue?props.defaultValue : "Бельцы"}
                helperText={props.errorInput?.message}
                value={props.valueInput}
                onChange={onChangeValueHandler}
            />

            
           
        </>
    )
}

export default InputComponent;