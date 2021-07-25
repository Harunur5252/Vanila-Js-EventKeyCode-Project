class Data{
    constructor(){
        
    }
    eventKeyData(e){
        const key = e.key
        const keyCode = e.keyCode
        const code = e.code
        return {
            key,keyCode,code
        }
    }
}

const data = new Data
export default data

