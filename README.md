# 270° website

Static website for 270° Rooftop and 270° Café: home page plus one menu page per venue. No build step, no database, no cookies.

## Where things are

| What | File |
|---|---|
| Phone, address, hours, reservation link, Instagram | `assets/site.js` (top of the file) |
| Rooftop menu | `data/rooftop.js` |
| Café menu | `data/cafe.js` |
| Home page text | `index.html` |
| Look (colours, type, spacing) | `assets/style.css` |

Anything left empty in `assets/site.js` does not appear on the site.

## Change a dish

Open the menu file and edit the line. One dish is one line:

```js
{ name: "Shakshuka", desc: "Poached eggs, roast tomato sauce, yoghurt", price: 870 },
```

`desc` and `price` are optional. Save, commit, push: the live site updates within a minute.

With Claude: drop the new menu PDF into the chat and say "update data/cafe.js from this menu".

## Links for QR codes

| Use | Link |
|---|---|
| Public café menu | `/cafe/` |
| Public rooftop menu | `/rooftop/` |
| QR code in the apartments, both menus | `/?from=stay` |
| QR code in the apartments, café only | `/cafe/?from=stay` |
| QR code in the apartments, rooftop only | `/rooftop/?from=stay` |

A link ending in `?from=stay` first shows a short welcome note (no delivery within the building, pickup or dine-in, phone numbers) and then keeps a "no delivery within the building" line on the menu pages for that visit. Visitors who come any other way see the normal menus without it. The wording is in `assets/site.js` (`stay` and `deliveryNote`).

## Look at it on your own computer

```sh
cd website
python3 -m http.server 4270
```

Then open http://localhost:4270
