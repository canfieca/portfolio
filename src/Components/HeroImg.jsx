import '../css/HeroImg.css'
import CurvedText from 'react-curved-text'

export default function HeroImg() {

    return (
        <section>
                <CurvedText
                    width='1000'
                    height='1000'
                    cx='493'
                    cy='600'
                    rx='502'
                    ry='446'
                    startOffset='299'
                    reversed={true}
                    text='Welcome to my Portfolio'
                    textProps={{"style": {"fontSize": "92", "fill": "white"}}}
                    textPathProps={null}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null}
                />
                
        </section>
    )
}