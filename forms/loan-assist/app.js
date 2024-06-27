var API_URL = 'https://base-forms.onrender.com/api';
// var API_URL = 'https://base-forms.fly.dev/api/v1';
// var API_URL = 'http://localhost:4000/api/v1';
// var API_URL = 'http://localhost:4000/api/v1';


document.getElementById('userFormSub').addEventListener('submit', userCreateAccount);


function userCreateAccount(event) {
    event.preventDefault();

    const loading = document.getElementById('loading');
    loading.style.display = 'block';


const firstName = document.getElementById('firstName').value
const middleName = document.getElementById('middleName').value
const lastName = document.getElementById('lastName').value
const gender = document.getElementById('gender').value
const DOB = document.getElementById('DOB').value
const email = document.getElementById('email').value
const phone = document.getElementById('phone').value
const whatsappPhone = document.getElementById('whatsappPhone').value
const idNumber = document.getElementById('idNumber').value
const yearCompleted = document.getElementById('yearCompleted').value
const schoolCat = document.getElementById('schoolCat').value
const combination = document.getElementById('combination').value
const indexNumber = document.getElementById('indexNumber').value
const fatherNames = document.getElementById('fatherNames').value
const fatherPhone = document.getElementById('fatherPhone').value
const motherNames = document.getElementById('motherNames').value
const motherPhone = document.getElementById('motherPhone').value
const guardianNames = document.getElementById('guardianNames').value
const guardianPhone = document.getElementById('guardianPhone').value
const countryOfBirth = document.getElementById('countryBirth').value
const countryResidence = document.getElementById('country').value
const countryNationality = document.getElementById('countryNationality').value
const province = document.getElementById('province').value
const district = document.getElementById('district').value
const sector = document.getElementById('sector').value
const cell = document.getElementById('cell').value
const village = document.getElementById('village').value
const disabilities = document.getElementById('disabilities').value
const maritalStatus = document.getElementById('maritalStatus').value
const work = document.getElementById('work').value
const idDocument = document.getElementById('idDocument').files[0];
const resultSlip = document.getElementById('resultSlip').files[0];
const passportImage = document.getElementById('passportImage').files[0];
const formName = 'ElvisTest';

const formData = new FormData();
formData.append('formName', formName);
formData.append('firstName', firstName);
formData.append('middleName', middleName);
formData.append('lastName', lastName);
formData.append('gender', gender);
formData.append('DOB', DOB);
formData.append('email', email);
formData.append('phone', phone);
formData.append('whatsappPhone', whatsappPhone);
formData.append('idNumber', idNumber);
formData.append('yearCompleted', yearCompleted);
formData.append('schoolCat', schoolCat);
formData.append('combination', combination);
formData.append('indexNumber', indexNumber);
formData.append('fatherNames', fatherNames);
formData.append('fatherPhone', fatherPhone);
formData.append('motherNames', motherNames);
formData.append('motherPhone', motherPhone);
formData.append('guardianNames', guardianNames);
formData.append('guardianPhone', guardianPhone);
formData.append('countryOfBirth', countryOfBirth);
formData.append('countryResidence', countryResidence);
formData.append('countryNationality', countryNationality);
formData.append('province', province);
formData.append('district', district);
formData.append('sector', sector);
formData.append('cell', cell);
formData.append('village', village);
formData.append('disabilities', disabilities);
formData.append('maritalStatus', maritalStatus);
formData.append('work', work);
formData.append('idDocument', idDocument);
formData.append('resultSlip', resultSlip);
formData.append('passportImage', passportImage);

    fetch(`${API_URL}/form`, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
    return response.json()
    })
    .then(data => {
        loading.style.display = 'none';
        if (data.error) {
            showMessage(data.error);
        } else {
            showMessage(data.message, '#10E956');
            window.location.href = './success.html';

        }
        console.log(data);
    })
    .catch(error => {
        loading.style.display = 'none';
        showMessage(data.error);
        console.log(error);
    });
}

function showMessage(message, color, duration = 7000) {
    const msgbox = document.getElementById('msgbox');
    const messageParagraph = msgbox.querySelector('p');
    
    msgbox.style.display = 'block';
    // msgbox.style.right = '-100%';
    // msgbox.style.animation = 'none';
    // msgbox.style.backgroundColor = 'rgb(145, 0, 0)';

    messageParagraph.textContent = message;
    msgbox.style.backgroundColor = color;

    // msgbox.offsetHeight;
    // msgbox.style.animation = 'slideInFromRight 1s ease-in-out forwards';

    setTimeout(function() {
        msgbox.style.display = 'none';
        // msgbox.style.animation = 'slideOutToRight 3s ease-in-out 0s forwards';
    }, duration);
        
}
