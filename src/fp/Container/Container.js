class _Container  {
    constructor(value) {
        this.value = value;
    }

    map(f) {
        return Container(f(this.value));
    }
}

const Container = value => new _Container(value)

export {
    Container
}
