//negative expense
function validateExpense(amount) {
  if (amount <= 0) {
    throw new Error("Expense must be a positive number.");
  }
  return amount;
}

//invalid category
const validCategories = ["Food", "Transport", "Bills", "Entertainment"];

function validateCategory(category) {
  if (!validCategories.includes(category)) {
    throw new Error(`Invalid category: ${category}`);
  }
  return category;
}

//empty input
function validateInput(input) {
  if (!input || input.trim() === "") {
    throw new Error("Input cannot be empty.");
  }
  return input;
}

function addExpense(amount, category, description) {
  try {
    const validAmount = validateExpense(amount);
    const validCategory = validateCategory(category);
    const validDescription = validateInput(description);

    console.log("Expense added:", {
      amount: validAmount,
      category: validCategory,
      description: validDescription
    });
  } catch (err) {
    console.error("Validation failed:", err.message);
  }
}

// Example usage
addExpense(200, "Food", "Lunch with friends"); // ✅ Works
addExpense(-50, "Food", "Snacks");             // ❌ Negative expense
addExpense(100, "Shopping", "New shoes");      // ❌ Invalid category
addExpense(300, "Bills", "   ");               // ❌ Empty description