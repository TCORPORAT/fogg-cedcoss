function HeadingLine({text, fsize, sectionClass}) {
    return (
        <section className={"section-header-line " + sectionClass ?? '' }>
        <div className="heading_inner_wrap ">
        <h6 className={fsize ?? ''}>{text}</h6>
        </div>
        </section>
    )
}

export default HeadingLine