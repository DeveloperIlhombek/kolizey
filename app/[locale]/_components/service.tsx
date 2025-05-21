import { Button } from '@/components/ui/button'
import Image from 'next/image'

function Service() {
	return (
		<>
			<section className='w-full h-[100vh] bg-transparent  m-0 px-0 py-0'>
				<div className='relative w-full h-[100vh] bg-[#1C2752] m-0 px-0 py-4 flex flex-col justify-start items-center mx-auto'>
					<div className='flex justify-center items-center bg-gray-400/70 gap-3 px-4 py-1 '>
						<Image src='/image2.png' alt='image' width={25} height={25} />
						<p>What We Offer</p>
					</div>
					<h2 className='text-5xl text-amber-500 font-bold text-center mt-4'>
						Professional Main Services
					</h2>
					<p className='w-[832px] text-center text-muted text-xl tracking-wide mt-2'>
						We have extensive experience of domestic and business electrical
						installations and no job is too small. Our customers value our
						professionalism, work ethic and our competitive prices.
					</p>
					<div className='absolute top-[200px] w-[500px] h-[50px]  mt-4 flex justify-between items-center gap-4 rounded-none'>
						<Button className='rouded-none bg-[#FFB342] text-black font-bold hover:bg-[#ffffff] hover:text-black'>
							Commercial
						</Button>
						<Button className='rouded-none bg-[#FFB342] text-black font-bold hover:bg-[#ffffff] hover:text-black'>
							Residential
						</Button>
						<Button className='rouded-none bg-[#FFB342] text-black font-bold hover:bg-[#ffffff] hover:text-black'>
							Industrial
						</Button>
					</div>
					<div className='absolute top-[340px] w-[1160px] h-[330px] border-2 bg-white mt-4 grid grid-cols-3 gap-4'>
						<div className='col-span-2'>
							<p className='text-sm m-2'>Electrical installation</p>
							<h2 className='text-3xl font-bold tracking-widest m-2'>
								Commercial
							</h2>
							<p className='text-muted-foreground text-lg tracking-wide m-2'>
								Electrical & Maintenance Services Ltd offers a full range of
								electrical services to suit your needs – from moving a light
								switch to complete house rewires.In addition to providing fully
								qualified, competent electricians in and around London, the
								company also runs an electrical wholesale shop.
							</p>
						</div>
						<div className='col-span-1 text-end'>
							<Image
								src={'/worker.png'}
								alt='employe'
								width={450}
								height={400}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Service
