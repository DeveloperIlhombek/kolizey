import { Button } from '@/components/ui/button'

function Sidecontact() {
	return (
		<section className='w-30 h-60 border bg-slate-700 rounded-l-4xl overflow-hidden mx-auto'>
			<div className='flex flex-col justify-center items-center gap-3'>
				<div className='flex flex-row justify-center items-center gap-0 group'>
					<span className='w-8 h-8 border bg-amber-400 rotate-z-45 hidden group-hover:block'></span>
					<Button className='w-24 ml-5 h-16'>dd</Button>
				</div>
				<div className='flex flex-row justify-center items-center gap-0 group'>
					<span className='w-8 h-8 border bg-amber-400 rotate-z-45 hidden group-hover:block'></span>
					<Button className='w-24 ml-5 h-16'>dd</Button>
				</div>
				<div className='flex flex-row justify-center items-center gap-0 group'>
					<span className='w-8 h-8 border bg-amber-400 rotate-z-45 hidden group-hover:block'></span>
					<Button className='w-24 ml-5 h-16'>dd</Button>
				</div>
			</div>
		</section>
	)
}

export default Sidecontact
