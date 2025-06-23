'use client'
import { Button } from '@/components/ui/button'
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
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Building2, Clock, Loader2, Phone } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

async function sendMessage(values: {
	username: string
	phone: string
	location: string
	message: string
}) {
	const telegrambotid = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API
	const telegramchatid = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

	if (!telegrambotid || !telegramchatid) {
		throw new Error('Server sozlamalarida xatolik')
	}

	const response = await fetch(
		`https://api.telegram.org/bot${telegrambotid}/sendMessage`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: telegramchatid,
				text: `Yangi xabar:\nIsm: ${values.username}\nTel: ${values.phone}\nEmail: ${values.location}\nXabar: ${values.message}`,
			}),
		}
	)

	if (!response.ok) {
		throw new Error('Xabar yuborishda xatolik')
	}

	return { message: 'Xabar yuborildi' }
}

export const ContactSection = () => {
	const [isLoading, setIsLoading] = useState(false)

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
		location: z.string(),
		message: z
			.string()
			.min(3, { message: "Xabar kamida 3 ta belgidan iborat bo'lishi kerak" }),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			phone: '',
			location: '',
			message: '',
		},
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setIsLoading(true)
			await sendMessage(values)
			toast.success('Xabaringiz muvaffaqiyatli yuborildi!')
			form.reset()
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
		'border-[#1C2752]/20 focus focus:ring-[#FFB342] bg-slate-800 text-white'

	return (
		<section
			id='contact'
			className='relative min-h-screen w-full overflow-hidden bg-slate-950 py-20'
		>
			{/* Background pattern */}
			<div
				className={cn(
					'absolute inset-0',
					'[background-size:40px_40px]',
					'[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
				)}
			/>

			{/* Radial gradient overlay */}
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-slate-950' />

			<div className='container relative  mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='mb-16 text-center'
				>
					<h2 className='text-lg text-primary mb-2 tracking-wider'>Contact</h2>
					<h2 className='text-3xl md:text-4xl font-bold text-white'>
						Connect With Us
					</h2>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 shadow-lg'>
					<div className='p-6'>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className='mb-8 text-muted-foreground'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatum ipsam sint enim exercitationem ex autem corrupti quas
							tenetur
						</motion.p>

						<div className='flex flex-col gap-6'>
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.3 }}
							>
								<div className='flex gap-2 mb-1 items-center'>
									<Building2 className='text-amber-500' />
									<div className='font-bold text-slate-200'>Manzilimiz</div>
								</div>
								<div className='text-slate-400'>Samarqand sh</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4 }}
							>
								<div className='flex gap-2 mb-1 items-center'>
									<Phone className='text-amber-500' />
									<div className='font-bold text-slate-200'>
										Bizga qo&apos;ng&apos;roq qiling
									</div>
								</div>
								<div className='text-slate-400'>+998 99 123 45 67</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.5 }}
							>
								<div className='flex gap-2 items-center'>
									<Clock className='text-amber-500' />
									<div className='font-bold text-slate-200'>Visit us</div>
								</div>
								<div className='text-slate-400'>
									<div>Dushanba - Shanba</div>
									<div>8:00 - 18:00</div>
								</div>
							</motion.div>
						</div>
					</div>

					<Form {...form}>
						<motion.form
							onSubmit={form.handleSubmit(onSubmit)}
							className='p-6 space-y-4 bg-slate-800 rounded-lg shadow-md'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							<FormField
								control={form.control}
								name='username'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='text-sm font-medium text-gray-300'>
											Ismingiz
										</FormLabel>
										<FormControl>
											<Input
												placeholder="To'liq ismingiz"
												className={inputClass}
												{...field}
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
										<FormLabel className='text-sm font-medium text-gray-300'>
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
										<FormLabel className='text-sm font-medium text-gray-300'>
											Manzilingiz:
										</FormLabel>
										<FormControl>
											<Input
												placeholder='Samarqand sh...'
												type='text'
												className={inputClass}
												{...field}
												aria-label='Manzilingizni kiriting:'
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
										<FormLabel className='text-sm font-medium text-gray-300'>
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
								className='bg-[#FFB342] hover:bg-[#e6951d] text-black font-medium px-6 py-3 rounded-lg transition-colors duration-200 w-full mt-4'
								aria-label={
									isLoading ? 'Xabar yuborilmoqda' : 'Xabarni yuborish'
								}
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
						</motion.form>
					</Form>
				</div>
			</div>
		</section>
	)
}
