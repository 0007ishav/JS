function validateNo(num) {
    let pattern = /^[6-9]\d{9}$/
    return pattern.test(num)
}

console.log(validateNo(8295053669));