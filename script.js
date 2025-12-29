        // 1. Menu Responsivo
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));

        // 2. Animação dos Números (Contador)
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // Quanto menor mais rápido

        const animateCounters = () => {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText.replace('+', '').replace('%', ''); // Limpa formatação se houver
                    
                    const inc = target / speed;

                    if (count < target) {
                        // Formatação específica para adicionar '+'
                        let text = Math.ceil(count + inc);
                        if(target === 100) {
                             counter.innerText = text + "%";
                        } else {
                             counter.innerText = "+" + text;
                        }
                        
                        setTimeout(updateCount, 20);
                    } else {
                         // Garante o valor final exato
                         if(target === 100) {
                             counter.innerText = "100%";
                        } else {
                             counter.innerText = "+" + target;
                        }
                    }
                };
                updateCount();
            });
        }

        // 3. Trigger da animação quando rolar até a seção
        let played = false;
        const section = document.querySelector('.stats-section');

        window.addEventListener('scroll', () => {
            const sectionPos = section.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if(sectionPos < screenPos && !played) {
                animateCounters();
                played = true;
            }
        });