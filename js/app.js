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
            const saved = localStorage.getItem('javalearnState');
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
            localStorage.removeItem('javalearnState');
            this.state.version = "1.2";
        }
    },

    saveState: function() {
        localStorage.setItem('javalearnState', JSON.stringify(this.state));
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
            { title: "Java for Beginners", desc: "Learn the basics in 10 minutes.", img: "https://img.youtube.com/vi/eIrMbAQSU34/mqdefault.jpg", url: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
            { title: "Variables Explained", desc: "What are int, String, and boolean?", img: "https://img.youtube.com/vi/GTThM51d02o/mqdefault.jpg", url: "https://www.youtube.com/watch?v=GTThM51d02o" },
            { title: "Loops in Java", desc: "How to repeat code easily.", img: "https://img.youtube.com/vi/6d657r5aV5I/mqdefault.jpg", url: "https://www.youtube.com/watch?v=6d657r5aV5I" },
            { title: "Object Oriented Programming", desc: "Classes and Objects made simple.", img: "https://img.youtube.com/vi/P2W049ww5xk/mqdefault.jpg", url: "https://www.youtube.com/watch?v=P2W049ww5xk" },
            { title: "Java Game Development", desc: "Make your first game!", img: "https://img.youtube.com/vi/1gir2R7G9ws/mqdefault.jpg", url: "https://www.youtube.com/watch?v=1gir2R7G9ws" }
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
                .replace(/```java([\s\S]*?)```/g, '<div class="code-block">$1</div>')
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
                message = `Not quite. Here is the correct code:\n\n${solutionText}${explanation}`;
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
            
            // Format message to hide backticks and show styled code
            let formatted = message
                .replace(/</g, "&lt;").replace(/>/g, "&gt;")
                .replace(/`(.*?)`/g, '<span style="font-weight:bold; font-family:Consolas, monospace;">$1</span>')
                .replace(/\n/g, '<br>');
            
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
        symbolHeader.innerText = "Java Symbol Dictionary";
        container.appendChild(symbolHeader);

        const symbols = [
            { sym: ";", name: "The End Mark", desc: "Like a period in a sentence. It tells the computer 'I am done with this line'." },
            { sym: "=", name: "The Giver", desc: "Gives a value to a box. `int x = 5` puts 5 into box x." },
            { sym: "==", name: "The Asker", desc: "Asks a question. `if (x == 5)` asks 'Is x equal to 5?'" },
            { sym: "()", name: "Round Brackets", desc: "Used for instructions (Methods) or grouping math." },
            { sym: "{}", name: "Curly Brackets", desc: "Holds a block of code together. Like a container for actions." },
            { sym: ".", name: "The Dot", desc: "Opens a box to see what's inside. `System.out.println` means 'Look inside System, then out, then find println'." },
            { sym: '""', name: "Double Quotes", desc: "Wraps text so the computer knows it is words, not code." },
            { sym: "[]", name: "Square Brackets", desc: "Used for Arrays (Lists). It's like a tray with slots." },
            { sym: "//", name: "Comment", desc: "The computer ignores this line. It is a note for humans." }
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
                <div style="font-size: 24px; color: #58cc02; font-weight: bold; margin-bottom: 5px;">${item.sym}</div>
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

        // Very basic simulation
        try {
            const lines = code.split('\n');
            let output = "";
            
            lines.forEach(line => {
                if (line.trim().startsWith('System.out.println')) {
                    const match = line.match(/System\.out\.println\s*\(\s*"(.*?)"\s*\)/);
                    if (match) {
                        output += match[1] + "\n";
                    } else {
                        // Try to handle variables? Too complex for regex only.
                        // Just echo raw if it looks like a print
                        output += "[Output] " + line + "\n";
                    }
                }
            });

            if (output === "") {
                output = "Program finished with no output (or syntax not supported in playground simulation).";
            }

            setTimeout(() => {
                consoleOut.innerText += output;
            }, 500);

        } catch (e) {
            consoleOut.innerText += "Error: " + e.message;
        }
    }
};

// Start
window.app = app; // Ensure global access
window.onload = () => app.init();
