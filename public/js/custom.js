  // Upload Box 1
  $(document).ready(function () {
    var uploadBox = document.getElementById('uploadBox');
    var chooseFileLink = document.getElementById('chooseFileLink');
    var fileList = document.getElementById('fileList');

    // Drag and drop functionality
    uploadBox.addEventListener('dragover', function (e) {
      e.preventDefault();
      e.stopPropagation();
      uploadBox.classList.add('dragover');
    });

    uploadBox.addEventListener('dragleave', function (e) {
      e.preventDefault();
      e.stopPropagation();
      uploadBox.classList.remove('dragover');
    });

    uploadBox.addEventListener('drop', function (e) {
      e.preventDefault();
      e.stopPropagation();
      uploadBox.classList.remove('dragover');
      var files = e.dataTransfer.files;
      handleFiles(files);
    });

    // Choose file functionality
    chooseFileLink.addEventListener('click', function () {
      document.getElementById('photos').click();
    });

    document.getElementById('photos').addEventListener('change', function (e) {
      var files = e.target.files;
      handleFiles(files);
    });

    // Handle selected files
    function handleFiles(files) {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var listItem = document.createElement('li');
        listItem.className = 'upload-file-item';
        listItem.textContent = file.name;
        fileList.appendChild(listItem);
      }
    }
  });



  // Upload Box 2
  $(document).ready(function () {
    var uploadBox2 = document.getElementById('uploadBox2');
    var chooseFileLink2 = document.getElementById('chooseFileLink2');
    var fileList2 = document.getElementById('fileList2');

    // Drag and drop functionality
    uploadBox2.addEventListener('dragover', function (e) {
      e.preventDefault();
      e.stopPropagation();
      uploadBox2.classList.add('dragover');
    });

    uploadBox2.addEventListener('dragleave', function (e) {
      e.preventDefault();
      e.stopPropagation();
      uploadBox2.classList.remove('dragover');
    });

    uploadBox2.addEventListener('drop', function (e) {
      e.preventDefault();
      e.stopPropagation();
      uploadBox2.classList.remove('dragover');
      var files = e.dataTransfer.files;
      handleFiles(files);
    });

    // Choose file functionality
    chooseFileLink2.addEventListener('click', function () {
      document.getElementById('photos2').click();
    });

    document.getElementById('photos2').addEventListener('change', function (e) {
      var files = e.target.files;
      handleFiles(files);
    });

    // Handle selected files
    function handleFiles(files) {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var listItem = document.createElement('li');
        listItem.className = 'upload-file-item';
        listItem.textContent = file.name;
        fileList2.appendChild(listItem);
      }
    }
  });


  

// Add New Question JS
$(document).ready(function() {
  // Add event listener to the "Add New Question" button
  $(document).on("click", "#add-question-btn", function() {
    addNewQuestion();
  });

  // Add event listener for "Enter" key press in the question input
  $(document).on("keypress", "#new-question", function(event) {
    if (event.which === 13) { // 13 corresponds to the "Enter" key
      event.preventDefault(); // Prevent the default form submission behavior
      addNewQuestion();
    }
  });

  // Function to add a new question
  function addNewQuestion() {
    const newQuestion = $("#new-question").val();
    const sampleQuestions = $(".sample-question");
    const maxQuestions = 7;

    if (newQuestion.trim() !== "" && sampleQuestions.length < maxQuestions) {
      // Create a new question element with the same format as the existing questions
      const questionElement = $("<p>").addClass("sample-question removable-question").html(`<img class="me-3 remove-question" src="images/minus-img.png">${newQuestion}`);

      // Insert the new question above the "Type Question Area"
      questionElement.insertBefore($(".input-group"));

      // Clear the textarea
      $("#new-question").val("");

      // Disable the "Add New Question" button if the maximum number of questions is reached
      if (sampleQuestions.length === maxQuestions - 1) {
        $("#add-question-btn").prop("disabled", true);

        // Show the toast notification for reaching the maximum number of questions
        showToast();
      }
    }
  }

  function showToast(message) {
    var toaster = $("#toaster-container");
    toaster.find(".toast-body").text(message);
    toaster.toast("show");
  }

  // Add event listener to remove questions
  $(document).on("click", ".remove-question", function() {
    $(this).closest(".sample-question").remove();

    // Enable the "Add New Question" button if the maximum number of questions is no longer reached
    const sampleQuestions = $(".sample-question");
    const maxQuestions = 7;
    if (sampleQuestions.length < maxQuestions) {
      $("#add-question-btn").prop("disabled", false);
    }
  });
});




// CARD Expiry Format MM/YY
$(document).ready(function () {
  function formatCardExpiry(input) {
      var val = input.val();
      var sanitizedVal = val.replace(/[^\d]/g, '');
      var newVal = '';

      if (sanitizedVal.length > 0) {
          if (sanitizedVal.length === 2 && val.slice(-1) !== '/') {
              newVal = sanitizedVal + '/';
          } else if (sanitizedVal.length > 2) {
              newVal = sanitizedVal.substr(0, 2) + '/' + sanitizedVal.substr(2, 2);
          } else {
              newVal = sanitizedVal;
          }
      }
      input.val(newVal);
  }
  $('.card-expiry').on('input', function () {
      formatCardExpiry($(this));
  });
});




const countrySelect = document.getElementById("PayPalSelectCountry");

// Function to fetch the list of countries
async function fetchCountries() {
    const response = await fetch("https://restcountries.com/v2/all");
    const countries = await response.json();
    return countries;
}

// Generate options for all countries
fetchCountries().then(countries => {
    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country.alpha2Code;
        option.textContent = country.name;
        countrySelect.appendChild(option);
    });
});



const locationCountrySelect = document.getElementById("LocationSelectCountry");

// Function to fetch the list of countries
async function fetchLocationCountries() {
  const response = await fetch("https://restcountries.com/v2/all");
  const countries = await response.json();
  return countries;
}

// Generate options for countries in LocationSelectCountry
fetchLocationCountries()
  .then((countries) => {
    countries.forEach((country) => {
      const option = new Option(country.name, country.alpha2Code);
      locationCountrySelect.add(option);
    });
  })
  .catch((error) => {
    console.error("Error fetching countries for LocationSelectCountry:", error);
  });







// Sidebar JS
function openNav() {
  document.getElementById("sidebar").style.left = "0";
}

function closeNav() {
  document.getElementById("sidebar").style.left = "-350px";
}

function handleWindowResize() {
  if (window.innerWidth <= 991) {
    document.getElementById("sidebar").style.left = "-350px";
  } else {
    document.getElementById("sidebar").style.left = "0";
  }
}

// Initial handling of window resize
handleWindowResize();

// Add event listener for window resize
window.addEventListener("resize", function() {
  handleWindowResize();
});







// UPDATE PASSWORD EYE TOGGLE
function toggleCurrentPassword(currentPassword) {
  const passwordInput = document.getElementById(currentPassword);
  const passwordToggle = document.querySelector('.password-toggle-current');
  
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggle.innerHTML = '<i class="far fa-eye-slash"></i>';
  } else {
      passwordInput.type = 'password';
      passwordToggle.innerHTML = '<i class="far fa-eye"></i>';
  }
}
function toggleNewPassword(newPassword) {
  const passwordInput = document.getElementById(newPassword);
  const passwordToggle = document.querySelector('.password-toggle-new');
  
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggle.innerHTML = '<i class="far fa-eye-slash"></i>';
  } else {
      passwordInput.type = 'password';
      passwordToggle.innerHTML = '<i class="far fa-eye"></i>';
  }
}



// RESET PASSWORD EYE TOGGLE
function togglePassword(ResetNewPassword) {
  const passwordInput = document.getElementById(ResetNewPassword);
  const passwordToggle = document.querySelector('.new-password-toggle');
  
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggle.innerHTML = '<i class="far fa-eye-slash"></i>';
  } else {
      passwordInput.type = 'password';
      passwordToggle.innerHTML = '<i class="far fa-eye"></i>';
  }
}

function togglePasswordTwo(confirmNewPassword) {
  const passwordInput = document.getElementById(confirmNewPassword);
  const passwordToggle = document.querySelector('.confirm-password-toggle');
  
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggle.innerHTML = '<i class="far fa-eye-slash""></i>';
  } else {
      passwordInput.type = 'password';
      passwordToggle.innerHTML = '<i class="far fa-eye"></i>';
  }
}


// VERIFY ACCOUNT PASSWORD EYE TOGGLE
function deletetogglePassword(DelPasswordVerify) {
  const passwordInput = document.getElementById(DelPasswordVerify);
  const passwordToggle = document.querySelector('.password-toggle');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggle.innerHTML = '<i class="far fa-eye-slash" aria-hidden="true"></i>';
  } else {
      passwordInput.type = 'password';
      passwordToggle.innerHTML = '<i class="far fa-eye" aria-hidden="true"></i>';
  }
}

// VERIFY ACCOUNT PASSWORD EYE TOGGLE
function deletetogglePassword(DelPasswordVerify) {
  const passwordInput = document.getElementById(DelPasswordVerify);
  const passwordToggle = document.querySelector('.password-toggle');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggle.innerHTML = '<i class="far fa-eye-slash" aria-hidden="true"></i>';
  } else {
      passwordInput.type = 'password';
      passwordToggle.innerHTML = '<i class="far fa-eye" aria-hidden="true"></i>';
  }
}

// UPDATE EMAIL CONFIRM PASSWORD EYE TOGGLE
function EmaiUpdatePassword(EmaiUpdatePassword) {
  const passwordInput = document.getElementById(EmaiUpdatePassword);
  const passwordToggle = document.querySelector('.UpdateEmail-password-toggle');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggle.innerHTML = '<i class="far fa-eye-slash" aria-hidden="true"></i>';
  } else {
      passwordInput.type = 'password';
      passwordToggle.innerHTML = '<i class="far fa-eye" aria-hidden="true"></i>';
  }
}




function shareOnWhatsapp() {
  var link = encodeURIComponent(document.getElementById("linkInput").value);
  window.open("https://api.whatsapp.com/send?text=" + link);
}

function shareOnFacebook() {
  var link = encodeURIComponent(document.getElementById("linkInput").value);
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + link);
}

function shareOnTwitter() {
  var link = encodeURIComponent(document.getElementById("linkInput").value);
  window.open("https://twitter.com/intent/tweet?url=" + link);
}

function copyLink() {
  var linkInput = document.getElementById("linkInput");
  linkInput.select();
  document.execCommand("copy");
  showToast("Link Copied!");
}

function showToast(message) {
  var toaster = document.getElementById("toastercontainer");
  var toast = new bootstrap.Toast(toaster);
  var toastBody = toaster.querySelector(".toast-body");
  toastBody.textContent = message;
  toast.show();
}


















