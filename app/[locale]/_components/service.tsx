'use client'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'

const service = [
	{
		id: 1,
		name: 'Yetkazib berish',
		description:
			"Yetkazib berish xizmatlari, buyurtmalarni tez va ishonchli yetkazib berish uchun mo'ljallangan.",
		image: '/worker.png',
	},
	{
		id: 2,
		name: 'Quyib berish',
		description:
			'Quyib berish xizmatlari, ishingizni malakali ustalar tomonidan bajariladi',
		image: '/worker.png',
	},
	{
		id: 3,
		name: 'Instruktsiya',
		description:
			"Qoliplar bilan ishlashni o'rganing, bizning malakali ustalarimizdan maslahat oling.",
		image: '/worker.png',
	},
]

export function Service() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	}

	const cardVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
			},
		},
	}

	return (
		<section
			className='relative flex flex-col min-h-screen w-full overflow-hidden items-center justify-center bg-slate-950 p-20'
			id='service'
		>
			<div
				className={cn(
					'absolute inset-0',
					'[background-size:40px_40px]',
					'[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
					'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
				)}
			/>

			<div className='pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-slate-950 ' />

			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='relative text-4xl md:text-5xl font-bold text-amber-500 mb-16'
			>
				Service
			</motion.h2>

			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				className='container mx-auto px-4'
			>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{service.map(item => (
						<motion.div
							key={item.id}
							variants={cardVariants}
							className='group relative'
						>
							<Card className='relative bg-slate-950 overflow-hidden transition-all duration-500 group-hover:transform group-hover:scale-[1.02]'>
								<div className='absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300' />

								<div className='relative p-6 h-[400px] flex flex-col items-center'>
									<h3 className='text-amber-500 text-2xl font-bold mb-6'>
										{item.name}
									</h3>

									<div className='relative w-full h-48 mb-4'>
										<Image
											src={item.image}
											alt={item.name}
											fill
											className='object-cover rounded-lg'
											priority
										/>
									</div>

									<p className='text-amber-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-6 left-6 right-6'>
										{item.description}
									</p>

									<div className='absolute inset-0 pointer-events-none'>
										<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shine-effect' />
										</div>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	)
}
