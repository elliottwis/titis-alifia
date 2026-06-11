document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".form-data");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let nama = form.querySelector('input[type="text"]').value;
        let alamat = form.querySelector("textarea").value;
        let tempatLahir = form.querySelectorAll('input[type="text"]')[1].value;
        let tanggalLahir = form.querySelector('input[type="date"]').value;
        let noHp = form.querySelector('input[type="number"]').value;
        let email = form.querySelector('input[type="email"]').value;

        let jk = "";
        const radio = document.querySelectorAll('input[name="jk"]');

        radio.forEach((item) => {
            if (item.checked) {
                jk = item.parentElement.textContent.trim();
            }
        });

        let agama = form.querySelector("select").value;

        let hobi = [];
        const checkbox = document.querySelectorAll('.checkbox-group input[type="checkbox"]');

        checkbox.forEach((item) => {
            if (item.checked) {
                hobi.push(item.parentElement.textContent.trim());
            }
        });

        if (
            nama === "" ||
            alamat === "" ||
            tempatLahir === "" ||
            tanggalLahir === "" ||
            noHp === "" ||
            email === "" ||
            jk === "" ||
            hobi.length === 0
        ) {
            alert("Harap isi semua data terlebih dahulu!");
            return;
        }

        let hasil = document.createElement("div");

        hasil.style.marginTop = "25px";
        hasil.style.padding = "20px";
        hasil.style.borderRadius = "15px";
        hasil.style.background = "#f5eaef";
        hasil.style.border = "2px solid rgb(248, 198, 229)";
        hasil.style.lineHeight = "1.8";

        hasil.innerHTML = `
            <h3>DATA BERHASIL DIKIRIM</h3>
            <p><b>Nama Lengkap:</b> ${nama}</p>
            <p><b>Alamat:</b> ${alamat}</p>
            <p><b>Tempat Lahir:</b> ${tempatLahir}</p>
            <p><b>Tanggal Lahir:</b> ${tanggalLahir}</p>
            <p><b>No HP:</b> ${noHp}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Jenis Kelamin:</b> ${jk}</p>
            <p><b>Agama:</b> ${agama}</p>
            <p><b>Hobi:</b> ${hobi.join(", ")}</p>
        `;

        form.appendChild(hasil);

        alert("Data berhasil dikirim!");

        form.reset();
    });

});