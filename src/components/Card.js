import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectedTheme } from "../redux/features/changeThemes/themeSlice";
import ModalContent from "./subComponents/ModalContent";
import Modal from "react-bootstrap/Modal";
import AdjustOutlinedIcon from "@material-ui/icons/AdjustOutlined";
import ErrorIcon from "@material-ui/icons/Error";
import { Tooltip } from "@material-ui/core";
import moment from "moment";
import "./componentsStyle/card.css";

export default function Card({
  index,
  type,
  installDate,
  lastMaintenance,
  status,
  floor,
  key,
  id,
}) {
  const [show, setShow] = useState(false);
  const theme = useSelector(selectedTheme);

  const lastMaintenanceDate = moment(lastMaintenance).format();

  console.log(id);

  return (
    <div className={`card-product ${theme}`} onClick={() => setShow(!show)}>
      {/* Card content 👇👇 */}
      <div style={{ display: "flex" }}>
        <div className="card-product-infos">
          <h2>
            Machine {index + 1} - {type}
          </h2>
          <p>
            last Maintenance:{" "}
            <strong> {lastMaintenanceDate.substring(0, 10)}</strong>
          </p>
          <p>
            install date: <strong> {installDate}</strong>
          </p>
        </div>
      </div>

      {/* machine status 👇👇 */}
      <Tooltip title="online" placement="left-start">
        <div className="card-machine-status">
          {status === "running" ? (
            <AdjustOutlinedIcon style={{ color: "green" }} />
          ) : status === "errored" ? (
            <ErrorIcon style={{ color: "red" }} />
          ) : (
            <AdjustOutlinedIcon style={{ color: "red" }} />
          )}
        </div>
      </Tooltip>

      {/* Modal 👇👇 */}
      <Modal show={show}>
        <ModalContent id={id} title={`Machine ${index + 1} - floor ${floor}`} />
      </Modal>
    </div>
  );
}
