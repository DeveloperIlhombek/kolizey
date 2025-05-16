import Image from 'next/image'

function About_us() {
	return (
		<div className='bg-white w-full h-[100vh] relative flex justify-center items-center '>
			<div>
				<Image
					src={'/rect1.svg'}
					alt='svg'
					width={762}
					height={500}
					className=' absolute top-0 right-0'
				/>
				<Image
					src={'/rect1.svg'}
					alt='svg'
					width={762}
					height={500}
					className='absolute top-0 left-0  rotate-y-180'
				/>
				<h1 className='absolute font-bold top-20 text-3xl text-amber-500'>
					About Us
				</h1>
			</div>
			<div className='w-[1200px] h-[560px] border-2  absolute top-[150px] mx-auto  bg-white/90 shadow-2xl rounded-3xl grid grid-cols-2 overflow-hidden'>
				<div className='col-span-1 inline-block rounded-l-3xl'>
					<Image
						src={'/employe.png'}
						alt='image 1'
						width={590}
						height={461}
						className='rounded-l-3xl shadow-2xl'
					/>
				</div>
				<div className='col-span-1 flex flex-col justify-center items-start gap-4 p-10'>
					<div className='absolute bg-[#F4F4F4] flex items-center justify-center gap-4 w-[250px] h-[30px] top-[10px]'>
						<Image src={'/image2.png'} alt='image' width={25} height={25} />
						<span>Welcome BlueCollar</span>
					</div>
					<h2 className='absolute font-samibold text-4xl w-[536px] h-[60px] top-[60px]'>
						We Provide Your Future
					</h2>
					<p className='absolute tracking-widest font-normal text-muted-foreground text-lg w-[536px] h-[60px] top-[130px]'>
						Bluecollar Electrical services was established in 2008. We are
						trusted and reliable electricians who serve customers in the city as
						well as throughout United States Of America. We have extensive
						experience of domestic and business electrical installations and no
						job is too small. Our customers value our professionalism, work
						ethic and our competitive prices.
					</p>
					<div className='absolute flex items-center justify-start gap-2 w-[575px] h-[240px] top-[320px]'>
						<div className='flex items-center justify-center flex-col gap-2 w-[210px] h-[200px] bg-[#cbcaca] rounded-3xl'>
							<span className='text-9xl flex justify-center items-center text-[#FFB342]'>
								7 <span className='text-8xl'>+</span>
							</span>
							<span className='w-[112px] tracking-widest flex items-center justify-center text-lg font-semibold'>
								Years of experience
							</span>
						</div>
						<div>
							<ul>
								<li>- For all your system requirements</li>
								<li>- For all your system requirements</li>
								<li>- For all your system requirements</li>
								<li>- For all your system requirements</li>
								<li>- For all your system requirements</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About_us
