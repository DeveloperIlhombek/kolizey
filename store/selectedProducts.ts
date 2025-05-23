// store/selectedProducts.ts
import { create } from 'zustand'

interface Product {
	id: string
	name: string
	img: string
	defination?: string
	value: string
}

interface ProductStore {
	selectedProducts: Product[]
	toggleProduct: (product: Product) => void
	resetSelection: () => void
}

export const useProductStore = create<ProductStore>((set, get) => ({
	selectedProducts: [],
	toggleProduct: product => {
		const { selectedProducts } = get()
		const exists = selectedProducts.some(p => p.id === product.id)

		if (exists) {
			set({
				selectedProducts: selectedProducts.filter(p => p.id !== product.id),
			})
		} else {
			set({
				selectedProducts: [...selectedProducts, product],
			})
		}
	},
	resetSelection: () => set({ selectedProducts: [] }),
}))
