class TabMenu {
    constructor(container){
        this.container = container;
        this.tabsArray = [
            "Personal Details",
            "Live Tracking",
            "Services Applied",
            "Trip History",
            "Payment Reports",
            "Vehicles Driven",
            "Customer Feedback",
            "Accidental Reports"
        ];
    }
    render() {
        const buttonsHtml = this.tabsArray.map((tab, index)=>`
            <button class="tab-button ${index === 0 ? "active" : ""}">
                ${tab}
            </button>
        `).join("");
        this.container.innerHTML = buttonsHtml;
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    const container = document.getElementById("tab-menu");
    const tabMenu = new TabMenu(container);
    tabMenu.render();
}); // class TabMenu {
 //     constructor(container) {
 //         this.container = container;
 //         // const tabsArray = [
 //         //     'Personal Details',
 //         //     'Live Tracking',
 //         //     'Services Applied',
 //         //     'Trip History',
 //         //     'Payment Reports',
 //         //     'Vehicles Driven',
 //         //     'Customer Feedback',
 //         //     'Accidental Reports'
 //         // ];
 //     }
 //     //we are writing as a seperate class to reuse the tabs again , so it should be dynaminc
 //     render() {
 //         this.container.innerHTML = `
 //             <button class="tab-button active">tabsArray</button>
 //             <button class="tab-button">Live Tracking</button>
 //             <button class="tab-button">Services Applied</button>
 //             <button class="tab-button">Trip History</button>
 //             <button class="tab-button">Payment Reports</button>
 //             <button class="tab-button">Vehicles Driven</button>
 //             <button class="tab-button">Customer Feedback</button>
 //             <button class="tab-button">Accidental Reports</button>
 //         `;
 //     }        
 // }

//# sourceMappingURL=index.1950cd5b.js.map
