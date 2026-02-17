        // Demo listing data (replace with your API later)
        const listings = [
            {
                title: "Rockbridge, Ohio, US", sub: "Designed by Meredith Higgins & Bryant...", date: "Dec 11–16", price: "₹3,498 night", rating: "4.95",
                img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80"
            },
            {
                title: "Paraty, Brazil", sub: "Designed by Atelier Marko Brajovic", date: "May 23–28", price: "₹753 night", rating: "4.90",
                img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
            },
            {
                title: "Joshua Tree, California, US", sub: "Designed by Ken Kellogg, John Vugrin", date: "May 14–19", price: "₹82,390 night", rating: "New",
                img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
            },
            {
                title: "Rælingen, Norway", sub: "Featured in Veneverport", date: "Sep 25–30", price: "₹2,470 night", rating: "4.95",
                img: "https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=1200&q=80"
            },
            {
                title: "Udaipur, India", sub: "Lake view • Private stay", date: "Mar 10–15", price: "₹4,990 night", rating: "4.88",
                img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
            },
            {
                title: "Bali, Indonesia", sub: "Tropical villa • Infinity pool", date: "Apr 2–7", price: "₹6,120 night", rating: "4.92",
                img: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80"
            },
            {
                title: "Santorini, Greece", sub: "Cliffside suite • Sunset view", date: "Jun 18–23", price: "₹10,800 night", rating: "4.96",
                img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
            },
            {
                title: "Kyoto, Japan", sub: "Traditional home • Garden", date: "May 7–12", price: "₹5,450 night", rating: "4.91",
                img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
            },
        ];

        const grid = document.getElementById("grid");

        function starIcon() {
            return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 17.3 18.2 21l-1.7-7 5.5-4.7-7.2-.6L12 2 9.2 8.7 2 9.3 7.5 14 5.8 21z"/>
        </svg>
      `;
        }

        function heartIcon() {
            return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.1 20.3S4 15.7 4 9.8c0-2.8 2.2-5 5-5 1.7 0 3.2.8 4.1 2.1C14 5.6 15.5 4.8 17.2 4.8c2.8 0 5 2.2 5 5 0 5.9-8.1 10.5-10.1 10.5Z"/>
        </svg>
      `;
        }

        function render() {
            grid.innerHTML = listings.map((x, i) => `
        <article class="card" style="transition-delay:${Math.min(i * 60, 240)}ms">
          <div class="thumb">
            <img src="${x.img}" alt="${x.title}">
            <button class="heart" aria-label="Save">
              ${heartIcon()}
            </button>
          </div>
          <div class="meta">
            <div class="row">
              <div class="title" title="${x.title}">${x.title}</div>
              <div class="rating">${starIcon()} ${x.rating}</div>
            </div>
            <div class="sub">${x.sub}</div>
            <div class="sub">${x.date}</div>
            <div class="price"><b>${x.price.split(" ")[0]}</b> ${x.price.split(" ").slice(1).join(" ")}</div>
          </div>
        </article>
      `).join("");
        }
        render();

        // Category active toggle
        document.getElementById("cats").addEventListener("click", (e) => {
            const item = e.target.closest(".cat");
            if (!item) return;
            document.querySelectorAll(".cat").forEach(c => c.classList.remove("active"));
            item.classList.add("active");
            // tiny animation on click
            item.animate([{ transform: "scale(.98)" }, { transform: "scale(1)" }], { duration: 180, easing: "ease-out" });
        });

        // Scroll reveal animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll(".card").forEach(card => observer.observe(card));

        // Heart "like" animation
        grid.addEventListener("click", (e) => {
            const btn = e.target.closest(".heart");
            if (!btn) return;
            btn.animate(
                [
                    { transform: "scale(1)", offset: 0 },
                    { transform: "scale(1.18)", offset: .4 },
                    { transform: "scale(1)", offset: 1 }
                ],
                { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" }
            );
        });