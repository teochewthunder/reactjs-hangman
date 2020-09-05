const GetRandomIndex = (wordListLength) => {
	let randomIndex = Math.floor(Math.random() * wordListLength) + 1;
	if (randomIndex === wordListLength) randomIndex--;

	return randomIndex;
}

export default GetRandomIndex;	