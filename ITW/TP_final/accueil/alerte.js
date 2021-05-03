const alert = {
	init(){
		document.body.addEventListener("click", e => {
            if (e.target.classList.contains("close")) {
                this.closeModal(e.target);
            }
        });
        this.openModal();
	},

	getHtmlTemplate(modalOptions){
		return  `
			<div class="alerte_page">
				<div class="alerte_window">
					<div class="alerte_content">
						<div class="alerte_innercontent">
							<h3>${modalOptions.title}</h3>
							<br>
							<p>${modalOptions.content}</p>
							<p>Nous vous informons que ce site web est complétement FACTICE et réalisé dans le cadre de nos études.</p>
							<p>Ce message s'affichera qu'une seule fois. Nous pensons que c'est suffisant.</p>
							<p>Bonne visite sur notre site.</p>
							<p>Site compatible avec Chrome et Mozilla Firefox</p>
							<p>ZHANG Hugo & DUMAS Valentin</p>
						</div>
						<button class="close">Close</button>
					</div>
				</div>
			</div>

		 `;
	},

	openModal(modalOptions = {}) {
        modalOptions = Object.assign({
            title: 'INFORMATION IMPORTANTE',
            content: 'Bonjour,'
        }, modalOptions);

        const modalTemplate = this.getHtmlTemplate(modalOptions);
        document.body.insertAdjacentHTML("afterbegin", modalTemplate);
    },

    closeModal(closeButton) {
        const alertPage = closeButton.parentElement.parentElement.parentElement;
        document.body.removeChild(alertPage);
    }


};
document.addEventListener("DOMContentLoaded", () => alert.init());