const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const opened =
    navLinks.classList.toggle("active");

  menuToggle.setAttribute(
    "aria-expanded",
    String(opened)
  );
});

document.querySelectorAll(
  ".nav-links a"
).forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute(
      "aria-expanded", "false"
    );
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

const menuItems = [
  // IDLY
  ["Idly", "Idly (1 set)", 25],
  ["Idly", "Thattu Idly (1 set)", 50],
  ["Idly", "Podithattu Idly (1 set)", 80],
  ["Idly", "Podi Idly", 80],
  ["Idly", "Sambar Mini Idly", 60],
  ["Idly", "Chilli Idly", 120],
  ["Idly", "Kothu Idly", 100],

  // DOSA
  ["Dosa", "Plain Dosa", 50],
  ["Dosa", "Kal Dosa", 25],
  ["Dosa", "Onion Dosa", 60],
  ["Dosa", "Onion Uthappam", 40],
  ["Dosa", "Ghee Dosa", 80],
  ["Dosa", "Podi Dosa", 80],
  ["Dosa", "Masala Dosa", 80],
  ["Dosa", "Mushroom Dosa", 90],
  ["Dosa", "Cheese Dosa", 100],
  ["Dosa", "Batter Dosa", 100],
  ["Dosa", "Paneer Dosa", 100],
  ["Dosa", "SP Dosa", 60],
  ["Dosa", "Channa Dosa", 80],
  ["Dosa", "Garlic Dosa", 80],

  // CHAPATHI
  ["Chapathi", "N. Chapathi", 25],
  ["Chapathi", "Masala Chapathi", 40],
  ["Chapathi", "Chapathi with Channa", 40],

  // PAROTTA
  ["Parotta", "Parotta", 20],
  ["Parotta", "Veg Kothu Parotta", 100],
  ["Parotta", "Veg Chilli Parotta", 120],

  // RICE / NOODLES
  ["Rice / Noodles", "Veg Rice / Noodles", 100],
  ["Rice / Noodles", "Veg Schezwan Rice / Noodles", 110],
  ["Rice / Noodles", "Mushroom Rice / Noodles", 120],
  ["Rice / Noodles", "Mushroom Schezwan Rice / Noodles", 130],
  ["Rice / Noodles", "Paneer Rice / Noodles", 120],
  ["Rice / Noodles", "Paneer Schezwan Rice / Noodles", 130],
  ["Rice / Noodles", "Gobi Rice / Noodles", 120],
  ["Rice / Noodles", "Gobi Schezwan Rice / Noodles", 130],
  ["Rice / Noodles", "Veg Mixed Rice / Noodles", 130],
  ["Rice / Noodles", "Veg Mixed Schezwan Rice / Noodles", 140],

  // SIDE DISH
  ["Side Dish", "Gobi Manchurian", 110],
  ["Side Dish", "Paneer Manchurian", 120],
  ["Side Dish", "Mushroom Manchurian", 120],
  ["Side Dish", "Mixed Manchurian", 130],
  ["Side Dish", "Baby Corn Manchurian", 110],
  ["Side Dish", "Gobi 65", 110],
  ["Side Dish", "Mushroom 65", 110],
  ["Side Dish", "Paneer 65", 110],
  ["Side Dish", "Mixed 65", 120],
  ["Side Dish", "Baby Corn 65", 110],

  // SOUP
  ["Soup", "Veg Soup", 40],
  ["Soup", "Mushroom Soup", 50],
  ["Soup", "Tomato Soup", 50],
  ["Soup", "Sweet Corn Soup", 50],
  ["Soup", "Pepper Soup", 50],
  ["Soup", "Schezwan Soup", 50],
  ["Soup", "Hot & Sour Soup", 50],
  ["Soup", "Veg Clear Soup", 40],

  // BEVERAGES & SNACKS
  ["Beverages & Snacks", "Tea", 15],
  ["Beverages & Snacks", "Ginger Tea", 20],
  ["Beverages & Snacks", "Lemon Tea", 15],
  ["Beverages & Snacks", "Green Tea", 15],
  ["Beverages & Snacks", "Black Tea", 15],
  ["Beverages & Snacks", "Ragi Malt", 25],
  ["Beverages & Snacks", "Coffee", 20],
  ["Beverages & Snacks", "Filter Coffee", 20],
  ["Beverages & Snacks", "Black Coffee", 20],
  ["Beverages & Snacks", "Bru Coffee", 20],
  ["Beverages & Snacks", "Sukku Coffee", 20],
  ["Beverages & Snacks", "Horlicks", 25],
  ["Beverages & Snacks", "Boost", 25],
  ["Beverages & Snacks", "Medhu Vadai", 15],

  // CHAT ITEMS
  ["Chat Items", "Pani Poori", 30],
  ["Chat Items", "Dhai Poori", 50],
  ["Chat Items", "Sev Poori", 40],
  ["Chat Items", "Masala Poori", 40],
  ["Chat Items", "Dhai Papdi Poori Chaat", 50],
  ["Chat Items", "Bhel Poori", 40],
  ["Chat Items", "Samosa Bhel Poori", 55],
  ["Chat Items", "Dhai Bhel Poori", 45],
  ["Chat Items", "Samosa Chaat", 45],
  ["Chat Items", "N. Samosa", 15],
  ["Chat Items", "Pav Bhaji", 65],
  ["Chat Items", "Mushroom Pav Bhaji", 65],
  ["Chat Items", "Paneer Pav Bhaji", 65],
  ["Chat Items", "Cutlet", 15],
  ["Chat Items", "Cutlet Masala", 45],
  ["Chat Items", "Cheese Pav Bhaji", 80]
];

const categories = [
  "All",
  ...new Set(menuItems.map(item => item[0]))
];

const categoryList =
  document.getElementById("categoryList");

const menuGrid =
  document.getElementById("menuGrid");

const menuSearch =
  document.getElementById("menuSearch");

let activeCategory = "All";

function renderCategories() {
  categoryList.innerHTML = "";

  categories.forEach(category => {
    const button =
      document.createElement("button");

    button.type = "button";
    button.className = "category-btn";
    button.textContent = category;

    if (category === activeCategory) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      activeCategory = category;
      renderCategories();
      renderMenu();
    });

    categoryList.appendChild(button);
  });
}

function renderMenu() {
  menuGrid.innerHTML = "";

  const search =
    menuSearch.value.trim().toLowerCase();

  const filtered = menuItems.filter(item => {
    const matchesCategory =
      activeCategory === "All" ||
      item[0] === activeCategory;

    const matchesSearch =
      item[1].toLowerCase().includes(search) ||
      item[0].toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No matching food items found.";
    menuGrid.appendChild(message);
    return;
  }

  const grouped = {};

  filtered.forEach(item => {
    const category = item[0];

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push(item);
  });

  Object.entries(grouped).forEach(
    ([category, items]) => {
      const card = document.createElement("div");
      card.className = "menu-card";

      const heading = document.createElement("h3");
      heading.textContent = category;
      card.appendChild(heading);

      items.forEach(item => {
        const row = document.createElement("div");
        row.className = "menu-item";

        const name = document.createElement("span");
        name.textContent = item[1];

        const price = document.createElement("strong");
        price.textContent = "₹" + item[2];

        row.appendChild(name);
        row.appendChild(price);
        card.appendChild(row);
      });

      menuGrid.appendChild(card);
    }
  );
}

menuSearch.addEventListener("input", renderMenu);

renderCategories();
renderMenu();