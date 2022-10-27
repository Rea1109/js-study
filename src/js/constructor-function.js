function Item(title, price) {
    // this = {};

    this.title = title;
    this.price = price;
    this.showPrice = () => {
        console.log(`price : ${price} `);
    };

    // return this;
}

// new keyword로 생성자 함수 사용
const item1 = new Item('toy', 1200);
const item2 = new Item('apple', 2131);

item1.showPrice();
