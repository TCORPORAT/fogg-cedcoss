
function HeadingShadow({text}) {
    return (
        <section className="section-header">
        <div className="echo_heading_wrap" bg-text={text.toUpperCase()}>
        <div className="heading_inner_wrap">
        <h6>{text}</h6>
        </div>
        </div>
        </section>
    )
}

export default HeadingShadow