import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import db from "../../assets/db/data.json";
import {
    toggleHamburgerIconVisibility,
    populateTabData,
    changeUrl,
    handleNewsSource,
    handleIsLoading,
    handleActiveNewsSource,
} from "../../store/actions";
import "./Header.css";

function Header() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const { url, proxy_url, api_key, newsSource, isHamburgerIconVisible } = state;

    function handleHamburgerIconClick() {
        dispatch(toggleHamburgerIconVisibility(!isHamburgerIconVisible));
    }

    const handleSelectChange = async (event) => {
        let selectedSource = event.target.value;
        let dUrl = selectedSource === "IT" ? "sources" : "country";
        await dispatch(changeUrl(dUrl));
        await dispatch(handleNewsSource(db[selectedSource][0].name));
        await dispatch(populateTabData(db[selectedSource]));
        await dispatch(handleIsLoading(true));
        const nUrl = `https://newsapi.org/v2/top-headlines?${url}=${newsSource}&apiKey=${api_key}`;

        axios.post(`${proxy_url}/getNews`, { url: nUrl }).then((res) => {
            dispatch(handleIsLoading(false));
            dispatch(handleActiveNewsSource(res.data.articles));
        });
    };

    return (
        <div className="header">
            <span className="hamburger-icon">
                <i onClick={handleHamburgerIconClick} className="fas fa-bars"></i>
            </span>
            <span className="app-title">AI Books Hub</span>
            <div className="row-centered">
                <div className="choose-source-container">
                    <div className="menu-item" onClick={() => handleSelectChange("IT")}>IT</div>
                    <div className="menu-item" onClick={() => handleSelectChange("countries")}>Literature</div>
                    <div className="menu-item" onClick={() => handleSelectChange("countries")}>Textbooks</div>
                    <div className="menu-item" onClick={() => handleSelectChange("categories")}>MBA</div>
                    <div className="menu-item" onClick={() => handleSelectChange("categories")}>School</div>
                    <div className="menu-item" onClick={() => handleSelectChange("categories")}>Economy</div>
                    <div className="menu-item" onClick={() => handleSelectChange("categories")}>History</div>
                    <div className="menu-item" onClick={() => handleSelectChange("categories")}>Arts</div>
                    <div className="menu-item" onClick={() => handleSelectChange("categories")}>Science</div>
                    <div className="menu-item" onClick={() => handleSelectChange("categories")}>Professional</div>
                    <div className="menu-item" onClick={() => handleSelectChange("categories")}>Society</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
