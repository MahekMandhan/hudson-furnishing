// modal
document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
//   sign
function register() {
    var username = document.getElementById("username1").value
    var useremail = document.getElementById("useremail").value
    var userpassword = document.getElementById("userpassword").value
    if (username == "" || useremail == "" || userpassword == "") {
        alert("Please fill the form")

    }
    else {
        localStorage.setItem("username", username)
        localStorage.setItem("useremail", useremail)
        localStorage.setItem("userpassword", userpassword)

        alert("your account has been registered")
        document.getElementById('openModalBtn').style.display = 'none';
        const createaccount = document.getElementById('createaccount');
        createaccount.addEventListener
        modal.style.display = 'none';
        document.getElementById('username').innerText =
            "" + localStorage.getItem("username");
            $('#username').show();
    }
}
// login form
function login() {
    var email = document.getElementById('uemail').value
    var pass = document.getElementById('upass').value

    var email_local = localStorage.getItem("useremail")
    var pass_local = localStorage.getItem("userpassword")

    if (email == email_local && pass == pass_local) {
        alert("Logged in successfully !");
        localStorage.setItem("token", "yes")
        document.getElementById('openModalBtn').style.display = 'none';
        document.getElementById('openModalBtn').style.display = 'none';
        const createaccount = document.getElementById('createaccount');
        createaccount.addEventListener
        modal.style.display = 'none';
   
    }
    else {
        alert("Invalid Email or Password")
    }

}



$('.sectionsignin').hide()

function showsec() {
    $('.sectionsignin').show()
    $('.sectionsignup').hide()
}
function goback() {
    $('.sectionsignin').hide()
    $('.sectionsignup').show()
}

// changing navbar color
document.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');

    if (window.scrollY > 150) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
})

// animation

AOS.init();

// owl carousel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// searching & live search

const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
searchBtn.onclick = () => {
    cancelBtn.style.display = "block";
    searchBox.classList.add("active");
    searchBtn.classList.add("active");
    searchInput.classList.add("active");
    cancelBtn.classList.add("active");
    searchInput.focus();
    if (searchInput.value != "") {
        var values = searchInput.value;
        searchData.classList.remove("active");

        var suggestions = ['beds', 'chairs', 'dining table', 'sofa']
        $('#search').autocomplete({
            source: suggestions
        })

        var b = $('#search').val();
        if (b.toLowerCase() == "beds") {
            $('#bedsection').show()
            window.location.href = "index.html#bedsection"

        }
        var d = $('#search').val();
        if (d.toLowerCase() == "dining table") {
            $('#diningsection').show()
            window.location.href = "index.html#diningsection"
        }
        var c = $('#search').val();
        if (d.toLowerCase() == "chairs") {
            $('#chairsection').show()
            window.location.href = "index.html#chairsection"
        }
        var s = $('#search').val();
        if (d.toLowerCase() == "sofa") {
            $('#sofasection').show()
            window.location.href = "index.html#sofasection"
        }

    } else {
        searchData.textContent = "";


    }

}
cancelBtn.onclick = () => {
    cancelBtn.style.display = "none";
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchData.classList.toggle("active");
    searchInput.value = "";
}



var typed = new Typed('#type', {
    strings: ['Hudson Furnishing ! ', 'Hudson Furnishing !'],
    backSpeed: 70,
    typeSpeed: 70,
    loop: true
});



$(document).ready(function () {

    $('.buttons').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if (filter == 'all') {
            $('.image').show(400);
        } else {
            $('.image').not('.' + filter).hide(200);
            $('.image').filter('.' + filter).show(400);
        }

    });

    $('.gallery').magnificPopup({

        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }

    });

});




// date & time

var clockElement = document.getElementById('clock');

function clock() {
    var date = new Date();


    if (window.matchMedia('(max-width: 400px)').matches) {
        //  this format for windows with a width up to the value above.
        clockElement.textContent = date.toLocaleString();
    } else {
        // While this format will be used for larger windows.
        clockElement.textContent = date.toString();
    }
}

setInterval(clock, 1000);
