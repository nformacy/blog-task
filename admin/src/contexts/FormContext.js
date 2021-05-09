import React from 'react';
import { useForm, FormProvider as FormProviderNative } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const FormProvider = props => {
  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: yupResolver(props.schema)
  });

  return (
    <FormProviderNative {...form}>
      {props.children}
    </FormProviderNative>
  )
}
