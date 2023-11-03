<template>
  <div class="test">
    <div class="rule">
      <div class="rule__content" v-for="rule in rules" :key="rule.id">
        <div :class="'rule__color color-' + rule.id"></div>
        <div class="rule__text">{{ rule.text }}</div>
      </div>
    </div>

    <div class="wheel">
      <div class="wheel__inner" :style="{ transform: wheelRotation }">
        <div class="wheel__sec" v-for="i in 6" :key="i"></div>
      </div>

      <div class="wheel__arrow">
        <button class="wheel__button" :disabled="isSpinning" @click="spinWheel">
          {{ buttonText }}
        </button>
      </div>
    </div>

    <div class="popup" :class="{ active: popupActive }">
      <div class="popup__container">
        <div class="popup__emotion">
          <i class="fas fa-meh"></i>
        </div>
        <p class="popup__note">{{ popupNote }}</p>
      </div>
    </div>

    <div class="congratulation" :class="{ active: congratulationActive }">
      <div class="congratulation__container">
        <div class="congratulation__close" @click="closeCongratulation">
          <i class="fas fa-times"></i>
        </div>
        <div class="congratulation__emotion">
          <i class="fas fa-smile"></i>
        </div>
        <p class="congratulation__note">{{ congratulationNote }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "App",
  data() {
    return {
      wheelRotation: "rotate(0deg)", // Khởi tạo giá trị ban đầu
      initialValue: 0, // Giá trị ban đầu
      value: 0,
      isSpinning: false, // Sử dụng để kiểm tra xem vòng quay có đang quay hay không
      remainingTime: 0, // Thời gian còn lại (tính bằng milliseconds)

      countClicked: 0,
      clicked: false,
      popupActive: false,
      popupNote: "",
      congratulationActive: false,
      congratulationNote: "",
      rules: [
        { id: 1, text: "Chúc Bạn May Mắn Lần Sau!" },
        { id: 2, text: "10,000 Coin" },
        { id: 3, text: "20,0000 Coin" },
        { id: 4, text: "50,000 Coin" },
        { id: 5, text: "100,000 Coin" },
        { id: 6, text: "500,000 Coin" },
      ],
    };
  },
  computed: {
    buttonText() {
      return this.isSpinning
        ? `Đợi ${this.formatTime(this.remainingTime)}`
        : "QUAY";
    },
  },
  methods: {
    getPosition(position) {
      if (position <= 30) {
        Swal.fire({
          title: "Chúc Bạn May Mắn Lần Sau !",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff",
          backdrop: `
    rgba(0,0,123,0.4)
    url("assets/gif/oke1.gif")
    left top
    no-repeat
  `,
        });
      } else if (position <= 90) {
        Swal.fire({
          title: "Chúc Mừng Bạn Nhận 10,000 Coin !",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff",
          backdrop: `
    rgba(0,0,123,0.4)
    url("assets/gif/oke1.gif")
    left top
    no-repeat
  `,
        });
      } else if (position <= 150) {
        Swal.fire({
          title: "Chúc Mừng Bạn Nhận 20,000 Coin !",

          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff",
          backdrop: `
    rgba(0,0,123,0.4)
    url("assets/gif/oke1.gif")
    left top
    no-repeat
  `,
        });
      } else if (position <= 210) {
        Swal.fire({
          title: "Chúc Mừng Bạn Nhận 50,000 Coin !",

          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff",
          backdrop: `
    rgba(0,0,123,0.4)
    url("assets/gif/oke1.gif")
    left top
    no-repeat
  `,
        });
      } else if (position <= 270) {
        Swal.fire({
          title: "Chúc Mừng Bạn Nhận 100,000 Coin !",

          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff",
          backdrop: `
    rgba(0,0,123,0.4)
    url("assets/gif/oke1.gif")
    left top
    no-repeat
  `,
        });
      } else if (position <= 330) {
        Swal.fire({
          title: "Chúc Mừng Bạn Nhận 500,000 Coin !",

          padding: "3em",
          color: "#716add",
          background: "#fff url(assets/gif/ok1.gif)",
          backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
        });
      } else {
        Swal.fire({
          title: "Chuc Bạn May Mắn Lần Sau !",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff",
          backdrop: `
    rgba(0,0,123,0.4)
    url("assets/gif/oke1.gif")
    left top
    no-repeat
  `,
        });
      }
      this.popupActive = false;
      this.congratulationActive = true;
      this.clicked = false;
      this.countClicked = 0;
    },
    spinWheel() {
      // Đặt lại giá trị quay về ban đầu
      this.value = this.initialValue;
      this.wheelRotation = `rotate(${this.value}deg)`;
      if (this.isSpinning) {
        // Nếu vòng quay đang quay, không cho phép quay thêm lần nữa
        return;
      }

      // Đặt isSpinning thành true để ngăn quay lần thứ 2
      this.isSpinning = true;
      this.remainingTime = 2 * 1000; // 2 giờ = 2 * 60 * 60 * 1000 (milliseconds)
      // Tạo một interval để cập nhật thời gian còn lại
      const interval = setInterval(() => {
        this.remainingTime -= 1000; // Giảm 1 giây (1000 milliseconds) từ thời gian còn lại

        if (this.remainingTime <= 0) {
          // Thời gian còn lại đã hết, cho phép quay lại
          this.isSpinning = false;
          clearInterval(interval); // Dừng interval
        }
      }, 1000); // Cập nhật mỗi 1 giây (1000 milliseconds)

      // Sau đó thực hiện quay bình thường
      // Tính ra tổng xác suất của tất cả các phạm vi
const totalProbability = 0.5 + 0.25 + 0.1 + 0.1 + 0.04 + 0.01;

// Tạo số ngẫu nhiên trong khoảng từ 0 đến 1
const randomValue = Math.random();

if (randomValue < 0.5 / totalProbability) {
  // Phạm vi 1 (50%)
  let random = Math.floor(Math.random() * 31) + 1440;
  this.value += random;
} else if (randomValue < (0.5 + 0.25) / totalProbability) {
  // Phạm vi 2 (25%)
  let random = Math.floor(Math.random() * 60) + 1440;
  this.value += random;
} else if (randomValue < (0.5 + 0.25 + 0.1) / totalProbability) {
  // Phạm vi 3 (10%)
  let random = Math.floor(Math.random() * 60) + 1440;
  this.value += random;
} else if (randomValue < (0.5 + 0.25 + 0.1 + 0.1) / totalProbability) {
  // Phạm vi 4 (10%)
  let random = Math.floor(Math.random() * 60) + 1440;
  this.value += random;
} else if (randomValue < (0.5 + 0.25 + 0.1 + 0.1 + 0.04) / totalProbability) {
  // Phạm vi 5 (4%)
  let random = Math.floor(Math.random() * 60) + 1440;
  this.value += random;
} else {
  // Phạm vi 6 (1%)
  let random = Math.floor(Math.random() * 60) + 1440;
  this.value += random;
}

this.wheelRotation = `rotate(${this.value}deg)`; // Áp dụng quay

      setTimeout(() => {
        this.getPosition(this.value % 360);

        // Đặt lại giá trị quay về 0 độ sau khi hoàn thành
        this.value = 0;
        this.wheelRotation = `rotate(${this.value}deg)`;
      }, 7000);
      console.log(this.value % 360);

      this.clicked = false;
    },
    formatTime(time) {
      const hours = Math.floor(time / 3600000); // 1 giờ = 3600000 milliseconds
      const minutes = Math.floor((time % 3600000) / 60000); // 1 phút = 60000 milliseconds
      const seconds = Math.floor((time % 60000) / 1000);
      return `${hours}:${minutes}:${seconds}`;
    },
    closeCongratulation() {
      this.congratulationActive = false;
    },
  },
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:600, 300");
*,
*::after,
*::before {
  outline: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.test {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  font-family: "Open Sans", sans-serif;
}

.rule {
  margin: 0 50px 0 0;
}

.rule__content {
  display: flex;
}

.rule__color {
  width: 50px;
  height: 50px;
  margin: 0 20px 20px 0;
}

.color-1 {
  background-color: #16a085;
}

.color-2 {
  background-color: #2980b9 ;
}

.color-3 {
  background-color: #34495e;
}

.color-4 {
  background-color: #f39c12;
}

.color-5 {
  background-color: #d35400;
}

.color-6 {
  background-color: #c0392b;
}

.wheel {
  width: 312px;
  height: 312px;
  border-radius: 50%;
  border: solid 6px #fff;
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.1);
  position: relative;
}

.wheel__inner {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transition: cubic-bezier(0.19, 1, 0.22, 1) 5s;
}

.wheel__sec {
  position: absolute;
  top: 0;
  left: 62px;
  width: 0;
  height: 0;
  border: solid;
  border-width: 150px 88px 0;
  border-color: transparent;
  transform-origin: 50% 100%;
}

.wheel__sec:nth-child(1) {
  border-top-color: #16a085;
}

.wheel__sec:nth-child(2) {
  border-top-color: #c0392b;
  transform: rotate(60deg);
}

.wheel__sec:nth-child(3) {
  border-top-color: #d35400;
  transform: rotate(120deg);
}

.wheel__sec:nth-child(4) {
  border-top-color: #f39c12;
  transform: rotate(180deg);
}

.wheel__sec:nth-child(5) {
  border-top-color: #34495e;
  transform: rotate(240deg);
}

.wheel__sec:nth-child(6) {
  border-top-color: #2980b9;
  transform: rotate(300deg);
}

.wheel__text {
  margin: 70px 0 0 70px;
}

.wheel__arrow {
  width: 70px;
  height: 70px;
  background: #fff;
  position: absolute;
  top: 121px;
  left: 115px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
}

.wheel__arrow::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid;
  border-width: 0 10px 20px;
  border-color: transparent;
  border-bottom-color: #fff;
  top: -15px;
  left: 25px;
}

.wheel__button {
  width: 60px;
  height: 60px;
  background-color: lightgray;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;
  font-size: 18px;
}

.wheel__button:hover {
  color: #27ae60;
}

.wheel__button:active {
  border: solid 3px rgba(0, 0, 0, 0.1);
  font-size: 15px;
}

.popup {
  position: fixed;
  width: 30vw;
  top: 0;
  left: 50%;
  transform: translate(-50%, -110%);
  background: #fff;
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  transition: all 0.5s;
  opacity: 0;
}

.popup.active {
  transform: translate(-50%, 0);
  opacity: 1;
}

.popup__emotion {
  color: #f39c12;
  text-align: center;
  font-size: 30px;
  margin: 0 0 25px 0;
}

.popup__note {
  text-align: center;
}

.congratulation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: none;
}

.congratulation__container {
  width: 40vw;
  padding: 30px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.congratulation__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #c0392b;
  cursor: pointer;
  transition: all 0.5s;
}

.congratulation__close:hover {
  transform: rotate(360deg);
}

.congratulation__emotion {
  color: #f39c12;
  text-align: center;
  margin: 0 0 20px 0;
}

.congratulation__note {
  text-align: center;
}
</style>
