import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { FaPlus } from 'react-icons/fa'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const AddProductModal = () => {
  const handleAddProduct = () => {
    console.log('Add Product')
  }
  return (
    <Dialog>
      <DialogTrigger className='h-10 px-4 py-2 transition-colors bg-green-500 rounded-md hover:bg-green-600'>
        <FaPlus color='white' />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            <form className='flex flex-col gap-2 mt-4'>
              <div>
                <Label htmlFor='sku'>SKU</Label>
                <Input id='sku' type='text' />
              </div>
              <div>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' type='text' />
              </div>
              <div>
                <Label htmlFor='price'>Price</Label>
                <Input id='price' type='text' />
              </div>
              <div>
                <Label htmlFor='quantity'>Quantity</Label>
                <Input id='quantity' type='text' />
              </div>
              <Button type='submit' onClick={handleAddProduct} className='mt-8'>
                Add Product
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}
export default AddProductModal
