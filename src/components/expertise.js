export default function Expertise() {
  return (
    <>
      <p className="capitalize text-xl  text-new_bg font-bold font-serif mb-3">
        {" "}
        Expertise
      </p>
      <div className="font-serif overflow-auto h-[calc(100vh-12rem)]">
        <p className="text-white mt-5 capitalize">
          As a Full-Stack Developer, I specialize in creating seamless web
          applications using modern technologies. My toolkit includes:
        </p>
        <div>
          <ul className="list-disc list-inside mt-5">
            <li className="font-bold mb-5">
              Frontend :{" "}
              <span className="font-normal text-white">
                React, Tailwind CSS, HTML5, CSS3, JavaScript
              </span>
            </li>
            <li className="font-bold mb-5">
              Backend :{" "}
              <span className="font-normal text-white">
                Django, RESTful APIs
              </span>
            </li>
            <li className="font-bold mb-5">
              Databases :{" "}
              <span className="font-normal text-white">SQL, SQLite</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl capitalize">App development</p>
          <p className="text-white mt-5 capitalize">
            I also excel in app development, creating cross-platform
            applications for both Android and iOS using React Native. My
            projects in this domain focus on delivering intuitive and powerful
            mobile experiences.
          </p>
        </div>
        <div>
          <p className="font-bold text-xl capitalize mt-5">
            Pioneering in Robotics and Automation
          </p>
          <p className="text-white mt-5 capitalize">
            In the realm of robotics, I work with development boards such as
            Arduino and ESP32 to create intelligent automation systems. My
            projects often integrate AI and machine learning, bringing smart,
            adaptive capabilities to hardware systems.
          </p>
        </div>
        <div className="pb-10">
          <p className="font-bold text-xl capitalize mt-5 ">
            Educator and Mentor
          </p>
          <p className="text-white mt-5 capitalize">
            Beyond my development work, I am committed to sharing my knowledge
            and empowering the next generation of tech enthusiasts. I offer
            online classes in Python, C++, AI, and more, guiding students
            through hands-on projects and real-world applications.
          </p>
        </div>
      </div>
    </>
  );
}
