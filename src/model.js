import image from "./assets/image.png"
import {TextBlock, ColumnsBlock, ImageBlock, TitleBlock} from "./classes/blocks"

const text = "This is a simple app was created after taking a two hour course in vanilla JavaScript. It's just my first app to learn JS"

export const model = [
    new TitleBlock( "Application on vanilla JavaScript", {
        tag: "h2",
        styles: {
            background: 'linear-gradient(to right, #7864fa, #ffe300)',
            color: "#fff",
            padding: "1.5rem",
            "text-align": "center",
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Just a picture'
    }),
    new ColumnsBlock([
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    ],         {
        styles: {
        background: 'linear-gradient(to right, #ffe300, #7864fa)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
]