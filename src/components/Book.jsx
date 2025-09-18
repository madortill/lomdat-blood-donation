import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "../css/Book.css";
import cover from "../assets/images/book/1.png";
import page1 from "../assets/images/book/2.png";
import page2 from "../assets/images/book/3.png";
import page3 from "../assets/images/book/4.png";
import page4 from "../assets/images/book/5.png";

function Book({ setShowNextBtn, setDoneReading })  {
  const pages = [page4, page3, page2, page1, cover]; // reversed order
  const [isMounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 350, height: 500 });
  const bookRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setDimensions({ width: 150, height: 300 });
      } else {
        setDimensions({ width: 350, height: 500 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Callback for page flip
  const onPageFlip = (e) => {
    const currentPage = e.data; // this gives the current page index
    if (currentPage === 0) {
      setDoneReading(true); // user reached first page
      setShowNextBtn(true);
    } else {
      setDoneReading(false); // not yet finished
    }
  };

  return (
    <div className="book">
      {isMounted && (
        <HTMLFlipBook
          ref={bookRef}
          width={dimensions.width}
          height={dimensions.height}
          maxShadowOpacity={0.5}
          showCover={false}
          size="fixed"
          direction="ltr"
          startPage={pages.length - 1}
          onFlip={onPageFlip} // <-- callback added
        >
          {pages.map((pageImg, index) => (
            <div className="page" key={index}>
              <img src={pageImg} alt={`page ${index + 1}`} className="page-img" />
            </div>
          ))}
        </HTMLFlipBook>
      )}

     
    </div>
  );
}

export default Book;
