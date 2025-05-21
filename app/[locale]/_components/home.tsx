import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { PlayIcon, RocketIcon } from 'lucide-react'
import '../app.css'

function Hero() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.8,
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	}

	return (
		<motion.section
			className='relative w-full h-screen overflow-hidden'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			{/* Background */}
			<div className='absolute inset-0 w-full h-full z-0'>
				<div className='absolute inset-0 bg-black/50 z-0' />
				<motion.div
					className='absolute inset-0 w-full h-full bg-center bg-cover'
					style={{
						backgroundImage: 'url(./hero.png)',
					}}
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1.5, ease: 'easeOut' }}
				/>
			</div>

			{/* Content */}
			<div className='relative w-full h-full z-0 flex items-center'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-3xl'>
						{/* Tagline */}
						<motion.div
							className='inline-flex items-center justify-center bg-white/25 backdrop-blur-sm text-white font-medium px-4 py-2 rounded-full'
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<RocketIcon className='h-4 w-4 mr-2' />
							<p className='text-sm tracking-wide'>
								Go&apos;zallik detallarda — har bir ustun o&apos;ziga xos asar!
							</p>
						</motion.div>

						{/* Title */}
						<motion.h1
							className='mt-4 md:mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
						>
							<span className='text-transparent font-bold bg-gradient-to-r from-amber-400 to-amber-300/70 bg-clip-text px-2'>
								Kolizey
							</span>{' '}
							architectural masterpieces in every detail
						</motion.h1>

						{/* Buttons */}
						<motion.div
							className='mt-8 flex flex-wrap gap-4'
							variants={containerVariants}
							initial='hidden'
							animate='visible'
						>
							<motion.div variants={itemVariants}>
								<Button
									className='h-12 px-6 bg-amber-400 hover:bg-amber-500 text-black font-medium text-base transition-all'
									size='lg'
								>
									Bog&apos;lanish
								</Button>
							</motion.div>

							<motion.div variants={itemVariants}>
								<Button
									className='h-12 w-12 rounded-full bg-amber-400 hover:bg-amber-500 text-black transition-all flex items-center justify-center'
									size='icon'
									aria-label='Play video'
								>
									<PlayIcon className='h-5 w-5' />
								</Button>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Hero
