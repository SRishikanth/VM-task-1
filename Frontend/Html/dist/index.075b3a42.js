class TabMenu {
    constructor(container){
        this.container = container;
    }
    //we are writing as a seperate class to reuse the tabs again , so it should be dynaminc
    render() {
        this.container.innerHTML = `
            <button class="tab-button active">Personal Details</button>
            <button class="tab-button">Live Tracking</button>
            <button class="tab-button">Services Applied</button>
            <button class="tab-button">Trip History</button>
            <button class="tab-button">Payment Reports</button>
            <button class="tab-button">Vehicles Driven</button>
            <button class="tab-button">Customer Feedback</button>
            <button class="tab-button">Accidental Reports</button>
        `;
    }
}

//# sourceMappingURL=index.075b3a42.js.map
