import './App.css';
import InputComponent from './components/InputComponent';
import TestViewFormObjectComponent from './components/TestViewFormObjectComponent';
import { defaultSportBox, ISportBox } from './models/sharedModels';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ChangeComponent from './components/ChangeComponent';

function App() {

  const userSchema = yup.object({
    adress: yup.string().max(20,"Адрес не более 20 символов").required("Поле обязательно")
  });

  const methods = useForm<ISportBox>(
    {
      resolver: yupResolver(userSchema),
      defaultValues: defaultSportBox,
      mode: "all"
    }
  )

  const { control } = methods

  return (
    <>
      <FormProvider {...methods}>
        {/* <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputComponent valueInput={value} onChangeInput={onChange} />
          )}
        /> */}
        <Controller
          name="adress"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <InputComponent
              valueInput={value}
              labelInput='Adres'
              onChangeInput={onChange}
              errorInput={error}
            />
          )}
        />
        {/* <Controller
          name="description"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputComponent valueInput={value} onChangeInput={onChange} />
          )}
        />
        <Controller
          name="admin.firstName"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputComponent valueInput={value} onChangeInput={onChange} />
          )}
        />
        <Controller
          name="admin.lastName"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputComponent valueInput={value} onChangeInput={onChange} />
          )}
        />
        <Controller
          name="admin.gender"
          control={control}
          rules={{ required: "Выбор обязателен" }}
          render={({ field: { value, onChange } }) => (
            <InputComponent valueInput={value} onChangeInput={onChange} />
          )}
        /> */}


        <TestViewFormObjectComponent />
      </FormProvider>

    </>
  )
}

export default App
