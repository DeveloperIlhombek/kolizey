import { navlink } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import { SlLocationPin } from 'react-icons/sl'

function Footer() {
	return (
		<footer className='container relative mx-auto grid grid-cols-1 gap-6 bg-slate-900 p-4 text-gray-50 shadow-inner shadow-[#c3b06eff] ring-2 backdrop-blur-sm transition duration-500 group-hover:duration-500 dark:ring-0 sm:p-6 md:grid-cols-9'>
			{/* Logo Section */}
			<div className='col-span-1 flex flex-col items-center md:col-span-2 md:items-start'>
				<Image
					src='/kolizeylogo.png'
					alt='Kolizey Logo'
					width={150}
					height={150}
					className='h-auto max-w-full object-contain'
					loading='lazy'
				/>
				<h1 className='mt-2 text-center text-2xl font-bold text-[#c3b06eff] font-space-grotesk md:text-left md:text-3xl'>
					Kolizey
				</h1>
			</div>

			{/* Navigation Links Section */}
			<div className='col-span-1 grid grid-cols-1 gap-4 md:col-span-4 md:grid-cols-2'>
				<div className='flex flex-col gap-4 font-serif'>
					<h2 className='text-center text-2xl font-bold text-[#c3b06eff] md:text-left md:text-3xl'>
						Havolalar
					</h2>
					<div className='relative z-10 flex flex-col gap-2'>
						{navlink.map(item => (
							<Link
								href={item.route}
								key={item.label}
								className='text-center text-sm font-semibold text-black dark:text-white md:text-left md:text-base'
							>
								{item.label}
							</Link>
						))}
						{/* Decorative Elements - Adjusted for Responsiveness */}
						<div className='before:absolute before:-z-10 before:h-24 before:w-24 before:rounded-full before:bg-yellow-200 before:blur-2xl before:transition before:duration-700 after:absolute after:-z-10 after:h-16 after:w-16 after:rounded-full after:bg-blue-500 after:blur-xl after:transition after:duration-500 md:before:h-32 md:before:w-32 md:after:h-24 md:after:w-24 before:top-20 before:left-1/2 before:-translate-x-1/2 after:bottom-20 after:left-1/4 after:-translate-x-1/2 group-hover:before:-translate-y-8 group-hover:before:translate-x-8 group-hover:after:translate-x-8 group-hover:after:translate-y-12 md:before:left-3/4 md:after:left-1/4'></div>
					</div>
				</div>
			</div>

			{/* Map and Address Section */}
			<div className='col-span-1 flex flex-col items-center md:col-span-3 md:items-start'>
				<h2 className='text-center text-2xl font-bold text-[#c3b06eff] md:text-left md:text-3xl'>
					Manzil
				</h2>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.23345321683!2d66.95548167548847!3d39.64446030228089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19cb14364aa7%3A0x5744a105b44f5139!2s%22Ipak%20yo%E2%80%98li%22%20turizm%20va%20madaniy%20meros%20xalqaro%20universiteti!5e0!3m2!1sen!2s!4v1728451383312!5m2!1sen!2s'
					className='mt-4 h-40 w-full rounded-2xl sm:h-44 md:h-48'
					loading='lazy'
					title='Joylashuv'
				></iframe>
				<div className='mt-4 flex items-center justify-center gap-2 font-serif text-black dark:text-white md:justify-start'>
					<SlLocationPin className='text-blue-500' size={20} />
					<p className='text-center text-xs sm:text-sm'>
						University Boulevard 17 str, 140104, Samarqand Region
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
