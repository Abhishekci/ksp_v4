// *************** Age calculator in Home Page ***************************** //
$(document).ready(function () {
    // Initialize datepicker
    $('.dtp').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
    });

    // Calculate age on button click
    $('.calculate-age').click(function () {
        var dob = $('#dob').datepicker('getDate');
        if (dob != null) {
            var age = calculateAge(dob);
            $('#ageResult').text('Your age is: ' + age + ' years');
        } else {
            $('#ageResult').text('Please select a valid date of birth');
        }
    });

    // Function to calculate age based on date of birth
    function calculateAge(dob) {
        var today = new Date();
        var birthDate = new Date(dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
});


// ************************************ Instruction page *******************************************//


$(document).ready(function () {

    $('#nextBtn').hide();

    $('#agreeCheckbox').change(function () {

        $('#divSubmit').hide();

        if ($('#agreeCheckbox').is(":checked")) {
            $('#nextBtn').show();
        } else {
            $('#nextBtn').hide();
        }

    })

})



// ********************************************** Secure window for new application fron instruction page ********************************//



$(document).ready(function () {

    function showalert() {
        Swal.fire({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success'
        }).then(function () {
            // Wait for 2 seconds before opening the new window
            setTimeout(function () {
                window.open('http://localhost:5501/newapplicationv2.html', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
            }); // 2 seconds delay
        });
    }

    $('#nextBtn').click(function () {
        // Check if the "Agree" checkbox is checked
        if ($('#agreeCheckbox').is(':checked')) {
            showalert(); // Call the showalert() function
        } else {
            Swal.fire({
                title: 'Please agree',
                text: 'Please agree to the terms and conditions.',
                icon: 'warning'
            });
        }
    });

    $('.login-btn').click(function () {
        window.open('https://localhost:44366/auth/login', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });

});


// ******************************* Forgot Password Field validation ********************************//

$(document).ready(function () {
    var ahdar = $("#aadharNumber");
    var ahdarMsg = $("#aadharValid");

    function validAhdar() {
        if (/^\d{12}$/.test(ahdar.val()) && ahdar.val().length === 12) {
            ahdarMsg.html("");
        } else {
            ahdarMsg.html("* Input not valid");
        }
    }

    ahdar.on("input", validAhdar);
});


$(document).ready(function () {
    $("#dateOfBirth").datepicker();
});


// ********************************* Login form ************************************//

function showalert() {
    Swal.fire({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success'
    })
}

$(document).ready(function () {
    let notyf = new Notyf({
        position: {
            x: 'right',
            y: 'top'
        },
        // Your configuration options here
    });

    $('#login-submit').click(function () {
        // Get the input values
        let username = $('#username').val();
        let password = $('#dob').val();

        // Perform form validation
        if (username.length !== 12 || isNaN(username)) {
            // Display error notification for invalid username
            notyf.error('Invalid username. Please enter a 12-digit number');
            return;
        }

        // Validate password as a date
        let parsedDate = new Date(password);
        if (isNaN(parsedDate.getTime())) {
            // Display error notification for invalid date password
            notyf.error('Invalid password. Please enter a valid date');
            return;
        }

        // Check if the conditions are met
        if (username.length === 12 && !isNaN(username) && isDesiredDate(parsedDate)) {
            // Display success notification
            showalert()
            notyf.success('Login successful');
            // Redirect to the desired page
            showalert()
            setTimeout(function () {
                window.location.href = "myapplicationv2.html";
            }, 1000);
        } else {
            // Display error notification for wrong credentials
            notyf.error('Wrong credentials');
        }
    });
});

function isDesiredDate(date) {
    // Perform your desired date validation here
    // Example: Only allow dates after a specific year (e.g., 2000)
    return date.getFullYear() > 2000;
}










// *************************************** Image preview ***************************************** //

function previewFile(inputId, previewId) {
    var preview = document.getElementById(previewId);
    var file = document.getElementById(inputId).files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
        preview.style.display = "block";
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        preview.style.display = "none";
    }
}

// *************************************** Form Validation ***************************************** //


//******************************** Application num validation *****************************//


// get validation message element and appnum
var appNum = document.getElementById("application-number");
var appMsg = document.getElementById("appValid");

function validApplication() {
    if (/^\d{7}$/.test(appNum.value) && appNum.value.length === 7) {
        appMsg.innerHTML = "";
    } else {
        appMsg.innerHTML = "* Input not valid";
    }
}

appNum.addEventListener("input", validApplication);

//*********************************** Unit Name Validation ********************************//

// get validation message element and unitname

var unitName = document.getElementById("unit-name");
var unitMsg = document.getElementById("unitValid");

function validUnit() {
    if (/^[a-zA-Z0-9.,/-;()#]{3,80}/.test(unitName.value) && unitName.value.length <= 80) {
        unitMsg.innerHTML = "";
    } else {
        unitMsg.innerHTML = "* Input not valid";
    }
}

unitName.addEventListener("input", validUnit);


//******************************** Candidate Name Validation *******************************//

// get validation message element and candidatename

var candidateName = document.getElementById("name");
var candidateMsg = document.getElementById("nameValid");

function validName() {
    if (/^[a-zA-Z\s]+$/.test(candidateName.value) && candidateName.value.length <= 80) {
        candidateMsg.innerHTML = "";
    } else {
        candidateMsg.innerHTML = "* Input not valid";
    }
}

candidateName.addEventListener("input", validName);

//**************************** Aadhar Number Validation ********************************/

// get validation message element and aadhar

var ahdar = document.getElementById("aadhar");
var ahdarMsg = document.getElementById("aadharValid");

function validAhdar() {
    if (/^\d{12}$/.test(ahdar.value) && ahdar.value.length === 12) {
        ahdarMsg.innerHTML = "";
    } else {
        ahdarMsg.innerHTML = "* Input not valid";
    }
}

ahdar.addEventListener("input", validAhdar);


//**************************** Father Name Validation ********************************/

// get validation message element and Father Name

var fname = document.getElementById("fname");
var fnameMsg = document.getElementById("fnameValid");

function validFname() {
    if (/^[a-zA-Z\s]+$/.test(fname.value) && fname.value.length <= 80) {
        fnameMsg.innerHTML = "";
    } else {
        fnameMsg.innerHTML = "* Input not valid";
    }
}

fname.addEventListener("input", validFname);

//**************************** Mother Name Validation ********************************/

// get validation message element and Mother Name

var mname = document.getElementById("mname");
var mnameMsg = document.getElementById("mnameValid");

function validMname() {
    if (/^[a-zA-Z\s]+$/.test(mname.value) && mname.value.length <= 80) {
        mnameMsg.innerHTML = "";
    } else {
        mnameMsg.innerHTML = "* Input not valid";
    }
}

mname.addEventListener("input", validMname);

//**************************** EmailID Validation ********************************/

// get validation message element and EmailID

var email = document.getElementById("email");
var emailMsg = document.getElementById("emailValid");

function validEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) && email.value.length <= 80) {
        emailMsg.innerHTML = "";
    } else {
        emailMsg.innerHTML = "* Input not valid";
    }
}

email.addEventListener("input", validEmail);

//**************************** Permanent Address Toggle ********************************/

// get validation present address (YES/NO) element permanent address

var paddress = document.getElementById("paddress");
var addYes = document.getElementById("addresssame1");
var addNo = document.getElementById("addresssame2");

function togglePresentAddress() {
    if (addYes.checked) {
        paddress.style.display = "none";
    } else {
        paddress.style.display = "inline";
    }
}

//**************************** Posatal Address Validation ********************************/

// get validation message element and Postal address

var address = document.getElementById("address");
var addressMsg = document.getElementById("addressValid");
function validAddress() {
    if (/^[a-zA-Z0-9-#.,() /;_@]*$/.test(address.value) && address.value.length <= 150) {
        addressMsg.innerHTML = "";
    } else {
        addressMsg.innerHTML = "* Input not valid";
    }
}
address.addEventListener("input", validAddress);

//**************************** Present Address Validation ********************************/

// get validation message element and present address

var paddressMsg = document.getElementById("paddressValid");
var preaddress = document.getElementById("preAddress")
function validPaddress() {
    if (/^[a-zA-Z0-9-#.,() /;_@]*$/.test(preaddress.value) && preaddress.value.length <= 80) {
        paddressMsg.innerHTML = "";
    } else {
        paddressMsg.innerHTML = "* Input not valid";
    }
}
paddress.addEventListener("input", validPaddress);

//**************************** Mobile Number Validation ********************************/

// get validation message element and Mobile Number

var mobile = document.getElementById("mobNumber");
var mobileMsg = document.getElementById("mobValid");

function validMobile() {
    if (/^[6-9]\d{9}$/.test(mobile.value) && mobile.value.length === 10) {
        mobileMsg.innerHTML = "";
    } else {
        mobileMsg.innerHTML = "* Input not valid";
    }
}

mobile.addEventListener("input", validMobile);

//**************************** Height Validation ********************************/

// get validation message element and Height

var height = document.getElementById("height");
var heightMsg = document.getElementById("heightValid");

function validHeight() {
    if (/^\d{3}$/.test(height.value) && height.value.length === 3) {
        heightMsg.innerHTML = "";
    } else {
        heightMsg.innerHTML = "* Input not valid";
    }
}

height.addEventListener("input", validHeight);

//**************************** Subcaste Validation ********************************/

// get validation message element and Subcaste

var subcaste = document.getElementById("subcaste");
var subcasteMsg = document.getElementById("subcasteValid");
function validSubcaste() {
    if (/^[a-zA-Z0-9\s]+$/.test(subcaste.value) && subcaste.value.length <= 30) {
        subcasteMsg.innerHTML = "";
    } else {
        subcasteMsg.innerHTML = "* Input not valid";
    }
}

subcaste.addEventListener("input", validSubcaste);

//**************************** ID Card Validation ********************************/

// get validation message element and ID Number

var id = document.getElementById("idcard");
var idMsg = document.getElementById("idValid");
function validId() {
    if (/^[a-zA-Z0-9\s]+$/.test(id.value) && id.value.length <= 20) {
        idMsg.innerHTML = "";
    } else {
        idMsg.innerHTML = "* Input not valid";
    }
}

id.addEventListener("input", validId);

//**************************** Transaction Number Validation ********************************/

// get validation message element and Transaction Number

var trans = document.getElementById("transaction");
var transMsg = document.getElementById("transValid");
function validTrans() {
    if (/^[a-zA-Z0-9]{1,25}$/.test(trans.value) && trans.value.length <= 25) {
        transMsg.innerHTML = "";
    } else {
        transMsg.innerHTML = "* Input not valid";
    }
}

trans.addEventListener("input", validTrans);

//**************************** PG Transaction Number Validation ********************************/

// get validation message element and PG Transaction Number

var pgtrans = document.getElementById("pgtransaction");
var pgtransMsg = document.getElementById("pgValid");
function validPgTrans() {
    if (/^[a-zA-Z0-9]{1,25}$/.test(pgtrans.value) && pgtrans.value.length <= 25) {
        pgtransMsg.innerHTML = "";
    } else {
        pgtransMsg.innerHTML = "* Input not valid";
    }
}

pgtrans.addEventListener("input", validPgTrans);

//**************************** Issuer Transaction Number Validation ********************************/

// get validation message element and Issuer Transaction Number

var issuertrans = document.getElementById("issuertransaction");
var issuertransMsg = document.getElementById("issuerValid");
function validIssuerTrans() {
    if (/^[a-zA-Z0-9]{1,25}$/.test(issuertrans.value) && issuertrans.value.length <= 25) {
        issuertransMsg.innerHTML = "";
    } else {
        issuertransMsg.innerHTML = "* Input not valid";
    }
}

issuertrans.addEventListener("input", validIssuerTrans);

//**************************** Fees Validation ********************************/

// get validation message element and Fees

var fees = document.getElementById("feespaid");
var feesMsg = document.getElementById("feesValid");
function validFees() {
    if (/^\d{3}(?:.\d{1,2})?$/.test(fees.value) && fees.value.length <= 6) {
        feesMsg.innerHTML = "";
    } else {
        feesMsg.innerHTML = "* Input not valid";
    }
}

fees.addEventListener("input", validFees);

