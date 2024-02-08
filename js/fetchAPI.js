const main = async () => {
    try {
        const response = await fetch(`https://api.magicthegathering.io/v1/cards`);
        const data = await response.json();
        console.log(data.cards[1]);

        const cardName = document.getElementsByClassName("card-name");
        const cardHolder = document.getElementsByClassName("card-holder");
        const cardIMG = document.getElementsByClassName("card-img");
        for (let i = 0; i < cardHolder.length; i++) {
            cardIMG[i].src = data.cards[i].imageUrl;
            cardName[i].textContent = data.cards[i].name;
        };
    } catch (error) {
        console.error(error);
    }
};
main();