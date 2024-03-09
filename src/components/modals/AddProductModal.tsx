import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { FaPlus } from 'react-icons/fa'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'
import { useState } from 'react'

interface IForm {
  sku: string
  name: string
  price: number
  quantity: number
}

const AddProductModal = () => {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>()

  const onSubmit: SubmitHandler<IForm> = (data) => {
    toast.success('Product added successfully')
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='h-10 px-4 py-2 transition-colors bg-green-500 rounded-md hover:bg-green-600'>
        <FaPlus color='white' />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
        </DialogHeader>
        <form className='flex flex-col gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='sku'>SKU</Label>
            <Input
              id='sku'
              type='text'
              {...register('sku', { required: true })}
            />
            {errors.sku && <span className='text-red-500'>This field is required</span>}
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              type='text'
              {...register('name', { required: true })}
            />
            {errors.name && <span className='text-red-500'>This field is required</span>}
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='price'>Price</Label>
            <Input
              id='price'
              type='text'
              {...register('price', { required: true })}
            />
            {errors.price && <span className='text-red-500'>This field is required</span>}
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='quantity'>Quantity</Label>
            <Input
              id='quantity'
              type='text'
              {...register('quantity', { required: true })}
            />
            {errors.quantity && <span className='text-red-500'>This field is required</span>}
          </div>

          <Button type='submit' className='mt-8'>
            Add Product
          </Button>
        </form>
      </DialogContent>
    </Dialog>

  )
}
export default AddProductModal
