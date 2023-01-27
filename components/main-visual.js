import Image from "next/image"
import mainvisualsp from 'images/main-visual-sp.png'
import mainvisualpc from 'images/main-visual-pc.png'
import utils from 'styles/utils.module.css'

export default function MainVisual() {
    return (
        <div>
            <Image
                className={utils.uDisplaySpOnly}
                src={mainvisualsp}
                alt="Rin K. 千葉県在住のWebコーダーです。ポートフォリオをご覧いただきありがとうございます。Web制作のお仕事承ります。"
                sizes="100vw"
                width={375}
                height={225}
                priority
                placeholder="blur"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
            <Image
                className={utils.uDisplayPcOnly}
                src={mainvisualpc}
                alt="Rin K. 千葉県在住のWebコーダーです。ポートフォリオをご覧いただきありがとうございます。Web制作のお仕事承ります。"
                sizes="100vw"
                width={1440}
                height={920}
                priority
                placeholder="blur"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
        </div>
    )
}