function solveProblem() {
    const problemInput = document.getElementById("problem-input").value;
    // Simple mock solver for math problems
    if (problemInput.includes("x + 2 = 4")) {
        document.getElementById("solution").innerText = "Solution: x = 2";
    } else {
        document.getElementById("solution").innerText = "Please enter a valid problem.";
    }
}