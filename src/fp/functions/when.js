const when = test => f => x => {
    debugger;
    return test(x) ? f(x) : x;
}

export {
    when
}
