import data from "./data"

class UI{
    constructor(){

    }
    selectors(){
        const textBoxElm = document.querySelector('.textBox')
        const textPElm = document.querySelector('.textP')
        return {
            textBoxElm,textPElm
        }
    }
    getData(key,keyCode,code){
        const {textPElm,textBoxElm} = this.selectors()
        let elm = `
            <span class="keyText">key&nbsp;&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></span>
            <span class="box">${key}</span>
            <span class="keyText">keyCode&nbsp;&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></span>
            <span class="box">${keyCode}</span>
            <span class="keyText">code&nbsp;&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></span>
            <span class="box">${code}</span>
        `
        textPElm.style.display='none'
        textBoxElm.style.display='block'
        textBoxElm.innerHTML = elm
    }
    init(){
        window.addEventListener('keydown',(e)=>{
            const{key,keyCode,code} = data.eventKeyData(e)
            this.getData(key,keyCode,code)
        })
    }
}

const ui = new UI()
export default ui



