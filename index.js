        // Add your custom messages into this array
        const messages = [
            "Fantastic Five this September! All the month 8-30 every 8:58a.",
            "Looking for the number 1 home for Leeyamsworld? We got it all, from drawings to cartoons, our new home stays here.",
            "The stupid flies through memory lane, 100 entries?!",
            "Check out our shop at sloplandia-shop.fourthwall.com!",
            "Colgate Fresh Confidence today for a spicy minty mode even in your sink!",
            "Head and shoulders, knees and toes, tested for the bathrooms!",
            "Pamolive! Silky, moist, and the aloe vera! Try today.",
            "Get Closeup to me! Great breath, right?",
            "Visit OneSports.ph today to enjoy all the sports in one place!",
            "Get your Cignal box today and enjoy loads on your TV!",
            "Apple, built for the privacy! Try our optimized systems!",
            "Android, customizable, and unique.",
            "Check out Neocities, the soul of the indie web.",
            "Cloudflare's fast than imagined, owning one of the fastest CDNs!",
            "GitHub is perfect for developers!",
            "Go over the horizon with Samsung!",
            "Nick-Nickelodeon, the world's oldest children channel!",
            "For a century, it's Disney!",
            "Decadent cartoons on Cartoon Network!",
            "Fourthwall's here for some general shops!",
            "The world of late Edd Gould, Eddsworld, around www.eddsworld.co.uk!",
            "Google's video sharing platform, YouTube!",
            "Get Netflix today! And enjoy!",
            "Netlify, woah for Netlify!",
            "Newgrounds, all the Flash!",
            "Albino Blacksheep~",
            "Bring back the old YouTube with KamTape: Share Your World!",
            "L.A.R.P. Attack, LarpTube is in the house!",
            "Bitly, a clean shortening service for many.",
            "TinyURL, for the companies.",
            "The Facebook! By Mark Zuckerburg.",
            "Vimeo, the video camera??-",
            "Dailymotion, just everyday motion??-",
            "Behance, for the art of humans.",
            "Scratch with that cat, meow!",
            "What horrors await at the TrashRoomEnv over at leeyamsworld.netlify.app?"
        ];

        // Function to select and display a random text
        function showRandomText() {
            const randomIndex = Math.floor(Math.random() * messages.length);
            document.getElementById("adco").innerText = messages[randomIndex];
        }

        // Run the function as soon as the page loads
        window.onload = showRandomText;
