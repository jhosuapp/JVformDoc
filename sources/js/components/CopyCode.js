const CopyCode = (()=>{

    //===============================================//
    //  CopyCode Config
    //===============================================//¿
    const ConfigCopyCode = ()=>{
        const getAllBtnCopy = document.querySelectorAll('.copy-code');

        getAllBtnCopy.forEach((btn)=>{
            btn.addEventListener('click', ()=>{
                const getAtrCode = btn.dataset.copy;
                const getAtrTag = btn.dataset.tag;
                //VALIDAMOS SI DEBEMOS AÑADIR APERTURA Y CIERRE DE ETIQUETA
                if(getAtrTag){
                    navigator.clipboard.writeText(`<${getAtrCode}>`);
                }else{
                    navigator.clipboard.writeText(getAtrCode);
                }
                //MOSTRAMOS TEXTO INDICATIVO DE CÓDIGO COPIADO
                btn.classList.add('active');
                setTimeout(()=>{
                    btn.classList.remove('active');
                },1000);
            });
        });
    }

    //====================================================//
    //  Se retornan todas las funciones hijas
    //===================================================//
    return {
        getChildsCopyCode : function(){
            ConfigCopyCode();
        }
    }


})();

const getChildsFuncCopyCode = ()=>{
    CopyCode.getChildsCopyCode();
}

export { getChildsFuncCopyCode }

