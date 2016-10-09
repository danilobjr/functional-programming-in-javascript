import { 
    compose, split, head, 
    join, filter, not,
    equals, when, size, 
    toUpper, map, aperture,
    toLower, tail
} from 'fp'

const splitWordAfterFirstLetter = w => {
	const wordSplited = split('')(w);
    const restOfWord = compose(join(''), tail);

	return [head(wordSplited), restOfWord(wordSplited)];
}

const toUpperWhenLengthIsOne = when(compose(equals(1), size))(toUpper);
const getFirstTwoLettersOfAWord = compose(join(''), head, aperture(2), split(''));
const capitalizeWord = compose(join(''), map(toUpperWhenLengthIsOne), splitWordAfterFirstLetter);

const correctName = compose(capitalizeWord, toLower, join(''), map(getFirstTwoLettersOfAWord), split(' '));

export {
    correctName
}
