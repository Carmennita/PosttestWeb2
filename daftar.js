let users = []
let form = document.getElementById("form")
 
 
form.addEventListener("submit", (e) => {
        e.preventDefault()
            let nama = document.getElementById("daf_nama").value;
            let email = document.getElementById("daf_email").value;
            let pass = document.getElementById("daf_pass").value;
 
        let user = {
            username: nama,
            email: email,
            password: pass
        }

        localStorage.setItem("user",JSON.stringify(user));
        console.log(JSON.stringify(user));
        alert("Berhasil Daftar");
    })