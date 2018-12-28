export const resolveProtocol = {
  /**
   * json说明注释：
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
  OAuth: {
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

}
