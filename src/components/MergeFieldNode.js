import { Node, mergeAttributes } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-2';
import MergeField from './MergeField.vue';

const MergeFieldNode = Node.create({
  name: 'mergeField',
  group: 'inline',
  atom: true,
  parseHTML() {
    return [
      {
        tag: 'merge-field',
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['merge-field', mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return VueNodeViewRenderer(MergeField);
  }
});

export default MergeFieldNode;