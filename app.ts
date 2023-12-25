interface TotalPrice {
	price: number
	discount: number
	isInstallment: boolean
	months: number
}

const totalPrice = ({
	price,
	discount,
	isInstallment,
	months,
}: TotalPrice): number => {
	const discountedPrice = price - (price * discount) / 100
	const totalPrice = isInstallment ? discountedPrice : discountedPrice
	const monthlyPayment = totalPrice / months

	return monthlyPayment
}

const price = totalPrice({
	price: 100000,
	discount: 25,
	isInstallment: true,
	months: 12,
})
console.log(price)
