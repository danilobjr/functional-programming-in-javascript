class Mappable {
    constructor(value) {
        this.value = value;
    }

    map(f) {
        return f(this.value);
    }
}

export {
    Mappable
}
