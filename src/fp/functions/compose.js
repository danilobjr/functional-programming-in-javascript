const compose = (...fs) => x =>
    fs.reduceRight((accu, curr) => curr(accu), x)

export {
    compose
}
