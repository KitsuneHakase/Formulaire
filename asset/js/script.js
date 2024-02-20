const envoyer = document.querySelector('#submit') ;


function validationNom () {
    const nom = document.querySelector('#nom').value;
    let nomTest = new RegExp("[A-Z][A-Za-z\é\è\ê\]+$");
    let resultatNomTest = nomTest.test(nom);
    console.log("Nom : " + resultatNomTest);
    
    if (resultatNomTest === false) {
        // alert("Votre Nom n'est pas bon ! \nIl doit contenir une majuscule et uniquement des lettres.");
        let messageErreurNom = document.querySelector("#divNom");
        let spanErreurNom = document.createElement("span");
        spanErreurNom.textContent = "Votre réponse est invalide\nIl doit contenir une majuscule et uniquement des lettres.";
        spanErreurNom.setAttribute("class", "messageNom");
        
        if (!document.querySelector(".messageNom")) {
            messageErreurNom.appendChild(spanErreurNom);
        }
    } else {
        let spanErreurNom = document.querySelector(".messageNom");
        if (spanErreurNom) {
            spanErreurNom.remove();
        }
    };

};

function validationPrenom () {
    const prenom = document.querySelector('#prenom').value;
    let prenomTest = new RegExp("[A-Z][A-Za-z\é\è\ê\-]+$");
    let resultatPrenomTest = prenomTest.test(prenom);
    console.log("Prenom : " + resultatPrenomTest);

    if (resultatPrenomTest === false) {
        // alert("Votre Prénom n'est pas bon ! \nIl doit contenir une majuscule, des lettres et également un tirer.");
        let messageErreurPrenom = document.querySelector("#divPrenom");
        let spanErreurPrenom = document.createElement("span");
        spanErreurPrenom.textContent = "Votre Prénom n'est pas bon ! \nIl doit contenir une majuscule, des lettres et également un tirer.";
        spanErreurPrenom.setAttribute("class", "messagePrenom");
        
        if (!document.querySelector(".messagePrenom")) {
            messageErreurPrenom.appendChild(spanErreurPrenom);
        }
    } else {
        let spanErreurPrenom = document.querySelector(".messagePrenom");
        if (spanErreurPrenom) {
            spanErreurPrenom.remove();
        }
    };
};

function validationAge () {
    const age = document.querySelector('#age').value;
    let ageTest = /^([0-9]\d{0,2})$/;
    let resultatAgeTest = ageTest.test(age);
    console.log("Age : " + resultatAgeTest);

    if (resultatAgeTest === false) {
        // alert("Votre Prénom n'est pas bon ! \nIl doit contenir une majuscule, des lettres et également un tirer.");
        let messageErreurAge = document.querySelector("#divAge");
        let spanErreurAge = document.createElement("span");
        spanErreurAge.textContent = "Votre Âge n'est pas bon ! \nIl doit contenir uniquement des nombres de un à 3 chiffres.";
        spanErreurAge.setAttribute("class", "messageAge");
        
        if (!document.querySelector(".messageAge")) {
            messageErreurAge.appendChild(spanErreurAge);
        }
    } else {
        let spanErreurAge = document.querySelector(".messageAge");
        if (spanErreurAge) {
            spanErreurAge.remove();
        }
    };

};

// function validationGenre () {
//     const genre = document.querySelector('#homme').value;
//     let genreTest = genre.checked;
//     let resultatGenreTest = genreTest.test(genre);
//     console.log("Genre : " + resultatGenreTest);
//     if (genre === false) {
//         alert("Votre Genre n'est pas sélectionner !");
//     };
// };

function validationEmail () {
    const email = document.querySelector('#email').value;
    let emailTest = new RegExp("[a-z0-9-_.]+@[a-z0-9]+(.[A-Za-z]{2,})+$");
    let resultatEmailTest = emailTest.test(email);
    console.log("Email : " + resultatEmailTest);


    if (resultatEmailTest === false) {
        // alert("Votre Prénom n'est pas bon ! \nIl doit contenir une majuscule, des lettres et également un tirer.");
        let messageErreurEmail = document.querySelector("#divEmail");
        let spanErreurEmail = document.createElement("span");
        spanErreurEmail.textContent = "Votre Email n'est pas bon !";
        spanErreurEmail.setAttribute("class", "messageEmail");
        
        if (!document.querySelector(".messageEmail")) {
            messageErreurEmail.appendChild(spanErreurEmail);
        }
    } else {
        let spanErreurEmail = document.querySelector(".messageEmail");
        if (spanErreurEmail) {
            spanErreurEmail.remove();
        }
    };

};

// function validationAdressePostal () {
//     const adressePostal = document.querySelector('#codePostal').value;
//     let adressePostalTest = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/
// ;
//     let resultatCodePostalTest = codePostalTest.test(codePostal);
//     console.log("Code postal : " + resultatCodePostalTest);
//     if (resultatCodePostalTest === false) {
//         alert("Votre Code postal n'est pas bon ! \nIl doit contenir uniquement 5 chiffres.");
//     };

    // if (resultatEmailTest === false) {
    //     // alert("Votre Prénom n'est pas bon ! \nIl doit contenir une majuscule, des lettres et également un tirer.");
    //     let messageErreurEmail = document.querySelector("#divEmail");
    //     let spanErreurEmail = document.createElement("span");
    //     spanErreurEmail.textContent = "Votre Âge n'est pas bon ! \nIl doit contenir uniquement des nombres de un à 3 chiffres.";
    //     spanErreurEmail.setAttribute("class", "messageEmail");
        
    //     if (!document.querySelector(".messageEmail")) {
    //         messageErreurEmail.appendChild(spanErreurEmail);
    //     }
    // } else {
    //     let spanErreurEmail = document.querySelector(".messageEmail");
    //     if (spanErreurEmail) {
    //         spanErreurEmail.remove();
    //     }
    // };


// };

function validationCodePostal () {
    const codePostal = document.querySelector('#codePostal').value;
    let codePostalTest = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
    let resultatCodePostalTest = codePostalTest.test(codePostal);
    console.log("Code postal : " + resultatCodePostalTest);


    if (resultatCodePostalTest === false) {
        // alert("Votre Prénom n'est pas bon ! \nIl doit contenir une majuscule, des lettres et également un tirer.");
        let messageErreurCodePostal = document.querySelector("#divCodePostal");
        let spanErreurCodePostal = document.createElement("span");
        spanErreurCodePostal.textContent = "Votre Code postal n'est pas bon ! \nIl doit contenir uniquement 5 chiffres.";
        spanErreurCodePostal.setAttribute("class", "messageCodePostal");
        
        if (!document.querySelector(".messageCodePostal")) {
            messageErreurCodePostal.appendChild(spanErreurCodePostal);
        }
    } else {
        let spanErreurCodePostal = document.querySelector(".messageCodePostal");
        if (spanErreurCodePostal) {
            spanErreurCodePostal.remove();
        }
    };
};

function validationPays () {
    const pays = document.querySelector('#pays').value;
    let paysTest = /^([A-Z]+[A-Za-z]\w{3,20})$/;
    let resultatPaysTest = paysTest.test(pays);
    console.log("Pays : " + resultatPaysTest);

    if (resultatPaysTest === false) {
        // alert("Votre Prénom n'est pas bon ! \nIl doit contenir une majuscule, des lettres et également un tirer.");
        let messageErreurPays = document.querySelector("#divPays");
        let spanErreurPays = document.createElement("span");
        spanErreurPays.textContent = "Votre Pays n'est pas bon ! \nIl doit contenir uniquement des lettres.";
        spanErreurPays.setAttribute("class", "messagePays");
        
        if (!document.querySelector(".messagePays")) {
            messageErreurPays.appendChild(spanErreurPays);
        }
    } else {
        let spanErreurPays = document.querySelector(".messagePays");
        if (spanErreurPays) {
            spanErreurPays.remove();
        }
    };

};

function validationSecuriteSocial () {
    const securiteSocial = document.querySelector('#securiteSocial').value;
    let securiteSocialTest = /^([0-9]\d{13})+$/;
    let resultatSecuriteSocial = securiteSocialTest.test(securiteSocial);
    console.log("Numéro de sécurité social : " + resultatSecuriteSocial);
    if (resultatSecuriteSocial === false) {
        alert("Votre Numéro de sécurité social n'est pas bon ! \nIl doit contenir uniquement 13 chiffres.");
    };
};

function validationPasseport () {
    const passeport = document.querySelector('#passeport').value;
    let passeportTest = /^^[0-9]{2}[A-z]{2}[0-9]{5}$/;
    let resultatPasseport = passeportTest.test(passeport);
    console.log("Numéro du Passeport : " + resultatPasseport);
    if (resultatPasseport === false) {
        alert("Votre Numéro de votre Passeport n'est pas bon ! \nIl doit contenir 2 chiffres, 2 lettres et 5 chiffres.");
    };
};



envoyer.addEventListener ("click", function (ev) {
    event.preventDefault();
    validationNom();
    validationPrenom();
    validationAge();
    // validationGenre();
    validationEmail();
    // validationAdressePostal();
    validationCodePostal();
    //     validationVille();
    validationPays();
    validationSecuriteSocial();
    validationPasseport();
    //     validationPasseportDelivrance();
    //     validationPasseportValidite();
});








// function validationAge (email) {
//     let ageTest = new RegExp("\d{0,3}[0-9]");
//     let resultatageTest = ageTest.test(age);
//     console.log(resultatageTest);
// };



// function validationEmail () {

// }

