import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full h-auto px-2 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-xl uppercase py-4">Skills</h2>
        <div className="overflow-scroll">
          <div className="skills-table flex">
            <ul>
              <div className="flex justify-center">
                <p>Game Engines & 3D Software</p>
              </div>
              <div>
                <li>Unity</li>
                <li>Blender</li>
              </div>
            </ul>
            <ul>
              <p>Version Control</p>
              <div>
                <li>Github</li>
                <li>Bitbucket</li>
              </div>
            </ul>
            <ul>
              <p>Multiplayer</p>
              <div>
                <li>Photon Plugins</li>
                <li>Unity Net-code</li>
              </div>
            </ul>
            <ul>
              <p>Work Management Tools</p>
              <div>
                <li>Jira</li>
                <li>Trello</li>
              </div>
            </ul>
            <ul>
              <p>AR/VR</p>
              <div>
                <li>Vuforia Plugins</li>
                <li>AR Foundation</li>
                <li>Oculus Plugins</li>
              </div>
            </ul>
            <ul>
              <p>Coding Languages</p>
              <div>
                <li>C#</li>
                <li>C++</li>
                <li>Python</li>
              </div>
            </ul>
            <ul>
              <p>Cloud Technologies</p>
              <div>
                <li>Firebase</li>
                <li>Playfab</li>
                <li>Facebook APIs</li>
              </div>
            </ul>
            <ul>
              <p>Database Integration</p>
              <div>
                <li>MongoDB</li>
                <li>Amazon S3</li>
              </div>
            </ul>
            <ul>
              <p>Platforms</p>
              <div>
                <li>Meta Quest2</li>
                <li>Android</li>
                <li>PC</li>
                <li>WebGL</li>
              </div>
            </ul>
            <ul>
              <p>Ad Integration</p>
              <div>
                <li>Facebook Ads</li>
                <li>Google Ads</li>
              </div>
            </ul>
            <ul>
              <p>Photo & Video Editing</p>
              <div>
                <li>Davinci Resolve</li>
                <li>Adobe Photoshop</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
