
// --- 1. Define Core Content (Kid-Friendly) ---

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
                        content: "Welcome to **Javalearn**! Let's talk to the computer.\n\nTo make the computer write words on the screen, we give it an instruction.\n\n**Key Symbols:**\n* `()` **Round Brackets**: We put our message inside these.\n* `;` **End Mark**: This tells the computer \"I am finished with this line\". It is like a period `.` in a book.\n\nInstruction: `System.out.println(\"Hello\");`"
                    },
                    {
                        type: "quiz",
                        question: "Which symbol tells the computer the line is finished?",
                        options: [".", ";", "}", ")"],
                        correct: 1,
                        explanation: "The semicolon `;` is the End Mark."
                    },
                    {
                        type: "code",
                        instruction: "Tell the computer to write \"Hello Javalearn\".",
                        initial: "System.out.println(______",
                        solution: "System.out.println(\"Hello Javalearn\");",
                        fullSolution: "System.out.println(\"Hello Javalearn\");",
                        explanation: "Put the text inside the brackets `(\"...\")` and end with `;`.",
                        checkRegex: /System\.out\.println\s*\(\s*"Hello Javalearn"\s*\)\s*;/
                    }
                ]
            },
            {
                id: "l1-2",
                title: "Boxes (Variables)",
                steps: [
                    {
                        type: "theory",
                        content: "A **Variable** is just a **Box** with a name on it.\n\nIn Java, we must tell the computer what kind of box we want.\n\n**Types of Boxes:**\n* `int` (Integer): A box for whole numbers (like 1, 5, 100).\n* `String` (Text): A box for words (like \"Hello\"). Note the capital 'S'!\n* `boolean` (Boolean): A box for Yes/No (true/false).\n\nExample: `int age = 10;`"
                    },
                    {
                        type: "quiz",
                        question: "What type of box holds text?",
                        options: ["int", "boolean", "String", "var"],
                        correct: 2, 
                        explanation: "`String` (with a capital S) is for Text."
                    },
                    {
                        type: "code",
                        instruction: "Make a box named `xp` with the number 50 inside.",
                        initial: "______ xp = 50;",
                        solution: "int xp = 50;",
                        fullSolution: "int xp = 50;",
                        explanation: "Use `int` because 50 is a whole number.",
                        checkRegex: /int\s+xp\s*=\s*50\s*;/
                    }
                ]
            },
            {
                id: "l1-3",
                title: "Combining Text",
                steps: [
                    {
                        type: "theory",
                        content: "How do we put a Box inside a sentence?\n\nWe use the `+` sign to glue things together.\n\n`\"Score: \" + score`\n\nThis joins the text \"Score: \" with whatever is inside the `score` box."
                    },
                    {
                        type: "quiz",
                        question: "Which symbol glues text together?",
                        options: ["-", "*", "+", "/"],
                        correct: 2, 
                        explanation: "The `+` sign adds text together."
                    },
                    {
                        type: "code",
                        instruction: "Write \"Level: \" combined with the `level` box.",
                        initial: "int level = 5;\nSystem.out.println(______",
                        solution: "\"Level: \" + level);",
                        fullSolution: "int level = 5;\nSystem.out.println(\"Level: \" + level);",
                        explanation: "Use `\"Level: \" + level` inside the brackets.",
                        checkRegex: /System\.out\.println\s*\(\s*"Level:\s*"\s*\+\s*level\s*\)\s*;/
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-2",
        title: "Level 2: Loops",
        lessons: [
            {
                id: "l3-0",
                title: "The Loop Toolbox",
                steps: [
                    {
                        type: "theory",
                        content: "Welcome to the Loop Factory! Here are the tools we use to repeat things.\n\nWe will learn these commands:\n\n**1. for-each (The List Reader)**\n- `for (String toy : toyBox) { play(toy); }`\n\n**2. while (The Waiter)**\n- `while (isRaining) { useUmbrella(); }`\n\n**3. for (The Counter)**\n- `for (int i = 0; i < 10; i++) { jump(); }`\n\nSee? We have many ways to repeat actions!"
                    },
                    {
                        type: "quiz",
                        question: "Which loop is best for counting steps?",
                        options: ["for-each", "while", "for", "The Pizza Loop"],
                        correct: 2,
                        explanation: "The 'for' loop is great for counting numbers like 1, 2, 3!"
                    }
                ]
            },
            {
                id: "l3-1",
                title: "What is a Loop?",
                steps: [
                    {
                        type: "theory",
                        content: "Imagine you have to wash 100 dishes.\n\nWould you write instructions like this?\n`washDish(1);`\n`washDish(2);`\n... all the way to 100?\n\nNO! That is boring and slow.\n\nYou would say: **\"For every dish in the pile, wash it.\"**\n\nThat is a **Loop**. It repeats an action for you automatically!"
                    },
                    {
                        type: "quiz",
                        question: "Why do we use loops?",
                        options: ["To make code slower", "To repeat actions easily", "To delete files", "To make colors"],
                        correct: 1,
                        explanation: "Loops let us repeat code without writing it over and over."
                    }
                ]
            },
            {
                id: "l3-2",
                title: "The 'for-each' Loop",
                steps: [
                    {
                        type: "theory",
                        content: "The best loop for lists is the 'for-each' loop.\n\nIt means: \"For Each Item in a List\".\n\n**Structure:**\n`for (String item : list)`\n`{`\n`    // Do something with item`\n`}`\n\nIt grabs one item at a time, puts it in the box `item`, and runs your code."
                    },
                    {
                        type: "code",
                        instruction: "Write the start of a for-each loop.",
                        initial: "for (String item ______ list)",
                        solution: ":",
                        fullSolution: "for (String item : list)",
                        explanation: "We use a colon `:` to separate the item from the list.",
                        checkRegex: /:/
                    }
                ]
            },
            {
                id: "l3-3",
                title: "Looping with Numbers",
                steps: [
                    {
                        type: "theory",
                        content: "Sometimes we just want to count.\n\nWe use the standard `for` loop!\n\n`for (int i = 1; i <= 5; i++)`\n\nThis counts from 1 to 5.\n\nInside the loop, `i` will be 1, then 2, then 3..."
                    },
                    {
                        type: "code",
                        instruction: "Write a loop that counts numbers.",
                        initial: "for (int i = 1; i <= 5; i++) {\n    System.out.println(______);\n}",
                        solution: "i",
                        fullSolution: "for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}",
                        explanation: "We want to print the number `i`.",
                        checkRegex: /System\.out\.println\s*\(\s*i\s*\)\s*;/
                    }
                ]
            },
            {
                id: "l3-4",
                title: "The 'while' Loop",
                steps: [
                    {
                        type: "theory",
                        content: "Another loop is `while`.\n\nIt runs **While** something is true.\n\n`while (energy > 0)`\n`{`\n`    run();`\n`}`\n\nIt keeps running until energy is 0. Be careful! If energy never goes down, it runs FOREVER!"
                    },
                    {
                        type: "code",
                        instruction: "Create a while loop that checks if `running` is true.",
                        initial: "while (______) {\n    go();\n}",
                        solution: "running",
                        fullSolution: "while (running) {\n    go();\n}",
                        explanation: "Just put the condition `running` inside the `()`.",
                        checkRegex: /while\s*\(\s*running\s*\)/
                    }
                ]
            },
            {
                id: "l3-5",
                title: "Loop Practice",
                steps: [
                    {
                        type: "theory",
                        content: "Let's put it all together.\n\nYou have a list of names. You want to say Hello to everyone.\n\nUse a loop to go through `names`."
                    },
                    {
                        type: "code",
                        instruction: "Write a full loop to print each name.",
                        initial: "String[] names = {\"A\", \"B\"};\n\n// Write loop here\n",
                        solution: "for(String name : names) { System.out.println(name); }",
                        fullSolution: "for(String name : names) {\n    System.out.println(name);\n}",
                        explanation: "Use `for (String name : names)` and then `System.out.println(name)` inside `{}`.",
                        checkRegex: /for\s*\(\s*String\s+\w+\s+:\s+names\s*\)\s*\{\s*System\.out\.println\s*\(\s*\w+\s*\)\s*;\s*\}/s
                    }
                ]
            }
        ]
    }
];

// --- 2. Define Procedural Topics (Kid-Friendly) ---

const proceduralTopics = [
    { 
        name: "Arrays", 
        keyword: "[]", 
        kidExpl: "An Array is like a tray with many slots to hold things side-by-side.",
        memoryTip: "Think of an egg carton holding eggs.",
        codeTask: "Create an array of numbers named `nums` with 1, 2, and 3.",
        codeTemplate: "int[] nums = {______};",
        codeSolution: "int[] nums = {1, 2, 3};",
        codeRegex: /int\s*\[\s*\]\s*nums\s*=\s*\{\s*1\s*,\s*2\s*,\s*3\s*\}\s*;/
    },
    { 
        name: "Methods", 
        keyword: "void", 
        kidExpl: "A Method is a shortcut. We give a name to a list of instructions.",
        memoryTip: "Think of a magic spell word that does many things at once.",
        codeTask: "Create a short method named `jump` that prints \"Jump!\".",
        codeTemplate: "void jump() { ______ }",
        codeSolution: "void jump() { System.out.println(\"Jump!\"); }",
        codeRegex: /void\s+jump\s*\(\s*\)\s*\{\s*System\.out\.println\s*\(\s*"Jump!"\s*\)\s*;\s*\}/
    },
    { 
        name: "Classes", 
        keyword: "class", 
        kidExpl: "A Class is a blueprint. It tells the computer how to build something.",
        memoryTip: "Think of a drawing of a robot before you build it.",
        codeTask: "Define a class named `Robot`.",
        codeTemplate: "______ Robot {\n}",
        codeSolution: "class Robot {\n}",
        codeRegex: /class\s+Robot/
    },
    { 
        name: "Inheritance", 
        keyword: "extends", 
        kidExpl: "Inheritance is when a child gets traits from a parent.",
        memoryTip: "Like how a 'Car' is a type of 'Vehicle'.",
        codeTask: "Make `Dog` inherit from `Animal`.",
        codeTemplate: "class Dog ______ Animal {}",
        codeSolution: "class Dog extends Animal {}",
        codeRegex: /class\s+Dog\s+extends\s+Animal/
    },
    { 
        name: "Interfaces", 
        keyword: "interface", 
        kidExpl: "An Interface is a rule book. It says what something MUST do.",
        memoryTip: "Like the rules of a game.",
        codeTask: "Create an interface named `Playable`.",
        codeTemplate: "______ Playable {}",
        codeSolution: "interface Playable {}",
        codeRegex: /interface\s+Playable/
    },
    { 
        name: "Lists", 
        keyword: "ArrayList", 
        kidExpl: "An ArrayList is a bag of items. You can add or take away items anytime.",
        memoryTip: "Like a shopping list.",
        codeTask: "Create a list of text named `names`.",
        codeTemplate: "ArrayList<String> names = new ______<>();",
        codeSolution: "ArrayList<String> names = new ArrayList<>();",
        codeRegex: /ArrayList\s*<\s*String\s*>\s*names\s*=\s*new\s+ArrayList\s*<\s*>\s*\(\s*\)\s*;/
    },
    { 
        name: "Streams", 
        keyword: "stream", 
        kidExpl: "Streams help us find specific things in a big pile.",
        memoryTip: "Like picking only the red candies from a bowl.",
        codeTask: "Use stream to filter items from `data`.",
        codeTemplate: "data.stream().______(x -> x > 5);",
        codeSolution: "data.stream().filter(x -> x > 5);",
        codeRegex: /data\.stream\(\)\.filter/
    },
    { 
        name: "Exceptions", 
        keyword: "try", 
        kidExpl: "Exceptions are safety nets. They catch errors so the program doesn't crash.",
        memoryTip: "Like wearing a helmet.",
        codeTask: "Wrap the code in a try-catch block.",
        codeTemplate: "______ {\n    danger();\n} catch (Exception e) {}",
        codeSolution: "try {\n    danger();\n} catch (Exception e) {}",
        codeRegex: /try\s*\{.*\}\s*catch/s
    },
    { 
        name: "File I/O", 
        keyword: "Files", 
        kidExpl: "This lets us save our work to a file on the computer.",
        memoryTip: "Like saving your game progress.",
        codeTask: "Write \"Hi\" to \"test.txt\".",
        codeTemplate: "Files.writeString(Path.of(\"test.txt\"), \"Hi\");",
        codeSolution: "Files.writeString(Path.of(\"test.txt\"), \"Hi\");",
        codeRegex: /Files\.writeString/
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
        keyword: "System.out", 
        kidExpl: "We tell the computer to write text.", 
        memoryTip: "System.out is the screen.",
        codeTask: "Write code to print \"Hi\".",
        codeTemplate: "System.out.println(______);",
        codeSolution: "System.out.println(\"Hi\");",
        codeRegex: /System\.out\.println\s*\(\s*"Hi"\s*\)\s*;/
    },
    { 
        name: "Variables", 
        keyword: "int", 
        kidExpl: "We store information in boxes.", 
        memoryTip: "int = integer box.",
        codeTask: "Create a box named `x` with 10 inside.",
        codeTemplate: "int x = ______;",
        codeSolution: "int x = 10;",
        codeRegex: /int\s+x\s*=\s*10\s*;/
    },
    { 
        name: "Logic", 
        keyword: "if", 
        kidExpl: "We ask questions to make choices.", 
        memoryTip: "if this, then that.",
        codeTask: "Check if `x` is 10.",
        codeTemplate: "if (______) {}",
        codeSolution: "if (x == 10) {}",
        codeRegex: /if\s*\(\s*x\s*==\s*10\s*\)/
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
            const baseOptions = ["int", "if", "void", "boolean", "String", "class"];
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
                    instruction: "Create a void update method.",
                    initial: "void update() { }",
                    solution: "void update() { }",
                    checkRegex: /void\s+update\s*\(\s*\)\s*\{\s*\}/
                }
            ]
        }
    ]
});

// --- Post-Process: Expand Core Chapters ---
const coreExpansionMap = {
    "l1-1": { name: "Commands", keyword: ";", codeTask: "Write a command.", codeTemplate: "System.out.println(\"A\");", codeSolution: "System.out.println(\"A\");", codeRegex: /;/ },
    "l1-2": { name: "Variables", keyword: "int", codeTask: "Make a box.", codeTemplate: "int box = 1;", codeSolution: "int box = 1;", codeRegex: /int/ },
    "l1-3": { name: "Concatenation", keyword: "+", codeTask: "Use + to join text.", codeTemplate: "\"A\" + \"B\"", codeSolution: "\"A\" + \"B\"", codeRegex: /\+/ },
    "l3-0": { name: "Loops", keyword: "for", codeTask: "Write a loop.", codeTemplate: "for(int i=0;i<5;i++){}", codeSolution: "for(int i=0;i<5;i++){}", codeRegex: /for/ },
    "l3-1": { name: "Loops", keyword: "for", codeTask: "Write a loop.", codeTemplate: "for(int i=0;i<5;i++){}", codeSolution: "for(int i=0;i<5;i++){}", codeRegex: /for/ },
    "l3-2": { name: "for-each", keyword: ":", codeTask: "Use ':' keyword.", codeTemplate: "for(String s : list)", codeSolution: "for(String s : list)", codeRegex: /:/ },
    "l3-3": { name: "Counting", keyword: "for", codeTask: "Count numbers.", codeTemplate: "for(int i=0;i<5;i++)", codeSolution: "for(int i=0;i<5;i++)", codeRegex: /for/ },
    "l3-4": { name: "while", keyword: "while", codeTask: "Write a while loop.", codeTemplate: "while(true){}", codeSolution: "while(true){}", codeRegex: /while/ },
    "l3-5": { name: "Loops", keyword: "for", codeTask: "Loop through names.", codeTemplate: "for(String n : names){}", codeSolution: "for(String n : names){}", codeRegex: /for/ },
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

