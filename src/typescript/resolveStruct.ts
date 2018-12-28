import {Until} from "./until";

/**
 * ResPro说明注释：
 * 命令名:{
   *    属性值对应的长度值(typeData):[],
   *    属性值对应的类型(typeInfoData):[],
   *    属性值Key(infoKey):[]
   *    抛出json格式(info):{
   *        cmd:"命令",
   *        data:{ 有效数据使用值 }
   *       }
   * }
 */
interface ResJson {
    typeData: Array<number>,
    typeInfoData: Array<number>,
    infoKey: Array<any>,
    info: {
        cmd: string,
        data: any
    }
}

interface ResolveStructInterface {
    resolveReport(resProData: ResJson, structArr: Array<number>): void;
}


export class ResolveStruct implements ResolveStructInterface {

    constructor(private until: Until) {

    }

    /**
     * 解析byte转换为json抛出
     * @param inpData={
     *
     * }
     */
    resolveReport(resJson: ResJson, structArr: Array<number>) {
        let outPut: any = JSON.parse(JSON.stringify(resJson.info));
        resJson.typeData.forEach((item, index) => {
            switch (resJson.typeInfoData[index]) {
                case resProLenTypeEnum.Char:
                    outPut.data[resJson.infoKey[index]] = this.until.RevByteToString(structArr.splice(0, item));
                    break;
                case resProLenTypeEnum.Int16:
                    outPut.data[resJson.infoKey[index]] = this.until.RevInt16(structArr.splice(0, item));
                    break;
                case resProLenTypeEnum.Int8:
                    outPut.data[resJson.infoKey[index]] = this.until.RevInt8(structArr.splice(0, item));
                    break;
                default:
                    console.log("resolveReport==>解析byte转换为json抛出====>" + outPut.cmd);
            }
        })

        //执行解析成功后的json数据
        console.log(outPut)
    }
}
