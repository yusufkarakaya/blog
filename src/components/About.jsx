import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section>
        <div className="flex justify-center">
          <div className="max-w-screen-sm	">
            <div className="flex justify-center mt-4">
              <h1 className="text-5xl font-semibold font-['Bebas_Neue']">
                YUSUF <span className="text-[#353a40]">KARAKAYA</span>
              </h1>
            </div>
            <div className="justify-center flex mt-4 ">
              <span className="text-2xl text-[#6c757d] font-['Bebas_Neue']">
                FULL STACK DEVELOPER * CONTACT ME:
              </span>
              <a
                className="text-2xl text-[#6c757d94] font-['Bebas_Neue']"
                href="mailto:yusufkarakaya92@gmail.com"
              >
                YUSUFKARAKAYA92@GMAIL.COM
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <h1>
                I'm a full stack developer with experience in developing
                front-end and back-end systems.
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
