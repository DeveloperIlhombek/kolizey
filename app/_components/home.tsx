import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FaCirclePlay } from 'react-icons/fa6'

function Hero() {
	return (
		<div>
			<div
				className=' w-full h-[100vh] relative'
				style={{
					backgroundImage: 'url(./hero.png)',
					backgroundSize: 'cover',
				}}
			>
				<div className=' absolute w-[720px] h-[330px] top-[260px] left-[120px]'>
					<div className='absolute w-[602px] h-[30px] left-[20px] top-1 flex items-center justify-center bg-white/25 text-white font-bold gap-4'>
						<Image
							src={'/image1.png'}
							alt='image 1'
							width={30}
							height={30}
							priority
						/>
						<p className='letter-spacing-[0.36px]'>
							Improve our customers’ lives by providing effective solutions.
						</p>
					</div>
					<h2 className='absolute top-[70px] left-[20px] capitalize text-7xl text-white font-samibold w-[712px] h-[156px]  letter-spacing-[1.2px]'>
						A recognized leader in services industry
					</h2>

					<div>
						<Button className='text-black text-lg absolute w-[130px] h-[60px] left-[20px] top-[250px] bg-[#FFB342]'>
							View Service
						</Button>
						<Button className='text-black text-lg absolute w-[60px] rounded-full h-[60px] left-[200px] top-[250px] bg-[#FFB342]'>
							<FaCirclePlay className='w-fit' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
