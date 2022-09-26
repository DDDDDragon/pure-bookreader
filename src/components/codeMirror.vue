<!-- eslint-disable no-unused-vars -->
<template>
    <codemirror/>
  </template>
  
  <script>
    import {EditorState} from "@codemirror/state"
    import {EditorView, keymap} from "@codemirror/view"
    import {defaultKeymap} from "@codemirror/commands"


    export default{}
    // eslint-disable-next-line no-unused-vars
    let view = new EditorView({
        state: EditorState.create({
            doc: "Hello World",
            extensions: [keymap.of(defaultKeymap)],
        }),
        parent: document.body,
        extensions: EditorView.theme({
            ".cm-line": {color: "darkorange"}
        })
    })
  </script>