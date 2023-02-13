export default function Project(props){

    const services = props.services;

    return (
        <section className="project">
            <div className="projectDetail">
                <p className="projectTitle">{props.title}</p>
                <p className="projectServices">{
                    services.map((value, index) => {
                        return (
                            index === services.length - 1
                            ? value
                            : value + ', '
                        );
                    })
                }</p>
                <button className="projectView">Show More <i class="fa-solid fa-arrow-right fa-1x"></i></button>
            </div>
            <div className="projectImg">
                <img src={props.imgURL} alt="Project Img"/>
            </div>
        </section>
    )
}