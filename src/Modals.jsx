import React, { useState } from 'react';
import { Col, Row, Modal, Input, message } from 'antd/es';
import MentionsTagsComponent from './MentionsTagsComponent';
import Data from './data.json';


const Modals = ( props ) => {
  const [hashtags, setHashtags] = useState(Data.hashtags);
  const [mentions, setMentions] = useState(state.mentions);
  const [description, setDescription] = useState(state.description);
  const [email, setEmail] = useState(state.email);
  const [firstname, setFirstname] = useState(state.firstname);
  const [lastname, setLastname] = useState(state.lastname);
  const [phoneNumber, setPhoneNumber] = useState(state.phoneNumber);

  


  const uploadPicture = () => {
    alert("J'upload une image avec la description : " + description + " et les hashtags " + hashtags + " et les mentions " + mentions);
  }

  const updateHashtags = (value) => {
    setHashtags(value);
  }

  const updateMentions = (value) => {
    setMentions(value);
  }

  const updateProfile = () => {
    props.closeEditProfilModal();
    message.success('Profile well updated', 3);
  }

  return (
    <>
      <Modal title="Upload a picture" okText="Upload" visible={props.uploadModal} onOk={uploadPicture} onCancel={() => props.setUploadModal(false)}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Description:</b>
            <Input id="description" title="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Col>
        </Row>
        <MentionsTagsComponent type="mentions" value={mentions} title="Mention a user" setValue={updateMentions} />
        <MentionsTagsComponent type="tags" value={hashtags} title="Hashtags" setValue={updateHashtags} />
      </Modal>

      <Modal title="Edit your account" okText="Update" visible={props.editProfilModal} onOk={updateProfile} onCancel={() => props.setEditProfilModal(false)}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>EMail</b>
            <Input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Firstname</b>
            <Input id="firstname" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Lastname</b>
            <Input id="lastname" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Phone number</b>
            <Input id="email" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

const state = {
  email: 'myprofile@thp.fr',
  phoneNumber: '0601020304',
  firstname: 'TheHacking',
  lastname: 'Project',
  profileData: {
    username: 'RefactoProject',
    email: 'myprofile@thp.fr',
    phoneNumber: '0601020304',
    createdAt: '2020-02-23T07:50:17.335Z',
    firstname: 'TheHacking',
    lastname: 'Project',
    profilePicture: 'https://blog.thehackingproject.org/wp-content/uploads/2019/03/short_white-1.png',
  }
}

export default Modals;