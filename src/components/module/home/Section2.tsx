'use client'
import { alpha, styled } from '@mui/material/styles'
import { Button, Checkbox, FormLabel, InputLabel, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import Image from 'next/image'
import clsx from 'clsx'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    //   color: '#D4AD3C',
    fontWeight: '600',
  },
})
const types = [
  { value: 'air', label: 'Air' },
  { value: 'sea', label: 'Sea' },
]
const Section2 = () => {
  const { values, handleSubmit, handleChange, setFieldValue } = useFormik({
    initialValues: {
      source: '',
      destination: '',
      goods: '',
      shippingMethod: '',
      fullname: '',
      email: '',
    },
    onSubmit: (data) => {
      console.log(data)
    },
  })

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target
    if (checked) setFieldValue('shippingMethod', value)
    else setFieldValue('shippingMethod', '')
  }
  return (
    <div id="home" className="relative w-full overflow-hidden flex items-center">
      <div className="bg-slate-200 rounded-md p-6 mx-auto mt-12 w-full md:w-6/12">
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col space-y-2 mb-4">
            <InputLabel htmlFor="source" className="text-primary-blue font-bold">
              From
            </InputLabel>
            <CssTextField
              id="source"
              label=""
              placeholder="Origin City?"
              InputProps={{
                className: 'rounded-full',
                autoComplete: 'off',
              }}
              name="source"
              className="bg-white rounded-full"
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
          </div>

          <div className="flex flex-col space-y-2 mb-4">
            <InputLabel htmlFor="destination" className="text-primary-blue font-bold">
              To
            </InputLabel>
            <CssTextField
              id="destination"
              label=""
              InputProps={{
                className: 'rounded-full',
                autoComplete: 'off',
              }}
              placeholder="Destination City?"
              name="destination"
              className="bg-white rounded-full"
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
          </div>

          <div className="flex flex-col space-y-2 mb-4">
            <InputLabel htmlFor="goods" className="text-primary-blue font-bold">
              Goods
            </InputLabel>
            <CssTextField
              id="goods"
              label=""
              InputProps={{
                className: 'rounded-full',
                autoComplete: 'off',
              }}
              name="goods"
              placeholder="Lemari / Sepeda"
              className="bg-white rounded-full"
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
          </div>

          <div className="flex flex-col space-y-2 mb-4">
            <InputLabel className="text-primary-blue font-bold">Shipping Method</InputLabel>
            <div className="flex flex-row space-x-2">
              {types.map((item) => {
                return (
                  <InputLabel
                    key={item.value}
                    htmlFor={item.value}
                    className={clsx('flex space-x-2 items-center pr-6 pl-3 rounded-full border-2 border-primary-blue', {
                      [' bg-primary-blue text-white']: values.shippingMethod === item.value,
                    })}
                  >
                    <Checkbox
                      id={item.value}
                      onChange={handleChangeCheckbox}
                      value={item.value}
                      checked={values.shippingMethod === item.value}
                      size="small"
                    />
                    <span className="">{item.label}</span>
                  </InputLabel>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col space-y-2 mb-4">
            <InputLabel htmlFor="customerName" className="text-primary-blue font-bold">
              Name
            </InputLabel>
            <CssTextField
              id="customerName"
              label=""
              placeholder="Enter your name"
              InputProps={{
                className: 'rounded-full',
                autoComplete: 'off',
              }}
              name="customerName"
              className="bg-white rounded-full"
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
          </div>

          <div className="flex flex-col space-y-2 mb-4">
            <InputLabel htmlFor="email" className="text-primary-blue font-bold">
              Business Email
            </InputLabel>
            <CssTextField
              id="email"
              label=""
              placeholder="Enter your email address"
              InputProps={{
                className: 'rounded-full',
                autoComplete: 'off',
              }}
              name="email"
              className="bg-white rounded-full"
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
          </div>

          <div className="flex justify-center">
            <Button type="submit" variant="contained" className="bg-primary-blue">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Section2
