import React from "react";

export default function Coding() {
  return (
    //         <div>
    //             Coding scares me alot
    // I got scared when i have to code something unknown,
    // I got scared when no one is coding in that language which is assigned to me,
    // I got scared i get list of m0th€rf@king bugs in my project, and don't know hove to solve them,
    // And the greatest thing is that no one around me is coding this things. So i have to figure out the solution alone in any condition otherwise i got fired.
    // I got scared...

    // But each time i find the right solution, the pleasure it gives me insane,
    // Fixing bugs increases circulation of blood in my vains,
    // When i read documentation, scrape the internet it takes my confidence level at the f@king another level.

    //         </div>
    //     );
    // }

    <div className="custom-border p-2">
      <h3>
        Coding <span className="h6">Scares me alot</span>
      </h3>
      <div style={{ fontSize: "medium" }}>
        <p>
          <span className="bg-color-custom">I got scared</span> when i have to code something unknown,
          <span className="bg-color-custom">I got scared</span> when no one is coding in that language which is
          assigned to me,
          <span className="bg-color-custom">I got scared</span> when i get list of m0th€rf@king bugs in my
          project, and <span className="bg-color-custom">don't know hove to solve them</span>, And the greatest
          thing is that no one around my local scope is coding that thing.{" "}
          <span className="bg-color-custom">So i have to figure out the solution alone in any condition</span>{" "}
          otherwise i'm gonna fired. I got scared...
        </p>
        <p>
          But each time i find the right solution, the pleasure it gives me
          insane, Fixing bugs <span className="bg-color-custom">increases circulation of blood in my vains</span>, When i
          read documentation, scrape the internet and fix things <span className="bg-color-custom">it puts my
          confidence to f@king another level.</span>
        </p>
      </div>
    </div>
  );
}
