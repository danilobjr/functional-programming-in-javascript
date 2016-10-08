import { Mappable } from 'fp'

class _Container extends Mappable {
    constructor(value) {
        super(value);
    }

    map(f) {
        return super.map(f);
    }
}

const Container = value => new _Container(value)

export {
    Container
}
