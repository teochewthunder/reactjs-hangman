const RemoveIllegalCharacters = (word) => {
	let newWord = word.replace(/[^a-z]/gi, '');
	return newWord.toLowerCase();
}

export default RemoveIllegalCharacters;	