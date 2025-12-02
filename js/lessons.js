
// --- 1. Define Core Content (JavaScript) ---

const coreChapters = [
    {
        id: "chapter-1",
        title: "Level 1: The Basics",
        lessons: [
            {
                id: "l1-1",
                title: "Hello World",
                steps: [
                    {
                        type: "theory",
                        content: "Welcome to **JSlearn**! Let's talk to the computer using JavaScript.\n\nTo make the computer write words on the screen, we use `console.log`.\n\n**Key Symbols:**\n* `()` **Round Brackets**: We put our message inside these.\n* `;` **End Mark**: This tells the computer \"I am finished with this line\". (Optional in JS, but good practice!)\n\nInstruction: `console.log(\"Hello\");`"
                    },
                    {
                        type: "quiz",
                        question: "Which command writes to the console?",
                        options: ["System.out.println", "console.log", "print", "write"],
                        correct: 1,
                        explanation: "`console.log` is the standard way to print text in JavaScript."
                    },
                    {
                        type: "code",
                        instruction: "Tell the computer to write \"Hello JS\".",
                        initial: "console.log(______",
                        solution: "console.log(\"Hello JS\");",
                        fullSolution: "console.log(\"Hello JS\");",
                        explanation: "Put the text inside the brackets `(\"...\")`.",
                        checkRegex: /console\.log\s*\(\s*"Hello JS"\s*\)\s*;?/
                    }
                ]
            },
            {
                id: "l1-1b",
                title: "Comments",
                steps: [
                    {
                        type: "theory",
                        content: "Sometimes we want to leave notes for ourselves that the computer ignores.\n\nThese are called **Comments**.\n\n* `//` Single line comment\n* `/* ... */` Multi-line comment"
                    },
                    {
                        type: "code",
                        instruction: "Write a comment saying 'My Code'.",
                        initial: "// ______",
                        solution: "// My Code",
                        fullSolution: "// My Code",
                        explanation: "Start the line with `//`.",
                        checkRegex: /\/\/\s*My Code/
                    }
                ]
            },
            {
                id: "l1-2",
                title: "Boxes (Variables)",
                steps: [
                    {
                        type: "theory",
                        content: "A **Variable** is just a **Box** with a name on it.\n\nIn JavaScript, we use `let` or `const` to make a box.\n\n**Types of Boxes:**\n* `let`: A box you can change later.\n* `const`: A box you CANNOT change (Constant).\n\nExample: `let age = 10;`"
                    },
                    {
                        type: "quiz",
                        question: "Which keyword makes a variable you can change?",
                        options: ["const", "let", "var", "int"],
                        correct: 1, 
                        explanation: "`let` allows you to change the value later. `const` does not."
                    },
                    {
                        type: "code",
                        instruction: "Make a changeable box named `xp` with the number 50 inside.",
                        initial: "______ xp = 50;",
                        solution: "let xp = 50;",
                        fullSolution: "let xp = 50;",
                        explanation: "Use `let` because we might want to change XP later.",
                        checkRegex: /let\s+xp\s*=\s*50\s*;?/
                    }
                ]
            },
            {
                id: "l1-2b",
                title: "Math Time",
                steps: [
                    {
                        type: "theory",
                        content: "Computers are great at math!\n\n* `+` Add\n* `-` Subtract\n* `*` Multiply\n* `/` Divide\n\nExample: `let sum = 10 + 5;`"
                    },
                    {
                        type: "code",
                        instruction: "Calculate 10 times 10.",
                        initial: "let result = 10 ______ 10;",
                        solution: "*",
                        fullSolution: "let result = 10 * 10;",
                        explanation: "Use the `*` symbol for multiplication.",
                        checkRegex: /let\s+result\s*=\s*10\s*\*\s*10\s*;?/
                    }
                ]
            },
            {
                id: "l1-2c",
                title: "True or False",
                steps: [
                    {
                        type: "theory",
                        content: "A **Boolean** is a value that can only be `true` or `false`.\n\nIt's like a light switch: On or Off.\n\n`let isGameRunning = true;`"
                    },
                    {
                        type: "quiz",
                        question: "What are the only two boolean values?",
                        options: ["yes/no", "1/0", "true/false", "on/off"],
                        correct: 2,
                        explanation: "Booleans are strictly `true` or `false`."
                    }
                ]
            },
            {
                id: "l1-3",
                title: "Combining Text",
                steps: [
                    {
                        type: "theory",
                        content: "How do we put a Box inside a sentence?\n\nWe can use the `+` sign, OR even better, **Template Literals** with backticks ` `.\n\n`let score = 10;`\n`console.log(\`Score: ${score}\`);`\n\nThe `${score}` grabs the value from the box!"
                    },
                    {
                        type: "quiz",
                        question: "What symbol do we use for Template Literals?",
                        options: ["'", "\"", "`", "."],
                        correct: 2, 
                        explanation: "We use backticks (`) for template literals."
                    },
                    {
                        type: "code",
                        instruction: "Use backticks to print \"Level: \" and the `level` variable.",
                        initial: "let level = 5;\nconsole.log(______",
                        solution: "`Level: ${level}`);",
                        fullSolution: "let level = 5;\nconsole.log(`Level: ${level}`);",
                        explanation: "Use backticks ` ` and put `${level}` inside.",
                        checkRegex: /console\.log\s*\(\s*`Level:\s*\$\{\s*level\s*\}\s*`\s*\)\s*;?/
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-2",
        title: "Level 2: Logic & Loops",
        lessons: [
            {
                id: "l3-0",
                title: "Making Decisions",
                steps: [
                    {
                        type: "theory",
                        content: "We use `if` to ask questions.\n\n**Comparison:**\n* `===` : Is it EXACTLY equal?\n* `!==` : Is it NOT equal?\n\nExample:\n`if (score === 100) { win(); }`"
                    },
                    {
                        type: "quiz",
                        question: "Which symbol checks if two things are equal?",
                        options: ["=", "==", "===", "equals"],
                        correct: 2,
                        explanation: "`===` (Triple Equals) is the strict equality operator in JS."
                    }
                ]
            },
            {
                id: "l3-0b",
                title: "Else If",
                steps: [
                    {
                        type: "theory",
                        content: "What if the first check fails?\n\nUse `else if` to ask another question, or `else` for everything else.\n\n```javascript\nif (x > 10) {\n  // Big\n} else {\n  // Small\n}\n```"
                    },
                    {
                        type: "code",
                        instruction: "Add an else block.",
                        initial: "if (win) {\n  play();\n} ______ {\n  stop();\n}",
                        solution: "else",
                        fullSolution: "if (win) {\n  play();\n} else {\n  stop();\n}",
                        explanation: "Use `else` to handle the other case.",
                        checkRegex: /else/
                    }
                ]
            },
            {
                id: "l3-1",
                title: "The Loop Toolbox",
                steps: [
                    {
                        type: "theory",
                        content: "Loops repeat actions.\n\n**1. for loop** (Counting)\n`for (let i = 0; i < 5; i++) { ... }`\n\n**2. for...of** (Lists)\n`for (const item of list) { ... }`\n\n**3. while** (Waiting)\n`while (running) { ... }`"
                    },
                    {
                        type: "code",
                        instruction: "Write a loop that counts from 0 to 4.",
                        initial: "for (let i = 0; i < 5; i++) {\n    console.log(______);\n}",
                        solution: "i",
                        fullSolution: "for (let i = 0; i < 5; i++) {\n    console.log(i);\n}",
                        explanation: "We want to print the number `i`.",
                        checkRegex: /console\.log\s*\(\s*i\s*\)\s*;?/
                    }
                ]
            },
            {
                id: "l3-1b",
                title: "While Loops",
                steps: [
                    {
                        type: "theory",
                        content: "A `while` loop keeps running AS LONG AS the condition is true.\n\n**Warning:** If the condition never becomes false, it runs forever (Infinite Loop)!\n\n```javascript\nwhile (energy > 0) {\n  run();\n  energy--;\n}\n```"
                    },
                    {
                        type: "code",
                        instruction: "Create a while loop that runs while `active` is true.",
                        initial: "______ (active) { }",
                        solution: "while",
                        fullSolution: "while (active) { }",
                        explanation: "Use the `while` keyword.",
                        checkRegex: /while\s*\(\s*active\s*\)/
                    }
                ]
            },
            {
                id: "l3-2",
                title: "Looping Lists",
                steps: [
                    {
                        type: "theory",
                        content: "To go through a list (Array), use `for...of`.\n\n`const fruits = ['Apple', 'Banana'];`\n`for (const fruit of fruits) { ... }`"
                    },
                    {
                        type: "code",
                        instruction: "Loop through the `names` list.",
                        initial: "const names = ['A', 'B'];\nfor (const name ______ names) { }",
                        solution: "of",
                        fullSolution: "for (const name of names) { }",
                        explanation: "Use the keyword `of`.",
                        checkRegex: /for\s*\(\s*(const|let)\s+\w+\s+of\s+names\s*\)/
                    }
                ]
            },
            {
                id: "l3-2b",
                title: "Break & Continue",
                steps: [
                    {
                        type: "theory",
                        content: "You can control loops with special words:\n\n* `break`: Stop the loop immediately.\n* `continue`: Skip this turn and go to the next one."
                    },
                    {
                        type: "code",
                        instruction: "Stop the loop if x is 5.",
                        initial: "if (x === 5) { ______; }",
                        solution: "break",
                        fullSolution: "if (x === 5) { break; }",
                        explanation: "Use `break` to stop the loop.",
                        checkRegex: /break\s*;?/
                    }
                ]
            }
        ]
    }
];

// --- 2. Define Procedural Topics (JavaScript) ---

const proceduralTopics = [
    { 
        name: "Functions", 
        keyword: "function", 
        kidExpl: "A Function is a set of instructions we can use again and again.",
        memoryTip: "Like a recipe for a cake.",
        codeTask: "Create a function named `jump`.",
        codeTemplate: "______ jump() { }",
        codeSolution: "function jump() { }",
        codeRegex: /function\s+jump\s*\(\s*\)\s*\{\s*\}/
    },
    { 
        name: "Arrow Functions", 
        keyword: "=>", 
        kidExpl: "A shorter way to write functions. It looks like an arrow!",
        memoryTip: "Point to what you want to do.",
        codeTask: "Make a constant `run` that is an arrow function.",
        codeTemplate: "const run = () ______ { };",
        codeSolution: "const run = () => { };",
        codeRegex: /const\s+run\s*=\s*\(\s*\)\s*=>\s*\{\s*\}\s*;?/
    },
    { 
        name: "Arrays", 
        keyword: "[]", 
        kidExpl: "An Array is a list of things.",
        memoryTip: "Like a shopping list.",
        codeTask: "Make a list of numbers.",
        codeTemplate: "const nums = [1, 2, 3];",
        codeSolution: "const nums = [1, 2, 3];",
        codeRegex: /const\s+nums\s*=\s*\[\s*1\s*,\s*2\s*,\s*3\s*\]\s*;?/
    },
    { 
        name: "Objects", 
        keyword: "{}", 
        kidExpl: "An Object describes a thing with properties (keys and values).",
        memoryTip: "Like a character profile card.",
        codeTask: "Create a player object.",
        codeTemplate: "const player = { name: \"Hero\" };",
        codeSolution: "const player = { name: \"Hero\" };",
        codeRegex: /const\s+player\s*=\s*\{\s*name\s*:\s*"Hero"\s*\}\s*;?/
    },
    { 
        name: "DOM", 
        keyword: "document", 
        kidExpl: "The DOM is the webpage itself. We can change it with code!",
        memoryTip: "Document Object Model.",
        codeTask: "Get an element by ID.",
        codeTemplate: "document.getElementById(\"app\");",
        codeSolution: "document.getElementById(\"app\");",
        codeRegex: /document\.getElementById\s*\(\s*"app"\s*\)/
    },
    { 
        name: "Events", 
        keyword: "addEventListener", 
        kidExpl: "Events are things that happen, like clicks. We 'listen' for them.",
        memoryTip: "Like waiting for a doorbell.",
        codeTask: "Listen for a click.",
        codeTemplate: "btn.______( 'click', () => {} );",
        codeSolution: "btn.addEventListener( 'click', () => {} );",
        codeRegex: /btn\.addEventListener/
    },
    { 
        name: "Promises", 
        keyword: "then", 
        kidExpl: "A Promise is for things that take time, like loading a file.",
        memoryTip: "I promise to tell you when I'm done.",
        codeTask: "Wait for a promise to finish.",
        codeTemplate: "load().______(data => {});",
        codeSolution: "load().then(data => {});",
        codeRegex: /\.then\s*\(/
    },
    { 
        name: "Async/Await", 
        keyword: "async", 
        kidExpl: "A cleaner way to handle Promises. It looks like normal code.",
        memoryTip: "Async means 'not at the same time'.",
        codeTask: "Make a function asynchronous.",
        codeTemplate: "______ function load() {}",
        codeSolution: "async function load() {}",
        codeRegex: /async\s+function\s+load/
    },
    { 
        name: "JSON", 
        keyword: "JSON", 
        kidExpl: "JSON is a way to send data as text.",
        memoryTip: "JavaScript Object Notation.",
        codeTask: "Turn an object into text.",
        codeTemplate: "JSON.stringify(data);",
        codeSolution: "JSON.stringify(data);",
        codeRegex: /JSON\.stringify/
    },
    { 
        name: "Classes", 
        keyword: "class", 
        kidExpl: "A Class is a blueprint for creating objects.",
        memoryTip: "Like a blueprint for a house.",
        codeTask: "Create a class named `Hero`.",
        codeTemplate: "______ Hero { }",
        codeSolution: "class Hero { }",
        codeRegex: /class\s+Hero/
    },
    { 
        name: "Modules", 
        keyword: "import", 
        kidExpl: "Modules let us split code into different files.",
        memoryTip: "Importing parts for a machine.",
        codeTask: "Import `game` from `./game.js`.",
        codeTemplate: "______ { game } from './game.js';",
        codeSolution: "import { game } from './game.js';",
        codeRegex: /import\s+\{\s*game\s*\}\s+from/
    },
    { 
        name: "LocalStorage", 
        keyword: "localStorage", 
        kidExpl: "Save data in the browser so it stays there when you come back.",
        memoryTip: "Like a backpack for your data.",
        codeTask: "Save 'score' as '100'.",
        codeTemplate: "localStorage.setItem('score', '100');",
        codeSolution: "localStorage.setItem('score', '100');",
        codeRegex: /localStorage\.setItem/
    },
    { 
        name: "Error Handling", 
        keyword: "try", 
        kidExpl: "We use `try` and `catch` to handle errors without crashing.",
        memoryTip: "Try to do it, catch if it falls.",
        codeTask: "Start a try block.",
        codeTemplate: "______ { dangerousCode(); } catch(e) {}",
        codeSolution: "try { dangerousCode(); } catch(e) {}",
        codeRegex: /try\s*\{/
    },
    { 
        name: "Math Object", 
        keyword: "Math", 
        kidExpl: "The Math object has tools for numbers, like random numbers.",
        memoryTip: "Math class helper.",
        codeTask: "Get a random number.",
        codeTemplate: "Math.random();",
        codeSolution: "Math.random();",
        codeRegex: /Math\.random/
    },
    {
        name: "Canvas Setup",
        keyword: "getContext",
        kidExpl: "The Canvas is like a piece of paper on the screen where we can draw.",
        memoryTip: "Get the context to start drawing.",
        codeTask: "Get the 2D drawing tool.",
        codeTemplate: "const ctx = canvas.______('2d');",
        codeSolution: "const ctx = canvas.getContext('2d');",
        codeRegex: /\.getContext\s*\(\s*['"]2d['"]\s*\)/
    },
    {
        name: "Drawing Shapes",
        keyword: "fillRect",
        kidExpl: "We can draw rectangles instantly.",
        memoryTip: "Fill a Rectangle.",
        codeTask: "Draw a square at 0,0.",
        codeTemplate: "ctx.______(0, 0, 50, 50);",
        codeSolution: "ctx.fillRect(0, 0, 50, 50);",
        codeRegex: /\.fillRect\s*\(/
    },
    {
        name: "Colors",
        keyword: "fillStyle",
        kidExpl: "We can change the color of our paintbrush.",
        memoryTip: "Style of the Fill.",
        codeTask: "Set color to red.",
        codeTemplate: "ctx.______ = 'red';",
        codeSolution: "ctx.fillStyle = 'red';",
        codeRegex: /\.fillStyle\s*=\s*['"]red['"]/
    },
    {
        name: "Drawing Lines",
        keyword: "lineTo",
        kidExpl: "Connect dots to make lines.",
        memoryTip: "Draw a line TO here.",
        codeTask: "Draw a line to 100, 100.",
        codeTemplate: "ctx.______(100, 100);",
        codeSolution: "ctx.lineTo(100, 100);",
        codeRegex: /\.lineTo\s*\(/
    },
    {
        name: "Game Animation",
        keyword: "requestAnimationFrame",
        kidExpl: "This tells the browser to update the game picture smoothly.",
        memoryTip: "Request a new Frame for Animation.",
        codeTask: "Loop the game.",
        codeTemplate: "______(gameLoop);",
        codeSolution: "requestAnimationFrame(gameLoop);",
        codeRegex: /requestAnimationFrame/
    },
    {
        name: "Keyboard Input",
        keyword: "key",
        kidExpl: "Check which key the player pressed.",
        memoryTip: "The key to the door.",
        codeTask: "Check if Space was pressed.",
        codeTemplate: "if (event.______ === ' ')",
        codeSolution: "if (event.key === ' ')",
        codeRegex: /\.key\s*===/
    },
    {
        name: "Game Images",
        keyword: "drawImage",
        kidExpl: "Draw pictures (sprites) into your game.",
        memoryTip: "Draw the Image.",
        codeTask: "Draw an image at 0,0.",
        codeTemplate: "ctx.______(heroImg, 0, 0);",
        codeSolution: "ctx.drawImage(heroImg, 0, 0);",
        codeRegex: /\.drawImage\s*\(/
    },
    {
        name: "Game Sound",
        keyword: "Audio",
        kidExpl: "Play sounds in your game.",
        memoryTip: "Audio player.",
        codeTask: "Create a new sound.",
        codeTemplate: "const sfx = new ______('jump.mp3');",
        codeSolution: "const sfx = new Audio('jump.mp3');",
        codeRegex: /new\s+Audio\s*\(/
    },
    {
        name: "Collision Logic",
        keyword: "&&",
        kidExpl: "Check if two things are touching (overlapping). We use AND (&&) to check multiple sides.",
        memoryTip: "This AND that must be true.",
        codeTask: "Check if x > 10 AND x < 20.",
        codeTemplate: "if (x > 10 ______ x < 20)",
        codeSolution: "if (x > 10 && x < 20)",
        codeRegex: /&&/
    }
];

// --- 3. Helper: Generate Review Chapter ---

let reviewCounter = 0;

function generateReviewChapter(chapterIndex, previousContent) {
    reviewCounter++;
    const reviewLessons = [];
    
    // Shuffle and pick up to 5 unique topics
    const shuffled = [...previousContent].sort(() => 0.5 - Math.random());
    const topicsToReview = shuffled.slice(0, 5);
    
    topicsToReview.forEach((topic, i) => {
        // Randomly decide if we want a Code Task or a Keyword check (if Code Task exists)
        // 70% chance for code task, 30% chance for simple keyword check
        const useCodeTask = topic.codeTask && Math.random() > 0.3; 

        const instruction = useCodeTask ? topic.codeTask : `Type the special word for ${topic.name}:`;
        const initial = useCodeTask ? (topic.codeTemplate || "") : "";
        const solution = useCodeTask ? (topic.codeSolution || topic.keyword) : topic.keyword;
        
        // Ensure regex is correct for the chosen type
        let checkRegex;
        if (useCodeTask && topic.codeRegex) {
            checkRegex = topic.codeRegex;
        } else {
            // Fallback or Keyword regex
            checkRegex = new RegExp(topic.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        }

        reviewLessons.push({
            id: `rev-${reviewCounter}-${i}`,
            title: `Challenge: ${topic.name}`,
            steps: [
                {
                    type: "theory",
                    content: `**Review Time!**\n\n**${topic.name}**: ${topic.kidExpl}\n\n*Tip: ${topic.memoryTip}*`
                },
                {
                    type: "code",
                    instruction: instruction,
                    initial: initial,
                    solution: solution,
                    checkRegex: checkRegex
                }
            ]
        });
    });

    return {
        id: `chapter-review-${reviewCounter}`,
        title: `Level ${chapterIndex}: Review Checkpoint`, 
        lessons: reviewLessons
    };
}

// --- 4. Build the Curriculum ---

const curriculum = [];
let learnedTopics = [
    { 
        name: "Basics", 
        keyword: "console.log", 
        kidExpl: "We tell the computer to write text.", 
        memoryTip: "Log it to the console.",
        codeTask: "Write code to print \"Hi\".",
        codeTemplate: "console.log(______);",
        codeSolution: "console.log(\"Hi\");",
        codeRegex: /console\.log\s*\(\s*"Hi"\s*\)\s*;?/
    },
    { 
        name: "Variables", 
        keyword: "let", 
        kidExpl: "We store information in boxes.", 
        memoryTip: "Let x be 10.",
        codeTask: "Create a box named `x` with 10 inside.",
        codeTemplate: "let x = ______;",
        codeSolution: "let x = 10;",
        codeRegex: /let\s+x\s*=\s*10\s*;?/
    },
    { 
        name: "Logic", 
        keyword: "if", 
        kidExpl: "We ask questions to make choices.", 
        memoryTip: "if this, then that.",
        codeTask: "Check if `x` is 10.",
        codeTemplate: "if (______) {}",
        codeSolution: "if (x === 10) {}",
        codeRegex: /if\s*\(\s*x\s*===\s*10\s*\)/
    }
]; 

let chapterCounter = 1; // Track actual chapter numbers

// A. Add Core Chapters
coreChapters.forEach(chapter => {
    // Update ID and Title to match counter
    chapter.title = chapter.title.replace(/Level \d+/, `Level ${chapterCounter}`);
    curriculum.push(chapter);
    chapterCounter++;
    
    // Logic for Core Reviews (every 2 chapters or if long)
    if (chapter.lessons.length > 4 || (chapterCounter - 1) % 2 === 0) {
        curriculum.push(generateReviewChapter(chapterCounter, learnedTopics));
    }
});

// --- Helper: Add Random Steps ---
const addRandomSteps = (lessonSteps, topic) => {
    if (!topic || !topic.keyword) return;
    const targetSteps = 25; 
    let safety = 0;
    
    while (lessonSteps.length < targetSteps && safety < 100) {
        safety++;
        const stepType = Math.random() > 0.5 ? 'quiz' : 'code';
        
        if (stepType === 'quiz') {
            const baseOptions = ["let", "if", "function", "const", "=>", "class"];
            const filtered = baseOptions.filter(o => o !== topic.keyword);
            const randomOpts = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
            randomOpts.push(topic.keyword);
            const finalOptions = randomOpts.sort(() => 0.5 - Math.random());

            lessonSteps.push({
                type: "quiz",
                question: `Quick Check: What is the keyword for ${topic.name}?`,
                options: finalOptions,
                correct: finalOptions.indexOf(topic.keyword),
                explanation: `The keyword is \`${topic.keyword}\`.`
            });
        } else {
            if (Math.random() > 0.5) {
                // Escape special regex characters
                const escapedKeyword = topic.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                lessonSteps.push({
                    type: "code",
                    instruction: `Type the special word for ${topic.name} again:`,
                    initial: "",
                    solution: topic.keyword,
                    checkRegex: new RegExp(escapedKeyword, 'i')
                });
            } else {
                lessonSteps.push({
                    type: "code",
                    instruction: `Practice: ${topic.codeTask}`,
                    initial: topic.codeTemplate,
                    solution: topic.codeSolution,
                    checkRegex: topic.codeRegex
                });
            }
        }
    }
};

// B. Add Procedural Chapters
proceduralTopics.forEach((topic, index) => {
    const chapterId = `chapter-proc-${index}`;
    
    // Create a chapter
    const newChapter = {
        id: chapterId,
        title: `Level ${chapterCounter}: ${topic.name}`,
        lessons: []
    };

    // Lesson 1: Introduction
    const lesson1 = {
        id: `l-proc-${index}-1`,
        title: `What is ${topic.name}?`,
        steps: [
            {
                type: "theory",
                content: `**New Topic: ${topic.name}**\n\n${topic.kidExpl}\n\n**Remember:** ${topic.memoryTip}`
            },
            {
                type: "quiz",
                question: `What is true about ${topic.name}?`,
                options: ["It is for cooking", "It is a type of bird", topic.kidExpl.split('.')[0] || "It helps us code", "It deletes files"],
                correct: 2,
                explanation: topic.kidExpl
            }
        ]
    };
    addRandomSteps(lesson1.steps, topic);
    newChapter.lessons.push(lesson1);

    // Lesson 2: The Keyword
    const lesson2 = {
        id: `l-proc-${index}-2`,
        title: `The Special Word: ${topic.keyword}`,
        steps: [
            {
                type: "theory",
                content: `To use **${topic.name}**, we use the special word: \`${topic.keyword}\`.\n\nWhenever you see \`${topic.keyword}\`, you know it is about ${topic.name}.`
            },
            {
                type: "code",
                instruction: `Type the special word for ${topic.name}:`,
                initial: "",
                solution: topic.keyword,
                checkRegex: new RegExp(topic.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
            }
        ]
    };
    addRandomSteps(lesson2.steps, topic);
    newChapter.lessons.push(lesson2);

    // Lesson 3: Practice
    const lesson3 = {
        id: `l-proc-${index}-3`,
        title: `Let's Use ${topic.name}`,
        steps: [
            {
                type: "theory",
                content: `Now let's write some real code with **${topic.name}**!`
            },
            {
                type: "code",
                instruction: topic.codeTask,
                initial: topic.codeTemplate,
                solution: topic.codeSolution,
                checkRegex: topic.codeRegex
            }
        ]
    };
    addRandomSteps(lesson3.steps, topic);
    newChapter.lessons.push(lesson3);

    // Lesson 4: Common Mistakes (New)
    const lesson4 = {
        id: `l-proc-${index}-4`,
        title: `Common Mistakes: ${topic.name}`,
        steps: [
            {
                type: "theory",
                content: `Be careful! Here is a common mistake when using **${topic.name}**.`
            },
            {
                type: "quiz",
                question: `Which one is CORRECT for ${topic.name}?`,
                options: [
                    `Using ${topic.keyword} correctly`,
                    `Misspelling ${topic.keyword}`,
                    `Forgetting brackets`,
                    `Using the wrong symbol`
                ],
                correct: 0,
                explanation: `Always double check your spelling of \`${topic.keyword}\`.`
            }
        ]
    };
    addRandomSteps(lesson4.steps, topic);
    newChapter.lessons.push(lesson4);

    // Lesson 5: Advanced Challenge (New)
    const lesson5 = {
        id: `l-proc-${index}-5`,
        title: `Mastering ${topic.name}`,
        steps: [
            {
                type: "theory",
                content: `You are doing great! Let's try one more challenge to master **${topic.name}**.`
            },
            {
                type: "code",
                instruction: `Prove your skill. ${topic.codeTask}`,
                initial: "", // No help this time!
                solution: topic.codeSolution,
                checkRegex: topic.codeRegex
            }
        ]
    };
    addRandomSteps(lesson5.steps, topic);
    newChapter.lessons.push(lesson5);

    // Add to curriculum
    curriculum.push(newChapter);
    learnedTopics.push(topic);
    
    // Always add review after procedural chapters
    curriculum.push(generateReviewChapter(chapterCounter, learnedTopics));
    
    chapterCounter++;
});

// C. Final Game Chapter
curriculum.push({
    id: "chapter-final",
    title: "Final Level: Making Games",
    lessons: [
        {
            id: "game-1",
            title: "Game Loop",
            steps: [
                {
                    type: "theory",
                    content: "The Game Loop is the heartbeat of your game. It runs over and over again to make things move."
                },
                {
                    type: "code",
                    instruction: "Create a function named update.",
                    initial: "function update() { }",
                    solution: "function update() { }",
                    checkRegex: /function\s+update\s*\(\s*\)\s*\{\s*\}/
                }
            ]
        }
    ]
});

// --- Post-Process: Expand Core Chapters ---
const coreExpansionMap = {
    "l1-1": { name: "Commands", keyword: ";", codeTask: "Write a command.", codeTemplate: "console.log(\"A\");", codeSolution: "console.log(\"A\");", codeRegex: /;/ },
    "l1-1b": { name: "Comments", keyword: "//", codeTask: "Write a comment.", codeTemplate: "// Note", codeSolution: "// Note", codeRegex: /\/\// },
    "l1-2": { name: "Variables", keyword: "let", codeTask: "Make a box.", codeTemplate: "let box = 1;", codeSolution: "let box = 1;", codeRegex: /let/ },
    "l1-2b": { name: "Math", keyword: "+", codeTask: "Add numbers.", codeTemplate: "1 + 1", codeSolution: "1 + 1", codeRegex: /\+/ },
    "l1-2c": { name: "Booleans", keyword: "true", codeTask: "Write true.", codeTemplate: "true", codeSolution: "true", codeRegex: /true/ },
    "l1-3": { name: "Concatenation", keyword: "+", codeTask: "Use + to join text.", codeTemplate: "\"A\" + \"B\"", codeSolution: "\"A\" + \"B\"", codeRegex: /\+/ },
    "l3-0": { name: "Logic", keyword: "if", codeTask: "Write an if statement.", codeTemplate: "if(true){}", codeSolution: "if(true){}", codeRegex: /if/ },
    "l3-0b": { name: "Else", keyword: "else", codeTask: "Write else.", codeTemplate: "else {}", codeSolution: "else {}", codeRegex: /else/ },
    "l3-1": { name: "Loops", keyword: "for", codeTask: "Write a loop.", codeTemplate: "for(let i=0;i<5;i++){}", codeSolution: "for(let i=0;i<5;i++){}", codeRegex: /for/ },
    "l3-1b": { name: "While", keyword: "while", codeTask: "Write a while loop.", codeTemplate: "while(true){}", codeSolution: "while(true){}", codeRegex: /while/ },
    "l3-2": { name: "for-of", keyword: "of", codeTask: "Use 'of' keyword.", codeTemplate: "for(const s of list)", codeSolution: "for(const s of list)", codeRegex: /of/ },
    "l3-2b": { name: "Break", keyword: "break", codeTask: "Stop a loop.", codeTemplate: "break;", codeSolution: "break;", codeRegex: /break/ }
};

curriculum.forEach(chapter => {
    chapter.lessons.forEach(lesson => {
        if (coreExpansionMap[lesson.id]) {
            addRandomSteps(lesson.steps, coreExpansionMap[lesson.id]);
        }
    });
});

// Add Final Review after Game Dev Chapter
learnedTopics.push({ name: "Game Dev", keyword: "update", kidExpl: "The Game Loop makes the game move and react.", memoryTip: "Like the heartbeat of the game." });
curriculum.push(generateReviewChapter(chapterCounter, learnedTopics));

