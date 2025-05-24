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
import { useProductStore } from '@/store/selectedProducts'
import Image from 'next/image'

export const Products = () => {
	return (
		<div
			className='flex flex-col min-h-[100vh] w-full bg-slate-950 overflow-hidden p-4'
			id='products'
		>
			<div className='w-full max-w-7xl mx-auto'>
				<Tabs defaultValue='all' className='w-full text-black '>
					<TabsList className='w-full flex justify-center gap-1 items-center mb-6'>
						<TabsTrigger value='all'>Hammasi</TabsTrigger>
						<TabsTrigger value='ustun'>Ustun</TabsTrigger>
						<TabsTrigger value='balyasina'>Balyasina</TabsTrigger>
						<TabsTrigger value='regel'>Regel</TabsTrigger>
						<TabsTrigger value='stakan'>Stakan</TabsTrigger>
						<TabsTrigger value='skameyka'>Skameyka</TabsTrigger>
					</TabsList>

					{/* Hammasi tabi uchun barcha mahsulotlar */}
					<TabsContent value='all'>
						<ProductList items={products} />
					</TabsContent>

					{/* Boshqa tablar uchun filterlangan mahsulotlar */}
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
			</div>
			<div>
				{/* tablar va productlar */}
				<ContactDialog
					trigger={
						<Button className='mt-10 mx-auto block bg-amber-500 hover:bg-amber-600'>
							Biz bilan bog‘lanish
						</Button>
					}
				/>
			</div>
		</div>
	)
}

const ProductList = ({ items }: { items: typeof products }) => {
	const { selectedProducts, toggleProduct } = useProductStore()

	const isSelected = (id: string) =>
		selectedProducts.some(item => item.id === id)

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
			{items.map(item => (
				<Card
					key={item.id}
					className={`${
						isSelected(item.id) ? 'ring-2 ring-amber-500' : ''
					} hover:scale-105 transition-transform relative duration-300 ease-in-out bg-gray-600/30`}
				>
					<CardHeader className='flex items-center gap-2'>
						<Checkbox
							checked={isSelected(item.id)}
							onCheckedChange={() => toggleProduct(item)}
						/>
						<CardTitle className='text-center text-amber-500'>
							{item.name}
						</CardTitle>
					</CardHeader>
					<CardContent className='flex justify-center'>
						<Image
							src={item.img}
							alt={item.name}
							width={300}
							height={300}
							className='object-cover'
						/>
					</CardContent>
					<CardFooter className=' hover:bg-gray-500/50 absolute bottom-2 left-0 right-0 p-4'>
						<p className='text-center text-sm text-gray-500'>
							{item.defination || "Mahsulot haqida ma'lumot"}
						</p>
					</CardFooter>
				</Card>
			))}
		</div>
	)
}
