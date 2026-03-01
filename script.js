document.addEventListener('DOMContentLoaded', function() {
    const typedTextElement = document.getElementById('typed-text');
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    
    function calculateAge() {
        const birthDate = new Date('2000-06-08');
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    }
    
    function calculateExperience() {
        const printronixStart = new Date('2021-01-01');
        const sipradiStart = new Date('2024-01-01');
        const today = new Date();
        
        const printronixYears = Math.floor((sipradiStart - printronixStart) / (365.25 * 24 * 60 * 60 * 1000));
        const sipradiYears = Math.floor((today - sipradiStart) / (365.25 * 24 * 60 * 60 * 1000));
        
        return printronixYears + sipradiYears;
    }
    
    function updatePersonalInfo() {
        const ageElement = document.getElementById('age');
        const experienceElement = document.getElementById('total-experience');
        
        if (ageElement) {
            ageElement.textContent = calculateAge();
        }
        
        if (experienceElement) {
            experienceElement.textContent = calculateExperience();
        }
    }
    
    updatePersonalInfo();
    
    setInterval(updatePersonalInfo, 86400000);
    
    const messages = [
        "Initializing security protocols...",
        "Scanning for vulnerabilities...",
        "Loading ethical hacker profile...",
        "Establishing secure connection...",
        "Access granted. Welcome to my portfolio."
    ];
    
    let messageIndex = 0;
    let charIndex = 0;
    let currentMessage = '';
    let isDeleting = false;
    
    function typeWriter() {
        if (!typedTextElement) return;
        
        if (!isDeleting && charIndex < messages[messageIndex].length) {
            currentMessage += messages[messageIndex].charAt(charIndex);
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            currentMessage = currentMessage.substring(0, charIndex - 1);
            charIndex--;
        } else if (!isDeleting && charIndex === messages[messageIndex].length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
            return;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
        }
        
        typedTextElement.textContent = currentMessage;
        
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeWriter, typingSpeed);
    }
    
    typeWriter();
    
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.level-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const level = bar.getAttribute('data-level');
                    setTimeout(() => {
                        bar.style.width = level + '%';
                    }, 200);
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.1 });
        
        skillBars.forEach(bar => observer.observe(bar));
    }
    
    animateSkillBars();
    
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.1';
        
        document.body.appendChild(canvas);
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");
        
        const fontSize = 10;
        const columns = canvas.width / fontSize;
        
        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
        
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff41';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(draw, 35);
    }
    
    createMatrixRain();
    
    function addGlitchEffect() {
        const glitchText = document.querySelector('.glitch-text');
        if (!glitchText) return;
        
        setInterval(() => {
            if (Math.random() > 0.95) {
                glitchText.style.animation = 'none';
                setTimeout(() => {
                    glitchText.style.animation = '';
                }, 200);
            }
        }, 3000);
    }
    
    addGlitchEffect();
    
    function handleTerminalCommands() {
        if (!terminalInput || !terminalOutput) return;
        
        const commands = {
            'help': 'Available commands: help, about, skills, contact, clear, whoami, date, matrix, age, experience, work, phone, email',
            'about': 'Sahil Arahari - Ethical Hacker & Red Team\nSpecializing in network security, web application penetration testing, and adversary simulation.',
            'skills': 'Core Competencies:\n• Network Security & Penetration Testing (95%)\n• Web Application Security (90%)\n• Red Team Operations (93%)\n• Security Architecture (92%)\n• Attack & Exploit Development (88%)\n• Python Programming (90%)\n• HTML Development (80%)\n• C++ Programming (75%)',
            'contact': 'Contact Information:\n• Phone: +9765818890\n• Email: agraharisahil3@gmail.com\n• GitHub: https://github.com/CHMOD-777532\n• LinkedIn: https://www.linkedin.com/in/sahil-agrahari-b73950369\n• Instagram: https://www.instagram.com/sahil.agrahari\n• Facebook: https://www.facebook.com/share/1CKv6qvQfo/',
            'clear': 'CLEAR',
            'whoami': 'sahil = ethical_hacker + red_team + security_enthusiast',
            'date': new Date().toString(),
            'matrix': 'Entering the matrix... 🌐',
            'age': `Current age: ${calculateAge()} years (Born: June 8, 2000)`,
            'experience': `Total experience: ${calculateExperience()} years\n• Printronix Computing Solution: 3 years (IT Department)\n• Sipradi Trading: ${calculateExperience() - 3} years (Current)`,
            'work': 'Work History:\n• Printronix Computing Solution (3 years)\n  - Role: IT Department\n  - Period: 2021 - 2024\n• Sipradi Trading (Current)\n  - Role: IT Security\n  - Period: 2024 - Present',
            'phone': 'Phone: +9765818890\nClick to call: tel:9765818890',
            'email': 'Email: agraharisahil3@gmail.com\nClick to mail: mailto:agraharisahil3@gmail.com',
            'hack': 'Access Denied. This is an ethical hacking portfolio. 🔒',
            'ls': 'profile.jpg  skills/  social_links/  contact_info/  work_history/',
            'pwd': '/home/sahil/portfolio',
            'cat README.md': 'Sahil Arahari - Ethical Hacker Portfolio\n====================================\nWelcome to my digital workspace!\nFeel free to explore my skills and connect with me.',
            'ping google.com': 'PING google.com (142.250.191.14): 56 data bytes\n64 bytes from 142.250.191.14: icmp_seq=0 ttl=116 time=12.345 ms',
            'nmap -sV localhost': 'Starting Nmap 7.92...\nNot shown: 998 closed ports\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 8.2p1\n80/tcp open  http    Apache httpd 2.4.41'
        };
        
        terminalInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const command = this.value.trim().toLowerCase();
                const outputDiv = document.getElementById('terminal-output');
                
                if (command) {
                    const commandLine = document.createElement('div');
                    commandLine.innerHTML = `<span style="color: #cccccc;">root@sahil-sec:~$ ${command}</span>`;
                    outputDiv.appendChild(commandLine);
                    
                    if (commands[command]) {
                        const response = commands[command];
                        if (response === 'CLEAR') {
                            outputDiv.innerHTML = '';
                        } else {
                            const responseLine = document.createElement('div');
                            responseLine.innerHTML = `<span style="color: #00ff41; white-space: pre-line;">${response}</span>`;
                            outputDiv.appendChild(responseLine);
                        }
                    } else if (command === 'exit' || command === 'quit') {
                        const responseLine = document.createElement('div');
                        responseLine.innerHTML = '<span style="color: #ff0040;">Session terminated. Goodbye!</span>';
                        outputDiv.appendChild(responseLine);
                        this.disabled = true;
                    } else {
                        const errorLine = document.createElement('div');
                        errorLine.innerHTML = `<span style="color: #ff0040;">Command not found: ${command}. Type 'help' for available commands.</span>`;
                        outputDiv.appendChild(errorLine);
                    }
                    
                    outputDiv.scrollTop = outputDiv.scrollHeight;
                    this.value = '';
                }
            }
        });
        
        terminalInput.focus();
        document.addEventListener('click', () => {
            terminalInput.focus();
        });
    }
    
    handleTerminalCommands();
    
    function addHoverEffects() {
        const socialLinks = document.querySelectorAll('.social-link');
        const skillCards = document.querySelectorAll('.skill-card');
        
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });
    }
    
    addHoverEffects();
    
    function createBinaryRain() {
        const binaryContainer = document.createElement('div');
        binaryContainer.style.position = 'fixed';
        binaryContainer.style.top = '0';
        binaryContainer.style.left = '0';
        binaryContainer.style.width = '100%';
        binaryContainer.style.height = '100%';
        binaryContainer.style.pointerEvents = 'none';
        binaryContainer.style.zIndex = '-1';
        binaryContainer.style.opacity = '0.05';
        binaryContainer.style.overflow = 'hidden';
        
        document.body.appendChild(binaryContainer);
        
        function createBinaryColumn() {
            const column = document.createElement('div');
            column.style.position = 'absolute';
            column.style.left = Math.random() * 100 + '%';
            column.style.top = '-100px';
            column.style.color = '#00ff41';
            column.style.fontFamily = 'monospace';
            column.style.fontSize = '12px';
            column.style.whiteSpace = 'nowrap';
            column.style.animation = `fall ${5 + Math.random() * 10}s linear infinite`;
            column.style.animationDelay = Math.random() * 5 + 's';
            
            let binaryText = '';
            for (let i = 0; i < 20; i++) {
                binaryText += Math.random() > 0.5 ? '1' : '0';
                if (i < 19) binaryText += '<br>';
            }
            
            column.innerHTML = binaryText;
            binaryContainer.appendChild(column);
            
            setTimeout(() => {
                column.remove();
                createBinaryColumn();
            }, 15000);
        }
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createBinaryColumn(), i * 1000);
        }
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(calc(100vh + 200px));
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    createBinaryRain();
    
    function addTypingSoundEffect() {
        let typingTimeout;
        
        document.addEventListener('keydown', function(e) {
            if (e.target === terminalInput) {
                clearTimeout(typingTimeout);
                terminalInput.style.textShadow = '0 0 5px rgba(0, 255, 65, 0.8)';
                
                typingTimeout = setTimeout(() => {
                    terminalInput.style.textShadow = 'none';
                }, 100);
            }
        });
    }
    
    addTypingSoundEffect();
    
    function initializeRandomGlitches() {
        const elements = document.querySelectorAll('.glitch-text, .section-title, .skill-card h3');
        
        setInterval(() => {
            if (Math.random() > 0.98) {
                const randomElement = elements[Math.floor(Math.random() * elements.length)];
                if (randomElement) {
                    randomElement.style.animation = 'glitch-1 0.2s';
                    setTimeout(() => {
                        randomElement.style.animation = '';
                    }, 200);
                }
            }
        }, 5000);
    }
    
    initializeRandomGlitches();
    
    console.log('%c🔒 SAHIL AGRAHARI - ETHICAL HACKER PORTFOLIO 🔒', 'color: #00ff41; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 65, 0.8);');
    console.log('%cWelcome to my portfolio! Try typing commands in the terminal.', 'color: #00ff41; font-size: 12px;');
    console.log('%cAvailable commands: help, about, skills, contact, clear, whoami, date, matrix, age, experience, work, phone, email', 'color: #cccccc; font-size: 12px;');
});
