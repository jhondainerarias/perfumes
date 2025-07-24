document.addEventListener('DOMContentLoaded', function() {
    // --- 1. Referencias a Elementos del DOM ---
    const messageArea = document.getElementById('messageArea');
    const nombreInput = document.getElementById('nombreInput');
    const celularInput = document.getElementById('celularInput');

    // NUEVOS ELEMENTOS para la selección por casa/marca
    const containerPerfumeByBrand = document.getElementById('perfumeByBrandContainer'); // Nuevo contenedor
    const casaSelect = document.getElementById('casaSelect'); // Selector de Casa/Marca
    const perfumeSelect = document.getElementById('perfumeSelect'); // Selector de Perfumes por Casa

    // Elemento existente para la lista global
    const perfumeGlobalSelect = document.getElementById('perfumeGlobalSelect');

    const tamañoButtons = document.querySelectorAll('#tamañoMenu .choice-button');
    const paymentMethodButtons = document.querySelectorAll('#paymentMethodMenu .choice-button');
    const nequiInfo = document.getElementById('nequiInfo');
    const sendWhatsappButton = document.getElementById('sendWhatsappButton');
    const genderButtons = document.querySelectorAll('#genderSelectionMenu .choice-button');

    // --- 2. Variables de Estado del Pedido ---
    // selectedPerfume ya no es estrictamente necesario como variable global para almacenar el valor.
    // Lo obtendremos directamente de los selects al momento de actualizar el resumen/enviar WhatsApp.
    let selectedTamaño = '';
    let selectedPrecio = 0;
    let selectedMetodoPago = '';
    let selectedGender = '';

    // --- 3. Datos de Perfumes (¡Mantener esta estructura!) ---
    // Las claves del objeto deben coincidir con los "value" de las opciones en el select de casas.
    const perfumesData = {
        "afnan": ["9am pour dama", "9pm pour dama", "9pm men"],
        "agataruizdelaprada": ["Gotas de color dama"],
        "ahli": ["Ahli Karpos dama", "Ahli Vega dama", "Ahli Corvus dama"],
        "animale": ["Animale dama", "Animale for Men"],
        "antoniobanderas": ["Blue Seduction Dama", "King of Seduction men", "Blue Seduction men", "The Golden Secret men"],
        "arianagrande": ["Cloud dama", "Thank U Next dama", "Ari dama", "Cloud Pink dama", "Sweet Like Candy dama", "Mod Vanilla dama", "Thank U Next 2.0 dama", "Rem dama"],
        "armaf": ["Club de Nuit Dama", "Island Bliss dama ", "Yum Yum dama", "Odyssey Candee dama", "Club de Nuit men", "Mandarin Sky men"],
        "arrurru": ["Arrurru Unisex Bebe"],
        "bath&bodyworks": ["Velvet Sugar dama", "Pink Chiffon dama", "Loquito Por Ti dama"],
        "benetton": ["Tribu"],
        "bharara": ["Bharara Niche dama", "Bharara Rose dama", "Onice men", "King men"],
        "bilieeilish": ["Eilish dama"],
        "bondn°9": ["Bond N°9 Signature dama"],
        "britneyspears": ["Fantasy dama", "Fantasy Night dama"],
        "burberry": ["Burberry Her dama"],
        "bvlgari": ["Omnia Amethyste dama", "Omnia Cristal dama", "Omnia Paraiba dama", "Omnia Coral dama", "Aqua men", "Man In Black men", "Bvlgari Men"],
        "cacharel": ["Amor Amor dama"],
        "calvinklein": ["CK In2U dama", "Eternity dama", "Euphoria dama", "Escape dama", "Eternity men", "Scape men", "CK In2U men"],
        "carolinaherrera": ["Carolina Herrera dama", "CH dama", "212 Sexy dama", "212 VIP dama ", "212 VIP Rose dama", "212 VIP Rose Red dama", "212 VIP Wild Party dama", "Central Park dama", "Good Girl dama", "Prive dama", "Sublime dama", "212 Heroes for Her dama", "212 NYC Mujer", "Very Good Girl Glam dama", "Good Girl Legere dama", "Good Girl Blush dama", "Good Girl Supreme dama", "CH Queens dama", "212 Men", "NYC Men", "212 VIP Men", "212 VIP men", "212 VIP Black OWM men ", "VIP Black Red men", "Bad Boy men", "Central Park men", "Prive Men", "212 Heros men", "Forever Young men", "CH Men", "212 Sexy Men", "212 Men Aqua"],
        "cartier": ["Must de Cartier", "Cartier Santos men"],
        "chanel": ["Chance dama", "Coco Mademoiselle dama", "Chanel No 5 dama", "Bleu de Chanel", "Allure Sport"],
        "christiandior": ["Jadore dama", "Miss Dior Blooming Bouquet dama", "Poison Girl dama", "Miss Dior Parfum dama", "Dior Sauvage men", "Fahrenheit men", "Sauvage Elixir men"],
        "clinique": ["Clinique Happy Dama", "Clinique Happy Men"],
        "creed": ["Carmina dama", "Aventus Men", "Silver Montan Water Men"],
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
        "gillescantuel": ["Arsenal men"],
        "giorgioarmani": ["Acqua di Gioia dama ", "Si dama", "Acqua di Gio Men", "Code Men", "Acqua di Gio Profumo", "Stronger With You Men"],
        "givenchy": ["Angel y Daimon dama", "Organza dama", "Blue Label Men", "Pi Men"],
        "gucci": ["Gucci Bloom dama", "Gucci Men"],
        "guess": ["Guess dama "],
        "hugoboss": ["Hugo Woman dama", "Hugo XX dama", "Boss Bottled Night Men", "Boss Dark Blue Men", "Boss Energise Men", "Boss Ice Men", "In Motion Men", "In Motion Men", "Orange Men", "Unlimited Men", "Boss Red Men", "Hugo XY Men", "Hugo Men", "Boss Bottled Tonic Men", "Just Diferent Men", "Boss Element Men", "Elixir Men"],
        "ilmin": ["Il Roso dama ", "Il Orgasme Unisex", "Ilmin Tabac"],
        "isseymiyake": ["Issey Miyake dama ", "Issey Miyake Men ", "Issey Miyake Sport Men", "Issey Miyake Version 1992 Men "],
        "jeanpaulgaultier": ["Jean Paul Gaultier dama", "Scandal dama", "Le Male Men", "Scandal Men", "Ultra Male Men", "Le Beau Men", "Le Male Elixir Men", "Le Male Le Parfum Men", "Beau Paradise Garden Men"],
        "jeanpascal": ["Jean Pascal"],
        "jesusdelpozo": ["Halloween dama", "Halloween Men"],
        "juicycouture": ["Viva La Juicy dama"],
        "justinbieber": ["Next Girlfriend dama"],
        "katyperry": ["Meaw dama", "Purr dama"],
        "kenzo": ["Flower dama"],
        "killian": ["Love Don't Be Shy dama"],
        "kimkardashian": ["BFF dama"],
        "lacoste": ["Lacoste Magnetic dama", "Red Lacoste Men ", "Lacoste Natural dama", "Lacoste Sparkling dama", "Touch of Pink dama", "Eau de Lacoste L.12.12", "Lacoste Blanca Men", "Lacoste Essential Men", "Lacoste Noir Negra Men", "Lacoste Red Men", "Lacoste Rouge Men", "Lacoste Bleu Men", "Lacoste Amarilla Men", "Lacoste Men"],
        "lancome": ["La Vida es Bella dama", " men "],
        "lattafa": ["Yara dama", "Bade'e Al Oud Sublime dama", "Yara Moi dama ", "Mayar dama", "Yara Tous dama", "Haya dama", "Yara Candy dama", "Noble Blush dama", "Her Confession dama", "Asad Men", "Fakar Blak Men", "Asad Zanzibar Men ", "Asad Bourbon Men ", "His Confession Men ", "Khamrah Dukhan Men "],
        "lelabo": ["Santal 33 men"],
        "lizclaiborne": ["Curve"],
        "loewe": ["Loewe Solo", "7 Loewe"],
        "lolitalempicka": ["Lolita Lempicka dama"],
        "louisvuitton": ["L Inmensite Men", "Imagination Men"],
        "maluma": ["Maluma dama", "Maluma Jade dama", "Onix Royalty Men", "Garnet Royalty Men"],
        "mercedesbenz": ["Mercedes-Benz Men"],
        "montblanc": ["Explorer Men", "Legend Men", "Star Walker Men", "Emblemem Men", "Explorer Platinum Men"],
        "montale": ["Roses Musk dama", "Crazy In Love dama ", "Intense Cafe"],
        "moschino": ["Toy 2 dama", "Toy 2 Bubble Gum dama ", "Funny Moschino dama ", "Gold Fresh Couture dama", "I Love I Love dama", "Toy 2 Pearl dama", "Toy Boy Men"],
        "natura": ["Kaiak Men"],
        "nautica": ["Nautica Voyage Men", "Voyage Version 2006 Men"],
        "onedirection": ["Our Moment dama"],
        "orientica": ["Amber Rouge Unisex", "Imperial Gold Men", "Royal Amber Unisex", "Oud Saffron Unisex ", "Royal Bleu Unisex", "Azure Fantasy Unisex", "Velvet Gold Unisex"],
        "oscardelarenta": ["Pour Lui Men"],
        "pacorabanne": ["Black XS dama", "Lady Million Royal dama ", "Lady Million dama ", "Olympea dama", "Olympea Aqua dama", "Fame dama", "1 Million Men", "Invictus Men ", "One Million Royal Men", "Invictus Aqua Men", "Invictus Intense Men", "Invictus Legend Men", "One Million Luky Men", "Phantom Men", "Pure XS Men", "Invictus Victori Men", "Black XS Aphrodisiaque Men", "Black XS L Exces Men", "One Million Golden Oud Men", "One Million Prive Men", "Invictus Parfum Men", "One Million Elixir Men", "One Million Intense Men", "Invictus Platinum Men"],
        "parfumsdemarly": ["Delina dama", "Althair Men", "Pegasus Men "],
        "parishilton": ["Can Can dama ", "Can Can Burlesque dama", "Gold Rush dama", "Heires dama", "Paris Hilton dama", "Dazzle dama", "Passport In Paris dama", "Rose Rush dama", "Gold Rush Men", "Paris Hilton Men", "Men"],
        "perryellis": ["360 Coral dama", "360 Mujer", "360 Red Men", "360 Men"],
        "pinosilvestre": ["Pino Silvestre Men"],
        "prada": ["Candy Night dama", "Luna Rossa Ocean Men ", "Luna Rosa Carbon Men"],
        "ralphlauren": ["Ralph Lauren dama", "Polo Blue Men", "Polo Red Men", "Polo Ultra Blue Men"],
        "rasasi": ["Hawas for Him Men"],
        "reyane": ["Insurrection Men "],
        "selenagomez": ["Selena Gomez dama"],
        "shakira": ["Rock dama", "S Dama"],
        "sofiavergara": ["Love dama", "Sofía Vergara dama"],
        "tedlapidus": ["Lapidus Men"],
        "thierrimugler": ["Angel dama", "Angel Men"],
        "tomford": ["Ombre Later 16 Men"],
        "tommyhilfiger": ["Tommy Girl dama", "Tommy Boy Men"],
        "tous": ["More More Pink dama", "Tous Man"],
        "valentino": ["Born in Roma Yellow dama", "Valentino Uomo Men", "Born in Roma Men"],
        "versace": ["Eros Dama", "Bright Crystal dama", "Yellow Diamond dama", "Bright Crystal Parfum dama", "Eros Flame Men ", "Eros Men", "Eau Fraiche Men", "Dilan Blue Men", "Versace Pour Homme Men", "Eros Energy Men", "Men"],
        "victoriasecret": ["Coconut Passion dama", "Eau So Sexy dama", "Mango dama", "Vainilla Lace dama", "Sandia dama", "Strawberry Champagne dama", "Bombshell dama", "Pure Seduction dama", "Velvet Petals dama", "Scandalous dama", "Pera dama", "Aqua Kiss dama"],
        "victorinox": ["Swiss Army For Her dama", "Swiss Army Men"],
        "viktor&rolf": ["Flowerbomb", "Spicebomb", "Spicebomb Men"],
        "yanbal": ["Gaia dama", "Osadia dama", "Ccori Rosé dama", "Ccori dama", "Ohm Black Caballero", "Celos dama", "Cielo dama", "Temptation Dama", "Temptation Men", "Osadia Men", "Solo Men", "Ohm Men", "Arom Men", "Adrenaline HM Men", "43n Parallel Men"],
        "yvessaintlaurent": ["M7 Men", "Yves Men"],
        "zlatan": ["Zlatan Ibrahimović Men"],
"afnan": ["9am unisex", "9pm rebel unisex"],
"alharamain": ["Al Haramain Amber Oud Unisex", "Amber Oud Gold Unisex", "Amber Rouge Unisex", "Amber Oud Blue Edition Unisex"],
"bond n°9": ["Bleecker Street Unisex"],
"calvin klein": ["CK One Unisex"],
"creed": ["Centaurus Unisex"],
"giardini di toscana": ["Bianco Latte Unisex"],
"ilmin": ["Il Femme Unisex", "Il Kakuno Unisex", "Il Ego Unisex", "Il Dolce Unisex", "Il Orgasme Unisex", "Il Erotique Unisex"],
"killian": ["Black Phantom Unisex"],
"lattafa": ["Bade'e Al Oud Amethyst Unisex", "Bade'e Al Oud Oud For Glory Unisex", "Khamrah Unisex", "Shaheen Gold Unisex", "Honor y Glory Unisex", "Nebras Unisex", "Ajwad Unisex", "Khamrah Qahwa Unisex", "Emeer Unisex", "Affection Unisex"],
"le labo": ["Santal 33 Unisex"],
"lorenzo pazzaglia": ["Summer Hammer Unisex"],
"louis vuitton": ["Ombre Nomade Unisex", "Pacific Chill Unisex"],
"maison francis k": ["Baccarat Rouge Unisex"],
"mancera": ["Red Tobaco Unisex", "Amore Café Unisex"],
"montale": ["Intense Café Unisex", "Starry Night Unisex", "Arabians Tonka Unisex", "Chocolate Greedy Unisex", "Day Dream Unisex"],
"orientica": ["Amber Rouge Unisex", "Royal Amber Unisex", "Oud Saffron Unisex", "Royal Bleu Unisex", "Azure Fantasy Unisex", "Velvet Gold Unisex"],
"orto parisi": ["Megamare Unisex"],
"parfums de marly": ["Layton Unisex", "Kalan Unisex"],
"roger & gallet": ["Marie Farina Unisex"],
"tiziana terenzi": ["Kirke Unisex", "Cassiopea Unisex"],
"tom ford": ["Tobacco Vanille Unisex"],
"xerjoff": ["XJ 1861 Naxos Unisex", "Alexandria II Unisex", "Erba Pura Unisex"]
 };

    // --- Funciones de Utilidad ---

    // Función para formatear el precio a moneda colombiana (COP)
    function formatPrice(price) {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(price);
    }

    // --- 4. Función para Actualizar el Resumen del Pedido ---
    function updateOrderSummary() {
        const nombre = nombreInput.value.trim();
        const celular = celularInput.value.trim();
        const metodoPagoText = selectedMetodoPago === 'nequi' ? 'Nequi' : (selectedMetodoPago === 'efectivo' ? 'Efectivo (Contra entrega)' : 'No seleccionado');

        let finalPerfumeDisplay = '';
        let isPerfumeSelected = false;

        // Priorizar el select global si tiene un valor seleccionado
        if (perfumeGlobalSelect.value) {
            finalPerfumeDisplay = perfumeGlobalSelect.options[perfumeGlobalSelect.selectedIndex].textContent; // Usar textContent para incluir la marca
            isPerfumeSelected = true;
        } else if (casaSelect.value && perfumeSelect.value) {
            // Si no hay selección global, usar la combinación de casa y perfume
            const selectedCasaText = casaSelect.options[casaSelect.selectedIndex].textContent;
            const selectedPerfumeText = perfumeSelect.options[perfumeSelect.selectedIndex].textContent;
            finalPerfumeDisplay = `${selectedPerfumeText} (${selectedCasaText})`;
            isPerfumeSelected = true;
        }

        let message = '';
        let allRequiredFieldsSelected = false;

        // Condición para habilitar el botón de WhatsApp y mostrar el resumen completo
        if (nombre && celular && isPerfumeSelected && selectedTamaño && selectedMetodoPago && selectedGender) {
            message = `¡Excelente, ${nombre}! Tu pedido de **${finalPerfumeDisplay}** en **${selectedTamaño.charAt(0).toUpperCase() + selectedTamaño.slice(1)}** (precio: ${formatPrice(selectedPrecio)}) para **${selectedGender.charAt(0).toUpperCase() + selectedGender.slice(1)}** con pago **${metodoPagoText}** está listo.\n\nPresiona "Enviar Pedido por WhatsApp" para confirmar.`;
            allRequiredFieldsSelected = true;
        } else {
            message = 'Por favor, completa todos los campos para ver el resumen de tu pedido.';
        }

        messageArea.innerText = message;
        sendWhatsappButton.disabled = !allRequiredFieldsSelected;
        // Opcional: puedes añadir clases para estilos de opacidad/cursor si los manejas con CSS
        sendWhatsappButton.classList.toggle('disabled', !allRequiredFieldsSelected);
    }

    // --- Función para inicializar la lista global de perfumes ---
    function populateGlobalPerfumeSelect() {
        let allPerfumes = [];
        for (const brand in perfumesData) {
            // Capitalizar la primera letra de cada palabra de la marca para mostrarla mejor
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
            option.textContent = `${p.name} (${p.brand})`; // Mostrar "NombrePerfume (Marca)"
            perfumeGlobalSelect.appendChild(option);
        });
    }

    // --- Función para inicializar el select de Casas/Marcas ---
    function populateCasaSelect() {
        const brands = Object.keys(perfumesData).sort(); // Obtener y ordenar las marcas
        casaSelect.innerHTML = '<option value="">Selecciona una casa/marca</option>';
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            // Capitalizar la primera letra de cada palabra de la marca para mostrarla mejor
            option.textContent = brand.replace(/\b\w/g, char => char.toUpperCase()).replace(/&/g, ' & ');
            casaSelect.appendChild(option);
        });
        perfumeSelect.classList.add('hidden'); // Ocultar el select de perfume inicialmente
    }


    // --- 5. Eventos de Inputs y Selecciones ---

    // Nombre y Celular
    nombreInput.addEventListener('input', updateOrderSummary);
    celularInput.addEventListener('input', updateOrderSummary);

    // Selección de Perfume de la lista global
    perfumeGlobalSelect.addEventListener('change', function() {
        // Si se selecciona un perfume de la lista global, limpiar y deshabilitar los selects de casa/perfume
        if (this.value) {
            casaSelect.value = ""; // Limpiar selección de casa
            perfumeSelect.innerHTML = '<option value="">Selecciona un perfume</option>'; // Limpiar opciones de perfume
            perfumeSelect.classList.add('hidden'); // Ocultar perfume select
            casaSelect.disabled = true; // Deshabilitar casa select
        } else {
            casaSelect.disabled = false; // Habilitar casa select si se deselecciona el global
        }
        updateOrderSummary();
    });

    // Selección de Casa (Marca)
    casaSelect.addEventListener('change', function() {
        const selectedBrand = this.value;
        perfumeSelect.innerHTML = '<option value="">Selecciona un perfume</option>'; // Limpiar opciones de perfume

        // Si se selecciona una casa, limpiar el select global y habilitar los selects de casa/perfume
        if (selectedBrand) {
            perfumeGlobalSelect.value = ""; // Limpiar el select global
            perfumeGlobalSelect.disabled = true; // Deshabilitar el select global
            perfumeSelect.disabled = false; // Habilitar select de perfume por casa
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
            // Si no se selecciona ninguna casa, deshabilitar select de perfume y habilitar select global
            perfumeSelect.classList.add('hidden');
            perfumeSelect.disabled = true;
            perfumeGlobalSelect.disabled = false;
        }
        updateOrderSummary();
    });

    // Selección de Perfume por Casa
    perfumeSelect.addEventListener('change', function() {
        updateOrderSummary();
    });

    // Selección de Género
    genderButtons.forEach(button => {
        button.addEventListener('click', function() {
            genderButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            selectedGender = this.dataset.genero;
            updateOrderSummary();
        });
    });

    // Selección de Tamaño
    tamañoButtons.forEach(button => {
        button.addEventListener('click', function() {
            tamañoButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            selectedTamaño = this.dataset.tamaño;
            selectedPrecio = parseFloat(this.dataset.precio);
            updateOrderSummary();
        });
    });

    // Selección de Método de Pago
    paymentMethodButtons.forEach(button => {
        button.addEventListener('click', function() {
            paymentMethodButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            selectedMetodoPago = this.dataset.metodo;

            if (selectedMetodoPago === 'nequi') {
                nequiInfo.classList.remove('hidden');
            } else {
                nequiInfo.classList.add('hidden');
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

        if (!nombre || !celular || !finalPerfume || !selectedTamaño || !selectedMetodoPago || !selectedGender) {
            alert("Por favor, completa todos los campos del pedido (nombre, celular, perfume, tamaño, género y método de pago) antes de enviar.");
            return;
        }

        const metodoPagoText = selectedMetodoPago === 'nequi' ? 'Nequi' : 'Efectivo (Contra entrega)';

        const whatsappNumber = '573138094678';
        const whatsappMessage = `Hola, mi nombre es ${nombre}. Estoy interesado(a) en el perfume "${finalPerfume}" de ${selectedTamaño.charAt(0).toUpperCase() + selectedTamaño.slice(1)} para ${selectedGender.charAt(0).toUpperCase() + selectedGender.slice(1)} por ${formatPrice(selectedPrecio)}. Mi método de pago es ${metodoPagoText}. Mi número de celular es ${celular}. Por favor, confírmame el pedido.`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        alert("¡Pedido enviado! Hemos abierto WhatsApp para que puedas confirmar tu compra.");

        // Resetear el formulario y el estado
        nombreInput.value = '';
        celularInput.value = '';
        perfumeGlobalSelect.value = ''; // Resetear el select global
        casaSelect.value = ''; // Resetear select de casa
        perfumeSelect.innerHTML = '<option value="">Selecciona un perfume</option>'; // Resetear y ocultar select de perfume
        perfumeSelect.classList.add('hidden');
        casaSelect.disabled = false; // Habilitar casa select
        perfumeGlobalSelect.disabled = false; // Habilitar global select

        tamañoButtons.forEach(btn => btn.classList.remove('selected'));
        paymentMethodButtons.forEach(btn => btn.classList.remove('selected'));
        genderButtons.forEach(btn => btn.classList.remove('selected'));
        nequiInfo.classList.add('hidden');

        selectedTamaño = '';
        selectedPrecio = 0;
        selectedMetodoPago = '';
        selectedGender = '';
        updateOrderSummary();
    });

    // --- 7. Inicializar al Cargar la Página ---
    populateGlobalPerfumeSelect(); // Llama a la función para llenar el select global
    populateCasaSelect(); // Llama a la función para llenar el select de casas
    updateOrderSummary(); // Actualiza el resumen inicial
});