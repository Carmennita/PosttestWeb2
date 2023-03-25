const masuk = document.getElementById("login");
masuk.onclick = login;


function login(e){
    e.preventDefault();
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");

    localStorage.getItem("Email");
    localStorage.getItem("Password");

    if(email == email && pass == pass){
        alert("Berhasil Masuk");
        window.location.href = "beranda.html"
        }else{
            alert("Gagal !");
        }
}