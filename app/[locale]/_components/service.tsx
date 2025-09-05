'use client'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Clock, Truck } from 'lucide-react'
import Image from 'next/image'

const service = [
	{
		id: 1,
		name: 'Yetkazib berish',
		description:
			"Yetkazib berish xizmatlari, buyurtmalarni tez va ishonchli yetkazib berish uchun mo'ljallangan.",
		image: '/worker.png',
		icon: <Truck className="w-8 h-8" />,
		features: ['Tez yetkazib berish', 'Ishonchli xizmat', 'Bepul konsultatsiya'],
		color: 'from-blue-500 to-cyan-500',
		bgColor: 'bg-blue-500/10',
	},
	{
		id: 2,
		name: 'Quyib berish',
		description:
			'Quyib berish xizmatlari, ishingizni malakali ustalar tomonidan bajariladi',
		image: '/worker.png',
		icon: <CheckCircle className="w-8 h-8" />,
		features: ['Malakali ustalar', 'Sifatli materiallar', 'Kafolat beriladi'],
		color: 'from-green-500 to-emerald-500',
		bgColor: 'bg-green-500/10',
	},
	{
		id: 3,
		name: 'Instruktsiya',
		description:
			"Qoliplar bilan ishlashni o'rganing, bizning malakali ustalarimizdan maslahat oling.",
		image: '/worker.png',
		icon: <Clock className="w-8 h-8" />,
		features: ['Bepul o\'qitish', 'Amaliy mashg\'ulotlar', '24/7 yordam'],
		color: 'from-purple-500 to-pink-500',
		bgColor: 'bg-purple-500/10',
	},
]

export function Service() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	}

	const cardVariants = {
		hidden: { 
			y: 60, 
			opacity: 0,
			scale: 0.9,
		},
		visible: {
			y: 0,
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 15,
				duration: 0.6,
			},
		},
	}

	const iconVariants = {
		hidden: { scale: 0, rotate: -180 },
		visible: {
			scale: 1,
			rotate: 0,
			transition: {
				type: 'spring',
				stiffness: 200,
				damping: 15,
				delay: 0.2,
			},
		},
	}

	return (
		<section
			className='relative flex flex-col min-h-screen w-full overflow-hidden items-center justify-center bg-slate-950 px-4 sm:px-6 lg:px-20 py-12 lg:py-20'
			id='service'
		>
			{/* Background Pattern */}
			<div
				className={cn(
					'absolute inset-0',
					'[background-size:40px_40px] sm:[background-size:60px_60px]',
					'[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
				)}
			/>

			{/* Radial Gradient Overlay */}
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-slate-950' />

			{/* Floating Elements */}
			<div className='absolute top-20 left-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl animate-pulse' />
			<div className='absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000' />

			{/* Header Section */}
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='text-center mb-12 lg:mb-20 relative z-10'
			>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
					className='inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-6'
				>
					<div className='w-8 h-8 bg-amber-500 rounded-full' />
				</motion.div>
				
				<h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4'>
					Bizning{' '}
					<span className='bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent'>
						Xizmatlarimiz
					</span>
				</h2>
				
				<p className='text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed'>
					Professional xizmatlar bilan sizning loyihalaringizni hayotga tatbiq etamiz
				</p>
			</motion.div>

			{/* Services Grid */}
			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.2 }}
				className='container mx-auto px-4 relative z-10'
			>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'>
					{service.map((item, index) => (
						<motion.div
							key={item.id}
							variants={cardVariants}
							className='group relative'
							whileHover={{ y: -10 }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<Card className='relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 overflow-hidden transition-all duration-500 group-hover:border-amber-500/50 group-hover:shadow-2xl group-hover:shadow-amber-500/10 h-full'>
								{/* Gradient Background */}
								<div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
								
								{/* Shine Effect */}
								<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
									<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shine-effect' />
								</div>

								<div className='relative p-6 lg:p-8 h-full flex flex-col'>
									{/* Icon Section */}
									<motion.div
										variants={iconVariants}
										className={`inline-flex items-center justify-center w-16 h-16 ${item.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
									>
										<div className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
											{item.icon}
										</div>
									</motion.div>

									{/* Content */}
									<div className='flex-1 flex flex-col'>
										<h3 className='text-white text-xl lg:text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors duration-300'>
											{item.name}
										</h3>

										<p className='text-gray-400 text-sm lg:text-base leading-relaxed mb-6 flex-1'>
											{item.description}
										</p>

										{/* Features List */}
										<div className='space-y-2 mb-6'>
											{item.features.map((feature, idx) => (
												<motion.div
													key={idx}
													initial={{ opacity: 0, x: -20 }}
													whileInView={{ opacity: 1, x: 0 }}
													transition={{ delay: 0.1 * idx }}
													className='flex items-center gap-2 text-sm text-gray-300'
												>
													<div className={`w-1.5 h-1.5 bg-gradient-to-r ${item.color} rounded-full`} />
													{feature}
												</motion.div>
											))}
										</div>

										{/* Image Section */}
										<div className='relative w-full h-32 lg:h-40 mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500'>
											<Image
												src={item.image}
												alt={item.name}
												fill
												className='object-cover'
												sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
											/>
											<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
										</div>

										{/* Action Button */}
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className={`w-full bg-gradient-to-r ${item.color} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg`}
										>
											Batafsil ma'lumot
											<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
										</motion.button>
									</div>
								</div>

								{/* Card Number */}
								<div className='absolute top-4 right-4 w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center'>
									<span className='text-amber-400 font-bold text-sm'>
										{String(index + 1).padStart(2, '0')}
									</span>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Bottom CTA Section */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5, duration: 0.6 }}
				className='text-center mt-12 lg:mt-20 relative z-10'
			>
				<p className='text-gray-400 text-base lg:text-lg mb-6'>
					Qo'shimcha savollaringiz bormi?
				</p>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className='bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl'
				>
					Biz bilan bog'laning
				</motion.button>
			</motion.div>
		</section>
	)
}