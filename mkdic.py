with open("dictionary.txt","r") as d:
    with open("parsed_dictionary.txt",'w') as pd:
        pd.write("var dic = new Set([\n")
        for line in d:
            pd.write("\t\""+line.strip()+"\",\n")
        pd.write("]);")
