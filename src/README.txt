Hello Luca,

I worked on the assignment today and I wanted to highlight the following points for consideration during evaluation.

To start with the overview, I have created the files and folder structure exhaustively considering Trello as is currently. I have used Typescript strictly in all files.

PROJECT GITHUB LINK
https://github.com/RittickDatta/Trello-Clone

PROJECT PLAN
For folder structure, I have the following:
    1. containers - class based components which hold state
    2. components - functional components which rely on props, mostly presentation
    3. common - this folder contains data service file, UI folder with a common button component, interfaces, enums, page not found and more.
    4. localStorage is used to persist data

PROJECT DATA 
    1. Array of boards
    2. Each board would have 
        a. lists
        b. members (future scope)
    3. Each list would have 
        a. cards
            I. Each card would have properties (only title and description were considered due to time constraint)
            II. Checklist and Comments (future scope)
            III. Search bar (future scope)

HOW TO RUN THE PROJECT
Simple, clone the repo, run npm install and visit localhost:3000

NOTE: Since localStorage is used, refresh is required post an action like: Create Board, Add List, Add Card, Move etc. This is a drawback, I understand. With state management like Redux, this issue would not arise (mapStateToProps and mapDispatchToProps to the rescue).

WHAT I COULD COMPLETE
1. Creating a board 
2. Adding lists to the board 
3. Adding cards to the list

WHAT I CAN COMPLETE WITHOUT A TIME CAP
1. Move card [This has a bug, I am aware, I was in process of debugging]
2. Edit card (partially implemented, I had initailly set up a very detailed Edit Card and later had to cut down due to time constraint. Relevant files are: CardDetails, CardMain, CardAside)
3. CSS (CSS files were created but not edited due to time constraint)
4. TEST CASES: (Files were created but not edited due to time constraint)
    (A) In dataService.ts file, loadData & saveData can be tested for say inital state, a state where data exists and checking data post save.
    (B) Containers can be tested for inital state, handler functions can be tested for expected results.
    (C) Components can be tested for receipt of expected props.

FUTURE SCOPE
1. CSS
2. Card details and child components
3. Search bar
4. Checklist
5. Comments
6. Add members
7. UI/UX enhancements

I would be happy to answer any questions regarding my work. It was a very interesting challenge and I intend to work on the future scope and pending points when time allows.

I eagerly look forward to an opportunity to discuss the project and share my thought process in further detail. I thank you for your time and consideration.

Stay safe!

Regards,
-Rittick

