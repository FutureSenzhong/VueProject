
/*
 * 手机号验证
 * @param {*} value 手机号
 */
export function Phone (value) {
    let regPhone = /^1[3456789][0-9]{9}$/;
    return regPhone.test(value)
}

/**
 * 密码验证
 *@param {*} value 密码
 * */
export function Pwd (value) {
    let regPwd = /^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z]{2,})(?=.*[a-z]{2,})(?=.*[!@#$%^&*?\(\)]).*$/;
    return regPwd.test(value)
}