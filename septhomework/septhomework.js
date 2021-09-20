

let form = document.getElementById('my-form');
form.addEventListener('submit', (event) => {
        event.preventDefault();
        let yourname = document.querySelector('input[name="yourname"]').value;
        let youremail = document.querySelector('input[name="youremail"]').value;
        let yourphone = document.querySelector('input[name="yourphone"]').value;
        let yourage = document.querySelector('input[name="yourage"]').value;
        if (yourage < 18) {
                alert('YOU ARE NOT YET 18');
        } else {
      
        document.getElementById('yourname').innerHTML = yourname;
        document.getElementById('youremail').innerHTML = youremail;
        document.getElementById('yourphone').innerHTML = yourphone;
        document.getElementById('yourage').innerHTML = yourage;
        }
})

