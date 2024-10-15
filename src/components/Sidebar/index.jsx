import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import {
    handleNewsSource,
    handleIsLoading,
    handleActiveNewsSource,
    searchTabData,
    resetTabData, populateTabData,
} from "../../store/actions";
import "./Sidebar.scss";

const staticCategories = {
    IT: [
        { name: "AI Research", title: "AI Research Overview" },
        { name: "Machine Learning", title: "Introduction to ML" }
    ],
    MBA: [
        { name: "Finance", title: "Finance Basics" },
        { name: "Marketing", title: "Marketing Strategies" }
    ],
    Literature: [
        { name: "Poetry", title: "Famous Poetry" },
        { name: "Novels", title: "Best Classic Novels" }
    ],
    // Add more static categories if needed
};

function Sidebar() {
    const dispatch = useDispatch();
    const { url, proxy_url, api_key, newsSource, tabData } = useSelector(
        (state) => state
    );
    const [searchText, setSearchText] = useState("");

    const handleChangeNewsSource = (selectedCategory) => {
        const staticData = staticCategories[selectedCategory]; // Fetch the static data
        if (staticData) {
            dispatch(handleNewsSource(selectedCategory)); // Update selected source in Redux
            dispatch(populateTabData(staticData)); // Populate the tab data for the selected category
        } else {
            console.error(`No data found for category: ${selectedCategory}`);
        }
    };

    const handleSearch = async (event) => {
        setSearchText(event.target.value.toLowerCase());
        dispatch(searchTabData(searchText));
    };

    const handleClearSearchBar = () => {
        setSearchText("");
        dispatch(resetTabData());
    };

    return (
        <div className="sidebar-container">
            <div className="search-container">
                <div className="search-container2">
                    <input
                        type="text"
                        value={searchText}
                        placeholder="Search"
                        onChange={handleSearch}
                        className="searchField"
                    />
                    {searchText.length === 0 ? (
                        <i className="fas fa-search searchIcon"></i>
                    ) : (
                        <i
                            className="fas fa-times-circle searchIcon"
                            onClick={handleClearSearchBar}
                        ></i>
                    )}
                </div>
            </div>
            <div className="tabsParent-container">
                <div className="tabs-container">
                    {tabData.map((dt) => {
                        return (
                            <div
                                key={dt.name}
                                className={`nSource ${newsSource === dt.name ? "activeNewsSource" : ""
                                    }`}
                                onClick={(e) => handleChangeNewsSource(dt.name)}
                            >
                                <img
                                    src="/talksport.png"
                                    alt={dt.title}
                                    className="logo-img"
                                />
                                <span className="d-title">{dt.title}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
