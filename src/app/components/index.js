import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addtoSubscribed } from '../lib/actions'
import img from "./subscribe.svg"



export const Navbar = ({ filter, setFiltering }) => {
  const items = useSelector(state => state.items)
  return (
    <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand crimson" to="/">Events</Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ml-auto Subscribed">
          <div>
            <form className="search form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setFiltering(e.target.value.length > 0)
                  filter(e.target.value)
                }}
              />
            </form>
          </div>
          <div className="menu-right">
            <Link to="/Subscribed">
              <img src={img} width="50" height="50" />
            </Link>
            <span class="badge badge-pill badge-success">{items.length > 0 && items.length}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};


export const Card = props => {
  const { item } = props
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="285"
          height="170"
          src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.name}.jpg`}
        />
        <p className="card-desc">{item.desc.split(",",2)}...</p>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h5>{item.name}</h5>
            </div>
            <div className="col-sm-6">
              <p>
                Start : {item.start}
              </p>
              <p>
                End : {item.end}
              </p>
              <button className="btn btn-warning btn-sm" data-toggle="modal" data-target={`#${item.eventtype}`}>view Event</button>
            </div>
          </div>
        </div>
      </div>
      <Modal item={item} />
    </div>
  );
};


export const Modal = ({ item }) => {
  const dispatch = useDispatch()
  const add = (item) => {
    dispatch(addtoSubscribed(item))
  }
  return (
    <div
      class="modal fade "
      id={item.eventtype}
      data-backdrop="static"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel"><b>Event name : </b>{item.name}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
            </button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="320"
                  height="190"
                  src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.name}.jpg`}
                />
              </div>
              <div className="col-sm">
                <h5><b>Description about the event: </b> {item.desc}</h5>
                <br />
                <h4 className="start">Start: {item.start} - End: {item.end}</h4> <br />
                <br />
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
              onClick={() => add(item)}
            >
              Add to Subscribed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export const List = props => {
  const { data, category, updateSubscribed } = props

  return (
    <div className="col-sm">
      <div className="row">
        {data.map(item => <Card key={item.eventtype} item={item} updateSubscribed={updateSubscribed} />)}
      </div>
    </div>
  );
};

export const SideMenu = ({ loadCategory, category }) => {
  const links = ["Sports", "Gamers", "Festival", "Music", "Seminars"]
  return (
    <div className="col-sm-2 sidebar" >
      <ul>
        {links.map((link, index) => {
          return (<h3 className={category == index && 'active'} key={index} onClick={() => loadCategory(index)}>{link}</h3>)
        })}
      </ul>
    </div>
  )
}