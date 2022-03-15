export default{
    convertDataToJsonFormat(data, typeData){
        let jsonFormat = "";
        let spaceInit = 2;
        if(data.length!=0){
            jsonFormat = "{\n";
            data.forEach((it, id) => {
                if(it.type!="object"){
                    jsonFormat += `${this.addSpace(spaceInit)}"${it.name}": "${it.example}"`;
                }

                if(data.length>(id+1) && it.type!="object"){
                    jsonFormat += ",\n";
                }

                if(typeData=="object" && data.length > 2 && id==1){
                    jsonFormat += `${this.addSpace(spaceInit)}"data":  {\n`;
                    spaceInit = 8;
                }else if(typeData=="array" && data.length > 2 && id==1){
                    jsonFormat += `${this.addSpace(spaceInit)}"data":  [ {\n`;
                    spaceInit = 8;
                }

                if((typeData=="object" || typeData=="array") && it.type=="object"){
                    jsonFormat += `${this.addSpace(spaceInit)}"${it.name}":  `;
                    jsonFormat += this.objToString(it.example, spaceInit);
                    jsonFormat += ",\n";
                }

                if(typeData=="object" && data.length > 2 && data.length==(id+1)){
                    jsonFormat += `\n${this.addSpace(2)}}`;
                }else if(typeData=="array" && data.length > 2 && data.length==(id+1)){
                    jsonFormat += `\n${this.addSpace(2)}} ]`;
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
    },

    objToString(obj, space) {
        let newSpace = space * 2;
        var formatObjectJson = []; Object.keys(obj).forEach((k)=> {
            formatObjectJson.push(`${this.addSpace(newSpace)}"${k}"`+": "+`"${obj[k]}"`);
        });
        formatObjectJson = "{ \n"+formatObjectJson.join(', \n')+`\n${this.addSpace(space)} }`;
        return formatObjectJson;
    }
      
}