// c 	Matches any literal character c
// .	Matches any single character
// ^	Matches the beginning of the input string
// $	Matches the end of the input string
// *	Matches zero or more occurences of the previous character

var match = function(regexp, text){
	var matchHere = function(regexp, text){
		if(regexp.length === 0) return true;
		if(regexp[1] === "*") return matchStar(regexp[0], regexp.slice(2), text);
		if(regexp[0] === "$" && regexp.length === 1) return text.length === 0;
		if(text.length > 0 && (regexp[0] === "." || regexp[0] === text[0])) return matchHere(regexp.slice(1), text.slice(1));
		return false;
	}
	var matchStar = function(c, regexp, text){
		do{
			if(matchHere(regexp, text)) return true;
		}while(text.length > 0 && (text[1] === c || c === "."));
	}
	if(!regexp || !text) return false;
	if(regexp[0] === "^") return matchHere(regexp.slice(1), text);
	do{
		if(matchHere(regexp, text)) return true;
		text = text.slice(1);
	}while(text.length > 0);
	return false;
}

// Tests

console.log(match("abcd", "abcd"));		// True
console.log(match("abcd", "zabcdz"));		// True
console.log(match("^abcd", "abcdef"));		// True
console.log(match("^abcd", "zabcdef"));		// False
console.log(match("abcd$", "abcd"));		// True
console.log(match("abcd$", "abcdz"));		// False
console.log(match("a..d*", "abcddddf"));	// True
console.log(match("a..d*", "azza"));		// True
console.log(match("a..d*", "bsddddd"));		// False
