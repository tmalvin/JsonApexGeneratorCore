using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

public static class Helper {
    //JSON to Variable Conversion
    //Handle Reserved Words
    //Handle Sub Branches
    public static List<String> jsonToClass(String jsonStr) {
        List<String> lstVars = new List<String>();

        //Parse JSON
        JsonDocument parsedJSON = JsonDocument.Parse(jsonStr);

        foreach(JsonProperty property in parsedJSON.RootElement.EnumerateObject()) {
            lstVars.Add(parseVarType(property));
        }
        lstVars.Remove("");
        return lstVars;
    }
    
    //This will keep the Mapping between JSONType and Apex Primitives
    private static String parseVarType (JsonProperty property) {
        String apexType = "";
        switch (property.GetType().FullName) {
            case "String":
                apexType = "String " + property.Name + " { get; set; }";
            break;
            case "Int32":
                apexType = "Integer " + property.Name + " { get; set; }";
            break;
            //Handle Subobjects
            //Handle Arrays
        }
        return apexType;
    }

    //Create Templates here
}