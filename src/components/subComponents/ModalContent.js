import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "@material-ui/core/Table";
import axios from "axios";

function ModalContent({ title, id }) {
  const url = `https://machinestream.herokuapp.com/api/v1/machines/${id}`;

  const [lastYearEvents, setLastYearEvents] = useState([]);

  async function fetchData() {
    const lastYearEvents = await axios.get(url).then((resp) => {
      setLastYearEvents(resp.data.data.events);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.clear();

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h4>Events last year:</h4>
          <Table striped bordered hover>
            {lastYearEvents.slice(0, 4).map((event, index) => (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{event.timestamp.substring(0, 10)}</td>
                  <td>{event.status}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </Modal.Body>
    </>
  );
}

export default ModalContent;
