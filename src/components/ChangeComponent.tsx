import { GenderEnum } from '../models/sharedModels';
import { MenuItem, Select } from "@mui/material";


interface IProps {
    value: string,
    onChange: (text: string) => void
}

const ChangeComponent = (props: IProps) => {
    const onChangeValueHandler = (e: any) => {
        props.onChange(e.target.value)
    }
    return (
        <>
         
        </>
        
    )
}

export default ChangeComponent;