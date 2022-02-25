// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { useState } from 'react';
import { Avatar, Button, Card, Col, Icon, Row } from 'antd/es';
import Modals from './Modals';
import Data from './data.json';
import Publication from './Components/Publication';


const App = () => {
  const [editProfilModal, setEditProfilModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);

  const profile = Data.profileData;

  const formatDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }

  return (
    <div style={{ margin: 50 }}>
      <Modals 
        uploadModal={uploadModal}
        setUploadModal={setUploadModal}
        editProfilModal={editProfilModal}
        setEditProfilModal={setEditProfilModal} 
      />

      <Row type="flex" align="middle" justify="center">
        <Col sm={16} xs={24}>
          <Card bordered>
            <Row type="flex" align="middle" justify="center">
              <Col md={14} sm={16} xs={24}>
                <Row type="flex" justify="space-between">
                  <Col span={10} className="text-center">
                    <Avatar size={100} icon="user" className="profil-pic" src={profile.profilePicture} />
                    <h3>{`${profile.firstname} ${profile.lastname}`}</h3>
                  </Col>
                  <Col span={10}>
                    <p>
                      <Icon type="user" className="p-icon" />
                      {profile.username}
                    </p>
                    <p>
                      <Icon type="mail" className="p-icon" />
                      {profile.email}
                    </p>
                    <p>
                      <Icon type="phone" className="p-icon" />
                      {profile.phoneNumber}
                    </p>
                    <p>
                      <Icon type="calendar" className="p-icon" />
                      {formatDate(profile.createdAt)}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={10} sm={16} xs={24} className="text-center">
                <Button type="ghost" icon="setting" onClick={ () => setEditProfilModal(true) }>Edit account</Button>
                <br />
                <br />
                <Button type="ghost" icon="upload" onClick={ () => setUploadModal(true) }>Upload a picture</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row type="flex" justify="center">
        <Col sm={18} xs={24}>
          <Col span={24} className="container text-center">
            <h2>
              <Icon type="save" />
              <span className="span-icon">Publications</span>
            </h2>
            <Publication id={0}/>
            <Publication id={1}/>
            <Publication id={2}/>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default App;
