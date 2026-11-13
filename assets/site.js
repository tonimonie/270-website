/* 270° — site settings and shared page parts.
 *
 * EDIT HERE: everything in SITE is shown on the website.
 * Leave a value as "" (or a list as []) and the matching line simply does not appear.
 * Details as on our Google Maps listings, November 2026.
 */
window.SITE = {
  name: "270°",
  legalName: "",        // registered company name for the footer

  venues: {
    rooftop: {
      name: "270° Rooftop",
      addressLines: ["Escada, 18th floor", "Nairobi, Kenya"],
      mapsUrl: "https://maps.google.com/?cid=3236094362717074524",
      phone: "+254 702 455665",
      hours: [
        { days: "Monday to Friday", time: "6 am – 10:30 pm" },
        { days: "Saturday and Sunday", time: "7 am – 10:30 pm" }
      ],
      reservationUrl: "https://eatapp.co/reserve/270-rooftop-1db729",
      instagram: "270rooftop",   // without @
      deliveryNote: "We do not deliver within the building. Join us on the rooftop, or call to order for pickup.",
      payment: ""
    },
    cafe: {
      name: "270° Café",
      addressLines: ["Marina Bay Square", "Nairobi, Kenya"],
      mapsUrl: "https://maps.google.com/?cid=17224816752528956261",
      phone: "+254 714 757789",
      hours: [
        { days: "Every day", time: "7 am – 10 pm" }
      ],
      reservationUrl: "",
      orderUrl: "https://www.ubereats.com/ke/store/270-cafe/8_IioCFxWtiHLtuukalkGQ",   // Uber Eats
      orderLabel: "Order on Uber Eats",
      instagram: "270.cafe",
      deliveryNote: "We do not deliver within the building. Come by, or call to order for pickup.",
      payment: "We do not accept cash. Kindly pay by card or M-Pesa."
    }
  },

  /* Event inquiries: where the form on the Events page sends the message.
     Fill in at least one. The guest's own email app or WhatsApp opens with the inquiry filled in. */
  events: {
    email: "",          // e.g. "events@270gastro.com"
    whatsapp: ""        // digits only incl. country code, e.g. "254702455665"
  },

  /* Note for guests who scan the QR code in their apartment (link ends in ?from=stay) */
  stay: {
    title: "Good to have you nearby",
    text: "Please note that we do not deliver within the building. You are very welcome to dine with us or to order for pickup.",
    findUs: ""          // optional sentence on where to find us from the apartment
  }
};

(function () {
  var S = window.SITE, V = S.venues;
  var root = document.documentElement.getAttribute("data-root") || "";

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function tel(p) { return "tel:" + p.replace(/[^\d+]/g, ""); }
  function insta(h) { return "https://www.instagram.com/" + h + "/"; }
  function ext(attrs) { attrs.target = "_blank"; attrs.rel = "noopener"; return attrs; }
  window.el = el;
  window.site = { tel: tel, insta: insta, ext: ext };

  /* Header */
  var header = document.querySelector("[data-header]");
  if (header) {
    var links = [
      el("a", { href: root + "rooftop/", text: "Rooftop" }),
      el("a", { href: root + "cafe/", text: "Café" }),
      el("a", { href: root + "events/", text: "Events" })
    ];
    /* Café pages offer ordering, everything else the rooftop reservation */
    var here = V[document.documentElement.getAttribute("data-venue")];
    if (here && here.orderUrl) {
      links.push(el("a", ext({ href: here.orderUrl, class: "nav-cta", text: "Order" })));
    } else if (V.rooftop.reservationUrl) {
      links.push(el("a", ext({ href: V.rooftop.reservationUrl, class: "nav-cta", text: "Reserve" })));
    }
    header.appendChild(el("a", { href: root || "./", class: "wordmark", "aria-label": "270° home" }, [
      el("img", { src: root + "assets/logo-mark.png?v=213850", alt: "270°", width: "950", height: "540" })
    ]));
    header.appendChild(el("nav", { "aria-label": "Main" }, links));

    /* The header stays at the top; everything that sticks or jumps below it needs its height */
    var setH = function () { document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px"); };
    setH();
    window.addEventListener("resize", setH);
    window.addEventListener("load", setH);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setH);
  }

  /* Footer */
  var footer = document.querySelector("[data-footer]");
  if (footer) {
    var row = el("p", { class: "foot-links" });
    Object.keys(V).forEach(function (k) {
      if (V[k].instagram) row.appendChild(el("a", ext({ href: insta(V[k].instagram), text: "Instagram @" + V[k].instagram })));
    });
    if (row.children.length) footer.appendChild(row);
    footer.appendChild(el("p", { class: "fine", text: "This website uses no cookies and collects no personal data." }));
    footer.appendChild(el("p", { class: "fine", text: "© " + new Date().getFullYear() + " " + (S.legalName || S.name) }));
  }

  /* Guests who scan the QR code in their apartment arrive on a link ending in ?from=stay.
     Only they see the welcome note and the "no delivery within the building" line on the menus;
     the flag is kept while they browse, and everyone else sees the normal site. */
  var arrivedByQr = /[?&]from=stay\b/.test(location.search);
  var stayGuest = arrivedByQr;
  try {
    if (arrivedByQr) sessionStorage.setItem("stay", "1");
    else stayGuest = sessionStorage.getItem("stay") === "1";
  } catch (e) {}

  if (arrivedByQr) {
    var body = [
      el("p", { class: "eyebrow", text: "Welcome" }),
      el("h2", { text: S.stay.title }),
      el("p", { text: S.stay.text })
    ];
    if (S.stay.findUs) body.push(el("p", { text: S.stay.findUs }));
    var phones = Object.keys(V).filter(function (k) { return V[k].phone; });
    if (phones.length) {
      body.push(el("p", { class: "eyebrow call-label", text: "Call to order for pickup" }));
      phones.forEach(function (k) {
        body.push(el("p", { class: "call" }, [
          el("span", { text: V[k].name + "  " }),
          el("a", { href: tel(V[k].phone), text: V[k].phone })
        ]));
      });
    }
    var close = el("button", { type: "button", class: "btn", text: document.documentElement.getAttribute("data-venue") ? "See the menu" : "See the menus" });
    body.push(close);
    var dialog = el("div", { class: "notice", role: "dialog", "aria-modal": "true", "aria-label": "Note for guests" }, [
      el("div", { class: "notice-card" }, body)
    ]);
    function dismiss() { dialog.remove(); document.body.classList.remove("locked"); }
    close.addEventListener("click", dismiss);
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dismiss(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") dismiss(); });
    document.body.appendChild(dialog);
    document.body.classList.add("locked");
    close.focus();
  }

  /* Venue details: fills every <div data-venue-info="rooftop|cafe"> */
  Array.prototype.forEach.call(document.querySelectorAll("[data-venue-info]"), function (box) {
    var key = box.getAttribute("data-venue-info");
    var v = V[key];
    if (!v) return;
    var compact = box.hasAttribute("data-compact");
    if (!compact) box.appendChild(el("h2", { class: "logo-h" }, [
      el("img", { src: root + "assets/logo-" + key + ".png", alt: v.name })
    ]));

    if (v.addressLines.length) {
      var addr = el("p", { class: "fact" });
      addr.appendChild(document.createTextNode(v.addressLines.join(compact ? ", " : "\n")));
      box.appendChild(addr);
    }
    if (v.hours.length) {
      var hrs = el("p", { class: "fact hours" });
      v.hours.forEach(function (h, i) {
        if (i) hrs.appendChild(el("br", {}));
        hrs.appendChild(document.createTextNode(h.days + ": " + h.time));
      });
      box.appendChild(hrs);
    }
    if (v.phone) box.appendChild(el("p", { class: "fact" }, [el("a", { href: tel(v.phone), text: v.phone })]));

    var actions = el("div", { class: "actions" });
    if (v.reservationUrl) actions.appendChild(el("a", ext({ class: "btn solid", href: v.reservationUrl, text: "Reserve a table" })));
    if (v.orderUrl) actions.appendChild(el("a", ext({ class: "btn solid", href: v.orderUrl, text: v.orderLabel || "Order online" })));
    if (v.mapsUrl) actions.appendChild(el("a", ext({ class: "btn", href: v.mapsUrl, text: "Open in Google Maps" })));
    if (v.instagram && !compact) actions.appendChild(el("a", ext({ class: "btn", href: insta(v.instagram), text: "Instagram" })));
    if (actions.children.length) box.appendChild(actions);
    if (compact && stayGuest && v.deliveryNote) box.appendChild(el("p", { class: "side-note", text: v.deliveryNote }));
  });
})();
