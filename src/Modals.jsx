import React, { useState } from 'react';
import { Button, Col, Row, Modal, List, Tag, Input, message } from 'antd/es';
import MentionsTagsComponent from './MentionsTagsComponent';


const Modals = ( props ) => {
  const [hashtags, setHashtags] = useState('');
  const [mentions, setMentions] = useState('');
  const [description, setDescription] = useState('');

  
  const deletePic = () => {
    alert("Je supprime la publcation avec l'id : " + posts[props.previewItem].id);
  }

  const updatePic = () => {
    alert("J'update la publcation avec l'id : " + posts[props.previewItem].id);
  }

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
    let tmp = state.profileData;
    tmp.email = state.email;
    tmp.firstname = state.firstname;
    tmp.lastname = state.lastname;
    tmp.phoneNumber = state.phoneNumber;
    this.setState({ profileData: tmp, editProfilModal: false });
    message.success('Profile well updated', 3);
  }

  return (
    <>
      <Modal 
        width={520} 
        visible={props.previewPublicationModal} 
        onCancel={ () => props.closePreview() }
        footer={
          <Row type="flex">
            <Col span={12} className="text-center">
              <Button type="ghost" icon="edit" onClick={updatePic}>Edit</Button>
            </Col>
            <Col span={12} className="text-center">
              <Button type="danger" icon="delete" onClick={deletePic}>Delete</Button>
            </Col>
          </Row>
        }
      >
        <Row type="flex" align="middle">
          <Col xs={24} md={12} className="text-center">
            <img src={posts[props.previewItem].imageUrl} width={200} height={200} alt={posts[props.previewItem].description} />
          </Col>
          <Col xs={24} md={12}>
            <div>
              <b>Description: </b>
              <p>{posts[props.previewItem].description}</p>
            </div>
            <div>
              <b>Hashtag:</b>
              <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={posts[props.previewItem].hashtags}
                renderItem={(tag) => (
                  <List.Item>
                    <Tag>{`${tag}`}</Tag>
                  </List.Item>
                )}
              />
            </div>
            <div>
              <b>Mention:</b>
              <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={posts[props.previewItem].mentions}
                renderItem={(user) => (
                  <List.Item>
                    <Tag>{`@${user}`}</Tag>
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </Modal>

{/*       <Modal title="Upload a picture" okText="Upload" visible={props.uploadModal} onOk={uploadPicture} onCancel={() => props.closeUploadModal(false)}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Description:</b>
            <Input id="description" title="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Col>
        </Row>
        <MentionsTagsComponent type="mentions" value={mentions} title="Mention a user" setValue={updateMentions} />
        <MentionsTagsComponent type="tags" value={hashtags} title="Hashtags" setValue={updateHashtags} />
      </Modal>

      <Modal title="Edit your account" okText="Update" visible={props.editProfilModal} onOk={updateProfile} onCancel={() => closeEditProfilModal}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>EMail</b>
            <Input id="email" type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Firstname</b>
            <Input id="firstname" type="text" value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Lastname</b>
            <Input id="lastname" type="text" value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Phone number</b>
            <Input id="email" type="text" value={this.state.phoneNumber} onChange={(e) => this.setState({ phoneNumber: e.target.value })} />
          </Col>
        </Row>
      </Modal> */}
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

const posts = [
  {
    imageUrl: 'https://f1.pngfuel.com/png/951/574/485/react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-png-clip-art.png',
    description: 'This is a Javascript logo',
    hashtags: ['#Javascript', '#reactJS'],
    mentions: ['TheHackingProject'],
    id: 1,
  },
  {
    imageUrl: 'https://www.tuannguyen.tech/wp-content/uploads/2019/01/react.png',
    description: 'This is the React logo',
    hashtags: ['#React', '#formation'],
    mentions: ['THP'],
    id: 2,
  },
  {
    imageUrl: 'https://avatars2.githubusercontent.com/u/25484553?s=200&v=4',
    description: 'The Hacking Project logo',
    hashtags: ['#THP', '#TheHackingProject'],
    mentions: ['youhou', 'week7'],
    id: 3,
  }
];

export default Modals;