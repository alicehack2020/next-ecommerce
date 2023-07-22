export const metadata = {
    title:"Add Products- Next Ecommerce "
}

const page = () => {
  return (
      <div>
          <h1 className='mb-3 text-lg font-bold'>Add Product</h1>
          <form>
              <input
                  required
                  name='name'
                  placeholder='Name'
                  className='input-bordered input mb-2 w-full'
              />
              <textarea
                  required
                  name='description'
                  placeholder='Description'
                  className='textarea textarea-bordered mb-2 w-full'
              />
               <input
                  required
                  name='imageUrl'
                  placeholder='Image URL'
                  type='url'
                  className='input-bordered input mb-2 w-full'
              />
               <input
                  required
                  name='price'
                  placeholder='Price'
                  type='number'
                  className='input-bordered input mb-2 w-full'
              />
              <button className='btn btn-primary btn-block'>Add Product</button>
          </form> 
    </div>
  )
}

export default page