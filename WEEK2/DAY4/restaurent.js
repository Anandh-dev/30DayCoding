//promises
const orderFood = new Promise((resolve, reject) => {
  const foodReady = Math.random() > 0.5; // 50% chance
  setTimeout(() => {
    foodReady ? resolve("🍕 Your pizza is ready!") : reject("🔥 Oven broke!");
  }, 1000);
});

//async-await
async function dine() {
  try {
    const meal = await orderFood;
    console.log(meal);
  } catch (error) {
    console.error("Kitchen error:", error);
  }
}
dine();

//error catching
async function safeOrder() {
  try {
    const dessert = await orderFood;
    console.log(dessert);
  } catch (err) {
    console.log("Sorry, we’ll give you a free drink instead 🍹");
  }
}
safeOrder();

//db failures
async function getUserData(id) {
  try {
    return await db.query("SELECT * FROM users WHERE id = ?", [id]);
  } catch (err) {
    console.error("DB Error:", err.message);
    return { id, name: "Guest User" }; // fallback
  }
}

getUserData(2);