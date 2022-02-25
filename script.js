//HW-1
document.write("<span style='color: #8A2BE2; font-size:32px;'><b>Задание №1:</b></span>");
document.write("<br>");
document.write("<br>");
class Restaurant {
    constructor(name, cuisineType, served=0) {
        this.name = name;
        this.cuisineType = cuisineType;
        this.served = served;
    }
    info() {
        return `Название кухни: ${this.name}.
        <br> Вид кухни: ${this.cuisineType}.`;
    }
    isOpen(){
        let currentHour = new Date().getHours();
        if (currentHour>9 && currentHour<22) {
            return `${this.name} is open`;
        } else {
            return `${this.name} is closed`;
        }
    }
    serve() {
        return (this.served+=1);
    }
    setServed() {
        return (Math.floor(result));
      }
      showTotalServed() {
        return Math.floor(result + (this.serve() - 1));
      }
}

const ramen = new Restaurant("Ramen", "Корейская");
const result = Number(prompt("Введите количество посетителей"));
document.write(ramen.info());
document.write("<br>");
document.write(ramen.isOpen());
document.write("<br>");
document.write("Количество инд. посетителей:" + " " + ramen.serve());
document.write("<br>");
document.write("Количество инд. посетителей:" + " " + ramen.serve());
document.write("<br>");
document.write("Количество инд. посетителей:" + " " + ramen.serve());
document.write("<br>");
document.write("Количество коллек. посетителей:" + " " + ramen.setServed());
document.write("<br><br>");
document.write("<b style='color:red; font-size:20px;'>Общее число посетителей:</b>" + " " + ramen.showTotalServed());
document.write("<br><br>");


//HW-2
document.write("<br>");
document.write("<span style='color: #8A2BE8; font-size:32px;'><b>Задание №2:</b></span>");
document.write("<br>");

class Cars {
    constructor (model, yearIssue, power, color){
        this.model=model;
        this.yearIssue=yearIssue;
        this.power=power;
        this.color=color;
    }
    info() {
        return `Марка автомобиля:  ${this.model}; <br>
        Год выпуска: ${this.yearIssue}; <br>
        Мощность двигателя: ${this.power}; <br>
        Цвет машины: ${this.color}.`
    }
}
class ElectroCars extends Cars {
    constructor (model, yearIssue, power, color, accumulator) {
        super(model, yearIssue, power, color);
        this.accumulator=accumulator;
    }
    infoAcc(){
        return super.info() + `<br>Объем аккумулятора: ${this.accumulator}`
    }
    promote(){
        return `<span style="color: blue; font-size:20px; font-weight: bold;">Перед Вами абсолютно новый ${this.model}! Яркий и динамичный внедорожник при любой погоде, в любом месте, на любой скорости!</span>`
    }
}

const auto = new Cars("Toyota Land Cruiser", "2017", "367л.с.", "черная");
document.write(auto.info());
document.write("<br><br><br>");
const electro = new ElectroCars("TESLA Model S", "2022", "1540 л.с.", "белая", "95кВт.ч.")
document.write(electro.infoAcc());
document.write("<br><br>");
document.write(electro.promote());

