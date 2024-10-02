// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    // Gửi yêu cầu POST tới API
    fetch("http://localhost:3000", {
      method: "POST", // Gửi dữ liệu với phương thức POST
      headers: {
        "Content-Type": "application/json", // Định dạng dữ liệu gửi đi
      },
      body: JSON.stringify(user), // Chuyển đối tượng thành JSON
    })
      .then((response) => {
        if (response.ok) {
          alert("Đăng ký thành công!");
          window.location.href = "login.html";
        } else {
          // Xử lý khi có lỗi từ API
          response.json().then((data) => {
            alert(`Lỗi: ${data.message}`);
          });
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
        alert("Đăng ký thất bại. Vui lòng thử lại.");
      });
    // let json = JSON.stringify(user);
    // localStorage.setItem(inputUsernameRegister.value, json);
    // alert("Successfully signed up!");
    // window.location.href = "login.html";
  }
});

// document.getElementById('signup-form').addEventListener('submit', async function(e) {
//   e.preventDefault(); // Ngăn form submit lại trang
//
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
//
//   try {
//     const response = await fetch('http://localhost:3000/auth/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });
//
//     const data = await response.json();
//
//     if (response.ok) {
//       alert('Đăng ký thành công!');
//     } else {
//       alert(`Lỗi: ${data.message}`);
//     }
//   } catch (error) {
//     console.error('Error during signup:', error);
//     alert('Có lỗi xảy ra, vui lòng thử lại.');
//   }
// });
