import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              subtitle={"Easy and quick"}
              para={"Get access to the book you purhcased online instantly."}
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              subtitle={"10,000+ Books"}
              para={"Library has books in all your favourite catagories!"}
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              subtitle={"Affordable"}
              para={"Get your hands on the books for as little as £10"}
            ></Highlight>
          </div>
        </div>
      </div>
    </section>
  );
}
