# JSStruct
用js/ts 实现结构体转换，以及解析

使用规则：
1.将需要解析输出的json按照resolveProtocol.ts规则填入即可
2.在项目中调用resolveStruct.ts中的resolveReport函数将目标json和需要解析的结构体传入即可
demo:
let resJson= {
        typeData: [24, 1, 1],
        typeInfoData: [resProLenTypeEnum.Char, resProLenTypeEnum.Int8, resProLenTypeEnum.Int8],
        infoKey: ["barMac", "type", "success"],
        info: {
          cmd: "OAuth",
          data: {
            barMac: "",
            type: 0,
            success: 0
          }
        }
      }
      
  let structArr=[x31,0x61,0x30,0x30,0x34,0x38,0x30,0x30,0x30,0x38,0x35,0x37,0x34,0x31,0x34,0x38,0x33,0x31,0x33,0x35,0x33,0x30,0x32,0x30,0x01,0xC8]


resolveReport(resJson,structArr);//调用函数传入参数即可
