<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <header class="header">
    <div class="container">
      <div class="nav__magazine" id="nav">
        <ul class="nav__magazine_navigation">
          <li>
            <router-link to="/women" active-class="active__link">
              Women
            </router-link>
          </li>
          <li>
            <router-link
              to="/men"
              active-class="active__link"
              id="active__link_2"
            >
              Men
            </router-link>
          </li>
          <li>
            <router-link
              to="/kids"
              active-class="active__link"
              id="active__link_3"
            >
              Kids
            </router-link>
          </li>
        </ul>
        <router-link to="/women">
          <img src="../../../public/icon.svg" alt="icon" />
        </router-link>
        <div class="navigation__operations">
          <div
            class="operations_money"
            style="cursor: pointer;"
            @mouseover="handleFocus"
            @click.stop="handleFocus"
            @mouseleave="handleResetFocus"
          >
            <img
              alt="$"
              class="_dod"
              :src="require('../../../public/' + getVarientPayment + '.svg')"
            />
            <img
              src="../../../public/revert.svg"
              alt="revert"
              className="revert_money"
            />
            <div class="active__money" v-if="this.focus">
              <div
                class="usd_money"
                @click="changePayment('usd')"
                :id="getVarientPayment === 'usd' ? 'active__pay' : ''"
              >
                <svg
                  width="11"
                  height="18"
                  viewBox="0 0 11 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.13 14.798L6.138 14.816V17.426H5.13V14.798ZM5.22 14.6V3.638L6.03 3.512V14.636L5.22 14.6ZM5.13 0.829999H6.138V3.404L5.13 3.53V0.829999ZM9.144 5.402C9 5.234 8.808 5.072 8.568 4.916C8.328 4.76 8.058 4.622 7.758 4.502C7.458 4.37 7.128 4.268 6.768 4.196C6.42 4.112 6.054 4.07 5.67 4.07C4.686 4.07 3.96 4.256 3.492 4.628C3.024 5 2.79 5.51 2.79 6.158C2.79 6.614 2.91 6.974 3.15 7.238C3.39 7.502 3.756 7.718 4.248 7.886C4.752 8.054 5.388 8.228 6.156 8.408C7.044 8.6 7.812 8.834 8.46 9.11C9.108 9.386 9.606 9.758 9.954 10.226C10.302 10.682 10.476 11.294 10.476 12.062C10.476 12.674 10.356 13.208 10.116 13.664C9.888 14.108 9.564 14.48 9.144 14.78C8.724 15.068 8.232 15.284 7.668 15.428C7.104 15.56 6.492 15.626 5.832 15.626C5.184 15.626 4.548 15.56 3.924 15.428C3.312 15.284 2.73 15.08 2.178 14.816C1.626 14.552 1.11 14.222 0.63 13.826L1.404 12.458C1.596 12.662 1.842 12.866 2.142 13.07C2.454 13.262 2.802 13.442 3.186 13.61C3.582 13.778 4.008 13.916 4.464 14.024C4.92 14.12 5.388 14.168 5.868 14.168C6.78 14.168 7.488 14.006 7.992 13.682C8.496 13.346 8.748 12.86 8.748 12.224C8.748 11.744 8.604 11.36 8.316 11.072C8.04 10.784 7.626 10.544 7.074 10.352C6.522 10.16 5.85 9.968 5.058 9.776C4.194 9.56 3.468 9.326 2.88 9.074C2.292 8.81 1.848 8.468 1.548 8.048C1.26 7.628 1.116 7.082 1.116 6.41C1.116 5.594 1.314 4.904 1.71 4.34C2.106 3.776 2.652 3.35 3.348 3.062C4.044 2.774 4.83 2.63 5.706 2.63C6.282 2.63 6.816 2.69 7.308 2.81C7.812 2.93 8.28 3.098 8.712 3.314C9.144 3.53 9.54 3.788 9.9 4.088L9.144 5.402Z"
                    fill="#1D1F22"
                  />
                </svg>

                <span>USD</span>
              </div>
              <div
                class="eur_money"
                @click="changePayment('eur')"
                :id="getVarientPayment === 'eur' ? 'active__pay' : ''"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.285406 8.338L0.681406 7.402H2.08541C2.04941 7.102 2.03141 6.808 2.03141 6.52C2.03141 6.46 2.03141 6.4 2.03141 6.34H0.717406L1.11341 5.404H2.12141C2.24141 4.72 2.45741 4.066 2.76941 3.442C3.09341 2.818 3.50741 2.26 4.01141 1.768C4.52741 1.264 5.12741 0.868 5.81141 0.579999C6.49541 0.291999 7.26341 0.147999 8.11541 0.147999C9.25541 0.147999 10.2334 0.411999 11.0494 0.94C11.8654 1.456 12.4714 2.122 12.8674 2.938L11.5894 3.766C11.3374 3.226 11.0134 2.8 10.6174 2.488C10.2334 2.164 9.81341 1.936 9.35741 1.804C8.91341 1.672 8.47541 1.606 8.04341 1.606C7.25141 1.606 6.56141 1.786 5.97341 2.146C5.38541 2.494 4.90541 2.956 4.53341 3.532C4.17341 4.108 3.92741 4.732 3.79541 5.404H9.44741L9.05141 6.34H3.66941C3.66941 6.424 3.66941 6.508 3.66941 6.592C3.66941 6.868 3.68741 7.138 3.72341 7.402H8.81741L8.42141 8.338H3.93941C4.14341 8.962 4.44341 9.526 4.83941 10.03C5.24741 10.534 5.72741 10.93 6.27941 11.218C6.83141 11.506 7.43741 11.65 8.09741 11.65C8.54141 11.65 8.99741 11.572 9.46541 11.416C9.93341 11.26 10.3714 11.02 10.7794 10.696C11.1874 10.36 11.5114 9.928 11.7514 9.4L13.1014 10.138C12.8374 10.774 12.4294 11.314 11.8774 11.758C11.3254 12.202 10.7074 12.538 10.0234 12.766C9.35141 12.994 8.68541 13.108 8.02541 13.108C7.07741 13.108 6.21341 12.892 5.43341 12.46C4.65341 12.016 3.99341 11.434 3.45341 10.714C2.91341 9.982 2.52341 9.19 2.28341 8.338H0.285406Z"
                    fill="#1D1F22"
                  />
                </svg>

                <span>EUR</span>
              </div>
              <div
                class="jpy_money"
                @click="changePayment('jpy')"
                :id="getVarientPayment === 'jpy' ? 'active__pay' : ''"
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.81458 6.214H9.27258V7.294H7.22058L6.60858 8.338V8.842H9.29058V9.922H6.60858V13H4.98858V9.922H2.34258V8.842H4.98858V8.302L4.41258 7.294H2.34258V6.214H3.83658L0.164578 0.219999H1.92858L5.79858 6.88L9.70458 0.219999H11.4866L7.81458 6.214Z"
                    fill="#1D1F22"
                  />
                </svg>
                <span>JPY</span>
              </div>
            </div>
          </div>
          <img
            src="../../../public/shopping.svg"
            alt="shopping"
            className="shopping_money"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { mapGetters, mapMutations } from 'vuex';
import { defineComponent } from 'vue';

interface IHeader {
  focus: boolean;
}
export default defineComponent({
  data(): IHeader {
    return {
      focus: false,
    };
  },
  computed: mapGetters(['getVarientPayment']),
  methods: {
    handleFocus(): void {
      this.focus = true;
    },
    handleResetFocus(): void {
      this.focus = false;
    },
    changePayment(title: string): void {
      this.handleResetFocus();
      this.updatePayment(title);
    },
    ...mapMutations(['updatePayment']),
  },
});
</script>

<style scoped lang="scss">
.header {
  max-width: 1440px;
  margin: 0 auto;
  height: 80px;
}
.nav__magazine {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  &_navigation {
    display: flex;
    li {
      margin-right: 32px;
      a {
        font-size: 16px;
        text-transform: uppercase;
        color: #1d1f22;
        transition: color 0.3s ease-in-out 0s;
        &:hover {
          color: #5ece7b;
        }
      }
    }
  }
}
.active__link {
  color: #5ece7b !important;
  position: relative;
}
.active__link::after {
  content: '';
  position: absolute;
  display: block;
  width: 97px;
  height: 1px;
  background: #5ece7b;
  top: 48px;
}
.active__link:after {
  left: -25%;
}
#active__link_2::after {
  left: -80%;
}
#active__link_3::after {
  left: -80%;
}
.navigation__operations {
  display: flex;
  position: relative;
}
.operations_money {
  display: flex;
  height: 40px;
}
.revert_money {
  margin-left: 10px;
  margin-top: 4px;
  width: 6px;
}
.shopping_money {
  margin-left: 22px;
  cursor: pointer;
}
.active__money {
  display: block;
  position: absolute;
  width: 114px;
  height: 169px;
  background: #fff;
  top: 40px;
  left: -20px;
}
.usd_money,
.eur_money,
.jpy_money {
  height: 56px;
  transition: all 0.3s ease-in-out 0s;
  padding: 20px;
  font-weight: 500;
  font-size: 18px;
  color: #1d1f22;
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.usd_money span,
.eur_money span,
.jpy_money span {
  margin-left: 5px;
  margin-top: 2px;
}
.usd_money:hover,
.eur_money:hover,
.jpy_money:hover {
  background: #5ece7b;
  color: #fff;
}
path {
  transition: fill 0.3s ease-in-out 0s;
}
.usd_money:hover path,
.eur_money:hover path,
.jpy_money:hover path {
  fill: #fff;
}
._dod {
  width: 12px;
}
#active__pay {
  background: #5ece7b;
  color: #fff;
}
#active__pay path {
  fill: #fff;
}
</style>
