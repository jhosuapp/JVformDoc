const Tab = (()=>{

    const ConfigTab = ()=>{
    }

    //===============================================//
    //  Tab general
    //===============================================//
    function TabGeneral (){
        const getButtonsTab = document.querySelectorAll('.tab-general__btn a');
        const getCtnTab = document.querySelectorAll('.tab-general__ctn');
        //CREAMOS FUNCIÓN PARA ASIGNAR ATRIBUTOS DINAMICOS
        const reUseAsignementAtr = (cls, atrName)=>{
            cls.forEach((data, indice)=>{
                data.setAttribute(`data-${atrName}`, indice);
            });
        }
        //CREAMOS ATRIBUTOS DINAMICOS PARA BOTONES Y CONTENEDORES
        reUseAsignementAtr(getButtonsTab, 'tabbtn');
        reUseAsignementAtr(getCtnTab, 'tabctn');
        //AÑADIMOS ACTIVE POR DEFECTO AL PRIMER ELEMENTO 
        getButtonsTab[0].classList.add('active');
        getCtnTab[0].classList.add('active');
    
        getButtonsTab.forEach((data)=>{
    
            data.addEventListener('click', ()=>{
                const getDataAtr = data.dataset.tabbtn;
                
                getCtnTab.forEach((data)=>{
                    const getDataAtrCtn = data.dataset.tabctn;
                    if(getDataAtr == getDataAtrCtn){
                        data.classList.add('active');
                    }else{
                        data.classList.remove('active');
                    }
                });
    
                getButtonsTab.forEach((data)=>{
                    data.classList.remove('active');
                });
    
                data.classList.add('active');
    
            });
    
        });
    
    }    

    //====================================================//
    //  Se retornan todas las funciones hijas
    //===================================================//
    return {
        getChildsTab : function(){
            TabGeneral();
        }
    }


})();

const getChildsFuncTab = ()=>{
    Tab.getChildsTab();
}

export { getChildsFuncTab }

