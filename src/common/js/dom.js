export function addClass(el, className) {
    if (hasClass(el, className))
        return
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

export function hasClass(el, className) {
     
    /**
     * 因为是字符串构建正则，所以要转义一下 let reg2=/(^|\s)aa(\s|$)/ 则不用
     * 加两根斜线，但无法加入变量 className
     */
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}