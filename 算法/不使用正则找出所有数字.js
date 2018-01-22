const finder = (str = '') => {
    let res = [];
    let temp = '';
    [...str].forEach(e => {
        if ((e <= '9') && (e >= '0')) {
            temp += e
        } else {
            if (temp) {
                res.push(temp);
                temp = ''
            }
        }
    })
    if (temp) {
        res.push(temp);
        temp = ''
    }
    return res;
}

const res = finder('hkj123hdasjkh234flkj123as111hdfkj768safa56d897')
res.forEach(e => {
    console.log(e)
})