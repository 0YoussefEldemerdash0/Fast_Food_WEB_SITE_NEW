//================ header =====================

// Nav Active State
document.querySelectorAll(".navbar li").forEach(li => {
  li.addEventListener("click", function () {
    const activeLi = document.querySelector(".navbar li.active");
    if (activeLi) activeLi.classList.remove("active");
    this.classList.add("active");
  });
});

//================ Navbar & User Dropdown =====================
// document.addEventListener("DOMContentLoaded", function () {
//   const navbarRight = document.getElementById("navbar-right");
//   if (!navbarRight) return;

//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user && user.loggedIn) {
//     navbarRight.innerHTML = `
//       <div class="profile-menu">
//         <span class="profile-name" style="cursor:pointer;">Hello ${user.username} ▼</span>
//         <div class="dropdown" style="display:none;">
//           <a href="profile.html">Profile</a>
//           <a href="order.html">Orders</a>
//           // <a href="#"> Points</a>
//           // <a href="#"> Change Password</a>
//           <button id="logoutBtn" class="logout">LogOut</button>
//         </div>
//         <a href="custom.html" style="margin-right:15px;">Customer Service</a>
//       </div>
//     `;
//     const profileName = navbarRight.querySelector(".profile-name");
//     const dropdown = navbarRight.querySelector(".dropdown");
//     profileName.onclick = () => {
//       dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
//     };
//     document.getElementById("logoutBtn").addEventListener("click", function () {
//       user.loggedIn = false;
//       localStorage.setItem("user", JSON.stringify(user));
//       window.location.reload();
//     });
//   } else {
//     navbarRight.innerHTML = `
//       <a href="login.html" class="login-btn">تسجيل الدخول</a>
//       <a href="custom.html" style="margin-right:15px;">Customer Service</a>
//     `;
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  // Navbar & User Dropdown
  const navbarRight = document.getElementById("navbar-right");
  if (!navbarRight) return;

  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.loggedIn) {
    navbarRight.innerHTML = `
      <div class="profile-menu">
        <span class="profile-name" style="cursor:pointer;">Hello ${user.username} ▼</span>
        <div class="dropdown" style="display:none;">
          <a href="profile.html">Profile</a>
          <a href="order.html">Orders</a>
          <button id="logoutBtn" class="logout">LogOut</button>
        </div>
        <a href="custom.html" style="margin-right:15px;">Customer Service</a>
      </div>
    `;
    const profileName = navbarRight.querySelector(".profile-name");
    const dropdown = navbarRight.querySelector(".dropdown");
    profileName.onclick = () => {
      dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    };
    document.getElementById("logoutBtn").addEventListener("click", function () {
      user.loggedIn = false;
      localStorage.setItem("user", JSON.stringify(user));
      window.location.reload();
    });
  } else {
    navbarRight.innerHTML = `
      <a href="login.html" class="login-btn">تسجيل الدخول</a>
      <a href="custom.html" style="margin-right:15px;">Customer Service</a>
    `;
  }

  // Scroll To Top
  const scrollBtn = document.getElementById("scrollTopBtn");
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };
  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});

//================ Hero Slider =====================
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let index = 0;
  if (slides.length > 0) {
    slides[index].classList.add("active");

    function showSlide(newIndex) {
      slides[index].classList.remove("active");
      index = (newIndex + slides.length) % slides.length;
      slides[index].classList.add("active");
    }

    const nextBtn = document.getElementById("heroNext");
    const prevBtn = document.getElementById("heroPrev");
    if (nextBtn) nextBtn.addEventListener("click", () => showSlide(index + 1));
    if (prevBtn) prevBtn.addEventListener("click", () => showSlide(index - 1));

    setInterval(() => showSlide(index + 1), 4000);
  }
});

// //================ Scroll To Top =====================
// const scrollBtn = document.getElementById("scrollTopBtn");
// window.onscroll = function () {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     scrollBtn.style.display = "block";
//   } else {
//     scrollBtn.style.display = "none";
//   }
// };
// scrollBtn.onclick = function () {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };

//================ Cart Logic =====================
document.addEventListener('DOMContentLoaded', () => {
  const addBtns = document.querySelectorAll('.btn.cta');
  const cartCountElement = document.getElementById('cart-count');

  function isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.loggedIn;
  }

  function updateCartUI() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartCountElement) cartCountElement.textContent = cart.length;
  }

  updateCartUI();

  addBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isLoggedIn()) {
        alert('يرجى تسجيل الدخول أولاً لإضافة منتجات إلى سلة التسوق.');
        window.location.href = 'login.html';
        return;
      }
      const card = e.target.closest('.card');
      const itemName = card.querySelector('.title') ? card.querySelector('.title').textContent : '';
      const itemPrice = card.querySelector('.price .new, .meta .price') ? card.querySelector('.price .new, .meta .price').textContent : '';
      const itemDesc = card.querySelector('.desc') ? card.querySelector('.desc').textContent : '';
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push({
        name: itemName,
        price: itemPrice,
        desc: itemDesc
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartUI();
      alert('تمت إضافة المنتج بنجاح!');
    });
  });
});





// ======================= validation of login and signup =========================

function validate(){
    var userName = document.inputForm.id;

    if(userName.value == ""){
        alert("Username is empty, please try again");
        userName.focus();
   }
}

function validation_of(){
    var email = document.inputForm.email;
    var password = document.inputForm.password;

    if(email.value == "" || password == ""){
        alert("Email is empty, please try again");
        email.focus();
}


// ===================
// ...existing code...

// ======================= validation of login and signup =========================

// تسجيل الدخول
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (email === "" || password === "") {
                alert("يرجى إدخال البريد الإلكتروني وكلمة المرور.");
                return;
            }

            const user = JSON.parse(localStorage.getItem('user'));
            if (!user || user.email !== email || user.password !== password) {
                alert("بيانات الدخول غير صحيحة.");
                return;
            }

            user.loggedIn = true;
            localStorage.setItem('user', JSON.stringify(user));
            alert("تم تسجيل الدخول بنجاح!");
            window.location.href = "main.html";
        });
    }
});

// تسجيل حساب جديد
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === "" || email === "" || password === "") {
                alert("يرجى إدخال جميع البيانات المطلوبة.");
                return;
            }

            // تحقق من صحة البريد الإلكتروني
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("يرجى إدخال بريد إلكتروني صحيح.");
                return;
            }

            // تحقق من قوة كلمة المرور
            if (password.length < 6) {
                alert("كلمة المرور يجب أن تكون 6 أحرف على الأقل.");
                return;
            }

            const user = {
                username: username,
                email: email,
                password: password,
                loggedIn: false
            };
            localStorage.setItem("user", JSON.stringify(user));
            alert("تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن.");
            window.location.href = "login.html";
        });
    }
});
}
