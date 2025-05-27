'use client'

import { Button } from '@/components/ui/button'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { ArrowUp, Phone, ShoppingCart } from 'lucide-react'

export default function FloatingActions() {
	return (
		<TooltipProvider>
			<div className='fixed right-0 top-1/2 transform -translate-y-1/2 z-50'>
				<div className='bg-[#c3b06eff] rounded-l-2xl shadow-lg py-4 px-2 flex flex-col items-center gap-4'>
					{/* Order Button */}
					<Tooltip>
						<TooltipTrigger asChild>
							<div className='group relative flex items-center'>
								<span className='w-3 h-3 bg-[#c3b06eff] rotate-45 absolute -left-4 hidden group-hover:block'></span>
								<Button size='icon' className='w-12 h-12'>
									<ShoppingCart className='w-5 h-5' />
								</Button>
							</div>
						</TooltipTrigger>
						<TooltipContent side='left'>
							<span>Buyurtma berish</span>
						</TooltipContent>
					</Tooltip>

					{/* Phone Button */}
					<Tooltip>
						<TooltipTrigger asChild>
							<div className='group relative flex items-center'>
								<span className='w-3 h-3 bg-[#c3b06eff] rotate-45 absolute -left-4 hidden group-hover:block'></span>
								<Button size='icon' className='w-12 h-12'>
									<Phone className='w-5 h-5' />
								</Button>
							</div>
						</TooltipTrigger>
						<TooltipContent side='left'>
							<span>Telefon qilish</span>
						</TooltipContent>
					</Tooltip>

					{/* Scroll to Top Button */}
					<Tooltip>
						<TooltipTrigger asChild>
							<div className='group relative flex items-center'>
								<span className='w-3 h-3 bg-[#c3b06eff] rotate-45 absolute -left-4 hidden group-hover:block'></span>
								<Button
									size='icon'
									className='w-12 h-12'
									onClick={() =>
										window.scrollTo({ top: 0, behavior: 'smooth' })
									}
								>
									<ArrowUp className='w-5 h-5' />
								</Button>
							</div>
						</TooltipTrigger>
						<TooltipContent side='left'>
							<span>Yuqoriga qaytish</span>
						</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</TooltipProvider>
	)
}
