class VehicleInfo {
    constructor(container){
        this.container = container;
    }
    render() {
        this.container.innerHTML = `
            <div class="title">Currently Assigned Vehicle Information</div>
            <div class="content">
                <div class="illustration">
                    <img src="logo/illustration@3x.png" alt="No Vehicle Assigned" />
                </div>
                <div class="message">No Vehicle assigned / registered</div>
            </div>
        `;
    }
}

//# sourceMappingURL=index.471a6c83.js.map
