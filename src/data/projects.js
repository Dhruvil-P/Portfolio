import RRVImg from "../assets/projects/RRV project.svg";
import GEImg from "../assets/projects/GE project.svg";
import RoomImg from "../assets/projects/Room project.png";
import SushiImg from "../assets/projects/Sushi.png";

const projects = [
    {
        type: "UI/UX",
        projects: [
            {
                id: 1,
                title: "ROOMREVAMP LANDING PAGE",
                services: ["Web Design", "Branding"],
                imgURL: RRVImg,
            },
            {
                id: 2,
                title: "GOOD EXTENSION LANDING PAGE",
                services: ["Web Design", "Product Design"],
                imgURL: GEImg,
            }
        ]
    },
    {
        type: "3D",
        projects: [
            {
                id: 1,
                title: "LIVING ROOM",
                services: ["3D Design"],
                imgURL: RoomImg,
            },
            {
                id: 2,
                title: "SUSHI",
                services: ["3D Design"],
                imgURL: SushiImg,
            },
        ]
    },
    {
        type: "Branding",
        projects: []
    }
]

export default projects;