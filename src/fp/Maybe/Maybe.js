class _Maybe  {
    constructor(value) {
        this.value = value;
    }

    map(f) {
        return !!this.value ? Maybe(f(this.value)) : Maybe(null);
    }
}

const Maybe = value => new _Maybe(value)

export {
    Maybe
}
