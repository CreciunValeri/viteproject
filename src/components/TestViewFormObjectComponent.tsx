import { useFormContext } from "react-hook-form";


const TestViewFormObjectComponent = () => {
    const {watch} = useFormContext()
    const data = watch()

    return (
        <>
        {JSON.stringify(data, null, 2)}
        </>
    )
}
export default TestViewFormObjectComponent;