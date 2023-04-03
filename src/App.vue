<template>
  <div id="app">
    <Editor />
  </div>
</template>

<script>
import Editor from "./components/Editor";

export default {
  name: "App",
  components: {
    Editor,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-family: "Inter", sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.Editor {
  height: 500px;
  outline: 0;
  padding: 2rem;
  border: 1px solid black;
  margin: 10px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  blockquote,
  pre,
  figure,
  image {
    margin: 0;

    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }

  h1 {
    line-height: 1.2;

    &:not(:last-child) {
      margin-bottom: 0.75em;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;

    &:not(:last-child) {
      margin-bottom: 0.5em;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    & + h1,
    & + h2,
    & + h3,
    & + h4,
    & + h5,
    & + h6 {
      margin-top: 2em;
    }
  }

  blockquote {
    padding: 1rem;
    padding-left: 2rem;
    background: #fff;
    border-radius: 0.25rem;
    border: 0.24rem solid #000;
    border-left-width: 1rem;
  }

  pre {
    padding: 1rem;
    background: #000;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1.25rem;
    line-height: 1.3;
  }
}
</style>
