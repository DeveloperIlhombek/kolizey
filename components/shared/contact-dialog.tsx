'use client'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const formSchema = z.object({
	username: z
		.string()
		.min(2, { message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak" }),
	phone: z.string().min(9, { message: "Telefon raqami noto'g'ri kiritilgan" }),
	email: z.string().email({ message: "Noto'g'ri email formati" }),
	message: z
		.string()
		.min(3, { message: "Xabar kamida 3 ta belgidan iborat bo'lishi kerak" }),
})

function ContactDialog({ trigger }: { trigger: React.ReactNode }) {
	const [open, setOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			phone: '',
			email: '',
			message: '',
		},
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setIsLoading(true)
			const telegrambotid = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API!
			const telegramchatid = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!

			const response = await fetch(
				`https://api.telegram.org/bot${telegrambotid}/sendMessage`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						chat_id: telegramchatid,
						text: `Yangi xabar:\nIsm: ${values.username}\nTel: ${values.phone}\nEmail: ${values.email}\nXabar: ${values.message}`,
					}),
				}
			)

			if (!response.ok) throw new Error('Xabar yuborishda xatolik yuz berdi')

			toast.success('Xabaringiz muvaffaqiyatli yuborildi!')
			form.reset()
			setOpen(false)
		} catch (error) {
			toast.error(
				"Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urunib ko'ring."
			)
			console.error('Xabar yuborishda xatolik:', error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className='sm:max-w-[425px] bg-background backdrop:bg-black/50 backdrop:backdrop-blur-sm'>
				<DialogHeader>
					<DialogTitle className='text-xl text-center font-bold text-primary'>
						BIZ BILAN BOG&apos;LANISH
					</DialogTitle>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Ismingiz</FormLabel>
									<FormControl>
										<Input placeholder="To'liq ismingiz" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Telefon raqamingiz</FormLabel>
									<FormControl>
										<Input
											placeholder='+998 XX XXX XX XX'
											type='tel'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email manzilingiz</FormLabel>
									<FormControl>
										<Input
											placeholder='email@example.com'
											type='email'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Xabaringiz</FormLabel>
									<FormControl>
										<Textarea
											placeholder='Xabaringizni yozing...'
											rows={5}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type='submit' disabled={isLoading} className='w-full'>
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
