document.addEventListener('DOMContentLoaded', () => {
    // Catálogo de productos (tu catálogo completo)
    const catalogData = {
       // Catálogo de productos completo y corregido

    'Carolina Herrera': [
        { nombre: 'Carolina Herrera dama' }, { nombre: 'CH dama' }, { nombre: '212 Sexy dama' },
        { nombre: '212 VIP dama' }, { nombre: '212 VIP Rose dama' }, { nombre: '212 VIP Rose Red dama' },
        { nombre: '212 VIP Wild Party dama' }, { nombre: 'Central Park dama' }, { nombre: 'Good Girl dama' },
        { nombre: 'Prive dama' }, { nombre: 'Sublime dama' }, { nombre: '212 Heroes for Her dama' },
        { nombre: '212 NYC Mujer' }, { nombre: 'Very Good Girl Glam dama' }, { nombre: 'Good Girl Legere dama' },
        { nombre: 'Good Girl Blush dama' }, { nombre: 'Good Girl Supreme dama' }, { nombre: 'CH Queens dama' },
        { nombre: '212 Men' }, { nombre: 'NYC Men' }, { nombre: '212 VIP Men' }, { nombre: '212 VIP men' },
        { nombre: '212 VIP Black OWM men' }, { nombre: 'VIP Black Red men' }, { nombre: 'Bad Boy men' },
        { nombre: 'Central Park men' }, { nombre: 'Prive Men' }, { nombre: '212 Heros men' },
        { nombre: 'Forever Young men' }, { nombre: 'CH Men' }, { nombre: '212 Sexy Men' },
        { nombre: '212 Men Aqua' }
    ],
    'Paco Rabanne': [
        { nombre: 'Black XS dama' }, { nombre: 'Lady Million Royal dama' }, { nombre: 'Lady Million dama' },
        { nombre: 'Olympea dama' }, { nombre: 'Olympea Aqua dama' }, { nombre: 'Fame dama' },
        { nombre: '1 Million Men' }, { nombre: 'Invictus Men' }, { nombre: 'One Million Royal Men' },
        { nombre: 'Invictus Aqua Men' }, { nombre: 'Invictus Intense Men' }, { nombre: 'Invictus Legend Men' },
        { nombre: 'One Million Luky Men' }, { nombre: 'Phantom Men' }, { nombre: 'Pure XS Men' },
        { nombre: 'Invictus Victori Men' }, { nombre: 'Black XS Aphrodisiaque Men' }, { nombre: 'Black XS L Exces Men' },
        { nombre: 'One Million Golden Oud Men' }, { nombre: 'One Million Prive Men' }, { nombre: 'Invictus Parfum Men' },
        { nombre: 'One Million Elixir Men' }, { nombre: 'Invictus Platinum Men' }
    ],
    'Lataffa': [
        { nombre: 'Yara dama' }, { nombre: 'Bade\'e Al Oud Sublime dama' }, { nombre: 'Yara Moi dama' }, { nombre: 'Mayar dama' },
        { nombre: 'Yara Tous dama' }, { nombre: 'Haya dama' }, { nombre: 'Yara Candy dama' }, { nombre: 'Noble Blush dama' },
        { nombre: 'Her Confession dama' }, { nombre: 'Asad Men' }, { nombre: 'Fakar Blak Men' }, { nombre: 'Asad Zanzibar Men' },
        { nombre: 'Asad Bourbon Men' }, { nombre: 'His Confession Men' }, { nombre: 'Khamrah Dukhan Men' },
        { nombre: 'Bade\'e Al Oud Amethyst Unisex' }, { nombre: 'Bade\'e Al Oud Oud For Glory Unisex' }, { nombre: 'Khamrah Unisex' },
        { nombre: 'Shaheen Gold Unisex' }, { nombre: 'Honor y Glory Unisex' }, { nombre: 'Nebras Unisex' },
        { nombre: 'Ajwad Unisex' }, { nombre: 'Khamrah Qahwa Unisex' }, { nombre: 'Emeer Unisex' }, { nombre: 'Affection Unisex' }
    ],
    'Hugo Boss': [
        { nombre: 'Hugo Woman dama' }, { nombre: 'Hugo XX dama' }, { nombre: 'Boss Bottled Night Men' },
        { nombre: 'Boss Dark Blue Men' }, { nombre: 'Boss Energise Men' }, { nombre: 'Boss Ice Men' },
        { nombre: 'In Motion Men' }, { nombre: 'Orange Men' }, { nombre: 'Unlimited Men' },
        { nombre: 'Boss Red Men' }, { nombre: 'Hugo XY Men' }, { nombre: 'Hugo Men' },
        { nombre: 'Boss Bottled Tonic Men' }, { nombre: 'Just Diferent Men' }, { nombre: 'Boss Element Men' },
        { nombre: 'Elixir Men' }
    ],
    'Lacoste': [
        { nombre: 'Magnetic dama' }, { nombre: 'Red Lacoste Men' }, { nombre: 'Lacoste Natural dama' },
        { nombre: 'Lacoste Sparkling dama' }, { nombre: 'Touch of Pink dama' }, { nombre: 'Eau de Lacoste' },
        { nombre: 'L.12.12' }, { nombre: 'Lacoste Blanca Men' }, { nombre: 'Lacoste Essential Men' },
        { nombre: 'Lacoste Noir Negra Men' }, { nombre: 'Lacoste Red Men' }, { nombre: 'Lacoste Rouge Men' },
        { nombre: 'Lacoste Bleu Men' }, { nombre: 'Lacoste Amarilla Men' }, { nombre: 'Lacoste Men' }
    ],
    'Yambal': [
        { nombre: 'Gaia dama' }, { nombre: 'Osadia dama' }, { nombre: 'Ccori Rosé dama' },
        { nombre: 'Ccori dama' }, { nombre: 'Ohm Black men' }, { nombre: 'Celos dama' },
        { nombre: 'Cielo dama' }, { nombre: 'Temptation Dama' }, { nombre: 'Temptation Men' },
        { nombre: 'Osadia Men' }, { nombre: 'Solo Men' }, { nombre: 'Arom Men' },
        { nombre: 'Adrenaline HM Men' }, { nombre: '43n Parallel Men' }
    ],
    'Victoria Secret': [
        { nombre: 'Coconut Passion dama' }, { nombre: 'Eau So Sexy dama' }, { nombre: 'Mango dama' },
        { nombre: 'Vainilla Lace dama' }, { nombre: 'Sandia dama' }, { nombre: 'Strawberry Champagne dama' },
        { nombre: 'Bombshell dama' }, { nombre: 'Pure Seduction dama' }, { nombre: 'Velvet Petals dama' },
        { nombre: 'Scandalous dama' }, { nombre: 'Pera dama' }, { nombre: 'Aqua Kiss dama' }
    ],
    'Jean Paul Gaultier': [
        { nombre: 'Jean Paul Gaultier dama' }, { nombre: 'Scandal dama' }, { nombre: 'Le Male Men' },
        { nombre: 'Scandal Men' }, { nombre: 'Ultra Male Men' }, { nombre: 'Le Beau Men' },
        { nombre: 'Le Male Elixir Men' }, { nombre: 'Le Male Le Parfum Men' }, { nombre: 'Beau Paradise Garden Men' }
    ],
    'Montale': [
        { nombre: 'Roses Musk dama' }, { nombre: 'Crazy In Love dama' }, { nombre: 'Intense Cafe' },
        { nombre: 'Intense Café Unisex' }, { nombre: 'Starry Night Unisex' }, { nombre: 'Arabians Tonka Unisex' },
        { nombre: 'Chocolate Greedy Unisex' }, { nombre: 'Day Dream Unisex' }
    ],
    'Ariana Grande': [
        { nombre: 'cloud dama' }, { nombre: 'thank u next dama' }, { nombre: 'ari dama' },
        { nombre: 'cloud oink dama' }, { nombre: 'sweet like candy dama' }, { nombre: 'mod vanilla dama' },
        { nombre: 'thank u nex 2.0 dama' }, { nombre: 'rem dama' }
    ],
    'Versace': [
        { nombre: 'Eros Dama' }, { nombre: 'Bright Crystal dama' }, { nombre: 'Yellow Diamond dama' },
        { nombre: 'Bright Crystal Parfum dama' }, { nombre: 'Eros Flame Men' }, { nombre: 'Eros Men' },
        { nombre: 'Eau Fraiche Men' }, { nombre: 'Dilan Blue Men' }, { nombre: 'Versace Pour Homme Men' },
        { nombre: 'Eros Energy Men' }
    ],
    'Calvin Klein': [
        { nombre: 'ck in 2u dama' }, { nombre: 'eternity dama' }, { nombre: 'euphoria dama' },
        { nombre: 'escape dama' }, { nombre: 'eternity men' }, { nombre: 'scape men' },
        { nombre: 'ck in2u men' }, { nombre: 'ck one unisex' }
    ],
    'Ilmin': [
        { nombre: 'Il Roso dama' }, { nombre: 'Il Orgasme Unisex' }, { nombre: 'Ilmin Tabac' },
        { nombre: 'Il Femme Unisex' }, { nombre: 'Il Kakuno Unisex' }, { nombre: 'Il Ego Unisex' },
        { nombre: 'Il Dolce Unisex' }, { nombre: 'Il Erotique Unisex' }
    ],
    'Moshino': [
        { nombre: 'Toy 2 dama' }, { nombre: 'Toy 2 Bubble Gum dama' }, { nombre: 'Funny Moschino dama' },
        { nombre: 'Gold Fresh Couture dama' }, { nombre: 'I Love I Love dama' }, { nombre: 'Toy 2 Pearl dama' },
        { nombre: 'Toy Boy Men' }
    ],
    'Armaf': [
        { nombre: 'club de nuit dama' }, { nombre: 'island bliss dama' }, { nombre: 'yum yum dama' },
        { nombre: 'odyssey cande dama' }, { nombre: 'cluit de nuit men' }, { nombre: 'mandarin sky men' }
    ],
    'Giorgio Armani': [
        { nombre: 'Acqua di Gioia dama' }, { nombre: 'Si dama' }, { nombre: 'Acqua di Gio Men' },
        { nombre: 'Code Men' }, { nombre: 'Acqua di Gio Profumo' }, { nombre: 'Stronger With You Men' }
    ],
    'Chanel': [
        { nombre: 'Chance dama' }, { nombre: 'Coco Mademoiselle dama' }, { nombre: 'Chanel No 5 dama' },
        { nombre: 'Bleu de Chanel' }, { nombre: 'Allure Sport' }
    ],
    'Escada': [
        { nombre: 'Moon Sparkle dama' }, { nombre: 'Agua del Sol dama' }, { nombre: 'Sorbetto Rosso dama' },
        { nombre: 'Rock in Rio dama' }, { nombre: 'Taj Sunset dama' }
    ],
    'Afnan': [
        { nombre: '9 pm pour dama' }, { nombre: '9 pm men' }, { nombre: '9 am pour dama' },
        { nombre: '9 am unisex' }, { nombre: '9 pm rebel unisex' }
    ],
    // --- Marcas que faltaban, agregadas con la estructura correcta ---
    'Antonio Banderas': [
        { nombre: 'blue seduction dama' },
        { nombre: 'blue seduction men' },
        { nombre: 'king of sedution men' },
        { nombre: 'the goldensecret men' }
    ],
    'Dolce & Gabbana': [
        { nombre: 'Imperatrice dama' },
        { nombre: 'Light Blue dama' },
        { nombre: 'The One dama' },
        { nombre: 'Pineapple dama' },
        { nombre: 'Q Dolce Gabbana dama' },
        { nombre: 'Devotion dama' },
        { nombre: 'Light Blue Men' },
        { nombre: 'K Men' }
    ],
    'Christian Dior': [
        { nombre: 'Jadore dama' },
        { nombre: 'Miss Dior Blooming Bouquet dama' },
        { nombre: 'Poison Girl dama' },
        { nombre: 'Miss Dior Parfum dama' },
        { nombre: 'Dior Sauvage men' },
        { nombre: 'Fahrenheit men' },
        { nombre: 'Sauvage Elixir men' }
    ],
    'Diesel': [
        { nombre: 'Only The Brave' },
        { nombre: 'Bad Men' },
        { nombre: 'Only The Brave Men' },
        { nombre: 'Espirit Brave Men' },
        { nombre: 'Pluss Men' },
        { nombre: 'Fuel For Life' }
    ],
    'Orientica': [
        { nombre: 'Amber Rouge Unisex' },
        { nombre: 'Imperial Gold Men' },
        { nombre: 'Royal Amber Unisex' },
        { nombre: 'Oud Saffron Unisex' },
        { nombre: 'Royal Bleu Unisex' },
        { nombre: 'Azure Fantasy Unisex' },
        { nombre: 'Velvet Gold Unisex' }
    ],
    'Ralph Lauren': [
        { nombre: 'Ralph Lauren dama' },
        { nombre: 'Polo Blue Men' },
        { nombre: 'Polo Red Men' },
        { nombre: 'Polo Ultra Blue Men' }
    ],
    'Al Haramain': [
        { nombre: 'Amber Oud (Unisex)' },
        { nombre: 'Amber Oud Gold (Unisex)' },
        { nombre: 'Amber Rouge (Unisex)' },
        { nombre: 'Amber Oud Blue Edition (Unisex)' }
    ],
    'Bahara': [
        { nombre: 'bharara niche dama' },
        { nombre: 'bharara rose dama' },
        { nombre: 'onice men' },
        { nombre: 'king men' }
    ],
    'Ahli Fragrances': [
        { nombre: 'Ahli Karpos (dama)' },
        { nombre: 'Ahli Vega (dama)' },
        { nombre: 'Ahli Corvus (dama)' }
    ],
    'Bath & Bois': [
        { nombre: 'velbet sugar dama' },
        { nombre: 'pink chiffon dama' },
        { nombre: 'loquito por ti dama' }
    ],
    'Parfumes de Marly': [
        { nombre: 'Delina dama' },
        { nombre: 'Pegasus Men' },
        { nombre: 'Kalan Unisex' }
    ],
    'Valentino': [
        { nombre: 'Born in Roma Yellow dama' },
        { nombre: 'Valentino Uomo Men' },
        { nombre: 'Born in Roma Men' }
    ],
    'Animale': [
        { nombre: 'animale dama' },
        { nombre: 'animale men' }
    ],
    'Esika': [
        { nombre: 'winwer sport' },
        { nombre: 'dorsay' }
    ],
    'Sofia Vergara': [
        { nombre: 'Love dama' },
        { nombre: 'Sofía Vergara dama' }
    ],
    'Tommy Hilfiger': [
        { nombre: 'tomy girl dama' },
        { nombre: 'Tommy Boy Men' }
    ],
    'Benetton': [
        { nombre: 'tribu dama' }
    ],
    'Burberry': [
        { nombre: 'burberry dama' }
    ],
    'Giardini Di Toscana': [
        { nombre: 'Bianco Latte Unisex' }
    ],
    'Agatha Ruiz de la Prada': [
        { nombre: 'gotas dama' }
    ]
};

    // Variables para guardar la información del pedido
    const orderInfo = {};

    // Obtener todos los elementos importantes del DOM
    const steps = document.querySelectorAll('.step');
    const brandItems = document.querySelectorAll('.brand-item'); // Seleccionamos el contenedor completo
    const perfumeList = document.getElementById('perfume-list');
    const summaryBrand = document.getElementById('summary-brand');
    const summaryPerfume = document.getElementById('summary-perfume');
    const sizeSelect = document.getElementById('size-select');
    const paymentSelect = document.getElementById('payment-method-select');
    const clientNameInput = document.getElementById('client-name');
    const clientPhoneInput = document.getElementById('client-phone');
    const nextBtn = document.querySelector('.next-btn');
    const backBtns = document.querySelectorAll('.back-btn');
    const sendOrderBtn = document.getElementById('send-order-btn');

    // Función principal para mostrar un paso y ocultar los demás
    const showStep = (stepNumber) => {
        steps.forEach(step => step.classList.add('hidden'));
        document.getElementById(`step-${stepNumber}`).classList.remove('hidden');
    };

    // Event listener para la navegación hacia atrás
    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const stepToGo = parseInt(btn.dataset.step);
            showStep(stepToGo);
        });
    });

    // Manejar la selección de marca (Paso 1)
    brandItems.forEach(item => {
        item.addEventListener('click', () => {
            brandItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            
            orderInfo.brand = item.dataset.brand;
            generatePerfumeList(orderInfo.brand);
            showStep(2);
        });
    });

    // Manejar la selección de perfume (Paso 2)
    perfumeList.addEventListener('click', (event) => {
        const selectedItem = event.target.closest('li');
        if (selectedItem) {
            perfumeList.querySelectorAll('li').forEach(item => item.classList.remove('selected'));
            selectedItem.classList.add('selected');
            
            orderInfo.perfume = selectedItem.dataset.perfume;
            
            summaryBrand.textContent = orderInfo.brand;
            summaryPerfume.textContent = orderInfo.perfume;
            
            showStep(3);
        }
    });

    // Manejar el botón Siguiente (Paso 3)
    nextBtn.addEventListener('click', () => {
        orderInfo.size = sizeSelect.value;
        orderInfo.paymentMethod = paymentSelect.value;

        if (!orderInfo.size || !orderInfo.paymentMethod) {
            alert('Por favor, selecciona el tamaño y el método de pago.');
            return;
        }

        showStep(4);
    });

    // Manejar el envío final del pedido (Paso 4)
    sendOrderBtn.addEventListener('click', () => {
        const clientName = clientNameInput.value.trim();
        const clientPhone = clientPhoneInput.value.trim();

        if (!clientName || !clientPhone) {
            alert('Por favor, ingresa tu nombre y teléfono para finalizar la compra.');
            return;
        }

        const message = `¡Hola! mi pedido es:\n\n` +
                        `*Datos del cliente:*\n` +
                        `Nombre: ${clientName}\n` +
                        `Teléfono: ${clientPhone}\n\n` +
                        `*Detalles del pedido:*\n` +
                        `Marca: ${orderInfo.brand}\n` +
                        `Perfume: ${orderInfo.perfume}\n` +
                        `Tamaño: ${sizeSelect.options[sizeSelect.selectedIndex].text}\n` +
                        `Método de pago: ${paymentSelect.options[paymentSelect.selectedIndex].text}`;
        
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '573138094678'; // Reemplaza este número con el tuyo
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappURL, '_blank');
    });

    // Función para generar dinámicamente la lista de perfumes
    const generatePerfumeList = (brand) => {
        perfumeList.innerHTML = '';
        const perfumes = catalogData[brand];
        if (perfumes) {
            perfumes.forEach(perfume => {
                const li = document.createElement('li');
                li.textContent = perfume.nombre;
                li.dataset.perfume = perfume.nombre;
                perfumeList.appendChild(li);
            });
        }
    };

    // Iniciar la tienda en el primer paso
    showStep(1);
});