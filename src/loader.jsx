import React, { Component, useEffect, useState } from 'react';
import './loader.css'

const Loader = () => {

    // let loading = document.querySelector(".loading");
    //  let letters = loading.textContent.split("");
    //  loading.textContent = "";
    //  letters.forEach((letter, i) => {
    //    let span = document.createElement("span");
    //    span.textContent = letter;
    //    span.style.animationDelay = `${i / 5}s`;
    //    loading.append(span);
    //  });

    return (
        <div class="loading">Loading</div>
    )
}

export default Loader