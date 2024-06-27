// javascript for popup

const modalContent = document.getElementById("modal-content");
const modal = document.getElementById("simpleModal");
// const modalBtn = document.getElementById("modalBtn");
const modalBtns = document.querySelectorAll(".modalBtn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtns.forEach((modalBtn) => {
    modalBtn.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

// modalBtn.addEventListener("click", openModal);

function openModal() {
    modal.style.animation = "modalOpen 1s";
    modal.style.display = "block";
}

function closeModal() {
    modal.style.animation = "modalClose 2s";
    setTimeout(function () {
    modal.style.display = "none";
    modalContent.innerHTML = "";
}, 1000);
}

function clickOutside(e) {
    if (e.target == modal) {
    modal.style.animation = "modalClose 2s";
    setTimeout(function () {
        modal.style.display = "none";
        modalContent.innerHTML = "";
    }, 1000);
}
}


function displayItem() {
    const htmlContent = `<div class="singlelost">
    <span style="padding-right: 20px;" class="closeBtn" onclick="closeModal()">&times;</span>
<div class="title sbtnsc">Lost Item ID1987... </div>
<div class="contents">
    <table id="tables">
        <tr>
            <td>fromForm</td>
            <td>fromForm</td>
        </tr>
        <tr>
            <td>firstName</td>
            <td>firstName</td>
        </tr>
        <tr>
            <td>email</td>
            <td>email</td>
        </tr>
        <tr>
            <td>whatsappPhone</td>
            <td>whatsappPhone</td>
        </tr>
        <tr>
            <td>idNumber</td>
            <td>idNumber</td>
        </tr>
        <tr>
            <td>yearCompleted</td>
            <td>yearCompleted</td>
        </tr>
        <tr>
            <td>combination</td>
            <td>combination</td>
        </tr>
        <tr>
            <td>indexNumber</td>
            <td>indexNumber</td>
        </tr>
        <tr>
            <td>passportImage</td>
            <td>passportImage</td>
        </tr>
        <tr>
            <td>idDocument</td>
            <td>idDocument</td>
        </tr>
        <tr>
            <td>resultSlip</td>
            <td>resultSlip</td>
        </tr>
        <tr>
            <td>createdAt</td>
            <td>createdAt</td>
        </tr>        
    </table>

</div>
<div class="footeritem">Further Processes</div>
</div>`;
    modalContent.innerHTML = htmlContent;
}