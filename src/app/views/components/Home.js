import React from 'react'
import { List, SideMenu } from '../../components'



export const Home = props => {
    const{isFiltering,filterRed,list,category,loadCategory,updateSubscribed} = props
    return (
        <div className="container"> 
            <div className="row">
                <SideMenu loadCategory={loadCategory} category={category} />
                <div className="col-sm">
                    <div className="row">
                        <List data={isFiltering ? filterRed : list[category]} category={category}  updateSubscribed={updateSubscribed} />
                    </div>
                </div>
            </div>
        </div>)
}