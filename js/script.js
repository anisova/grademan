
function togglePanel(panel, openButton) {
    const openBtn = document.querySelector(openButton);
    const modal = document.querySelector(panel);   
    openBtn.addEventListener("click",(e) => {
        e.preventDefault();
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";  
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";                
            }
          }); 
    })
}
  togglePanel(".panel", ".hamburger");
