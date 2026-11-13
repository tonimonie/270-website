/* 270° Café menu.
 *
 * To change the menu, edit this file only. Each dish is one line:
 *   { name: "Dish", desc: "What is in it", price: 720 }
 * "desc", "price" and "note" are optional. A dish with variants uses "options".
 */
window.MENU = {
  updated: "",          // e.g. "November 2026"
  priceNote: "All prices in KES.",
  intro: "",

  sections: [
    {
      title: "Breakfast",
      items: [
        { name: "Avocado Toast", desc: "Homemade sourdough bread, avocado, confit tomatoes, chili oil", price: 720, note: "Add eggs +260 · beef bacon +310 · sausages +310" },
        { name: "Breakfast Burrito", desc: "Omelette, veggies, cheese, tortilla wrap", price: 870 },
        { name: "Shakshuka", desc: "Poached eggs, roast tomato sauce, yoghurt, homemade sourdough", price: 870 },
        { name: "Eggs Your Way", price: 510, note: "Add avocado +260 · beef bacon +310 · sausages +310" },
        { name: "270° Berry Vanilla Waffle", desc: "Freshly baked waffle, vanilla cream, berries", price: 820 },
        { name: "Marzipan French Toast", price: 820 }
      ]
    },
    {
      title: "Smoothie Bowls",
      items: [
        { name: "270° Bowl", desc: "Mango, avocado and yoghurt smoothie, topped with banana, berries and granola", price: 770 },
        { name: "Healthy Morning", desc: "Banana, beetroot and yoghurt smoothie, topped with mango, apple, berries and granola", price: 770 },
        { name: "Sweet Protein", desc: "Banana, peanut butter, chia and yoghurt smoothie, topped with berries, coconut flakes and granola", price: 820 },
        { name: "Fruit Bowl", desc: "Fresh fruits, yoghurt, granola", price: 720 }
      ]
    },
    {
      title: "Sandwiches",
      items: [
        { name: "270° BLT", desc: "Beef bacon, lettuce, cheddar, tomatoes, 270° mayonnaise, sourdough bread", price: 920 },
        { name: "Steak Sandwich", desc: "Beef fillet, chimichurri, rocket salad, 270° mayo, onions, ciabatta", price: 1130 },
        { name: "Halloumi Cheese Sandwich", desc: "Grilled halloumi, tomato jam, green pesto, rocket salad, choice of bread", price: 1020 },
        { name: "Pulled Beef Sandwich", desc: "Pulled beef, chipotle mayo, sourdough bread", price: 1020 },
        { name: "Chicken Katsu Sandwich", desc: "Fried chicken, tomato jam, coleslaw, choice of bread", price: 1130 },
        { name: "Triple Cheese & Bacon Toasty", desc: "Mozzarella, cheddar, gouda, beef bacon, spiced béchamel, brioche", price: 1020 },
        { name: "Build Your Own", desc: "Ask for our build-your-own menu and check availability", price: 1020 }
      ]
    },
    {
      title: "Bites",
      items: [
        { name: "Hummus Bowl", desc: "Homemade hummus, pita bread", price: 720 },
        { name: "270° Mezze", desc: "Beetroot hummus, baba ghanoush, muhammara, tomato jam, pita", price: 920 },
        { name: "Pasta Salad", desc: "Fusilli pasta, pesto, cherry tomatoes, arugula, olives, feta cheese", price: 870 },
        { name: "Buddha Bowl", desc: "Roasted butternut, chickpeas, bulgur wheat, avocado, house pickles, lettuce, muhammara", price: 970 },
        { name: "Chicken Schnitzel Salad", desc: "Chicken schnitzel, avocado, egg, bacon, cherry tomatoes, fresh onions, lettuce", price: 1020 },
        { name: "Beef Bao Buns", desc: "Beef belly adobo, Asian style slaw, steamed buns", price: 1330 },
        { name: "270° Chicken Waffle", desc: "Coconut waffle, chicken schnitzel, mashed avocado, salad", price: 1020 },
        { name: "270° Café Burger", desc: "Beef patty, grilled onions, chipotle mayo, fried egg, brioche bun", price: 1430 },
        {
          name: "Loaded Fries", price: 1130,
          options: [
            { name: "Pulled beef, cheese sauce, caramelized onions, pickled jalapeño, BBQ sauce" },
            { name: "Avocado, red peppers, tomato salsa, crumbled feta, lime" }
          ]
        }
      ]
    },
    {
      title: "Cold Coffee Specials",
      items: [
        { name: "Passion Fruit Cold Brew", desc: "Passion fruit, cold brew coffee, rosemary, iced", price: 510 },
        { name: "Spiced Island Latte", desc: "Coconut milk, masala spices, espresso shot, iced", price: 620 },
        { name: "Mont Blanc", desc: "Orange zest, espresso shot, whipped cream, iced", price: 570 },
        { name: "Iced Berry Matcha", desc: "Mixed berry purée, matcha, milk, whipped cream, iced", price: 620 }
      ]
    }
  ]
};
