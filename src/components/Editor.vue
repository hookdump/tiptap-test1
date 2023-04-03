<template>
  <div class="editor" v-if="editor">
    <button>Add Merge Field</button>
    <br />
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import { StarterKit } from "@tiptap/starter-kit";

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    };
  },

  mounted() {
    this.editor = new Editor({
      extensions: [StarterKit],
      editorProps: {
        attributes: {
          class: "Editor",
        },
      },
      content: `
        <h1>Welcome to your fresh Tiptap Code Sandbox</h1>
        <p>You can create a demo for your issue inside of this sandbox and share it with us.</p>
      `,
    });
  },
};
</script>
