const main = async () => {
    try {
        
        const response = await fetch(`https://api.magicthegathering.io/v1/cards`);
        const data = await response.json();
        console.log(data.cards);

        const cardName = document.getElementsByClassName("card-name");
        const cardHolder = document.getElementsByClassName("card-holder");
        const cardIMG = document.getElementsByClassName("card-img");
        for (let i = 0; i < cardHolder.length; i++) {
            const random = Math.floor(Math.random() * 100);

            if (data.cards[random].imageUrl && data.cards[random].name) {
                cardIMG[i].src = data.cards[random].imageUrl;
                cardName[i].textContent = data.cards[random].name;

                if (data.cards[random].rarity === "Uncommon") {
                    cardHolder[i].style.boxShadow = "0px 2px 6px 5px rgb(18, 80, 179)";
                } else if (data.cards[random].rarity === "Common") {
                    cardHolder[i].style.boxShadow = "0px 2px 6px 5px rgb(255, 255, 255)";
                } else if (data.cards[random].rarity === "Rare") {
                    cardHolder[i].style.boxShadow = "0px 2px 6px 5px rgb(174, 186, 85)";
                } else {
                    cardHolder[i].style.boxShadow = "0px 2px 6px 5px rgb(151, 0, 0)";
                };
            } else {
                i--;
            };
        };
    } catch (error) {
        console.error(error);
    }
};
main();