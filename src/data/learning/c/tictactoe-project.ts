import { LearningQuestion } from "@/types/learning";

export const tictactoeProjectQuestion: LearningQuestion = {
  id: "tictactoe-project",
  title: "Mini Project: Console Tic-Tac-Toe Game",
  difficulty: "Advanced",
  topic: "c",
  problem: {
    description: "Write a complete interactive command-line Tic-Tac-Toe game in C for two players, demonstrating 2D arrays, functions, loops, and input validation.",
    input: "Player turns selection inputs (range 1-9)",
    output: "Interactive console board displays and game results"
  },
  story: "Imagine creating your first simple game system. Tic-Tac-Toe is perfect because it requires a grid coordinate board (3x3 array), player turns logic (Player 1 is 'X', Player 2 is 'O'), and check win rules (horizontal, vertical, or diagonal matches). Building this teaches modular code design!",
  simpleExplanation: "We represent the 3x3 game board using a 2D char array. We write functions to draw the board on the console, accept input coordinate turns, update the grid array, check if a player has three matching symbols in a row, and check if the grid is full (a draw).",
  visualThinking: [
    "Board grid ➔ 2D char array of size [3][3]",
    "Draw board ➔ print borders and cell values",
    "Player 1 turn ➔ input spot ➔ write 'X' to coordinate",
    "Check Win condition ➔ check rows, columns, diagonals",
    "Player 2 turn ➔ input spot ➔ write 'O' to coordinate",
    "Repeat until Win or Draw detected!"
  ],
  visualExecution: {
    headers: ["Turn", "Player Symbol", "Input Cell", "Grid Coordinate", "Game Winner?"],
    inputs: ["1", "X", "5 (center)", "grid[1][1]", "No"],
    outputs: ["9", "O", "1 (top-left)", "grid[0][0]", "Yes (or Draw)"]
  },
  code: {
    language: "c",
    snippet: `#include <stdio.h>

char board[3][3] = { {'1','2','3'}, {'4','5','6'}, {'7','8','9'} };
char current_marker;
int current_player;

void drawBoard() {
    printf(" %c | %c | %c \\n", board[0][0], board[0][1], board[0][2]);
    printf("---|---|---\\n");
    printf(" %c | %c | %c \\n", board[1][0], board[1][1], board[1][2]);
    printf("---|---|---\\n");
    printf(" %c | %c | %c \\n", board[2][0], board[2][1], board[2][2]);
}

int checkWin() {
    // Check rows and columns
    for (int i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2]) return 1;
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i]) return 1;
    }
    // Check diagonals
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) return 1;
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) return 1;
    return 0;
}

void placeMarker(int slot) {
    int row = (slot - 1) / 3;
    int col = (slot - 1) % 3;
    board[row][col] = current_marker;
}

int main() {
    current_player = 1;
    current_marker = 'X';
    drawBoard();
    
    // Simulating turn 1
    int choice = 5; // Player chooses slot 5
    placeMarker(choice);
    printf("After Turn 1 (Player 1 placed X at slot 5):\\n");
    drawBoard();
    return 0;
}`
  },
  complexity: {
    label: "Grid cells (n=9)",
    operations: "Win checks",
    visualText: "9 cells ➔ Max 8 win line scans ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time (Board size is static 3x3)",
    spaceComplexity: "O(1) — Constant Space (Uses a static 3x3 array)"
  },
  explainLike10: {
    professional: "Console game cycle utilizing a 3x3 character grid matrix, modulo coordinate mapping, and index scans for win checks.",
    simple: "We make a 3x3 grid out of variables. Two players take turns picking a number 1 to 9. We put their symbol ('X' or 'O') on the grid, and after every turn, we scan rows, columns, and diagonals to see if someone got three in a row.",
    verySimple: "Coding a virtual paper game board. Players type numbers, the computer writes 'X' or 'O', and checks if there's a winner."
  },
  commonMistakes: [
    {
      wrongCode: `void place(int slot) {
    board[slot][slot] = current_marker;
} // Incorrect coordinate mapping!`,
      whyItFails: "A player types slot 4. Setting board[4][4] causes a buffer overflow (out of bounds) because the indices only range from 0 to 2. You must map 1-9 to row and column indices correctly!",
      correctCode: `int row = (slot - 1) / 3;
int col = (slot - 1) % 3;
board[row][col] = current_marker;`,
      remedy: "Use integer division (slot - 1) / 3 to calculate the row index, and modulo (slot - 1) % 3 for the column index."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "char board[3][3] = ...",
      description: "Initialize the 3x3 game board grid containing numbers '1' to '9'.",
      variables: { current_player: 1, current_marker: "'X'", choice: 5 },
      callStack: ["main()"]
    },
    {
      codeLine: "placeMarker(choice);",
      description: "Call placeMarker with slot 5 to map and write the symbol.",
      variables: { current_player: 1, current_marker: "'X'", choice: 5 },
      callStack: ["main()", "placeMarker()"]
    },
    {
      codeLine: "int row = (slot - 1) / 3; (row = 1)",
      description: "Calculate row index: (5 - 1) / 3 = 1.",
      variables: { slot: 5, row: 1, col: "None" },
      callStack: ["main()", "placeMarker()"]
    },
    {
      codeLine: "int col = (slot - 1) % 3; (col = 1)",
      description: "Calculate column index: (5 - 1) % 3 = 1.",
      variables: { slot: 5, row: 1, col: 1 },
      callStack: ["main()", "placeMarker()"]
    },
    {
      codeLine: "board[row][col] = current_marker;",
      description: "Write marker 'X' to board[1][1] (the center slot). Board center slot '5' is replaced by 'X'.",
      variables: { slot: 5, row: 1, col: 1 },
      callStack: ["main()", "placeMarker()"]
    },
    {
      codeLine: "drawBoard();",
      description: "Draw the updated board on the console displaying 'X' in the center.",
      variables: { current_player: 1, current_marker: "'X'" },
      callStack: ["main()"]
    }
  ],
  realWorldApps: [
    "Game development: Creating simple game grid loops and state machine cycles.",
    "Matrix operations: Working with coordinates inside 2D pixels or database spreadsheets.",
    "Input validation: Ensuring secure inputs inside user forms."
  ],
  interviewTips: [
    "Mapping logic: Be ready to explain the mathematical formula used to map a 1D grid index (1-9) to 2D indices (row/col).",
    "Win condition checks: Explain how checking Win conditions is O(1) for Tic-Tac-Toe but scales to O(N) or O(1) in N-by-N grids.",
    "Avoid global variables: In a production setting, pass the board array as a parameter to functions instead of using global board arrays."
  ],
  practiceVariations: [
    "Implement an AI player that makes random valid moves on its turn.",
    "Scale the board from a 3x3 grid to an N-by-N grid and adapt the win checks.",
    "Add a game score saving function that logs historical matches to a text file."
  ]
};
