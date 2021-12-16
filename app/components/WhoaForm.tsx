import { Form } from 'remix'
import { FC } from 'react'

type InputTypes =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

export type InputConfig = {
  labelTitle: string
  name: string
  type: InputTypes
}

export interface IWhoaForm {
  formTitle: string
  inputConfigs: InputConfig[]
  submitTitle?: string
  actionPath: string
}

export const WhoaForm: FC<IWhoaForm> = ({
  formTitle,
  inputConfigs,
  submitTitle = 'Submit',
  actionPath,
}) => {
  return (
    <div className="bg-base-200">
      <div className="flex justify-center">
        <h1 className="text-2xl">{formTitle}</h1>
      </div>
      <Form method="post" action={actionPath}>
        {inputConfigs.map(config => {
          return (
            <label className="label text-xl">
              {config.labelTitle}
              <input
                className="input outlined"
                name={config.name}
                type={config.type}
              />
            </label>
          )
        })}

        <button className="btn btn-primary" type="submit">
          {submitTitle}
        </button>
      </Form>
    </div>
  )
}
