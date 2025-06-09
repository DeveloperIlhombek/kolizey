/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { CardStack } from '@/components/shared/card-stack'
import ContactDialog from '@/components/shared/contact-dialog'
import VideoPlay from '@/components/shared/video-play'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { PlayIcon, RocketIcon } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
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
		<div className='relative min-h-screen bg-slate-950 flex justify-center overflow-hidden'>
			<BackgroundCellCore />
			{/* Content */}
			<div className='relative w-full h-full z-0 flex items-center'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
						{/* Left Content */}
						<div className='order-2 lg:order-1 text-center lg:text-left'>
							{/* Tagline */}
							<motion.div
								className='inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-4 py-2 rounded-full mb-6'
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<RocketIcon className='h-4 w-4 mr-2 text-amber-400' />
								<p className='text-xs sm:text-sm tracking-wide text-white/90'>
									Go&apos;zallik detallarda — har bir ustun o&apos;ziga xos
									asar!
								</p>
							</motion.div>

							{/* Title */}
							<motion.h1
								className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight font-bold mb-6'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.6 }}
							>
								<span className='bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent'>
									RIM USTUNLARI
								</span>
								<br />
								<span className='bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent'>
									QOLIPLARI
								</span>
								<br />
								<span className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/90 font-medium block mt-4'>
									BIRINCHI QO`L, ULGURJI NARXDA
								</span>
							</motion.h1>

							{/* Description */}
							<motion.p
								className='text-white/70 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-8'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6, duration: 0.6 }}
							>
								Yuqori sifatli rim ustunlari qoliplari. Professional ishlar
								uchun mo&apos;ljallangan, zamonaviy texnologiya asosida ishlab
								chiqarilgan.
							</motion.p>

							{/* Buttons */}
							<motion.div
								className='flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start'
								variants={containerVariants}
								initial='hidden'
								animate='visible'
							>
								<motion.div variants={itemVariants}>
									<ContactDialog
										trigger={
											<Button
												className='w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
												size='lg'
											>
												Bog&apos;lanish
											</Button>
										}
									/>
								</motion.div>

								<motion.div
									variants={itemVariants}
									initial='hidden'
									animate='visible'
								>
									<VideoPlay
										trigger={
											<Button
												className='h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white transition-all duration-300 flex items-center justify-center group'
												size='icon'
												aria-label='Play video'
											>
												<PlayIcon className='h-5 w-5 group-hover:scale-110 transition-transform duration-300' />
											</Button>
										}
									/>
								</motion.div>
							</motion.div>
						</div>

						{/* Right Content - Card Stack */}
						<div className='order-1 lg:order-2 flex justify-center lg:justify-end'>
							<motion.div
								className='w-full max-w-sm lg:max-w-md xl:max-w-lg'
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1, duration: 0.8 }}
							>
								<CardStack
									items={[
										{
											id: 1,
											name: 'card1',
											designation: 'designation',
											content: (
												<div className='w-full h-full flex items-center justify-center'>
													<Image
														src={'/assets/kolizeykolonna4.png'}
														alt='kolonna'
														width={250}
														height={250}
														className='w-full h-full object-contain'
													/>
												</div>
											),
										},
										{
											id: 2,
											name: 'card2',
											designation: 'designation',
											content: (
												<div className='w-full h-full flex items-center justify-center'>
													<Image
														src={'/assets/kolizeykolonna3.png'}
														alt='kolonna'
														width={250}
														height={250}
														className='w-full h-full object-contain'
													/>
												</div>
											),
										},
										{
											id: 3,
											name: 'card3',
											designation: 'designation',
											content: (
												<div className='w-full h-full flex items-center justify-center'>
													<Image
														src={'/assets/kolizeykolonna2.png'}
														alt='kolonna'
														width={250}
														height={250}
														className='w-full h-full object-contain'
													/>
												</div>
											),
										},
										{
											id: 4,
											name: 'Classical Architecture',
											designation: 'Decorative Pillar',
											content: (
												<div className='w-full h-full flex items-center justify-center'>
													<Image
														src={'/assets/kolizeykolonna1.png'}
														alt='Decorative Pillar'
														width={250}
														height={250}
														className='w-full h-full object-contain rounded-2xl'
														sizes='(max-width: 768px) 100vw, 50vw'
													/>
												</div>
											),
										},
									]}
									offset={8}
									scaleFactor={0.06}
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero

const BackgroundCellCore = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const ref = useRef<any>(null)

	const handleMouseMove = (event: any) => {
		const rect = ref.current && ref.current.getBoundingClientRect()
		setMousePosition({
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		})
	}

	const size = 300
	return (
		<div
			ref={ref}
			onMouseMove={handleMouseMove}
			className='h-full absolute inset-0 z-0'
		>
			<div className='absolute h-[20rem] inset-y-0 overflow-hidden'>
				<div className='absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black)]'></div>
				<div
					className='absolute inset-0 z-20 bg-transparent'
					style={{
						maskImage: `radial-gradient(
            ${size / 4}px circle at center,
           white, transparent
          )`,
						WebkitMaskImage: `radial-gradient(
          ${size / 4}px circle at center,
          white, transparent
        )`,
						WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
							mousePosition.y - size / 2
						}px`,
						WebkitMaskSize: `${size}px`,
						maskSize: `${size}px`,
						pointerEvents: 'none',
						maskRepeat: 'no-repeat',
						WebkitMaskRepeat: 'no-repeat',
					}}
				>
					<Pattern cellClassName='border-blue-600 relative z-[100]' />
				</div>
				<Pattern className='opacity-[0.5]' cellClassName='border-neutral-700' />
			</div>
		</div>
	)
}

// Alohida komponent yaratdim hook'lar uchun
const PatternCell = ({
	rowIdx,
	colIdx,
	cellClassName,
	clickedCell,
}: {
	rowIdx: number
	colIdx: number
	cellClassName?: string
	clickedCell: any
}) => {
	return (
		<div
			className={cn(
				'bg-transparent border-l border-b border-neutral-600',
				cellClassName
			)}
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileHover={{ opacity: [0, 1, 0.5] }}
				transition={{ duration: 0.5, ease: 'backOut' }}
				animate={
					clickedCell
						? {
								opacity: [
									0,
									1 -
										Math.sqrt(
											Math.pow(clickedCell[0] - rowIdx, 2) +
												Math.pow(clickedCell[1] - colIdx, 2)
										) *
											0.1,
									0,
								],
								transition: {
									duration:
										Math.sqrt(
											Math.pow(clickedCell[0] - rowIdx, 2) +
												Math.pow(clickedCell[1] - colIdx, 2)
										) * 0.2,
								},
							}
						: {}
				}
				className='bg-[rgba(14,165,233,0.3)] h-12 w-12'
			/>
		</div>
	)
}

const Pattern = ({
	className,
	cellClassName,
}: {
	className?: string
	cellClassName?: string
}) => {
	const x = new Array(47).fill(0)
	const y = new Array(30).fill(0)
	const matrix = x.map((_, i) => y.map((_, j) => [i, j]))
	const [clickedCell, setClickedCell] = useState<any>(null)

	return (
		<div className={cn('flex flex-row relative z-30', className)}>
			{matrix.map((row, rowIdx) => (
				<div
					key={`matrix-row-${rowIdx}`}
					className='flex flex-col relative z-20 border-b'
				>
					{row.map((column, colIdx) => (
						<div
							key={`matrix-col-${colIdx}`}
							onClick={() => setClickedCell([rowIdx, colIdx])}
						>
							<PatternCell
								rowIdx={rowIdx}
								colIdx={colIdx}
								cellClassName={cellClassName}
								clickedCell={clickedCell}
							/>
						</div>
					))}
				</div>
			))}
		</div>
	)
}
