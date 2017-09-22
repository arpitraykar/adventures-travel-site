import $ from 'jquery';
class Modal {
    constructor(){
      this.openModalButton = $(".open-modal");
      this.mainModal = $(".modal");
      this.closeModalButton = $(".modal__close");
      this.events();
    }

    events(){
      //clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));
      //clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
      //pushes any key
        $(document).keyup(this.keyPressHandler.bind(this)); //document takes all the code from this site.
    }

    keyPressHandler(e){
      if(e.keyCode == 27){
          this.closeModal();
      }
    }
    openModal(){
      this.mainModal.addClass("modal--is-visible");
      return false;
    }
    closeModal(){

      this.mainModal.removeClass("modal--is-visible");
    }
}

export default Modal;
