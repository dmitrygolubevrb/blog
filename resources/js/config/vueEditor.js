import {Quill, VueEditor} from "vue2-editor";
import {ImageDrop} from "quill-image-drop-module";
import QuillResize from 'quill-resize-module'
Quill.register("modules/imageResize", QuillResize)
Quill.register("modules/imageDrop", ImageDrop);

const fonts = Quill.import('attributors/class/font')
fonts.whitelist = ["sans-serif", "serif", "monospace"]
Quill.register(fonts, true)

let editorSettings = {}

editorSettings.contentEditor = {
    modules: {
        imageDrop: true,
            imageResize: {
            theme: 'snow',
                modules: ['Resize', 'DisplaySize']
        },
        toolbar: [
            [{header: [false, 1, 2, 3, 4, 5, 6]}],
            ["bold", "italic", "underline", "strike"], // toggled buttons
            [
                {align: ""},
                {align: "center"},
                {align: "right"},
                {align: "justify"}
            ],
            ["blockquote", "code-block"],
            [{list: "ordered"}, {list: "bullet"}, {list: "check"}],
            [{indent: "-1"}, {indent: "+1"}],
            [{color: []}, {background: []}],
            ["link", "image", "video"],
            ["clean"],

            // This is what I have added
            [{'font': fonts.whitelist}],
        ]
    }
}
editorSettings.previewContentEditorToolbar = [
    [{header: [false, 1, 2, 3, 4, 5, 6]}],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    [
        {align: ""},
        {align: "center"},
        {align: "right"},
        {align: "justify"}
    ],
    ["blockquote"],
    [{indent: "-1"}, {indent: "+1"}],
    [{color: []}, {background: []}],
    [{'font': fonts.whitelist}],
]

export default editorSettings
