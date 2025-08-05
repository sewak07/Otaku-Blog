import ComponentPagination from "./ComponentPagination.jsx";

export default function It({ NotesName }) {

    const pdfObj = [
        {
            day: "Day 1",
            title: "React Notes(Day 1)",
            description: "In day 1: We learn to setup local environment in Vs Code and learn what is React, JSX, and how to use it and more..."
        },
        {
            day: "Day 2",
            title: "React Notes(Day 2)",
            description: "In day 2: We learn everything related to props, conditionals, Dynamic Component Styling and Install React Developer Tools..."
        },
        {
            day: "Day 3",
            title: "React Notes(Day 3)",
            description: "In day 3: We learn about Handling events, hooks, useState() and many more..."
        },
        {
            day: "Day 4",
            title: "React Notes(Day 4)",
            description: "In day 4: We learn about using object and arrays in state, removing updating and adding of array and object and more...."
        },
        {
            day: "Day 5",
            title: "React Notes(Day 5)",
            description: "In day 1: We learn to setup local environment in Vs Code and learn what is React, JSX, and how to use it and more..."
        },
        {
            day: "Day 6",
            title: "React Notes(Day 6)",
            description: "In day 1: We learn to setup local environment in Vs Code and learn what is React, JSX, and how to use it and more..."
        },
        {
            day: "Day 7",
            title: "React Notes(Day 7)",
            description: "In day 1: We learn to setup local environment in Vs Code and learn what is React, JSX, and how to use it and more..."
        }
    ];

     

    const click = (pdfUrl) => {
        window.open(pdfUrl, "_blank");
    };


    return (
        <div className="it-container" id="it">
            <div className="it-title">
                <h2>It related stuffs</h2>
                <div className="underline">
                </div>
                <br /> <br /> <br />
                <h2>{NotesName}</h2>
            </div>
            <br /><br /><br />
            <ComponentPagination ItPdfObj={pdfObj} handleClick={click} name = {"React js Notes"} />
        </div>
    );
};