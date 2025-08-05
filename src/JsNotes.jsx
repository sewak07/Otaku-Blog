import ComponentPagination from "./ComponentPagination.jsx";

export default function JsNotes() {

    const pdfObj = [
        {
            day: "Day 1",
            title: "JS Notes(Variables and Datatypes)",
            description: "In day 1: We learn what is JS, write our 1st code, and learn about variable and datatypes. "
        },

        {
            day: "Day 2",
            title: "JS Notes(Operators and Conditionals)",
            description: "In day 2: We learn about operators and conditional statements. "
        },
        {
            day: "Day 3",
            title: "JS Notes(Loops and Strings)",
            description: "In day 3: We learn about Loops, and Strings."
        },
        {
            day: "Day 4",
            title: "JS Notes(Arrays in Js)",
            description: "In day 4: We learn about Arrays in JS, and Looping over Arrays."
        },
        {
            day: "Day 5",
            title: "JS Notes(Functions and Arrow Functions)",
            description: "In day 5: We learn about Functions and Arrow Functions and some more Arrays Methods. "
        },
        {
            day: "Day 6",
            title: "JS Notes(DOM Manipulation)",
            description: "In day 6: We learn about DOM and DOM Manipulation."
        },
        {
            day: "Day 7",
            title: "JS Notes(Events in JS)",
            description: "In day 7: We learn about Events in Js, Event handeling, Event Object and Event Listeners. "
        },
        {
            day: "Day 8",
            title: "JS Notes(Basic concept of OOP in JS)",
            description: "In day 8: We learn about classes, objects, protptypes, inheritance, super keyword and Error Handling"
        },
        {
            day: "Day 9",
            title: "JS Notes(API Call)",
            description: "In day 9: We learn about Sync in JS, Callbacks, Promises, and Async Await"
        },
    ];

    const click = (pdfUrl) => {
        window.open(pdfUrl, "_blank");
    };

    return (
       <div className="it-container" id="it">
                  <div className="it-title">
                      <h2>JS Notes </h2>
                  </div>
                  <br /><br /><br />
                  <ComponentPagination ItPdfObj={pdfObj} handleClick={click} name = {"Js Notes"}  />
              </div>
    );
};