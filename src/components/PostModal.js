import React, { useState } from 'react'
import styled from 'styled-components'
const PostModal = (props) => {
    const [editer, setEditer] = useState('')
    const reset = (e) => {
        setEditer('')
        props.handleClose(e)
    }

    return (
        <>
            {props.showModel === 'open' &&
                <Container>
                    <Content>
                        <Header>
                            <h2>Create a new post</h2>
                            <button onClick={(event) => reset(event)}>
                                <img
                                    style={{ width: '20px', height: '20px' }}
                                    src='/images/close.png'
                                    alt=''
                                />
                            </button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                <img src='/images/user.svg' alt='' />
                                <span>Name</span>
                            </UserInfo>
                            <Editor>
                                <textarea
                                    value={editer}
                                    onChange={(e) => setEditer(e.target.value)}
                                    placeholder='What do want to say?'
                                    autoFocus={true}
                                ></textarea>
                            </Editor>

                        </SharedContent>
                        <SharedCreation>
                            <AttachAssets>
                                <AssetButton>
                                    <img
                                        src='/images/image-upload.png'
                                        style={{ height: '32px' }}
                                        alt='picture_share'
                                    />
                                </AssetButton>
                                <AssetButton>
                                    <img
                                        src='/images/video-upload.png'
                                        style={{ height: '32px' }}
                                        alt='viedo_share'
                                    />
                                </AssetButton>
                            </AttachAssets>

                            <SharedComment>
                                <AssetButton>
                                    <img
                                        src='/images/comments.png'
                                        style={{ height: '32px' }}
                                        alt='viedo_share'
                                    />
                                    Anyone
                                </AssetButton>
                            </SharedComment>
                            <PostButton>Post</PostButton>
                        </SharedCreation>
                    </Content>
                </Container>
            }
        </>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
`

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1 solid rgba(0, 0, 0 0.15);
  line-height: 1.5;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);

    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    img {
      pointer-events: none;
    }
  }
`
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`
const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0 0.5);
`
const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`

const SharedComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 15);
  ${AssetButton} {
    img {
      margin-right: 5px;
    }
  }
`

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-right: 16px;
  padding-left: 16px;
  background: #0a66c2;
  color: white;
  &:hover {
    background: #004182;
  }
`
const Editor = styled.div`
padding: 12px 24px;
textarea{
    width: 100%;
    min-height:100px;
    resize: none;

}
input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
}

`;

export default PostModal
