const selectBtn = document.querySelector(".select-btn"),
      itens = document.querySelectorAll(".item");

      selectBtn.addEventListener("click", () => {
        selectBtn.classList.toggle("open");
      });

      itens.forEach(item => {
        item.addEventListener("click", () => {
          item.classList.toggle("checked");

            let checked = document.querySelectorAll(".checked"),
                btnText =   document.querySelector(".btn-text");
                
                if(checked && checked.length > 0){
                  btnText.innerText = `${checked.length} Selecidonado`;

                }else{
                  btnText.innerText = "Selecione os Itens";
                }
        })
      });