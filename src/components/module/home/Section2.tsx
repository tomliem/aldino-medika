'use client'
import { styled } from '@mui/material/styles'
import { Button, Checkbox, InputLabel, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
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
  const { values, handleSubmit, handleChange, setFieldValue, resetForm } = useFormik({
    initialValues: {
      source: '',
      destination: '',
      goods: '',
      shippingMethod: '',
      customerName: '',
      email: '',
    },
    onSubmit: async (data) => {
      const resp = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (resp.status === 200) {
        resetForm()
        toast.success('Your message was sent successfully!')
      }
      console.log(data)
    },
  })

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target
    if (checked) setFieldValue('shippingMethod', value)
    else setFieldValue('shippingMethod', '')
  }
  return (
    <div id="home" className="h-[680px] lg:h-[520px] relative w-full flex items-center px-4">
      <div className="bg-primary-dark bg-opacity-60 rounded-md p-6 mx-auto transform -translate-y-[75px] lg:-translate-y-1/4 z-10 w-full md:w-6/12">
        <div className="text-white text-xl font-semibold">Quick Quote</div>
        <p className="mb-8 text-white">We will contact you and arrange your shipment goods</p>
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col space-y-2 mb-4">
            <InputLabel htmlFor="source" className="text-white font-bold">
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
            <InputLabel htmlFor="destination" className="text-white font-bold">
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
            <InputLabel htmlFor="goods" className="text-white font-bold">
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
            <InputLabel className="text-white font-bold">Shipping Method</InputLabel>
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
            <InputLabel htmlFor="customerName" className="text-white font-bold">
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
            <InputLabel htmlFor="email" className="text-white font-bold">
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

          <div className="flex justify-center mt-8">
            <Button type="submit" variant="contained" className="bg-primary-yellow rounded-full">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Section2
