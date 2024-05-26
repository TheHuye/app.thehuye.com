document.getElementById('firstName').addEventListener('input', validateFirstName);
document.getElementById('middleName').addEventListener('input', validatemiddleName);
document.getElementById('lastName').addEventListener('input', validatelastName);
document.getElementById('gender').addEventListener('input', validategender);
document.getElementById('DOB').addEventListener('input', validateDOB);
document.getElementById('email').addEventListener('input', validateemail);
document.getElementById('phone').addEventListener('input', validatephone);
document.getElementById('whatsappPhone').addEventListener('input', validatephone);
document.getElementById('idNumber').addEventListener('input', validateidNumber);
document.getElementById('yearCompleted').addEventListener('input', validateyearCompleted);
document.getElementById('schoolCat').addEventListener('input', validateschoolCat);
document.getElementById('combination').addEventListener('input', validatecombination);
document.getElementById('indexNumber').addEventListener('input', validateindexNumber);
document.getElementById('fatherNames').addEventListener('input', validatefatherNames);
document.getElementById('fatherPhone').addEventListener('input', validatephone);
document.getElementById('motherNames').addEventListener('input', validatemotherNames);
document.getElementById('motherPhone').addEventListener('input', validatephone);
document.getElementById('guardianNames').addEventListener('input', validateguardianNames);
document.getElementById('guardianPhone').addEventListener('input', validatephone);
document.getElementById('disabilities').addEventListener('input', validatedisabilities);
document.getElementById('maritalStatus').addEventListener('input', validatemaritalStatus);
document.getElementById('work').addEventListener('input', validatework);

function validateFirstName() {
    event.preventDefault();
    // this.value
    const input = event.target.value;
    const hasNumbers = /\d/.test(input);

    if (hasNumbers) {
        showError('No numbers allowed here', this);
    } else {
        hideError(this)
    }
}

//validatemiddleName

function validatemiddleName() {
    event.preventDefault();
    // this.value
    const input = event.target.value;
    const hasNumbers = /\d/.test(input);

    if (hasNumbers) {
        showError('No numbers allowed here', this);
    } else {
        hideError(this)
    }
}

//validatelastName

function validatelastName() {
    event.preventDefault();
    // this.value
    const inputElement = event.target;
    const input = inputElement.value.toUpperCase();
    inputElement.value = input;

    const hasNumbers = /\d/.test(input);

    if (hasNumbers) {
        showError('No numbers allowed here', this);
    } else {
        hideError(this)
    }
}

//validategender

function validategender() {
    // this.value
    
    // console.log(this.value);

    if (this.value === 'select') {
        showError('Please choose your gender', this);
    } else {
        hideError(this)
    }
}

//validateDOB

function validateDOB(event) {
    event.preventDefault();
    const dobInput = event.target;
    const selectedYear = new Date(dobInput.value).getFullYear();
    // console.log(selectedYear);

    if (selectedYear < 1980 || selectedYear > 2010) {
        showError('Please choose a year between 1980 and 2010', dobInput);
    } else {
        hideError(dobInput);
    }
}

//validateemail

function validateemail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = this.value.trim();

    if (!emailRegex.test(email)) {
        showError('Enter a valid email address', this);
    } else {
        hideError(this);
    }
}

//validatephone

function validatephone() {
    // this.value
    const phoneRegex = /^(078|072|073|079)\d{7}$/;
    const phone = this.value.trim();

    if (!phoneRegex.test(phone)) {
        showError('Invalid Phone format. Phone number must be 10 digits long and start with 078, 072, 073, or 079', this);
    } else {
        hideError(this)
    }
}

//validateidNumber

function validateidNumber() {
    // this.value
    const idRegex = /^1\d{15}$/;
    const id = this.value.trim();

    if (!idRegex.test(id)) {
        showError('Invalid ID Number, Please continue Filling in your correct Id number', this);
    } else {
        hideError(this)
    }
}

//validateyearCompleted

function validateyearCompleted(event) {
    event.preventDefault();

    if (this.value === 'select') {
        showError('Please choose the year you completed secondary school', this);
    } else {
        hideError(this)
    }

}

//validateschoolCat

function validateschoolCat() {
    event.preventDefault();
    // this.value
    
    if (this.value === 'select') {
        showError('Please choose your secondary school category', this);
    } else {
        hideError(this)
    }
}

//validatecombination

function validatecombination() {
    event.preventDefault();
    // this.value
    

    // if (hasNumbers) {
    //     showError('No numbers allowed here', this);
    // } else {
    //     hideError(this)
    // }
}

//validateindexNumber

function validateindexNumber() {
    event.preventDefault();
    // this.value
    

    // if () {
    //     showError('No numbers allowed here', this);
    // } else {
    //     hideError(this)
    // }
}

//validatefatherNames

function validatefatherNames() {
    event.preventDefault();
    const inputElement = event.target;
    const input = inputElement.value.toUpperCase();
    inputElement.value = input;

    const hasNumbers = /\d/.test(input);

    if (hasNumbers) {
        showError('No numbers allowed here', this);
    } else {
        hideError(this)
    }
}


//validatemotherNames

function validatemotherNames() {
    const inputElement = event.target;
    const input = inputElement.value.toUpperCase();
    inputElement.value = input;

    const hasNumbers = /\d/.test(input);

    if (hasNumbers) {
        showError('No numbers allowed here', this);
    } else {
        hideError(this)
    }
}

//validateguardianNames

function validateguardianNames() {
    const inputElement = event.target;
    const input = inputElement.value.toUpperCase();
    inputElement.value = input;

    const hasNumbers = /\d/.test(input);

    if (hasNumbers) {
        showError('No numbers allowed here', this);
    } else {
        hideError(this)
    }
}

//validatedisabilities

function validatedisabilities() {
    event.preventDefault();
    // this.value

    if (this.value === 'select') {
        showError('Please select your disability or choose none', this);
    } else {
        hideError(this)
    }
}

//validatemaritalStatus

function validatemaritalStatus(event) {
    if (this.value === 'select') {
        showError('Please select your Marital Status', this);
    } else {
        hideError(this)
    }
}

//validatework

function validatework() {
    if (this.value === 'select') {
        showError('Please select your Marital Status', this);
    } else {
        hideError(this)
    }
}

function showError(message, element) {
    event.preventDefault();
    const existingErrorSpan = element.nextElementSibling;

    if (existingErrorSpan && existingErrorSpan.classList.contains('errordiv')) {
        existingErrorSpan.textContent = message;
    } else {
        const errorSpan = document.createElement('span');
        errorSpan.className = 'errordiv';
        errorSpan.textContent = message;
        element.parentNode.insertBefore(errorSpan, element.nextSibling);
    }
}

function hideError(element) {
    const existingErrorSpan = element.nextElementSibling;
    if (existingErrorSpan && existingErrorSpan.classList.contains('errordiv')) {
      existingErrorSpan.remove();
    }
}