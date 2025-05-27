'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useProductStore } from '@/store/selectedProducts'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

// Server funksiyasi
async function sendMessage(values: {
	username: string
	phone: string
	location: string
	message: string
	selectedProducts: string[]
}) {
	const telegrambotid = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API
	const telegramchatid = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

	if (!telegrambotid || !telegramchatid) {
		throw new Error('Server sozlamalarida xatolik')
	}

	const productListText =
		values.selectedProducts.length > 0
			? values.selectedProducts.map((p, i) => `${i + 1}. ${p}`).join('\n')
			: 'Tanlangan mahsulotlar yo‘q'

	const response = await fetch(
		`https://api.telegram.org/bot${telegrambotid}/sendMessage`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: telegramchatid,
				text: `Yangi xabar:\nIsm: ${values.username}\nTel: ${values.phone}\nEmail: ${values.location}\nXabar: ${values.message}\n\n🛒 Tanlangan mahsulotlar:\n${productListText}`,
			}),
		}
	)

	if (!response.ok) {
		throw new Error('Xabar yuborishda xatolik')
	}

	return { message: 'Xabar yuborildi' }
}

const formSchema = z.object({
	username: z
		.string()
		.min(2, { message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak" }),
	phone: z
		.string()
		.min(9, { message: "Telefon raqami noto'g'ri kiritilgan" })
		.regex(/^\+?[1-9]\d{1,14}$/, {
			message: "Telefon raqami faqat raqamlardan iborat bo'lishi kerak",
		}),
	location: z
		.string()
		.min(3, { message: "Manzil kamida 3 ta belgidan iborat bo'lishi kerak" }),
	message: z
		.string()
		.min(3, { message: "Xabar kamida 3 ta belgidan iborat bo'lishi kerak" }),
})

function ContactDialog({ trigger }: { trigger: React.ReactNode }) {
	const { selectedProducts, resetSelection } = useProductStore()
	const [open, setOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const triggerRef = useRef<HTMLButtonElement>(null)
	const firstInputRef = useRef<HTMLInputElement>(null)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			phone: '',
			location: '',
			message: '',
		},
	})

	useEffect(() => {
		if (open && firstInputRef.current) {
			firstInputRef.current.focus()
		}
	}, [open])

	const closeDialog = () => {
		setOpen(false)
		form.reset()
		triggerRef.current?.focus()
	}

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setIsLoading(true)
			await sendMessage({
				...values,
				selectedProducts: selectedProducts.map(
					p => `${p.name} (Turi: ${p.value})`
				),
			})
			toast.success('Xabaringiz muvaffaqiyatli yuborildi!')
			closeDialog()
			resetSelection()
		} catch (error) {
			toast.error(
				"Xabar yuborishda xatolik yuz berdi. Internet aloqangizni tekshiring va qayta urinib ko'ring."
			)
			console.error('Xabar yuborishda xatolik:', error)
		} finally {
			setIsLoading(false)
		}
	}

	const inputClass =
		'border-[#1C2752]/20 focus:border-[#FFB342] focus:ring-[#FFB342]'

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild ref={triggerRef}>
				{trigger}
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px] bg-white rounded-2xl shadow-xl overflow-hidden'>
				<DialogHeader className='bg-[#1C2752] px-6 py-4 flex items-center justify-between'>
					<DialogTitle className='text-xl font-bold text-white font-spaceGrotesk'>
						BIZ BILAN BOGLANISH
					</DialogTitle>
				</DialogHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='p-6 space-y-4'
					>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium text-gray-700'>
										Ismingiz
									</FormLabel>
									<FormControl>
										<Input
											placeholder="To'liq ismingiz"
											className={inputClass}
											{...field}
											ref={firstInputRef}
											aria-label='Ismingizni kiriting'
										/>
									</FormControl>
									<FormMessage className='text-red-500 text-sm' />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium text-gray-700'>
										Telefon raqamingiz
									</FormLabel>
									<FormControl>
										<Input
											placeholder='+998 XX XXX XX XX'
											type='tel'
											className={inputClass}
											{...field}
											aria-label='Telefon raqamingizni kiriting'
										/>
									</FormControl>
									<FormMessage className='text-red-500 text-sm' />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='location'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium text-gray-700'>
										Manzilingiz
									</FormLabel>
									<FormControl>
										<Input
											placeholder='Samarqand shahri'
											type='text'
											className={inputClass}
											{...field}
											aria-label='Manzilingizni kiriting'
										/>
									</FormControl>
									<FormMessage className='text-red-500 text-sm' />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium text-gray-700'>
										Xabaringiz
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder='Xabaringizni yozing...'
											rows={5}
											className={`min-h-[100px] ${inputClass}`}
											{...field}
											aria-label='Xabaringizni kiriting'
										/>
									</FormControl>
									<FormMessage className='text-red-500 text-sm' />
								</FormItem>
							)}
						/>

						<Button
							type='submit'
							disabled={isLoading}
							className='bg-[#FFB342] hover:bg-[#1C2752] text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 w-full'
							aria-label={isLoading ? 'Xabar yuborilmoqda' : 'Xabarni yuborish'}
						>
							{isLoading ? (
								<>
									<Loader2 className='mr-2 h-4 w-4 animate-spin' />
									Yuborilmoqda...
								</>
							) : (
								'Xabarni yuborish'
							)}
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default ContactDialog
