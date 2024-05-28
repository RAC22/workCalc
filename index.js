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
Array.from(inputs).forEach((element) => {
	element.addEventListener("input", function (event) {
		const solveForSW = document.getElementById("Sample Weight").checked
		const solveForML = document.getElementById("ML titrated").checked
		let al2 = getVal(al)
		let alsw2 = getVal(alsw)
		let alblank2 = getVal(alblank)
		let mlzn2 = getVal(mlzn)

		let ba2 = getVal(ba)
		let basw2 = getVal(basw)
		let bablank2 = getVal(bablank)
		let mlnaoh2 = getVal(mlnaoh)

		let comb = al2 * basw2

		//mlzn.value
		let finalmlzn = Math.round((alblank2 - (al2 * alsw2) / 0.2549) * 10) / 10

		//mlnaoh.value
		let finalmlnaoh = Math.round((bablank2 - (ba2 * comb) / 85.1199) * 10) / 10

		//alsw.value
		let finalalsw =
			Math.round((((alblank2 - mlzn2) * 0.2549) / al2) * 1000) / 1000

		//basw.value
		let finalbasw =
			Math.round((((bablank2 - mlnaoh2) * 85.1199) / (al2 * ba2)) * 1000) / 1000
		if (solveForML) {
			if (!isNaN(finalmlzn)) {
				mlzn.value = finalmlzn
			}
			if (!isNaN(finalmlnaoh)) {
				mlnaoh.value = finalmlnaoh
			}
		} else {
			if (!isNaN(finalalsw)) {
				alsw.value = finalalsw
			}
			if (!isNaN(finalbasw)) {
				basw.value = finalbasw
			}
		}
	})
})
