
//% color="#5C0E7A" iconWidth=40 iconHeight=70
namespace Py_Lib{
    //% block="常用库批量导入&库初始化" blockType="command"
    export function importLib(parameter: any, block: any) {
        Generator.addImport(`import siot\nimport random\nimport base64\nimport cv2`)
    }

    //% block="将(base64)[BASE64CODE]转换为视频[VOIDPATH]" blockType="command"
    //% BASE64CODE.shadow="string" BASE64CODE.defl=" "
    //% VOIDPATH.shadow="string" VOIDPATH.defl="output.mp4"
    export function base64tomp4(parameter: any, block: any) {
        let BASE64CODE=parameter.BASE64CODE.code;
        let VOIDPATH=parameter.VOIDPATH.code;
        Generator.addCode(`mp4_data = base64.b64decode(${BASE64CODE})
with open(${VOIDPATH}, 'wb') as file:
    file.write(mp4_data)`)
 
    }

    //% block="将视频[VOIDPATH]转换为base64" blockType="reporter"
    //% VOIDPATH.shadow="string" VOIDPATH.defl="input.mp4"
    export function mp4tobase64(parameter: any, block: any) {
        let VOIDPATH=parameter.VOIDPATH.code;
        Generator.addDeclaration("mp4_data",`with open(${VOIDPATH}, 'rb') as file:
    mp4_data = file.read()`)   
        Generator.addCode(`base64.b64encode(mp4_data).decode('utf-8')`)
    }

    //% block="将(base64)[BASE64CODE]转换为音频[VOIDPATH]" blockType="command"
    //% BASE64CODE.shadow="string" BASE64CODE.defl=" "
    //% VOIDPATH.shadow="string" VOIDPATH.defl="output.mp3"
    export function base64tomp3(parameter: any, block: any) {
        let BASE64CODE=parameter.BASE64CODE.code;
        let VOIDPATH=parameter.VOIDPATH.code;
        Generator.addCode(`mp3_data = base64.b64decode(${BASE64CODE})
with open(${VOIDPATH}, 'wb') as file:
    file.write(mp3_data)`)
    }

    //% block="将音频[VOIDPATH]转换为base64" blockType="reporter"
    //% VOIDPATH.shadow="string" VOIDPATH.defl="input.mp3"
    export function mp3tobase64(parameter: any, block: any) {
        let VOIDPATH=parameter.VOIDPATH.code;
        Generator.addDeclaration("mp3_data",`with open(${VOIDPATH}, 'rb') as file:
    mp3_data = file.read()`)   
        Generator.addCode(`base64.b64encode(mp3_data).decode('utf-8')`)
    }

    //% block="将(base64)[BASE64CODE]转换为图片[VOIDPATH]" blockType="command"
    //% BASE64CODE.shadow="string" BASE64CODE.defl=" "
    //% VOIDPATH.shadow="string" VOIDPATH.defl="output.png"
    export function base64topng(parameter: any, block: any) {
        let BASE64CODE=parameter.BASE64CODE.code;
        let VOIDPATH=parameter.VOIDPATH.code;
        Generator.addCode(`png_data = base64.b64decode(${BASE64CODE})
with open(${VOIDPATH}, 'wb') as file:
    file.write(png_data)`)
    }

    //% block="将照片[PNGINS]转换为base64" blockType="reporter"
    //% PNGINS.shadow="string" PNGINS.defl="input.png"
    export function pngtobase64(parameter: any, block: any) {
        let PNGINS=parameter.PNGINS.code;
        Generator.addDeclaration("png_data",`with open(${PNGINS}, 'rb') as file:
    png_data = file.read()`)   
        Generator.addCode(`base64.b64encode(png_data).decode('utf-8')`)
    }

    //% block="特殊前缀base64转无前缀base64 [BASE64CODE]" blockType="reporter"
    //% BASE64CODE.shadow="string" BASE64CODE.defl=" "
    export function base64tobase(parameter: any, block: any) {
        let BASE64CODE=parameter.BASE64CODE.code;
        Generator.addCode(`${BASE64CODE}.split(',')[1]`)
    }

    //% block="通用MQTT Siot 初始化 IP[SERVER] 端口[PORT] 用户名[NAME] 密码[PASSWORD] (初始化后可使用Mind+自带的MQTT做后续对接)" blockType="command"
    //% SERVER.shadow="string" SERVER.defl="192.168."
    //% PORT.shadow="int" PORT.defl=1883
    //% NAME.shadow="string" NAME.defl="siot"
    //% PASSWORD.shadow="string" PASSWORD.defl="dfrobot"
    export function MQTTSiotini(parameter: any, block: any) {
        let SERVER=parameter.SERVER.code;
        let PORT=parameter.PORT.code;
        let NAME=parameter.NAME.code;
        let PASSWORD=parameter.PASSWORD.code;
        Generator.addCode(`siot.init(client_id=str(random.randint(10**(16-1), 10**16 - 1)),server=${SERVER},port=${PORT},user=${NAME},password=${PASSWORD})
siot.connect()`)
    }
}
