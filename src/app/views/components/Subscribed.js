import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/App.css'
import { upadateSubscribed, romoveFromSubscribed } from '../../lib/actions'

const Row = (props) => {
    const { id, details } = props.item
    const dispatch = useDispatch()

    const remove = id => {
        dispatch(romoveFromSubscribed(id))
    }
    useEffect(() => {
        dispatch(upadateSubscribed(id))
    }, [])
    return (
        <tr>
            <td>{details.name}</td>
            <td>{details.eventtype}</td>
            <td>{details.start}</td>
            <td>{(details.end)}</td>
            <td>{(details.desc)}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger remove"

                    onClick={() => remove(id)}>
                    X
                </button>
            </td>
        </tr>
    );
}

const Table = ({ items }) => {
    return (
        <table>
            <tr>
                <th width="300">Event</th>
                <th width="200">EventType</th>
                <th width="150">start</th>
                <th width="150">End</th>
                <th width="1000">Description</th>
            </tr>
            {items.map(item => {
                return (<Row item={item} />)
            })}
        </table>
    );
}

export const SubscribedPage = () => {
    const items = useSelector(state => state.items)

    return (
        <Fragment>
            <div className="container">
                <h1>Events you have subscribed to :</h1>
                <div className="row">
                    <div className="col-sm Subscribed">
                        <Table items={items} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}