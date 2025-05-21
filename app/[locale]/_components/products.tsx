import Image from 'next/image'

function Products() {
	return (
		<main id='products' className='w-full'>
			<div className='text-6xl  text-center m-4 text-amber-400 font-bold'>
				Bizning maxsulotlar
			</div>
			<div className='flex item-center justify-center gap-4'>
				<Image src={'/roman2.png'} alt='image' width={400} height={400} />
				<Image src={'/roman2.png'} alt='image' width={400} height={400} />
				<Image src={'/roman2.png'} alt='image' width={400} height={400} />
			</div>
		</main>
	)
}

export default Products
