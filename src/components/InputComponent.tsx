interface IProps {
    value: string,
    onChange: (text: string) => void
}

const InputComponent = (props: IProps) => {
    const onChangeValueHandler = (e: any) => {
        props.onChange(e.target.value)
    }
    return (
        <>
            <input
                type="text"
                value={props.value}
                onChange={onChangeValueHandler}>

            </input>
        </>
    )
}

export default InputComponent;