'use client'

import { Button } from '@/components/ui/button'
import { ArrowUp, Phone, ShoppingCart } from 'lucide-react'

export default function FloatingActions() {
	return (
		<div className='fixed right-0 top-1/2 transform -translate-y-1/2 z-50 overflow-hidden'>
			<div className='bg-slate-700 rounded-l-2xl shadow-lg py-4 px-2 flex flex-col items-center gap-4'>
				{/* Order Button */}
				<div className='group relative flex items-center'>
					<span className='w-3 h-3 bg-amber-400 rotate-45 absolute -left-4 hidden group-hover:block'></span>
					<Button size='icon' className='w-12 h-12'>
						<ShoppingCart className='w-5 h-5' />
					</Button>
				</div>

				{/* Phone Button */}
				<div className='group relative flex items-center'>
					<span className='w-3 h-3 bg-amber-400 rotate-45 absolute -left-4 hidden group-hover:block'></span>
					<Button size='icon' className='w-12 h-12'>
						<Phone className='w-5 h-5' />
					</Button>
				</div>

				{/* Scroll to Top Button */}
				<div className='group relative flex items-center'>
					<span className='w-3 h-3 bg-amber-400 rotate-45 absolute -left-4 hidden group-hover:block'></span>
					<Button
						size='icon'
						className='w-12 h-12'
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						<ArrowUp className='w-5 h-5' />
					</Button>
				</div>
			</div>
		</div>
	)
}
