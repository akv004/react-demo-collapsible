import React, { Fragment, useRef, useState } from "react";
import "./class-subclass.scss";
import AngleRight from "./AngleRight";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faEllipsisV from "@fortawesome/fontawesome-free-solid/faEllipsisV";

export const Accordion = props => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const { subClasses } = props;

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <div className="accordion">
        <button className={`mybutton ${setActive}`} onClick={toggleAccordion}>
          <AngleRight className={`${setRotate}`} width={20} fill={"#777"} />
          <p className="accordion__title">
            {props.class.driverClassName} - {props.class.driverClassId}
          </p>
        </button>
        <FontAwesomeIcon
          className="vertical-ellipsis"
          icon={faEllipsisV}
          color={"#777"}
        />
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div>
          {subClasses.map(el => {
            return (
              <div
                key={`${el.driverSubclassName} - ${el.driverSubclassId}`}
                className="subclass accordion__title"
              >
                {el.driverSubclassName} - {el.driverSubclassId}
                <FontAwesomeIcon
                  className="vertical-ellipsis"
                  icon={faEllipsisV}
                  color={"#777"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ClassSubClass = props => {
  //const addMappingModal  = useSelector(state => state[ADD_MAPPING_MODAL]);

  //const positionClassSubclass = addMappingModal.position1ClassSubclass

  //const d = groupBy(positionClassSubclass,"driverClassId");

  // const res = Object.keys(d).map(i => (
  //     {
  //         class: {
  //             driverClassId: d[i][0].driverClassId,
  //             driverClassName: d[i][0].driverClassName
  //         },
  //         subclasses: d[i]
  //     }
  // ));

  const res = [
    {
      class: { driverClassId: "1", driverClassName: "abc" },
      subclasses: [
        {
          driverClassId: "1",
          driverClassName: "abc",
          driverSubclassId: "1",
          driverSubclassName: "test"
        },
        {
          driverClassId: "1",
          driverClassName: "abc",
          driverSubclassId: "2",
          driverSubclassName: "test"
        },
        {
          driverClassId: "1",
          driverClassName: "abc",
          driverSubclassId: "3",
          driverSubclassName: "test"
        }
      ]
    },
    {
      class: { driverClassId: "2", driverClassName: "xyz" },
      subclasses: [
        {
          driverClassId: "2",
          driverClassName: "xyz",
          driverSubclassId: "3",
          driverSubclassName: "test"
        },
        {
          driverClassId: "2",
          driverClassName: "abc",
          driverSubclassId: "5",
          driverSubclassName: "test"
        }
      ]
    }
  ];

  return (
    <Fragment>
      <div className="subclass position-header">
        Position 1
        <FontAwesomeIcon
          className="vertical-ellipsis"
          icon={faEllipsisV}
          color={"#777"}
        />
      </div>
      {res.map(d => (
        <Accordion
          key={`${d.class}-${d.subclasses}`}
          class={d.class}
          subClasses={d.subclasses}
          content=""
        />
      ))}
    </Fragment>
  );
};
