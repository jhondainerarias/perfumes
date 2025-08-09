document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Referencias a Elementos del DOM ---
    const messageArea = document.getElementById('messageArea');
    const nombreInput = document.getElementById('nombreInput');
    const celularInput = document.getElementById('celularInput');
    const containerPerfumeByBrand = document.getElementById('perfumeByBrandContainer');
    const casaSelect = document.getElementById('casaSelect');
    const perfumeSelect = document.getElementById('perfumeSelect');
    const perfumeGlobalSelect = document.getElementById('perfumeGlobalSelect');
    const tamañoButtons = document.querySelectorAll('#tamañoMenu .choice-button');
    const paymentMethodButtons = document.querySelectorAll('#paymentMethodMenu .choice-button');
    const nequiInfo = document.getElementById('nequiInfo');
    const creditInfo = document.getElementById('creditInfo');
    const sendWhatsappButton = document.getElementById('sendWhatsappButton');

    // --- 2. Variables de Estado del Pedido ---
    let selectedTamaño = '';
    let selectedPrecio = 0;
    let selectedMetodoPago = '';

    // --- 3. Datos de Perfumes (¡Mantener esta estructura!) ---
    const perfumesData = {
        "afnan": ["9am pour dama", "9pm pour dama", "9pm men", "9am unisex", "9pm rebel unisex"],
        "agataruizdelaprada": ["Gotas de color dama"],
        "ahli": ["Ahli Karpos dama", "Ahli Vega dama", "Ahli Corvus dama"],
        "alharamain": ["Al Haramain Amber Oud Unisex", "Amber Oud Gold Unisex", "Amber Rouge Unisex", "Amber Oud Blue Edition Unisex"],
        "animale": ["Animale dama", "Animale for Men"],
        "antoniobanderas": ["Blue Seduction Dama", "King of Seduction men", "Blue Seduction men", "The Golden Secret men"],
        "arianagrande": ["Cloud dama", "Thank U Next dama", "Ari dama", "Cloud Pink dama", "Sweet Like Candy dama", "Mod Vanilla dama", "Thank U Next 2.0 dama", "Rem dama"],
        "armaf": ["Club de Nuit Dama", "Island Bliss dama ", "Yum Yum dama", "Odyssey Candee dama", "Club de Nuit men", "Mandarin Sky men"],
        "arrurru": ["Arrurru Unisex Bebe"],
        "bath&bodyworks": ["Velvet Sugar dama", "Pink Chiffon dama", "Loquito Por Ti dama"],
        "benetton": ["Tribu"],
        "bharara": ["Bharara Niche dama", "Bharara Rose dama", "Onice men", "King men"],
        "bilieeilish": ["Eilish dama"],
        "bondn°9": ["Bond N°9 Signature dama", "Bleecker Street Unisex"],
        "britneyspears": ["Fantasy dama", "Fantasy Night dama"],
        "burberry": ["Burberry Her dama"],
        "bvlgari": ["Omnia Amethyste dama", "Omnia Cristal dama", "Omnia Paraiba dama", "Omnia Coral dama", "Aqua men", "Man In Black men", "Bvlgari Men"],
        "cacharel": ["Amor Amor dama"],
        "calvinklein": ["CK In2U dama", "Eternity dama", "Euphoria dama", "Escape dama", "Eternity men", "Scape men", "CK In2U men", "CK One Unisex"],
        "carolinaherrera": ["Carolina Herrera dama", "CH dama", "212 Sexy dama", "212 VIP dama ", "212 VIP Rose dama", "212 VIP Rose Red dama", "212 VIP Wild Party dama", "Central Park dama", "Good Girl dama", "Prive dama", "Sublime dama", "212 Heroes for Her dama", "212 NYC Mujer", "Very Good Girl Glam dama", "Good Girl Legere dama", "Good Girl Blush dama", "Good Girl Supreme dama", "CH Queens dama", "212 Men", "NYC Men", "212 VIP Men", "212 VIP men", "212 VIP Black OWM men ", "VIP Black Red men", "Bad Boy men", "Central Park men", "Prive Men", "212 Heros men", "Forever Young men", "CH Men", "212 Sexy Men", "212 Men Aqua"],
        "cartier": ["Must de Cartier", "Cartier Santos men"],
        "chanel": ["Chance dama", "Coco Mademoiselle dama", "Chanel No 5 dama", "Bleu de Chanel", "Allure Sport"],
        "christiandior": ["Jadore dama", "Miss Dior Blooming Bouquet dama", "Poison Girl dama", "Miss Dior Parfum dama", "Dior Sauvage men", "Fahrenheit men", "Sauvage Elixir men"],
        "clinique": ["Clinique Happy Dama", "Clinique Happy Men"],
        "creed": ["Carmina dama", "Aventus Men", "Silver Montan Water Men", "Centaurus Unisex"],
        "cristianoronaldo": ["CR7", "CR7 Legacy"],
        "diesel": ["Only The Brave", "Bad Men", "Only The Brave Men", "Espirit Brave Men", "Pluss Men", "Fuel For Life"],
        "dolcegabbana": ["Imperatrice dama", "Light Blue dama", "The One dama", "Pineapple dama", "Q Dolce Gabbana dama", "Devotion dama ", "Light Blue Men", "K Men"],
        "dumontparis": ["Nitro Red"],
        "elizabetharden": ["5th Avenue dama "],
        "elizabethtaylor": ["Diamante Blanco"],
        "enriqueiglesias": ["Adrenaline Men"],
        "escada": ["Moon Sparkle dama", "Agua del Sol dama", "Sorbetto Rosso dama", "Rock in Rio dama", "Taj Sunset dama"],
        "esika": ["Dorsay", "Winwesport"],
        "faconable": ["Faconable Men"],
        "ferrari": ["Scuderia Ferrari men"],
        "fredhayman": ["273 Beverly Hills dama", "Touch dama"],
        "giardini di toscana": ["Bianco Latte Unisex"],
        "gillescantuel": ["Arsenal men"],
        "giorgioarmani": ["Acqua di Gioia dama ", "Si dama", "Acqua di Gio Men", "Code Men", "Acqua di Gio Profumo", "Stronger With You Men"],
        "givenchy": ["Angel y Daimon dama", "Organza dama", "Blue Label Men", "Pi Men"],
        "gucci": ["Gucci Bloom dama", "Gucci Men"],
        "guess": ["Guess dama "],
        "hugoboss": ["Hugo Woman dama", "Hugo XX dama", "Boss Bottled Night Men", "Boss Dark Blue Men", "Boss Energise Men", "Boss Ice Men", "In Motion Men", "In Motion Men", "Orange Men", "Unlimited Men", "Boss Red Men", "Hugo XY Men", "Hugo Men", "Boss Bottled Tonic Men", "Just Diferent Men", "Boss Element Men", "Elixir Men"],
        "ilmin": ["Il Roso dama ", "Il Orgasme Unisex", "Ilmin Tabac", "Il Femme Unisex", "Il Kakuno Unisex", "Il Ego Unisex", "Il Dolce Unisex", "Il Erotique Unisex"],
        "isseymiyake": ["Issey Miyake dama ", "Issey Miyake Men ", "Issey Miyake Sport Men", "Issey Miyake Version 1992 Men "],
        "jeanpaulgaultier": ["Jean Paul Gaultier dama", "Scandal dama", "Le Male Men", "Scandal Men", "Ultra Male Men", "Le Beau Men", "Le Male Elixir Men", "Le Male Le Parfum Men", "Beau Paradise Garden Men"],
        "jeanpascal": ["Jean Pascal"],
        "jesusdelpozo": ["Halloween dama", "Halloween Men"],
        "juicycouture": ["Viva La Juicy dama"],
        "justinbieber": ["Next Girlfriend dama"],
        "katyperry": ["Meaw dama", "Purr dama"],
        "kenzo": ["Flower dama"],
        "killian": ["Love Don't Be Shy dama", "Black Phantom Unisex"],
        "kimkardashian": ["BFF dama"],
        "lacoste": ["Lacoste Magnetic dama", "Red Lacoste Men ", "Lacoste Natural dama", "Lacoste Sparkling dama", "Touch of Pink dama", "Eau de Lacoste L.12.12", "Lacoste Blanca Men", "Lacoste Essential Men", "Lacoste Noir Negra Men", "Lacoste Red Men", "Lacoste Rouge Men", "Lacoste Bleu Men", "Lacoste Amarilla Men", "Lacoste Men"],
        "lancome": ["La Vida es Bella dama", " men "],
        "lattafa": ["Yara dama", "Bade'e Al Oud Sublime dama", "Yara Moi dama ", "Mayar dama", "Yara Tous dama", "Haya dama", "Yara Candy dama", "Noble Blush dama", "Her Confession dama", "Asad Men", "Fakar Blak Men", "Asad Zanzibar Men ", "Asad Bourbon Men ", "His Confession Men ", "Khamrah Dukhan Men", "Bade'e Al Oud Amethyst Unisex", "Bade'e Al Oud Oud For Glory Unisex", "Khamrah Unisex", "Shaheen Gold Unisex", "Honor y Glory Unisex", "Nebras Unisex", "Ajwad Unisex", "Khamrah Qahwa Unisex", "Emeer Unisex", "Affection Unisex"],
        "lelabo": ["Santal 33 men"],
        "le labo": ["Santal 33 Unisex"],
        "lizclaiborne": ["Curve"],
        "loewe": ["Loewe Solo", "7 Loewe"],
        "lolitalempicka": ["Lolita Lempicka dama"],
        "lorenzo pazzaglia": ["Summer Hammer Unisex"],
        "louisvuitton": ["L Inmensite Men", "Imagination Men"],
        "louis vuitton": ["Ombre Nomade Unisex", "Pacific Chill Unisex"],
        "maison francis k": ["Baccarat Rouge Unisex"],
        "maluma": ["Maluma dama", "Maluma Jade dama", "Onix Royalty Men", "Garnet Royalty Men"],
        "mancera": ["Red Tobaco Unisex", "Amore Café Unisex"],
        "mercedesbenz": ["Mercedes-Benz Men"],
        "montblanc": ["Explorer Men", "Legend Men", "Star Walker Men", "Emblemem Men", "Explorer Platinum Men"],
        "montale": ["Roses Musk dama", "Crazy In Love dama ", "Intense Cafe", "Intense Café Unisex", "Starry Night Unisex", "Arabians Tonka Unisex", "Chocolate Greedy Unisex", "Day Dream Unisex"],
        "moschino": ["Toy 2 dama", "Toy 2 Bubble Gum dama ", "Funny Moschino dama ", "Gold Fresh Couture dama", "I Love I Love dama", "Toy 2 Pearl dama", "Toy Boy Men"],
        "natura": ["Kaiak Men"],
        "nautica": ["Nautica Voyage Men", "Voyage Version 2006 Men"],
        "onedirection": ["Our Moment dama"],
        "orientica": ["Amber Rouge Unisex", "Imperial Gold Men", "Royal Amber Unisex", "Oud Saffron Unisex ", "Royal Bleu Unisex", "Azure Fantasy Unisex", "Velvet Gold Unisex"],
        "orto parisi": ["Megamare Unisex"],
        "oscardelarenta": ["Pour Lui Men"],
        "pacorabanne": ["Black XS dama", "Lady Million Royal dama ", "Lady Million dama ", "Olympea dama", "Olympea Aqua dama", "Fame dama", "1 Million Men", "Invictus Men ", "One Million Royal Men", "Invictus Aqua Men", "Invictus Intense Men", "Invictus Legend Men", "One Million Luky Men", "Phantom Men", "Pure XS Men", "Invictus Victori Men", "Black XS Aphrodisiaque Men", "Black XS L Exces Men", "One Million Golden Oud Men", "One Million Prive Men", "Invictus Parfum Men", "One Million Elixir Men", "Invictus Platinum Men"],
        "parfumsdemarly": ["Delina dama", "Althair Men", "Pegasus Men ", "Layton Unisex", "Kalan Unisex"],
        "parishilton": ["Can Can dama ", "Can Can Burlesque dama", "Gold Rush dama", "Heires dama", "Paris Hilton dama", "Dazzle dama", "Passport In Paris dama", "Rose Rush dama", "Gold Rush Men", "Paris Hilton Men", "Men"],
        "perryellis": ["360 Coral dama", "360 Mujer", "360 Red Men", "360 Men"],
        "pinosilvestre": ["Pino Silvestre Men"],
        "prada": ["Candy Night dama", "Luna Rossa Ocean Men ", "Luna Rosa Carbon Men"],
        "ralphlauren": ["Ralph Lauren dama", "Polo Blue Men", "Polo Red Men", "Polo Ultra Blue Men"],
        "rasasi": ["Hawas for Him Men"],
        "reyane": ["Insurrection Men "],
        "roger & gallet": ["Marie Farina Unisex"],
        "selenagomez": ["Selena Gomez dama"],
        "shakira": ["Rock dama", "S Dama"],
        "sofiavergara": ["Love dama", "Sofía Vergara dama"],
        "tedlapidus": ["Lapidus Men"],
        "thierrimugler": ["Angel dama", "Angel Men"],
        "tiziana terenzi": ["Kirke Unisex", "Cassiopea Unisex"],
        "tomford": ["Ombre Later 16 Men"],
        "tom ford": ["Tobacco Vanille Unisex"],
        "tommyhilfiger": ["Tommy Girl dama", "Tommy Boy Men"],
        "tous": ["More More Pink dama", "Tous Man"],
        "valentino": ["Born in Roma Yellow dama", "Valentino Uomo Men", "Born in Roma Men"],
        "versace": ["Eros Dama", "Bright Crystal dama", "Yellow Diamond dama", "Bright Crystal Parfum dama", "Eros Flame Men ", "Eros Men", "Eau Fraiche Men", "Dilan Blue Men", "Versace Pour Homme Men", "Eros Energy Men", "Men"],
        "victoriasecret": ["Coconut Passion dama", "Eau So Sexy dama", "Mango dama", "Vainilla Lace dama", "Sandia dama", "Strawberry Champagne dama", "Bombshell dama", "Pure Seduction dama", "Velvet Petals dama", "Scandalous dama", "Pera dama", "Aqua Kiss dama"],
        "victorinox": ["Swiss Army For Her dama", "Swiss Army Men"],
        "viktor&rolf": ["Flowerbomb", "Spicebomb", "Spicebomb Men"],
        "yanbal": ["Gaia dama", "Osadia dama", "Ccori Rosé dama", "Ccori dama", "Ohm Black Caballero", "Celos dama", "Cielo dama", "Temptation Dama", "Temptation Men", "Osadia Men", "Solo Men", "Ohm Men", "Arom Men", "Adrenaline HM Men", "43n Parallel Men"],
        "yvessaintlaurent": ["M7 Men", "Yves Men"],
        "xerjoff": ["XJ 1861 Naxos Unisex", "Alexandria II Unisex", "Erba Pura Unisex"],
        "zlatan": ["Zlatan Ibrahimović Men"],
    };

    // --- Funciones de Utilidad ---

    function formatPrice(price) {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(price);
    }
    
    // --- NUEVA FUNCIÓN PARA EL CONFETI ---
    // Esta función encapsula la lógica de lanzar el confeti
    function fireConfetti() {
        confetti({
            particleCount: 900,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // --- 4. Función para Actualizar el Resumen del Pedido ---
    function updateOrderSummary() {
        const nombre = nombreInput.value.trim();
        const celular = celularInput.value.trim();
        
        let metodoPagoText = '';
        let additionalCostMessage = '';
        const costoAdicionalCredito = 5000;

        if (selectedMetodoPago === 'nequi') {
            metodoPagoText = 'Nequi';
        } else if (selectedMetodoPago === 'efectivo') {
            metodoPagoText = 'Efectivo (Contra entrega)';
        } else if (selectedMetodoPago === 'credito') {
            metodoPagoText = 'Crédito o Plazos';
            additionalCostMessage = ` (con costo adicional de ${formatPrice(costoAdicionalCredito)})`;
        } else {
            metodoPagoText = 'No seleccionado';
        }

        let finalPerfumeDisplay = '';
        let isPerfumeSelected = false;

        if (perfumeGlobalSelect.value) {
            finalPerfumeDisplay = perfumeGlobalSelect.options[perfumeGlobalSelect.selectedIndex].textContent;
            isPerfumeSelected = true;
        } else if (casaSelect.value && perfumeSelect.value) {
            const selectedCasaText = casaSelect.options[casaSelect.selectedIndex].textContent;
            const selectedPerfumeText = perfumeSelect.options[perfumeSelect.selectedIndex].textContent;
            finalPerfumeDisplay = `${selectedPerfumeText} (${selectedCasaText})`;
            isPerfumeSelected = true;
        }

        let message = '';
        let allRequiredFieldsSelected = false;

        if (nombre && celular && isPerfumeSelected && selectedTamaño && selectedMetodoPago) {
            message = `¡Excelente, ${nombre}! Tu pedido de **${finalPerfumeDisplay}** en **${selectedTamaño.charAt(0).toUpperCase() + selectedTamaño.slice(1)}** (precio: ${formatPrice(selectedPrecio)}) con pago **${metodoPagoText}${additionalCostMessage}** está listo.\n\nPresiona "Enviar Pedido por WhatsApp" para confirmar.`;
            allRequiredFieldsSelected = true;
        } else {
            message = 'Por favor, completa todos los campos para ver el resumen de tu pedido.';
        }

        messageArea.innerText = message;
        sendWhatsappButton.disabled = !allRequiredFieldsSelected;
        sendWhatsappButton.classList.toggle('disabled', !allRequiredFieldsSelected);
    }

    // --- Función para inicializar la lista global de perfumes ---
    function populateGlobalPerfumeSelect() {
        let allPerfumes = [];
        for (const brand in perfumesData) {
            const formattedBrandName = brand.replace(/\b\w/g, char => char.toUpperCase()).replace(/&/g, ' & ');
            perfumesData[brand].forEach(perfume => {
                allPerfumes.push({ name: perfume, brand: formattedBrandName });
            });
        }
        allPerfumes.sort((a, b) => a.name.localeCompare(b.name));
        perfumeGlobalSelect.innerHTML = '<option value="">Selecciona un perfume de la lista (Global)</option>';
        allPerfumes.forEach(p => {
            const option = document.createElement('option');
            option.value = p.name;
            option.textContent = `${p.name} (${p.brand})`;
            perfumeGlobalSelect.appendChild(option);
        });
    }

    // --- Función para inicializar el select de Casas/Marcas ---
    function populateCasaSelect() {
        const brands = Object.keys(perfumesData).sort();
        casaSelect.innerHTML = '<option value="">Selecciona una casa/marca</option>';
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand.replace(/\b\w/g, char => char.toUpperCase()).replace(/&/g, ' & ');
            casaSelect.appendChild(option);
        });
        perfumeSelect.classList.add('hidden');
    }

    // --- 5. Eventos de Inputs y Selecciones ---
    nombreInput.addEventListener('input', updateOrderSummary);
    celularInput.addEventListener('input', updateOrderSummary);

    perfumeGlobalSelect.addEventListener('change', function() {
        if (this.value) {
            casaSelect.value = "";
            perfumeSelect.innerHTML = '<option value="">Selecciona un perfume</option>';
            perfumeSelect.classList.add('hidden');
            casaSelect.disabled = true;
        } else {
            casaSelect.disabled = false;
        }
        updateOrderSummary();
    });

    casaSelect.addEventListener('change', function() {
        const selectedBrand = this.value;
        perfumeSelect.innerHTML = '<option value="">Selecciona un perfume</option>';

        if (selectedBrand) {
            perfumeGlobalSelect.value = "";
            perfumeGlobalSelect.disabled = true;
            perfumeSelect.disabled = false;
            perfumeSelect.classList.remove('hidden');
            if (perfumesData[selectedBrand]) {
                perfumesData[selectedBrand].forEach(perfume => {
                    const option = document.createElement('option');
                    option.value = perfume;
                    option.textContent = perfume;
                    perfumeSelect.appendChild(option);
                });
            }
        } else {
            perfumeSelect.classList.add('hidden');
            perfumeSelect.disabled = true;
            perfumeGlobalSelect.disabled = false;
        }
        updateOrderSummary();
    });

    perfumeSelect.addEventListener('change', updateOrderSummary);

    tamañoButtons.forEach(button => {
        button.addEventListener('click', function() {
            tamañoButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            selectedTamaño = this.dataset.tamaño;
            selectedPrecio = parseFloat(this.dataset.precio);
            updateOrderSummary();
        });
    });

    paymentMethodButtons.forEach(button => {
        button.addEventListener('click', function() {
            paymentMethodButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            selectedMetodoPago = this.dataset.metodo;

            nequiInfo.classList.add('hidden');
            creditInfo.classList.add('hidden');

            if (selectedMetodoPago === 'nequi') {
                nequiInfo.classList.remove('hidden');
            } else if (selectedMetodoPago === 'credito') {
                creditInfo.classList.remove('hidden');
            }
            updateOrderSummary();
        });
    });

    // --- 6. Lógica para el Botón de WhatsApp ---
    sendWhatsappButton.addEventListener('click', function() {
        const nombre = nombreInput.value.trim();
        const celular = celularInput.value.trim();
        let finalPerfume = '';

        if (perfumeGlobalSelect.value) {
            finalPerfume = perfumeGlobalSelect.options[perfumeGlobalSelect.selectedIndex].textContent;
        } else if (casaSelect.value && perfumeSelect.value) {
            finalPerfume = `${perfumeSelect.options[perfumeSelect.selectedIndex].textContent} (${casaSelect.options[casaSelect.selectedIndex].textContent})`;
        }

        if (!nombre || !celular || !finalPerfume || !selectedTamaño || !selectedMetodoPago) {
            alert("Por favor, completa todos los campos del pedido (nombre, celular, perfume, tamaño y método de pago) antes de enviar.");
            return;
        }

        // --- EL CONFETI YA NO SE DISPARA AQUÍ ---
        
        let metodoPagoText = '';
        let whatsappAdditionalMessage = '';
        const costoAdicionalCredito = 5000;

        if (selectedMetodoPago === 'nequi') {
            metodoPagoText = 'Nequi';
        } else if (selectedMetodoPago === 'efectivo') {
            metodoPagoText = 'Efectivo (Contra entrega)';
        } else if (selectedMetodoPago === 'credito') {
            metodoPagoText = 'Crédito o Plazos';
            whatsappAdditionalMessage = `\n\nTen en cuenta que con la opción de pago Crédito o Plazos tiene un costo adicional de ${formatPrice(costoAdicionalCredito)} en cualquier presentación.`;
        }
        
        const whatsappNumber = '573138094678';
        const whatsappMessage = `Hola, mi nombre es ${nombre}. Estoy interesado(a) en el perfume "${finalPerfume}" de ${selectedTamaño.charAt(0).toUpperCase() + selectedTamaño.slice(1)} por ${formatPrice(selectedPrecio)}. Mi método de pago es ${metodoPagoText}.${whatsappAdditionalMessage} Mi número de celular es ${celular}. Por favor, confírmame el pedido.`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        alert("¡Pedido enviado! Hemos abierto WhatsApp para que puedas confirmar tu compra.");

        // Resetear el formulario y el estado
        nombreInput.value = '';
        celularInput.value = '';
        perfumeGlobalSelect.value = '';
        casaSelect.value = '';
        perfumeSelect.innerHTML = '<option value="">Selecciona un perfume</option>';
        perfumeSelect.classList.add('hidden');
        casaSelect.disabled = false;
        perfumeGlobalSelect.disabled = false;
        tamañoButtons.forEach(btn => btn.classList.remove('selected'));
        paymentMethodButtons.forEach(btn => btn.classList.remove('selected'));
        nequiInfo.classList.add('hidden');
        creditInfo.classList.add('hidden');
        selectedTamaño = '';
        selectedPrecio = 0;
        selectedMetodoPago = '';
        updateOrderSummary();
    });

    // --- 7. Inicializar al Cargar la Página ---
    // Llamada a la nueva función de confeti. Esto la activará cuando la página se cargue.
    fireConfetti();
    populateGlobalPerfumeSelect();
    populateCasaSelect();
    updateOrderSummary();
});
function lanzarEfecto() {
    // Definimos las imágenes para el confeti
    const images = ['imagen/billete.png', 'imagen/moneda-oro.png']; // Asegúrate de que las rutas de las imágenes son correctas

    // Obtenemos la posición del botón
    const button = document.getElementById('botonConfeti');
    const rect = button.getBoundingClientRect();

    // Lanzamos el confeti desde la posición del botón
    confetti({
        particleCount: 150, // Más partículas para un efecto más denso
        spread: 120, // Ampliamos la dispersión
        origin: {
            x: (rect.left + rect.right) / window.innerWidth / 2,
            y: rect.top / window.innerHeight
        },
        // Usamos las imágenes como confeti
        shapes: images.map(img => `<img src="${img}" style="width: 50px; height: 50px;">`),
        scalar: 2, // Aumentamos el tamaño de las partículas
        ticks: 200 // Duración del efecto
    });
}
