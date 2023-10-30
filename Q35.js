let data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

let ar = csvToArray(data);
println(JSON.stringify(ar));

function csvToArray(data)
{
    let arLines = data.split("\n");

    for(let i = 0; i < arLines.length; i++)
    {
        let arLine = arLines[i].split(";");
        arLines[i] = arLine;
    }
    
    return arLines;
}