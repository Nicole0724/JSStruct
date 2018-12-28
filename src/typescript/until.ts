export class Until {
    /**
     * 16进制 int解析
     * @param arr [0x31,0x31]  arr 长度必须大于2
     * @returns {any}
     */
    RevInt16(arr) {
        let outPut = [];
        if (arr.length < 2) {
            return outPut;
        }

        arr.forEach((_item, index) => {
            if (!(index % 2)) {
                outPut.push((((arr[index + 1] & 0xFFFF) << 8) | (_item & 0xFF)));
            }
        })

        //arr长度小于2时返回单值，大于2时返回数组
        if (arr.length > 2) {
            return outPut;
        } else {
            return outPut[0];
        }
    }


    /**
     *  8进制 int解析
     * @param arryOne 0x31
     * @param arryTwo   0x31
     */
    RevInt8(arryOne) {
        var outPut = (arryOne & 0xFF);
        return outPut;
    }

    /**
     * byte转String
     * @param arr
     * @returns {string}
     */
    RevByteToString(arr) {
        var str = '',
            _arr = arr;

        if (arr.toString().indexOf("0xFF") != (-1)) {
            return str;
        }

        if (typeof arr === 'string') {
            return arr;
        }

        for (var i = 0; i < _arr.length; i++) {
            var one = _arr[i].toString(2);
            if (one == "0x00") {
                continue;
            }
            var v = one.match(/^1+?(?=0)/);
            if (v && one.length == 8) {
                var bytesLength = v[0].length;
                var store = _arr[i].toString(2).slice(7 - bytesLength);
                for (var st = 1; st < bytesLength; st++) {
                    store += _arr[st + i].toString(2).slice(2);
                }
                str += String.fromCharCode(parseInt(store, 2));
                i += bytesLength - 1;
            } else {
                str += String.fromCharCode(_arr[i]);
            }
        }
        return str;
    }

}

