//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort()

let unorderList = document.getElementById("unorderList")
bands.forEach((item, index) => {
	let listItem = document.createElement("li")
	listItem.classList.add("item")
	listItem.innerHTML = item
	unorderList.append(listItem)
})