const compose = (...fs) => x =>
    fs.reduce((accu, curr) => curr(accu), x)

export {
    compose
}
