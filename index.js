const al = document.getElementById("al")
const alsw = document.getElementById("alsw")
const alblank = document.getElementById("alblank")
const mlzn = document.getElementById("mlzn")

const ba = document.getElementById("ba")
const basw = document.getElementById("basw")
const bablank = document.getElementById("bablank")
const mlnaoh = document.getElementById("mlnaoh")

const inputs = document.getElementsByTagName("input")
function getVal(el) {
	return parseFloat(el.value)
}
function calc() {
	let al2 = getVal(al)
	let alsw2 = getVal(alsw)
	let alblank2 = getVal(alblank)
	let mlzn2 = getVal(mlzn)

	let ba2 = getVal(ba)
	let basw2 = getVal(basw)
	let bablank2 = getVal(bablank)
	let mlnaoh2 = getVal(mlnaoh)

	let comb = al2 * basw2

	mlzn.value = Math.round((alblank2 - (al2 * alsw2) / 0.2549) * 10) / 10
	mlnaoh.value = Math.round((bablank2 - (ba2 * comb) / 85.1199) * 10) / 10
}
Array.from(inputs).forEach((element) => {
	element.addEventListener("input", () => calc())
})
