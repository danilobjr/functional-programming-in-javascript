const aperture = length => xs => {
    const result = [];
    const numberOfItems = xs.length - length + 1;

    for (let i = 0; i < numberOfItems; i++) {
        const item = [];

        for (let k = i; k < i + length; k++) {
            item.push(xs[k]);
        }

        result.push(item);
    }

    return result;
}

export {
    aperture
}
