import './App.css';
import InputComponent from './components/InputComponent';
import TestViewFormObjectComponent from './components/TestViewFormObjectComponent';
import { defaultSportBox, ISportBox } from './models/sharedModels';
import { Controller, FormProvider, useForm } from 'react-hook-form';

function App() {

  const methods = useForm<ISportBox>(
    {
      defaultValues: defaultSportBox,
      mode: "all"
    }
  )

  const { control } = methods

  return (
    <>
      <FormProvider {...methods}>
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputComponent value={value} onChange={onChange} />
          )}
        />
        <Controller
          name="adress"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputComponent value={value} onChange={onChange} />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputComponent value={value} onChange={onChange} />
          )}
        />
        <TestViewFormObjectComponent />
      </FormProvider>

    </>
  )
}

export default App
