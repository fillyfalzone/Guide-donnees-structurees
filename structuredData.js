// Générer dynamiquement les données structurées 

function generateStructuredData() {
    // Supposons que ces données proviennent d'une source dynamique, comme une API ou une base de données
    var businessInfo = {
        name: "AT FERMETURE",
        url: "https://at-fermeture.com/",
        logo: "https://at-fermeture.com/images/logo.png",
        telephone: "06 24 05 53 16",
        address: {
            streetAddress: "31, chemin des Fades",
            addressLocality: "LE CANNET",
            postalCode: "06110",
            addressCountry: "France"
        },
        aggregateRating: {
            ratingValue: "4.9",
            reviewCount: "234"
        }
    };

    var structuredData = {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": businessInfo.name,
        "url": businessInfo.url,
        "logo": businessInfo.logo,
        "telephone": businessInfo.telephone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": businessInfo.address.streetAddress,
            "addressLocality": businessInfo.address.addressLocality,
            "postalCode": businessInfo.address.postalCode,
            "addressCountry": businessInfo.address.addressCountry
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": businessInfo.aggregateRating.ratingValue,
            "reviewCount": businessInfo.aggregateRating.reviewCount
        }
    };

    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// Appeler la fonction au chargement de la page ou après avoir récupéré les données nécessaires les 3 façons
/*
    1. Utilisation de l'Événement DOMContentLoaded
    Cet événement est déclenché lorsque le document HTML initial a été complètement chargé et analysé, 
    sans attendre que les feuilles de style,  les images et les sous-frames soient terminés. 
    C'est un bon moment pour exécuter des scripts qui n'ont pas besoin d'attendre le chargement complet de la page.
    
    document.addEventListener('DOMContentLoaded', function() {
    generateStructuredData();
    });

    2. Utilisation de l'Événement window.onload
    L'événement load sur l'objet window est déclenché lorsque la page entière, y compris tous les éléments dépendants tels que les feuilles de style et les images, est complètement chargée. Utilisez cette méthode si vous avez besoin que tous les éléments soient chargés avant d'exécuter votre script.

    window.onload = function() {
        
        generateStructuredData();
    
    };

    3. Appel Après Récupération de Données Asynchrones
    Si vous récupérez des données via une requête AJAX ou une API et que vous avez besoin de ces données pour générer vos données structurées, vous devriez appeler generateStructuredData dans la callback ou la promesse de cette requête.

    fetch('url-de-votre-api')
    .then(response => response.json())
    .then(data => {
        // Supposons que data contienne les informations nécessaires
        generateStructuredData(data); // Appelez la fonction en passant les données récupérées
    })
    .catch(error => console.error('Erreur lors de la récupération des données:', error));


*/

