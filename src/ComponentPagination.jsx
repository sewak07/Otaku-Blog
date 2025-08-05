import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import ItContent from "./ItContent.jsx";

export default function ComponentPagination({ ItPdfObj, handleClick, name }) {


    let image;

    if (name === "React js Notes") {
        image = "Screenshot 2025-08-05 165443.png";
    } else if (name === "Js Notes") {
        image = "Screenshot 2025-08-05 162005.png";
    }


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(ItPdfObj.length / itemsPerPage);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = ItPdfObj.slice(startIndex, startIndex + itemsPerPage);


    return (
        <>
            <div className="it-cards">
                {currentItems.map((note, index) => (
                    <ItContent
                        key={index}
                        name={note.title}
                        description={note.description}
                        handleClick={() => handleClick(`${name} (${note.day}).pdf`)}
                        Image={image}
                    />
                ))}
            </div>
            <Stack spacing={2}
                alignItems="center"
                marginTop={5}
            >
                <Pagination count={totalPages}
                    color="primary"
                    onChange={handleChange}
                />
            </Stack>
        </>
    );
};