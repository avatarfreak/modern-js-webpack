const validation = (arg) => {
    let patt = /^\d+$/
    if (!arg.match(patt)){
        return true
    }
}

export {validation}