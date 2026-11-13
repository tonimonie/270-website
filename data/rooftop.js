/* 270° Rooftop menu.
 *
 * To change the menu, edit this file only. Each dish is one line:
 *   { name: "Dish", desc: "What is in it", price: 1200 }
 * "desc" and "price" are optional. A dish with sizes uses "options".
 * Each section can carry an "intro": one short line shown above it when its tab is open.
 */
window.MENU = {
  updated: "",          // e.g. "November 2026"
  priceNote: "",        // e.g. "All prices in KES, inclusive of taxes."
  intro: "",            // general tip shown with the first section; the sections below have their own

  sections: [
    {
      title: "While You Wait",
      intro: "Grab a few bites to get started.",
      items: [
        { name: "The Umami Sampler", desc: "Beef, chicken & mushroom croquettes with smoked miso mayo (6 pieces)" },
        { name: "The Global Trio", desc: "Flame-kissed beef, chicken & oyster mushroom skewers (6 pieces)" },
        { name: "Crispy Soy-Honey Wings", desc: "Togarashi dust & smoked miso aioli" },
        { name: "Sweet Heat Tempura Calamari", desc: "Crispy squid, tatemada salsa & sweet chilli" },
        { name: "The Savory Spread", desc: "Smooth chicken liver pâté, sweet onion jam & focaccia" },
        { name: "Sweet & Smoky Prawn Toast", desc: "Pineapple-chilli jam, smoked miso mayo & avocado" }
      ]
    },
    {
      title: "Meat",
      intro: "Mains are served à la carte. For two people we recommend picking your mains and adding two or three sides to share.",
      items: [
        { name: "Signature Sirloin Steak", desc: "Charred sirloin, savory mushroom purée, zucchini remoulade, beef jus" },
        { name: "Flame-Grilled Ribeye", desc: "Café de Paris butter, mushroom compote & bone marrow jus" },
        {
          name: "Spring Chicken al Mattone", desc: "Preserved lemon, roasted herbs & natural pan juices",
          options: [{ name: "Full chicken (to share)" }, { name: "Half chicken" }]
        },
        { name: "House Brioche Cheeseburger", desc: "Seared beef patty, melted cheddar, sautéed white onions & house sauce" }
      ]
    },
    {
      title: "Fish & Seafood",
      intro: "Served à la carte. Add two or three sides to share.",
      items: [
        { name: "Coastal Flame Mullet", desc: "Grilled grey mullet infused with lemongrass velouté" },
        { name: "Bright & Charred Rainbow Trout", desc: "Lemon butter sauce, fresh tomato salsa & herb oil" },
        { name: "Sizzling Garlic Prawns", desc: "White wine paprika butter & freshly baked focaccia" },
        { name: "Fire-Kissed Octopus", desc: "Roasted red pepper & tomato sauce, fresh chimichurri & kale crunch" }
      ]
    },
    {
      title: "Sides",
      intro: "Made for sharing: two or three for the table go well with your mains.",
      items: [
        { name: "Flame-Grilled Broccolini", desc: "Rich peanut satay drizzle" },
        { name: "Crispy Pesto Baby Potatoes", desc: "Shaved parmesan & herb butter" },
        { name: "Chilled Mango & Greens Salad", desc: "Shredded carrots, fresh greens & peanut dressing" },
        { name: "Crispy Arrowroot Croquettes", desc: "Golden-fried root vegetable bites" },
        { name: "Orzo Cacio e Pepe", desc: "Toasted black pepper & aged parmesan cheese" }
      ]
    },
    {
      title: "Cocktails",
      intro: "Enjoy a signature cocktail and take in the view.",
      groups: [
        {
          title: "270° Signature Cocktails",
          items: [
            { name: "270° Sunset", desc: "Whiskey, Aperol, pineapple, aquafaba, simple syrup, lime juice" },
            { name: "El Franco Spicy Margarita", desc: "Tequila, mezcal, grapefruit, watermelon, mint, jalapeño, lime" },
            { name: "French Lilac Lavender", desc: "Strawberry gin, beetroot & star anise infusion, blue curaçao, elderflower, prosecco" },
            { name: "270° Whisky Sour", desc: "Whiskey, aquafaba, sweet & sour, Angostura, orange" },
            { name: "Tiki Don Colada", desc: "Tequila, litchi juice, coconut water, blue curaçao, nectar agave syrup" },
            { name: "Paloma Mezcalita", desc: "Mezcal, grapefruit, cordial, lime, simple syrup, sparkling soda" },
            { name: "Berry Botanic Fizz", desc: "Gin, peach schnapps, lime, crushed berries, tonic" },
            { name: "Melanina De La Negra", desc: "Frangelico hazelnut liqueur, vodka, activated charcoal, pineapple & aquafaba, fruits caviar" },
            { name: "270° Hayani Jabba Sprig", desc: "Oak smoked Scotch whisky, fortified jabba juice, clarified juices, hayani dried dates infusion" },
            { name: "270° Special G&T", desc: "Gin, kiwi, cucumber, basil leaves, tonic soda, elderflower" }
          ]
        },
        {
          title: "More Cocktails",
          subtitle: "Classics, always a good idea",
          items: [
            { name: "Negroni", desc: "Gin, Campari, sweet vermouth" },
            { name: "Espresso Martini", desc: "Vodka, Kahlúa, fresh espresso" },
            { name: "Moscow Mule", desc: "Vodka, lime, ginger beer, mint" },
            { name: "Old Fashioned", desc: "Bourbon, Angostura, demerara, orange" }
          ]
        }
      ]
    },
    {
      title: "Wines",
      intro: "A short list of our favorite wines.",
      groups: [
        {
          title: "Rosé & Sparkling",
          items: [
            { name: "Ancora Pinot Grigio Rosé · Italy", desc: "Crisp, dry and light-bodied rosé" },
            { name: "Lieux Perdus Pinot Noir Rosé · France", desc: "Pale, elegant and bone-dry rosé" },
            { name: "Le Dolci Colline Prosecco Spumante Brut · Italy", desc: "Crisp, light and delicately sparkling" }
          ]
        },
        {
          title: "White Wines",
          items: [
            { name: "Sub-Tropika Sauvignon Blanc · New Zealand", desc: "Crisp, zesty and light-bodied white" },
            { name: "Protea Chenin Blanc · South Africa", desc: "Crisp, light-to-medium-bodied and vibrant dry white" }
          ]
        },
        {
          title: "Red Wines",
          items: [
            { name: "Deande Malbec · Argentina", desc: "Medium to full-bodied, smooth and fruit-forward red" },
            { name: "Finca La Escondida Cabernet Sauvignon · Argentina", desc: "Bold, medium-to-full-bodied and structured red" },
            { name: "MAN Family Wines Cabernet Sauvignon · South Africa", desc: "Bold, full-bodied and modern fruit-driven red" },
            { name: "John B Cabernet Sauvignon · South Africa", desc: "Fruit-forward, medium-bodied and easy-drinking red" }
          ]
        }
      ]
    }
  ]
};
