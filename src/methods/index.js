export default{
    convertDataToJsonFormat(data, typeJson){
        let jsonFormat = "";
        let spaceInit = 2;
        if(data.length!=0){
            jsonFormat = "{\n";
            data.forEach((it, id) => {
                jsonFormat += `${this.addSpace(spaceInit)}"${it.name}": "${it.example}"`;

                if(data.length>(id+1)){
                    jsonFormat += ",\n";
                }

                if(typeJson=="response" && data.length > 2 && id==1){
                    jsonFormat += `${this.addSpace(spaceInit)}"data":  {\n`;
                    spaceInit = 8;
                }

                if(typeJson=="response" && data.length > 2 && data.length==(id+1)){
                    jsonFormat += `\n${this.addSpace(2)}}`;
                }
            });

            jsonFormat += "\n}";
        }

        return jsonFormat;
    },

    addSpace(number){
        let space = ""
        for (let index = 0; index < number; index++) {
            space += " ";
        }
        return space
    }
}