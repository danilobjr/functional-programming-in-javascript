const when = test => f => x =>
    test ? f(x) : x
