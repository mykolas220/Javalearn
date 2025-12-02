const app = {
    state: {
        currentScreen: 'home',
        xp: 0,
        hearts: 5,
        streak: 1,
        gems: 0,
        completedLessons: [],
        currentLesson: null,
        currentStepIndex: 0
    },

    init: function() {
        this.loadState();
        this.renderHome();
        
        // Attach event listeners for sidebar
        const toggleBtn = document.getElementById('sidebar-toggle');
        const closeBtn = document.getElementById('sidebar-close');
        
        if (toggleBtn) toggleBtn.addEventListener('click', () => this.toggleSidebar());
        if (closeBtn) closeBtn.addEventListener('click', () => this.toggleSidebar());

        // Simulate loading
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('app').style.display = 'flex';
        }, 2000);

        this.updateStats();
    },

    toggleSidebar: function() {
        console.log("Toggling sidebar...");
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('open');
            console.log("Sidebar class list:", sidebar.classList);
        } else {
            console.error("Sidebar element not found!");
        }
    },

    loadState: function() {
        try {
            const saved = localStorage.getItem('jslearnState');
            const CURRENT_VERSION = "1.2"; // Increment this to reset progress

            if (saved) {
                const parsed = JSON.parse(saved);
                
                // Check version
                if (parsed.version !== CURRENT_VERSION) {
                    console.log("New version detected! Resetting lesson progress.");
                    // Keep XP, Gems, Hearts, but reset lessons
                    this.state = { 
                        ...this.state, 
                        xp: parsed.xp || 0,
                        gems: parsed.gems || 0,
                        hearts: parsed.hearts || 5,
                        version: CURRENT_VERSION,
                        completedLessons: [] // Reset lessons
                    };
                    this.saveState(); // Save the new version immediately
                } else {
                    this.state = { ...this.state, ...parsed };
                }
            } else {
                // First time load
                this.state.version = CURRENT_VERSION;
            }
        } catch (e) {
            console.error("Error loading state:", e);
            // Reset state on error
            localStorage.removeItem('jslearnState');
            this.state.version = "1.2";
        }
    },

    saveState: function() {
        localStorage.setItem('jslearnState', JSON.stringify(this.state));
        this.updateStats();
    },

    updateStats: function() {
        document.getElementById('streak-count').innerText = this.state.streak;
        document.getElementById('gem-count').innerText = this.state.gems;
        document.getElementById('heart-count').innerText = this.state.hearts;
    },

    navigate: function(screenName) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active'));
        
        document.getElementById(`${screenName}-screen`).classList.add('active');
        
        // Update nav highlight
        const navIndex = ['home', 'guidebook', 'playground', 'videos'].indexOf(screenName);
        if (navIndex >= 0) {
            document.querySelectorAll('.nav-links li')[navIndex].classList.add('active');
        }

        if (screenName === 'guidebook') this.renderGuidebook();
        if (screenName === 'videos') this.renderVideos();
    },

    renderVideos: function() {
        const container = document.getElementById('videos-container');
        container.innerHTML = '';

        const videos = [
            { title: "JavaScript for Beginners", desc: "Learn JS in 1 hour.", img: "https://img.youtube.com/vi/W6NZfCO5SIk/mqdefault.jpg", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
            { title: "Variables (let vs const)", desc: "Understanding variables.", img: "https://img.youtube.com/vi/XgSjoHgy3Rk/mqdefault.jpg", url: "https://www.youtube.com/watch?v=XgSjoHgy3Rk" },
            { title: "JavaScript Loops", desc: "For, While, and For...Of loops.", img: "https://img.youtube.com/vi/s9wW2PpJsmQ/mqdefault.jpg", url: "https://www.youtube.com/watch?v=s9wW2PpJsmQ" },
            { title: "DOM Manipulation", desc: "Change the website with code!", img: "https://img.youtube.com/vi/y17RuWkWDN8/mqdefault.jpg", url: "https://www.youtube.com/watch?v=y17RuWkWDN8" },
            { title: "Async JavaScript", desc: "Promises and Async/Await.", img: "https://img.youtube.com/vi/PoRJizFvM7s/mqdefault.jpg", url: "https://www.youtube.com/watch?v=PoRJizFvM7s" }
        ];

        videos.forEach(v => {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.onclick = () => window.open(v.url, '_blank');
            
            card.innerHTML = `
                <div class="video-thumbnail">
                    <img src="${v.img}" alt="${v.title}">
                    <div class="play-icon">▶</div>
                </div>
                <div class="video-info">
                    <div class="video-title">${v.title}</div>
                    <div class="video-desc">${v.desc}</div>
                </div>
            `;
            container.appendChild(card);
        });
    },

    renderHome: function() {
        const container = document.getElementById('path-container');
        container.innerHTML = '';

        curriculum.forEach((chapter, cIndex) => {
            const chapterDiv = document.createElement('div');
            chapterDiv.className = 'chapter';
            chapterDiv.innerHTML = `<div class="chapter-title">${chapter.title}</div>`;

            chapter.lessons.forEach((lesson, lIndex) => {
                const isLocked = cIndex > 0 && !this.isChapterComplete(cIndex - 1);
                // Simple unlock logic: if previous lesson in this chapter is done, or it's the first lesson of first chapter
                // For simplicity, let's just unlock everything for the user to explore, or strictly follow order.
                // Let's follow strict order.
                
                const globalIndex = this.getGlobalLessonIndex(chapter.id, lesson.id);
                const isCompleted = this.state.completedLessons.includes(lesson.id);
                const isNext = !isCompleted && (globalIndex === 0 || this.state.completedLessons.includes(this.getGlobalLessonId(globalIndex - 1)));
                
                const node = document.createElement('div');
                node.className = `lesson-node ${isCompleted ? 'completed' : ''} ${(!isCompleted && !isNext) ? 'locked' : ''}`;
                node.innerHTML = isCompleted ? '✓' : (lIndex + 1);
                node.title = isCompleted ? "Click to repeat lesson" : (isNext ? "Start lesson" : "Locked");
                
                if (isCompleted || isNext) {
                    node.onclick = () => this.startLesson(chapter.id, lesson.id);
                    node.style.cursor = 'pointer';
                } else {
                    node.style.cursor = 'not-allowed';
                }

                chapterDiv.appendChild(node);
            });

            container.appendChild(chapterDiv);
        });
    },

    getGlobalLessonIndex: function(chapterId, lessonId) {
        let count = 0;
        for (let c of curriculum) {
            for (let l of c.lessons) {
                if (l.id === lessonId) return count;
                count++;
            }
        }
        return -1;
    },

    getGlobalLessonId: function(index) {
        let count = 0;
        for (let c of curriculum) {
            for (let l of c.lessons) {
                if (count === index) return l.id;
                count++;
            }
        }
        return null;
    },

    isChapterComplete: function(chapterIndex) {
        const chapter = curriculum[chapterIndex];
        return chapter.lessons.every(l => this.state.completedLessons.includes(l.id));
    },

    startLesson: function(chapterId, lessonId) {
        const chapter = curriculum.find(c => c.id === chapterId);
        const lesson = chapter.lessons.find(l => l.id === lessonId);
        
        this.state.currentLesson = lesson;
        this.state.currentStepIndex = 0;
        
        this.navigate('lesson');
        this.renderStep();
    },

    quitLesson: function() {
        this.state.currentLesson = null;
        this.navigate('home');
    },

    renderStep: function() {
        const lesson = this.state.currentLesson;
        const step = lesson.steps[this.state.currentStepIndex];
        const container = document.getElementById('lesson-content-area');
        const progressBar = document.getElementById('lesson-progress');
        const checkBtn = document.getElementById('check-btn');
        const feedbackArea = document.getElementById('feedback-area');

        // Reset UI
        container.innerHTML = '';
        feedbackArea.style.display = 'none';
        feedbackArea.className = 'feedback-area';
        checkBtn.style.display = 'block';
        checkBtn.innerText = step.type === 'theory' ? 'Continue' : 'Check';
        checkBtn.onclick = () => this.checkAnswer();

        // Update Progress
        const progress = ((this.state.currentStepIndex) / lesson.steps.length) * 100;
        progressBar.style.width = `${progress}%`;

        // Render Content based on type
        const title = document.createElement('h2');
        title.innerText = lesson.title;
        container.appendChild(title);

        if (step.type === 'theory') {
            const box = document.createElement('div');
            box.className = 'explanation-box';
            // Simple markdown parser for bold and code
            let html = step.content
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/`(.*?)`/g, '<code style="background:#eee;padding:2px 4px;border-radius:4px;color:#d63384">$1</code>')
                .replace(/```(javascript|js)([\s\S]*?)```/g, '<div class="code-block">$2</div>')
                .replace(/\n/g, '<br>');
            
            box.innerHTML = html;
            container.appendChild(box);
        } 
        else if (step.type === 'quiz') {
            const question = document.createElement('div');
            question.className = 'explanation-box';
            question.innerText = step.question;
            container.appendChild(question);

            const grid = document.createElement('div');
            grid.className = 'options-grid';
            
            step.options.forEach((opt, idx) => {
                const card = document.createElement('div');
                card.className = 'option-card';
                card.innerText = opt;
                card.onclick = () => {
                    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                    card.dataset.index = idx;
                };
                grid.appendChild(card);
            });
            container.appendChild(grid);
        }
        else if (step.type === 'code') {
            const instr = document.createElement('div');
            instr.className = 'explanation-box';
            instr.innerText = step.instruction;
            container.appendChild(instr);

            const input = document.createElement('textarea');
            input.className = 'input-area';
            input.id = 'code-input';
            input.value = step.initial || '';
            input.spellcheck = false;
            container.appendChild(input);
        }
    },

    checkAnswer: function() {
        const step = this.state.currentLesson.steps[this.state.currentStepIndex];
        let isCorrect = false;
        let message = "Correct!";

        if (step.type === 'theory') {
            isCorrect = true;
        }
        else if (step.type === 'quiz') {
            const selected = document.querySelector('.option-card.selected');
            if (!selected) return; // Do nothing if nothing selected
            
            const selectedIdx = parseInt(selected.dataset.index);
            if (selectedIdx === step.correct) {
                isCorrect = true;
            } else {
                isCorrect = false;
                message = step.explanation || "That's not quite right.";
            }
        }
        else if (step.type === 'code') {
            const userCode = document.getElementById('code-input').value;
            if (step.checkRegex.test(userCode)) {
                isCorrect = true;
            } else {
                isCorrect = false;
                // Show full solution if available, otherwise partial solution
                const solutionText = step.fullSolution ? step.fullSolution : step.solution;
                const explanation = step.explanation ? `\n\nWhy? ${step.explanation}` : "";
                // Wrap solution in triple backticks to preserve formatting
                message = `Not quite. Here is the correct code:\n\n\`\`\`javascript\n${solutionText}\n\`\`\`${explanation}`;
            }
        }

        this.showFeedback(isCorrect, message);
    },

    showFeedback: function(isCorrect, message) {
        const feedbackArea = document.getElementById('feedback-area');
        const feedbackTitle = document.getElementById('feedback-title');
        const feedbackMsg = document.getElementById('feedback-message');
        const nextBtn = document.getElementById('next-btn');
        const checkBtn = document.getElementById('check-btn');

        checkBtn.style.display = 'none';
        feedbackArea.style.display = 'flex';
        
        if (isCorrect) {
            feedbackArea.className = 'feedback-area correct';
            feedbackTitle.innerText = "Excellent!";
            feedbackMsg.innerText = "";
            // Play sound?
            this.state.xp += 10;
            this.state.gems += 1;
        } else {
            feedbackArea.className = 'feedback-area wrong';
            feedbackTitle.innerText = "Incorrect";
            
            // 1. Escape HTML
            let safeMsg = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            
            // 2. Extract code blocks to prevent processing backticks inside them
            const codeBlocks = [];
            safeMsg = safeMsg.replace(/```(javascript|js)?([\s\S]*?)```/g, (match, lang, code) => {
                codeBlocks.push(code);
                return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
            });

            // 3. Process inline backticks
            safeMsg = safeMsg.replace(/`(.*?)`/g, '<span style="font-weight:bold; font-family:Consolas, monospace;">$1</span>');

            // 4. Restore code blocks with a lighter, cleaner style
            safeMsg = safeMsg.replace(/__CODE_BLOCK_(\d+)__/g, (match, index) => {
                return `<div style="background: rgba(255,255,255,0.9); color: #333; padding: 10px; border-radius: 8px; font-family: Consolas, monospace; margin: 10px 0; white-space: pre-wrap; border: 2px solid rgba(0,0,0,0.1); text-align: left;">${codeBlocks[index]}</div>`;
            });

            // 5. Newlines
            let formatted = safeMsg.replace(/\n/g, '<br>');
            
            feedbackMsg.innerHTML = formatted;
            this.state.hearts = Math.max(0, this.state.hearts - 1);

            if (this.state.hearts === 0) {
                this.state.hearts = 5;
            }
            
            this.updateStats();
        }
        
        // Add pupils for character effect
        document.getElementById('feedback-icon').innerHTML = '<div class="pupils"></div>';
        
        this.updateStats();

        nextBtn.onclick = () => {
            if (isCorrect) {
                this.nextStep();
            } else {
                // If wrong, for now we just let them try again or move on? 
                // Duolingo makes you retry.
                feedbackArea.style.display = 'none';
                checkBtn.style.display = 'block';
            }
        };
    },

    nextStep: function() {
        this.state.currentStepIndex++;
        if (this.state.currentStepIndex >= this.state.currentLesson.steps.length) {
            this.finishLesson();
        } else {
            this.renderStep();
        }
    },

    finishLesson: function() {
        if (!this.state.completedLessons.includes(this.state.currentLesson.id)) {
            this.state.completedLessons.push(this.state.currentLesson.id);
        }
        this.saveState();
        this.quitLesson();
        this.renderHome(); // Refresh locks
    },

    renderGuidebook: function() {
        const container = document.getElementById('guidebook-content');
        container.innerHTML = '';

        // --- 1. Symbol Dictionary ---
        const symbolHeader = document.createElement('h3');
        symbolHeader.innerText = "JavaScript Symbol Dictionary";
        container.appendChild(symbolHeader);

        const symbols = [
            { sym: ";", name: "The End Mark", desc: "Tells the computer 'I am done with this line'. Optional in JS, but good practice." },
            { sym: "=", name: "The Giver", desc: "Gives a value to a box. `let x = 5` puts 5 into box x." },
            { sym: "===", name: "The Strict Asker", desc: "Asks if two things are EXACTLY the same. `if (x === 5)`" },
            { sym: "()", name: "Round Brackets", desc: "Used for functions `console.log()` or grouping math." },
            { sym: "{}", name: "Curly Brackets", desc: "Holds a block of code together (Functions, Ifs, Loops)." },
            { sym: ".", name: "The Dot", desc: "Accesses a property. `console.log` means 'Look inside console for log'." },
            { sym: "[]", name: "Square Brackets", desc: "Used for Arrays (Lists). `[1, 2, 3]`" },
            { sym: "//", name: "Comment", desc: "The computer ignores this line. It is a note for humans." },
            { sym: "=>", name: "Arrow", desc: "Used for Arrow Functions. A shorter way to write functions." }
        ];

        const symbolGrid = document.createElement('div');
        symbolGrid.style.display = 'grid';
        symbolGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
        symbolGrid.style.gap = '15px';
        symbolGrid.style.marginBottom = '40px';

        symbols.forEach(item => {
            const card = document.createElement('div');
            card.className = 'explanation-box';
            card.style.margin = '0'; // Override default margin
            card.innerHTML = `
                <div style="font-size: 24px; color: #f7df1e; font-weight: bold; margin-bottom: 5px; text-shadow: 1px 1px 0 #000;">${item.sym}</div>
                <div style="font-weight: bold; margin-bottom: 5px;">${item.name}</div>
                <div style="font-size: 14px; color: #555;">${item.desc}</div>
            `;
            symbolGrid.appendChild(card);
        });
        container.appendChild(symbolGrid);

        // --- 2. Curriculum Summary ---
        const summaryHeader = document.createElement('h3');
        summaryHeader.innerText = "Lesson Summary & Examples";
        container.appendChild(summaryHeader);
        
        curriculum.forEach(chapter => {
            const chapterHeader = document.createElement('h3');
            chapterHeader.innerText = chapter.title;
            container.appendChild(chapterHeader);

            chapter.lessons.forEach(lesson => {
                const lessonDiv = document.createElement('div');
                lessonDiv.className = 'explanation-box';
                lessonDiv.style.marginBottom = '20px';
                
                let contentHtml = `<h4>${lesson.title}</h4>`;
                
                // Find theory
                const theoryStep = lesson.steps.find(s => s.type === 'theory');
                if (theoryStep) {
                    // Simple markdown parsing
                    let theoryHtml = theoryStep.content
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/`(.*?)`/g, '<code style="background:#eee;padding:2px 4px;border-radius:4px;color:#d63384">$1</code>')
                        .replace(/\n/g, '<br>');
                    contentHtml += `<p>${theoryHtml}</p>`;
                }

                // Find code example
                const codeStep = lesson.steps.find(s => s.type === 'code');
                if (codeStep) {
                    const codeToShow = codeStep.fullSolution || codeStep.solution;
                    if (codeToShow) {
                        contentHtml += `<div class="code-block">${codeToShow}</div>`;
                        if (codeStep.explanation) {
                            contentHtml += `<p><em>${codeStep.explanation}</em></p>`;
                        }
                    }
                }

                lessonDiv.innerHTML = contentHtml;
                container.appendChild(lessonDiv);
            });
        });
    },

    runPlayground: function() {
        const code = document.getElementById('playground-editor').value;
        const consoleOut = document.getElementById('playground-console');
        
        consoleOut.innerText = "> Running...\n";

        // Capture console.log
        const originalLog = console.log;
        let output = "";
        
        console.log = function(...args) {
            // Convert args to string
            const line = args.map(arg => {
                if (typeof arg === 'object') return JSON.stringify(arg);
                return String(arg);
            }).join(' ');
            output += line + "\n";
        };

        try {
            // Execute the code safely
            // We wrap it in a function to allow 'return' if needed, though not strictly necessary for simple scripts
            const runUserCode = new Function(code);
            runUserCode();

            if (output === "") {
                output = "Program finished with no output. (Did you forget console.log?)";
            }

        } catch (e) {
            output += `\n❌ Error: ${e.name}\n${e.message}`;
            // Optional: Add line number if possible (stack trace parsing is complex in browser)
        } finally {
            // Restore console.log
            console.log = originalLog;
            
            setTimeout(() => {
                consoleOut.innerText += output;
            }, 100);
        }
    }
};

// Start
window.app = app; // Ensure global access
window.onload = () => app.init();
