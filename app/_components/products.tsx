import Image from 'next/image'
import { Button } from '@/components/ui/button'

const products = [
	{
		id: 1,
		name: 'Doric Column Mold',
		description: 'Classic Doric style column mold for architectural projects',
		image: 'https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg',
		price: '$299.99',
	},
	{
		id: 2,
		name: 'Ionic Column Mold',
		description: 'Elegant Ionic design with distinctive volutes',
		image: 'https://images.pexels.com/photos/5122943/pexels-photo-5122943.jpeg',
		price: '$349.99',
	},
	{
		id: 3,
		name: 'Corinthian Column Mold',
		description: 'Ornate Corinthian style with acanthus leaves',
		image: 'https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg',
		price: '$399.99',
	},
]

const services = [
	{
		id: 1,
		title: 'Custom Column Manufacturing',
		description: 'We create bespoke columns tailored to your specifications',
		icon: '🏛️',
	},
	{
		id: 2,
		title: 'Professional Installation',
		description: 'Expert installation services by our skilled team',
		icon: '🔧',
	},
	{
		id: 3,
		title: 'Design Consultation',
		description: 'Get expert advice for your architectural project',
		icon: '📐',
	},
]

function Products() {
	return (
		<div className="min-h-screen bg-white py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-amber-500 mb-4">Our Products & Services</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Discover our premium collection of Roman column molds and custom manufacturing services. 
						We bring classical architecture to modern construction with quality and precision.
					</p>
				</div>

				{/* Products Section */}
				<div className="mb-20">
					<h3 className="text-2xl font-bold mb-8 text-center">Featured Products</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{products.map((product) => (
							<div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
								<div className="relative h-64">
									<Image
										src={product.image}
										alt={product.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-6">
									<h4 className="text-xl font-semibold mb-2">{product.name}</h4>
									<p className="text-gray-600 mb-4">{product.description}</p>
									<div className="flex justify-between items-center">
										<span className="text-xl font-bold text-amber-500">{product.price}</span>
										<Button className="bg-amber-500 text-white">
											Order Now
										</Button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Services Section */}
				<div>
					<h3 className="text-2xl font-bold mb-8 text-center">Our Services</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{services.map((service) => (
							<div key={service.id} className="bg-gray-50 rounded-lg p-8 text-center">
								<div className="text-4xl mb-4">{service.icon}</div>
								<h4 className="text-xl font-semibold mb-2">{service.title}</h4>
								<p className="text-gray-600">{service.description}</p>
							</div>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center mt-16">
					<Button className="bg-amber-500 text-white text-lg px-8 py-3">
						Request Custom Quote
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Products