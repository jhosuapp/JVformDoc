const Nav = (()=>{

    const ConfigNav = ()=>{
    }

    //===============================================//
    //  Variables generales del clousure
    //===============================================//
    const NavGeneralVariable = ()=>{
        //VARIABLES MENÚ
        const getHamburgerMenu = document.getElementById('hamburgerMenu');
        const getHamburgerMenuDoc = document.getElementById('hamburgerDoc');
        const getAllBtnCloseMenuDoc = document.querySelectorAll('.close-menu--doc');
        const getBody = document.querySelector('body');

        return {
            getHamburgerMenuDoc, 
            getAllBtnCloseMenuDoc,
            getHamburgerMenu,
            getBody
        };
    }
    
    const generalVariables = NavGeneralVariable();

    //===============================================//
    //  Funcionalidad del menú hamburguesa para mobile
    //===============================================//
    const NavHamburger = ()=>{
        const getVarHamburgerDoc = generalVariables.getHamburgerMenuDoc;
        const getVarCloseHamburger = generalVariables.getAllBtnCloseMenuDoc;
        const getVarHamburger = generalVariables.getHamburgerMenu;
        const getVarBody = generalVariables.getBody;
        //ABIR MENU DEL HEADER
        getVarHamburger && getVarHamburger.addEventListener('click', ()=>{
            getVarHamburger.closest('.header').classList.toggle('activeMenu');
            getVarHamburger.classList.toggle('animate');
            getVarHamburger.classList.contains('animate') ? 
            getVarBody.style.overflow = "hidden" : 
            getVarBody.style.overflow = "inherit";
        });
        //ABRIR MENU DE DOCUMENTACIÓN
        getVarHamburgerDoc && getVarHamburgerDoc.addEventListener('click', ()=>{
            getVarHamburgerDoc.closest('.documentation__menu').classList.add('menuDoc-active');
        });
        //CERRAR MENU DE DOCUMENTACIÓN
        getVarCloseHamburger && getVarCloseHamburger.forEach((data)=>{
            data.addEventListener('click', ()=>{
                getVarHamburgerDoc.closest('.documentation__menu').classList.remove('menuDoc-active');
            });
        });

    }

    //====================================================//
    //  Funcionalidad del menú sticky cuando se haga scroll
    //===================================================//
    const NavStickyHamburger = ()=>{
        const getVarHamburgerSticky = generalVariables.getHamburgerMenuDoc;
        const reUseStickyMenu = ()=>{
            window.scrollY >= 60 ? 
            getVarHamburgerSticky.closest('.hamburger__mobile').classList.add('fixed') : 
            getVarHamburgerSticky.closest('.hamburger__mobile').classList.remove('fixed');
        }        
        window.addEventListener('scroll', reUseStickyMenu);
        reUseStickyMenu();
    }

    //====================================================//
    //  Se retornan todas las funciones hijas
    //===================================================//
    return {
        getChildsNav : function(){
            ConfigNav();
            NavHamburger();
            NavStickyHamburger()
        }
    }


})();

const getChildsFuncNav = ()=>{
    Nav.getChildsNav();
}

export { getChildsFuncNav }

