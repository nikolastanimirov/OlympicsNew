import React from "react";
import Member from "./TeamMember";
import person3 from "../resources/crew/3.png";
import person1 from "../resources/crew/1.png";
import person2 from "../resources/crew/2.png";
import person6 from "../resources/crew/6.png";
import person4 from "../resources/crew/4.png";
import person5 from "../resources/crew/5.png";

import "../static/Crew.css";

function Data() {
  return (
    <div className="crew">
      <ul>
        <li>
          <Member
            img={person3}
            alt="NikiS"
            name="Nikola Stanimirov"
            title="President"
          />
        </li>
        <li>
          <Member
            img={person1}
            alt="NikiS"
            name="Anna Andreeva"
            title="Sponsorship Department"
          />
        </li>
        <li>
          <Member img={person2} alt="NikiS" name="Joe Doe" title="Marketing" />
        </li>
        <li>
          <Member img={person4} alt="NikiS" name="Lexa" title="PR" />
        </li>
        <li>
          <Member
            img={person5}
            alt="NikiS"
            name="Alycia"
            title="IT Department"
          />
        </li>
        <li>
          <Member
            img={person6}
            alt="NikiS"
            name="Ivan Ivanov"
            title="Challenge Organizer"
          />
        </li>
      </ul>
    </div>
  );
}

export default Data;
