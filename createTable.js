 // Selection and generation of the table
            selectTable = function(){
                if (document.getElementById("selector").value == "data1"){
                    url = false ? "data1.csv": "https://raw.githubusercontent.com/GHernandezRetuerto/Assignments2-3/master/data1.csv"
                    console.log("data1 selected")
                    d3.select("dataTable").text("") // This clears the previous table
                    d3.csv(url, // opens the csv
                    (d,i,c) => {
                        d3.select("dataTable") //selects the table created
                        .append("tr") // creates a row
                        .selectAll("td") // gets all the cells for that row
                        .data(c).join("td").text(e => d[e]) // fills the cells with its corresponding text
                    })
                    console.log("Table created with data 1")
                }
                else if (document.getElementById("selector").value == "data2"){
                    url = false ? "data2.csv": "https://raw.githubusercontent.com/GHernandezRetuerto/Assignments2-3/master/data2.csv"
                    console.log("data2 selected")
                    d3.select("dataTable").text("") // This clears the previous table
                    d3.csv(url,
                    (d,i,c) => {
                        d3.select("dataTable")
                        .append("tr")
                        .selectAll("td")
                        .data(c).join("td").text(e => d[e])
                    })
                    console.log("Table created with data 2")
                }
                else {console.log("error: no data selected") }
            }