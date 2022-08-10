import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://image.shutterstock.com/image-vector/initial-logo-letter-me-linked-260nw-698163265.jpg" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus itaque maxime ipsum ad harum officiis facere, non, nobis sed, quis quisquam explicabo autem doloribus impedit.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>

                </div>
            </div>
        </div>
    )
}
