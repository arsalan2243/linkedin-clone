import styled from 'styled-components'
import { FcPicture, FcVideoFile, FcList, FcCalendar } from 'react-icons/fc'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import React, { useState } from 'react'
import PostModal from './PostModal'
const Main = (props) => {
  const [showModel, setShowModel] = useState("close")


  const handleClose = (e) => {
    e.preventDefault()
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModel) {
      case 'open':
        setShowModel('close');
        break;
      case 'close':
        setShowModel('open');
        break;

      default:
        setShowModel('close');
        break;
    }
  }
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src='/images/user.svg' alt='' />
          <button onClick={handleClose}>Start a post</button>
        </div>
        <div>
          <button>
            <a>
              <FcPicture />
            </a>
            <span>Photo</span>
          </button>
          <button>
            <a>
              <FcVideoFile />
            </a>
            <span>Video</span>
          </button>
          <button>
            <a>
              {' '}
              <FcCalendar />
            </a>
            <span>Event</span>
          </button>
          <button>
            <a>
              <FcList />
            </a>
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <ShardActor>
            <a>
              <img src='/images/user.svg' alt='' />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <a>
                <IoEllipsisHorizontal />
              </a>
            </button>
          </ShardActor>
          <Description>text</Description>
          <SharedImg>
            <a>
              <img src='/images/tree.jpg' alt='picture of a tree in jungle' />
            </a>
          </SharedImg>
          <SocoialCounts>
            <li>
              <button>
                <img
                  src={
                    'https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb'
                  }
                />
                <span>310</span>
                <img
                  src={
                    'https://www.userflow.nl/images/Linkedin-Support-Icon-HeartinHand250.png'
                  }
                  style={{ height: '15px' }}
                />
                <span>132</span>
                <img
                  src={
                    'https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f'
                  }
                />

                <span>75</span>
              </button>
            </li>
            <li>
              <a>5 comments</a>
            </li>
          </SocoialCounts>
          <SocialAction>
            <button>
              <img
                src='https://www.userflow.nl/images/Linkedin-Like-Icon-Thumbup250.png'
                alt='like button'
              />
              <span>Like</span>
            </button>
            <button>
              <img src='/images/comment.png' alt='comment image' />
              <span>Comments</span>
            </button>
            <button>
              <img src='/images/share-link.png' alt='comment image' />
              <span>Share</span>
            </button>
            <button>
              <img src='/images/send.png' alt='comment image' />
              <span>Send</span>
            </button>
          </SocialAction>
        </Article>
      </div>
      <PostModal showModel={showModel} handleClose={handleClose} />
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
`
const ShareBox = styled.div`
  padding-top: 5px;
  text-align: center;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      border: none;
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      display: flex;
      align-items: center;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        a {
          font-size: 30px;
          margin: 0 4px 0 -2px;
        }

        span {
          color: #70b5f9;
        }
      }
    }
  }
`

const Article = styled.div`
  //padding-top: 5px;
  overflow: visible;
  text-align: center;
  //overflow: hidden;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
  display: flex;
  flex-direction: column;
  //color: #958b7b;
  margin: 0 0 8px;
  background: white;
`

const ShardActor = styled.div`
  //padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    text-align: left;
    margin-right: 0;
    position: absolute;
    right: 1px;
    top: -1px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 31px;
  }
`

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

const SocoialCounts = styled.ul`
  background-color: transparent;
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      border: none;
      display: flex;
      background-color: transparent;
    }
  }
`

const SocialAction = styled.div`
  align-items: center;
  display: flex;
  margin: 0;
  justify-content: space-evenly;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    width: 100px;
    height: 50px;
    border: none;
    background-color: transparent;
    border-radius: 5px;

    &:hover {
      background: rgba(45, 45, 45, 0.1);
    }

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }

    img {
      height: 75%;
      width: 25%;
    }

    span {
      font-size: 12px;
    }
  }
`

export default Main
