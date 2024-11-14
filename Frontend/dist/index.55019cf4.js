class VerificationForm {
    constructor(container){
        this.container = container;
    }
    render() {
        this.container.innerHTML = `
            <form class=""> 
                <label>
                    <input type="checkbox"> I acknowledge that the Owner/Driver profile is verified
                </label>
                <br>
                <label>
                    <input type="checkbox"> I acknowledge that the Vehicle is verified
                </label>
                <br>
                <label>
                    <input type="checkbox"> I acknowledge that the Owner Document and Vehicle Document is verified
                </label>
                <br>
                <label>
                    <input type="checkbox"> I acknowledge that the Bank Account is verified
                </label>
                <br>
                <div class="footer">
                    <div class="verified-by">
                        <p>Verified By</p>
                        <a href="#">Ezio Auditore</a>
                    </div>
                    <div class="action-buttons">
                        <button type="button" class="approve-btn">Approve</button>
                        <button type="button" class="reject-btn">Reject</button>
                    </div>
                </div>
            </form>
        `;
    }
}

//# sourceMappingURL=index.55019cf4.js.map
