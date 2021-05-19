import React, { useState } from 'react'

function Main() {
    const url = 'https://raw.githubusercontent.com/invictustech/test/main/README.md'
    const [data, setData] = useState([]);

    const [n, f] = useState([]);
    const apiGet = () => {
        fetch(url)
            .then((response) => response.text())
            .then((text) => {
                setData(text);
            });
        f(document.getElementById("input").value);
    }

    const correction = data.toString().toLowerCase().replace(/  [^a-zA-Z ]/g, "").split(" ");
    const output = []

    //occurrence of each word
    for (var i = 0; i < correction.length; i++) {
        var word = correction[i];
        if (isNaN(word)) {
            if (output[word] === undefined) {
                output[word] = 1;
            } else {
                output[word] += 1;
            }
        }
    }

    var a = parseInt(n);
    //sorting  in decreasing order
    const sortable = Object.fromEntries(
        Object.entries(output).sort(([, a], [, b]) => b - a));

    //creating object of keys and values(words and occurrences)
    const pp = []
    var c = 0;

    for (const e of Object.keys(sortable)) {
        if (c !== a) {
            pp[e] = sortable[e];
            c += 1;
        } else {
            break;
        }
    }


    const s1 = {
        backgroundColor: "black",
        color: "white",
        width: "30%",
        border: "5px solid white",
        padding: "40px",
        margin: "30px",
    };


    const s2 = {

        border: "1px solid white",
        width: "60%",
        margin: "70px"
    };

    return ( <
        div style = {
            {
                backgroundColor: "grey",
                margin: "70px",
                padding: "20px"
            }
        } >
        <
        h1 style = {
            { fontFamily: "sans-serif" }
        } > < /h1><center> <
        b > Enter number of top most words to be counted: < /b><input style={{ backgroundColor: "black", color: "white", }} type="number" id="input" name="number"></input > < br / >
        <
        button style = {
            {
                padding: "23px",
                margin: "40px",
                marginLeft: "10px",
                marginTop: "70px",
                backgroundColor: "black",
                borderRadius: "70px",
                color: "white"
            }
        }
        onClick = { apiGet } >
        Search < /button > < /center > < br / >
        <
        center > <
        div style = { s1 } >
        <
        table style = { s2 } > < center >
        <
        thead >
        <
        tr >
        <
        th style = { s2 } > Words < /th> <
        th style = { s2 } > Occurence < /th> < /
        tr > <
        /thead> <
        tbody > {
            Object.entries(pp).map(([key, value]) => ( <
                tr style = { s2 }
                key = { key } > < td style = { s2 } > { key } < /td> < td style={s2} > {value} < /td > < /tr >
            ))
        } < /
        tbody > < /center > < /
        table > < /
        div > < /center > < /
        div >
    )
}


export default Main;