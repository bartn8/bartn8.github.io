function updateAge() {
    const birthDate = new Date('1998-05-23');
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Se il compleanno non è ancora passato quest'anno, sottrai 1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    // Trova e aggiorna il testo che contiene l'età
    const bioSection = document.querySelector('.summary-section p');
    if (bioSection) {
        bioSection.innerHTML = bioSection.innerHTML.replace(/a \d+ years/, `a ${age} years`);
    }
}

// Esegui l'aggiornamento quando la pagina è caricata
document.addEventListener('DOMContentLoaded', updateAge);
