<template>
  <Header />
  <router-view />
</template>

<script>
import Header from './components/Header/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss">
.nav___magazine {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
<style lang="scss">
@font-face {
  font-family: 'Raleway';
  src: url('../fonts/Raleway-Thin.ttf') format('ttf'),
    url('../fonts/Raleway-ExtraLight.ttf') format('ttf'),
    url('../fonts/Raleway-Light.ttf') format('ttf'),
    url('../fonts/Raleway-Regular.ttf') format('ttf'),
    url('../fonts/Raleway-Medium.ttf') format('ttf'),
    url('../fonts/Raleway-SemiBold.ttf') format('ttf'),
    url('../fonts/Raleway-Bold.ttf') format('ttf'),
    url('../fonts/Raleway-ExtraBold.ttf') format('ttf'),
    url('../fonts/Raleway-Black.ttf') format('ttf'),
    url('../fonts/Raleway-ThinItalic.ttf') format('ttf'),
    url('../fonts/Raleway-ExtraLightItalic.ttf') format('ttf'),
    url('../fonts/Raleway-LightItalic.ttf') format('ttf'),
    url('../fonts/Raleway-Italic.ttf') format('ttf'),
    url('../fonts/Raleway-MediumItalic.ttf') format('ttf'),
    url('../fonts/Raleway-SemiBoldItalic.ttf') format('ttf'),
    url('../fonts/Raleway-BoldItalic.ttf') format('ttf'),
    url('../fonts/Raleway-ExtraBoldItalic.ttf') format('ttf'),
    url('../fonts/Raleway-BlackItalic.ttf') format('ttf');
}
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

ul[class],
ol[class] {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
a {
  text-decoration: none;
}
</style>
