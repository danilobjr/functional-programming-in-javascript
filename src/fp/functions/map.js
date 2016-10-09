const map = f => xs =>
    xs.reduce((accu, curr) => {
        accu.push(f(curr));
        return accu;
    }, [])

export {
    map
}
