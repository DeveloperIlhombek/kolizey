/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { CardStack } from '@/components/shared/card-stack'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion, useAnimation } from 'framer-motion'
import { PlayIcon, RocketIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
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
		<div className='relative h-screen bg-slate-950 flex justify-center overflow-hidden'>
			<BackgroundCellCore />
			{/* Content */}
			<div className='relative w-full h-full z-0 flex items-center'>
				<div className='container flex items-center flex-col lg:flex-row  justify-center mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-3xl'>
						{/* Tagline */}
						<motion.div
							className='inline-flex items-center justify-center bg-white/25 backdrop-blur-sm text-white font-medium px-4 py-2 rounded-full'
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<RocketIcon className='h-4 w-4 mr-2' />
							<p className='text-sm tracking-wide text-white/80'>
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
							<span className='text-white font-bold bg-gradient-to-r from-amber-400 to-amber-300/70 bg-clip-text px-2'>
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
					<div>
						<CardStack
							items={[
								{
									id: 1,
									name: 'card1',
									designation: 'designation',
									content: (
										<div>
											<Image
												src={'/assets/kolizeykolonna4.png'}
												alt='kolonna'
												width={300}
												height={300}
												className='w-[80%] h-[80%]'
											/>
										</div>
									),
								},
								{
									id: 2,
									name: 'card2',
									designation: 'designation',
									content: (
										<div>
											<Image
												src={'/assets/kolizeykolonna3.png'}
												alt='kolonna'
												width={300}
												height={300}
												className='w-[80%] h-[80%]'
											/>
										</div>
									),
								},
								{
									id: 3,
									name: 'card3',
									designation: 'designation',
									content: (
										<div>
											<Image
												src={'/assets/kolizeykolonna2.png'}
												alt='kolonna'
												width={300}
												height={300}
												className='w-[80%] h-[80%]'
											/>
										</div>
									),
								},
								{
									id: 4,
									name: 'Classical Architecture',
									designation: 'Decorative Pillar',
									content: (
										<div className='relative w-full h-full'>
											<Image
												src={'/assets/kolizeykolonna1.png'}
												alt='Decorative Pillar'
												width={300}
												height={300}
												className='object-cover rounded-2xl'
												sizes='(max-width: 768px) 100vw, 50vw'
											/>
										</div>
									),
								},
							]}
							offset={5}
							scaleFactor={0.03}
						/>
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
			<div className='absolute h-[20rem] inset-y-0  overflow-hidden'>
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
		<div className={cn('flex flex-row  relative z-30', className)}>
			{matrix.map((row, rowIdx) => (
				<div
					key={`matrix-row-${rowIdx}`}
					className='flex flex-col  relative z-20 border-b'
				>
					{row.map((column, colIdx) => {
						const controls = useAnimation()

						useEffect(() => {
							if (clickedCell) {
								const distance = Math.sqrt(
									Math.pow(clickedCell[0] - rowIdx, 2) +
										Math.pow(clickedCell[1] - colIdx, 2)
								)
								controls.start({
									opacity: [0, 1 - distance * 0.1, 0],
									transition: { duration: distance * 0.2 },
								})
							}
						}, [clickedCell])

						return (
							<div
								key={`matrix-col-${colIdx}`}
								className={cn(
									'bg-transparent border-l border-b border-neutral-600',
									cellClassName
								)}
								onClick={() => setClickedCell([rowIdx, colIdx])}
							>
								<motion.div
									initial={{
										opacity: 0,
									}}
									whileHover={{
										opacity: [0, 1, 0.5],
									}}
									transition={{
										duration: 0.5,
										ease: 'backOut',
									}}
									animate={controls}
									className='bg-[rgba(14,165,233,0.3)] h-12 w-12' //  rgba(14, 165, 233, 0.15) for a more subtle effect
								></motion.div>
							</div>
						)
					})}
				</div>
			))}
		</div>
	)
}
