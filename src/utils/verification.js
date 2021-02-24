
/*手机号验证*/
export function checkPhone (value) {
    let regPhone = /^1[3456789][0-9]{9}$/;
    return regPhone.test(value)
}