import { useContext, useState } from "react";
import { appContext } from "../components/App/App";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/split.png";

function Names() {
  const { groupName, participants, setParticipants } = useContext(appContext);
  const [toggleNames, setToggleNames] = useState(false);

  const [namesText, setNamesText] = useState("");

  const addParticipants = () => {
    setParticipants([
      ...participants,
      { id: Math.random() * 1000, name: namesText },
    ]);
    setNamesText("");
  };

  const deletePerson = (id) => {
    setParticipants(participants.filter((person) => person.id !== id));
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="flex w-full justify-between pt-6 pl-6">
        <img
          src={logo}
          alt="split company logo"
          className="flex w-[225px] h-[225px]"
        />
        <h1 className="text-5xl italic text-[#38A37F] underline pt-12 pr-12">
          {groupName}
        </h1>
        <div className="flex-col justify-between mr-12 w-[200px] z-20">
          <div
            onClick={() => setToggleNames(!toggleNames)}
            className={
              participants.length > 0
                ? "bg-white w-[80px] h-[80px] flex justify-center rounded-3xl mt-12 border border-[#38A37F]"
                : ""
            }
          >
            {participants.length > 0 && (
              <div className="flex-col justify-center items-center hover:cursor-pointer text-[#38A37F]">
                <h4 className="text-sm mt-2 font-semibold">Members</h4>
                <div className="flex justify-center mt-2">
                  <BsFillPersonFill className="text-3xl" />
                  <div className="text-lg ml-2 mt-1 font-semibold">
                    {participants.length}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className={
              toggleNames && participants.length > 0
                ? "flex flex-col bg-white p-4 rounded-lg mb-2 mt-2  border border-[#38A37F] fixed z-10 shadow-md shadow-[#38A37F]"
                : ""
            }
          >
            {toggleNames &&
              participants.map((person) => {
                return (
                  <div className="flex justify-between">
                    <h2
                      className="text-[#38A37F] font-bold mr-4"
                      key={person.id}
                    >
                      {person.name}
                    </h2>
                    <button
                      className="text-lg text-[#38A37F] font-bold"
                      onClick={() => deletePerson(person.id)}
                    >
                      x
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <h2 className="text-[#38A37F] text-3xl font-semibold mb-2">
        Add participant names to bill...
      </h2>
      <div>
        <input
          value={namesText}
          className="rounded-lg border border-[#38A37F] py-0.5 mt-6 text-center text-[#38A37F] font-semibold outline-none"
          type="text"
          onChange={(e) => setNamesText(e.target.value)}
        />

        <button
          className="text-[#38A37F] font-bold bg-white border border-[#38A37F] px-3 py-0.5 rounded-lg ml-2"
          onClick={addParticipants}
        >
          Add person
        </button>
      </div>

      <button className="text-[#38A37F] font-bold bg-white border border-[#38A37F] px-2 py-1 rounded-lg mt-16">
        <Link to="/dashboard"> continue </Link>
      </button>

      <p className="text-[#38A37F] text-sm mt-2">
        press continue when all names have been added...
      </p>
    </div>
  );
}

export default Names;
