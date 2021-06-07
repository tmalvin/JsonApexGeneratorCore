using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

public static class Helper {
    //JSON to Variable Conversion
    //Handle Reserved Words
    private static List<String> reserved = new List<String>() { "abstract", "activate", "and", "any", "array", "as", "asc", "autonomous", 
			"begin", "bigdecimal", "blob", "boolean", "break", "bulk", "by", "byte", 
			"case", "cast", "catch", "char", "class", "collect", "commit", "const", "continue", "currency", 
			"date", "datetime", "decimal", "default", "delete", "desc", "do", "double", 
			"else", "end", "enum", "exception", "exit", "export", "extends", 
			"false", "final", "finally", "float", "for", "from", 
			"global", "goto", "group", 
			"having", "hint", 
			"if", "implements", "import", "in", "inner", "insert", "instanceof", "int", "integer", "interface", "into", 
			"join", 
			"like", "limit", "list", "long", "loop", 
			"map", "merge", 
			"new", "not", "null", "nulls", "number", 
			"object", "of", "on", "or", "outer", "override", 
			"package", "parallel", "pragma", "private", "protected", "public", 
			"retrieve", "return", "rollback", 
			"select", "set", "short", "sObject", "sort", "static", "string", "super", "switch", "synchronized", "system", 
			"testmethod", "then", "this", "throw", "time", "transaction", "trigger", "true", "try", 
			"undelete", "update", "upsert", "using", 
			"virtual", "void", 
			"webservice", "when", "where", "while" };

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
        String propertyName = property.Name;
        if (reserved.Contains(propertyName)) {
            propertyName = "_" + propertyName;
        }

        switch (property.GetType()) {
            case typeof(String):
                apexType = "String " + propertyName + " { get; set; }";
            break;
            case typeof(int):
                apexType = "Integer " + propertyName + " { get; set; }";
            break;
            //Handle Subobjects
            //Handle Arrays
        }
        return apexType;
    }

    //Create Templates here
}