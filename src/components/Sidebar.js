import React, { useState } from "react";
import {
  Button,
  Modal,
  Nav,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewContactModel from "./NewContactModel";
import NewConversationModel from "./NewConversationModel";

const CONVERSATIONS_KEY = "conversation";
const CONTACTS_KEY = "contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY;

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <TabContainer activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent className="border-end overflow-auto flex-grow-1">
          <TabPane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </TabPane>
          <TabPane eventKey={CONTACTS_KEY}>
            <Contacts />
          </TabPane>
        </TabContent>
        <div className="p-2 border-top border-end small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? "Conversation" : "Contact"}
        </Button>
      </TabContainer>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModel closeModal={closeModal} />
        ) : (
          <NewContactModel closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
