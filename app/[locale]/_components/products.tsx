'use client'

import ContactDialog from '@/components/shared/contact-dialog'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { products } from '@/constant'
import { cn } from '@/lib/utils'
import { useProductStore } from '@/store/selectedProducts'
import { motion } from 'framer-motion'
import { Package, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

export const Products = () => {
	const { selectedProducts } = useProductStore()

	return (
		<section
			className='relative min-h-screen w-full bg-slate-950 overflow-hidden py-12 sm:py-16 lg:py-20'
			id='products'
		>
			{/* Background Pattern */}
			<div
				className={cn(
					'absolute inset-0',
					'[background-size:30px_30px] sm:[background-size:40px_40px]',
					'[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
				)}
			/>

			{/* Radial Gradient Overlay */}
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-slate-950' />

			{/* Floating Elements */}
			<div className='absolute top-20 left-4 w-16 h-16 bg-amber-500/20 rounded-full blur-xl animate-pulse' />
			<div className='absolute bottom-20 right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000' />

			<div className='container relative mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-center mb-8 sm:mb-12 lg:mb-16'
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
						className='inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-amber-500/20 rounded-full mb-4 sm:mb-6'
					>
						<Package className='w-6 h-6 sm:w-8 sm:h-8 text-amber-500' />
					</motion.div>
					
					<h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4'>
						Bizning{' '}
						<span className='bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent'>
							Mahsulotlarimiz
						</span>
					</h2>
					
					<p className='text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed'>
						Yuqori sifatli qurilish materiallari va professional xizmatlar
					</p>

					{/* Selected Products Counter */}
					{selectedProducts.length > 0 && (
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							className='inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-400 font-medium px-3 py-2 sm:px-4 sm:py-2 rounded-full mt-4 text-sm sm:text-base'
						>
							<ShoppingBag className='w-4 h-4' />
							{selectedProducts.length} ta mahsulot tanlandi
						</motion.div>
					)}
				</motion.div>

				{/* Tabs Section */}
				<Tabs defaultValue='all' className='w-full'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
					>
						<TabsList className='w-full flex flex-wrap justify-center gap-1 sm:gap-2 mb-6 sm:mb-8 lg:mb-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-1 sm:p-2'>
							<TabsTrigger 
								value='all' 
								className='text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 data-[state=active]:bg-amber-600/80 data-[state=active]:text-white'
							>
								Hammasi
							</TabsTrigger>
							<TabsTrigger 
								value='ustun'
								className='text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 data-[state=active]:bg-amber-600/80 data-[state=active]:text-white'
							>
								Ustun
							</TabsTrigger>
							<TabsTrigger 
								value='balyasina'
								className='text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 data-[state=active]:bg-amber-600/80 data-[state=active]:text-white'
							>
								Balyasina
							</TabsTrigger>
							<TabsTrigger 
								value='regel'
								className='text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 data-[state=active]:bg-amber-600/80 data-[state=active]:text-white'
							>
								Regel
							</TabsTrigger>
							<TabsTrigger 
								value='stakan'
								className='text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 data-[state=active]:bg-amber-600/80 data-[state=active]:text-white'
							>
								Stakan
							</TabsTrigger>
							<TabsTrigger 
								value='skameyka'
								className='text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 data-[state=active]:bg-amber-600/80 data-[state=active]:text-white'
							>
								Skameyka
							</TabsTrigger>
						</TabsList>
					</motion.div>

					{/* Tab Contents */}
					<TabsContent value='all'>
						<ProductList items={products} />
					</TabsContent>

					<TabsContent value='ustun'>
						<ProductList
							items={products.filter(item => item.value === 'ustun')}
						/>
					</TabsContent>

					<TabsContent value='balyasina'>
						<ProductList
							items={products.filter(item => item.value === 'balyasina')}
						/>
					</TabsContent>

					<TabsContent value='regel'>
						<ProductList
							items={products.filter(item => item.value === 'regel')}
						/>
					</TabsContent>

					<TabsContent value='stakan'>
						<ProductList
							items={products.filter(item => item.value === 'stakan')}
						/>
					</TabsContent>

					<TabsContent value='skameyka'>
						<ProductList
							items={products.filter(item => item.value === 'skameyka')}
						/>
					</TabsContent>
				</Tabs>

				{/* Bottom CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.6 }}
					className='text-center mt-12 sm:mt-16 lg:mt-20'
				>
					<ContactDialog
						trigger={
							<Button className='bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
								<ShoppingBag className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
								Biz bilan bog'lanish
							</Button>
						}
					/>
				</motion.div>
			</div>
		</section>
	)
}

const ProductList = ({ items }: { items: typeof products }) => {
	const { selectedProducts, toggleProduct } = useProductStore()

	const isSelected = (id: string) =>
		selectedProducts.some(item => item.id === id)

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	}

	const cardVariants = {
		hidden: { 
			y: 40, 
			opacity: 0,
			scale: 0.95,
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

	if (items.length === 0) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className='text-center py-12 sm:py-16'
			>
				<Package className='w-12 h-12 sm:w-16 sm:h-16 text-gray-500 mx-auto mb-4' />
				<p className='text-gray-400 text-base sm:text-lg'>
					Bu kategoriyada mahsulotlar topilmadi
				</p>
			</motion.div>
		)
	}

	return (
		<motion.div
			variants={containerVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.1 }}
		>
			{/* Mobile: 2 columns, Tablet: 3 columns, Desktop: 4 columns */}
			<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6'>
				{items.map((item, index) => (
					<motion.div
						key={item.id}
						variants={cardVariants}
						className='group relative'
						whileHover={{ y: -5, scale: 1.02 }}
						transition={{ type: 'spring', stiffness: 300 }}
					>
						<Card
							className={`${
								isSelected(item.id) 
									? 'ring-2 ring-amber-500 shadow-lg shadow-amber-500/20' 
									: 'ring-1 ring-slate-700/50'
							} bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 overflow-hidden transition-all duration-300 group-hover:border-amber-500/50 group-hover:shadow-xl group-hover:shadow-amber-500/10 h-full`}
						>
							{/* Gradient Background */}
							<div className='absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							
							{/* Shine Effect */}
							<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
								<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shine-effect' />
							</div>

							<CardHeader className='p-3 sm:p-4 pb-2 sm:pb-3'>
								<div className='flex items-center justify-between mb-2'>
									<motion.div
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<Checkbox
											checked={isSelected(item.id)}
											onCheckedChange={() => toggleProduct(item)}
											className='data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500'
										/>
									</motion.div>
									
									{/* Product Number */}
									<div className='w-6 h-6 sm:w-7 sm:h-7 bg-amber-500/20 rounded-full flex items-center justify-center'>
										<span className='text-amber-400 font-bold text-xs'>
											{String(index + 1).padStart(2, '0')}
										</span>
									</div>
								</div>
								
								<CardTitle className='text-center text-amber-400 text-sm sm:text-base font-semibold group-hover:text-amber-300 transition-colors duration-300'>
									{item.name}
								</CardTitle>
							</CardHeader>

							<CardContent className='p-3 sm:p-4 pt-0 flex-1'>
								<div className='relative w-full aspect-square mb-3 sm:mb-4 rounded-lg overflow-hidden bg-slate-800/50'>
									<Image
										src={item.img}
										alt={item.name}
										fill
										className='object-contain p-2 sm:p-3 group-hover:scale-110 transition-transform duration-500'
										sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw'
										loading='lazy'
									/>
									
									{/* Image Overlay */}
									<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
								</div>
							</CardContent>

							<CardFooter className='p-3 sm:p-4 pt-0'>
								<div className='w-full'>
									<p className='text-center text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 line-clamp-2'>
										{item.defination || "Mahsulot haqida ma'lumot"}
									</p>
									
									{/* Action Button - Only visible on hover */}
									<motion.button
										initial={{ opacity: 0, y: 10 }}
										whileHover={{ opacity: 1, y: 0 }}
										className='w-full mt-2 sm:mt-3 bg-gradient-to-r from-amber-500/80 to-amber-600/80 hover:from-amber-500 hover:to-amber-600 text-black font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0'
									>
										Batafsil
									</motion.button>
								</div>
							</CardFooter>

							{/* Selection Indicator */}
							{isSelected(item.id) && (
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									className='absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 bg-amber-500 rounded-full flex items-center justify-center'
								>
									<div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full' />
								</motion.div>
							)}
						</Card>
					</motion.div>
				))}
			</div>
		</motion.div>
	)
}