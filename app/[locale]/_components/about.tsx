'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function About() {
	return (
		<section
			className='relative flex flex-col min-h-screen w-full overflow-hidden items-center justify-center bg-slate-950 p-20'
			id='about'
		>
			<div
				className={cn(
					'absolute inset-0',
					'[background-size:40px_40px]',
					'[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
					'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
				)}
			/>

			<div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />

			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='relative text-4xl md:text-5xl font-bold text-amber-500 mb-16'
			>
				About Us
			</motion.h2>

			<div className='container mx-auto px-4'>
				<div className='relative flex flex-col lg:flex-row items-center justify-between gap-8'>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='flex-1 space-y-6'
					>
						<h3 className='text-2xl md:text-3xl font-bold text-[#1C2752] dark:text-[#FFB342] mb-4'>
							Professional Construction Services
						</h3>
						<p className='text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
							We are dedicated to providing top-quality construction services
							with a focus on innovation, reliability, and customer
							satisfaction. Our team of experienced professionals ensures that
							every project is completed to the highest standards.
						</p>
						<div className='space-y-4'>
							<div className='flex items-center gap-3'>
								<div className='h-2 w-2 rounded-full bg-[#FFB342]' />
								<p className='text-gray-700 dark:text-gray-300'>
									Expert Team of Professionals
								</p>
							</div>
							<div className='flex items-center gap-3'>
								<div className='h-2 w-2 rounded-full bg-[#FFB342]' />
								<p className='text-gray-700 dark:text-gray-300'>
									High-Quality Materials
								</p>
							</div>
							<div className='flex items-center gap-3'>
								<div className='h-2 w-2 rounded-full bg-[#FFB342]' />
								<p className='text-gray-700 dark:text-gray-300'>
									Timely Project Completion
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='flex-1 relative'
					>
						<div className='relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden'>
							<div className='absolute inset-0 bg-[#1C2752] opacity-10 z-10' />
							<Image
								src='/worker.png'
								alt='Construction Worker'
								fill
								className='object-cover rounded-lg'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								priority
							/>
							<div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1C2752]/50 to-transparent z-20' />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
