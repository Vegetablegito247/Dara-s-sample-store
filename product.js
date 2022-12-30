function myCountDown () {
    let time = document.querySelector('.time');
    let h4 = document.createElement('h4');
    time.appendChild(h4);

    setInterval(() => {
        let currentDay = new Date();
        let countDownDay = new Date('December 25 2022');
        let diff = countDownDay - currentDay;
        // // days left
        // let countDay = Math.floor(diff / 1000 / 24 / 60 / 60);
        // hours left 
        let countHour = Math.floor(diff / 1000 / 60 / 60) % 24;
        // minutes left 
        let countMinute = Math.floor(diff / 1000 / 60) % 60;
        //  seconds left
        let countSecond = Math.floor(diff / 1000) % 60;
        h4.innerHTML = `Time Left:  ${countHour}hrs ${countMinute}mins
        ${countSecond}secs`;
    }, 1000);
};

myCountDown();

let elec = document.querySelector('.electronic')
let prdctv = document.querySelector('.products-view');
let prot1 = document.querySelector('.prot1');
prot1.addEventListener('click', () => {
    elec.style.display ='none';
    prdctv.innerHTML = `<div class="choice">
    <div class="pItem">
        <img src="./gowns/burberry-whine.jpg" alt="" class="shoe">
    </div>

    <div class="pCompany">
        <div class="pCHead">
            <h4>Burberry dress</h4>
            <h1>Burberry whine gown</h1>
        </div>

        <div class="pCDetails">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat odit velit cum possimus molestias
            maiores nam eos culpa! Est, ea ipsam! Architecto cum unde velit repudiandae ex tempore. Eum.
            </p>
        </div>

        <div class="pCPrice">
            <h3>$1,114.00</h3>
            <h5>80%</h5>
        </div>

        <div class="canceled">
            <h5>$1,392.00</h5>
        </div>

        <div class="btns">
            <div class="addCart">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Add to cart</p>
            </div>
            <div class="buyNow">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Buy now</p>
            </div>
        </div>
    </div>
</div>`
    prdctv.style.display ='block';
});

let prot2 = document.querySelector('.prot2');
prot2.addEventListener('click', () => {
    elec.style.display ='none';
    prdctv.innerHTML = `<div class="choice">
    <div class="pItem">
        <img src="./gowns/calvin-klein-cape-lace.jpg" alt="" class="shoe">
    </div>

    <div class="pCompany">
        <div class="pCHead">
            <h4>Calvin klein</h4>
            <h1>Calvin klein cape lace dress</h1>
        </div>

        <div class="pCDetails">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat odit velit cum possimus molestias
            maiores nam eos culpa! Est, ea ipsam! Architecto cum unde velit repudiandae ex tempore. Eum.
            </p>
        </div>

        <div class="pCPrice">
            <h3>$264.00</h3>
            <h5>80%</h5>
        </div>

        <div class="canceled">
            <h5>$1,392.00</h5>
        </div>

        <div class="btns">
            <div class="addCart">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Add to cart</p>
            </div>
            <div class="buyNow">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Buy now</p>
            </div>
        </div>
    </div>
</div>`
    prdctv.style.display ='block';
});

let prot3 = document.querySelector('.prot3');
prot3.addEventListener('click', () => {
    elec.style.display ='none';
    prdctv.innerHTML = `<div class="choice">
    <div class="pItem">
        <img src="./gowns/burberry-black.jpg" alt="" class="shoe">
    </div>

    <div class="pCompany">
        <div class="pCHead">
            <h4>Burberry</h4>
            <h1>Burberry black dress</h1>
        </div>

        <div class="pCDetails">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat odit velit cum possimus molestias
            maiores nam eos culpa! Est, ea ipsam! Architecto cum unde velit repudiandae ex tempore. Eum.
            </p>
        </div>

        <div class="pCPrice">
            <h3>$64.00</h3>
            <h5>80%</h5>
        </div>

        <div class="canceled">
            <h5>$1,392.00</h5>
        </div>

        <div class="btns">
            <div class="addCart">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Add to cart</p>
            </div>
            <div class="buyNow">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Buy now</p>
            </div>
        </div>
    </div>
</div>`
    prdctv.style.display ='block';
});