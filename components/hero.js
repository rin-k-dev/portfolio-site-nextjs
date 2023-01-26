export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {imageOn && <figure>[Picture]</figure>}
        </div>
    )
}