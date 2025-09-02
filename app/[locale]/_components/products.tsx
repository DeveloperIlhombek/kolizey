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

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 12,
			},
		},
	}

	return (
		<section
			className='relative min-h-screen w-full bg-slate-950 overflow-hidden py-16 lg:py-24'
			id='products'
		>
			{/* Background Pattern */}
			<div
				className={cn(
					'absolute inset-0',
					'[background-size:40px_40px]',
					'[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
				)}
			/>

			{/* Radial Gradient Overlay */}
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-slate-950' />

			<div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='text-center mb-12 lg:mb-16'
				>
					<div className='inline-flex items-center justify-center bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400 font-medium px-4 py-2 rounded-full mb-6'>
						<Package className='h-4 w-4 mr-2' />
						<span>Mahsulotlarimiz</span>
					</div>
					<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4'>
						<span className='bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent'>
							Premium
						</span>{' '}
						<span className='text-white'>Qoliplar</span>
					</h2>
					<p className='text-white/70 text-lg lg:text-xl max-w-3xl mx-auto'>
						Yuqori sifatli rim ustunlari qoliplari. Professional ishlar uchun
						moljallangan, zamonaviy texnologiya asosida ishlab chiqarilgan
						mahsulotlar.
					</p>
				</motion.div>

				{/* Products Section */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					className='w-full max-w-7xl mx-auto'
				>
					<Tabs defaultValue='all' className='w-full'>
						{/* Enhanced Tab Navigation */}
						<motion.div
							variants={itemVariants}
							className='flex justify-center mb-8 lg:mb-12'
						>
							<TabsList className='bg-slate-800/50 backdrop-blur-sm border border-white/10 p-1 rounded-xl'>
								<TabsTrigger
									value='all'
									className='data-[state=active]:bg-amber-500 data-[state=active]:text-black text-white/70 px-4 py-2 rounded-lg font-medium transition-all duration-300'
								>
									<Package className='h-4 w-4 mr-2' />
									Hammasi
								</TabsTrigger>
								<TabsTrigger
									value='ustun'
									className='data-[state=active]:bg-amber-500 data-[state=active]:text-black text-white/70 px-4 py-2 rounded-lg font-medium transition-all duration-300'
								>
									Ustun
								</TabsTrigger>
								<TabsTrigger
									value='balyasina'
									className='data-[state=active]:bg-amber-500 data-[state=active]:text-black text-white/70 px-4 py-2 rounded-lg font-medium transition-all duration-300'
								>
									Balyasina
								</TabsTrigger>
								<TabsTrigger
									value='regel'
									className='data-[state=active]:bg-amber-500 data-[state=active]:text-black text-white/70 px-4 py-2 rounded-lg font-medium transition-all duration-300'
								>
									Regel
								</TabsTrigger>
								<TabsTrigger
									value='stakan'
									className='data-[state=active]:bg-amber-500 data-[state=active]:text-black text-white/70 px-4 py-2 rounded-lg font-medium transition-all duration-300'
								>
									Stakan
								</TabsTrigger>
								<TabsTrigger
									value='skameyka'
									className='data-[state=active]:bg-amber-500 data-[state=active]:text-black text-white/70 px-4 py-2 rounded-lg font-medium transition-all duration-300'
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

					{/* Selected Products Counter & Contact Button */}
					<motion.div
						variants={itemVariants}
						className='mt-12 lg:mt-16 text-center'
					>
						{selectedProducts.length > 0 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								className='inline-flex items-center bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400 font-medium px-4 py-2 rounded-full mb-6'
							>
								<ShoppingBag className='h-4 w-4 mr-2' />
								<span>{selectedProducts.length} ta mahsulot tanlandi</span>
							</motion.div>
						)}

						<ContactDialog
							trigger={
								<Button
									size='lg'
									className='bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
								>
									Biz bilan boglanish
								</Button>
							}
						/>
					</motion.div>
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
			},
		},
	}

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 12,
			},
		},
	}

	if (items.length === 0) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className='text-center py-16'
			>
				<Package className='h-16 w-16 text-white/30 mx-auto mb-4' />
				<p className='text-white/60 text-lg'>
					Bu kategoriyada mahsulot topilmadi
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
			className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8'
		>
			{items.map(item => (
				<motion.div key={item.id} variants={cardVariants} className='group'>
					<Card
						className={cn(
							'relative overflow-hidden bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 cursor-pointer',
							isSelected(item.id) &&
								'ring-2 ring-amber-500 border-amber-500/70 bg-slate-900/70'
						)}
						onClick={() => toggleProduct(item)}
					>
						{/* Selection Indicator */}
						<div className='absolute top-4 right-4 z-10'>
							<div
								className={cn(
									'w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300',
									isSelected(item.id)
										? 'bg-amber-500 border-amber-500'
										: 'border-white/30 bg-slate-800/50 group-hover:border-amber-500/50'
								)}
							>
								<Checkbox
									checked={isSelected(item.id)}
									onCheckedChange={() => toggleProduct(item)}
									className='w-4 h-4 border-none bg-transparent data-[state=checked]:bg-transparent'
								/>
							</div>
						</div>

						{/* Hover Overlay */}
						<div className='absolute inset-0 bg-gradient-to-t from-amber-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]' />

						<CardHeader className='pb-4'>
							<CardTitle className='text-amber-400 text-lg font-semibold group-hover:text-amber-300 transition-colors duration-300'>
								{item.name}
							</CardTitle>
						</CardHeader>

						<CardContent className='px-6 pb-4'>
							<div className='relative aspect-square mb-4 overflow-hidden rounded-lg bg-slate-800/30'>
								<Image
									src={item.img}
									alt={item.name}
									fill
									className='object-contain p-4 group-hover:scale-110 transition-transform duration-500'
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
								/>

								{/* Shine Effect */}
								<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
									<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent shine-effect' />
								</div>
							</div>

							{/* Product Type Badge */}
							<div className='inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white/80 text-xs font-medium px-3 py-1 rounded-full'>
								<span className='w-2 h-2 bg-amber-400 rounded-full mr-2' />
								{item.value}
							</div>
						</CardContent>

						<CardFooter className='pt-0 pb-6'>
							<p className='text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300'>
								{item.defination || 'Professional sifatli mahsulot'}
							</p>
						</CardFooter>

						{/* Selection Glow Effect */}
						{isSelected(item.id) && (
							<div className='absolute inset-0 rounded-lg bg-amber-500/5 pointer-events-none' />
						)}
					</Card>
				</motion.div>
			))}
		</motion.div>
	)
}
